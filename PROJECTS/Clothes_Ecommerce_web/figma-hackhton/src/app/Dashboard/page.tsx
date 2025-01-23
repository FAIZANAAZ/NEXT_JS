import { DashboardHeader } from "@/components/admindashbord/dashboard-header";
import { DashboardLayout } from "@/components/admindashbord/dashboard-layout";
import { ProductGrid } from "@/components/admindashbord/product-grid";


export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-4 p-4 md:p-6">
        <DashboardHeader />
        <ProductGrid />
      </div>
    </DashboardLayout>
  )
}

