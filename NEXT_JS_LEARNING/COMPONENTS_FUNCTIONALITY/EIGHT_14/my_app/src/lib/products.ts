import type { Product } from "@/types"

// Mock data for products
const mockProducts: Product[] = [
  {
    id: "product-1",
    name: "Wireless Bluetooth Headphones",
    description: "Premium noise-cancelling headphones with 30-hour battery life and comfortable over-ear design.",
    price: 199.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Electronics",
    rating: 4.7,
    reviewCount: 128,
    stock: 45,
    discount: 15,
    images: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300&text=Side+View",
      "/placeholder.svg?height=300&width=300&text=Back+View",
      "/placeholder.svg?height=300&width=300&text=With+Case",
    ],
    details:
      "Experience premium sound quality with these wireless headphones. Features include active noise cancellation, touch controls, and voice assistant support. The comfortable memory foam ear cushions make these perfect for all-day wear.",
    specifications: {
      "Battery Life": "30 hours",
      "Bluetooth Version": "5.0",
      "Noise Cancellation": "Active",
      Weight: "250g",
      Charging: "USB-C",
      Warranty: "2 years",
    },
  },
  {
    id: "product-2",
    name: "Smart Fitness Tracker",
    description: "Track your workouts, heart rate, sleep, and more with this waterproof fitness band.",
    price: 89.99,
    image: "/placeholder.svg?height=300&width=300&text=Fitness+Tracker",
    category: "Wearables",
    rating: 4.5,
    reviewCount: 94,
    stock: 78,
    discount: 10,
    images: [
      "/placeholder.svg?height=300&width=300&text=Fitness+Tracker",
      "/placeholder.svg?height=300&width=300&text=Side+View",
      "/placeholder.svg?height=300&width=300&text=App+Interface",
    ],
    details:
      "This advanced fitness tracker monitors your heart rate, steps, calories burned, and sleep patterns. The built-in GPS tracks your routes during outdoor activities. Water-resistant up to 50 meters, it's perfect for swimming and showering.",
    specifications: {
      "Battery Life": "7 days",
      "Water Resistance": "50m",
      Display: "OLED Touch",
      Sensors: "Heart rate, Accelerometer, GPS",
      Compatibility: "iOS, Android",
      Warranty: "1 year",
    },
  },
  {
    id: "product-3",
    name: "Ultra HD 4K Smart TV",
    description: "55-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
    price: 699.99,
    image: "/placeholder.svg?height=300&width=300&text=Smart+TV",
    category: "Electronics",
    rating: 4.8,
    reviewCount: 156,
    stock: 23,
    discount: 0,
    images: [
      "/placeholder.svg?height=300&width=300&text=Smart+TV",
      "/placeholder.svg?height=300&width=300&text=Side+View",
      "/placeholder.svg?height=300&width=300&text=Remote",
      "/placeholder.svg?height=300&width=300&text=Ports",
    ],
    details:
      "Immerse yourself in stunning 4K resolution with this smart TV. Features include HDR for enhanced contrast, built-in streaming apps, voice control, and multiple HDMI ports for all your devices.",
    specifications: {
      "Screen Size": "55 inches",
      Resolution: "4K Ultra HD (3840 x 2160)",
      HDR: "Yes",
      "Smart Features": "Built-in Wi-Fi, Voice Control",
      Ports: "4 HDMI, 3 USB, Ethernet",
      Warranty: "2 years",
    },
  },
  {
    id: "product-4",
    name: "Professional DSLR Camera",
    description: "24.1 Megapixel DSLR camera with 18-55mm lens kit, perfect for photography enthusiasts.",
    price: 899.99,
    image: "/placeholder.svg?height=300&width=300&text=DSLR+Camera",
    category: "Photography",
    rating: 4.9,
    reviewCount: 87,
    stock: 15,
    discount: 5,
    images: [
      "/placeholder.svg?height=300&width=300&text=DSLR+Camera",
      "/placeholder.svg?height=300&width=300&text=Front+View",
      "/placeholder.svg?height=300&width=300&text=Back+View",
      "/placeholder.svg?height=300&width=300&text=With+Lens",
    ],
    details:
      "Capture stunning photos and videos with this professional DSLR camera. Features include a 24.1 megapixel CMOS sensor, 4K video recording, built-in Wi-Fi for easy sharing, and a vari-angle touchscreen.",
    specifications: {
      Megapixels: "24.1 MP",
      "Sensor Type": "CMOS",
      "Video Recording": "4K",
      Connectivity: "Wi-Fi, Bluetooth",
      "Battery Life": "1200 shots",
      Warranty: "1 year",
    },
  },
  {
    id: "product-5",
    name: "Ergonomic Office Chair",
    description: "Adjustable office chair with lumbar support, breathable mesh back, and comfortable cushion.",
    price: 249.99,
    image: "/placeholder.svg?height=300&width=300&text=Office+Chair",
    category: "Furniture",
    rating: 4.6,
    reviewCount: 112,
    stock: 32,
    discount: 0,
    images: [
      "/placeholder.svg?height=300&width=300&text=Office+Chair",
      "/placeholder.svg?height=300&width=300&text=Side+View",
      "/placeholder.svg?height=300&width=300&text=Back+View",
      "/placeholder.svg?height=300&width=300&text=Adjustment+Levers",
    ],
    details:
      "Work in comfort with this ergonomic office chair. Features include adjustable height, tilt, and armrests, breathable mesh back for ventilation, and lumbar support for proper posture.",
    specifications: {
      Material: "Mesh and Fabric",
      "Weight Capacity": "300 lbs",
      "Adjustable Height": "Yes",
      Armrests: "3D Adjustable",
      Recline: "Up to 135°",
      Warranty: "5 years",
    },
  },
  {
    id: "product-6",
    name: "Portable Bluetooth Speaker",
    description: "Waterproof Bluetooth speaker with 20-hour battery life and powerful 360° sound.",
    price: 129.99,
    image: "/placeholder.svg?height=300&width=300&text=Bluetooth+Speaker",
    category: "Electronics",
    rating: 4.4,
    reviewCount: 76,
    stock: 54,
    discount: 20,
    images: [
      "/placeholder.svg?height=300&width=300&text=Bluetooth+Speaker",
      "/placeholder.svg?height=300&width=300&text=Side+View",
      "/placeholder.svg?height=300&width=300&text=Controls",
      "/placeholder.svg?height=300&width=300&text=Charging+Port",
    ],
    details:
      "Take your music anywhere with this portable Bluetooth speaker. Features include waterproof design (IPX7 rated), 20-hour battery life, powerful 360° sound, and the ability to pair multiple speakers for stereo sound.",
    specifications: {
      "Battery Life": "20 hours",
      "Waterproof Rating": "IPX7",
      "Bluetooth Version": "5.0",
      "Power Output": "30W",
      Charging: "USB-C",
      Warranty: "1 year",
    },
  },
]

