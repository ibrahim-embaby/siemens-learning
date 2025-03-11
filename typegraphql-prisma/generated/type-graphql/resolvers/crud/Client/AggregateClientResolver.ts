import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateClientArgs } from "./args/AggregateClientArgs";
import { Client } from "../../../models/Client";
import { AggregateClient } from "../../outputs/AggregateClient";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Client)
export class AggregateClientResolver {
  @TypeGraphQL.Query((_returns) => AggregateClient, {
    nullable: false,
  })
  async aggregateClient(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateClientArgs,
  ): Promise<AggregateClient> {
    return getPrismaFromContext(ctx).user.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
