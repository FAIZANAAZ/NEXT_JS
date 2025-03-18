// Product Types
export interface Product {
    id: string
    name: string
    description: string
    price: number
    image: string
    category: string
    rating: number
    reviewCount: number
    stock: number
    discount: number
    images?: string[]
    details?: string
    specifications?: Record<string, string>
  }
  
  // Review Types
  export interface Review {
    id: string
    productId: string
    user: {
      id: string
      name: string
      avatar: string
    }
    rating: number
    text: string
    date: string
    upvotes: number
    downvotes: number
    reply?: string
  }
  
  export interface UserReview {
    id: string
    product: {
      id: string
      name: string
      image: string
    }
    rating: number
    text: string
    date: string
  }
  
  // Order Types
  export interface Order {
    id: string
    orderNumber: string
    date: string
    status: string
    items: {
      id: string
      name: string
      image: string
      price: number
      quantity: number
    }[]
    subtotal: number
    shipping: number
    tax: number
    total: number
    shippingAddress: {
      name: string
      street: string
      city: string
      state: string
      zip: string
      country: string
    }
  }
  
  // User Types
  export interface UserProfile {
    id: string
    name: string
    email: string
    avatar: string | null
    createdAt: string
    phone?: string
    bio?: string
  }
  
  // Notification Types
  export interface Notification {
    id: string
    title: string
    message: string
    date: string
    read: boolean
    type: "order" | "price" | "review" | "promotion"
  }
  
  