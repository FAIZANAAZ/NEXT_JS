
import AnimatedBeamExample from "@/component/beam";
import { MarqueeDemo } from "@/component/marque";
import { Globe } from "@/components/magicui/globe";


const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "Netflix",
  "YouTube",
  "Instagram",
  "Uber",
  "Spotify",
];



 export default function Home() {


  return (

    <>
    <section id="companies">
      <div className="py-14">
        <div className="container mx-auto px-4 md:px-8">
          <h3 className="text-center text-sm font-semibold text-gray-500">
            TRUSTED BY LEADING TEAMS
          </h3>
          <div className="relative mt-6">
            <div className="grid grid-cols-2 place-items-center gap-2 md:grid-cols-4 xl:grid-cols-8 xl:gap-4">
              {companies.map((logo, idx) => (
                <img
                  key={idx}
                  src={`https://cdn.magicui.design/companies/${logo}.svg`}
                  className="h-10 w-40 px-2 dark:brightness-0 dark:invert"
                  alt={logo}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    <div>
< MarqueeDemo/>

    </div>
  <div className="mt-10">
      <Globe />
  </div>
  <div>
    <h1 className="text-center text-2xl font-bold mb-6">Orbiting Circles</h1>
   <AnimatedBeamExample  />
  </div>
    </>
  );
}