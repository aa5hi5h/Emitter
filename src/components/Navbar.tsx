import { Atom, ChevronRight, Satellite } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"

const Navbar = () => {
    return(
        <div className="p-3 justify-between items-center flex mb-[-2] px-6 w-full">
            <Link href={"/"}>
            <ul className=" text-2xl flex gap-x-1 items-center font-semibold cursor-pointer">
                <Satellite size={46} />
                Emitter
                </ul>
                </Link>
            <ul className="flex gap-x-4 items-center">
              <Link href={'/sign-in'}><Button className="">SignIn</Button></Link>
              <Link className="hidden md:flex" href={'/sign-up'}>
              <Button variant={"outline"} className="border-purple-300 gap-x-1 hover:opacity-90 flex items-center bg-purple-200">
                Get Started
                <ChevronRight size={18} />
                </Button>
                </Link>
            </ul>
        </div>
    )
}

export default Navbar