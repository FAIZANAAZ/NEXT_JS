

import React from 'react'
import Image from 'next/image'

function Earbuda() {
  return (
   <>
   
   <div className='flex items-center w-full pl-[20px] h-[90vh] md:pl-[100px] bg-white md:h-[66vh]'>
<Image alt='this is an image' src='/Earbuds.jpg' width={1000} height={1000} className='h-[300px] w-[200px] sm:h-[400px] sm:w-[300px]  md:h-[400px] md:w-[500px] '></Image>

<div className=" w-[200px] h-[300px] sm:w-[300px] sm:h-[400px] pt-[5px] pl-[50px] max-w-md mx-auto bg-white shadow-md rounded-md md:h-[400px] md:w-[500px] ">
 <head>
  <title>
  Earbuds
  </title>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet"/>
 </head>
 <h1 className="  md:text-2xl font-bold mb-2 ">
 Earbuds
 </h1>
 <div className="bg-red-500 text-white md:font-bold px-2 py-1 inline-block mb-2">
  Save Rs.1,000
 </div>
 <div className="text-blue-500 md:mb-2 md:font-bold">
  APPLE
 </div>
 <div className="mb-4">
  <div className="text-[12px] md:text-[18px] font-bold mb-1">
   Size: 256 h
  </div>
  <div className="flex space-x-2">
   <button className="px-[2px] py-[1px] h-[20px] md:h-[40px] md:w-[100px] md:text-[20px] border text-[10px] border-blue-500 text-blue-500  rounded-md">
    256 h
   </button>
   <button className="md:h-[40px] md:w-[100px] md:text-[20px] px-[2px] py-[1px] h-[20px]  border text-[10px] border-gray-500 text-gray-500 md:px-4  rounded-md" >
    512 h
   </button>
   
  </div>
 </div>
 <div className="mb-4">
  <div className="text-[12px] md:text-[18px] font-bold mb-1">
   Color: Nature Titanium
  </div>
  <div className="flex space-x-2 h-[30px] w-[130px] md:h-[50px] md:w-[50px]">
   <img alt="Nature Titanium color option" className="border-2 border-blue-500 p-1 rounded-md" height="50" src="https://cdn.britannica.com/70/191970-131-A85628DA/Color-wheel-light-color-spectrum.jpg" width="50"/>
   <img alt="Other color option 1" className="border-2 border-gray-300 p-1 rounded-md" height="50" src="https://cdn.britannica.com/70/191970-131-A85628DA/Color-wheel-light-color-spectrum.jpg" width="50"/>
   <img alt="Other color option 2" className="border-2 border-gray-300 p-1 rounded-md" height="50" src="https://cdn.britannica.com/70/191970-131-A85628DA/Color-wheel-light-color-spectrum.jpg" width="50"/>
  </div>
 </div>
 <div className="mb-4">
  <div className="text-[12px] md:text-[18px] font-bold mb-1">
   Price:
  </div>
  <div className="text-red-500 md:text-2xl font-bold">
   Rs.2,499
  </div>
  <div className="text-gray-500 line-through">
   Rs.3,799
  </div>
 </div>

  </div>
 </div>
    
   
   </>
  )
}

export default Earbuda
