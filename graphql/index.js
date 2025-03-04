import { ApolloServer } from "@apollo/server";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { startStandaloneServer } from "@apollo/server/standalone";
import { ApolloServerErrorCode } from "@apollo/server/errors";
import { typeDefs } from "./schema.js";
import db from "./_db.js";
import { GraphQLError } from "graphql";

const resolvers = {
  Query: {
    games() {
      return db.games;
    },
    game(_, args) {
      // handle in case user inputs invalid game id
      if (args.id < 1 || args.id >= db.games.length) {
        throw new GraphQLError("Inavalid ID", {
          extensions: {
            code: ApolloServerErrorCode.BAD_USER_INPUT,
            args: "id",
            http: {
              status: 400,
            },
          },
        });
      }
      return db.games.find((game) => game.id === args.id);
    },
    authors() {
      return db.authors;
    },
    author(_, args) {
      // handle in case user inputs invalid author id
      if (args.id < 1 || args.id >= db.authors.length) {
        throw new GraphQLError("Inavalid ID", {
          extensions: {
            code: ApolloServerErrorCode.BAD_USER_INPUT,
            args: "id",
          },
        });
      }
      return db.authors.find((author) => author.id === args.id);
    },
    reviews() {
      return db.reviews;
    },
    review(_, args) {
      // handle in case user inputs invalid review id
      if (args.id < 1 || args.id >= db.reviews.length) {
        throw new GraphQLError("Inavalid ID", {
          extensions: {
            code: ApolloServerErrorCode.BAD_USER_INPUT,
            args: "id",
          },
        });
      }
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
  },
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const server = new ApolloServer({
  schema,
  formatError: (formattedError, error) => {
    return {
      ...formattedError,
      extensions: {
        code: formattedError.extensions.code,
        args: formattedError.extensions.args,
        stacktrace: null,
      },
    };
  },
  // includeStacktraceInErrorResponses: false,
});

const PORT = 4000;

const { url } = await startStandaloneServer(server, {
  listen: { port: PORT },
});

console.log(`Server ready at: ${url}`);
