import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClientUncheckedCreateInput } from "../../../inputs/ClientUncheckedCreateInput";
import { ClientUncheckedUpdateInput } from "../../../inputs/ClientUncheckedUpdateInput";
import { ClientWhereUniqueInput } from "../../../inputs/ClientWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneClientArgs {
  @TypeGraphQL.Field((_type) => ClientWhereUniqueInput, {
    nullable: false,
  })
  where!: ClientWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ClientUncheckedCreateInput, {
    nullable: false,
  })
  create!: ClientUncheckedCreateInput;

  @TypeGraphQL.Field((_type) => ClientUncheckedUpdateInput, {
    nullable: false,
  })
  update!: ClientUncheckedUpdateInput;
}
