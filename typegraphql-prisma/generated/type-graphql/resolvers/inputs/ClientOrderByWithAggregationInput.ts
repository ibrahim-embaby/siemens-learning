import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClientAvgOrderByAggregateInput } from "../inputs/ClientAvgOrderByAggregateInput";
import { ClientCountOrderByAggregateInput } from "../inputs/ClientCountOrderByAggregateInput";
import { ClientMaxOrderByAggregateInput } from "../inputs/ClientMaxOrderByAggregateInput";
import { ClientMinOrderByAggregateInput } from "../inputs/ClientMinOrderByAggregateInput";
import { ClientSumOrderByAggregateInput } from "../inputs/ClientSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ClientOrderByWithAggregationInput", {})
export class ClientOrderByWithAggregationInput {
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrderInput, {
    nullable: true,
  })
  age?: SortOrderInput | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  kind?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => ClientCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: ClientCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => ClientAvgOrderByAggregateInput, {
    nullable: true,
  })
  _avg?: ClientAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => ClientMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: ClientMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => ClientMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: ClientMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => ClientSumOrderByAggregateInput, {
    nullable: true,
  })
  _sum?: ClientSumOrderByAggregateInput | undefined;
}
