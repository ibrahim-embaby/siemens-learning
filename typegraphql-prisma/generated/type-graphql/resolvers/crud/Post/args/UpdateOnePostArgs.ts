import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostUncheckedUpdateInput } from "../../../inputs/PostUncheckedUpdateInput";
import { PostWhereUniqueInput } from "../../../inputs/PostWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePostArgs {
  @TypeGraphQL.Field((_type) => PostUncheckedUpdateInput, {
    nullable: false,
  })
  data!: PostUncheckedUpdateInput;

  @TypeGraphQL.Field((_type) => PostWhereUniqueInput, {
    nullable: false,
  })
  where!: PostWhereUniqueInput;
}
