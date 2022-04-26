import Image from "next/image"
export default function Team() {
    return (
        <div data-aos="zoom-in" className="relative flex flex-col items-center justify-center lg:px-16 w-full lg:h-[calc(70vh)] px-10  h-full py-10 lg:py-auto">
              <div className="flex flex-col items-center justify-center mb-14 "><h1 className="z-40 text-3xl mb-4"><span className="text-[#534b49]">EQUIPE </span>MAGNUS</h1>
                   <p className="text-lg flex flex-col  items-center justify-center z-40 font-normal  text-justify  ">
               <h1 className="text-lg flex flex-col  items-center justify-center text-center">Des années d&apos;expérience acquises en travaillant avec et pour les petites, moyennes et grandes entreprises. C&apos;est l&apos;équipe Magnus.</h1>

               </p></div>
               <div className="grid col-span-8 row-span-4 lg:grid-cols-4 grid-cols-1 lg:grid-row-2 gap-20 items-center justify-center text-center">
                   <div className="flex flex-col items-center justify-center">
                       <h1 id="sb" className="text-xl text-[#2292d1] font-bold">BENDAHO SARRA</h1>
                       <h2 className="text-lg flex items-center justify-center z-40 font-normal">Directrice generale</h2>
                   </div>
                   <div className="flex flex-col items-center justify-center">
                       <h1 id="nc" data-image="/images/about.jpg" className="text-xl text-[#2292d1]  font-bold">CHENNI NIDHAL</h1>
                       <h2 className="text-lg flex items-center justify-center z-40 font-normal">Consultant développeur</h2>
                   </div>
                   <div className="flex flex-col items-center justify-center">
                       <h1 id="at" className="text-xl text-[#2292d1]  font-bold">TOUHAR AFNANE</h1>
                       <h2 className="text-lg flex items-center justify-center z-40 font-normal">Consultante en gestion </h2>
                   </div>
                   <div className="flex flex-col items-center justify-center">
                       <h1 id="mt" className="text-xl text-[#2292d1]  font-bold">TOUAMI MOHAMMED</h1>
                       <h2 className="text-lg flex items-center justify-center z-40 font-normal">Conseiller commercial</h2>
                   </div>
                   <div className="flex flex-col items-center justify-center">
                       <h1  id="ak"className="text-xl text-[#2292d1]  font-bold">KHENFOUF AYOUB</h1>
                       <h2 className="text-lg flex items-center justify-center z-40 font-normal">Consultant en UX design</h2>
                   </div>
                   <div className="flex flex-col items-center justify-center">
                       <h1 id="ayb" className="text-xl text-[#2292d1]  font-bold">BERRICHE AYMEN</h1>
                       <h2 className="text-lg flex items-center justify-center z-40 font-normal">General  Consultant</h2>
                   </div>
                   <div className="flex flex-col items-center justify-center">
                       <h1 id="ib" className="text-xl text-[#2292d1]  font-bold">BEKKAR ILHEM</h1>
                       <h2 className="text-lg flex items-center justify-center z-40 font-normal">Consultante en gestion</h2>
                   </div>
                   <div className="flex flex-col items-center justify-center">
                       <h1 id="amb" className="text-xl text-[#2292d1]  font-bold">BENTAYEB AMINE</h1>
                       <h2 className="text-lg flex items-center justify-center z-40 font-normal">Consultant développeur</h2>
                   </div>
    
                   
               </div>
               <span id="contact"></span>
              
        </div>
    )
}



