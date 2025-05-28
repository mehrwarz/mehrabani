import { varchar, pgTable, serial } from 'drizzle-orm/pg-core';
import { Timestamps } from '@/util/cutomColumns';

export const UserRoles = pgTable("user_roles", {
  id: serial("id").primaryKey(),
  roleName: varchar("role_name", { length: 100 }).notNull().unique(),
  permissions: varchar("permissions", { length: 500 }), // JSON or ENUM defining privileges
  ...Timestamps
});
  
export type NewRole = typeof UserRoles.$inferInsert;
export type Role = typeof UserRoles.$inferSelect;