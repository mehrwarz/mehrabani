import { varchar, pgTable, uuid, timestamp , pgEnum, date} from 'drizzle-orm/pg-core';
import { Timestamps } from "@/util/timestamps"
import {randomString} from "@/util/helpers"

export const userRoleEnum = pgEnum('user_role', ['admin', 'editor', 'viewer','user']);

export const User = pgTable('users', {
  userId: uuid("id").primaryKey().$defaultFn(randomString()),
  firstName: varchar('first_name').notNull(),
  lastName: varchar('last_name').notNull(),
  Dob: date("Date_of_birth").notNull(),
  email: varchar('email').notNull(),
  password: varchar("password"),
  role: userRoleEnum().default('viewer'),
  emailVerified: timestamp("email_verified_at"),
  image: varchar("photo_url"),
  ...Timestamps
});

export type NewUser = typeof User.$inferInsert;
export type UserType = typeof User.$inferSelect;

