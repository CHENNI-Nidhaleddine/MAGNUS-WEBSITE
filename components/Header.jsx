import Link from "next/link"
import {MdOutlineClose} from "react-icons/md"
import {GiHamburgerMenu} from "react-icons/gi"
import Image from "next/image"
import React from "react"
export default function Header() {
  const [direction, setDirection] = React.useState(String)
  const [isOpen, setIsOpen] = React.useState(false)

  const [isScrollZero,setScrollZero]=React.useState(true)
  const liStyle="list-type-none text-[#fff]  "
  const [active,setActive]=React.useState("home")
    return (
        <div className=" flex flex-col lg:flex-row items-center  justify-between w-full px-4 lg:px-auto bg-[#1d1d1b] z-99 py-2 px-10">
           <div className="hidden lg:flex items-center justify-center">
               <Image className="cursor-pointer" src="/images/icon.png" width={60} height={60}/>
               <span className="block px-1"></span>
               <Image className="cursor-pointer" src="/images/textLogo.png" width={100} height={40}/>
           </div>
           <ul className="hidden lg:flex items-center justify-evenly w-1/2  text-white">
               <li className="cursor-pointer list-type-none hover:text-[#2292d1] py-2 px-2 "><Link  href="#about"><span className="h-full w-full flex items-center justify-center text-center">À PROPOS</span></Link></li>
               <li className="cursor-pointer list-type-none hover:text-[#2292d1] py-2 px-2 "><Link href="#service"><span className="h-full w-full flex items-center justify-center text-center">SERVICES</span></Link></li>
               <li className="cursor-pointer list-type-none hover:text-[#2292d1] py-2 px-2 "><Link href="#"><span className="h-full w-full flex items-center justify-center text-center">PROJETS</span></Link></li>
               <li className="cursor-pointer list-type-none hover:text-[#2292d1] py-2 px-2 "><Link href="#team"><span className="h-full w-full flex items-center justify-center text-center">L&apos;EQUIPE</span></Link></li>
               <li className="cursor-pointer list-type-none hover:text-[#2292d1] py-2 px-2 "><Link href="#contact"><span className="h-full w-full flex items-center justify-center text-center">CONTACTER</span></Link></li>
           </ul>
           
          <div className=" lg:hidden h-[calc(10vh)] text-white text-4xl font-bold flex  items-center justify-between w-full">
           <div className="lg:hidden flex items-center justify-center">
               <Image className="cursor-pointer" src="/images/icon.png" width={45} height={40}/>
           </div>
          <button className= "flex items-center justify-center" onClick={()=>setIsOpen(!isOpen)}>
            <GiHamburgerMenu className={isOpen? "hidden":"cursor-pointer"}/>
            <MdOutlineClose  className={isOpen? "cursor-pointer":"hidden"}/>
          </button> 
        </div>
        
        <ul className={isOpen? "  fixed relative  z-99 left-0  w-5/6 h-[calc(90vh)] flex  items-center justify-center  " :"hidden"}>
                
                <div className="bg-[#000]  h-full w-full flex flex-col  items-center justify-evenly shadow-l-3xl transition-all duration-500 ease-in-out text-white ">
                {/* <li className={liStyle} onClick={()=>{setActive("home");setIsOpen(false)}}><Link href="/"  ><span className={active=="home"? " text-2xl text-[#70AD47] cursor-pointer":" text-2xl text-[#fff] cursor-pointer"} >Home</span></Link></li>
                <li className={liStyle} onClick={()=>{setActive("about");setIsOpen(false)}}><Link href="#about" ><span className={active=="about"? " text-2xl text-[#70AD47] cursor-pointer":" text-2xl text-[#fff] cursor-pointer"}>About</span></Link></li>
                <li className={liStyle} onClick={()=>{setActive("experience");setIsOpen(false)}}><Link href="#resume" ><span className={active=="experience"? " text-2xl text-[#70AD47] cursor-pointer":" text-2xl text-[#fff] cursor-pointer"}>Resume</span></Link></li>
                <li className={liStyle} onClick={()=>{setActive("projects");setIsOpen(false)}}><Link href="#projects" ><span className={active=="projects"? " text-2xl text-[#70AD47] cursor-pointer":" text-2xl text-[#fff] cursor-pointer"}>Projects</span></Link></li>
                <li className={liStyle} onClick={()=>{setActive("contact");setIsOpen(false)}}><Link href="#contact" ><span className={active=="contact"? " text-2xl text-[#70AD47] cursor-pointer":" text-2xl text-[#fff] cursor-pointer"}>Contact</span></Link></li>
                <Link href="/blog"><button className="bg-[#70AD47] text-[#fff] rounded shadow-2xl p-2">Go to Blog</button></Link> */}
                <li className="cursor-pointer list-type-none hover:bg-[#b02f23]  px-2 " onClick={()=>{setIsOpen(false)}}><Link  href="#about"><span className="h-full w-full flex items-center justify-center text-center ">À PROPOS MAGNUS</span></Link></li>
               <li className="cursor-pointer list-type-none hover:bg-[#b02f23]  px-2 " onClick={()=>{setIsOpen(false)}}><Link href="#service"><span className="h-full w-full flex items-center justify-center text-center">SERVICES MAGNUS</span></Link></li>
               <li className="cursor-pointer list-type-none hover:bg-[#b02f23]  px-2 " onClick={()=>{setIsOpen(false)}}><Link href="#"><span className="h-full w-full flex items-center justify-center text-center">PROJETS MAGNUS</span></Link></li>
               <li className="cursor-pointer list-type-none hover:bg-[#b02f23]  px-2 " onClick={()=>{setIsOpen(false)}}><Link href="#team"><span className="h-full w-full flex items-center justify-center text-center">L&apos;EQUIPE MAGNUS</span></Link></li>
               <li className="cursor-pointer list-type-none hover:bg-[#b02f23]  px-2 " onClick={()=>{setIsOpen(false)}}><Link href="#contact"><span className="h-full w-full flex items-center justify-center text-center">CONTACTER MAGNUS</span></Link></li>
       
                </div>
        </ul>
        </div>
    )
}