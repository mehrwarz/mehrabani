import NextAuth, { AuthError, type DefaultSession } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { signinSchema } from "@/schemas/signin";
import db from "@/lib/database";
import { users, User } from "@/models/user"; // Import User type directly
import { eq } from "drizzle-orm";
import { ZodError } from "zod";
import bcrypt from "bcryptjs";
import { Adapter, AdapterSession, AdapterUser } from "next-auth/adapters";

class CustomAuthError extends AuthError {
    message: string;
    constructor(message: string) {
        super();
        this.message = message;
    }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
    debug: true,
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

                    const passwordMatch = await bcrypt.compare(password, currentUser.password)!!;

                    if (!passwordMatch) {
                        throw new CustomAuthError("Your credentials do not match.");
                    }

                    const user = {
                        id: currentUser.id, 
                        firstName: currentUser.firstName,
                        lastName: currentUser.lastName, 
                        email: currentUser.email, 
                        role: currentUser.role, 
                        photoUrl: currentUser.photoUrl
                    }

                    return user as any;
                }
                catch (error: any) {
                    console.error("Error caught:", error);
                    if (error instanceof ZodError) {
                        console.warn("Invalid sign-in credentials format:", error.errors);
                        throw new CustomAuthError("Invalid credentials format.");
                    } else if (error instanceof AuthError) {
                        throw error; // Re-throw the AuthError
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
        async jwt({ token,user }) {
            if(user){
                token.user = user
            }
            return token;
        },
        async session({ session, token }) {
           session.user = token.user as AdapterUser
            return session;
        },
    },
    secret: process.env.AUTH_SECRET,
});
