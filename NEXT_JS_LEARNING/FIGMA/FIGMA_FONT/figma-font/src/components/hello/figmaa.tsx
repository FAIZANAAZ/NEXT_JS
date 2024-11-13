import React from 'react'

import { abhayaLibre } from '@/app/font';

const figma = () => {
  // hmy jo font chiye hoga osko copy krengy phir osko chat gpt ko dengy ke hm ye font lakr de esy ke hm next js me use kr skty 
  // osko ak format dengy ke is trha dena os font ko hm import bhi krengy or osko hm rakhengy fonr.ts ki ak file bns kr
  // (give me abhaya libre for my font font.td file for next.js
  // give me like this "export const abhaya libre =abhaya libre" {{
  // weight :"400",
  // subsets: ["latin"],
  // display : "swap"}})

  // 1)npm install @fontsource/abhaya-libre (on terminal or ye har font ke hisab sy alag hogi)
  // 2)creat font.ts in app folder and past chat gpt export method
  // 3)import {Abhaya_Libre} from "next/font/google"; in font.ts file or ye wo name hoga or = ke bad likha hoga
  // 4)import { abhayaLibre } from '@/app/font'; in tsx file jhha pr hm use krengy jis file me or ye wo name he jo export krty waqt varible ka tha
  // 5)  <h1 className={ abhayaLibre.className }>Best Selling</h1> esy use krengy

  return (
    <>
    <h1 className={ abhayaLibre.className }>Best Selling</h1>
    <h1>normal font</h1>
    </>
  )
}

export default figma