// Function to get all products with pagination and filtering
export async function getProducts({
  page = 1,
  category,
  minPrice,
  maxPrice,
  sort,
}: {
  page?: number
  category?: string
  minPrice?: number
  maxPrice?: number
  sort?: string
}) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  let filteredProducts = [...mockProducts]

  // Apply category filter
  if (category) {
    const categories = category.split(",")
    filteredProducts = filteredProducts.filter((product) => categories.includes(product.category))
  }

  // Apply price filters
  if (minPrice !== undefined) {
    filteredProducts = filteredProducts.filter((product) => product.price >= minPrice)
  }

  if (maxPrice !== undefined) {
    filteredProducts = filteredProducts.filter((product) => product.price <= maxPrice)
  }

  // Apply sorting
  if (sort) {
    switch (sort) {
      case "price-asc":
        filteredProducts.sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        filteredProducts.sort((a, b) => b.price - a.price)
        break
      case "rating-desc":
        filteredProducts.sort((a, b) => b.rating - a.rating)
        break
      case "newest":
        // In a real app, you would sort by date
        // For this demo, we'll just reverse the array to simulate newest first
        filteredProducts.reverse()
        break
      default:
        // "featured" or any other value - no specific sorting
        break
    }
  }

  // Calculate pagination
  const itemsPerPage = 6
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)
  const startIndex = (page - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex)

  return {
    products: paginatedProducts,
    totalPages,
    totalProducts: filteredProducts.length,
  }
}

// Function to get a single product by ID
export async function getProductById(id: string) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300))

  return mockProducts.find((product) => product.id === id) || null
}

// Function to get related products
export async function getRelatedProducts(currentProductId: string, category: string) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 400))

  // Get products in the same category, excluding the current product
  const relatedProducts = mockProducts
    .filter((product) => product.category === category && product.id !== currentProductId)
    .slice(0, 4) // Limit to 4 related products

  return relatedProducts
}

