import React from 'react'
import { Button } from '@/components/ui/button'
// shade cn me sy hm buttton wagera copy past krty hen or wo shadcn me component pr jakr milengy oper nav bar sy components ke name sy hi

// ya to hm wha sy direct  copy paste kr skte hain ye agr chalty hen ak nhi ui me jitni trha ke buttons hen wo a jaen 
// to hm osy install krlengy wo cammand hmy wahi web pr button ke component me jakr milygi

// or jb hm isy use kren koch bhi or ye yad na ay ke capital me likheb ya samll to hm button ki ui me jobydefault shade ui bna kr deta he file osmy jaygy or phir hm sbsy nichy dekhengy export hori
// wo chiz os name sy to osy copykrky tage bna dengy

// ismy ui me jo btn ki file he osmy variants: {  variant: { ismy likha hota he ke is is type ke btn hen to hm button me   variant: {} ismy jo bhi name likhengy waha sy dekh kr wo a jayga or 
// isy trh hm size bhi select kr skty hen

// osi ke nichy hm khod bhi btn bna skty hen kioky wo ak obj he or btn ko koi name dekr hm apna bnaya wa btn bhi use kr skty hen
// iska faida ye hoga ke bar bar agr ak jsa btn chiye to osky name sy use kr skty hm
    


function Buttonn() {
  return (
    <>
    <Button variant={'destructive'} size={'sm'}>SHAE/UI_BTN</Button>
    <Button variant={'default'} size={'lg'}>SHAE/UI_BTN</Button>
    <Button variant={'faiza'} size={'lg'}>SHAE/UI_BTN</Button>
    {/* ye meny bnaya faiza ke name sy */}

    </>
  )
}

export default Buttonn
