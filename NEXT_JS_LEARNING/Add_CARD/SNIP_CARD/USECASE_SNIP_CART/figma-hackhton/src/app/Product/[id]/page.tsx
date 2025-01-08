'use client'

import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { ChevronRight, Star } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from 'next/navigation'

declare global {
  interface Window {
    Snipcart: any;
  }
}

const sizes = ['Small', 'Medium', 'Large', 'X-Large']
const colors = ['#4f4631', '#314f4a', '#6e2c7d'] // Brown, Green, Purple

export default function ProductDetail() {
  const searchParams = useSearchParams()

  
  const imageUrl = searchParams.get('imageUrl') || ''
  const h1 = searchParams.get('h1') || ''
  const ranking = searchParams.get('ranking') || ''
  const price = searchParams.get('price') || ''
  const initialSelectedSize = searchParams.get('selectedSize') || 'Medium'
  const initialSelectedColor = searchParams.get('selectedColor') || colors[0]


  const [selectedSize, setSelectedSize] = useState(initialSelectedSize)
  const [selectedColor, setSelectedColor] = useState(initialSelectedColor)


 const handleAddToCart = () => {
  // URL parameters encode kar rahe hain to handle spaces and special characters
  const url = `/products/productDetail?heading=${encodeURIComponent(h1)}&stars=${encodeURIComponent(ranking)}&ranking=${encodeURIComponent(ranking)}&price=${price}&id=${imageUrl}&selectedSize=${selectedSize}&selectedColor=${selectedColor}`;

  // Snipcart API call
  window.Snipcart.api.cart.items.add({
    id: imageUrl,
    name: h1,
    price: price,
    url: url, // Properly encoded URL
    image: imageUrl,
    quantity: 1,
    customFields: [
      {
        name: "Ranking",
        value: ranking, // Ranking as custom field
      },
      {
        name: "Size",
        value: selectedSize, // Adding Size
      },
      {
        name: "Color",
        value: selectedColor, // Adding Color
      },
    ],
  });
};

  

  return (
    <div className="max-w-[1440px] mx-auto px-6 py-8">
      {/* Breadcrumb */}
      <nav className="md:flex hidden items-center gap-4 mb-8 text-base">
        <Link href="/" className="text-muted-foreground hover:text-black">Home</Link>
        <ChevronRight className="w-4 h-4 text-muted-foreground" />
        <Link href="#!" className="text-muted-foreground hover:text-black">Shop</Link>
        <ChevronRight className="w-4 h-4 text-muted-foreground" />
        <Link href="#!" className="text-muted-foreground hover:text-black">Men</Link>
        <ChevronRight className="w-4 h-4 text-muted-foreground" />
        <span className="text-black">T-shirts</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div className="flex gap-6 flex-col md:flex-row">
          <div className="flex flex-col items-center gap-4">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="w-20 h-20 border rounded-lg overflow-hidden">
                <Image
                  src={imageUrl}
                  alt={`Product thumbnail ${index + 1}`}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="flex-1 aspect-square rounded-lg overflow-hidden">
            <Image
              src={imageUrl}
              alt="Product main image"
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="md:text-3xl font-bold">{h1}</h1>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#FFC633] text-[#FFC633]" />
              ))}
              <span className="text-sm text-muted-foreground">({ranking})</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-2xl font-bold">${price}</span>
              <span className="text-xl text-muted-foreground line-through">$300</span>
            </div>
            <p className='text-gray-600 text-start'>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
          </div>

          <div className="space-y-4">
            <span className="text-sm font-medium">Select Color</span>
            <div className="flex gap-3">
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full border-2 ${selectedColor === color ? 'border-black' : 'border-transparent'}`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <span className="text-sm font-medium">Choose Size</span>
            <div className="flex flex-wrap gap-3">
              {sizes.map((size) => (
                <Button
                  key={size}
                  variant={selectedSize === size ? 'default' : 'outline'}
                  onClick={() => setSelectedSize(size)}
                  className={`min-w-[100px] ${selectedSize === size ? 'bg-black rounded-[40px] text-white' : ''}`}
                >
                  {size}
                </Button>
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center md:flex-row gap-6">
            <Button onClick={handleAddToCart} className="h-12 px-12 rounded-[40px] w-full text-white hover:bg-black/90">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

