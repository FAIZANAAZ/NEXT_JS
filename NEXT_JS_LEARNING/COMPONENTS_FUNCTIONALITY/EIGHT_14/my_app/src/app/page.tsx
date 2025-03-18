import { Suspense } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductGrid from "@/components/product-grid"
import FilterPanel from "@/components/filter-panel"
import { Skeleton } from "@/components/ui/skeleton"
import NotificationProvider from "@/components/notification-provider"

export default function Home() {
  return (
    <NotificationProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">Featured Products</h1>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-1">
              <Suspense fallback={<FilterPanelSkeleton />}>
                <FilterPanel />
              </Suspense>
            </div>

            <div className="md:col-span-3">
              <Suspense fallback={<ProductGridSkeleton />}>
                <ProductGrid />
              </Suspense>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </NotificationProvider>
  )
}

function ProductGridSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array(6)
        .fill(0)
        .map((_, i) => (
          <div key={i} className="border rounded-lg p-4">
            <Skeleton className="h-40 w-full mb-4" />
            <Skeleton className="h-4 w-3/4 mb-2" />
            <Skeleton className="h-4 w-1/2 mb-4" />
            <Skeleton className="h-8 w-full" />
          </div>
        ))}
    </div>
  )
}

function FilterPanelSkeleton() {
  return (
    <div className="bg-card p-4 rounded-lg border">
      <Skeleton className="h-6 w-1/2 mb-4" />
      <Skeleton className="h-40 w-full mb-4" />
      <Skeleton className="h-40 w-full mb-4" />
      <Skeleton className="h-10 w-full" />
    </div>
  )
}

