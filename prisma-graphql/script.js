const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const allLinks = await prisma.link.create({
    data: {
      descriotion: "Happy at Siemens Company",
      url: "www.siemens.com",
    },
  });
  console.log(allLinks);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    prisma.$disconnect();
  });
