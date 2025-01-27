"use client"

import * as React from "react"
import Image from "next/image"
import { Minus, Plus, Trash } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {  useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
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
  const searchParams = useSearchParams() 
  const router = useRouter()
  // isky zariye hm mitaygy url me itna sara jo data ara he osko or url saf krygy
  
 
  const  [cartItem, setCartItem] = useState<CartItem[]>([])
  // console.log(cartItem,"🙄")

useEffect(() => {
 
  
const cart =localStorage.getItem('cart') 
//ye chizen get krwayga cart me or hm ismy direct array nhi rkhn skty 
const updatedCart = cart ? JSON.parse(cart):[]
// ye ye kryga ke agr card mojood he to osko ak array bna dega wrna empty array krdega isy error nhi ayga

const name = searchParams.get('name')
const size = searchParams.get('size')
const color = searchParams.get('color')
const price = searchParams.get('price')
const image = searchParams.get('picture') 
const quantity = searchParams.get('quantity')
const id = searchParams.get('id')

// yha hm searh paraam sy apny data ko nikal rhy hen



console.log("😎",name, size, color, price, image, Number(quantity), Number(id)) 
// && color && Number(quantity) && Number(id)
if (name &&  price && image && size  ) {
  // yhahm likhengy ke sbsy phly to cheq kro ke daya he 
  const isDuplicate=updatedCart.some((item:CartItem) => item.name === name)
  // phir dublication dekhengy ke dublicate na ho some ka method lha kr wo match kryga id sy ke dublicate to nhi he ye anse esy dta he mil jay to tru na mily to false return kryga
  if (!isDuplicate) {
    updatedCart.push({
      name,size,color,price,image,quantity:1
    })
    // yha push krwa rhy hen updateCrad me jo get kiye wy data ko array bna kr store krta he yani string me ayga to bhi rkh lega wrna arry me bhi rkhdega 

    // setCartItem(updatedCart)
    // // yha sy hm phonchaygy usestate me tky ye bahir jakr map ke sath use ho sky 

  }
  
  localStorage.setItem("cart",JSON.stringify(updatedCart))
  // yha sy hm set kry hen
  setCartItem(updatedCart)
  console.log(updatedCart,"😊")
  // ismy mojhe ye btara he ke ye bhi apny ander set krly kioky map isi pr to chalra he
    router.replace('/Addcard')
    // isy wo replace krky saf krdega ak trha sy url me jo itna sara data he 
}

}, [searchParams,router])




// remove item from cart
const handleRemove = (index: number) => {
  const updatedCart = cartItem.filter((_, i) => i !== index)
//   Agar i ka value index ke barabar nahi hai, to wo element naye array me rahega.
// Jo element index ke barabar hoga, wo remove ho jayega.
    localStorage.setItem("cart", JSON.stringify(updatedCart))
    setCartItem(updatedCart)
}

// update quantity
const handleQuantity = (index: number, e_target_value: number) => {
  const updateQuantity = [...cartItem]
  updateQuantity[index].quantity = e_target_value
  // isy uniq hoga index ki madad sy wahi card update hoga jis ki quantity change krengy wrna sary update hojyngy

  localStorage.setItem("cart",JSON.stringify(updateQuantity))
  setCartItem(updateQuantity)
}
  return (
    <div className="mx-auto max-w-[1340px] px-[16px] md:px-[100px] py-8">
      <h1 className="text-2xl font-bold mb-8">YOUR CART</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="flex-1 bg-white border border-black/10 rounded-[20px] p-[20px_24px]">
          <div className="flex flex-col gap-6">
            {cartItem.map((item:CartItem, index: number) => (
              <div key={index}>
                <div className="flex gap-4">
                  <div className="w-[124px] h-[124px] rounded-[8.66px] bg-black relative overflow-hidden">
                    <Image
                      src={item.image}
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

                        onClick={() => handleRemove(index)}
                      >
                        <Trash className="h-6 w-6" />
                      </Button>
                      <div className="flex items-center gap-5 px-5 py-3 bg-[#cfc8c8] rounded-[62px] ">
                   <input type="number" min={1} 
                  //  min 1 isi liye ke koi0 or -me valuena likh de
                   value={item.quantity} onChange={(e) => {
                    handleQuantity(index, Number(e.target.value))
                   }}/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-b border-black/10" />
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-[505px] bg-white border border-black/10 rounded-[20px] p-[20px_24px] space-y-6">
          <h2 className="text-2xl font-bold">Order Summary</h2>
          <div className="space-y-5">
            <div className="flex justify-between items-center">
              <span className="text-xl text-black/60">Subtotal</span>
              <span className="text-xl font-bold">${cartItem.reduce((total, item) => total + item.price * item.quantity, 0)
                // yha hm reduce ka method use kr rhy hen jo ke 2 parameter leta he 1st parameter me total or 2nd me item he or 0 sy start kr rhy hen wo ye krta he ke array ki os value ko jo hm de rhy  hen ak ak krky lekr ata he or ospr condition lga kr osi ko apny pas save kr leta he to hm jb price diya he to wo phly ak price ko lekr ayga or usme quantity ko multiply kr k usi ko APNY PAS SAVE KRLEGA or phir dobara chlyga to dosry ko lekr ayga to wo dosry ko phir apny pas +kryga or apny pas total me save krlega esy hi ahista ahista wo lata jayga jb array khatam hoga to kam ho jayga total ho jaygy sb price
                }</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xl text-black/60">Discount </span>
              <span className="text-xl font-bold text-red-500">-${(20)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xl text-black/60">Delivery Fee</span>
              <span className="text-xl font-bold">${(100)}</span>
            </div>
            <div className="border-t border-black/10 pt-5">
              <div className="flex justify-between items-center">
                <span className="text-xl">Total</span>
                <span className="text-2xl font-bold">${cartItem.reduce((total, item) => total + item.price * item.quantity, 0) + (100)-20}</span>
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

