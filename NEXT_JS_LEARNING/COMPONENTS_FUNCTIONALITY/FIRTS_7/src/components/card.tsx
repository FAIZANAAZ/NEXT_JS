"use client"

import { useStore } from "@/lib/store"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Minus, Plus, Trash2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useStore()
  const router = useRouter()

  const handleCheckout = () => {
    if (cart.length > 0) {
      router.push("/checkout")
    }
  }

  if (cart.length === 0) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Your Cart</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Your cart is empty.</p>
        </CardContent>
        <CardFooter>
          <Link href="/">
            <Button>Continue Shopping</Button>
          </Link>
        </CardFooter>
      </Card>
    )
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Your Cart ({cart.length} items)</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {cart.map((item: any) => (
          <div key={item.product.id} className="flex items-center gap-4 py-4 border-b">
            <div className="relative h-20 w-20 flex-shrink-0">
              <Image
                src={item.product.image || "/placeholder.svg"}
                alt={item.product.name}
                fill
                className="object-cover rounded-md"
              />
            </div>

            <div className="flex-1 min-w-0">
              <Link href={`/products/${item.product.id}`} className="hover:underline">
                <h3 className="font-medium">{item.product.name}</h3>
              </Link>
              <p className="text-sm text-muted-foreground">${item.product.price.toFixed(2)}</p>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
              >
                <Minus className="h-4 w-4" />
              </Button>

              <span className="w-8 text-center">{item.quantity}</span>

              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>

            <div className="text-right min-w-[80px]">
              <p className="font-medium">${(item.product.price * item.quantity).toFixed(2)}</p>
            </div>

            <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.product.id)}>
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </CardContent>

      <CardFooter className="flex flex-col gap-4">
        <div className="flex justify-between w-full text-lg font-bold">
          <span>Total:</span>
          <span>${getCartTotal().toFixed(2)}</span>
        </div>

        <div className="flex gap-4 w-full">
          <Button variant="outline" onClick={() => clearCart()}>
            Clear Cart
          </Button>
          <Button className="flex-1" onClick={handleCheckout}>
            Proceed to Checkout
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

