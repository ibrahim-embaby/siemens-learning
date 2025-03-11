import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnClientArgs } from "./args/CreateManyAndReturnClientArgs";
import { Client } from "../../../models/Client";
import { CreateManyAndReturnClient } from "../../outputs/CreateManyAndReturnClient";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Client)
export class CreateManyAndReturnClientResolver {
  @TypeGraphQL.Mutation((_returns) => [CreateManyAndReturnClient], {
    nullable: false,
  })
  async createManyAndReturnClient(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyAndReturnClientArgs,
  ): Promise<CreateManyAndReturnClient[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).user.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
