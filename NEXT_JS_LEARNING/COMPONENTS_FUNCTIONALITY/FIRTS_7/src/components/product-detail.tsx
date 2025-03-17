"use client"

import Image from "next/image"
import type { Product } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useStore } from "@/lib/store"
import { Heart, ShoppingCart } from "lucide-react"

type ProductDetailProps = {
  product: Product
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const { addToCart, addToWishlist } = useStore()

  return (
    <Card className="overflow-hidden">
      <div className="grid md:grid-cols-2 gap-6 p-6">
        <div className="relative aspect-square">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover rounded-md"
          />
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>

          <p className="text-4xl font-bold">${product.price.toFixed(2)}</p>

          <div className="border-t border-b py-4 my-4">
            <p className="text-muted-foreground">{product.description}</p>
          </div>

          <div className="flex gap-4">
            <Button size="lg" className="flex-1" onClick={() => addToCart(product)}>
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>

            <Button variant="outline" size="lg" onClick={() => addToWishlist(product)}>
              <Heart className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}

