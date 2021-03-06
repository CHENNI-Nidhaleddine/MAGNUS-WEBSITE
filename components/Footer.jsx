import Link from "next/link";
import Image from "next/image";
import {BsFacebook,BsTwitter,BsLinkedin,BsInstagram} from "react-icons/bs"
export default function Footer() {
    return (
        <div className="flex flex-col-reverse lg:flex-row items-center justify-evenly lg:px-16 w-full h-[calc(20vh)] bg-[#1d1d1b] text-[#f6f6f6]">
           <div className="flex items-center justify-center">
               <Link href="mailto:ne.chenni@gmail.com">contact@magnus.dz</Link>

           </div>
           <div className="flex flex-col items-center justify-center">
               <h2>© 2022 Magnus Technologies</h2>
               <h2 className="text-[#d3eaf7]">Siteweb réalisé par Magnus</h2>
         

           </div>
           <div className="flex items-center justify-center">
               <div className="mx-2 text-2xl text-[#f6f6f6] cursor-pointer hover:text-[#3b5998] "> <Link  className="mx-3" href="#"><BsFacebook/></Link></div>
               <div className="mx-2 text-2xl text-[#f6f6f6] cursor-pointer hover:text-[#00acee] "> <Link className="px-2" href="#"><BsTwitter/></Link></div>
               <div className="mx-2 text-2xl text-[#f6f6f6] cursor-pointer hover:text-[#0e76a8] "> <Link className="px-2" href="#"><BsLinkedin/></Link></div>
               <div className="mx-2 text-2xl text-[#f6f6f6] cursor-pointer hover:text-[#833ab4] "> <Link className="px-2" href="#"><BsInstagram/></Link></div>
          
        
          
               
           </div>
        
        </div>
    )
}