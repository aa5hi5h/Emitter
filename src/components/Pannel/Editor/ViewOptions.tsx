"use client"
import { useViewMode, ViewMode } from "@/app/Context/ViewMode"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
import { Maximize, Monitor, Smartphone, Tablet, TabletSmartphone } from "lucide-react"
import { useState } from "react"
  


const ViewOptions = () => {


    return (
        <TooltipProvider>
        <Tooltip>
            <TooltipTrigger asChild>
    <Monitor className={`w-6 h-6 p-1 rounded-md hover:bg-slate-400 opacity-60 hover:opacity-100`} />
    </TooltipTrigger>
    <TooltipContent>Dekstop</TooltipContent>
    </Tooltip> 
    </TooltipProvider>
    )
}

export default ViewOptions