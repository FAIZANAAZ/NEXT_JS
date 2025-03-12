
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