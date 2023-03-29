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

        const data = await response.json();
        const user = { ...data.user, jwt: data.jwt, ...data.error }

        if (user) {
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

  callbacks: {
    async session({ session, token }) {
      session = {...token, expires: session.expires}
      return Promise.resolve(session);
    },
    async jwt({ token, user }) {
      if (user) { token = {...user} }
      return Promise.resolve(token);
    }
  },
}

export default NextAuth(authOptions);;