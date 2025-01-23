"use client"

import Card from "../cards"
import { client } from "@/sanity/lib/client"
import { fetchAndUploadProducts } from "@/services/api"
import { useEffect, useState } from "react"
import { FiltersSidebar } from "./colorsbar"


interface CardItem {
  colors: string[]
  imageUrl: string
  name: string
  rating: number
  price: number
  _id: string
  isNew: boolean
  category: string
  sizes: string[]
  dressStyle: string
}

export default function ProductFilterColor() {
  const [Cardapi, setCard] = useState<CardItem[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [sortOption, setSortOption] = useState<string>("Most Popular")
  const [currentPage, setCurrentPage] = useState<number>(1)
  const cardsPerPage = 9 // Number of cards per page
  const totalPages = 3 // Set a maximum of 3 pages

  const [selectedFilters, setSelectedFilters] = useState({
    priceRange: [50, 300],
    selectedColors: [] as string[],
    selectedCategories: [] as string[],
    selectedSizes: [] as string[],
    selectedDressStyles: [] as string[],
  })

  const handleFilterChange = (filterName: string, value: string | number | string[] | number[]) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }))
  }

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await client.fetch(`*[_type=="products"]{
        _id,
        name,
        description,
        price,
        "imageUrl" : image.asset->url,
        category,
        discountPercent,
        "isNew": new,
        colors,
        sizes,
        dressStyle
      }`)
      setCard(products)
      if (!products || products.length === 0) {
        await fetchAndUploadProducts()

        const products = await client.fetch(`*[_type == "product" ][]{
          _id,
          name,
          description,
          "isNew": new,
          price,
          discountPercentage,
          priceWithoutDiscount,
          rating,
          ratingCount,
          tags,
          sizes,
          "imageUrl": image.asset->url,
          colors,
          category,
          dressStyle
        }`)
        setCard(products)
      }
    }

    fetchProducts()
  }, [])

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value)
  }

  const filteredProducts = Cardapi.filter(
    (product: CardItem) =>
      (product.name.toLowerCase().includes(searchQuery.trim().toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.trim().toLowerCase()) ||
        product.price.toString().includes(searchQuery.trim())) &&
      (selectedFilters.selectedColors.length === 0 ||
        selectedFilters.selectedColors.some((color) => product.colors.includes(color))) &&
      (selectedFilters.selectedCategories.length === 0 ||
        selectedFilters.selectedCategories.includes(product.category)) &&
      (selectedFilters.selectedSizes.length === 0 ||
        selectedFilters.selectedSizes.some((size) => product.sizes.includes(size))) &&
      (selectedFilters.selectedDressStyles.length === 0 ||
        selectedFilters.selectedDressStyles.includes(product.dressStyle)) &&
      product.price >= selectedFilters.priceRange[0] &&
      product.price <= selectedFilters.priceRange[1],
  )

  const sortedProducts = () => {
    switch (sortOption) {
      case "Price: Low to High":
        return filteredProducts.sort((a, b) => a.price - b.price)
      case "Price: High to Low":
        return filteredProducts.sort((a, b) => b.price - a.price)
      case "Most Popular":
      default:
        return filteredProducts
    }
  }

  // Pagination logic: Determine the indices for the current page
  const indexOfLastCard = currentPage * cardsPerPage
  const indexOfFirstCard = indexOfLastCard - cardsPerPage
  const currentCards = sortedProducts().slice(indexOfFirstCard, indexOfLastCard)

  // If there are fewer than 9 products left, repeat the first cards to fill the page
  const cardsToDisplay =
    currentCards.length < cardsPerPage
      ? [...currentCards, ...sortedProducts().slice(0, cardsPerPage - currentCards.length)]
      : currentCards

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <>
      <div className="md:px-[20px] grid md:grid-cols-[1fr_2.5fr] grid-cols-[1fr] py-16 justify-items-center md:justify-items-start gap-0">
        <FiltersSidebar onFilterChange={handleFilterChange} selectedFilters={selectedFilters} />

        <div className="mx-auto w-full py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-8">
          <div className="bg-white flex items-center flex-col justify-center">
            <div className="mb-4 sm:mb-6 md:mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between w-full">
              <h1 className="mr-2 text-2xl sm:text-3xl md:text-[32px] leading-tight sm:leading-[43.2px] font-bold mb-2 sm:mb-0">
                Casual
              </h1>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-[50%] p-2 border rounded-lg text-lg"
              />
              <select
                value={sortOption}
                onChange={handleSortChange}
                className="w-full sm:w-auto mt-2 sm:mt-0 rounded-md border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              >
                <option>Most Popular</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>

            <div className="w-full h-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-x-[50px] md:gap-y-[150px] mt-4 sm:mt-6 md:mt-10">
              {cardsToDisplay.map((item: CardItem, index: number) => {
                return (
                  <Card
                    key={index}
                    imageUrl={item.imageUrl}
                    h1={item.name}
                    ranking={item.rating}
                    price={item.price}
                    id={item._id}
                    className="w-full max-w-[295px] h-auto aspect-square rounded-[13.42px] md:rounded-[20px] bg-[#F0EEED] mx-auto"
                  />
                )
              })}
            </div>

            <div className="mt-8 sm:mt-12 md:mt-[150px] w-full flex justify-center">
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className="w-full sm:w-auto max-w-[358px] h-[46px] md:h-[52px] rounded-[62px] py-2 sm:py-4 px-4 sm:px-[54px] hover:bg-gray-200 flex items-center justify-center text-sm sm:text-base mr-2"
              >
                Previous
              </button>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="w-full sm:w-auto max-w-[358px] h-[46px] md:h-[52px] rounded-[62px] py-2 sm:py-4 px-4 sm:px-[54px] hover:bg-gray-200 flex items-center justify-center text-sm sm:text-base"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

