// src/db/schema.ts
import { User } from "../../db/tables/Users";
import { z } from 'zod';

// Zod schemas for data validation
export const insertUserSchema = createInsertSchema(User, {
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string().min(2),
});
export const selectUserSchema = createSelectSchema(User);

export type User = z.infer<typeof selectUserSchema>;
export type NewUser = z.infer<typeof insertUserSchema>;