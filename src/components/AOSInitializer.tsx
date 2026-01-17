'use client'

import { useEffect } from 'react'

export default function AOSInitializer() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('aos').then(AOS => {
        AOS.init({
          duration: 800,
          once: false,
          offset: 100,
        })
      })
    }
  }, [])

  return null
}
