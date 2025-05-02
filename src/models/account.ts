import { AdapterAccountType } from "next-auth/adapters";
import { User } from "./user";
import { integer, pgTable, uuid, primaryKey, varchar, text } from "drizzle-orm/pg-core";



export const Accounts = pgTable("accounts", {
    userId: uuid("user_id").notNull().references(() => User.id, { onDelete: "cascade" }),
    type: varchar("type").$type<AdapterAccountType>().notNull(),
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
    (account) => ({
        compoundKey: primaryKey({
            columns: [account.provider, account.providerAccountId]
        }),
    })
);