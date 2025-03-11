import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostUncheckedCreateWithoutAuthorInput } from "../inputs/PostUncheckedCreateWithoutAuthorInput";
import { PostUncheckedUpdateWithoutAuthorInput } from "../inputs/PostUncheckedUpdateWithoutAuthorInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostUpsertWithWhereUniqueWithoutAuthorInput", {})
export class PostUpsertWithWhereUniqueWithoutAuthorInput {
  @TypeGraphQL.Field((_type) => PostWhereUniqueInput, {
    nullable: false,
  })
  where!: PostWhereUniqueInput;

  @TypeGraphQL.Field((_type) => PostUncheckedUpdateWithoutAuthorInput, {
    nullable: false,
  })
  update!: PostUncheckedUpdateWithoutAuthorInput;

  @TypeGraphQL.Field((_type) => PostUncheckedCreateWithoutAuthorInput, {
    nullable: false,
  })
  create!: PostUncheckedCreateWithoutAuthorInput;
}
