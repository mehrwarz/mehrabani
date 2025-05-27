import { pgTable, serial, varchar, date, integer, timestamp, text, boolean, uuid } from "drizzle-orm/pg-core";
import {Timestamps } from "@/util/cutomColumns"
import { Clients } from "./client";
import { Users } from "./user";
import { ServiceLocations } from "./serviceLocations";



export const CaseNotes = pgTable('case_notes', {
    id: serial('id').notNull().primaryKey(),
    clientId: integer('client_it').notNull().references(()=> Clients.id, {onDelete: "restrict"}),
    userId: uuid('user_id').notNull().references( ()=> Users.id,{ onDelete: 'restrict'}),
    sessionStartTime: timestamp('session_start_time').notNull(),
    sessionEndTime: timestamp('session_end_time').notNull(),
    locationId: integer('location_id').notNull().references( ()=> ServiceLocations.id,{onDelete: "restrict", onUpdate: "cascade"}),
    summaryNote: text('summary_note').notNull(),
    progressSummary: text('progress_summary'),
    status: varchar('status',{ length: 50 }).default('Unsigned'),
    ...Timestamps,
})
