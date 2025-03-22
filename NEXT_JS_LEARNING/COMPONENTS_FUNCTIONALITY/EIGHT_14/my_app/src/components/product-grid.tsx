"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Heart, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

import { useCart } from "@/hooks/use-cart"
import { useFavorites } from "@/hooks/use-favorites"
import { useSearchParams } from "next/navigation"
import Pagination from "@/components/pagination"
import { getProducts } from "@/lib/products"
import type { Product } from "@/types"

export default function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([])
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(true)

  const searchParams = useSearchParams()
  const page = searchParams ? Number(searchParams.get("page") || "1") : 1
  const category = searchParams ? searchParams.get("category") : null
  const minPrice = searchParams ? searchParams.get("minPrice") : null
  const maxPrice = searchParams ? searchParams.get("maxPrice") : null
  const sort = searchParams ? searchParams.get("sort") : null


  const { addToCart } = useCart()
  const { favorites, toggleFavorite } = useFavorites()

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      try {
        const result = await getProducts({
          page,
          category: category || undefined,
          minPrice: minPrice ? Number(minPrice) : undefined,
          maxPrice: maxPrice ? Number(maxPrice) : undefined,
          sort: sort || undefined,
        })

        setProducts(result.products)
        setTotalPages(result.totalPages)
      } catch (error) {
        console.error("Failed to fetch products:", error)
       
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [page, category, minPrice, maxPrice, sort])

  const handleAddToCart = (product: Product) => {
    addToCart(product)
    
  }

  const handleToggleFavorite = (product: Product) => {
    toggleFavorite(product.id)
    
  }

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <Card key={i} className="animate-pulse">
              <div className="h-48 bg-muted"></div>
              <CardContent className="p-4">
                <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-muted rounded w-1/2"></div>
              </CardContent>
            </Card>
          ))}
      </div>
    )
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <div className="relative h-48 bg-muted">
              <Link href={`/products/${product.id}`}>
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </Link>
              {product.discount > 0 && (
                <Badge className="absolute top-2 right-2 bg-red-500">{product.discount}% OFF</Badge>
              )}
              <Button
                variant="ghost"
                size="icon"
                className={`absolute top-2 left-2 bg-background/80 ${
                  favorites.includes(product.id) ? "text-red-500" : ""
                }`}
                onClick={() => handleToggleFavorite(product)}
              >
                <Heart className="h-5 w-5" fill={favorites.includes(product.id) ? "currentColor" : "none"} />
              </Button>
            </div>

            <CardContent className="p-4">
              <Link href={`/products/${product.id}`} className="hover:underline">
                <h3 className="font-semibold text-lg line-clamp-1">{product.name}</h3>
              </Link>
              <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{product.description}</p>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-2">
                  {product.discount > 0 ? (
                    <>
                      <span className="font-bold">${product.price * (1 - product.discount / 100)}</span>
                      <span className="text-sm text-muted-foreground line-through">${product.price}</span>
                    </>
                  ) : (
                    <span className="font-bold">${product.price}</span>
                  )}
                </div>
                <div className="flex items-center">
                  <span className="text-yellow-500">★</span>
                  <span className="text-sm ml-1">{product.rating}</span>
                </div>
              </div>
            </CardContent>

            <CardFooter className="p-4 pt-0">
              <Button className="w-full" onClick={() => handleAddToCart(product)}>
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {products.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium">No products found</h3>
          <p className="text-muted-foreground mt-2">Try adjusting your filters or search criteria.</p>
        </div>
      )}

      {totalPages > 1 && (
        <div className="mt-8">
          <Pagination currentPage={page} totalPages={totalPages} />
        </div>
      )}
    </div>
  )
}

