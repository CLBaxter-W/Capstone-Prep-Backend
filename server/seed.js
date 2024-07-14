const { prisma, bcrypt } = require("../src/shared/shared");
async function seed() {
  try {
    await prisma.user.deleteMany({});
    const users = await prisma.user.create({
      data: {
        email: "im@test.com",
        firstname: "Tony",
        lastname: "Stark",
        password: String(await bcrypt.hash("jarvis", 10)),
      },
    });
    console.log(users);
    console.log("Database is seeded.");
  } catch (err) {
    console.error(err);
  } finally {
    await prisma.$disconnect(); // Disconnect Prisma Client
  }
}
if (require.main === module) {
  seed();
}

module.exports = seed;
