import Image from "next/image";

export default function ButtonTheme() {
    return(
        <div className="absolute cursor-pointer float-right right-[220px] hover:bg-gray-300 hover:rounded-full">
                    <Image src="/image/theme.png" alt="hufhuifhuf" width={33} height={33}  />

        </div>
    )
    
}