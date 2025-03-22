"use client"

import { createContext } from "react"
import type { Notification } from "@/types"

interface NotificationContextType {
  notifications: Notification[]
  unreadCount: number
  markAsRead: (id: string) => Promise<void>
  markAllAsRead: () => Promise<void>
}

// Create the context with default values
export const NotificationContext = createContext<NotificationContextType>({
  notifications: [],
  unreadCount: 0,
  markAsRead: async () => {},
  markAllAsRead: async () => {},
})

// Yeh code ek NotificationContext banata hai jisme notifications ka data aur actions store hote hain.
// NotificationContextType interface se hum define karte hain ke context mein kis type ka data store hoga (notifications, unread count, etc.).
// createContext ka use karke hum NotificationContext banate hain jisme default values hoti hain.
// Aap NotificationContext ko apne components mein easily access kar sakte hain, aur notifications ko manage kar sakte hain.