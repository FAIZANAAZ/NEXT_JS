"use client"

import Image from "next/image"
import Link from "next/link"
import type { Product } from "@/lib/data"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type ProductCardProps = {
  product: Product
  onAddToCart?: (product: Product) => void
  onAddToWishlist?: (product: Product) => void
}

// yha only card bn rhy hen 
export default function ProductCard({ product, onAddToCart, onAddToWishlist }: ProductCardProps) {
  return (
    <Card className="overflow-hidden">
      <Link href={`/products/${product.id}`}>
        <div className="aspect-square relative overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
        </div>
      </Link>
      <CardContent className="p-4">
        <Link href={`/products/${product.id}`} className="hover:underline">
          <h3 className="font-semibold text-lg truncate">{product.name}</h3>
        </Link>
        <p className="text-muted-foreground text-sm line-clamp-2 h-10">{product.description}</p>
        <p className="font-bold mt-2">${product.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex gap-2">
        {onAddToCart && (
          <Button variant="default" size="sm" className="flex-1" onClick={() => onAddToCart(product)}>
            Add to Cart
          </Button>
        )}
        {onAddToWishlist && (
          <Button variant="outline" size="sm" className="flex-1" onClick={() => onAddToWishlist(product)}>
            Wishlist
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

