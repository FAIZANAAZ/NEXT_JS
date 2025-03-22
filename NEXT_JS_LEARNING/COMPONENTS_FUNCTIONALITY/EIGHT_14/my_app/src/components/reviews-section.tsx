"use client"

import { useState, useEffect } from "react"
import { Star, ThumbsDown, ThumbsUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useAuth } from "@/hooks/use-auth"
import { getReviews, addReview, voteReview } from "@/lib/reviews"
import type { Review } from "@/types"

interface ReviewsSectionProps {
  productId: string
}

export default function ReviewsSection({ productId }: ReviewsSectionProps) {
  const [reviews, setReviews] = useState<Review[]>([])
  const [userRating, setUserRating] = useState<number>(5)
  const [reviewText, setReviewText] = useState<string>("")
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [sortBy, setSortBy] = useState<string>("newest")

  const { user, signIn } = useAuth()

  const toast = (message: string) => {
    console.log(message); // Placeholder for toast implementation
  };

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const result = await getReviews(productId, sortBy)
        setReviews(result)
      } catch (error) {
        console.error("Failed to fetch reviews:", error)
        toast("Failed to load reviews. Please try again.")
      }
    }

    fetchReviews()
  }, [productId, sortBy])

  const handleSubmitReview = async () => {
    if (!user) {
      toast("Please login to submit a review.")
      return
    }

    if (!reviewText.trim()) {
      toast("Please enter your review.")
      return
    }

    setIsSubmitting(true)

    try {
      const newReview = await addReview(productId, {
        rating: userRating,
        text: reviewText,
      })

      setReviews([newReview, ...reviews])
      setReviewText("")
      setUserRating(5)

      toast("Thank you for your review!")
    } catch (error) {
      console.error("Failed to submit review:", error)
      toast("Failed to submit your review. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleVote = async (reviewId: string, voteType: "up" | "down") => {
    if (!user) {
      toast("Please login to vote on reviews.")
      return
    }

    try {
      const updatedReview = await voteReview(reviewId, voteType)

      setReviews(reviews.map((review) => (review.id === reviewId ? updatedReview : review)))
    } catch (error) {
      console.error("Failed to vote on review:", error)
      toast("Failed to register your vote. Please try again.")
    }
  }

  return (
    <div>
      {/* Review Form */}
      <div className="bg-card p-6 rounded-lg border mb-8">
        <h3 className="text-lg font-semibold mb-4">Write a Review</h3>

        {user ? (
          <>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Rating</label>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <button key={rating} type="button" className="p-1" onClick={() => setUserRating(rating)}>
                    <Star
                      className="h-6 w-6"
                      fill={rating <= userRating ? "#FFB800" : "none"}
                      color={rating <= userRating ? "#FFB800" : "#D1D5DB"}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Your Review</label>
              <Textarea
                placeholder="Share your experience with this product..."
                rows={4}
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
              />
            </div>

            <Button onClick={handleSubmitReview} disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Review"}
            </Button>
          </>
        ) : (
          <div className="text-center py-4">
            <p className="mb-4 text-muted-foreground">Please login to write a review</p>
            <Button onClick={() => signIn()}>Login</Button>
          </div>
        )}
      </div>

      {/* Reviews List */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold">Customer Reviews ({reviews.length})</h3>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="highest">Highest Rated</SelectItem>
              <SelectItem value="lowest">Lowest Rated</SelectItem>
              <SelectItem value="helpful">Most Helpful</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {reviews.length > 0 ? (
          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="border-b pb-6">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center">
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
                      <span className="ml-2 font-medium">{review.user.name}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{new Date(review.date).toLocaleDateString()}</p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-muted-foreground"
                      onClick={() => handleVote(review.id, "up")}
                    >
                      <ThumbsUp className="h-4 w-4 mr-1" />
                      <span>{review.upvotes}</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-muted-foreground"
                      onClick={() => handleVote(review.id, "down")}
                    >
                      <ThumbsDown className="h-4 w-4 mr-1" />
                      <span>{review.downvotes}</span>
                    </Button>
                  </div>
                </div>

                <p className="mt-3">{review.text}</p>

                {review.reply && (
                  <div className="mt-4 ml-6 p-3 bg-muted rounded-md">
                    <p className="text-sm font-medium">Response from Seller:</p>
                    <p className="text-sm mt-1">{review.reply}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-muted-foreground">
            No reviews yet. Be the first to review this product!
          </div>
        )}
      </div>
    </div>
  )
}

