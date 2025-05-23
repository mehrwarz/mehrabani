import {uuid, pgTable, serial, timestamp, text } from "drizzle-orm/pg-core";
import { users } from "./user";

export const Sessions = pgTable("sessions", {
    id: serial('session_id').primaryKey(),
    userId: uuid('user_id').notNull().references(() => users.id, { onDelete: "cascade" }),
    expires: timestamp('expires_at').notNull(),
    sessionToken: text('session_token').notNull(),    
})


export type InsertSessions = typeof Sessions.$inferInsert;
export type SelectSessions = typeof Sessions.$inferSelect;


 