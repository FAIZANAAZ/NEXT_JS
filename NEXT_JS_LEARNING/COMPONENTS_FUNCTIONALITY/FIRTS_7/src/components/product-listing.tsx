"use client"

import type { Product } from "@/lib/data"
import ProductCard from "./product-card"
import { useStore } from "@/lib/store"

type ProductListingProps = {
  products: Product[]
  title?: string
}
// cart show full list maping

export default function ProductListing({ products, title }: ProductListingProps) {
  const { addToCart, addToWishlist } = useStore()

  return (
    <div className="space-y-4">
      {title && <h2 className="text-2xl font-bold">{title}</h2>}

      {products.length === 0 ? (
        <p className="text-muted-foreground">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={addToCart} onAddToWishlist={addToWishlist} />
          ))}
        </div>
      )}
    </div>
  )
}

