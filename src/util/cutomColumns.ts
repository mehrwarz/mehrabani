import { timestamp } from  'drizzle-orm/pg-core';
export const  Timestamps = {
    updatedAt: timestamp("updated_at"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    modifiedAt: timestamp("modified_at"),
}