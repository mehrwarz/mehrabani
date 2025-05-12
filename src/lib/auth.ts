import NextAuth, { AuthError } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { signinSchema } from "@/schemas/signin";
import db from "@/lib/database";
import { users } from "@/models/user";
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

type sessionUser = {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    role: string,
    photoUrl: string | null,
    emailVerified: Date | null,
}

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            async authorize(credentials): Promise<sessionUser | null> {
                try {
                    const { email, password } = await signinSchema.parseAsync(credentials);

                    const [currentUser] = await db
                        .select()
                        .from(users)
                        .where(eq(users.email, email))
                        .limit(1);

                    if (!currentUser) {
                        console.warn(`Authentication failed for email: ${email} - User not found.`);
                        throw new CustomAuthError("Your credentials do not match.");
                    }

                    const passwordMatch = await bcrypt.compare(password, currentUser.password)!!;

                    if (!passwordMatch) {
                        console.warn(`Authentication failed for email: ${email} - Incorrect password.`);
                        throw new CustomAuthError("Your credentials do not match.");
                    }

                    const user: sessionUser = {
                        id: currentUser.id,
                        firstName: currentUser.firstName,
                        lastName: currentUser.lastName,
                        email: currentUser.email,
                        role: currentUser.role,
                        photoUrl: currentUser.photoUrl,
                        emailVerified: currentUser.emailVerifiedAt,
                    };

                    return user;
                } catch (error: any) {
                    console.error("Error during authorize:", error);
                    if (error instanceof ZodError) {
                        console.warn("Invalid sign-in credentials format:", error.errors);
                        throw new CustomAuthError("Invalid credentials format.");
                    } else if (error instanceof AuthError) {
                        throw error;
                    }
                    console.error("Unexpected error during sign-in:", error);
                    throw new CustomAuthError("An unexpected error occurred during sign-in.");
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
        async jwt({ token, user }) {
            if (user) {
                token.user = user;
            }
            return token;
        },
        async session({ session, token }) {
            session.user = token.user as sessionUser; 
            return session;
        },
    },
    secret: process.env.AUTH_SECRET,
});