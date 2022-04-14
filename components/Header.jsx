import Link from "next/link"
export default function Header() {
    return (
        <div className=" flex items-center justify-center w-full ">
           <ul className="flex justify-evenly w-full bg-[#c43527] text-white">
               <li className="list-type-none hover:bg-[#b02f23] py-2 px-2 "><Link  href="#about">À PROPOS MAGNUS</Link></li>
               {/* <li className="list-type-none hover:bg-[#b02f23] py-2 px-2 "><Link href="kk">SERVICES MAGNUS</Link></li> */}
               <li className="list-type-none hover:bg-[#b02f23] py-2 px-2 "><Link href="#team">L'EQUIPE MAGNUS</Link></li>
               <li className="list-type-none hover:bg-[#b02f23] py-2 px-2 "><Link href="#contact">CONTACTER MAGNUS</Link></li>
           </ul>
        </div>
    )
}