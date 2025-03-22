"use client"

import type React from "react"

import { useState } from "react"
import { Camera, Pencil, Save, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { updateUserProfile } from "@/lib/user"
import type { UserProfile as UserProfileType } from "@/types"

// Jab user "Edit" button par click karta hai, tab setIsEditing(true) hota hai, jo inputs ko editable bana deta hai.

// Jab user "Save" button par click karta hai, tab setIsEditing(false) hota hai, jo changes ko save karne ke baad inputs ko read-only mode mein le aata hai.

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
// sbsy phly save ko false rkhangy kioky jb koch edit hi nhi howa to phir osmy kiya save krwaygy jb koch edit kryga 
// user tb osko true krwaygy 
  

  const handleSave = async () => {
    if (!name.trim() || !email.trim()) {
      // Agar name ya email empty hain (ya unmein sirf spaces hain), toh save process ko rok diya jata hai.
     
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
      
    } catch (error) {
      console.error("Failed to update profile:", error)
     
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (file.size > 5 * 1024 * 1024) {
     
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
          // by defalt to ye false he to ye condition chlygi yani edit button ayga jb ye chalygi or edit pr jesy click hoga isediting true ho jayega or condition false ho jaygi jb ye false hogi to save button disply ho ayga
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

