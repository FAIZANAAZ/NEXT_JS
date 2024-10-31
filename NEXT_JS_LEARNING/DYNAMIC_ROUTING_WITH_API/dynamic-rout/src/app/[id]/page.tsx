'use client'
import React, { useEffect, useState } from 'react'

import axios from 'axios'

const dynamic = ({params}) => {
    const {id} = params
    const [user, setuser] = useState([])
    const getuser = async()=>{
        const {data} =await axios.get('https://jsonplaceholder.typicode.com/users/'+id)
      // {data} variable ko esy likhny sy wo sary data lekr ayga
      setuser(data)}
 

    useEffect(() => {
      getuser()
  
    }, [])
    // npm i axios
    // api ke liye isko hala or import krna zarori he
  
  return (
 
    <div>{JSON.stringify(user)}</div>
  )
}

export default dynamic