import { migrate } from 'drizzle-orm/postgres-js/migrator';
import db from "@/_lib/database"

const migrateDb = async () => {
  try {
    console.log('Running migrations...');
    await migrate(db, { migrationsFolder: './drizzle' });
    console.log('Migrations finished.');
  } catch (error) {
    console.error('Error running migrations:', error);
  }
};

migrateDb();