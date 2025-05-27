import { pgEnum, pgTable, date,integer, varchar } from "drizzle-orm/pg-core";
import { serial } from "drizzle-orm/pg-core";
import { States } from "@/models/states";
import { Countries } from "@/models/countries";
import { Timestamps } from "@/util/cutomColumns";

export const gender = pgEnum('gender', ['male', 'female', 'other']);

export const Clients = pgTable( 'clients',{
    id: serial('id').primaryKey().notNull(),
    firstName: varchar('first_name', { length: 100 }).notNull(),
    lastName: varchar('last_name', { length:100 }).notNull(),
    dateOfBirth: date('date_of_birth').notNull(),
    gender: gender('gender').notNull(),
    diagnosticDate: date('diagnosis_date'),
    primaryContactPerson: varchar('primary_contact_name').notNull(),
    primaryContactPhone: varchar('primary_contact_phone').notNull(),
    primaryContactEmail: varchar('primary_contact_email',{ length: 100 }),
    streetAddress: varchar('street_address').notNull(),
    apartmentNumber: varchar('apartment_number', { length: 15 }),
    city: varchar('city').notNull(),
    stateId: integer('state_id').notNull().references(()=> States.id,{onDelete: 'restrict', onUpdate: "cascade"}),
    countryId: integer('country_id').notNull().references( ()=> Countries.id , {onDelete: 'restrict', onUpdate: "cascade" } ),
    statue: varchar('statud', {length: 50}).default('On Hold'),
    ...Timestamps,
})

export type InsertClients = typeof Clients.$inferInsert;
export type SelectClients = typeof Clients.$inferSelect;
