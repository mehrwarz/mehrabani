import { deleteSession } from '@/_lib/session'
import { redirect } from 'next/navigation'
 
export async function logout() {
  await deleteSession()
  redirect('/login')
}

import { SignupFormSchema, FormState } from '@/_lib/definitions'
import bcrypt from 'bcryptjs'
import db from '@/_lib/database'
import { signIn } from 'next-auth/react'
import { auth } from '@/_lib/auth'
 
export async function signup(state: FormState, formData: FormData) {
  // Validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  })
 
  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }
 
  const { name, email, password } = validatedFields.data
  // e.g. Hash the user's password before storing it
  const hashedPassword = await bcrypt.hash(password, 10)
 
  // 3. Insert the user into the database or call an Auth Library's API
  const data = await db
    .insert(users)
    .values({
      name,
      email,
      password: hashedPassword,
    })
    .returning({ id: users.id })
 
  const user = data[0]
 
  if (!user) {
    return {
      message: 'An error occurred while creating your account.',
    }
  }
}


export async function authenticate(formData: any) {
  try {
      
      // Login the user
      const { email, password, csrfToken } = formData;

      const res = await signIn("credentials", {
          redirect: false,
          email,
          password,
          csrfToken,
      });

      const session = await auth()
      
      if(session?.user){
          return { success: true, message: "Login successful", status: 200, ok: true }
      }
      
      if( res == "http://localhost:3000/api/auth/callback/credentials?"){
         return {error:{ message:"Fatall Error: Check system configuration."}}
      }

      return { error: { message: 'Unable to login'} }

  } catch (err: any) {
      if (err.type === "AuthError") {
          return {
              error: { message: err.message }
          }
      }
      return { error: { message: 'Something went wrong, please try again' } }
  }
}