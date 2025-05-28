import { pgTable, serial, varchar, timestamp } from "drizzle-orm/pg-core";

export const UserRoles = pgTable("roles", {
  id: serial("id").primaryKey(),
  roleName: varchar("role_name", { length: 100 }).notNull().unique(),
  permissions: varchar("permissions", { length: 500 }), // JSON string or ENUM
});
