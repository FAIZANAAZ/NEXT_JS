import { Truck, Headphones, ShieldCheck } from 'lucide-react'

export default function ServiceFeatures() {
  const features = [
    {
      icon: Truck,
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140"
    },
    {
      icon: Headphones,
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support"
    },
    {
      icon: ShieldCheck,
      title: "MONEY BACK GUARANTEE",
      description: "We return money within 30 days"
    }
  ]

  return (
    <div className="container w-full px-[114px]   mt-[140px]">
      <div className="flex w-full h-[161px] gap-[88px]">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center h-[161px] w-[249px] gap-[24px] ">
            <div className='rounded-full h-[80px] w-[80px] p-[11px] bg-[#c1c0c1]'>
                <div className="bg-gray-900 rounded-full flex items-center justify-center h-[58px] w-[58px] ">
              <feature.icon size={40} className=" text-white" />
            </div>
            </div>
            {/* content div */}

        <div className='flex flex-col items-center text-center '>  
            
        <h3 className="font-semibold leading-[24px] text-[15px] gap-2">{feature.title}</h3>
        <p className="text-sm text-gray-600 leading-[21px] text-[14px]">{feature.description}</p>
        </div>
          </div>
        ))}
      </div>
    </div>
  )
}

