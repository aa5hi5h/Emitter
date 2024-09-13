"use client"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
import { Maximize, Monitor, Smartphone, Tablet, TabletSmartphone } from "lucide-react"
import { useState } from "react"
  
interface ViewOptionsProp{
    ViewMode: (view:string) => void
}

const ViewOptions : React.FC<ViewOptionsProp> = ({ViewMode}) => {
    
    const [selectedView,setSelectedView] = useState<string>()

    const handleClick = (view:string) => {
        setSelectedView(view)
        ViewMode(view)
    }
    return (
        <TooltipProvider>
        <Tooltip>
            <TooltipTrigger asChild>
    <Monitor onClick={() => handleClick("monitor")}  className={`w-6 h-6 p-1 rounded-md hover:bg-slate-400 opacity-60 hover:opacity-100`} />
    </TooltipTrigger>
    <TooltipContent>Dekstop</TooltipContent>
    </Tooltip>
    <Tooltip>
        <TooltipTrigger asChild>
            <Tablet onClick={() => handleClick("tablet")} className={`w-6 h-6 p-1 rounded-md hover:bg-slate-400 opacity-60 hover:opacity-100`} />
        </TooltipTrigger>
        <TooltipContent>Tablet</TooltipContent>
    </Tooltip>
    <Tooltip>
        <TooltipTrigger>
    <Smartphone onClick={() => handleClick("mobile")} className={`w-6 h-6 p-1 rounded-md hover:bg-slate-400 opacity-60 hover:opacity-100 `} />
    </TooltipTrigger>
    <TooltipContent>Mobile</TooltipContent>
    </Tooltip>

    <hr className="border border-slate-400 h-6" />
    <Tooltip>
        <TooltipTrigger>
    <Maximize onClick={() => handleClick("maximize")}  className={`w-6 h-6 p-1 rounded-md hover:bg-slate-400 opacity-60 hover:opacity-100`} />
    </TooltipTrigger>
    <TooltipContent>Full Screen</TooltipContent>
    </Tooltip>
 
    </TooltipProvider>
    )
}

export default ViewOptions