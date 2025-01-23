"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, MoreVertical, CheckCircle2, Edit2, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ReviewCardProps {
  _id: string
  name: string
  rating: number
  date: string
  content: string
  isVerified?: boolean
  onEdit: (data: ReviewCardProps) => void
  onDelete: (id: string) => void
}

export function ReviewCard({ _id, name, rating, date, content, isVerified, onEdit, onDelete }: ReviewCardProps) {
  return (
    <Card className="w-full mb-8">
      <CardContent className="p-7">
        <div className="space-y-6">
          <div className="flex justify-between items-start">
            <div className="space-y-4">
              <div className="flex gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-[22px] h-[22px] ${i < rating ? "fill-[#FFC633] text-[#FFC633]" : "text-gray-200"}`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-1">
                <span className="font-bold text-xl">{name}</span>
                {isVerified && <CheckCircle2 className="w-6 h-6 text-[#01AB31]" />}
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onEdit({
                  _id, name, rating, date, content, isVerified,
                  onEdit: function (data: ReviewCardProps): void {
                    throw new Error("Function not implemented.")
                  },
                  onDelete: function (id: string): void {
                    throw new Error("Function not implemented.")
                  }
                })}
              >
                <Edit2 className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => onDelete(_id)}>
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed">{content}</p>
          <p className="text-base text-muted-foreground">Posted on {date}</p>
        </div>
      </CardContent>
    </Card>
  )
}

