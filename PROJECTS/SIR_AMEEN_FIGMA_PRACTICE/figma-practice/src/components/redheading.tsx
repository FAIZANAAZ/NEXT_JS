import React from 'react'


const RedHeading = ({textColor,text}:any) => {
  return (
    <>
    <section className='flex items-center gap-4'>
<div className='w-5 h-10 bg-red-500 rounded'></div>
<span className={`text-${textColor}-500 font-semibold`}>{text}</span>

     
      </section></>
  )
}


export default RedHeading
