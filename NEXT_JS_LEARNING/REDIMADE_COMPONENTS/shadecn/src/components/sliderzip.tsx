"use client"

import { Slider } from "@/components/ui/slider"



import React from 'react'

const SliderDemo = () => {

    
      const [priceRange, setPriceRange] = React.useState([50, 200])
  return (
<>
<div>
<div className="flex justify-between text-sm">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
<Slider
            defaultValue={priceRange}
            max={200}
            min={50}
            step={1}
            onValueChange={setPriceRange}
            className="w-full"
          />
          {/* max matlb isy bara na jay min yani isy kam na ho or 
          
          step ka mtalb he agr hmny step 1 diya he to wo jb hm slide move krengy to 1 brhayga phir 2 agr step ko 5 krdengy to wo direct 5 brhayga pgir 10 phir 20 krdega yani 
          wo 5 5 brhayga ak sath*/}
</div>
          
          
          </>
  )
}

export default SliderDemo



