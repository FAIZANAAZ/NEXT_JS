"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { useState } from "react"

const products = [
  {
    id: 1,
    name: "T-shirt for Men",
    price: 29.99,
    image: "/l1.png",
  },
  {
    id: 2,
    name: "Travel Bag Jeans",
    price: 89.99,
    image: "/l2.png",
  },
  {
    id: 3,
    name: "Jeans Shorts",
    price: 49.99,
    image: "/l3.png",
  },
  {
    id: 4,
    name: "Sofa for Interior",
    price: 349.99,
    image: "/l4.png",
  },
  {
    id: 5,
    name: "Leather Wallet",
    price: 79.99,
    image: "/p1.png",
  },
  {
    id: 6,
    name: "Travel Bag Jeans",
    price: 89.99,
    image: "/p2.png",
  },
  {
    id: 7,
    name: "Just a Hero",
    price: 279.99,
    image: "/p3.png",
  },
  {
    id: 8,
    name: "Coffee Camera 4K",
    price: 829.99,
    image: "/p4.png",
  },
  {
    id: 9,
    name: "Headset Beats",
    price: 279.99,
    image: "/p5.png",
  },
  {
    id: 10,
    name: "Winter Jacket",
    price: 279.99,
    image: "/p6.png",
  },
]

export function ProductGrid() {
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 10
  const totalPages = Math.ceil(products.length / productsPerPage)

  const startIndex = (currentPage - 1) * productsPerPage
  const endIndex = startIndex + productsPerPage
  const currentProducts = products.slice(startIndex, endIndex)

  return (
    <div className="flex flex-col gap-6">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {currentProducts.map((product ,index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="p-0">
              <div className="aspect-square relative">
                <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-500">${product.price}</p>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex gap-2">
              <Button size="sm" variant="outline">
                Edit
              </Button>
              <Button size="sm" variant="outline">
                Delete
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="flex items-center justify-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <Button
            key={page}
            variant={currentPage === page ? "default" : "outline"}
            size="sm"
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </Button>
        ))}
        <Button
          variant="outline"
          size="sm"
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  )
}

