import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { UserResolver } from "./userResolver";
import { ApolloServer } from "apollo-server";

async function startServer() {
  // Build TypeGraphQL schema
  const schema = await buildSchema({ resolvers: [UserResolver] });

  // Create Apollo Server
  const server = new ApolloServer({ schema });

  // start the server
  server.listen().then(({ url }) => {
    console.log(`🚀 Server running at ${url}`);
  });
}

startServer();
