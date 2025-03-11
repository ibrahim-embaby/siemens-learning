import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClientUncheckedUpdateWithoutPostsInput } from "../inputs/ClientUncheckedUpdateWithoutPostsInput";
import { ClientWhereInput } from "../inputs/ClientWhereInput";

@TypeGraphQL.InputType("ClientUpdateToOneWithWhereWithoutPostsInput", {})
export class ClientUpdateToOneWithWhereWithoutPostsInput {
  @TypeGraphQL.Field((_type) => ClientWhereInput, {
    nullable: true,
  })
  where?: ClientWhereInput | undefined;

  @TypeGraphQL.Field((_type) => ClientUncheckedUpdateWithoutPostsInput, {
    nullable: false,
  })
  data!: ClientUncheckedUpdateWithoutPostsInput;
}
