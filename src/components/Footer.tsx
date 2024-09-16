import { Github, Twitter } from "lucide-react"
import Link from "next/link"


const Footer = () => {

    return (
        <div className="ml-[25rem] lg:ml-[75rem] mt-0 md:mt-[-5rem]">
            <div className=" flex items-center gap-x-2">
                <Link href="https://github.com/aa5hi5h/Emitter"><Github  className="cursor-pointer text-green-800 p-2 w-10 h-10 transition-all hover:bg-purple-200 rounded-full " /></Link>
                <Link href={'https://x.com/de6a5hi5h'}><Twitter className="cursor-pointer p-2 w-10 h-10  text-blue-700 hover:bg-purple-200 transition-all rounded-full " /></Link>
            </div>
        </div>
    )
}

export default Footer