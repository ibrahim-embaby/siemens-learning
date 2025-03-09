import "reflect-metadata";
import {
  Arg,
  Field,
  ID,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from "type-graphql";

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
  addUser(@Arg("name") name: string, @Arg("role") role: string): User {
    const newUser = { id: `${users.length + 1}`, name, role };
    users.push(newUser);
    return newUser;
  }
}

export { UserResolver };
