import { varchar, pgTable, uuid, timestamp , pgEnum, date} from 'drizzle-orm/pg-core';
import { Timestamps } from "@/util/timestamps"

export const userRoleEnum = pgEnum('user_role', ['admin', 'editor', 'viewer','user']);

export const User = pgTable('users', {
  userId: uuid("id").primaryKey(),
  email: varchar('email').notNull(),
  password: varchar("password"),
  firstName: varchar('first_name').notNull(),
  lastName: varchar('last_name').notNull(),
  Dob: date("Date_of_birth").notNull(),
  role: userRoleEnum('role').default('viewer'),
  emailVerified: timestamp("email_verified_at"),
  image: varchar("photo_url"),
  ...Timestamps
});

export type NewUser = typeof User.$inferInsert;
export type UserType = typeof User.$inferSelect;