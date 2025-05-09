import NextAuth, { AuthError, type DefaultSession } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { signinSchema } from "@/schemas/signin";
import db from "@/_lib/database";
import { users, User } from "@/models/user"; // Import User type directly
import { eq } from "drizzle-orm";
import { ZodError } from "zod";
import bcrypt from "bcryptjs";

class CustomAuthError extends AuthError {
    message: string;
    constructor(message: string) {
        super();
        this.message = message;
    }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            async authorize(credentials): Promise<User | null> {
                try {
                    const { email, password } = await signinSchema.parseAsync(credentials);

                    const [currentUser] = await db
                        .select()
                        .from(users)
                        .where(eq(users.email, email))
                        .limit(1);

                    if (!currentUser) {
                        throw new CustomAuthError("Your credentials do not match.");
                    }

                    const passwordMatch = await bcrypt.compare(password, currentUser.password);

                    if (!passwordMatch) {
                        throw new CustomAuthError("Your credentials do not match.");
                    }

                    // Return user object with their profile data
                    return currentUser;
                } 
                catch (error: any) {
                    if (error instanceof ZodError) {
                        console.warn("Invalid sign-in credentials format:", error.errors)
                        throw new CustomAuthError("Invalid credentials format.");
                    }
                    console.error("Error during sign-in:", error);
                    // throw new AuthError("An unexpected error occurred during sign-in.");
                    throw new CustomAuthError(error.message)
                }
            },
        }),
    ],
    pages: {
        signIn: "/auth/login",
        signOut: "/logout",
        error: "/error",
    },
    session: {
        strategy: "jwt",
    },
    callbacks: {
        jwt({ token, user }) {
            if (user) {
                token.user = user;
            }
            return token;
        },
        session({ session, token }) {
            if (token.user) {
                session.user = {
                    id: token.user.id,
                    firstName: token.user.firstName,
                    lastName: token.user.lastName,
                    email: token.user.email,
                    role: token.user.role,
                    photoUrl: token.user.photoUrl,
                } 
            }
            return session;
        },
    },
    secret: process.env.AUTH_SECRET,
});