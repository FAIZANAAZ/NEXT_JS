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