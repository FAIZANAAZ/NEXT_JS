"use client"

import { useStore } from "@/lib/store"
// ismy hi wishlist ka sara function adata sb ara he
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingCart, Trash2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Wishlist() {
  const { wishlist, removeFromWishlist, addToCart } = useStore()

  if (wishlist.length === 0) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Your Wishlist</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Your wishlist is empty.</p>
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
        <CardTitle>Your Wishlist ({wishlist.length} items)</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {wishlist.map((product:any) => (
          <div key={product.id} className="flex items-center gap-4 py-4 border-b">
            <div className="relative h-20 w-20 flex-shrink-0">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover rounded-md"
              />
            </div>

            <div className="flex-1 min-w-0">
              <Link href={`/products/${product.id}`} className="hover:underline">
                <h3 className="font-medium">{product.name}</h3>
              </Link>
              <p className="text-sm text-muted-foreground">${product.price.toFixed(2)}</p>
            </div>

            <div className="flex gap-2">
              <Button
                variant="default"
                size="sm"
                onClick={() => {
                  addToCart(product)
                   // yha ye wo again add to car kr skta heor jis card pr click hoga wo apna dta lekr chaly jayga 
                  removeFromWishlist(product.id)
                  // or wohi card wishlist sy remove ho jayga
                 
                }}
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart

              </Button>

              <Button variant="ghost" size="icon" onClick={() => removeFromWishlist(product.id)}>
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

