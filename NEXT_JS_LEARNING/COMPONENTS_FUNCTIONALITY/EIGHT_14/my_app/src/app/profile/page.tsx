import { Suspense } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import UserProfile from "@/components/user-profile"
import { Skeleton } from "@/components/ui/skeleton"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import UserOrders from "@/components/user-orders"
import UserReviews from "@/components/user-reviews"
import NotificationProvider from "@/components/notification-provider"
import { getUserProfile } from "@/lib/user"

export default async function ProfilePage() {
  const user = await getUserProfile()

  return (
    <NotificationProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">My Profile</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <Suspense fallback={<Skeleton className="h-80 w-full" />}>
                <UserProfile user={user} />
              </Suspense>
            </div>

            <div className="md:col-span-2">
              <Tabs defaultValue="orders">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="orders">My Orders</TabsTrigger>
                  <TabsTrigger value="reviews">My Reviews</TabsTrigger>
                </TabsList>
                <TabsContent value="orders">
                  <Suspense fallback={<Skeleton className="h-60 w-full" />}>
                    <UserOrders userId={user.id} />
                  </Suspense>
                </TabsContent>
                <TabsContent value="reviews">
                  <Suspense fallback={<Skeleton className="h-60 w-full" />}>
                    <UserReviews userId={user.id} />
                  </Suspense>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </NotificationProvider>
  )
}

