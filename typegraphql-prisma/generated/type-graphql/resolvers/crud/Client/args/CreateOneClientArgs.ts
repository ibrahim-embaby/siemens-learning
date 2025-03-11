import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClientUncheckedCreateInput } from "../../../inputs/ClientUncheckedCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneClientArgs {
  @TypeGraphQL.Field((_type) => ClientUncheckedCreateInput, {
    nullable: false,
  })
  data!: ClientUncheckedCreateInput;
}
