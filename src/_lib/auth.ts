import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { saltAndHashPassword } from "@/util/helpers"
import { signinSchema } from "@/schemas/signin"
import db from "@/_lib/database"
import { users } from "@/models/user"
import { eq } from "drizzle-orm"
import { ZodError } from "zod"
import bcrypt from "bcryptjs"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            async authorize(credentials): Promise<any> {

                try {
                    const { email, password } = await signinSchema.parseAsync(credentials)


                    let currentUser = null

                    // logic to verify if the user exists
                    currentUser = await db.select().from(users).where(eq(users.email, emailValidation.data)).limit(1)

                    if (!currentUser) {
                        throw new Error("Invalid credentials.")
                    }

                    console.log("The password comartion", bcrypt.compare(password, currentUser.password))
                    // return user object with their profile data
                    return currentUser
                }
                catch (error) {
                    if (error instanceof ZodError) {
                        // Return `null` to indicate that the credentials are invalid
                        throw new Error("Invalid credentials.")
                    }
                }
            }
        }),
    ],
})