import type { UserProfile } from "@/types"

// Mock user profile
const mockUserProfile: UserProfile = {
  id: "user-1",
  name: "John Doe",
  email: "john.doe@example.com",
  avatar: "/placeholder.svg?height=200&width=200",
  createdAt: "2023-01-15T00:00:00Z",
  phone: "+1 (555) 123-4567",
  bio: "I love shopping for tech gadgets and outdoor gear. Always looking for the best deals!",
}

// Function to get user profile
export async function getUserProfile() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 400))

  // In a real app, you would fetch this from your database
  // For this demo, we'll return a mock user profile
  return mockUserProfile
}

// Function to update user profile
export async function updateUserProfile(profileData: Partial<UserProfile>) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 700))

  // In a real app, you would update this in your database
  // For this demo, we'll just return success
  return { success: true }
}

