"use client"

import { useState, useEffect, type ReactNode } from "react"
import { useToast } from "@/hooks/use-toast"
import { NotificationContext } from "@/lib/notification-context"
import type { Notification } from "@/types"
import { getNotifications, markNotificationAsRead } from "@/lib/notification"

interface NotificationProviderProps {
  children: ReactNode
}

export default function NotificationProvider({ children }: NotificationProviderProps) {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const { toast } = useToast()

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const result = await getNotifications()
        setNotifications(result)
      } catch (error) {
        console.error("Failed to fetch notifications:", error)
      }
    }

    fetchNotifications()

    // Set up polling for new notifications
    const interval = setInterval(fetchNotifications, 60000) // Check every minute

    return () => clearInterval(interval)
  }, [])

  const markAsRead = async (id: string) => {
    try {
      await markNotificationAsRead(id)
      setNotifications((prevNotifications) =>
        prevNotifications.map((notification) =>
          notification.id === id ? { ...notification, read: true } : notification,
        ),
      )
    } catch (error) {
      console.error("Failed to mark notification as read:", error)
      toast({
        title: "Error",
        description: "Failed to mark notification as read.",
        variant: "destructive",
      })
    }
  }

  const markAllAsRead = async () => {
    try {
      // In a real app, you would call an API endpoint to mark all as read
      // For this demo, we'll just update the local state
      setNotifications((prevNotifications) =>
        prevNotifications.map((notification) => ({
          ...notification,
          read: true,
        })),
      )

      toast({
        title: "Success",
        description: "All notifications marked as read.",
      })
    } catch (error) {
      console.error("Failed to mark all notifications as read:", error)
      toast({
        title: "Error",
        description: "Failed to mark all notifications as read.",
        variant: "destructive",
      })
    }
  }

  // Calculate unread count outside of render to avoid unnecessary re-renders
  const unreadCount = notifications.filter((notification) => !notification.read).length

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        unreadCount,
        markAsRead,
        markAllAsRead,
      }}
    >
      {children}
    </NotificationContext.Provider>
  )
}

