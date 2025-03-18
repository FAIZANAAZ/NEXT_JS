import type { Notification } from "@/types"

// Mock notifications
const mockNotifications: Notification[] = [
  {
    id: "notification-1",
    title: "Order Shipped",
    message: "Your order #ORD-12346 has been shipped and is on its way!",
    date: "2023-07-06T09:30:00Z",
    read: false,
    type: "order",
  },
  {
    id: "notification-2",
    title: "Price Drop Alert",
    message: "Good news! The Wireless Bluetooth Headphones you added to your wishlist are now 15% off.",
    date: "2023-07-05T14:15:00Z",
    read: false,
    type: "price",
  },
  {
    id: "notification-3",
    title: "Review Request",
    message: "How was your experience with the Smart Fitness Tracker? Please leave a review!",
    date: "2023-06-15T11:45:00Z",
    read: true,
    type: "review",
  },
  {
    id: "notification-4",
    title: "New Arrivals",
    message: "Check out our latest electronics collection with exclusive launch discounts!",
    date: "2023-06-10T08:00:00Z",
    read: true,
    type: "promotion",
  },
]

// Function to get notifications
export async function getNotifications() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  // In a real app, you would fetch this from your database
  // For this demo, we'll return mock notifications
  return mockNotifications
}

// Function to mark a notification as read
export async function markNotificationAsRead(notificationId: string) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300))

  // In a real app, you would update this in your database
  // For this demo, we'll just return success
  return { success: true }
}

