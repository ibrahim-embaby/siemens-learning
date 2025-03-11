import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClientCreateOrConnectWithoutPostsInput } from "../inputs/ClientCreateOrConnectWithoutPostsInput";
import { ClientUncheckedCreateWithoutPostsInput } from "../inputs/ClientUncheckedCreateWithoutPostsInput";
import { ClientUncheckedUpdateWithoutPostsInput } from "../inputs/ClientUncheckedUpdateWithoutPostsInput";
import { ClientUpsertWithoutPostsInput } from "../inputs/ClientUpsertWithoutPostsInput";
import { ClientWhereUniqueInput } from "../inputs/ClientWhereUniqueInput";

@TypeGraphQL.InputType("ClientUpdateOneRequiredWithoutPostsNestedInput", {})
export class ClientUpdateOneRequiredWithoutPostsNestedInput {
  @TypeGraphQL.Field((_type) => ClientUncheckedCreateWithoutPostsInput, {
    nullable: true,
  })
  create?: ClientUncheckedCreateWithoutPostsInput | undefined;

  @TypeGraphQL.Field((_type) => ClientCreateOrConnectWithoutPostsInput, {
    nullable: true,
  })
  connectOrCreate?: ClientCreateOrConnectWithoutPostsInput | undefined;

  @TypeGraphQL.Field((_type) => ClientUpsertWithoutPostsInput, {
    nullable: true,
  })
  upsert?: ClientUpsertWithoutPostsInput | undefined;

  @TypeGraphQL.Field((_type) => ClientWhereUniqueInput, {
    nullable: true,
  })
  connect?: ClientWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => ClientUncheckedUpdateWithoutPostsInput, {
    nullable: true,
  })
  update?: ClientUncheckedUpdateWithoutPostsInput | undefined;
}
