
import CategoryList from "@/components/category-list"
import ProductListing from "@/components/product-listing"
import { categories, getProductsByCategory } from "@/lib/data"
import { notFound } from "next/navigation"

export default function CategoryPage({ params }: { params: { category: string } }) {
  const categoryId = params.category
  const category = categories.find((c) => c.id === categoryId)


  if (!category) {
    notFound()
  }

  const products = getProductsByCategory(categoryId)
  // ye product ke liye niakala he ke isi kisam ke products ay 

  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">{category.name}</h1>

      <CategoryList />

      <ProductListing products={products} />
    </main>
  )
}

