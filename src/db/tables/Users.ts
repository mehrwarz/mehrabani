import { text, timestamp, varchar, pgTable, uuid, boolean } from "drizzle-orm/pg-core";
import crypto from 'crypto';

export const User = pgTable('users', {
    id: uuid('id').primaryKey().$defaultFn(() => crypto.randomUUID()).notNull(),
    name: varchar("name", { length: 255 }).notNull(),
    email: varchar("email", { length: 255 }).notNull(),
    password: text("password"),
    role: varchar("role", { length: 32 }).notNull().default("Temp"),
    department: varchar("department", { length: 255 }),
    isDisabled: boolean("is_disabled").notNull().default(false),
    emailVerified: boolean('email_verified').default(false),
    created_at: timestamp("created_at").defaultNow(),
    updated_at: timestamp("updated_at").defaultNow(),
})
