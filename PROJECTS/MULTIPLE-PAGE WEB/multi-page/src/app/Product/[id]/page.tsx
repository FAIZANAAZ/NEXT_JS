"use client"
import Productdetails from '@/Components/Details/productdet'
import React from 'react'
import { useParams } from 'next/navigation'; // Hook to get params from the URL

const Daynapicproductsd = () => {
  // Fetch dynamic params using useParams
  const { id } = useParams();
  
  // Convert the string id to a number
  const productId = Number(id);

  return (
    <div>
      <Productdetails cardid={productId} />
    </div>
  );
}

export default Daynapicproductsd;
 