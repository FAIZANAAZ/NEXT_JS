import { data } from '@/constant/data'
import Link from 'next/link'
import React from 'react'


const Productpage = () => {
  return (
    <div>
      {data.map((item:any)=>{
       return(
        <Link href={`/product/query?name=${item.id}&age=${item.name}&age=${item.age}`}>
            {/* query hm esy bhejty hen */}
        <div key={item.id}>
             <h1>{item.name}</h1>
      
             
        </div>
        </Link>
       )
      })}
    </div>
  )
}

export default Productpage
