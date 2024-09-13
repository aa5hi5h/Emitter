import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import workSpacePng from "../../public/workSpace.png"
import Image from "next/image";

export default function Home() {
    
    return (
        <div className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-8">
            <div className="flex flex-col items-center justify-center py-5 md:py-10 h-full">
            <div className="flex flex-col items-center mt-8 max-w-3xl  md:w-full">
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter">Build. Ship.</h1>
                <h1 className="text-5xl md:text-7xl  font-extrabold tracking-tighter">Deploy.</h1>
                <p className="text-base md:text-lg text-muted-foreground  py-2 px-[70px] sm:px-[150px] md:px-[200px] mt-2 md:mt-6 text-center">
                Emitter enables you to design beautiful responsive sites with ease. 
                </p>
                <div className="flex relative items-center justify-center mt-4 md:mt-12 w-full">
                                <span className="flex items-center justify-center w-max rounded-full border-0  md:border border-foreground/30 bg-white/20 backdrop-blur-lg px-2 py-1 md:py-2 gap-2 md:gap-8 shadow-3xl shadow-background/40 cursor-pointer select-none">
                                    <p className="text-foreground hidden md:flex text-sm text-center md:text-base font-medium pl-4 pr-4 lg:pr-0">
                                        ✨ {"  "} Start building your dream website now!
                                    </p>
                                    <Button size="sm" className="rounded-full cursor-pointer bg-[#5C3B58] hover:bg-[#5C3B58]/80 flex border border-foreground/20">
                                        Try Demo
                                        <ArrowRight className="w-4 h-4 ml-1" />
                                    </Button>
                                </span>
                            </div>
                    </div> 
                    <div className="relative flex items-center px-[1.5rem] md:px-[0] py-10 md:py-20 w-full">
                            <div className="absolute top-1/2 left-1/2 -z-10 gradient w-3/4 -translate-x-1/2 h-3/4 -translate-y-1/2 inset-0 blur-[10rem]"></div>
                            <div className="-m-2 rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl">
                            <Image
                                    src={workSpacePng}
                                    alt="banner image"
                                    width={1200}
                                    height={1200}
                                    quality={100}
                                    className="rounded-md lg:rounded-xl bg-foreground/10 shadow-2xl ring-1 ring-border"
                                />
                            <BorderBeam size={250} duration={12} delay={9} />
                            </div>
                        </div>
                    </div>
            </div>
    )
}