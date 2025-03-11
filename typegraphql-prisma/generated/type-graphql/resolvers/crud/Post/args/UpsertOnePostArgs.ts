import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostUncheckedCreateInput } from "../../../inputs/PostUncheckedCreateInput";
import { PostUncheckedUpdateInput } from "../../../inputs/PostUncheckedUpdateInput";
import { PostWhereUniqueInput } from "../../../inputs/PostWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePostArgs {
  @TypeGraphQL.Field((_type) => PostWhereUniqueInput, {
    nullable: false,
  })
  where!: PostWhereUniqueInput;

  @TypeGraphQL.Field((_type) => PostUncheckedCreateInput, {
    nullable: false,
  })
  create!: PostUncheckedCreateInput;

  @TypeGraphQL.Field((_type) => PostUncheckedUpdateInput, {
    nullable: false,
  })
  update!: PostUncheckedUpdateInput;
}
