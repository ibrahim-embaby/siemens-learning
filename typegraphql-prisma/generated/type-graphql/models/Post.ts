import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Client } from "../models/Client";

@TypeGraphQL.ObjectType("Post", {})
export class Post {
  @TypeGraphQL.Field((_type) => TypeGraphQL.ID, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  title!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  content?: string | null;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
  })
  createdAt!: Date;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
  })
  updatedAt!: Date;

  author?: Client;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  authorId!: string;
}
