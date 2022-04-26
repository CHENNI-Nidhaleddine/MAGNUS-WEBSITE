
import React from "react"
import {useRef} from "react"
// import emailjs from "emailjs-com"



export default function Contact(props){
  const [errorH, setErrorH] = React.useState(false);
  const [succesH, setSuccesH] = React.useState(false);
  const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm("service_3bdfh7a", "template_gjre05m", form.current, "eLICC76fYWlC8uxbq").then((result) => {
//         setSuccesH(true)
//         setTimeout(()=> setSuccesH (false),6000);
//         setTimeout(()=> form.current.reset(),1000);
//         console.log(process.env.NEXT_PUBLIC_SERVICE_ID)
//     },
//      (error) => {console.log(process.env.NEXT_PUBLIC_SERVICE_ID); setErrorH(true);setTimeout(()=> setErrorH (false),5000);});
      
//     };

    return (
        <div  data-aos="zoom-in"  className="flex flex-col items-center justify-evenly w-full lg:h-[calc(70vh)] h-[calc(90vh)] lg:px-24 lg:py-auto py-10 ">
                   <div className="flex flex-col items-center justify-center mb-4 "><h1 className="z-40 text-3xl mb-5"><span className="text-[#534b49]">CONTACTER </span>MAGNUS</h1>
                   <p className="px-6 lg:px-auto text-lg flex flex-col  items-center justify-center z-40 font-normal  text-justify  ">
               <h1 className="text-lg flex flex-col  items-center justify-center text-center">Afin de vous servir, nous vous demandons de soumettre les informations demandées.</h1>
               <h1 className="hidden lg:block">Merci de votre intérêt pour Magnus!</h1>
               </p></div>
           <div  className="flex  flex-col items-center justify-center lg:w-1/2 w-full lg:px-auto px-5">
            
               <form className="flex flex-col  w-full"  ref={form}>
                   <input required type="text" name="name" placeholder="Name" className="bg-[#f6f6f6] outline-none border-2 border-[#000] focus:border-[#2292d1] mb-2 p-3 rounded-2xl"/>
                   <div className="lg:flex w-full">
                        <input required type="email" name="email"  placeholder="Email" className="lg:w-1/2 w-full bg-[#f6f6f6] outline-none border-2 border-[#000] focus:border-[#2292d1] mb-2 p-3 rounded-2xl lg:mr-1"/>
                        <input required type="text"  name="subject" placeholder="Subject" className="lg:w-1/2 w-full bg-[#f6f6f6] outline-none border-2 border-[#000] focus:border-[#2292d1] mb-2 p-3 rounded-2xl lg:ml-1"/>
                   </div>
                   <textarea required type="text" name="message" placeholder="Message" className="bg-[#f6f6f6] outline-none border-2 border-[#000] focus:border-[#2292d1] mb-2 p-3 rounded-2xl"></textarea>
            
                   <input type="submit" value="Send" className="font-bold  bg-[#2292d1] rounded-2xl p-2 mt-4 w-fit px-6 m-auto cursor-pointer text-[#f6f6f6]"/>
                  
                   <div className="w-full m-auto z-60 fixed bottom-[calc(5vh)] ">
                       
                        <div className={errorH? "w-fit m-auto animate-pulse bg-red-100 border-t-4 border-red-400 text-red-700 px-4 py-3 rounded relative" : "hidden"} role="alert">
                            <strong className="font-bold">Holy smokes!</strong>
                            <span className="block sm:inline">Something seriously bad happened.</span>
                            <span className="absolute top-0 bottom-0 right-0 px-4 py-3"></span>
                        </div>
                     
                        <div className={succesH? "w-fit m-auto animate-pulse bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" :"hidden"} role="alert">
                            <div className="flex">
                                <div>
                                    <strong className="font-bold">Thanks! </strong>
                                    <span className="block sm:inline">I just received your message, and i will respond sooner!!</span>
                                    <span className="absolute top-0 bottom-0 right-0 left-0 px-4 py-3"></span>
                                </div>
                            </div>
                        </div>
                    </div>
               </form>
           </div>
        </div>
        
    )

}

