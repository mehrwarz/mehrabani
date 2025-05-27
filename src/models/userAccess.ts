import { varchar, pgTable, uuid, index } from 'drizzle-orm/pg-core';
import { Timestamps } from '@/util/cutomColumns';
import { Users } from "@/models/user"

export const UserAccess = pgTable('user_access', {
    userId: uuid('user_id').notNull().references( () => Users.id, {onDelete: "cascade", onUpdate: "cascade"} ),
    access: varchar('access').notNull(),
    ...Timestamps,
  }, (UserAccess) => [ index('user_id_ndx').on(UserAccess.userId)] )

  
export type NewUser = typeof Users.$inferInsert;
export type User = typeof Users.$inferSelect;