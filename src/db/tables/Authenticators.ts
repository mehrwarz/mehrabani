
import { integer, pgTable, uuid, primaryKey, boolean, text } from "drizzle-orm/pg-core";
import { User } from "./Users";

export const Authenticators = pgTable("authenticators", {
    credentialID: text("credential_id").notNull().unique(),
    userId: uuid("user_id").notNull().references(() => User.id, { onDelete: "cascade" }),
    providerAccountId: text("providerAccount_id").notNull(),
    credentialPublicKey: text("credential_public_key").notNull(),
    counter: integer("counter").notNull(),
    credentialDeviceType: text("credential_device_type").notNull(),
    credentialBackedUp: boolean("credential_backedUp").notNull(),
    transports: text("transports"),
},
    (authenticator) => ({
        compositePK: primaryKey({
            columns: [authenticator.userId, authenticator.credentialID],
        }),
    })
)