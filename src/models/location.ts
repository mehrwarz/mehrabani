import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const Locations = pgTable('locations', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 100 }).notNull().unique(), // e.g., 'Main Clinic', 'Remote Telehealth'
  address: text('address'), // Full address for the location
});