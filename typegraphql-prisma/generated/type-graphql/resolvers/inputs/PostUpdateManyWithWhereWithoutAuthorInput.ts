import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostScalarWhereInput } from "../inputs/PostScalarWhereInput";
import { PostUncheckedUpdateManyWithoutAuthorInput } from "../inputs/PostUncheckedUpdateManyWithoutAuthorInput";

@TypeGraphQL.InputType("PostUpdateManyWithWhereWithoutAuthorInput", {})
export class PostUpdateManyWithWhereWithoutAuthorInput {
  @TypeGraphQL.Field((_type) => PostScalarWhereInput, {
    nullable: false,
  })
  where!: PostScalarWhereInput;

  @TypeGraphQL.Field((_type) => PostUncheckedUpdateManyWithoutAuthorInput, {
    nullable: false,
  })
  data!: PostUncheckedUpdateManyWithoutAuthorInput;
}
