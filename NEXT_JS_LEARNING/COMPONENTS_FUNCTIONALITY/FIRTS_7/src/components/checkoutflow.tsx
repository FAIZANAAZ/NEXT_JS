"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useStore } from "@/lib/store"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type CheckoutStep = "shipping" | "payment" | "confirmation"

export default function CheckoutFlow() {
  const [step, setStep] = useState<CheckoutStep>("shipping")
  const { cart, getCartTotal, clearCart } = useStore()
  const router = useRouter()

  const handleCompleteOrder = () => {
    // In a real app, you would process the payment here
    clearCart()
    router.push("/")
  }

  if (cart.length === 0) {
    router.push("/cart")
    return null
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Checkout</CardTitle>
      </CardHeader>

      <CardContent>
        <Tabs value={step} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="shipping" disabled={step !== "shipping"}>
              Shipping
            </TabsTrigger>
            <TabsTrigger value="payment" disabled={step !== "payment"}>
              Payment
            </TabsTrigger>
            <TabsTrigger value="confirmation" disabled={step !== "confirmation"}>
              Confirmation
            </TabsTrigger>
          </TabsList>

          <TabsContent value="shipping" className="space-y-4 pt-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="John" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Doe" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input id="address" placeholder="123 Main St" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input id="city" placeholder="New York" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="zipCode">Zip Code</Label>
                <Input id="zipCode" placeholder="10001" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="country">Country</Label>
              <Input id="country" placeholder="United States" />
            </div>

            <Button className="w-full" onClick={() => setStep("payment")}>
              Continue to Payment
            </Button>
          </TabsContent>

          <TabsContent value="payment" className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label htmlFor="cardName">Name on Card</Label>
              <Input id="cardName" placeholder="John Doe" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="cardNumber">Card Number</Label>
              <Input id="cardNumber" placeholder="4242 4242 4242 4242" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="expiry">Expiry Date</Label>
                <Input id="expiry" placeholder="MM/YY" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cvc">CVC</Label>
                <Input id="cvc" placeholder="123" />
              </div>
            </div>

            <div className="flex justify-between pt-4">
              <Button variant="outline" onClick={() => setStep("shipping")}>
                Back
              </Button>
              <Button onClick={() => setStep("confirmation")}>Review Order</Button>
            </div>
          </TabsContent>

          <TabsContent value="confirmation" className="space-y-4 pt-4">
            <div className="rounded-lg bg-muted p-4">
              <h3 className="font-medium mb-2">Order Summary</h3>

              {cart.map((item:any) => (
                <div key={item.product.id} className="flex justify-between py-2">
                  <span>
                    {item.product.name} x {item.quantity}
                  </span>
                  <span>${(item.product.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}

              <div className="border-t mt-2 pt-2 font-bold flex justify-between">
                <span>Total:</span>
                <span>${getCartTotal().toFixed(2)}</span>
              </div>
            </div>

            <div className="flex justify-between pt-4">
              <Button variant="outline" onClick={() => setStep("payment")}>
                Back
              </Button>
              <Button onClick={handleCompleteOrder}>Complete Order</Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

