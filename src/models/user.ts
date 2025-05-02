import { integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';
export const User = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  age: integer('age').notNull(),
  email: text('email').notNull().unique(),
});

export type InsertUser = typeof User.$inferInsert;
export type SelectUser = typeof User.$inferSelect;