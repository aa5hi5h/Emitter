"use client"
import { Atom, ChevronRight, RadioTower, Rss, Satellite, Save, Search, Sparkles } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"
import { useAuthActions } from "@convex-dev/auth/react"
import { useConvexAuth, useMutation } from "convex/react"
import UserButton from "@/auth/components/user-button"
import { usePathname } from "next/navigation"
import { Input } from "./ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react"
import {api} from "../../convex/_generated/api"
import { useRouter } from "next/navigation"

const Navbar = () => {

  const createProject = useMutation(api.project.createProject);

  const [projectName, setProjectName] = useState("")
  const [isCreationLoading, setIsCreationLoading] = useState(false)


  const router  = useRouter()

    const { isAuthenticated, isLoading } = useConvexAuth();
    const pathname = usePathname()


    const DashboardSite = pathname.includes("dashboard")
    const BuildingSite = pathname.includes("build")

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsCreationLoading(true);
      try {
          const initialState = {
              nodes: {
                  ROOT: {
                      type: {
                          resolvedName: 'Root'
                      },
                      isCanvas: true,
                      props: {},
                      displayName: 'Root',
                      custom: {},
                      hidden: false,
                      nodes: [],
                      linkedNodes: {}
                  }
              },
              root: {
                  type: 'ROOT',
                  isCanvas: true
              }
          };

          const projectId = await createProject({ 
              title: projectName, 
              savedState: JSON.stringify(initialState)
          });
          router.push(`/build/${projectId}`);
      } catch (error) {
          console.error("Failed to create project:", error);
     } finally {
          setIsCreationLoading(false);
      }
  }

    return(
        <div className="p-3 justify-between items-center flex mb-[-2] px-6 w-full">
            <Link href={"/"}>
            <ul className=" text-2xl flex gap-x-1 items-center font-semibold cursor-pointer">
                <Satellite size={46} />
                Emitter
                </ul>
                </Link>
                <ul className="flex gap-x-4 items-center">
        {!isAuthenticated ? (
          <>
            <Link href={"/sign-in"}>
              <Button className="">Sign In</Button>
            </Link>
            <Link className="hidden md:flex" href={"/sign-up"}>
              <Button
                variant={"outline"}
                className="border-purple-300 gap-x-1 hover:opacity-90 flex items-center bg-purple-200"
              >
                Get Started
                <ChevronRight size={18} />
              </Button>
            </Link>
          </>
        ) : (
            <>
             {DashboardSite && (

              <Dialog>
                <DialogTrigger>
                <Button className="bg-[#5C3B58] items-center hover:bg-[#5C3B58]/75 gap-x-1">
                  <Sparkles size={18} />
                  New Project
                </Button>
                </DialogTrigger>
                <DialogContent>
              <DialogHeader>
                <DialogTitle>Add a project</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4"> 
                <Input 
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                required
                disabled={isCreationLoading}
                autoFocus
                minLength={3}
                placeholder="Project name"
                 />
                 <div>
                  <Button type="submit" className="bg-[#5C3B58] hover:bg-[#5C3B58]/80" disabled={isCreationLoading}>
                    Create
                  </Button>
                 </div>
              </form>
            </DialogContent>
              </Dialog>
            )}
            {BuildingSite && (
              <div className="flex gap-x-2">
              <Button className=" bg-[#5C3B58] flex items-center hover:bg-[#5C3B58]/75 gap-x-1">
              <RadioTower size={18} />
              Go Live
            </Button>
              </div>
            )}

            <UserButton />
          </>
        )}
      </ul>
        </div>
    )
}

export default Navbar