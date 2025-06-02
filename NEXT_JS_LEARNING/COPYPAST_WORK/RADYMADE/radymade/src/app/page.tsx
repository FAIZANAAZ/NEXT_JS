import Image from 'next/image';


export default function Home() {
  return (
  <>

  
<section className="relative flex justify-center items-center">
  <Image 
    src={'/bgpic.jpg'} 
    alt={'gun'} 
    height={1000} 
    width={1000} 
    className='w-full h-[500px]' 
  />

<div>
<h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[2.5rem] text-white z-10 bg-green-600 bg-opacity-50 p-3 rounded-md '>
  PAK ARMY TRAINING INSTITUTE
</h1>

  </div>
</section>


  </>
  );
}
