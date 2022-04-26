import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image"
import Link from "next/link"
// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";

export default function About() {
    return (
        <div id="/" className="lg:px-28 h-[calc(100vh-20px)] w-full   flex  items-left justify-center text-[#fff] bg-[url(/images/background1.jpg)] bg-cover  " >
            <div className="lg:px-auto px-3 flex flex-col items-left justify-center">
               
                <h1 className="lg:text-5xl text-3xl mb-3 text-[#000] uppercase ">Faire appel<br className="hidden lg:block"/> au professionnalisme!</h1>
                <p className=" ml-2 text-[#2292d1] lg:w-4/5 w-full lg:text-2xl text-xl font-normal mt-8">
                Notre mission est  de créer de nouvelles solutions , innovantes et originales, satisfaisant les exigences de nos clients et provenant des expériences personnelles 
                </p>
                <Link href="#contact" ><button className=" text-2xl ml-2 mt-12 w-fit p-3 bg--none border-2 border-[#2292d1] text-[#2292d1] font-normal rounded-full font-normal hover:bg-[#4fade2] hover:text-[#000] ">Nous Contacter</button></Link>
            </div>
            <div className="lg:block hidden h-fit w-fit  lg:my-auto my-6">
                   <div className=" h-fit w-fit  relative">
                   <Image src="/images/hddd.png"  height={550} width={820} alt="Nidhal Chenni" />
                   </div>
               </div>
        </div>
            /* {/* <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      
      loop
      centeredSlides={true}
      modules={[Autoplay, Pagination, Navigation]}
      pagination={{
        dynamicBullets: true,
      }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      style={{
        "--swiper-navigation-color": "#c43527",
        "--swiper-pagination-color": "#c43527",

      }}
      
    >
      <SwiperSlide><div className="relative w-[calc(100vw)] lg:h-[calc(70vh)] h-[calc(90vh)]  lg:px-32 pt-32 px-4">
      <Image className="absolute opacity-30 " src="/images/about1.jpg" layout="fill" />
       
        <h1 className="relative  z-40 lg:text-5xl text-4xl font-bold mb-10 lg:top-auto top-20">SOLUTIONS <br/> PRATIQUES</h1>
      <h2 className="relative z-40 text-xl text-[#534b49] lg:top-auto top-16  ">Des services intelligents, efficaces et sur mesure.</h2></div></SwiperSlide>
      <SwiperSlide><div className="relative w-[calc(100vw)] lg:h-[calc(70vh)] h-[calc(90vh)] lg:px-32 pt-32 px-4">
         <Image className=" absolute opacity-30" src="/images/about.jpg" layout="fill" />
        <h1 className="relative z-40 lg:text-5xl text-4xl font-bold  mb-10 lg:top-auto top-20">DÉVELOPPEMENT<br/> DES AFFAIRES</h1>
        <h2 className="relative z-40 text-xl text-[#534b49] lg:top-auto top-16 ">Accompagnement de la planification à l&apos;exécution</h2></div></SwiperSlide>
      <SwiperSlide><div className="relative w-[calc(100vw)] lg:h-[calc(70vh)] h-[calc(90vh)] lg:px-32 pt-32 px-4">
      <Image className="absolute opacity-70" src="/images/about2.jpg" layout="fill" />
      <h1 className="relative z-40 lg:text-5xl text-4xl  font-bold  mb-10 lg:top-auto top-20">
        CRÉATIF<br/> QUI FONCTIONNE</h1>
        <h2 className="relative z-40 text-xl text-[#534b49] lg:top-auto top-16 ">Les grandes idées méritent une présentation de 1ere classe.</h2></div></SwiperSlide>
      
      
    </Swiper> 
    <span id="about"></span>
        </div>*/
    )
}