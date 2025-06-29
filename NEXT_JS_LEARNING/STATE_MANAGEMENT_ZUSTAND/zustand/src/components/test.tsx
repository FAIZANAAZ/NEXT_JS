"use client";
import { useCount } from "@/stores/countstore/countstore";
import { useState } from "react";

const TestComponent = () => {

// ye hmny state managment use kiya he 
  const count = useCount((state) => state.count);
  // /yha osmy sy variable nikala he
  const increment = useCount((state) => state.increment);
  const decrement = useCount((state) => state.decrement);
  

  return (
    <div>
      <h1>Count {count}</h1>
      <h1 onClick={() => increment(1)}>increment</h1>
      <h1 onClick={decrement}>decrement</h1>
    </div>
  );
}

export default TestComponent;

// . set Function:
// set ek function hai jo aapko state ko update karne ki suvidha deta hai. Jab aap set ka use karte hain,
//  aap current state ko modify kar rahe hote hain.

// Jab bhi koi action, jaise increment ya decrement, perform hota hai, toh set ko call karke aap 
// state ke value ko update karte hain.

// Example:
// Agar aap increment function ko call karte hain, toh set function current state ko update karke new state return karega.

// 2. persist Middleware:
// persist ek middleware hai jo aapke store ko local storage ya session storage mein save karta hai, taake jab app reload ho, toh data waisa ka waisa rahe.

// Yani agar aap app ko band karke dubara kholte hain, toh data waisa ka waisa milega, jo aapne pehle set kiya tha (jaise count value).