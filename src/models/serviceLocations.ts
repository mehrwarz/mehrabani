import { pgTable, serial, varchar, date, integer, timestamp, text, boolean, uuid } from "drizzle-orm/pg-core";
import {Timestamps } from "@/util/cutomColumns"


export const ServiceLocations = pgTable('service_locations',{
    id: serial('id').primaryKey().notNull(),
    ...Timestamps

})