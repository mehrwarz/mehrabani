import {
  varchar,
  pgTable,
  uuid,
  timestamp,
  pgEnum,
  date,
  index,
  boolean
} from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';
import { Timestamps } from '@/util/cutomColumns';

export const userRoleEnum = pgEnum('user_role', ['admin', 'editor', 'viewer', 'user']);

/**
 * Defines the Drizzle ORM table schema for the 'users' table.
 */

export const users = pgTable(
  'users',
  {
    id: uuid('id').primaryKey().default(sql`gen_random_uuid()`),
    firstName: varchar('first_name').notNull(),
    lastName: varchar('last_name').notNull(),
    dateOfBirth: date('date_of_birth').notNull(),
    email: varchar('email').notNull().unique(),
    password: varchar('password').notNull(),
    role: userRoleEnum().default('viewer'),
    emailVerifiedAt: timestamp('email_verified_at'),
    photoUrl: varchar('photo_url'),
    isDisabled: boolean('is_disabled').default(false),
    ...Timestamps,
  },
  (users) => [
    /**
     * Index on the 'email' column.
     * Note: Since the 'email' column already has a unique constraint defined directly,
     * this index might be redundant in some PostgreSQL versions as unique constraints often create an index automatically.
     * However, explicitly defining it can sometimes be beneficial or clearer depending on your needs and PostgreSQL configuration.
     */
      index('email_idx').on(users.email),
      index('name_idx').on(users.firstName, users.lastName),
  ],
);

export type NewUser = typeof users.$inferInsert;
export type User = typeof users.$inferSelect;