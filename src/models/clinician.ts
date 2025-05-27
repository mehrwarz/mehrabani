import { pgTable, serial, text, varchar, date, boolean, timestamp, integer, uniqueIndex, uuid } from 'drizzle-orm/pg-core';
import { relations, sql } from 'drizzle-orm';
import { Users } from './user';
import { Timestamps } from '@/util/cutomColumns';

// --- Lookup Tables (for better data integrity and relationships) ---

// Clinician Types (e.g., BCBA, RBT, SLP)
export const ClinicianTypes = pgTable('clinician_types', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 50 }).notNull().unique(), // e.g., 'BCBA', 'RBT', 'SLP'
});

// Specialties (e.g., Early Intervention, Challenging Behaviors)
export const Specialties = pgTable('specialties', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 100 }).notNull().unique(), // e.g., 'Early Intervention', 'Social Skills'
});

// Locations (if you have multiple clinics/service areas)
export const Locations = pgTable('locations', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 100 }).notNull().unique(), // e.g., 'Main Clinic', 'Remote Telehealth'
  address: text('address'), // Full address for the location
});

// --- Clinicians Table ---

export const Clinicians = pgTable('clinicians', {
  // I. Basic Identification & Contact Information
  userId: varchar('user_id').notNull().references(() => Users.id, {onDelete: "cascade", onUpdate: "cascade"}),
  // II. Professional Credentials & Licensing
  // Foreign key to clinicianTypes table
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

  // III. Employment & Administrative
  hireDate: date('hire_date', { mode: 'date' }).notNull(),
  employmentStatus: varchar('employment_status', { length: 50 }).notNull().default('Active'), // e.g., 'Active', 'Inactive'
  terminationDate: date('termination_date', { mode: 'date' }), // Optional
  // Self-referencing foreign key for supervisor
  supervisorId: integer('supervisor_id').references(() => Users.id),
  // Foreign key to locations table
  serviceLocationId: integer('service_location_id').references(() => Locations.id),

 // V. Additional Information & Metadata
  bio: text('bio'), // Short bio
  profilePictureUrl: varchar('profile_picture_url', { length: 255 }),
  internalNotes: text('internal_notes'), // Internal-only notes
  ...Timestamps
}, (Clinicians) => {
  // Add unique indexes for faster lookups and uniqueness constraints
  return [
    uniqueIndex('certification_number_idx').on(Clinicians.certificationNumber),
    uniqueIndex('npi_number_idx').on(Clinicians.npiNumber),
  ];
})

// --- Junction Table for Many-to-Many Relationship (Clinicians to Specialties) ---

export const clinicianToSpecialties = pgTable('clinician_to_specialties', {
  clinicianId: integer('clinician_id').notNull().references(() => Clinicians.userId),
  specialtyId: integer('specialty_id').notNull().references(() => Specialties.id),
}, (table) => {
  return [
    uniqueIndex('clinician_specialty_unique').on(table.clinicianId, table.specialtyId),
  ];
});


// --- Define Relations for Drizzle ORM ---

export const clinicianRelations = relations(Clinicians, ({ one, many }) => ({
  clinicianType: one(ClinicianTypes, {
    fields: [Clinicians.clinicianTypeId],
    references: [ClinicianTypes.id],
  }),
  supervisor: one(Clinicians, {
    fields: [Clinicians.supervisorId],
    references: [Clinicians.userId],
    relationName: 'supervised_clinicians', // Important for self-referencing relations
  }),
  supervisedClinicians: many(Clinicians, {
    relationName: 'supervised_clinicians',
  }),
  serviceLocation: one(Locations, {
    fields: [Clinicians.serviceLocationId],
    references: [Locations.id],
  }),
  clinicianToSpecialties: many(clinicianToSpecialties),
}));

export const clinicianTypeRelations = relations(ClinicianTypes, ({ many }) => ({
  clinicians: many(Clinicians),
}));

export const specialtyRelations = relations(Specialties, ({ many }) => ({
  clinicianToSpecialties: many(clinicianToSpecialties),
}));

export const locationRelations = relations(Locations, ({ many }) => ({
  Clinicians: many(Clinicians),
}));

export const clinicianToSpecialtiesRelations = relations(clinicianToSpecialties, ({ one }) => ({
  clinician: one(Clinicians, {
    fields: [clinicianToSpecialties.clinicianId],
    references: [Clinicians.userId],
  }),
  specialty: one(Specialties, {
    fields: [clinicianToSpecialties.specialtyId],
    references: [Specialties.id],
  }),
}));