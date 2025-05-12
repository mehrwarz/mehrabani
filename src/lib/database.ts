import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

const dbUrl = process.env.DATABASE_URL;

if (!dbUrl) {
  console.error("DATABASE_URL environment variable is not set.");
  throw new Error("DATABASE_URL environment variable is missing.");
}

const sql = neon(dbUrl);
const db = drizzle(sql);

export default db;