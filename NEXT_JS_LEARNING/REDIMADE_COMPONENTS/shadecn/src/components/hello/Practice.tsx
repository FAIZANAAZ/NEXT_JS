import React from 'react'

// make 1 card in mores pages use parameter with argumenyt

interface props{
  namse:string
  lastname:string
  age:number
  gender:string

}
const Card :React.FC<props>= ({namse,lastname,age,gender}) => {
  return (
<>
<div className='h-80 w-80 flex flex-col justify-center items-center bg-black border-yellow-400 border-2'>
<h1 className='text-white text-2xl font-bold mt-2'>{namse}</h1>
<h1 className='text-white text-2xl font-bold mt-2'>{lastname}</h1>
<h1 className='text-white text-2xl font-bold mt-2'>{age}</h1>
<h1 className='text-white text-2xl font-bold mt-2'>{gender}</h1>
</div>
</>
  )
}

export default Card