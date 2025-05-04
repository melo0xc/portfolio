import Image from "next/image";
import ContentButton from "@/app/components/ContentButton";
import Link from "next/link";

const bgColors: Record<string, string> = {
    "gray": "bg-[#D3D3D3]",
    "green": "bg-[#3A9D5A]",
    "blue": "bg-[#7FB8E6]"
}

type BoxProps = {
    value: string;
    buttonValue: string;
    link: string;
    color: string;
    imgSrc: string;
    width?: string;
    description?: string;
    alt: string;
}

export default function ContentBox({value, buttonValue, alt, width, description, imgSrc, link, color}: BoxProps) {
    return (
        <Link href={link} target="_blank" className={`w-full ${width || "max-w-64"}`}>
            <div
                className={`w-full h-48 border-2 border-gray-400 hover:border-black hover:shadow-sm flex flex-col md:flex-row rounded-lg p-4 md:p-6 gap-4 ${
                    bgColors[color]
                }`}>
                <div className="flex flex-col flex-1 min-w-[40%]">
                    <div className="flex justify-start items-center">
                        <Image
                            src={imgSrc}
                            width={32}
                            height={32}
                            alt={alt}
                            className="w-8 h-8"
                        />
                    </div>
                    <span className="font-bold text-lg md:text-xl">
                        {value}
                    </span>
                    <div className="mt-auto">
                        <ContentButton value={buttonValue}/>
                    </div>
                </div>
                {description &&
                    <div className="font-bold text-sm md:text-base p-2 md:p-4 lg:pl-8 flex-1">
                        {description}
                    </div>
                }
            </div>
        </Link>
    )
}