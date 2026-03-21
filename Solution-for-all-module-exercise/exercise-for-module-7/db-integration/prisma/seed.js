const { PrismaClient } = require("@prisma/client");
const { Pool } = require("pg");
const { PrismaPg } = require("@prisma/adapter-pg");

// PostgreSQL pool
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// Prisma adapter for v7
const adapter = new PrismaPg(pool, { schema: "users" });
const prisma = new PrismaClient({ adapter });

async function main() {
  // Check if user already exists
  const existing = await prisma.user.findUnique({
    where: { email: "abebe@email.com" },
  });
  if (existing) return console.log("Seed user already exists");

  // Create user with posts
  const user = await prisma.user.create({
    data: {
      name: "Abebe",
      email: "abebe@email.com",
      posts: {
        create: [
          { title: "My first post", content: "Hello world" },
          { title: "Learning Prisma", content: "ORM for Node.js" },
        ],
      },
    },
    include: { posts: true }, // include posts in returned object
  });

  console.log("User created:", user);
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();});

