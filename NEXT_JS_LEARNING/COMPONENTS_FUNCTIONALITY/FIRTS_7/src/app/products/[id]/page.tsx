
import ProductDetail from "@/components/product-detail"
import ProductListing from "@/components/product-listing"
import { getProductById, products } from "@/lib/data"
import { notFound } from "next/navigation"

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id)

  if (!product) {
    notFound()
  }

  // Get related products from the same category
  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)

  return (
    <main className="container mx-auto py-8 px-4">
      <ProductDetail product={product} />

      {relatedProducts.length > 0 && (
        <div className="mt-12">
          <ProductListing products={relatedProducts} title="You may also like" />
        </div>
      )}
    </main>
  )
}

