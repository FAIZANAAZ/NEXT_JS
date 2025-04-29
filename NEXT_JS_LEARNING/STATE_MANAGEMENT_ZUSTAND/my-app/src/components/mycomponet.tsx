"use client";
import { useCount } from "@/stores/countstore/countstore";
import { useState } from "react";

const MyComponnt = () => {

// ye hmny state managment use kiya he 
  const count = useCount((state) => state.count);
  // /yha osmy sy variable nikala he
  const increment = useCount((state) => state.increment);
  const decrement = useCount((state) => state.decrement);
  

  return (
    <div>
      <h1>Count {count}</h1>
      <h1 onClick={() => increment(4)}>increment</h1>
      {/* yha bhi same use kiya sb lekin bs ye 4 sy increamne ho ga yehi faida he stat managment ka dobara dobara code nhi kiya  */}
      <h1 onClick={decrement}>decrement</h1>
    </div>
  );
}

export default MyComponnt;