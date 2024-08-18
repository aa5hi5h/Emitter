import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
import { Maximize, Monitor, Smartphone, Tablet, TabletSmartphone } from "lucide-react"
  

const ViewOptions = () => {
    return (
        <TooltipProvider>
        <Tooltip>
            <TooltipTrigger asChild>
    <Monitor  className={`w-6 h-6 p-1 rounded-md hover:bg-slate-100 opacity-60 hover:opacity-100`} />
    </TooltipTrigger>
    <TooltipContent>Dekstop</TooltipContent>
    </Tooltip>
    <Tooltip>
        <TooltipTrigger asChild>
            <Tablet className={`w-6 h-6 p-1 rounded-md hover:bg-slate-100 opacity-60 hover:opacity-100`} />
        </TooltipTrigger>
        <TooltipContent>Tablet</TooltipContent>
    </Tooltip>
    <Tooltip>
        <TooltipTrigger>
    <Smartphone  className={`w-6 h-6 p-1 rounded-md hover:bg-slate-100 opacity-60 hover:opacity-100 `} />
    </TooltipTrigger>
    <TooltipContent>Mobile</TooltipContent>
    </Tooltip>

    <hr className="border border-slate-400 h-6" />
    <Tooltip>
        <TooltipTrigger>
    <Maximize  className={`w-6 h-6 p-1 rounded-md hover:bg-slate-100 opacity-60 hover:opacity-100`} />
    </TooltipTrigger>
    <TooltipContent>Full Screen</TooltipContent>
    </Tooltip>
 
    </TooltipProvider>
    )
}

export default ViewOptions