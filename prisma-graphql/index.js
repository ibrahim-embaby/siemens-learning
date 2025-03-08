const { ApolloServer } = require("@apollo/server");
const { PrismaClient } = require("@prisma/client");
const { expressMiddleware } = require("@apollo/server/express4");
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const resolvers = require("./resolvers");

const app = express();
const prisma = new PrismaClient();

async function startServer() {
  const server = new ApolloServer({
    typeDefs: fs.readFileSync(path.join(__dirname, "schema.graphql"), "utf-8"),
    resolvers,
  });

  await server.start();

  app.use(
    "/graphql",
    cors(),
    express.json(),
    expressMiddleware(server, {
      context: async ({ req }) => {
        return { prisma };
      },
    })
  );

  const PORT = 4000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}/graphql`);
  });
}

startServer().catch((error) => {
  console.error("Error starting the server:", error);
});
