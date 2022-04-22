import Image from "next/image"
export default function Logo() {
    return (
        <div className="hidden lg:flex items-center justify-center w-full h-[calc(25vh)] lg:px-auto px-5">
           <Image src="/images/magnusAll.png" width={900} height={120}/>
        </div>
    )
}