import { ApolloServer } from "@apollo/server";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";
import db from "./_db.js";

import { useServer } from "graphql-ws/lib/use/ws";
import { PubSub, withFilter } from "graphql-subscriptions";
import express from "express";
import http from "http";
import { expressMiddleware } from "@apollo/server/express4";
import { WebSocketServer } from "ws";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";

const pubsub = new PubSub();

const resolvers = {
  Query: {
    games() {
      return db.games;
    },
    game(_, args) {
      return db.games.find((game) => game.id === args.id);
    },
    authors() {
      return db.authors;
    },
    author(_, args) {
      return db.authors.find((author) => author.id === args.id);
    },
    reviews() {
      return db.reviews;
    },
    review(_, args) {
      return db.reviews.find((review) => review.id === args.id);
    },
  },

  Game: {
    reviews(parent) {
      return db.reviews.filter((r) => r.game_id === parent.id);
    },
  },

  Review: {
    author(parent) {
      return db.authors.find((a) => a.id === parent.author_id);
    },
    game(parent) {
      return db.games.find((g) => g.id === parent.game_id);
    },
  },

  Author: {
    reviews(parent) {
      return db.reviews.filter((r) => r.author_id === parent.id);
    },
  },

  Mutation: {
    addGame(_, args) {
      let game = {
        ...args.game,
        id: parseInt(db.games[db.games.length - 1].id) + 1,
      };
      db.games.push(game);

      return game;
    },
    deleteGame(_, args) {
      db.games = db.games.filter((g) => g.id !== args.id);

      return db.games;
    },
    updateGame(_, args) {
      db.games = db.games.map((g) => {
        if (g.id === args.id) {
          return { ...g, ...args.edits };
        }

        return g;
      });

      return db.games.find((g) => g.id === args.id);
    },

    addReview(_, args) {
      let review = {
        ...args.review,
        id: parseInt(db.reviews[db.reviews.length - 1].id) + 1,
      };
      db.reviews.push(review);

      const completeReview = {
        ...review,
        game: db.games.find((g) => g.id === review.game_id),
        author: db.authors.find((a) => a.id === review.author_id),
      };

      pubsub.publish("REVIEW_CREATED", {
        newReview: completeReview,
      });

      return review;
    },
  },

  Subscription: {
    reviewCreated: {
      subscribe: withFilter(
        () => pubsub.asyncIterator("REVIEW_CREATED"),
        (payload, variables) => {
          return true;
        }
      ),
      resolve: (payload) => {
        return payload.newReview;
      },
    },
  },
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const app = express();

const httpServer = http.createServer(app);

const server = new WebSocketServer({
  path: "/graphql",
  server: httpServer,
});

const serverCleanup = useServer({ schema }, server);

const apolloServer = new ApolloServer({
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

await apolloServer.start();
app.use("/graphql", express.json(), expressMiddleware(apolloServer));

await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));

console.log("server is running at", 4000);
