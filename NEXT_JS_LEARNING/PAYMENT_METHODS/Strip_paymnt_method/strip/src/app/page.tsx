"use client"

import CheckoutForm from "@/components/payment";
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string);

function Home() {
    
  return (
    <>
    <Elements  stripe={stripePromise} options={{mode: "payment", currency: "usd", amount: 1000
      // ye amount hm jb dengy jb hmny rout.ts ki file me amount ki value 1000 di he osko hm user payment sy connect krwaygy jb abhi use nhi krengy kioky hmny rout.ts me abhi 1000 or yha 2200 di he hard coted value  khod hi likhdi he 
    }} >
      <CheckoutForm/>
    </Elements>
    </>
  )
}

export default Home