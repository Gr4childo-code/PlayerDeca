import NextAuth from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials';
import { fetchAPI } from '@/utils/api/fetch'

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        identifier: {
          label: "Identifier",
          type: "text"
        },
        password: {
          label: "Password",
          type: "password"
        }
      },

      async authorize(credentials) {
        const response = await fetchAPI('/auth/local', "POST", {
          identifier: credentials.identifier,
          password: credentials.password,
        })

        const user = await response.json();

        if (response.ok && user) {
          return user
        }

        return null
      }
    })
  ],

  session: {
    jwt: true,
    maxAge: 1 * 24 * 60 * 60
  },

  pages: {
    signIn: '/auth/login'
  },

  callbacks: {
    async session({ session, token }) {
      return Promise.resolve({...token, expires: session.expires});
    },
    async jwt({ token, user }) {
      if (user) { token = {...user} }
      return Promise.resolve(token);
    }
  },
}

export default NextAuth(authOptions);;