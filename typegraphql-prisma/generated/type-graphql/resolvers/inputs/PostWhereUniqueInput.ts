import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClientRelationFilter } from "../inputs/ClientRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { PostWhereInput } from "../inputs/PostWhereInput";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("PostWhereUniqueInput", {})
export class PostWhereUniqueInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => [PostWhereInput], {
    nullable: true,
  })
  AND?: PostWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [PostWhereInput], {
    nullable: true,
  })
  OR?: PostWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [PostWhereInput], {
    nullable: true,
  })
  NOT?: PostWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  title?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, {
    nullable: true,
  })
  content?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  authorId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => ClientRelationFilter, {
    nullable: true,
  })
  author?: ClientRelationFilter | undefined;
}
