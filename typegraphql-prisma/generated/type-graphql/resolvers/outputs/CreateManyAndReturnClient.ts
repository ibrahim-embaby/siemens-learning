import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserKind } from "../../enums/UserKind";

@TypeGraphQL.ObjectType("CreateManyAndReturnClient", {})
export class CreateManyAndReturnClient {
  @TypeGraphQL.Field((_type) => String, {
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
  age!: number | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  password!: string;

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
}
