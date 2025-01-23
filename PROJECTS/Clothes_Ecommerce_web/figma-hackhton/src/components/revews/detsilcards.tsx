import type React from "react"

interface ReviewCardProps {
  _id: string
  name: string
  rating: number
  date: string
  content: string
  isVerified?: boolean
  onEdit: (data: Omit<ReviewCardProps, "onEdit" | "onDelete">) => void
  onDelete: (id: string) => void
}

const ReviewCard: React.FC<ReviewCardProps> = ({ _id, name, rating, date, content, isVerified, onEdit, onDelete }) => {
  return (
    <div className="review-card">
      <h3>{name}</h3>
      <p>Rating: {rating}</p>
      <p>Date: {date}</p>
      <p>{content}</p>
      {isVerified && <span>Verified</span>}
      <div className="buttons">
        <button onClick={() => onEdit({ _id, name, rating, date, content, isVerified })}>Edit</button>
        <button onClick={() => onDelete(_id)}>Delete</button>
      </div>
    </div>
  )
}

export default ReviewCard

