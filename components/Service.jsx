import Image from "next/image"
import {GrHelp,GrUserManager,} from "react-icons/gr"
import {MdDesignServices} from "react-icons/md"
import {GiTeacher,GiSelect} from "react-icons/gi"
import {FaLaptopCode,FaHandsHelping} from "react-icons/fa"

import Xarrow, {useXarrow, Xwrapper} from 'react-xarrows';
export default function Service() {
   
    return (
        <div    className="relative flex flex-col items-center justify-center lg:px-16 px-10 w-full lg:h-[calc(70vh)] h-full py-16 lg:py-auto  ">
        <h1 className="z-40 lg:text-3xl text-2xl "><span className="text-[#534b49]">SERVICES </span>MAGNUS</h1>
        <p className="px-6 lg:px-auto text-lg flex flex-col  items-center justify-center z-40 font-normal  text-justify lg:mb-4 xl:mb-8  ">
           
        <h1 className="text-lg flex flex-col  items-center justify-center text-center lg:mb-auto mb-10"> Notre but est de vous offrir une gamme de prestations informatiques la plus large possible</h1>
        </p>
           
           <Xwrapper >
           <div  className="hidden lg:grid lg:w-3/4 w-full grid lg:grid-cols-5 lg:grid-row-2 grid-cols-2 grid-row-5    xl:gap-20 lg:gap-10 gap-15" >
               <div id="sv1" className="cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#d4462b] z-50 duration-300 shadow-xl relative text-[#f6f6f6] flex flex-col items-center justify-center rounded-full bg-[#c43527] xl:py-5 xl:px-2 lg:px-5 py-3 " >
                   <FaHandsHelping className="text-4xl  font-bold"/>
                   <h1 className="w-fit  text-center xl:mt-3 lg:mt-2  xl:uppercase lg:font-normal xl:font-bold lg:text-sm xl:text-md text-md ">Conseils et conception</h1>
                   </div>
               <div></div>
               <div id="sv3" className="cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#d4462b] duration-300 z-50 shadow-xl relative py-5 text-[#f6f6f6]  flex flex-col items-center justify-center rounded-full   bg-[#c43527] xl:py-5 xl:px-2 px-8 ">
                   <MdDesignServices className="text-4xl  font-bold"/>
                   <h1 className="w-fit text-center  xl:mt-3 lg:mt-2 xl:uppercase lg:font-normal xl:font-bold lg:text-sm xl:text-md text-md">Design et maquette</h1>
               </div>
               <div></div>
               <div id="sv5" className="cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#d4462b] duration-300 z-50 shadow-xl relative text-[#f6f6f6] flex flex-col items-center justify-center rounded-full bg-[#c43527]  xl:py-5 xl:px-2 px-8 ">
                   <GiTeacher className="text-4xl  font-bold"/>
               <h1 className="w-fit  text-center xl:mt-3 lg:mt-2  xl:uppercase lg:font-normal xl:font-bold lg:text-sm xl:text-md text-md  ">Installation et formation</h1>
               </div>

         
               <div></div>
               <div id="sv2" className="cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#d4462b] duration-300 z-50 shadow-xl relative text-[#f6f6f6] flex flex-col items-center justify-center rounded-full bg-[#c43527]  xl:py-5 xl:px-2 px-8 ">
                   <GiSelect className="text-4xl  font-bold"/>
               <h1 className="w-fit text-center   xl:mt-3 lg:mt-2  xl:uppercase lg:font-normal xl:font-bold lg:text-sm xl:text-md text-md ">Spécification souligné</h1>
               </div>
               <div></div>
               <div id="sv4" className="cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#d4462b] duration-300 z-50 shadow-xl relative text-[#f6f6f6] flex flex-col items-center justify-center rounded-full bg-[#c43527]  xl:py-5 xl:px-2 px-8 lg:py-5 ">
                   <FaLaptopCode className="text-4xl  font-bold"/>
               <h1 className="w-fit  text-center xl:mt-3 lg:mt-2  xl:uppercase lg:font-normal xl:font-bold lg:text-sm xl:text-md text-md">Développement et intégration</h1>
               </div>
               <div></div>
           
           </div>
           <div  className=" lg:hidden lg:w-3/4 w-full grid lg:grid-cols-5 lg:grid-row-2 grid-cols-2 grid-row-5    xl:gap-20 lg:gap-10 " >
           <div id="sv11" className="cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#d4462b] z-50 duration-300 shadow-xl relative text-[#f6f6f6] flex flex-col items-center justify-center rounded-full bg-[#c43527] xl:py-5 xl:px-2 lg:px-5  p-5 w-36 h-36" >
                   <FaHandsHelping className="text-4xl  font-bold"/>
                   <h1 className="w-fit  text-center xl:mt-3 lg:mt-2  xl:uppercase lg:font-normal xl:font-bold lg:text-sm xl:text-md text-md ">Conseils et conception</h1>
                   </div>
               <div></div>
               <div></div>
               <div id="sv22" className="cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#d4462b] duration-300 z-50 shadow-xl relative text-[#f6f6f6] flex flex-col items-center justify-center rounded-full bg-[#c43527]  xl:py-5 xl:px-2 p-5 w-36 h-36 ">
                   <GiSelect className="text-4xl  font-bold"/>
               <h1 className="w-fit text-center   xl:mt-3 lg:mt-2  xl:uppercase lg:font-normal xl:font-bold lg:text-sm xl:text-md text-md ">Spécification souligné</h1>
               </div>
            
               <div id="sv33" className="cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#d4462b] duration-300 z-50 shadow-xl relative py-5 text-[#f6f6f6]  flex flex-col items-center justify-center rounded-full   bg-[#c43527] xl:py-5 xl:px-2 p-5 w-36 h-36 ">
                   <MdDesignServices className="text-4xl  font-bold"/>
                   <h1 className="w-fit text-center  xl:mt-3 lg:mt-2 xl:uppercase lg:font-normal xl:font-bold lg:text-sm xl:text-md text-md">Design et maquette</h1>
               </div>
               <div></div>
               <div></div>
               <div id="sv44" className="cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#d4462b] duration-300 z-50 shadow-xl relative text-[#f6f6f6] flex flex-col items-center justify-center rounded-full bg-[#c43527]  xl:py-5 xl:px-2  lg:py-5 p-5 w-36 h-36 ">
                   <FaLaptopCode className="text-4xl  font-bold"/>
               <h1 className="w-fit  text-center xl:mt-3 lg:mt-2  xl:uppercase lg:font-normal xl:font-bold lg:text-sm xl:text-md text-md">Développement et intégration</h1>
               </div>
               <div></div>
               <div></div>
               <div id="sv55" className="cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#d4462b] duration-300 z-50 shadow-xl relative text-[#f6f6f6] flex flex-col items-center justify-center rounded-full bg-[#c43527]  xl:py-5 xl:px-2 p-5 w-36 h-36">
                   <GiTeacher className="text-4xl  font-bold"/>
               <h1 className="w-fit  text-center xl:mt-3 lg:mt-2  xl:uppercase lg:font-normal xl:font-bold lg:text-sm xl:text-md text-md  ">Installation et formation</h1>
               </div>
               </div>
         
           <Xarrow
                start="sv1" //can be react ref
                end="sv2" //or an id
                color="#c43527"
                showHead={false}
                animateDrawing={true}
                path="straight"

            />
                <Xarrow
                start="sv2" //can be react ref
                end="sv3" //or an id
                color="#c43527"
                showHead={false}
                animateDrawing={true}
                path="straight"
            />
                <Xarrow
                start="sv3" //can be react ref
                end="sv4" //or an id
                color="#c43527"
                showHead={false}
                animateDrawing={true}
                path="straight"
                dashness={true}
            />
                <Xarrow
                start="sv4" //can be react ref
                end="sv5" //or an id
                color="#c43527"
                showHead={false}
                animateDrawing={true}
                path="straight"
            />
             <Xarrow
                start="sv11" //can be react ref
                end="sv22" //or an id
                color="#c43527"
                showHead={false}
                animateDrawing={true}
                path="straight"

            />
                <Xarrow
                start="sv22" //can be react ref
                end="sv33" //or an id
                color="#c43527"
                showHead={false}
                animateDrawing={true}
                path="straight"
            />
                <Xarrow
                start="sv33" //can be react ref
                end="sv44" //or an id
                color="#c43527"
                showHead={false}
                animateDrawing={true}
                path="straight"
                dashness={true}
            />
                <Xarrow
                start="sv44" //can be react ref
                end="sv55" //or an id
                color="#c43527"
                showHead={false}
                animateDrawing={true}
                path="straight"
            />
           
           </Xwrapper>
           
           <span id="team" ></span>
        </div>
    )
}