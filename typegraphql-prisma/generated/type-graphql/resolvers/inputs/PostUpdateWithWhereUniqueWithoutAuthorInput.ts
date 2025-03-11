import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostUncheckedUpdateWithoutAuthorInput } from "../inputs/PostUncheckedUpdateWithoutAuthorInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostUpdateWithWhereUniqueWithoutAuthorInput", {})
export class PostUpdateWithWhereUniqueWithoutAuthorInput {
  @TypeGraphQL.Field((_type) => PostWhereUniqueInput, {
    nullable: false,
  })
  where!: PostWhereUniqueInput;

  @TypeGraphQL.Field((_type) => PostUncheckedUpdateWithoutAuthorInput, {
    nullable: false,
  })
  data!: PostUncheckedUpdateWithoutAuthorInput;
}
