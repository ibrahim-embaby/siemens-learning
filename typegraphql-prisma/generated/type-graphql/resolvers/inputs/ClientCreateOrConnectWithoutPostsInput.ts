import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClientUncheckedCreateWithoutPostsInput } from "../inputs/ClientUncheckedCreateWithoutPostsInput";
import { ClientWhereUniqueInput } from "../inputs/ClientWhereUniqueInput";

@TypeGraphQL.InputType("ClientCreateOrConnectWithoutPostsInput", {})
export class ClientCreateOrConnectWithoutPostsInput {
  @TypeGraphQL.Field((_type) => ClientWhereUniqueInput, {
    nullable: false,
  })
  where!: ClientWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ClientUncheckedCreateWithoutPostsInput, {
    nullable: false,
  })
  create!: ClientUncheckedCreateWithoutPostsInput;
}
