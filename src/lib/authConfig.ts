import Credentials from "next-auth/providers/credentials";
import { signinSchema } from "@/schemas/signin";
import db from "@/lib/database";
import { users } from "@/models/user";
import { eq } from "drizzle-orm";
import { ZodError } from "zod";
import bcrypt from "bcryptjs";
import {
    attemptLockout,
    isAccountLocked,
    recordFailedLogin
} from "@/util/helpers";
import { AuthError } from "next-auth";

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

export default {
    providers: [
        Credentials({
            async authorize(credentials, request: Request): Promise<sessionUser | null> {
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

                    // Check if the account is locked BEFORE attempting password comparison
                    if (await isAccountLocked(currentUser.id)) {
                        console.warn(`Authentication blocked for locked email: ${email} (User ID: ${currentUser.id}).`);
                        throw new CustomAuthError("Account is temporarily locked. Please try again later.");
                    }

                    const passwordMatch = await bcrypt.compare(password, currentUser.password)!!;

                    if (!passwordMatch) {
                        console.warn(`Authentication failed for email: ${email} - Incorrect password.`);
                        // Access IP from the headers of the generic Request object
                        const xForwardedFor = request.headers.get('x-forwarded-for');
                        const clientIp = xForwardedFor?.split(',')[0] || request.headers.get('remote-addr') || 'UNKNOWN';

                        await recordFailedLogin(currentUser.id, clientIp, 'incorrect password');
                        // Attempt to lockout the account
                        await attemptLockout(currentUser.id);
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
    secret: process.env.AUTH_SECRET,
}