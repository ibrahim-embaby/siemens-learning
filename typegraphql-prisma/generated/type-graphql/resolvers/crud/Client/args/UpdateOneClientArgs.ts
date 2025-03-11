import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClientUncheckedUpdateInput } from "../../../inputs/ClientUncheckedUpdateInput";
import { ClientWhereUniqueInput } from "../../../inputs/ClientWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneClientArgs {
  @TypeGraphQL.Field((_type) => ClientUncheckedUpdateInput, {
    nullable: false,
  })
  data!: ClientUncheckedUpdateInput;

  @TypeGraphQL.Field((_type) => ClientWhereUniqueInput, {
    nullable: false,
  })
  where!: ClientWhereUniqueInput;
}
