"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { toast } from "sonner"
import type { Product } from "@/types"


// createcontext ko hm isi liye use krty hen data apna store krny ke liye ke hm jo hook bnaty hen osmy kiya kiya chizen ay gi osky liye phly hmy ak interface bnana hota he
// phir os interface ka use krky hm ak body bnaty hen creatcontext ke ander jo jochizen aygi filhal khali rkhty hen 

// usecontext ka use hm isi liye krty hen ke hm osy gobaly har componet me use kr sky bahir or usmy hm creatcontext ko rakhty hen
// or end me hm (component_name).provider me bhi name pass kr dety hen ke kiya kiya chizen ya functs hen phir wo acces ke kabil ho jata he har jha

interface CartItem extends Product {
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addToCart: (product: Product, quantity?: number) => void
  removeFromCart: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  totalItems: number
  subtotal: number
}

const CartContext = createContext<CartContextType>({
  items: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
  clearCart: () => {},
  totalItems: 0,
  subtotal: 0,
})

export const useCart = () => useContext(CartContext)

// yha tk ka kam bs osko globaly set krna tha ab agy kam start hoga body fill krny ka
interface CartProviderProps {
  children: ReactNode
}

export function CartProvider({ children }: CartProviderProps) {
  const [items, setItems] = useState<CartItem[]>([])

  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart))
      } catch (error) {
        console.error("Failed to parse cart from localStorage:", error)
      }
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items))
  }, [items])

  const addToCart = (product: Product, quantity = 1) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id)

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item,
        )
      } else {
        return [...prevItems, { ...product, quantity }]
      }
    })

    // Add toast notification when item is added to cart
    toast(`${product.name} has been added to your cart.`, {
      description: "Item added",
    })
  }

  const removeFromCart = (productId: string) => {
    setItems((prevItems) => {
      const itemToRemove = prevItems.find((item) => item.id === productId)
      const filteredItems = prevItems.filter((item) => item.id !== productId)

      if (itemToRemove) {
        toast("The item has been removed from your cart.", {
          description: "Item removed",
        })
      }

      return filteredItems
    })
  }

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(productId)
      return
    }

    setItems((prevItems) => prevItems.map((item) => (item.id === productId ? { ...item, quantity } : item)))

    // Add toast notification when quantity is updated
    toast("The item quantity has been updated in your cart.", {
      description: "Quantity updated",
    })
  }

  const clearCart = () => {
    setItems([])

    toast("All items have been removed from your cart.", {
      description: "Cart cleared",
    })
  }

  const totalItems = items.reduce((total, item) => total + item.quantity, 0)

  const subtotal = items.reduce((total, item) => {
    const price = item.discount > 0 ? item.price * (1 - item.discount / 100) : item.price
    return total + price * item.quantity
  }, 0)

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

