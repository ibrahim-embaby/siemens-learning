import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClientCountPostsArgs } from "./args/ClientCountPostsArgs";

@TypeGraphQL.ObjectType("ClientCount", {})
export class ClientCount {
  posts!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    name: "posts",
    nullable: false,
  })
  getPosts(
    @TypeGraphQL.Root() root: ClientCount,
    @TypeGraphQL.Args() args: ClientCountPostsArgs,
  ): number {
    return root.posts;
  }
}
