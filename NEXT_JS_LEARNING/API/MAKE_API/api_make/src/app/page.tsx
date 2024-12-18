"use client"
import Link from "next/link";
import { useState } from "react";

// yha hm apni bnai hoi api ko get kr rhy hen 
export default  function Home() {
const [name, setname] = useState("")
const [age, setage] = useState(Number)
const [gender, setgender] = useState("")


  // const res = await fetch("http://localhost:3000/api/about",{
  //   method:"GET"
  // })

  // const data =await  res.json ()
  // console.log(data);

  // const resPO = await fetch ("http://localhost:3000/api/about",{
  //   method:"POST"
  // })

  // const datapo =await  resPO.json ()
  // console.log(datapo);
  
  // const respu = await fetch ("http://localhost:3000/api/about",{
  //   method:"PUT"
  // })

  // const datapu =await  respu.json ()
  // console.log(datapu);

  // const resd = await fetch ("http://localhost:3000/api/about",{
  //   method:"DELETE"
  // })

  // const datad =await  resd.json ()
  // console.log(datad);

  return (
  <>
  <div>
    <h1>HI</h1>
    <input type="text" placeholder="Enter your name" onChange={(e)=>setname(e.target.value)}/>
   

<Link href={`/api/about?name=${name}`}>CLick me</Link>
  </div>
  </>
  );
}
