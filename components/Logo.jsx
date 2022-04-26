import Image from "next/image"
export default function Logo() {
    return (
        <div className="  hidden lg:flex items-center justify-center w-full h-[calc(25vh)] lg:px-auto px-5">
           <Image src="/images/Logo2.png" width={200} height={180}/>
        </div>
    )
}