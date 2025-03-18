"use client"

import { useContext } from "react"
import { NotificationContext } from "@/lib/notification-context"

export function useNotifications() {
  return useContext(NotificationContext)
}

