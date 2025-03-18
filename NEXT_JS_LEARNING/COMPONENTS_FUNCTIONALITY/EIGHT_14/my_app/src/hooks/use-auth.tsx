"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import type { UserProfile } from "@/types"

interface AuthContextType {
  user: UserProfile | null
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

export const useAuth = () => useContext(AuthContext)

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

