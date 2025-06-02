import DemoAccordion from "@/components/accordtion";
import DemoButton from "@/components/button";
import DemoCard from "@/components/card";
import Navbarr from "@/components/navbar";

export default function Home() {
  return (
    <>
    <DemoAccordion/>
    <DemoCard/>
    <DemoButton/>
    <Navbarr/>
    <div>
      <h1 className="text-2xl bg-red-900 font-bold">Welcome to the Next.js App</h1>
      <p className="mt-4">This is a simple example of a Next.js application using Hero UI components.</p>
    </div>

    </>
  );
}
