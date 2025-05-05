"use server"
import { redirect } from 'next/navigation'
import { signIn } from '@/_lib/auth'
import z from "zod"

export async function logout() {
	redirect('/login')
}


export async function authenticate(formData: any) {

	const validEmail = z.string().email();
	const emailValidation = validEmail.safeParse(formData.email);

	if (emailValidation.success == false) {
		return { error: "Invalid email address" }
	}

	try {
		const res = await signIn("credentials", {
			email: emailValidation.data,
			password: formData.password,
			csrfToken: formData.csrfToken,
		});

		console.log("result", res )
		// const session = await auth()

		// if(session?.user){
		//     return { success: true, message: "Login successful", status: 200, ok: true }
		// }

		// if( res == "http://localhost:3000/api/auth/callback/credentials?"){
		//    return {error:{ message:"Fatall Error: Check system configuration."}}
		// }

		return { error: "done" }

	} catch (err: any) {
		console.log("Error message: ", JSON.stringify(err))
		return { error: err.message }
	}
}