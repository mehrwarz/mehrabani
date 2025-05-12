"use server"
import { redirect } from 'next/navigation'
import { auth, signIn } from '@/lib/auth'
import z from "zod"

export async function logout() {
	redirect('/login')
}

export async function authenticate(formData: any) {
	const { email, password, csrfToken } = formData;
	const emailValidation = z.string().email().safeParse(email);

	if (emailValidation.success == false) {
		return { error:{message: "Invalid email address" }}
	}

	try {
        const res = await signIn("credentials", {
            redirect: false,
            email,
            password,
            csrfToken,
        });
		const session = await auth()

		if (session?.user) {
			return { success: true, message: "Login successful", status: 200, ok: true }
		}

		return { error: { message:"An unexpected error occurred during sign-in." } }
	} catch (err: any) {
		return { error:{ message:err.message} }
	}
}