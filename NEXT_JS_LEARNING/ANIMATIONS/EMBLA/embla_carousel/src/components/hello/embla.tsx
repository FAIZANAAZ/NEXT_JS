"use client"

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'

// 1)open embla caarousel in browser and click get started select react on the right side 
// 2) (npm install embla-carousel-react --save --legacy-peer-deps) lagacy for react 19
// 3) import useEmblaCarousel from 'embla-carousel-react'
// 4)isky nichy componnt me  past in component const [emblaRef] = useEmblaCarousel()
// 5) read exlanation in the buttom line 33
//  6) add css in embla web or osmy hm khod sy bhi add kr skty hen properties


const Emla = () => {
  const [emblaRef] = useEmblaCarousel()
  return (

    <div>Emla</div>
  )
}

export default Emla
// const [emblaRef] = useEmblaCarousel()

// return (
//   <div className="embla" ref={emblaRef}>
//     <div className="embla__container">
//       <div className="embla__slide">Slide 1</div>
//       <div className="embla__slide">Slide 2</div>
//       <div className="embla__slide">Slide 3</div>
//     </div>
//   </div>
// )
// explanation
// ye ak react ke hook ki sorat me he linee 13 me
// ismy line 24 me jo div he wo main div he hm chahy to oski class ko apni main div me deden to wo applay ho jayga 

// 25 line mw osky ander ak or div he oski class me hm apny main div ke ander koi div bna kr add krdengy ye ak or div he
// jismy hmary cards rakhengy jaygy or wo zada hongy wo xard fle row me bahir jaygy to emble khod osko overflow hidden krdega
// phir line 26 27 28 hmary card ke liye hen div or os card ki div ke ander hm koch bhi add kr skty text ya picture 

// ye ak slider bn jayga esa jisko mouse sy pkar kr hm agy pichy kr skty hen

// .embla {
//   overflow: hidden;
// }
// .embla__container {
//   display: flex;
// }
// .embla__slide {
//   flex: 0 0 100%;
//   min-width: 0;
// }


// isky nichy hm api ka use bhi kr skty hen wo bhi hmary web pr he hm osko apny hook me addd 
// krengy to wo ak loop deta he oska use krny ka tarika osi me he phir osy hoga ye ke
// hm jo cards kgaygy wo loop ki trha kam kryga or hod chaly ga x me yani akhiri card ke bad again phla card start ho jayga
// or osko hm properties bhi de skty hen ke mouse rakhny pr rok jay kitny second ka waqt le sb

// api hmy mil jaygi component ke nichy lekin oski properties ke liye hmy plugin pr jana hoga

// 1)update hook  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })
// 2)past  useEffect(() => {
  //   if (emblaApi) {
  //     console.log(emblaApi.slideNodes()) // Access API
  //   }
  // }, [emblaApi])

// 3)import useEmblaCarousel from 'embla-carousel-react'
// 4)go plugin and chose properties example aytoplay etc
// 5)npm install embla-carousel-autoplay --save --legacy-peer-deps
// 6)import Autoplay from 'embla-carousel-autoplay' jo chose kiy osko import krna he
// 6)1 point me jo likh he osky ky agy jo chose kiya osko likhna he
//const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false },[Autoplay({delay: 1000 ,stopOnInteraction: false ,stopOnMouseEnter: false})])
// auoplay ak object leta he to or bhi properties iski hm isky ander likhen ge
//  isme plugin me properties heading hi hen 

// stopOnInteraction: false iska matlb jb bhi ispr intrection ho wo stop ho jay
// stopOnMouseEnter: false iska matlb jb mouse lekr jay to wo rok jayga or htaygy to rok jayga



// hm embla ke card ki wirdhth ko is trha dengy ke wirth : cal(100% - 100px)/3
// ismy hmny kha 100 wirth lo phly phir osmy sy 100px - krdo lekin iski jha hm wo likhengy jo gap pading wagera mila kr 
// bnyga osko - krengy or phir / 3 or ye 3 wo card hen jo overflow hidden waly cards ko hta kr srif
// web pr wo cards dikhengy wo hen agr card hm 4 dikhana chalaty hen to / 4 krengy 

// wirth : cal(100% - 100px)/3
//flex-shrink :0 (iska matlb card ki jitni wirdh di he otni le zada card any pr wo chota na ho jay )
// flex-grow :0 (iska matlb card ki jitni hight he contance rakheny ke bad otni he le bar na jay lambi na ho kioky hm hight nhi dety wo contant sy khod cover hoti he isi liye jb card srink hoty hen to wo nichy sy lamby ho jaty he )

// felex : 0 0 calc((100% - 100px)/3);
// ya hm wo sb ak line me bhi de skty hen