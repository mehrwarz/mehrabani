import { pgTable, serial, varchar } from "drizzle-orm/pg-core";

// Clinician Types (e.g., BCBA, RBT, SLP)
export const ClinicianTypes = pgTable('clinician_types', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 50 }).notNull().unique(), // e.g., 'BCBA', 'RBT', 'SLP'
});
