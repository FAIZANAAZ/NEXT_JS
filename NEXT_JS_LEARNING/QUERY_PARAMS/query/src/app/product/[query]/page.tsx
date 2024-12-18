import { data } from '@/constant/data'
import React from 'react'

const dynamic = async ({searchParams}:any) => {
  
 
    const {name,age}=await searchParams
  return (
    <div>
     <h1>{name}</h1> <br />
      <h1>{age}</h1> 
    </div>
  )
}

export default dynamic
