import NextAuth, { type AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const options: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID ?? '',
      clientSecret: process.env.AUTH_GOOGLE_SECRET ?? '',
    }),
  ],    
};

export const handler = NextAuth(options);
