import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumUserKindFilter } from "../inputs/EnumUserKindFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { PostListRelationFilter } from "../inputs/PostListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ClientWhereInput", {})
export class ClientWhereInput {
  @TypeGraphQL.Field((_type) => [ClientWhereInput], {
    nullable: true,
  })
  AND?: ClientWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ClientWhereInput], {
    nullable: true,
  })
  OR?: ClientWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ClientWhereInput], {
    nullable: true,
  })
  NOT?: ClientWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  email?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => IntNullableFilter, {
    nullable: true,
  })
  age?: IntNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => EnumUserKindFilter, {
    nullable: true,
  })
  kind?: EnumUserKindFilter | undefined;

  @TypeGraphQL.Field((_type) => PostListRelationFilter, {
    nullable: true,
  })
  posts?: PostListRelationFilter | undefined;
}
