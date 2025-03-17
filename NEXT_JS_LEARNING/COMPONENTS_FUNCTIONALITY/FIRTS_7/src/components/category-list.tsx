import Link from "next/link"
import { categories } from "@/lib/data"
import { Button } from "@/components/ui/button"

export default function CategoryList() {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <Link href="/">
        <Button variant="outline" size="sm">
          All Products
        </Button>
      </Link>

      {categories.map((category) => (
        <Link key={category.id} href={`/categories/${category.id}`}>
          <Button variant="outline" size="sm">
            {category.name}
          </Button>
        </Link>
      ))}
    </div>
  )
}

