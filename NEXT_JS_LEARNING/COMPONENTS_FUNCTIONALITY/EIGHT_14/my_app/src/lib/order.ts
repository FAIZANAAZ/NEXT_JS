import type { Order } from "@/types"

// Mock data for orders
const mockOrders: Order[] = [
  {
    id: "order-1",
    orderNumber: "ORD-12345",
    date: "2023-06-10T14:30:00Z",
    status: "Delivered",
    items: [
      {
        id: "item-1",
        name: "Wireless Bluetooth Headphones",
        image: "/placeholder.svg?height=50&width=50",
        price: 169.99,
        quantity: 1,
      },
      {
        id: "item-2",
        name: "Smart Fitness Tracker",
        image: "/placeholder.svg?height=50&width=50&text=Fitness+Tracker",
        price: 89.99,
        quantity: 1,
      },
    ],
    subtotal: 259.98,
    shipping: 5.99,
    tax: 21.0,
    total: 286.97,
    shippingAddress: {
      name: "John Doe",
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zip: "12345",
      country: "United States",
    },
  },
  {
    id: "order-2",
    orderNumber: "ORD-12346",
    date: "2023-07-05T10:15:00Z",
    status: "Shipped",
    items: [
      {
        id: "item-3",
        name: "Ultra HD 4K Smart TV",
        image: "/placeholder.svg?height=50&width=50&text=Smart+TV",
        price: 699.99,
        quantity: 1,
      },
    ],
    subtotal: 699.99,
    shipping: 0.0, // Free shipping
    tax: 56.0,
    total: 755.99,
    shippingAddress: {
      name: "John Doe",
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zip: "12345",
      country: "United States",
    },
  },
  {
    id: "order-3",
    orderNumber: "ORD-12347",
    date: "2023-08-15T16:45:00Z",
    status: "Processing",
    items: [
      {
        id: "item-4",
        name: "Ergonomic Office Chair",
        image: "/placeholder.svg?height=50&width=50&text=Office+Chair",
        price: 249.99,
        quantity: 1,
      },
      {
        id: "item-5",
        name: "Portable Bluetooth Speaker",
        image: "/placeholder.svg?height=50&width=50&text=Bluetooth+Speaker",
        price: 103.99, // After discount
        quantity: 2,
      },
    ],
    subtotal: 457.97,
    shipping: 15.99,
    tax: 37.0,
    total: 510.96,
    shippingAddress: {
      name: "John Doe",
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zip: "12345",
      country: "United States",
    },
  },
]

// Function to get orders for a user
export async function getUserOrders(userId: string) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 600))

  // In a real app, you would fetch this from your database
  // For this demo, we'll return mock orders
  return mockOrders
}

// Function to get a single order by ID
export async function getOrderById(orderId: string) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300))

  return mockOrders.find((order) => order.id === orderId) || null
}

