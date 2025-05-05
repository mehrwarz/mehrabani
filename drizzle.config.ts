import { config } from 'dotenv';
import { defineConfig } from 'drizzle-kit';

// Load environment variables from .env.local
config({ path: '.env.local' });

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  throw new Error('DATABASE_URL environment variable is not defined.');
}
export default defineConfig({
  // Path to your Drizzle schema file
  schema: './src/db/schema.ts',
  // Output directory for generated migration files
  out: './src/db/migrations',
  // Database dialect (PostgreSQL in this case)
  dialect: 'postgresql',
  // Database connection details
  dbCredentials: {
    // Connection string URL.  The "!" asserts that DATABASE_URL is defined.
    url: databaseUrl,
  },
});