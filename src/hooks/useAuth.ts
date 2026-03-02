'use client'

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export function useRequireAuth(redirectUrl = "/login") {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push(redirectUrl)
    }
  }, [status, router, redirectUrl])

  return { session, isLoading: status === "loading" }
}