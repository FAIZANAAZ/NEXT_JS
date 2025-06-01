"use client"
import React, { useState } from 'react'
import { Button } from './ui/button'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { ChevronDown } from 'lucide-react'

const SelectionBar = () => {
  const [sortBy, setSortBy] = useState('latest')

  return (
<>
{/* Popover ak parent iv he jo bnata he ak selection bar */}
<Popover>
    {/*PopoverTrigger ye iska child element he jo ke on off cheq krta he ya wo jo condition hm isko den or wo osky motabik
    chlta he hmny isko kha ke jb bhi latest high jisky bhibraber ho wahi apny ander dikha dena*/}
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-[130px] justify-between">
                  {sortBy === 'latest' ? 'Latest' : sortBy === 'highest' ? 'Highest Rated' : 'Lowest Rated'}
                  <ChevronDown className="h-4 w-4 opacity-50" />
                </Button>
              </PopoverTrigger>
              {/* or ye PopoverContent ko tb hi openhota he jb  PopoverTrigger ki condition pas hoti he oe open hony ke bad ye apny 
              ander ak content dikhayga */}
              <PopoverContent className="w-[200px] p-0">
                {/* content me hmny rkha he button ke jb button pr click to or button me jo bhi likhe he wo sestate me set krdena
                or osi ko dekh kr trigger bhi apna data set krta jayga or content 3 button ki sorat me ak div ki trha oppen hony 3 no */}
                <Button
                  variant="ghost"
                  className="w-full justify-start font-normal"
                  onClick={() => setSortBy('latest')}
                >
                  Latest
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start font-normal"
                  onClick={() => setSortBy('highest')}
                >
                  Highest Rated
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start font-normal"
                  onClick={() => setSortBy('lowest')}
                >
                  Lowest Rated
                </Button>
              </PopoverContent>
            </Popover>
</>
  )
}

export default SelectionBar