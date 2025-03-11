import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClientWhereInput } from "../inputs/ClientWhereInput";

@TypeGraphQL.InputType("ClientRelationFilter", {})
export class ClientRelationFilter {
  @TypeGraphQL.Field((_type) => ClientWhereInput, {
    nullable: true,
  })
  is?: ClientWhereInput | undefined;

  @TypeGraphQL.Field((_type) => ClientWhereInput, {
    nullable: true,
  })
  isNot?: ClientWhereInput | undefined;
}
