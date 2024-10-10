"use client"
import React, { useState } from 'react'


// condition hmar kam krti he open tages me bhi css ke liye or osky bich me bhi working ke liye

function Hello() {

  const [value,Changvalue]=useState<boolean>(true)
  return (
   <>
   {/* hm kisi tages me condition classname likha kr {ismy dengy} */}
   <h1 className='bg-black text-white absolute bottom-[400px] p-3'>CONDITIONAL RENDERING</h1>
   <div className='border-solid border-black font-semibold  border-[5px] w-[150px] text-center '><h1 className={value? "bg-red-600 text-white border-yellow-400":"bg-yellow-500 text-black "} >{value?"Red":"Yellow"}</h1></div>

   <button onClick={(e)=>{Changvalue(!value)}} className='bg-slate-50 font-semibold ml-[10px] border-solid hover:bg-slate-300 border-black  border-[5px] w-[150px]'>CLICK</button>
   
   </>
  )
}

export default Hello
