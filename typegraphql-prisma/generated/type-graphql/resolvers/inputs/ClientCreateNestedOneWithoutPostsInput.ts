import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClientCreateOrConnectWithoutPostsInput } from "../inputs/ClientCreateOrConnectWithoutPostsInput";
import { ClientUncheckedCreateWithoutPostsInput } from "../inputs/ClientUncheckedCreateWithoutPostsInput";
import { ClientWhereUniqueInput } from "../inputs/ClientWhereUniqueInput";

@TypeGraphQL.InputType("ClientCreateNestedOneWithoutPostsInput", {})
export class ClientCreateNestedOneWithoutPostsInput {
  @TypeGraphQL.Field((_type) => ClientUncheckedCreateWithoutPostsInput, {
    nullable: true,
  })
  create?: ClientUncheckedCreateWithoutPostsInput | undefined;

  @TypeGraphQL.Field((_type) => ClientCreateOrConnectWithoutPostsInput, {
    nullable: true,
  })
  connectOrCreate?: ClientCreateOrConnectWithoutPostsInput | undefined;

  @TypeGraphQL.Field((_type) => ClientWhereUniqueInput, {
    nullable: true,
  })
  connect?: ClientWhereUniqueInput | undefined;
}
