import React from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'



function Hello() {
  return (
   <>
   
   <div className='h-[400px] w-[500px] bg-white rounded-[30px] flex  justify-center items-center flex-col '>
        <h1 className='text-[35px] font-bold text-red-600 tracking-[2px] pb-[15px]'>COUNTDOWN TIMER </h1>
        <div className='flex gap-3 w-[400px] mb-[30px] '>
          <Input  placeholder='Enter duration in seconds' type='number'/>
          <Button className='bg-red-700 text-[20px] font-bold hover:bg-red-500 h-12 w-[100px]'>Set</Button>

        </div>

        <div className='text-[70px] font-bold mb-[30px] text-red-700 '>00:00</div>

        <div className='flex gap-x-3 mb-[10px] mt-[20px]'>
          <Button size={'lg'}>Start</Button>
          <Button size={'lg'}>Pause</Button>
          <Button size={'lg'}>Reset</Button>

        </div>
     
   </div>
   
   
   
   </>
  )
}

export default Hello
