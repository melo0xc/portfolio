import Header from "@/app/Header";
import Body from "@/app/Body";

export default function Home() {
    return (
        <div className="flex flex-col w-full gap-y-8 md:gap-y-16 lg:gap-y-32 p-4">
            <Header/>
            <Body/>
        </div>
    );
}
