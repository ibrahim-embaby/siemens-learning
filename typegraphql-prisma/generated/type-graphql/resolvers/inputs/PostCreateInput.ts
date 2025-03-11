import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClientCreateNestedOneWithoutPostsInput } from "../inputs/ClientCreateNestedOneWithoutPostsInput";

@TypeGraphQL.InputType("PostCreateInput", {})
export class PostCreateInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  title!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  content?: string | undefined;

  @TypeGraphQL.Field((_type) => ClientCreateNestedOneWithoutPostsInput, {
    nullable: false,
  })
  author!: ClientCreateNestedOneWithoutPostsInput;
}
