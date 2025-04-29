
import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { User } from "./Users";

export const Sessions = pgTable("sessions", {
    sessionToken: text("session_token").primaryKey(),
    userId: uuid("user_id").notNull().references(() => User.id, { onDelete: "cascade" }),
    expires: timestamp("expires", { mode: "date" }).notNull(),
});