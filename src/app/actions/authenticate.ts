"use server"
import { redirect } from 'next/navigation'
import { signinSchema } from '@/schemas/signin'
import { signIn } from '@/_lib/auth'
import { error } from 'console'

export async function logout() {
  redirect('/login')
}


export async function authenticate(formData: any) {
  try {
    const validatedFields = signinSchema.safeParse(formData);
    const { email, password, csrfToken } = validatedFields.data;
    const res = await signIn("credentials", {
      redirect: "/classroom",
      email,
      password,
      csrfToken,
    });

    // const session = await auth()

    // if(session?.user){
    //     return { success: true, message: "Login successful", status: 200, ok: true }
    // }

    // if( res == "http://localhost:3000/api/auth/callback/credentials?"){
    //    return {error:{ message:"Fatall Error: Check system configuration."}}
    // }

    return { error: 'Unable to login' }

  } catch (err: any) {
    if (err.type === "AuthError") {
      return { error: err.message }
    }
    return { error: 'Something went wrong, please try again' }
  }
}