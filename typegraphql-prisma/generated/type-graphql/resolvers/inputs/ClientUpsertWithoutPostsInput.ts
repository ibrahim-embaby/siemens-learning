import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClientUncheckedCreateWithoutPostsInput } from "../inputs/ClientUncheckedCreateWithoutPostsInput";
import { ClientUncheckedUpdateWithoutPostsInput } from "../inputs/ClientUncheckedUpdateWithoutPostsInput";
import { ClientWhereInput } from "../inputs/ClientWhereInput";

@TypeGraphQL.InputType("ClientUpsertWithoutPostsInput", {})
export class ClientUpsertWithoutPostsInput {
  @TypeGraphQL.Field((_type) => ClientUncheckedUpdateWithoutPostsInput, {
    nullable: false,
  })
  update!: ClientUncheckedUpdateWithoutPostsInput;

  @TypeGraphQL.Field((_type) => ClientUncheckedCreateWithoutPostsInput, {
    nullable: false,
  })
  create!: ClientUncheckedCreateWithoutPostsInput;

  @TypeGraphQL.Field((_type) => ClientWhereInput, {
    nullable: true,
  })
  where?: ClientWhereInput | undefined;
}
