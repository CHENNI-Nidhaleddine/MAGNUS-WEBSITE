import Link from "next/link"
export default function Header() {
    return (
        <div className=" flex items-center justify-center w-full ">
           <ul className="flex items-center justify-evenly w-full bg-[#c43527] text-white">
               <li className=" list-type-none hover:bg-[#b02f23] py-2 px-2 "><Link  href="#about"><span className="h-full w-full flex items-center justify-center text-center">À PROPOS MAGNUS</span></Link></li>
               {/* <li className="list-type-none hover:bg-[#b02f23] py-2 px-2 "><Link href="kk">SERVICES MAGNUS</Link></li> */}
               <li className="list-type-none hover:bg-[#b02f23] py-2 px-2 "><Link href="#team"><span className="h-full w-full flex items-center justify-center text-center">L&apos;EQUIPE MAGNUS</span></Link></li>
               <li className="list-type-none hover:bg-[#b02f23] py-2 px-2 "><Link href="#contact"><span className="h-full w-full flex items-center justify-center text-center">CONTACTER MAGNUS</span></Link></li>
           </ul>
        </div>
    )
}