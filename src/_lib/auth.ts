import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { saltAndHashPassword } from "@/util/helpers"
import db from "@/_lib/database"
import { User } from "@/models/user"
import { eq } from "drizzle-orm"
import { signinSchema } from "@/schemas/signin"
import bcrypt from "bcryptjs"


export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({

            async authorize(credentials): Promise<any> {

                const validData = signinSchema.safeParse(credentials);
                if (validData.error) {
                    return null
                }

                let currentUser = null
                const { email, password } = validData.data;

                // logic to verify if the user exists
                currentUser = await db.select().from(User).where(eq(User.email, email)).limit(1)

                if (!currentUser) {
                    throw new Error("Invalid credentials.")
                }

                console.log( bcrypt.compare(password,currentUser.password))
                // return user object with their profile data
                return user
            },
        }),
    ],
})