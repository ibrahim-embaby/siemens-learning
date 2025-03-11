import * as TypeGraphQL from "type-graphql";

export enum ClientScalarFieldEnum {
  id = "id",
  email = "email",
  age = "age",
  password = "password",
  kind = "kind",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}
TypeGraphQL.registerEnumType(ClientScalarFieldEnum, {
  name: "ClientScalarFieldEnum",
  description: undefined,
});
