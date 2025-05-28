import { varchar, pgTable, uuid, timestamp, pgEnum, index, boolean, integer } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';
import { Timestamps } from '@/util/cutomColumns';
import { UserRoles } from './ruserRole';

export const userRoleEnum = pgEnum('user_role', ['admin', 'editor', 'viewer', 'user']);

/**
 * Defines the Drizzle ORM table schema for the 'users' table.
 */

export const Users = pgTable( 'users', {
    id: uuid('id').primaryKey().default(sql`gen_random_uuid()`), // Primary Key for the clinician
    email: varchar('email', { length: 255 }).notNull().unique(), // Unique for login/contact
    password: varchar('password').notNull(),
    role: userRoleEnum().notNull().default('viewer'),
    accessLevel: integer("access_level").notNull().default(0),
    designation: varchar('designation', { length: 50 }),
    emailVerifiedAt: timestamp('email_verified_at'),
    lastLoginDate: timestamp('last_login_date', { withTimezone: true }),
    isActiveUser: boolean('is_active_user').notNull().default(true),
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
  ],
);

export type NewUser = typeof Users.$inferInsert;
export type User = typeof Users.$inferSelect;