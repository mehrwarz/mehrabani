import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

const dbUrl = process.env.DATABASE_URL as string;
const sql = neon(dbUrl);
const db = drizzle(sql);

export default db;