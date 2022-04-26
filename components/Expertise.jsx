import Image from "next/image"
import Link from "next/link"
export default function Expertise() {
    return (
        <div  id="about"  className="relative flex flex-col items-center justify-center lg:px-16 px-10 w-11/12 m-auto  h-fit  py-8 lg:py-auto -top-24 shadow-2xl bg-[#fffefe] ">
            
           <h1 className="z-40 lg:text-4xl text-2xl mb-16"><span className="text-[#2292d1]">À PROPOS </span>MAGNUS</h1>
           <p className="text-2xl flex items-center justify-center z-40 font-normal lg:px-10 text-justify">
            Magnus est une boite de développement informatique , composée d&apos;une équipe jeune
            et dynamique qui s&apos;adapte facilement à vos besoins, personnalise vos solutions et vous 
            accompagne tout au long de votre projet . Magnus est le partenaire idéal de vos idées , qui
             saura être à votre écoute , répondre à vos objectifs attendus et proposer les meilleures solutions 
             professionnelles façonnées à vos mesures. 
         
           </p>
           <Link href="#Team" ><button className=" text-2xl ml-2 mt-12 w-fit p-3 bg--none border-2 border-[#2292d1] text-[#2292d1] font-normal rounded-full font-normal hover:bg-[#4fade2] hover:text-[#000] ">Plus de detail...</button></Link>
           
        </div>
    )
}