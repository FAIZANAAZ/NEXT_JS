"use client"
import React, { useEffect } from 'react'
import ProductFilterColor from '@/components/filtertsx/colorfilter'
import sanityPostUserData from '@/service/userapicler'

const Review = () => {
  useEffect(() => {
    sanityPostUserData();
  },[])
  
  return (
    <div>
     <div className='md:px-[100px]  '>
     <ProductFilterColor/>
     </div>
    </div>
  )
}

export default Review
