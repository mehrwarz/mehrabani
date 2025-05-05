import {
  varchar,
  pgTable,
  uuid,
  timestamp,
  pgEnum,
  date,
  index,
} from 'drizzle-orm/pg-core';
import { randomString } from '@/util/helpers';
import { Timestamps } from '@/util/cutomColumns';

export const userRoleEnum = pgEnum('user_role', ['admin', 'editor', 'viewer', 'user']);

/**
 * Defines the Drizzle ORM table schema for the 'users' table.
 */

export const users = pgTable(
  'users',
  {
    id: uuid('id').primaryKey().$defaultFn(randomString),
    firstName: varchar('first_name').notNull(),
    lastName: varchar('last_name').notNull(),
    dateOfBirth: date('date_of_birth').notNull(),
    email: varchar('email').notNull().unique(),
    password: varchar('password'),
    role: userRoleEnum().default('viewer'),
    emailVerifiedAt: timestamp('email_verified_at'),
    photoUrl: varchar('photo_url'),
    ...Timestamps,
  },
  (table) => [
    /**
     * Index on the 'email' column.
     * Note: Since the 'email' column already has a unique constraint defined directly,
     * this index might be redundant in some PostgreSQL versions as unique constraints often create an index automatically.
     * However, explicitly defining it can sometimes be beneficial or clearer depending on your needs and PostgreSQL configuration.
     */
      index('email_idx').on(table.email),
      index('name_idx').on(table.firstName, table.lastName),
  ],
);

export type NewUser = typeof users.$inferInsert;
export type UserType = typeof users.$inferSelect;