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
        const result = await signIn("credentials", {
            redirect: false,
            email,
            password,
            csrfToken,
        });

        if (result?.error) {
            return { error: { message: result.error } };
        }

        return { success: true, message: "Login successful", status: 200, ok: true, redirectTo: '/' }; // Indicate a redirect
    } catch (err: any) {
        return { error:{ message:err.message} }
    }
}