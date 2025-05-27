
import { Timestamps } from "@/util/cutomColumns";
import { pgTable, integer, serial, date, varchar, boolean } from "drizzle-orm/pg-core";
import { Clients } from "@/models/client";
import { Behaviors } from "./behavior";


export const ClientBehaviors = pgTable('client_behaviors', {
        id: serial('id').primaryKey().notNull(),
        clientId: integer('client_id').notNull().references(() => Clients.id, { onDelete: "restrict" }),
        behaviorID: integer('behavior_id').notNull().references(()=> Behaviors.id, { onDelete: "restrict"}),
        isTargetBehavior: boolean('is_target_beharior').notNull().default(false),
        description: varchar('description',{ length: 256 }).notNull(),
        startDate: date('start_date'),
        endDate: date('end_date'),
        ...Timestamps,
    }
);

export type InsertClientBehaviors = typeof ClientBehaviors.$inferInsert;
export type SelectClientBehaviors = typeof ClientBehaviors.$inferSelect;

