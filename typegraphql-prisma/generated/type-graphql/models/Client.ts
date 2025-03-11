import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Post } from "../models/Post";
import { UserKind } from "../enums/UserKind";
import { ClientCount } from "../resolvers/outputs/ClientCount";

@TypeGraphQL.ObjectType("Client", {})
export class Client {
  @TypeGraphQL.Field((_type) => TypeGraphQL.ID, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  email!: string;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  age?: number | null;

  password?: string;

  @TypeGraphQL.Field((_type) => UserKind, {
    nullable: false,
  })
  kind!: "NORMAL" | "ADMIN";

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
  })
  createdAt!: Date;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
  })
  updatedAt!: Date;

  posts?: Post[];

  @TypeGraphQL.Field((_type) => ClientCount, {
    nullable: true,
  })
  _count?: ClientCount | null;
}
