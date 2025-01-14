"use client"

import * as React from "react"
import Image from "next/image"
import { Minus, Plus, Trash } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {  useSearchParams } from "next/navigation"
import { useState } from "react"
import { useRouter } from "next/navigation"

interface CartItem {
  id: number
  name: string
  size: string
  color: string
  price: number
  image: string
  quantity: number
}

export default function ShoppingCart() {

  const router = useRouter()
  const searchParams = useSearchParams()
 
  const  [cartItem, setCartItem] = useState<CartItem[]>([])
  console.log(cartItem,"🙄")
  React.useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItem))
  }, [cartItem])
React.useEffect(() => {
  
const cart =localStorage.getItem('cart') 
const updatedCart = cart ? JSON.parse(cart):[]
// ye ye kryga ke agr data hmara jeson me a jay to osko array bnadega typescript wala taky error na aen agr value he hi nhi to empty array krdena

const name = searchParams.get('name')
const size = searchParams.get('size')
const color = searchParams.get('color')
const price = searchParams.get('price')
const image = searchParams.get('picture') 
const quantity = searchParams.get('quantity')
const id = searchParams.get('id')

console.log("😎",name, size, color, price, image, Number(quantity), Number(id)) 

if (name && size && color && price && image && Number(quantity) && Number(id)) {
  const isDuplicate=false
  if (!isDuplicate) {
    updatedCart.push({
      name,size,color,price,image,quantity,id
    })
    setCartItem(updatedCart)

  }
  
  localStorage.setItem("cart",JSON.stringify(updatedCart))
  setCartItem(updatedCart)
  console.log(updatedCart,"😊")
  // ismy mojhe ye btara he ke ye bhi apny ander set krly kioky map isi pr to chalra he
    router.push('/Addcard')
}

}, [searchParams,router])


  return (
    <div className="mx-auto max-w-[1340px] px-[16px] md:px-[100px] py-8">
      <h1 className="text-2xl font-bold mb-8">YOUR CART</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="flex-1 bg-white border border-black/10 rounded-[20px] p-[20px_24px]">
          <div className="flex flex-col gap-6">
            {cartItem.map((item:CartItem) => (
              <React.Fragment key={item.id}>
                <div className="flex gap-4">
                  <div className="w-[124px] h-[124px] rounded-[8.66px] bg-black relative overflow-hidden">
                    <Image
                      src={"/l2.png"}
                      alt={item.name}
                      width={124}
                      height={124}
                     
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 flex justify-between">
                    <div className="flex flex-col justify-between">
                      <div className="space-y-1">
                        <h3 className="font-bold text-xl">{item.name}</h3>
                        <p className="text-sm">Size: {item.size}</p>
                        <p className="text-sm">Color: {item.color}</p>
                      </div>
                      <p className="font-bold text-2xl">${item.price}</p>
                    </div>
                    <div className="flex flex-col justify-between items-end">
                      <Button
                        variant="ghost"
                        size="icon"
                  
                        className="text-red-500 hover:text-red-600"
                      >
                        <Trash className="h-6 w-6" />
                      </Button>
                      <div className="flex items-center gap-5 px-5 py-3 bg-[#F0F0F0] rounded-[62px]">
                        <Button
                          variant="ghost"
                          size="icon"
                         
                          // -1 kaa matlb ak hi km ho zada nhi
                          className="h-5 w-5 p-0"
                        >
                          <Minus className="h-5 w-5" />
                        </Button>
                        <span className="font-medium text-sm">{item.quantity}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                     
                          className="h-5 w-5 p-0"
                        >
                          <Plus className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-b border-black/10" />
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-[505px] bg-white border border-black/10 rounded-[20px] p-[20px_24px] space-y-6">
          <h2 className="text-2xl font-bold">Order Summary</h2>
          <div className="space-y-5">
            <div className="flex justify-between items-center">
              <span className="text-xl text-black/60">Subtotal</span>
              <span className="text-xl font-bold">${}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xl text-black/60">Discount (-20%)</span>
              <span className="text-xl font-bold text-red-500">-${}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xl text-black/60">Delivery Fee</span>
              <span className="text-xl font-bold">${}</span>
            </div>
            <div className="border-t border-black/10 pt-5">
              <div className="flex justify-between items-center">
                <span className="text-xl">Total</span>
                <span className="text-2xl font-bold">${}</span>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-[#F0F0F0] rounded-[62px]">
              <Input
                type="text"
                placeholder="Add promo code"
                className="border-0 bg-transparent p-0 h-auto focus-visible:ring-0 placeholder:text-black/40"
              />
            </div>
            <Button className="px-4 py-3 h-auto rounded-[62px] bg-black hover:bg-black/90">
              Apply
            </Button>
          </div>
          <Button className="w-full h-[60px] rounded-[62px] bg-black hover:bg-black/90 text-base">
            Go to Checkout
          </Button>
        </div>
      </div>
    </div>
  )
}

