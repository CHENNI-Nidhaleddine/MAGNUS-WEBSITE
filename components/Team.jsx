import Image from "next/image"
export default function Team() {
    return (
        <div id="team"className="relative flex flex-col items-center justify-center px-16 w-full h-[calc(70vh)]">
              <div className="flex flex-col items-center justify-center mb-14 "><h1 className="z-40 text-3xl mb-4"><span className="text-[#534b49]">EQUIPE </span>MAGNUS</h1>
                   <p className="text-lg flex flex-col  items-center justify-center z-40 font-normal  text-justify  ">
               <h1 className="text-lg flex flex-col  items-center justify-center text-center">Des années d&apos;expérience acquises en travaillant avec et pour les petites, moyennes et grandes entreprises. C&apos;est l&apos;équipe Magnus.</h1>

               </p></div>
               <div className="grid col-span-8 row-span-4 grid-cols-4 grid-row-2 gap-20 items-center justify-center text-center">
                   <div className="flex flex-col items-center justify-center">
                       <h1 className="text-xl text-[#c43527] font-bold">SARRA BENDAHO</h1>
                       <h2 className="text-lg flex items-center justify-center z-40 font-normal">Directrice generale</h2>
                   </div>
                   <div className="flex flex-col items-center justify-center">
                       <h1 className="text-xl text-[#c43527] font-bold">CHENNI NIDHAL</h1>
                       <h2 className="text-lg flex items-center justify-center z-40 font-normal">Consultant développeur</h2>
                   </div>
                   <div className="flex flex-col items-center justify-center">
                       <h1 className="text-xl text-[#c43527] font-bold">TOUHAR AFNANE</h1>
                       <h2 className="text-lg flex items-center justify-center z-40 font-normal">Consultante en gestion </h2>
                   </div>
                   <div className="flex flex-col items-center justify-center">
                       <h1 className="text-xl text-[#c43527] font-bold">TOUAMI MOHAMED</h1>
                       <h2 className="text-lg flex items-center justify-center z-40 font-normal">Conseiller commercial</h2>
                   </div>
                   <div className="flex flex-col items-center justify-center">
                       <h1 className="text-xl text-[#c43527] font-bold">KHENFOUF AYOUB</h1>
                       <h2 className="text-lg flex items-center justify-center z-40 font-normal">Consultant en UX design</h2>
                   </div>
                   <div className="flex flex-col items-center justify-center">
                       <h1 className="text-xl text-[#c43527] font-bold">BERRICHE AYMENE</h1>
                       <h2 className="text-lg flex items-center justify-center z-40 font-normal">General  Consultant</h2>
                   </div>
                   <div className="flex flex-col items-center justify-center">
                       <h1 className="text-xl text-[#c43527] font-bold">BEKKAR ILHEM</h1>
                       <h2 className="text-lg flex items-center justify-center z-40 font-normal">Consultante en gestion</h2>
                   </div>
                   <div className="flex flex-col items-center justify-center">
                       <h1 className="text-xl text-[#c43527] font-bold">BENTAYEB AMINE</h1>
                       <h2 className="text-lg flex items-center justify-center z-40 font-normal">Consultant développeur</h2>
                   </div>
                   
               </div>
        </div>
    )
}



