import { uuid, pgTable, serial, timestamp, text, integer } from "drizzle-orm/pg-core";
import { Users } from "./user";
import { Locations } from "./clinician";
import { Clients } from "./client";

export const Sessions = pgTable("sessions", {
    id: serial('session_id').primaryKey(),
    userId: uuid('user_id').notNull().references(() => Users.id, { onDelete: "cascade" }),
    serviceLocationId: integer('service_location_id').references(() => Locations.id),
    supervisorId: uuid('supervisor_id').references(() => Users.id),
    clientId: integer('client_id').notNull().references( () => Clients.id,{ onDelete: "restrict", onUpdate: "cascade"}),
    expires: timestamp('expires_at').notNull(),
    sessionToken: text('session_token').notNull(),
})


export type InsertSessions = typeof Sessions.$inferInsert;
export type SelectSessions = typeof Sessions.$inferSelect;


