import Image from "next/image"
export default function Logo() {
    return (
        <div className="flex items-center justify-center w-full h-[calc(25vh)]">
           <Image src="/images/magnusAll.png" width={900} height={120}/>
        </div>
    )
}