// components/toast-provider.tsx
"use client"

import { Toaster } from "sonner"

export function ToastProvider() {
  return (
    <Toaster 
      position="bottom-right"
      toastOptions={{
        duration: 3000,
        className: "border border-border",
      }}
    />
  )
}