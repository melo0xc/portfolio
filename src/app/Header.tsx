import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <Link href={"https://matheus-webp.vercel.app/"} target="_blank">
            <div className="flex justify-center">
                <Image src={"/M_black.png"} alt={"Melo's Logo"} width={64} height={64}/>
            </div>
        </Link>

    )
}