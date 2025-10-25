"use client"
import { SessionProvider } from 'next-auth/react'

export default function AuthProvider({children}: {children: React.ReactNode}) {
  return (
    // <div>AuthProvider</div>
    <>
    
    <SessionProvider>{children}</SessionProvider>
    </>
  )
}
