
// [...Array(100)].map((_, index) => {
//     return(<div key={index} className="flex flex-col gap-3 p-3 bg-white h-[350px] w-[100%]  sm:w-[250px] md:w-[260px] lg:w-[300px] xl:w-[300px]">
//         <div className="overflow-hidden rounded-lg group flex justify-center items-center">
//           <Image
//             src={item.picture}
//             width={1000}
//             height={1000} 
//             alt="gifts"
//             className="h-[300px] w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
//           />
//         </div>
//         <div className='flex justify-between p-2 font-semibold items-center'>
//           <h1 className='text-[16px]'>{item.name}</h1>
//           <h1 className='text-[30px]'>{item.price}</h1>
//         </div>
//       </div>)
// })

// imy hmny jo likha he ke 100 to wo 100 card bnadega or isi trha hm likhden 500 to wo 500 card bnadega ye srif testing ke liye he ke agr hmy 
// 500 card dekhna he srif testing ke liyeke onka  layout kesy dikhyga to hm is trha krygy wrna hmy data ko 500 bar likha pryga tb hi wo loop chlyga lekin array me data to rkhna pryga ga hm copy past bhi kr 
// skty hen lekin osky liye bhi hmy 500 bar krna pryga copy past 

// esy map bna kr osmy card rkh dengy or data ki zaorrat nhi he hongy to wo same hi cards kioky hm srif testing kry hen
// _, hmny isi liye lgaya he ke hm yha wesy agr data sy koch mngwaty hen to item likhty hen or osko use krty hen lekin hmy koch nhi mngwaya
// to by defult hya undefined ayga to undefined hmy use nhi krna to hm _ lga dengy or index wahi uniq id ke liye  zariri he ismy bhi




// isi trha hm iska use kr skty ak jesy chizon ke liye jesy hm chahty hen ke ha card me starts ay or sb  me alag alag ginti me ay jesy kisi me 3 kisi me 4 to hmy jakr dena pryga
// starts to ak jesy hi hoty hen to hm ye kr skty hen ke data ko mngwaly or sb dta me start ki property rkh kr osko ak number de den 
// sbko alag alag or blkl loop waly map ki trha chlay or ye wala arry bhi osmy add kr den or number jha 500 100 likhty osme os property ka name likh den

// {items.map((item, index) => (
//     <div key={index} className="flex flex-col gap-3 p-3 bg-white h-[350px] w-[100%]  sm:w-[250px] md:w-[260px] lg:w-[300px] xl:w-[300px]">
//       <div className="overflow-hidden rounded-lg group flex justify-center items-center">
//         <Image
//           src={item.picture}
//           width={1000}
//           height={1000} 
//           alt="gifts"
//           className="h-[300px] w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
//         />
//         [...Array(item.star)].map((_, index)=>{
//             return(<Stars/>)
//             // yani ye wla arry wha use krengy jha pr start ko rkhna ho
//         })
//       </div>
//       <div className='flex justify-between p-2 font-semibold items-center'>
//         <h1 className='text-[16px]'>{item.name}</h1>
//         <h1 className='text-[30px]'>{item.price}</h1>
//       </div>
//     </div>
//   ))}
