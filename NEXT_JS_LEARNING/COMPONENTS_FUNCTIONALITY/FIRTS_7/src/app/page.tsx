
import CategoryList from "@/components/category-list"
import ProductListing from "@/components/product-listing"
import SearchBar from "@/components/search-bar"
import { products, searchProducts } from "@/lib/data"

export default function Home({
  searchParams,
}: {
  searchParams: { search?: string }
}) {
  const searchQuery = searchParams.search || ""
  const displayProducts = searchQuery ? searchProducts(searchQuery) : products

  return (
    <main className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <h1 className="text-3xl font-bold">Shop Our Products</h1>
        <SearchBar />
      </div>

      <CategoryList />

      <ProductListing
        products={displayProducts}
        title={searchQuery ? `Search results for "${searchQuery}"` : undefined}
      />
    </main>
  )
}

