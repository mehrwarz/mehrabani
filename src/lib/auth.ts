import NextAuth from "next-auth";
import authConfig from "@/lib/authConfig";

export const { handlers, signIn, signOut, auth } = NextAuth({
    session: { strategy: "jwt" },
    ...authConfig,

    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.user = user;
            }
            return token;
        },
        async session({ session, token }) {
            session.user = token.user as {
                id: string,
                firstName: string,
                lastName: string,
                email: string,
                role: string,
                photoUrl: string | null,
                emailVerified: Date | null,
            };
            return session;
        },
    },
});