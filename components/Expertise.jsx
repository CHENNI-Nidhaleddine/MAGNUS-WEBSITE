import Image from "next/image"
export default function Expertise() {
    return (
        <div  data-aos="zoom-in" className="relative flex flex-col items-center justify-center lg:px-16 px-10 w-full lg:h-[calc(70vh)] h-screen py-16 lg:py-auto  ">
            <Image className="absolute opacity-30" src="/images/expertise.jpg" layout="fill" />
           <h1 className="z-40 lg:text-3xl text-2xl mb-8"><span className="text-[#534b49]">À PROPOS </span>MAGNUS</h1>
           <p className="text-xl flex items-center justify-center z-40 font-normal lg:px-10 text-justify">
            Magnus est une boite de développement informatique , composée d&apos;une équipe jeune
            et dynamique qui s&apos;adapte facilement à vos besoins, personnalise vos solutions et vous 
            accompagne tout au long de votre projet . Magnus est le partenaire idéal de vos idées , qui
             saura être à votre écoute , répondre à vos objectifs attendus et proposer les meilleures solutions 
             professionnelles façonnées à vos mesures. 
         
           </p>
           <span id="service" ></span>
        </div>
    )
}