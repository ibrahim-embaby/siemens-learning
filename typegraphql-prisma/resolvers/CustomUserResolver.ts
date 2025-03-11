import "reflect-metadata";
import { Ctx, FieldResolver, Query, Resolver, Root } from "type-graphql";
import { Post, Client } from "../generated/type-graphql";
import { PrismaClient } from "@prisma/client";

// Add Context type
type Context = {
  prisma: PrismaClient;
};

@Resolver((_of) => Client)
export class CustomUserResolver {
  // adding computed field
  @FieldResolver((type) => Post, { nullable: true })
  async favoritePost(
    @Root() user: Client,
    @Ctx() { prisma }: Context
  ): Promise<Post | undefined> {
    const [favoritePost] = await prisma.user
      .findUniqueOrThrow({ where: { id: user.id } })
      .posts({ take: 1 });

    return favoritePost;
  }

  // custom query
  @Query((returns) => Client, { nullable: true })
  async bestUser(@Ctx() { prisma }: Context): Promise<Client | null> {
    return await prisma.user.findUniqueOrThrow({
      where: { email: "ibrahim@siemens.com" },
    });
  }
}
