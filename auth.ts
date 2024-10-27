import NextAuth, { type AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { prisma } from './prisma';

const convert = (unixTimeInSeconds) => new Date(unixTimeInSeconds * 1000).toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' });

// https://next-auth.js.org/configuration/options
const options: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt',
    maxAge: 1 * 1 * 60 * 60, // 1 hour
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  // https://next-auth.js.org/configuration/callbacks
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log('signIn()', profile);
      return true;
    },
    async redirect({ url, baseUrl }) {
      return '/';
    },
    // persist the data in the token
    async jwt({ token, account, profile }) {
      // console.log(token, account, profile);
      console.log('jwt()', convert(token.iat));
      console.log('jwt()', convert(token.exp));      
      
      return token;
    },
    // pass the data through to the browser
    async session({ session, user, token }) {      
      return session;
    },
  },
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID ?? '',
      clientSecret: process.env.AUTH_GOOGLE_SECRET ?? '',
    }),
  ],    
};

export const handler = NextAuth(options);
