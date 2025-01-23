"use client"
import Image from "next/image"
import * as React from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Slider } from "@/components/ui/slider"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

const categories = ["tshirt", "short", "shirt", "hoodie", "jeans"]

const colors = [
  { name: "Green", class: "bg-[#00C12B]" },
  { name: "Red", class: "bg-[#F50606]" },
  { name: "Yellow", class: "bg-[#F5DD06]" },
  { name: "Orange", class: "bg-[#F57906]" },
  { name: "Light Blue", class: "bg-[#06CAF5]" },
  { name: "Blue", class: "bg-[#063AF5]" },
  { name: "Purple", class: "bg-[#7D06F5]" },
  { name: "Pink", class: "bg-[#F506A4]" },
  { name: "White", class: "bg-white" },
  { name: "Black", class: "bg-black" },
]

const sizes = ["S", "XXL", "XL", "L", "M"]


interface FiltersSidebarProps {
  onFilterChange: (filterName: string, value:number[] | string[]) => void
  selectedFilters: {
    priceRange: number[]
    selectedColors: string[]
    selectedCategories: string[]
    selectedSizes: string[]
    selectedDressStyles: string[]
  }
}

export function FiltersSidebar({ onFilterChange, selectedFilters }: FiltersSidebarProps) {
  const [openSections, setOpenSections] = React.useState({
    categories: true,
    price: true,
    colors: true,
    size: true,
    dressStyle: true,
  })

  const handlePriceChange = (newPriceRange: number[]) => {
    onFilterChange("priceRange", newPriceRange)
  }

  const handleColorChange = (color: string) => {
    const updatedColors = selectedFilters.selectedColors.includes(color)
      ? selectedFilters.selectedColors.filter((c: string) => c !== color)
      : [...selectedFilters.selectedColors, color]
    onFilterChange("selectedColors", updatedColors)
  }

  const handleCategoryChange = (category: string) => {
    const updatedCategories = selectedFilters.selectedCategories.includes(category)
      ? selectedFilters.selectedCategories.filter((c: string) => c !== category)
      : [...selectedFilters.selectedCategories, category]
    onFilterChange("selectedCategories", updatedCategories)
  }

  const handleSizeChange = (size: string) => {
    const updatedSizes = selectedFilters.selectedSizes.includes(size)
      ? selectedFilters.selectedSizes.filter((s: string) => s !== size)
      : [...selectedFilters.selectedSizes, size]
    onFilterChange("selectedSizes", updatedSizes)
  }

  const handleDressStyleChange = (style: string) => {
    const updatedStyles = selectedFilters.selectedDressStyles.includes(style)
      ? selectedFilters.selectedDressStyles.filter((s: string) => s !== style)
      : [...selectedFilters.selectedDressStyles, style]
    onFilterChange("selectedDressStyles", updatedStyles)
  }

  return (
    <div className="box-border flex flex-col items-start w-[295px] min-h-[1220px] p-[20px_24px] gap-6 border border-black/10 rounded-[20px] bg-white font-['Satoshi']">
      {/* Header */}
      <div className="flex justify-between items-center w-full">
        <div className="flex justify-between items-center w-full">
          <h2 className="text-xl font-bold">Filters</h2>
          <div className="w-[24px] h-[24px] opacity-40" />
          <Image src="/filterlogo.png" alt="logo" width={24} height={24} />
        </div>
      </div>

      <div className="w-full h-px bg-black/10" />

      {/* Categories */}
      <div className="w-full space-y-5">
        {categories.map((category: string) => (
          <div key={category} className="flex justify-between items-center">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedFilters.selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
                className="form-checkbox h-4 w-4 text-black rounded"
              />
              <span className="text-base text-black/60">{category}</span>
            </label>
            <ChevronDown className="w-4 h-4 text-black/60" />
          </div>
        ))}
      </div>

      <div className="w-full h-px bg-black/10" />

      {/* Price Range */}
      <Collapsible
        open={openSections.price}
        onOpenChange={(open) => setOpenSections({ ...openSections, price: open })}
        className="w-full space-y-5"
      >
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold">Price</h3>
          <CollapsibleTrigger>
            {openSections.price ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="space-y-4">
          <Slider
            value={selectedFilters.priceRange}
            max={500}
            min={50}
            step={1}
            onValueChange={handlePriceChange}
            className="w-full"
          />
          <div className="flex justify-between text-sm">
            <span>${selectedFilters.priceRange[0]}</span>
            <span>${selectedFilters.priceRange[1]}</span>
          </div>
        </CollapsibleContent>
      </Collapsible>

      <div className="w-full h-px bg-black/10" />

      {/* Colors */}
      <Collapsible
        open={openSections.colors}
        onOpenChange={(open) => setOpenSections({ ...openSections, colors: open })}
        className="w-full space-y-5"
      >
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold">Colors</h3>
          <CollapsibleTrigger>
            {openSections.colors ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent>
          <div className="grid grid-cols-5 gap-4">
            {colors.map((color) => (
              <button
                key={color.name}
                className={`w-[37px] h-[37px] rounded-full border-2 ${
                  selectedFilters.selectedColors.includes(color.name) ? "border-black" : "border-black/20"
                } ${color.class}`}
                aria-label={`Select ${color.name}`}
                onClick={() => handleColorChange(color.name)}
              />
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>

      <div className="w-full h-px bg-black/10" />

      {/* Sizes */}
      <Collapsible
        open={openSections.size}
        onOpenChange={(open) => setOpenSections({ ...openSections, size: open })}
        className="w-full space-y-5"
      >
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold">Size</h3>
          <CollapsibleTrigger>
            {openSections.size ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent>
          <div className="flex flex-wrap gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                className={`px-5 py-2.5 rounded-[62px] text-sm
                  ${selectedFilters.selectedSizes.includes(size) ? "bg-black text-white font-medium" : "bg-[#F0F0F0] text-black/60"}`}
                onClick={() => handleSizeChange(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>

      <div className="w-full h-px bg-black/10" />

      {/* Dress Style */}
      <Collapsible
        open={openSections.dressStyle}
        onOpenChange={(open) => setOpenSections({ ...openSections, dressStyle: open })}
        className="w-full space-y-5"
      >
        
      
      </Collapsible>
    </div>
  )
}


