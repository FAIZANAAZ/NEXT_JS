"use client"

import { useContext } from "react"
import { NotificationContext } from "@/lib/notification-context"

export function useNotifications() {
  return useContext(NotificationContext)
}

// useContext hook ko use karke aap kisi bhi context se data access kar sakte ho.
// Yeh code NotificationContext ko use karta hai, jisme notification se related data aur functions store hote hain.
// useNotifications ek custom hook hai jo NotificationContext ko use karke notifications ke functions ko easily access karne mein madad karta hai.