"use client"

import React, { useEffect, useRef, useState } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'



function Hello() {
/////****************************Variable ****************************///////

let [duration,Setduration]=useState<string|number>()
let [timeleft,Settimeleft]=useState(0)
let [isactive,SetIsactive]=useState(false)
let timer =useRef<any>(null)



/////****************************Timeformat ****************************///////

// seconds ko hm module yani bachi hoi chiz ko pkarty hen or wo hm wo waly devide ko nazr me rakh kr krengy 
// jismy nichy wali value devide ke ander or bari bahir rakhty hen to agr bahir wali bari hogi to wo assitice a jayga
// kioky bary ke table me chota number ni ata or hm 60 ko focus me rakhengy 
// or choti hogi oper ki balue bhly  59 ho woto asitice a jaygi lekin agr bari hogi to hm osko 60 sy devide krky dekhengy yanto
// 0 ayga ya to 1 ayga


let timeformat =(time:number):string=>{


  let minutes = Math.floor(time / 60); 
  let seconds = time % 60;
  let hrs = Math.floor(minutes / 60);

  return `${String(minutes).padStart(2,"0")} : ${String(seconds).padStart(2,"0")}`


  // hmny osko string me change isi liye kiya he kioky hmy ispr lagana he padstart ka method jo srif string pr aplay hota he
  // padstart(2,"0") 2 yani kam sy kam digit 0 yani agr 2 sy km ay to wo os me 1 pr  0 likh dega or agr ak bhi  na hoto dono 0 krdega

}

let setBtn=()=>{
  if (typeof duration=="number" && duration>0 ) {

    Settimeleft(timeleft=duration )
    
  }
}

//***********************startbtn************************ */

let startBtn=()=>{

  SetIsactive(true)


}

let pusbtn =()=>{
  SetIsactive(false)
  clearInterval(timer.current)
}

useEffect(()=>{
  if (isactive==true) {
   timer.current= setInterval(()=>{
      if (timeleft>0) {
        Settimeleft(timeleft=timeleft-1)
      }else{
clearInterval(timer.current)
      }
    },1000)
   
  }
},[isactive])



let Resetbtn =()=>{
  SetIsactive(false)
  Settimeleft(0)
  Setduration("")
  clearInterval(timer.current)
}
  
  return (


   <>
   
   <div className='h-[400px] w-[500px] bg-white rounded-[30px] flex  justify-center items-center flex-col '>
        <h1 className='text-[35px] font-bold text-red-600 tracking-[2px] pb-[15px]'>COUNTDOWN TIMER </h1>
        <div className='flex gap-3 w-[400px] mb-[30px] '>

 {/* onchang tb tb chalyga tb tb input me koch likhengy */}

          <Input  placeholder='Enter duration in seconds' type='number'onChange={(e)=>{
          
          let input=e.target as HTMLInputElement
          Setduration(Number(input.value) )
          
          }} value ={duration}/>
          <Button className='bg-red-700 text-[20px] font-bold hover:bg-red-500 h-12 w-[100px]'
          onClick={()=>{setBtn()}}>Set</Button>

        </div>

        <div className='text-[70px] font-bold mb-[30px] text-red-700 '>{timeformat(timeleft)}</div>

        <div className='flex gap-x-3 mb-[10px] mt-[20px]'>
          <Button size={'lg'} onClick={()=>{startBtn()}}>Start</Button>
          <Button size={'lg'} onClick={()=>{pusbtn()}}>Pause</Button>
          <Button size={'lg'} onClick={()=>{Resetbtn()}}>Reset</Button>

        </div>
     
   </div>
   
   
   
   </>
  )
}

export default Hello
