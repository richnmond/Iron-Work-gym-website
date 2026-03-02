import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

// Note: For production, implement proper database integration
// This is a simplified configuration for development

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // This is a demo - replace with real database check
        if (credentials?.email === "demo@example.com" && credentials?.password === "password") {
          return {
            id: "1",
            name: "Demo User",
            email: "demo@example.com"
          }
        }
        return null
      }
    })
  ],
  session: {
    strategy: "jwt"
  },
  pages: {
    signIn: "/login"
  },
  callbacks: {
    async session({ session, token }: any) {
      if (session?.user) {
        (session.user as any).id = token.id
      }
      return session
    },
    async jwt({ token, user }: any) {
      if (user) {
        token.id = user.id
      }
      return token
    }
  }
})

export { handler as GET, handler as POST }
