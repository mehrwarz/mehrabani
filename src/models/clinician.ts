import { pgTable, serial, text, varchar, date, integer, uniqueIndex, index } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import { Users } from './user';
import { Timestamps } from '@/util/cutomColumns';
import { ClinicianTypes } from './clinicianType';
import { Locations } from './location';

export const Clinicians = pgTable('clinicians', {
  id: serial("id").primaryKey(),
  userId: varchar('user_id').notNull().references(() => Users.id, { onDelete: "cascade", onUpdate: "cascade" }),
  firstName: varchar('first_name', { length: 100 }).notNull(),
  lastName: varchar('last_name', { length: 100 }).notNull(),
  middleInitial: varchar('middle_initial', { length: 1 }), // Optional
  preferredName: varchar('preferred_name', { length: 100 }), // Optional
  phoneNumberPrimary: varchar('phone_number_primary', { length: 20 }),
  phoneNumberSecondary: varchar('phone_number_secondary', { length: 20 }), // Optional
  addressLine1: varchar('address_line_1', { length: 255 }),
  addressLine2: varchar('address_line_2', { length: 255 }), // Optional
  city: varchar('city', { length: 100 }),
  stateProvince: varchar('state_province', { length: 50 }),
  postalCode: varchar('postal_code', { length: 20 }),
  country: varchar('country', { length: 100 }),
  dateOfBirth: date('date_of_birth').notNull(),
  photoUrl: varchar('photo_url'),
  clinicianTypeId: integer('clinician_type_id').references(() => ClinicianTypes.id),
  certificationType: varchar('certification_type', { length: 50 }), // e.g., 'BCBA', 'BCaBA', 'RBT'
  certificationNumber: varchar('certification_number', { length: 50 }).unique(), // Certification body number
  certificationIssueDate: date('certification_issue_date', { mode: 'date' }),
  certificationExpiryDate: date('certification_expiry_date', { mode: 'date' }),
  licenseState: varchar('license_state', { length: 255 }), // Can be comma-separated or use a junction table if many-to-many
  licenseNumber: varchar('license_number', { length: 50 }),
  licenseIssueDate: date('license_issue_date', { mode: 'date' }),
  licenseExpiryDate: date('license_expiry_date', { mode: 'date' }),
  npiNumber: varchar('npi_number', { length: 20 }).unique(), // National Provider Identifier
  hireDate: date('hire_date', { mode: 'date' }).notNull(),
  employmentStatus: varchar('employment_status', { length: 50 }).notNull().default('Active'), // e.g., 'Active', 'Inactive'
  terminationDate: date('termination_date', { mode: 'date' }), // Optional
  bio: text('bio'), // Short bio
  profilePictureUrl: varchar('profile_picture_url', { length: 255 }),
  internalNotes: text('internal_notes'), // Internal-only notes
  ...Timestamps
}, (Clinicians) => {
  // Add unique indexes for faster lookups and uniqueness constraints
  return [
    uniqueIndex('certification_number_idx').on(Clinicians.certificationNumber),
    uniqueIndex('npi_number_idx').on(Clinicians.npiNumber),
    index('name_idx').on(Clinicians.firstName, Clinicians.lastName),
  ];
})

export const clinicianRelations = relations(Clinicians, ({ one, many }) => ({
  clinicianType: one(ClinicianTypes, {
    fields: [Clinicians.clinicianTypeId],
    references: [ClinicianTypes.id],
  }),
  supervisor: one(Clinicians, {
    fields: [Clinicians.id],
    references: [Clinicians.userId],
    relationName: 'supervised_clinicians', // Important for self-referencing relations
  }),
  supervisedClinicians: many(Clinicians, {
    relationName: 'supervised_clinicians',
  }),
  serviceLocation: one(Locations, {
    fields: [Clinicians.id],
    references: [Locations.id],
  }),
}));

export const clinicianTypeRelations = relations(ClinicianTypes, ({ many }) => ({
  clinicians: many(Clinicians),
}));
