import { pgTable, text, timestamp, primaryKey, } from "drizzle-orm/pg-core";

export const VerificationTokens = pgTable("verification_tokens", {
    identifier: text("identifier").notNull(),
    expiresAt: timestamp("expires_at"),
    token: text("token").notNull()
},
    (VerificationTokens) => [
        {compoundKey: primaryKey({
            columns: [VerificationTokens.identifier, VerificationTokens.token]
        })}
    ]
);

export type InsertVerificationTokens = typeof VerificationTokens.$inferInsert
export type SelectVerificationTokens = typeof VerificationTokens.$inferSelect

