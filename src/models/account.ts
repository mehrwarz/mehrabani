import { AdapterAccountType } from "next-auth/adapters";
import { Users } from "./user";
import { integer, pgTable, uuid, primaryKey, varchar, text, serial } from "drizzle-orm/pg-core";

export const Accounts = pgTable('accounts',
    {
        id: serial('id').primaryKey(),
        userId: uuid('user_id').notNull().references(() => Users.id, { onDelete: "cascade" }),
        type: varchar("token_type").$type<AdapterAccountType>().notNull(),
        provider: text("provider").notNull(),
        providerAccountId: text("provider_account_id").notNull(),
        refresh_token: text("refresh_token"),
        access_token: text("access_token"),
        expires_at: integer("expires_at"),
        token_type: text("token_type"),
        scope: text("scope"),
        id_token: text("id_token"),
        session_state: text("session_state"),
    },
    (account) => [{
        compoundKey: primaryKey({
            columns: [account.provider, account.providerAccountId]
        })
    }],
)

export type InsertAccounts = typeof Accounts.$inferInsert;
export type SelectAccounts = typeof Accounts.$inferSelect;

