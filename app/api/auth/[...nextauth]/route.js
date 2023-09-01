import NextAuth from "next-auth/next"
import GoogleProvider from "next-auth/providers/google"

import { connectToDB } from "@utils/database"

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  async session({ session }) {
    
  },
  async signIn({ profile }) {
    try {
      await connectToDB()

      // Check if user exists in database

      // if not, create user

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }
})
