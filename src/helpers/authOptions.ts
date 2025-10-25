import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
 
import CredentialsProvider from "next-auth/providers/credentials";
import { DefaultSession, NextAuthOptions } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
  interface User {
    id: string;
  }
}
export const authOptions : NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
      GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID as string,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
  }),
    GitHubProvider({
    clientId: process.env.GITHUB_ID as string,
    clientSecret: process.env.GITHUB_SECRET as string,
  }),


 CredentialsProvider({
    // The name to display on the sign in form (e.g. "Sign in with...")
    name: "Credentials",
    // `credentials` is used to generate a form on the sign in page.
    // You can specify which fields should be submitted, by adding keys to the `credentials` object.
    // e.g. domain, username, password, 2FA token, etc.
    // You can pass any HTML attribute to the <input> tag through the object.
    credentials: {
      email: { label: "Email", type: "text"},
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials) {
      if(!credentials?.email || !credentials?.password) {
        console.log("No credentials")
        return null
      }

      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: credentials.email,
      password: credentials.password
    }), 
  });
  if (!res?.ok) {
    console.error("Login Failed", await res.text());
  }
  const user = await res.json();

      if (user) {
        // Any object returned will be saved in `user` property of the JWT
        return user
      } else {
        // If you return null then an error will be displayed advising the user to check their details.
        return null

        // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
      }
        
      } catch (error) {
        console.log(error);
        return null
        
      }
      // Add logic here to look up the user from the credentials supplied

    }
  })
  ],
  callbacks : {
   async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
      }
      return session;
    }
  },
  secret : process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login',
  }
}

