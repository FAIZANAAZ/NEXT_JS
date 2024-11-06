import Image from "next/image";
import Front from "../Components/frontpage/front";
import Nav from "@/Components/navbar/nav";
import Sec4 from "@/Components/Ourshop/sec4";
import Contact from "@/Components/Contact/contact";
import Sec2 from "@/Components/Aboutus/sec2";
import Sec3 from "@/Components/Ourgift/sec3";


export default function Home() {
  return (
    <>
    <Nav/>
    <Front/>
    <Sec2/>
    <Sec3/>
    <Sec4/>
    <Contact/>
    
    </>
  );
}
