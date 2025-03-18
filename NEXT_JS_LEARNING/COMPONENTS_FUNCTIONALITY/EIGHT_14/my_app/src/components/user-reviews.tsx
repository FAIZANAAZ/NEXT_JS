"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Edit, Star, Trash } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useToast } from "@/hooks/use-toast"
import { getUserReviews, deleteReview } from "@/lib/reviews"
import type { UserReview } from "@/types"

interface UserReviewsProps {
  userId: string
}

export default function UserReviews({ userId }: UserReviewsProps) {
  const [reviews, setReviews] = useState<UserReview[]>([])
  const [loading, setLoading] = useState(true)
  const [reviewToDelete, setReviewToDelete] = useState<string | null>(null)

  const { toast } = useToast()

  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true)
      try {
        const result = await getUserReviews(userId)
        setReviews(result)
      } catch (error) {
        console.error("Failed to fetch reviews:", error)
        toast({
          title: "Error",
          description: "Failed to load your reviews. Please try again.",
          variant: "destructive",
        })
      } finally {
        setLoading(false)
      }
    }

    fetchReviews()
  }, [userId, toast])

  const handleDeleteReview = async () => {
    if (!reviewToDelete) return

    try {
      await deleteReview(reviewToDelete)
      setReviews(reviews.filter((review) => review.id !== reviewToDelete))
      toast({
        title: "Review deleted",
        description: "Your review has been deleted successfully.",
      })
    } catch (error) {
      console.error("Failed to delete review:", error)
      toast({
        title: "Error",
        description: "Failed to delete your review. Please try again.",
        variant: "destructive",
      })
    } finally {
      setReviewToDelete(null)
    }
  }

  if (loading) {
    return (
      <div className="space-y-4">
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="border rounded-lg p-4 animate-pulse">
              <div className="h-6 bg-muted rounded w-1/3 mb-4"></div>
              <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-muted rounded w-1/2"></div>
            </div>
          ))}
      </div>
    )
  }

  if (reviews.length === 0) {
    return (
      <div className="text-center py-12">
        <Star className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
        <h3 className="text-lg font-medium mb-2">No reviews yet</h3>
        <p className="text-muted-foreground mb-6">You haven't written any reviews yet.</p>
        <Button asChild>
          <Link href="/products">Browse Products</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <div key={review.id} className="border rounded-lg p-4">
          <div className="flex justify-between items-start mb-2">
            <Link href={`/products/${review.product.id}`} className="font-medium hover:underline">
              {review.product.name}
            </Link>
            <div className="flex">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4"
                    fill={i < review.rating ? "#FFB800" : "none"}
                    color={i < review.rating ? "#FFB800" : "#D1D5DB"}
                  />
                ))}
            </div>
          </div>

          <p className="mb-2">{review.text}</p>

          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">{new Date(review.date).toLocaleDateString()}</span>

            <div className="flex space-x-2">
              <Button variant="ghost" size="sm" asChild>
                <Link href={`/reviews/edit/${review.id}`}>
                  <Edit className="h-4 w-4 mr-1" />
                  Edit
                </Link>
              </Button>

              <AlertDialog
                open={reviewToDelete === review.id}
                onOpenChange={(open: boolean) => {
                  if (!open) setReviewToDelete(null)
                }}
              >
                <AlertDialogTrigger asChild>
                  <Button variant="ghost" size="sm" onClick={() => setReviewToDelete(review.id)}>
                    <Trash className="h-4 w-4 mr-1" />
                    Delete
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Delete Review</AlertDialogTitle>
                    <AlertDialogDescription>
                      Are you sure you want to delete this review? This action cannot be undone.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDeleteReview}>Delete</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

