
import { Timestamps } from "@/util/cutomColumns";
import { pgTable, varchar, serial } from "drizzle-orm/pg-core";

export const Behaviors = pgTable('behaviors',
    {
        id: serial('id').primaryKey().notNull(),
        behaviorName: varchar('behavior_name').notNull().unique(),
        description: varchar('description'),
        behaviorCatagory: varchar('behavior_category'),
        ...Timestamps,

    },
)

export type InsertBehaviors = typeof Behaviors.$inferInsert;
export type SelectBehaviors = typeof Behaviors.$inferSelect;

