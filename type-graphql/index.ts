import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { pubSub, UserResolver } from "./userResolver";
import { ApolloServer } from "@apollo/server";
import express from "express";
import http from "http";
import { WebSocketServer } from "ws";
import { useServer } from "graphql-ws/lib/use/ws";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { expressMiddleware } from "@apollo/server/express4";

async function startServer() {
  const app = express();

  const schema = await buildSchema({
    resolvers: [UserResolver],
    pubSub: pubSub,
  });

  const httpServer = http.createServer(app);
  const wsServer = new WebSocketServer({
    server: httpServer,
    path: "/graphql",
  });

  const serverCleanup = useServer({ schema }, wsServer);

  const server = new ApolloServer({
    schema,
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      {
        async serverWillStart() {
          return {
            async drainServer() {
              await serverCleanup.dispose();
            },
          };
        },
      },
    ],
  });

  await server.start();
  app.use("/graphql", express.json(), expressMiddleware(server));

  httpServer.listen({ port: 4000 }, () => {
    console.log("🚀 Server running at http://localhost:4000/graphql");
  });
}

startServer();
