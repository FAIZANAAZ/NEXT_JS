import React from 'react'
import RedHeading from './redheading'

const Features = () => {
  return (
    <>
    <section className='w-full mt-[140px]'>
    <div className='flex  items-end'>
        {/* top-left-div */}
        <div className='flex flex-col gap-[20px]'>
       <RedHeading text={"Features"} textColor={"red"} />

       <h1 className='text-[36px] leading-[48px] font-semibold tracking-[4%]'>
      New Arrivals
       </h1>
        </div>
        </div>
        

    </section>
    </>
  )
}

export default Features
