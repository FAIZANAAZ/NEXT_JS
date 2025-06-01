import React from 'react'
import Card   from "./hello/Practice"
import Link from 'next/link'
import { Button } from './ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import { IoMenu } from 'react-icons/io5'


// here use card
const Menu = () => {
  return(<>
  {/* sheet ak div he jismy menu ki pora sheet hogi  main div*/} 
  <Sheet>
   
{/* ye sheet trigger menu ka button he ke ospr click krny sy ye open or cloe hoga */}
    <SheetTrigger asChild>
      <Button
        variant="ghost"
        size="icon"
        className=""
        aria-label="Menu"
      >
        
    {/* Font Awesome Icon */}
    <IoMenu />
      </Button>
    </SheetTrigger>
    {/* content sheet me hm iske ander jo jo hoga wo akhengy or ye zarorri he jesy home about ye sb rakhengy */}
    <SheetContent side="left" className="w-[300px] sm:w-[400px]">
      {/* sheet header or titile important or zarori nhi he ye bs meny ke links ke oper agr koi heading ya logo rakhna chaty hen to wo rakh skty hen hm top pr or cros icon ismy by default hota he jisy wo bnd hota he */}
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>

      <div className="grid gap-4 py-4">
        <Link
          href="/"
          className="text-lg hover:underline"
        >
          Shop
        </Link>
        <Link
          href={"#selles"}
          className="text-lg hover:underline"
        >
          On Sale
        </Link>
        <Link
          href={"#newarivalss"}
          className="text-lg hover:underline"
        >
          New Arrivals
        </Link>
        <Link
          href={"#drassstyless"}
          className="text-lg hover:underline"
        >
          Brands
        </Link>
      </div>
    </SheetContent>
  </Sheet>
  </>)
}

export default Menu
