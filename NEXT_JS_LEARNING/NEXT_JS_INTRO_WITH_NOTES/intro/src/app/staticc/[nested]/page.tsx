import React from 'react'
import Image from 'next/image'

function Nested({params}:any) {
  return (
    <div>
      <h1>I AM DYNAMIC URL {params.nested}</h1>

    <Image src={"https://img.freepik.com/free-photo/colorful-bird-with-black-beak-blue-yellow-wing_1340-28826.jpg?t=st=1727175785~exp=1727179385~hmac=42a9bc06b9c9489776d71fbc86144dbcdf70281de4e5f06375df28197912e77c&w=360"} alt='this is picture' width={300} height={300} />

    </div>
  )
}

export default Nested
