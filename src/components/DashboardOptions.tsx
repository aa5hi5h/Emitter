"use client"
import { Blocks, Dock, LayoutDashboard, LayoutTemplate, Loader, Pickaxe, Plus, Tickets, Wand, WandSparkles } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

import {useConvexAuth, useMutation} from "convex/react"
import {api} from "../../convex/_generated/api"
import { useRouter } from "next/navigation"
import lz from "lzutf8"
const DashboardOptions = () => {

  const createProject = useMutation(api.project.createProject);

  const { isAuthenticated } = useConvexAuth();

    const [active,setActive] = useState("")
    const [projectName, setProjectName] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const router = useRouter()

    const handleActive = (option:string) => {
        setActive(option)
    }

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      if(!isAuthenticated){
        console.log("User is not authenticated")
        return
      }
      setIsLoading(true);
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
    

          const stateString = JSON.stringify(initialState);
          const compressedState = lz.encodeBase64(lz.compress(stateString));

          const projectId = await createProject({ 
              title: projectName,
              savedState: compressedState
          });
          router.push(`/build/${projectId}`);
      } catch (error) {
          console.error("Failed to create project:", error);
     } finally {
          setIsLoading(false);
      }
  }


  const handleTemplateClick = () => {
     handleActive("Template")

     router.push("/template")
  }


  const handleDashBoardClick = () => {
     handleActive("Dashboard")

     router.push("/dashboard")

  }
    return (
        <div className="p-2 items-center mb-[-2] px-6 w-full">
           <div className="gap-x-1 flex flex-col space-y-2.5 font-medium cursor-pointer">
           <div
          onClick={handleDashBoardClick}
          className={`mt-2 p-3 rounded-xl ${
            active === "Dashboard" ? "bg-purple-200 hover:bg-purple-200" : "hover:bg-purple-100"
          }`}
        >
                <span className="flex items-center gap-x-2">
                    <Blocks size={28} />
                    <h2 className="text-lg font-medium">Dashboard</h2>
                    </span>
                </div>
                <div
          onClick={handleTemplateClick}
          className={`p-3 rounded-xl ${
            active === "Template" ? "bg-purple-200 hover:bg-purple-200" : "hover:bg-purple-100"
          }`}
        >
                <span className="flex gap-x-2">
                    <WandSparkles size={28} />
                    <h2 className="text-lg font-medium">Template</h2>
                </span>
            </div>
            <div
          onClick={() => handleActive("New")}
          className={`p-3 rounded-xl ${
            active === "New" ? "bg-purple-200 hover:bg-purple-200" : "hover:bg-purple-100"
          }`}
        >
          <Dialog>
            <DialogTrigger className="flex gap-x-2">
                    <Plus size={28} color="#5C3B58" />
                    <h2 className="text-lg font-medium">New</h2>
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
                disabled={isLoading}
                autoFocus
                minLength={3}
                placeholder="Project name"
                 />
                 <div>
                  <Button type="submit" className="bg-[#5C3B58] hover:bg-[#5C3B58]/80" disabled={isLoading}>
                    Create
                    {
                      isLoading && (
                        <Loader size={18} className="animate-spin" />
                      )
                    }
                  </Button>
                 </div>
              </form>
            </DialogContent>
        </Dialog>
                </div>
            </div> 
        </div>
    )
}

export default DashboardOptions