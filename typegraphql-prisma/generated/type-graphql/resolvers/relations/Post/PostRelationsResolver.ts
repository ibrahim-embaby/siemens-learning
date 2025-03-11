import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Client } from "../../../models/Client";
import { Post } from "../../../models/Post";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Post)
export class PostRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => Client, {
    nullable: false,
  })
  async author(
    @TypeGraphQL.Root() post: Post,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
  ): Promise<Client> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .post.findUniqueOrThrow({
        where: {
          id: post.id,
        },
      })
      .author({
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }
}
