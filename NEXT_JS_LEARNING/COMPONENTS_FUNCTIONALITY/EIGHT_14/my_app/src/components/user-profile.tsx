"use client"

import type React from "react"

import { useState } from "react"
import { Camera, Pencil, Save, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useToast } from "@/hooks/use-toast"
import { updateUserProfile } from "@/lib/user"
import type { UserProfile as UserProfileType } from "@/types"

interface UserProfileProps {
  user: UserProfileType
}

export default function UserProfile({ user }: UserProfileProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [phone, setPhone] = useState(user.phone || "")
  const [bio, setBio] = useState(user.bio || "")
  const [avatar, setAvatar] = useState<string | null>(user.avatar)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const { toast } = useToast()

  const handleSave = async () => {
    if (!name.trim() || !email.trim()) {
      toast({
        title: "Error",
        description: "Name and email are required.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      await updateUserProfile({
        name,
        email,
        phone,
        bio,
        avatar,
      })

      setIsEditing(false)
      toast({
        title: "Profile updated",
        description: "Your profile has been updated successfully.",
      })
    } catch (error) {
      console.error("Failed to update profile:", error)
      toast({
        title: "Error",
        description: "Failed to update your profile. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Avatar image must be less than 5MB.",
        variant: "destructive",
      })
      return
    }

    const reader = new FileReader()
    reader.onload = () => {
      setAvatar(reader.result as string)
    }
    reader.readAsDataURL(file)
  }

  return (
    <div className="bg-card p-6 rounded-lg border">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Profile Information</h2>
        {!isEditing ? (
          <Button variant="outline" size="sm" onClick={() => setIsEditing(true)}>
            <Pencil className="h-4 w-4 mr-2" />
            Edit
          </Button>
        ) : (
          <Button variant="outline" size="sm" onClick={handleSave} disabled={isSubmitting}>
            <Save className="h-4 w-4 mr-2" />
            Save
          </Button>
        )}
      </div>

      <div className="flex flex-col items-center mb-6">
        <div className="relative mb-4">
          <Avatar className="h-24 w-24">
            <AvatarImage src={avatar || ""} alt={name} />
            <AvatarFallback>
              <User className="h-12 w-12" />
            </AvatarFallback>
          </Avatar>

          {isEditing && (
            <label
              htmlFor="avatar-upload"
              className="absolute bottom-0 right-0 bg-primary text-primary-foreground rounded-full p-2 cursor-pointer"
            >
              <Camera className="h-4 w-4" />
              <input
                id="avatar-upload"
                type="file"
                accept="image/*"
                className="sr-only"
                onChange={handleAvatarChange}
              />
            </label>
          )}
        </div>

        {isEditing ? (
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="text-center font-semibold text-lg mb-1"
          />
        ) : (
          <h3 className="font-semibold text-lg mb-1">{name}</h3>
        )}

        <p className="text-sm text-muted-foreground">Member since {new Date(user.createdAt).toLocaleDateString()}</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium">Email</label>
          {isEditing ? <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /> : <p>{email}</p>}
        </div>

        <div>
          <label className="text-sm font-medium">Phone</label>
          {isEditing ? (
            <Input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
            />
          ) : (
            <p>{phone || "Not provided"}</p>
          )}
        </div>

        <div>
          <label className="text-sm font-medium">Bio</label>
          {isEditing ? (
            <Textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Tell us about yourself"
              rows={4}
            />
          ) : (
            <p className="whitespace-pre-line">{bio || "No bio provided"}</p>
          )}
        </div>
      </div>
    </div>
  )
}

