"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

import { LayoutGrid, SlidersHorizontal, ChevronDown, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Toaster, toast } from "sonner"
import ReviewCard from "./detsilcards"

interface Review {
  _id: string
  name: string
  rating: number
  date: string
  content: string
  isVerified?: boolean
}

// Mock API functions (replace these with your actual API calls)
const fetchReviews = async (): Promise<Review[]> => {
  // Simulating API call
  return new Promise((resolve) => {
    setTimeout(() => resolve(initialReviews), 500)
  })
}

const createReview = async (review: Omit<Review, "_id" | "date">): Promise<Review> => {
  // Simulating API call
  return new Promise((resolve) => {
    setTimeout(() => {
      const newReview = {
        ...review,
        _id: Math.random().toString(36).substr(2, 9),
        date: new Date().toLocaleDateString(),
      }
      resolve(newReview)
    }, 500)
  })
}

const updateReview = async (id: string, review: Partial<Review>): Promise<Review> => {
  // Simulating API call
  return new Promise((resolve) => {
    setTimeout(() => {
      const updatedReview = { ...review, _id: id, date: new Date().toLocaleDateString() } as Review
      resolve(updatedReview)
    }, 500)
  })
}

const deleteReview = async (id: string): Promise<void> => {
  // Simulating API call
  return new Promise((resolve) => {
    setTimeout(resolve, 500)
  })
}

const initialReviews: Review[] = [
  {
    _id: "1",
    name: "Samantha D.",
    rating: 4.5,
    date: "August 14, 2023",
    content:
      "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
    isVerified: true,
  },
  {
    _id: "2",
    name: "Alex M.",
    rating: 4,
    date: "August 15, 2023",
    content:
      "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
    isVerified: true,
  },
  // ... (other initial reviews)
]

export default function ReviewsSection() {
  const [sortBy, setSortBy] = useState("latest")
  const [reviews, setReviews] = useState<Review[]>([])
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [formData, setFormData] = useState<Partial<Review>>({
    name: "",
    rating: 5,
    content: "",
  })
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    const loadReviews = async () => {
      const fetchedReviews = await fetchReviews()
      setReviews(fetchedReviews)
    }
    loadReviews()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      if (isEditing && formData._id) {
        const updatedReview = await updateReview(formData._id, formData)
        setReviews((prevReviews) => prevReviews.map((review) => (review._id === formData._id ? updatedReview : review)))
        toast.success("Review updated successfully")
      } else {
        const newReview = await createReview(formData as Omit<Review, "_id" | "date">)
        setReviews((prevReviews) => [...prevReviews, newReview])
        toast.success("Review posted successfully")
      }
      resetForm()
    } catch (error) {
      toast.error(`Failed to ${isEditing ? "update" : "post"} review`)
    }
  }

  const handleEdit = (review: Review) => {
    setFormData(review)
    setIsEditing(true)
    setIsFormOpen(true)
  }

  const handleDelete = async (id: string) => {
    try {
      await deleteReview(id)
      setReviews((prevReviews) => prevReviews.filter((review) => review._id !== id))
      toast.success("Review deleted successfully")
    } catch (error) {
      toast.error("Failed to delete review")
    }
  }

  const resetForm = () => {
    setFormData({ name: "", rating: 5, content: "" })
    setIsEditing(false)
    setIsFormOpen(false)
  }

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="md:text-2xl text-1xl font-bold">All Reviews</h2>
            <span className="text-base text-muted-foreground">({reviews.length})</span>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <Button variant="outline" size="icon" className="hidden md:flex">
              <LayoutGrid className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="hidden md:flex">
              <SlidersHorizontal className="h-4 w-4" />
            </Button>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-[130px] justify-between">
                  {sortBy === "latest" ? "Latest" : sortBy === "highest" ? "Highest Rated" : "Lowest Rated"}
                  <ChevronDown className="h-4 w-4 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Button
                  variant="ghost"
                  className="w-full justify-start font-normal"
                  onClick={() => setSortBy("latest")}
                >
                  Latest
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start font-normal"
                  onClick={() => setSortBy("highest")}
                >
                  Highest Rated
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start font-normal"
                  onClick={() => setSortBy("lowest")}
                >
                  Lowest Rated
                </Button>
              </PopoverContent>
            </Popover>
            <Button className="bg-black text-white hover:bg-black/90" onClick={() => setIsFormOpen(true)}>
              Write a Review
            </Button>
          </div>
        </div>
        {isFormOpen && (
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">{isEditing ? "Edit Review" : "Write a Review"}</h3>
              <Button variant="ghost" size="icon" onClick={resetForm}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="rating">Rating</Label>
                <Input
                  id="rating"
                  type="number"
                  min="1"
                  max="5"
                  value={formData.rating}
                  onChange={(e) => setFormData({ ...formData, rating: Number(e.target.value) })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="content">Review</Label>
                <Textarea
                  id="content"
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  required
                />
              </div>
              <Button type="submit" className="bg-black text-white hover:bg-black/90">
                {isEditing ? "Update Review" : "Post Review"}
              </Button>
            </form>
          </div>
        )}
        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review) => (
            <ReviewCard key={review._id} {...review} onEdit={handleEdit} onDelete={handleDelete} />
          ))}
        </div>
      </div>
      <Toaster richColors />
    </section>
  )
}

