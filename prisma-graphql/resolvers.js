const resolvers = {
  Query: {
    info: () => "hello",
    feed: async (parent, args, context) => {
      const links = await context.prisma.link.findMany();
      return links;
    },
  },
  Mutation: {
    post: async (parnet, args, context) => {
      const link = await context.prisma.link.create({
        data: {
          description: args.description,
          url: args.url,
        },
      });
      return link;
    },
  },
};

module.exports = resolvers;
