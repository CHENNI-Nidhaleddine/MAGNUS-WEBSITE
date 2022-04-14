import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image"
// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";

export default function About() {
    return (
        <div className="flex items-center justify-center w-full lg:h-[calc(70vh)] h-full ">
             <Swiper
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
      <SwiperSlide><div className="relative w-[calc(100vw)] h-[calc(70vh)] lg:px-32 pt-32 px-4">
      <Image className="absolute opacity-30 " src="/images/about1.jpg" layout="fill" />
       
        <h1 className="relative  z-40 lg:text-5xl text-4xl font-bold mb-10">SOLUTIONS <br/> PRATIQUES</h1>
      <h2 className="relative z-40 text-xl text-[#534b49]  ">Des services intelligents, efficaces et sur mesure.</h2></div></SwiperSlide>
      <SwiperSlide><div className="relative w-[calc(100vw)] h-[calc(70vh)] lg:px-32 pt-32 px-4">
         <Image className=" absolute opacity-30" src="/images/about.jpg" layout="fill" />
        <h1 className="relative z-40 lg:text-5xl text-4xl font-bold  mb-10">DÉVELOPPEMENT<br/> DES AFFAIRES</h1>
        <h2 className="relative z-40 text-xl text-[#534b49] ">Accompagnement de la planification à l&apos;exécution</h2></div></SwiperSlide>
      <SwiperSlide><div className="relative w-[calc(100vw)] h-[calc(70vh)] lg:px-32 pt-32 px-4">
      <Image className="absolute opacity-70" src="/images/about2.jpg" layout="fill" />
      <h1 className="relative z-40 lg:text-5xl text-4xl  font-bold  mb-10">
        CRÉATIF<br/> QUI FONCTIONNE</h1>
        <h2 className="relative z-40 text-xl text-[#534b49]  ">Les grandes idées méritent une présentation de 1ere classe.</h2></div></SwiperSlide>
      
      
    </Swiper>
        </div>
    )
}