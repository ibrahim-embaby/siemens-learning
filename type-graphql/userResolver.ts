import "reflect-metadata";
import {
  Arg,
  Field,
  ID,
  Mutation,
  ObjectType,
  Query,
  Resolver,
  Root,
  Subscription,
} from "type-graphql";

import { createPubSub } from "@graphql-yoga/subscription";

export const pubSub = createPubSub<{
  USER_ADDED: [User];
}>();

const users: User[] = [];

@ObjectType()
class User {
  @Field((type) => ID)
  id!: string;
  @Field()
  name!: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  role!: string;
}

@Resolver()
class UserResolver {
  @Query(() => [User])
  users() {
    return users;
  }

  @Mutation(() => User)
  addUser(
    @Arg("name") name: string,
    @Arg("role") role: string,
    @Arg("description", { nullable: true }) description?: string
  ): User {
    const newUser = { id: `${users.length + 1}`, name, role, description };
    users.push(newUser);
    pubSub.publish("USER_ADDED", newUser);
    return newUser;
  }

  @Subscription({
    topics: "USER_ADDED",
  })
  userAdded(@Root() newUser: User): User {
    return newUser;
  }
}

export { UserResolver };
