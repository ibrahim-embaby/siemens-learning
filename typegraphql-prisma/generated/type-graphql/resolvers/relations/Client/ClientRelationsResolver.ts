import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Client } from "../../../models/Client";
import { Post } from "../../../models/Post";
import { ClientPostsArgs } from "./args/ClientPostsArgs";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Client)
export class ClientRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => [Post], {
    nullable: false,
  })
  async posts(
    @TypeGraphQL.Root() client: Client,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: ClientPostsArgs,
  ): Promise<Post[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .user.findUniqueOrThrow({
        where: {
          id: client.id,
        },
      })
      .posts({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }
}
