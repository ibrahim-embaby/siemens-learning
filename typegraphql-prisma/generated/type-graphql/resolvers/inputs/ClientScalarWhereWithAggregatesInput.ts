import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumUserKindWithAggregatesFilter } from "../inputs/EnumUserKindWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ClientScalarWhereWithAggregatesInput", {})
export class ClientScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field((_type) => [ClientScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: ClientScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ClientScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: ClientScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ClientScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: ClientScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  email?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => IntNullableWithAggregatesFilter, {
    nullable: true,
  })
  age?: IntNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => EnumUserKindWithAggregatesFilter, {
    nullable: true,
  })
  kind?: EnumUserKindWithAggregatesFilter | undefined;
}
