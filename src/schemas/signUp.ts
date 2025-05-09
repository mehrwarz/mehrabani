import {  z } from 'zod'
export const signupSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: 'First name must be at least 3 characters long.' })
    .trim(),
  lastName: z.string().min(3,{ message: 'Last name must be at least 3 characters long.' }).trim(),
  email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
  password: z
    .string()
    .min(8, { message: 'Be at least 8 characters long' })
    .regex(/[a-z]/, { message: 'Contain at least one lowercase letter.' })
    .regex(/[A-Z]/, { message: 'Contain at least one uppercase letter.' })
    .regex(/[0-9]/, { message: 'Contain at least one number.' })
    .regex(/[^a-zA-Z0-9]/, {
      message: 'Contain at least one special character.',
    })
    .trim(),
    dateOfBirth: z.string().date("Date of Birth is required").trim(),

})

type signupSchema = z.infer< typeof signupSchema >
