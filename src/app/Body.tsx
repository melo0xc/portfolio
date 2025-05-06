import Image from "next/image";
import ContactButton from "@/app/components/ContactButton";
import ContentBox from "@/app/components/ContentBox";

export default function Body() {
    return (
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16 xl:gap-24 px-4 w-full max-w-7xl mx-auto">
            <div className="flex flex-col gap-y-4 items-center w-full max-w-md">
                <div className="relative rounded-full overflow-hidden">
                <Image
                    src="/profile.png"
                    alt="Melo's profile picture"
                    width={256}
                    height={387}
                    quality={100}
                    className="rounded-full"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
                </div>
                <div className="flex flex-col items-center text-center">
                    <span className="text-2xl md:text-3xl font-semibold">
                        Matheus Melo
                    </span>
                    <span className="text-lg md:text-xl opacity-50">
                        Desenvolvedor de Software
                    </span>
                </div>
                <div className="w-full max-w-md text-sm md:text-base leading-relaxed flex flex-col gap-y-4 text-center">
                <span>
                   Utilizo Java e React no desenvolvimento de aplicações web completas,
                    focando em criar soluções que impactam positivamente a vida das pessoas.
                 </span>
                    <span >
                        Atualmente estou focado em aprender mais sobre cloud computing, especialmente com AWS.
                        Fora do código, sou um entusiasta do xadrez.
                    </span>

                </div>
                <div className="w-full max-w-xs md:max-w-sm">
                    <ContactButton />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-6 w-full max-w-xl">
                <ContentBox value="Meus repositórios" alt={"Github Icon"} buttonValue={"Ver"} link={"https://github.com/melo0xc?tab=repositories"} imgSrc={"/github_icon.svg"} color={"gray"}/>
                <ContentBox value="Linkedin" alt={"Linkedin Icon"} buttonValue={"Conectar"} link={"https://www.linkedin.com/in/matheus-ribeiro-melo/"} imgSrc={"/linkedin_icon.svg"} color={"blue"}/>
                <ContentBox value="Pomonoise" alt={"Pomonoise logo"} buttonValue={"Acessar"} link={"https://pomonoise.site"} width={"w-96"} imgSrc={"/pomonoise_logo.png"} description={"Aumente a sua produtividade e foco com a técnica Pomodoro"} color={"green"}/>
            </div>
        </div>
    )
}