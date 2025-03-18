import type { Review, UserReview } from "@/types"

// Mock data for reviews
const mockReviews: Review[] = [
  {
    id: "review-1",
    productId: "product-1",
    user: {
      id: "user-1",
      name: "John Doe",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    rating: 5,
    text: "These headphones are amazing! The sound quality is crystal clear, and the noise cancellation works perfectly. Battery life is impressive too - I've been using them for a week without needing to recharge.",
    date: "2023-05-15T10:30:00Z",
    upvotes: 12,
    downvotes: 1,
  },
  {
    id: "review-2",
    productId: "product-1",
    user: {
      id: "user-2",
      name: "Jane Smith",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    rating: 4,
    text: "Great headphones overall. The sound quality is excellent and they're very comfortable. The only downside is that the app is a bit buggy sometimes. Would still recommend!",
    date: "2023-04-22T14:15:00Z",
    upvotes: 8,
    downvotes: 2,
    reply:
      "Thank you for your feedback! We're working on improving the app experience and will release an update soon.",
  },
  {
    id: "review-3",
    productId: "product-1",
    user: {
      id: "user-3",
      name: "Mike Johnson",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    rating: 3,
    text: "Decent headphones but not worth the price. The sound quality is good, but I expected better noise cancellation at this price point. The ear cups also get uncomfortable after a few hours of use.",
    date: "2023-03-10T09:45:00Z",
    upvotes: 5,
    downvotes: 3,
  },
  {
    id: "review-4",
    productId: "product-2",
    user: {
      id: "user-1",
      name: "John Doe",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    rating: 5,
    text: "This fitness tracker has completely changed my workout routine. It's accurate, comfortable to wear, and the battery lasts for days. The app is intuitive and provides detailed insights about my activities.",
    date: "2023-06-05T16:20:00Z",
    upvotes: 15,
    downvotes: 0,
  },
  {
    id: "review-5",
    productId: "product-2",
    user: {
      id: "user-4",
      name: "Sarah Williams",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    rating: 4,
    text: "I've been using this tracker for a month now and I'm impressed with its accuracy. The sleep tracking feature is particularly helpful. The only reason I'm not giving 5 stars is because the band sometimes irritates my skin.",
    date: "2023-05-28T11:10:00Z",
    upvotes: 7,
    downvotes: 1,
  },
]

// Mock data for user reviews
const mockUserReviews: UserReview[] = [
  {
    id: "review-1",
    product: {
      id: "product-1",
      name: "Wireless Bluetooth Headphones",
      image: "/placeholder.svg?height=50&width=50",
    },
    rating: 5,
    text: "These headphones are amazing! The sound quality is crystal clear, and the noise cancellation works perfectly. Battery life is impressive too - I've been using them for a week without needing to recharge.",
    date: "2023-05-15T10:30:00Z",
  },
  {
    id: "review-4",
    product: {
      id: "product-2",
      name: "Smart Fitness Tracker",
      image: "/placeholder.svg?height=50&width=50&text=Fitness+Tracker",
    },
    rating: 5,
    text: "This fitness tracker has completely changed my workout routine. It's accurate, comfortable to wear, and the battery lasts for days. The app is intuitive and provides detailed insights about my activities.",
    date: "2023-06-05T16:20:00Z",
  },
]

// Function to get reviews for a product
export async function getReviews(productId: string, sortBy = "newest") {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  // Filter reviews for the specified product
  const reviews = mockReviews.filter((review) => review.productId === productId)

  // Apply sorting
  switch (sortBy) {
    case "newest":
      reviews.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      break
    case "highest":
      reviews.sort((a, b) => b.rating - a.rating)
      break
    case "lowest":
      reviews.sort((a, b) => a.rating - b.rating)
      break
    case "helpful":
      reviews.sort((a, b) => b.upvotes - b.downvotes - (a.upvotes - a.downvotes))
      break
    default:
      // Default to newest
      reviews.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  }

  return reviews
}

// Function to add a review
export async function addReview(productId: string, reviewData: { rating: number; text: string }) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 700))

  // In a real app, you would send this data to your API
  // For this demo, we'll create a mock review
  const newReview: Review = {
    id: `review-${Date.now()}`,
    productId,
    user: {
      id: "user-1",
      name: "John Doe",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    rating: reviewData.rating,
    text: reviewData.text,
    date: new Date().toISOString(),
    upvotes: 0,
    downvotes: 0,
  }

  // In a real app, you would add this to your database
  // For this demo, we'll just return the new review
  return newReview
}

// Function to vote on a review
export async function voteReview(reviewId: string, voteType: "up" | "down") {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300))

  // In a real app, you would update the vote in your database
  // For this demo, we'll create a mock updated review
  const review = mockReviews.find((r) => r.id === reviewId)

  if (!review) {
    throw new Error("Review not found")
  }

  const updatedReview = { ...review }

  if (voteType === "up") {
    updatedReview.upvotes += 1
  } else {
    updatedReview.downvotes += 1
  }

  return updatedReview
}

// Function to get reviews by a user
export async function getUserReviews(userId: string) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  // In a real app, you would fetch this from your database
  // For this demo, we'll return mock user reviews
  return mockUserReviews
}

// Function to delete a review
export async function deleteReview(reviewId: string) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 400))

  // In a real app, you would delete this from your database
  // For this demo, we'll just return success
  return { success: true }
}

