import * as TypeGraphQL from "type-graphql";

export enum PostScalarFieldEnum {
  id = "id",
  title = "title",
  content = "content",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  authorId = "authorId",
}
TypeGraphQL.registerEnumType(PostScalarFieldEnum, {
  name: "PostScalarFieldEnum",
  description: undefined,
});
