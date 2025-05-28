"use server";
import { Users } from "@/models/user"
import { signupSchema } from "@/schemas/signUp";
import db from "@/lib/database"
import { eq } from "drizzle-orm"
import { saltAndHashPassword } from "@/util/helpers";

export async function signUp(props: {}) {
	try {
		const validation = signupSchema.safeParse(props)
		if (validation.success == false) {
			return { error: validation.error.issues };
		}

		let validData = validation.data as any;

		const existUser = await db.select().from(Users).where(eq(Users.email, validData.email)).limit(1);

		if (existUser.length > 0) {
			return { failure: { message: "The email address is already in use" } }
		}

		validData.password = await saltAndHashPassword(validData.password, 10);

		const [result] = await db.insert(Users).values(validData).returning();

		if (result.id) {
			return { success: "You are fully registered" }
		}

		return { failure: { message: "Somthing went wrong.\n Please try again later." } }
	}
	catch (Err) {
		return { failure: { message: "System error!\n Contact your system administrator." } }
	}

}
