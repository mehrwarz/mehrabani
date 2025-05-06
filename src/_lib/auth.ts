import NextAuth, { AuthError } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { saltAndHashPassword } from "@/util/helpers"
import { signinSchema } from "@/schemas/signin"
import db from "@/_lib/database"
import { users } from "@/models/user"
import { eq } from "drizzle-orm"
import { ZodError } from "zod"
import bcrypt from "bcryptjs"


class customError extends AuthError {
    message: string
    constructor(message: string) {
        super()
        this.message = message
    }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            async authorize(credentials): Promise<any> {

                try {
                    const { email, password } = await signinSchema.parseAsync(credentials)

                    let currentUser = null

                    // logic to verify if the user exists
                    currentUser = await db.select().from(users).where(eq(users.email, email)).limit(1);

                    return {user:'user',email:email}

                    if (currentUser.length == 0) {
                        throw new customError("Invalid credentials.")
                    }
                    // return user object with their profile data
                    return currentUser
                }
                catch (error:any) {
                    if (error instanceof ZodError) {
                        // Return `null` to indicate that the credentials are invalid
                        throw new customError("Credentials not valid.");
                    }
                    throw new customError(error.message)
                }
            }
        }),
    ],
})