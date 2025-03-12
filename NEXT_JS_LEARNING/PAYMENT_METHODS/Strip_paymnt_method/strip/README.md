<!-- ye (https://docs.stripe.com/sdks/stripejs-react) -->
<!-- oski repo he jisny strip bnai he ismy bhi code ka trika kar he (https://github.com/sonnysangha/stripe-payment-elements-with-https-nextjs-14-demo/tree/main) -->
(1)open (https://dashboard.stripe.com/login)
(2)signin 
(3)apny project me camand run krengy (npm install --save stripe @stripe/react-stripe-js @stripe/stripe-js)
(4)blkl bahir bnana he .env.local ki file or osmy rkhengy  dashbord me website jo open he osmy 2 keys hongy stripe publishable key or stripe secret key 
(5)JHA HMY PAYMENT METHOD USE krna he os jga pr import krengy 
   **import { loadStripe } from "@stripe/stripe-js";
   **import { Elements } from "@stripe/react-stripe-js";
   <!-- ye documentation me bhi mil jayga -->
(6)Phir nichy 
   const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY as string);
   <!-- apny env sy publish key laygy -->
(7)<Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
       <!-- ye rakhygy home page me or  CheckoutForm component hm bnaygy khod sy  -->
(8) component bnaygy CheckoutForm name sy or osko import krwaygy home age pr
  or osmy ye code copy past kengy 
  ***
  "use client"

import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("/api/create-payment-intent", {
         // ye hmary folder ki location bhi he or api bhi  esy hi hoti
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({amount: 2200}),
      // ye amount ki value wo hogi jo user ki purchase payment hogi
    })
    .then((res)=> res.json())
    .then((data) => {
      setClientSecret(data.clientSecret)
    })
  },[])


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `http://localhost:3000/payment-success?amount=${1000}`,
         // ye function ye kryga ke user ko payment success page pr redirect krega or payment-success page hmy bnana hoga khod
      },
    });

  };
  
  return (
   <form onSubmit={handleSubmit}>
     <div className='p-10 flex justify-center flex-col gap-6'>
        {clientSecret && <PaymentElement/>}
      <button className='bg-black text-white p-5' type='submit'>Payment</button>
    </div>
   </form>
  )
}

export default CheckoutForm
  *** 

(9)api ka error ayga checkout me kioky api chlai he bnai nhi to api bnay 

(10)bnaygy api ka folder app=>api=>create-payment-intent=>route.ts
    copy past krengy ye code 
    *** 
    
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

// ye hmny jo install ki thi start me woh package he
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)

export async function POST(req: NextRequest){
    //  req hmari post he hm bhej rhy henphir mngwaygy 
  
  try {
    const {amount} = await req.json();
       // hmny jeson me change krky nikaa he request jo api sy aygi amount ki

    const paymentIntent = await stripe.paymentIntents.create({
        // ye by default method he stripe ka jisko use krky hm create krny ki req bhejty hen stripe ko or jochiz wha sy aygi wo paymentIntent ke variable   me save krengy hm
      amount,
      currency: 'usd',
           // ye 2 property wo lega wrna error aayga
      automatic_payment_methods: { enabled: true },
    })

    console.log("✅",paymentIntent);
    
    return NextResponse.json({clientSecret: paymentIntent.client_secret
         // jb stripe req bhejta he to wo client secret me rakh kr bhejta he 
    })
  } 
  catch (error) {
    console.error("❌", error);
    return NextResponse.json({error},{status: 500})
    // status:500 bs esy hi error ko acha bnany ke liye 
  }
}
    ***

    <!-- isky document yha sy bhi mil jaengy () -->
(11)hm cheq krengy localhost300 pr agr form nazr ara hoga to hmy clientScreate mil gya he yani success howa kioky hmny condition lgai wi he 

(12)hm jaengy https://dashboard.stripe.com/account/onboarding/business-structure pr or account ko koch mange krengy 
 
   **click (Business type
Unregistered business
Owned by 1 person and not registered with the government)

**click no
**continue 

(13)hm ab dashboard ke transition pr jaengy