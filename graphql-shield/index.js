import { ApolloServer, gql } from "apollo-server";
import { GraphQLError } from "graphql";
import { rule, shield, and } from "graphql-shield";
import { applyMiddleware } from "graphql-middleware";
import jwt from "jsonwebtoken";
import { makeExecutableSchema } from "@graphql-tools/schema";

// In-memory users
const users = [
  { id: "1", name: "Alice", role: "USER" },
  { id: "2", name: "Bob", role: "ADMIN" },
];

// JWT secret
const SECRET = "mysecret";

// Helper: Generate a token
const generateToken = (user) => jwt.sign(user, SECRET, { expiresIn: "1h" });

// Helper: Verify token
const getUser = (token) => {
  try {
    if (!token) return null;

    return jwt.verify(token, SECRET);
  } catch (error) {
    console.error("JWT Verification Error:", error.message);
    return null;
  }
};

// GraphQL Schema
const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    role: String!
  }

  type Query {
    me: User
    users: [User]
  }

  type Mutation {
    login(name: String!): String
  }
`;

// Resolvers
const resolvers = {
  Query: {
    me: (parent, args, ctx) => ctx.user,
    users: () => users, // Only admins should access this
  },
  Mutation: {
    login: (_, { name }) => {
      const user = users.find((u) => u.name === name);
      if (!user) throw new GraphQLError("User not found");
      return generateToken(user);
    },
  },
};

// GraphQL Shield Rules
const isAuthenticated = rule()((parent, args, ctx) => !!ctx.user);

const isAdmin = rule()((parent, args, ctx) => ctx.user?.role === "ADMIN");

// Permissions
const permissions = shield({
  Query: {
    me: isAuthenticated,
    users: and(isAuthenticated, isAdmin),
  },
});

// Apply middleware
const schema = makeExecutableSchema({ typeDefs, resolvers });
const schemaWithMiddleware = applyMiddleware(schema, permissions);

// Setup Server
const server = new ApolloServer({
  schema: schemaWithMiddleware,
  context: ({ req }) => {
    const token = req.headers.authorization || "";
    return { user: getUser(token.replace("Bearer ", "")) };
  },
});

// Start server
server.listen().then(({ url }) => console.log(`🚀 Server running at ${url}`));
