import "reflect-metadata";
import { AuthChecker, Authorized, buildSchema } from "type-graphql";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import {
  applyResolversEnhanceMap,
  resolvers,
  ResolversEnhanceMap,
} from "./generated/type-graphql";
import { PrismaClient, UserKind } from "@prisma/client";
import { CustomUserResolver } from "./resolvers/CustomUserResolver";

const prisma = new PrismaClient();

const authChecker: AuthChecker<{ user: { role: string } }> = (
  { context },
  roles
) => {
  if (!context.user) {
    return false;
  }

  if (roles.length === 0) {
    return true;
  }

  return roles.includes(context.user.role);
};

async function startServer() {
  const resolversEnhanceMap: ResolversEnhanceMap = {
    Post: {
      deleteOnePost: [Authorized(UserKind.ADMIN)],
    },
  };

  applyResolversEnhanceMap(resolversEnhanceMap);

  const schema = await buildSchema({
    resolvers: [...resolvers, CustomUserResolver],
    validate: false,
    authChecker: authChecker,
  });

  const server = new ApolloServer({
    schema,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    context: async ({ req }) => {
      const user =
        req.headers.role === "ADMIN" ? { role: UserKind.ADMIN } : undefined;

      return { prisma, user };
    },
  });

  console.log(`🚀 Server ready at ${url}`);
}

startServer().catch((err) => console.error(err));
