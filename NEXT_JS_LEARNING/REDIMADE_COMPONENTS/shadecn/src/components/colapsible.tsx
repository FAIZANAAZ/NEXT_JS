"use client"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@radix-ui/react-collapsible'
import { ChevronDown, ChevronUp } from 'lucide-react'
import React from 'react'




const Collapsiblee = () => {

    const dressStyles = [
        "Casual",
        "Formal",
        "Party",
        "Gym",
      ]
      
   
      
        const [openSections, setOpenSections] = React.useState({
         
          dressStyle: true,
        })
  return (
    <>
    <div className='w-[300px] h-[300px]'>
        {/* ye ak container he jo sectiona bnany ke kam ata he different */}
      <Collapsible
    //   ye open sec ye cheq krta he ke section open he ya bnd he
        open={openSections.dressStyle}
        // ye cheq krtay he ke section open he ya bnd he ye handle krta he open hoto close krdyga or close hoga to open
        onOpenChange={(open:any) => setOpenSections({ ...openSections, dressStyle: open })}
        className="w-full space-y-5"
      >
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold">Dress Style</h3>
          {/* ye bhi open or close hi kryga ye zarori nhi he */}
          <CollapsibleTrigger>
            {openSections.dressStyle ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </CollapsibleTrigger>
        </div>
        {/* ismy hm content rakhengy or agr coleposible me fun cheq kryga ke open he to hi content dikhayga wrna content nhi dikhayga */}
        <CollapsibleContent>
          <div className="space-y-5">
            {dressStyles.map((style) => (
              <div key={style} className="flex justify-between items-center">
                <span className="text-base text-black/60">{style}</span>
                <ChevronDown className="w-4 h-4 text-black/60" />
              </div>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
    </>
  )
}

export default Collapsiblee
