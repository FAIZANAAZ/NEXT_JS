"use client"

import { useState } from "react"
import { Heart, Minus, Plus, Share2, ShoppingCart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useCart } from "@/hooks/use-cart"
import { useFavorites } from "@/hooks/use-favorites"
import type { Product } from "@/types"

interface ProductDetailsProps {
  product: Product
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

 
  const { addToCart } = useCart()
  const { favorites, toggleFavorite } = useFavorites()

  const isFavorite = favorites.includes(product.id)
  // Ye method check karta hai ke product.id favorites array ke andar mojood hai ya nahi.

  const handleAddToCart = () => {
    addToCart(product, quantity)
   
  }

  const handleToggleFavorite = () => {
    toggleFavorite(product.id)
    
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: product.name,
          text: product.description,
          url: window.location.href,
        })
        .catch((err) => {
          console.error("Error sharing:", err)
        })
    } else {
      navigator.clipboard.writeText(window.location.href)
      
    }
  }

  // ye sahre krty hen hm jesy oskosupport krta he 
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Product Images */}
      <div>
        <div className="aspect-square bg-muted rounded-lg overflow-hidden mb-4">
          <img
            src={product.images?.[selectedImage] || product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {product.images && product.images.length > 1 && (
          <div className="grid grid-cols-5 gap-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                className={`aspect-square bg-muted rounded-md overflow-hidden border-2 ${
                  selectedImage === index ? "border-primary" : "border-transparent"
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} - Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Product Info */}
      <div>
        <h1 className="text-3xl font-bold">{product.name}</h1>

        <div className="flex items-center mt-2 mb-4">
          <div className="flex items-center">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5"
                  fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                  color={i < Math.floor(product.rating) ? "#FFB800" : "#D1D5DB"}
                />
              ))}
          </div>
          <span className="ml-2 text-sm text-muted-foreground">
            {product.rating} ({product.reviewCount} reviews)
          </span>
        </div>

        <div className="flex items-center mt-4 mb-6">
          {product.discount > 0 ? (
            <>
              <span className="text-3xl font-bold">${(product.price * (1 - product.discount / 100)).toFixed(2)}</span>
              <span className="ml-2 text-lg text-muted-foreground line-through">${product.price.toFixed(2)}</span>
              <span className="ml-2 bg-red-100 text-red-800 text-sm font-medium px-2 py-0.5 rounded">
                {product.discount}% OFF
              </span>
            </>
          ) : (
            <span className="text-3xl font-bold">${product.price.toFixed(2)}</span>
          )}
        </div>

        <p className="text-muted-foreground mb-6">{product.description}</p>

        {/* Quantity Selector */}
        <div className="flex items-center mb-6">
          <span className="mr-4 font-medium">Quantity:</span>
          <div className="flex items-center border rounded-md">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              disabled={quantity <= 1}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="w-12 text-center">{quantity}</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setQuantity(quantity + 1)}
              disabled={quantity >= product.stock}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <span className="ml-4 text-sm text-muted-foreground">{product.stock} available</span>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Button size="lg" className="flex-1" onClick={handleAddToCart} disabled={product.stock === 0}>
            <ShoppingCart className="mr-2 h-5 w-5" />
            Add to Cart
          </Button>

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className={isFavorite ? "text-red-500" : ""}
              onClick={handleToggleFavorite}
            >
              <Heart className="h-5 w-5" fill={isFavorite ? "currentColor" : "none"} />
              <span className="sr-only">{isFavorite ? "Remove from favorites" : "Add to favorites"}</span>
            </Button>

            <Button variant="outline" size="icon" onClick={handleShare}>
              <Share2 className="h-5 w-5" />
              <span className="sr-only">Share product</span>
            </Button>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Tabs defaultValue="details">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="shipping">Shipping</TabsTrigger>
          </TabsList>

          <TabsContent value="details" className="pt-4">
            <div className="text-sm space-y-4">
              <p>{product.details || "No detailed description available for this product."}</p>
            </div>
          </TabsContent>

          <TabsContent value="specifications" className="pt-4">
            <div className="text-sm">
              {product.specifications ? (
                <ul className="space-y-2">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <li key={key} className="grid grid-cols-2">
                      <span className="font-medium">{key}</span>
                      <span>{value}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No specifications available for this product.</p>
              )}
            </div>
          </TabsContent>

          <TabsContent value="shipping" className="pt-4">
            <div className="text-sm space-y-4">
              <p>Standard shipping: 3-5 business days</p>
              <p>Express shipping: 1-2 business days (additional fee)</p>
              <p>Free shipping on orders over $50</p>
              <p>Returns accepted within 30 days of delivery</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

