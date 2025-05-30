"use server"
import { redirect } from 'next/navigation'
import { signIn } from '@/lib/auth'
import { signinSchema } from '@/schemas/signin'

export async function logout() {
	redirect('/login')
}

export async function authenticate(formData: any) {
	const inputValidation = signinSchema.safeParse(formData);

	if (inputValidation.success == false) {
		return { error:{message: "Invalid credentials format" }}
	}

    try {
        const result = await signIn("credentials", {
            redirect: false,
            email: inputValidation.data.email,
            password: inputValidation.data.password,
            csrfToken: formData.csrfToken,
        });

        if (result?.error) {
            return { error: { message: result.error } };
        }

        return { success: true, message: "Login successful", status: 200, ok: true, redirectTo: '/' }; 
    } catch (err: any) {
        console.log(err)
        return { error:{ message:"Ops! something went wrong."} }
    }
}
