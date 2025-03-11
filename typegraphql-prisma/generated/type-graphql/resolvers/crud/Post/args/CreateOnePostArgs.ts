import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostUncheckedCreateInput } from "../../../inputs/PostUncheckedCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePostArgs {
  @TypeGraphQL.Field((_type) => PostUncheckedCreateInput, {
    nullable: false,
  })
  data!: PostUncheckedCreateInput;
}
