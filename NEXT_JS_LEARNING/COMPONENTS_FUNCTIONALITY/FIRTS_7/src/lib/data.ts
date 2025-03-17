// Mock data for our e-commerce store
export type Product = {
    id: string
    name: string
    description: string
    price: number
    image: string
    category: string
  }
  
  export const products: Product[] = [
    {
      id: "1",
      name: "Wireless Headphones",
      description: "Premium noise-cancelling wireless headphones with 30-hour battery life.",
      price: 199.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "electronics",
    },
    {
      id: "2",
      name: "Smartphone",
      description: "Latest model with high-resolution camera and all-day battery life.",
      price: 899.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "electronics",
    },
    {
      id: "3",
      name: "Running Shoes",
      description: "Lightweight running shoes with responsive cushioning.",
      price: 129.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "clothing",
    },
    {
      id: "4",
      name: "Cotton T-Shirt",
      description: "Soft, breathable cotton t-shirt available in multiple colors.",
      price: 24.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "clothing",
    },
    {
      id: "5",
      name: "Coffee Maker",
      description: "Programmable coffee maker with thermal carafe.",
      price: 79.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "home",
    },
    {
      id: "6",
      name: "Desk Lamp",
      description: "Adjustable LED desk lamp with multiple brightness settings.",
      price: 49.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "home",
    },
  ]
  
  export const categories = [
    { id: "electronics", name: "Electronics" },
    { id: "clothing", name: "Clothing" },
    { id: "home", name: "Home & Kitchen" },
  ]
  
  export function getProductById(id: string): Product | undefined {
    return products.find((product) => product.id === id)
  }
  
  export function getProductsByCategory(category: string): Product[] {
    return products.filter((product) => product.category === category)
  }
  
  export function searchProducts(query: string): Product[] {
    const lowercaseQuery = query.toLowerCase()
    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(lowercaseQuery) || product.description.toLowerCase().includes(lowercaseQuery),
    )
  }
  
  