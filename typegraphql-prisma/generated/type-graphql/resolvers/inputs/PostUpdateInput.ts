import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClientUpdateOneRequiredWithoutPostsNestedInput } from "../inputs/ClientUpdateOneRequiredWithoutPostsNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("PostUpdateInput", {})
export class PostUpdateInput {
  @TypeGraphQL.Field((_type) => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  title?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => NullableStringFieldUpdateOperationsInput, {
    nullable: true,
  })
  content?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(
    (_type) => ClientUpdateOneRequiredWithoutPostsNestedInput,
    {
      nullable: true,
    },
  )
  author?: ClientUpdateOneRequiredWithoutPostsNestedInput | undefined;
}
