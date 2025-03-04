import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  /* ======= CREATE USER  ======= */
  //   const user = await prisma.user.create({
  //     data: {
  //       name: "ibrahim",
  //       email: "ibrahim@siemens.com",
  //       age: 15,
  //     },
  //   });
  //   console.log(user); => {
  //     id: '9a856c8e-2328-477d-bbfa-eeb9c56c7312',
  //     name: 'ibrahim',
  //     age: 15,
  //     email: 'ibrahim@siemens.com',
  //     role: 'BASIC'
  //   }
  //
  /* ======= DELETE ALL USERS  ======= */
  //   const users = await prisma.user.deleteMany();
  //   console.log(users); => { count: 1 }
  /* ======= UPDATE USER  ======= */
  //   const user = await prisma.user.update({
  //     where: { id: "d36a2331-5fcb-46e2-9054-531a3714c484" },
  //     data: {
  //       age: 25,
  //     },
  //   });
  //   console.log(user); => {
  //     id: 'd36a2331-5fcb-46e2-9054-531a3714c484',
  //     name: 'ibrahim',
  //     age: 25,
  //     email: 'ibrahim@siemens.com',
  //     role: 'BASIC'
  //   }
  //
  /* ======= READ USER  ======= */
  //   const user = await prisma.user.findUnique({
  //     where: { id: "d36a2331-5fcb-46e2-9054-531a3714c484" },
  //   });
  //   console.log(user); => {
  //     id: 'd36a2331-5fcb-46e2-9054-531a3714c484',
  //     name: 'ibrahim',
  //     age: 25,
  //     email: 'ibrahim@siemens.com',
  //     role: 'BASIC'
  //   }
  //
  /* ======= DELETE USER  ======= */
  //   const user = await prisma.user.delete({
  //     where: { id: "a53b689e-fc7c-421d-8e31-0abd4003e40e" },
  //   });
  //   console.log(user); => {
  //     id: 'a53b689e-fc7c-421d-8e31-0abd4003e40e',
  //     name: 'ibrahim',
  //     age: 15,
  //     email: 'ibrahim@siemens.com',
  //     role: 'BASIC'
  //   }
  //
  /* ======= CREATE USER WITH PREFERENCE  ======= */
  //   const user = await prisma.user.create({
  //     data: {
  //       name: "ibrahim2",
  //       email: "ibrahim2@siemens.com",
  //       age: 15,
  //       userPreference: {
  //         create: {
  //           emailUpdates: true,
  //         },
  //       },
  //     },
  //     include: {
  //       userPreference: true,
  //     },
  //   });
  //   console.log(user); => {
  //     id: 'da7509ad-800f-4598-a275-905f84b6a229',
  //     name: 'ibrahim2',
  //     age: 15,
  //     email: 'ibrahim2@siemens.com',
  //     role: 'BASIC',
  //     userPreference: {
  //       id: '81b1337d-d9ed-472f-8a20-1528358e14c0',
  //       emailUpdates: true,
  //       userId: 'da7509ad-800f-4598-a275-905f84b6a229'
  //     }
  //   }
  //
  /* ======= CREATE MANY USERS  ======= */
  //   const users = await prisma.user.createMany({
  //     data: [
  //       {
  //         name: "ibrahim5",
  //         age: 23,
  //         email: "ibrahim5@siemens.com",
  //       },
  //       {
  //         name: "ibrahim6",
  //         age: 25,
  //         email: "ibrahim6@siemens.com",
  //       },
  //     ],
  //   });
  //   console.log(users); => { count: 2 }
  //
  /* ======= FILTERING OPTIONS ======= */
  //   const users = await prisma.user.findMany({
  //     where: {
  //       OR: [{ age: { gt: 15 } }, { name: { contains: "i" } }],
  //     },
  //     select: { name: true, age: true },
  //     // distinct: ["age"],
  //     // take: 2,
  //     // omit: { name: true }, => the oposite of select - you can either select or omit, but not both in the same query.
  //     // include: { userPreference: true },
  //     // orderBy: { age: "asc" },
  //     // skip: 1,
  //   });
  //   console.log(users);
  //
  /* ======= CONNECT A RELATION ======= */
  //   const user = await prisma.user.update({
  //     where: {
  //       email: "ibrahim@siemens.com",
  //     },
  //     data: {
  //       userPreference: {
  //         connect: {
  //           id: "81b1337d-d9ed-472f-8a20-1528358e14c0",
  //         },
  //       },
  //     },
  //   });
  //   const user = await prisma.user.findUnique({
  //     where: { email: "ibrahim@siemens.com" },
  //     include: {
  //       userPreference: true,
  //     },
  //   });
  //   console.log(user); => {
  //     id: '80a109bd-3db3-42b0-ae5e-aecc1d8ecc3c',
  //     name: 'ibrahim',
  //     age: 15,
  //     email: 'ibrahim@siemens.com',
  //     role: 'BASIC',
  //     userPreference: {
  //       id: '81b1337d-d9ed-472f-8a20-1528358e14c0',
  //       emailUpdates: true,
  //       userId: '80a109bd-3db3-42b0-ae5e-aecc1d8ecc3c'
  //     }
}

main()
  .catch((e) => {
    console.log(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
