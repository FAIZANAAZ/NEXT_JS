import { Suspense } from "react"
import { notFound } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"

import ReviewsSection from "@/components/reviews-section"
import { Skeleton } from "@/components/ui/skeleton"
import { getProductById } from "@/lib/products"
import NotificationProvider from "@/components/notification-provider"
import ProductDetails from "@/components/product-detail"
import RelatedProducts from "@/components/related-product"

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProductById(params.id)

  if (!product) {
    notFound()
  }

  return (
    <NotificationProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8">
          <ProductDetails product={product} />

          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Reviews</h2>
            <Suspense fallback={<Skeleton className="h-40 w-full" />}>
              <ReviewsSection productId={params.id} />
            </Suspense>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Related Products</h2>
            <Suspense fallback={<RelatedProductsSkeleton />}>
              <RelatedProducts currentProductId={params.id} category={product.category} />
            </Suspense>
          </div>
        </main>
        <Footer />
      </div>
    </NotificationProvider>
  )
}

function RelatedProductsSkeleton() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {Array(4)
        .fill(0)
        .map((_, i) => (
          <div key={i} className="border rounded-lg p-4">
            <Skeleton className="h-32 w-full mb-2" />
            <Skeleton className="h-4 w-3/4 mb-2" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        ))}
    </div>
  )
}

