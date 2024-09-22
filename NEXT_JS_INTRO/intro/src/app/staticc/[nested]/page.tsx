import React from 'react'

function Nested({params}:any) {
  return (
    <div>
      <h1>I AM DYNAMIC URL {params.nested}</h1>
    
    </div>
  )
}

export default Nested
