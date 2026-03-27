// src/prisma/client.ts
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
// Create a connection pool (recommended for production-like behavior)
// const connectionString = process.env.DATABASE_URL!;
const connectionString = 'postgresql://roba:mysecret123@localhost:5432/shopdb';
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });
export default prisma;
