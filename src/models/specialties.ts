import { pgTable, serial, varchar} from 'drizzle-orm/pg-core';
import { Timestamps } from '@/util/cutomColumns';


// Specialties (e.g., Early Intervention, Challenging Behaviors)
export const Specialties = pgTable('specialties', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 100 }).notNull().unique(), // e.g., 'Early Intervention', 'Social Skills'
  ...Timestamps,
});