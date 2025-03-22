"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

import { getRelatedProducts } from "@/lib/products"
import type { Product } from "@/types"

interface RelatedProductsProps {
  currentProductId: string
  category: string
}

export default function RelatedProducts({ currentProductId, category }: RelatedProductsProps) {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [scrollPosition, setScrollPosition] = useState(0)



  useEffect(() => {
    const fetchRelatedProducts = async () => {
      setLoading(true)
      try {
        const result = await getRelatedProducts(currentProductId, category)
        setProducts(result)
      } catch (error) {
        console.error("Failed to fetch related products:", error)
        
      } finally {
        setLoading(false)
      }
    }

    fetchRelatedProducts()
  }, [currentProductId, category])

  const scroll = (direction: "left" | "right") => {
    const container = document.getElementById("related-products-container")
    if (!container) return

    const scrollAmount = 300
    const newPosition =
      direction === "left"
        ? Math.max(0, scrollPosition - scrollAmount)
        : Math.min(container.scrollWidth - container.clientWidth, scrollPosition + scrollAmount)

    container.scrollTo({
      left: newPosition,
      behavior: "smooth",
    })

    setScrollPosition(newPosition)
  }

  // loading true hai: Toh ek placeholder (empty card with loading animation) dikhayi degi.
  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <Card key={i} className="animate-pulse">
              <div className="h-40 bg-muted"></div>
              <CardContent className="p-4">
                <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-muted rounded w-1/2"></div>
              </CardContent>
            </Card>
          ))}
      </div>
    )
  }

  if (products.length === 0) {
    return null
  }

  return (
    <div className="relative">
      <div className="flex items-center justify-between bg-white mb-4">
        <h3 className="text-lg font-semibold"></h3>
        <div className="flex space-x-2">
          <Button variant="outline" size="icon" onClick={() => scroll("left")} disabled={scrollPosition === 0}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={() => scroll("right")}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div
        id="related-products-container"
        className="flex overflow-x-auto scrollbar-hide space-x-4 pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {products.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`} className="flex-none w-[200px]">
            <Card className="h-full">
              <div className="h-40 bg-muted">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h4 className="font-medium line-clamp-1">{product.name}</h4>
                <div className="flex items-center justify-between mt-2">
                  <span className="font-bold">${product.price}</span>
                  <div className="flex items-center">
                    <span className="text-yellow-500">★</span>
                    <span className="text-sm ml-1">{product.rating}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

