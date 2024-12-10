
import Cardedata from "@/components/carddata"
import Menu from "../components/menu"
import Collapsiblee from "@/components/colapsible"
import SliderDemo from "@/components/sliderzip"
import SelectionBar from "@/components/selectionbar"





 function Home() {
  return (
   < >
 <div className="grid grid-cols-5 gap-4">
 <Cardedata/>
    <Menu/>
    <Collapsiblee/>
    <SliderDemo/>
    <SelectionBar/>
 </div>
    </>
  )
}


export default Home