import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClientAvgAggregate } from "../outputs/ClientAvgAggregate";
import { ClientCountAggregate } from "../outputs/ClientCountAggregate";
import { ClientMaxAggregate } from "../outputs/ClientMaxAggregate";
import { ClientMinAggregate } from "../outputs/ClientMinAggregate";
import { ClientSumAggregate } from "../outputs/ClientSumAggregate";
import { UserKind } from "../../enums/UserKind";

@TypeGraphQL.ObjectType("ClientGroupBy", {})
export class ClientGroupBy {
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

  @TypeGraphQL.Field((_type) => ClientCountAggregate, {
    nullable: true,
  })
  _count!: ClientCountAggregate | null;

  @TypeGraphQL.Field((_type) => ClientAvgAggregate, {
    nullable: true,
  })
  _avg!: ClientAvgAggregate | null;

  @TypeGraphQL.Field((_type) => ClientSumAggregate, {
    nullable: true,
  })
  _sum!: ClientSumAggregate | null;

  @TypeGraphQL.Field((_type) => ClientMinAggregate, {
    nullable: true,
  })
  _min!: ClientMinAggregate | null;

  @TypeGraphQL.Field((_type) => ClientMaxAggregate, {
    nullable: true,
  })
  _max!: ClientMaxAggregate | null;
}
