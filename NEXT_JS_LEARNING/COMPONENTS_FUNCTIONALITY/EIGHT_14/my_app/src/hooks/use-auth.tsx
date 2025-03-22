"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import type { UserProfile } from "@/types"

interface AuthContextType {
  user: UserProfile | null
  // ye profile wala hm type sy othary hen interface
  signIn: () => void
  signOut: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  signIn: () => {},
  signOut: () => {},
  isLoading: true,
})
// phly hmbody bnaty hen create context me phir osko use context me rkhty hen taky wo har jga golbaly acce ho sky

// createContext React ka built-in function hai jo ek context banata hai.
// Yahan, hum default values provide kar rahe hain jo context me use hoti hain. Jab tak actual values set nahi hoti, tab tak default values ka use hota hai.


export const useAuth = () => useContext(AuthContext)
// hmny isy rakh diya use oth me tky hjb bhi data accces krna ho to hm is hook kause kr skty hen 

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProfile | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in
    const checkAuth = async () => {
      try {
        // In a real app, you would call an API endpoint to check auth status
        // For this demo, we'll simulate a logged in user
        const mockUser: UserProfile = {
          id: "user-1",
          name: "John Doe",
          email: "john.doe@example.com",
          avatar: "/placeholder.svg?height=200&width=200",
          createdAt: "2023-01-15T00:00:00Z",
          phone: "+1 (555) 123-4567",
          bio: "I love shopping for tech gadgets and outdoor gear. Always looking for the best deals!",
        }

        setUser(mockUser)
      } catch (error) {
        console.error("Auth check failed:", error)
        setUser(null)
      } finally {
        setIsLoading(false)
        // yani jb authonticaltion checking complete ho jaygi to isLoading false kr diya jayga
      }
    }

    checkAuth()
  }, [])

  const signIn = () => {
    // In a real app, you would show a login form and handle authentication
    // For this demo, we'll simulate a successful login
    const mockUser: UserProfile = {
      id: "user-1",
      name: "John Doe",
      email: "john.doe@example.com",
      avatar: "/placeholder.svg?height=200&width=200",
      createdAt: "2023-01-15T00:00:00Z",
      phone: "+1 (555) 123-4567",
      bio: "I love shopping for tech gadgets and outdoor gear. Always looking for the best deals!",
    }

    setUser(mockUser)
  }

  const signOut = () => {
    // In a real app, you would call an API endpoint to log out
    // For this demo, we'll just clear the user state
    setUser(null)
  }

  return <AuthContext.Provider value={{ user, signIn, signOut, isLoading }}>{children}</AuthContext.Provider>
}

