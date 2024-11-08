"use client"

import React from 'react'
import Image from 'next/image';
import { data } from "../../../../constant/card"

// Helper function to slice data into specific index ranges
const getDataInRange = (data: any[], start: number, end: number): any[] => {
  return data.slice(start, end); // Return the sliced data
}

// Define types for props
interface CardSectionProps {
  items: any[]; // Array of items, adjust type as per your actual data structure
  heading: string; // Heading is a string
}

const CardSection: React.FC<CardSectionProps> = ({ items, heading }) => (
  <section className='flex p-4 flex-col justify-center items-center'>
    <h1 className='md:text-[50px] sm:text-[40px] text-[25px] font-bold'>
      {heading}
    </h1>
    <div className="flex flex-wrap gap-4 justify-center bg-white w-full">
      {items.map((item, index) => (
        <div key={index} className="flex flex-col gap-3 p-3 bg-white h-[350px] w-[100%]  sm:w-[250px] md:w-[260px] lg:w-[300px] xl:w-[300px]">
          <div className="overflow-hidden rounded-lg group flex justify-center items-center">
            <Image
              src={item.picture}
              width={1000}
              height={1000} 
              alt="gifts"
              className="h-[300px] w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
          </div>
          <div className='flex justify-between p-2 font-semibold items-center'>
            <h1 className='text-[16px]'>{item.name}</h1>
            <h1 className='text-[30px]'>{item.price}</h1>
          </div>
        </div>
      ))}
    </div>
  </section>
)

const Card = () => {
  return (
    <>
      {/* Render different sections with specific index ranges and custom headings */}
      <CardSection items={getDataInRange(data, 0, 10)} heading="CORPORATE GIFTS" />
      <CardSection items={getDataInRange(data, 10, 20)} heading="GIFT COMBINATION" />
      <CardSection items={getDataInRange(data, 20, 30)} heading="GIFT BASKET" />
      <CardSection items={getDataInRange(data, 30, 40)} heading="PERSONALIZED GIFTS" />
      <CardSection items={getDataInRange(data, 40, 50)} heading="GIFT CAKE" />
    </>
  )
}

export default Card
