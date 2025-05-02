import NextAuth from 'next-auth';
import Credentials from '@auth/core/providers/credentials';
import bcrypt from 'bcryptjs';
import { z } from 'zod';
// import { db, users, selectUserSchema } from '@/db'; // Adjust path as needed
// import { eq } from 'drizzle-orm';

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      async authorize(credentials) {
        try {
          const parsedCredentials = z
            .object({ email: z.string().email(), password: z.string().min(6) })
            .safeParse(credentials);

          if (!parsedCredentials.success) {
            return null;
          }

          const { email, password } = parsedCredentials.data;
          return { name:"user", email:"test@example.com"}

          const [user] = await db.select().from(users).where(eq(users.email, email)).limit(1);

          if (!user) return null;

          const isValidPassword = await bcrypt.compare(password, user.password);

          if (!isValidPassword) return null;

          return selectUserSchema.parse(user); // Return the validated user object
        } catch (error) {
          console.error('Authentication error:', error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    session({ session, token }) {
      if (token) {
        session.user = token as any; // Type assertion based on your user object
      }
      return session;
    },
    jwt({ token, user }) {
      if (user) {
        token = { ...token, ...user };
      }
      return token;
    },
  },
  pages: {
    signIn: '/login', // Optional custom sign-in page
  },
  secret: process.env.NEXTAUTH_SECRET,
});