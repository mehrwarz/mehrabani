import { pgTable, primaryKey, text } from "drizzle-orm/pg-core";
import { timestamp } from "drizzle-orm/pg-core";


export const VerificationTokens = pgTable('verification_token',
    {
        identifier: text("identifier").notNull(),
        token: text("token").notNull(),
        expires: timestamp("expires", { mode: "date" }).notNull(),
    },
    (verificationToken) => ({
        compositePk: primaryKey({
            columns: [verificationToken.identifier, verificationToken.token],
        }),
    })
)