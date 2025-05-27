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

export const Users = pgTable(
  'users',
  {
    id: uuid('id').primaryKey().default(sql`gen_random_uuid()`), // Primary Key for the clinician
    firstName: varchar('first_name', { length: 100 }).notNull(),
    lastName: varchar('last_name', { length: 100 }).notNull(),
    middleInitial: varchar('middle_initial', { length: 1 }), // Optional
    preferredName: varchar('preferred_name', { length: 100 }), // Optional
    email: varchar('email', { length: 255 }).notNull().unique(), // Unique for login/contact
    phoneNumberPrimary: varchar('phone_number_primary', { length: 20 }),
    phoneNumberSecondary: varchar('phone_number_secondary', { length: 20 }), // Optional
    addressLine1: varchar('address_line_1', { length: 255 }),
    addressLine2: varchar('address_line_2', { length: 255 }), // Optional
    city: varchar('city', { length: 100 }),
    stateProvince: varchar('state_province', { length: 50 }),
    postalCode: varchar('postal_code', { length: 20 }),
    country: varchar('country', { length: 100 }),
    dateOfBirth: date('date_of_birth').notNull(),
    password: varchar('password').notNull(),
    role: userRoleEnum().default('viewer').notNull(),
    designation: varchar('designation', { length: 50 }),
    emailVerifiedAt: timestamp('email_verified_at'),
    photoUrl: varchar('photo_url'),
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
    index('name_idx').on(users.firstName, users.lastName),
  ],
);

export type NewUser = typeof Users.$inferInsert;
export type User = typeof Users.$inferSelect;