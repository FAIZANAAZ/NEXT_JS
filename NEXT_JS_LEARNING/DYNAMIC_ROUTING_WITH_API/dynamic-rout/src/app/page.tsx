'use client'
import React, { useEffect, useState } from 'react'

import ".//globle.css"
import axios from 'axios'


const page = () => {
  const [user, setuser] = useState([])

  useEffect(() => {
    getuser()

  }, [])
  


  // npm i axios
  // api ke liye isko hala or import krna zarori he
  const getuser = async()=>{
  const {data} =await axios.get('https://jsonplaceholder.typicode.com/users')
// {data} variable ko esy likhny sy wo sary data lekr ayga
setuser(data)
  
  }

  return (
   <> <div className='  flex items-center justify-center'>
   THIS IS HOME PAGE
 
 

 
 </div>

 <div className='bg-gray-300 w-[100%] h-[500px]'>
  <ul>
  {user.map((e:any)=>{
    return(
   <li>{e.username}--- <a href={`/${e.id}`}>Explore</a></li>
  //  ye jo e.id he ye hmary url ko chang kryga or osmy id likhta jayga taky param me jb id ay to alag alag ho to wo wha sy catch krky uniq user ka data la sky
  )
    
  })}
  </ul>
 </div>
 </>
  )
}

export default page
