"use client"
import { Button } from "@/components/ui/button"
import ViewOptions from "./ViewOptions"
import { ChevronDown, Redo, Undo } from "lucide-react"
import {Frame, Element, useEditor} from "@craftjs/core"
import { Container } from "../Components/Props/Container"
import UndoOptions from "./UndoOptions"
import { useState } from "react"
const EditorPannel = () => {


    const [viewMode,setViewMode] = useState<string>("monitor")

    const {actions,query} = useEditor()
    

    const viewScreen = () => {
        switch (viewMode) {
            case 'mobile':
              return 'max-w-sm mx-auto';
              case 'tablet':
                return "max-w-md mx-auto"
            case 'monitor':
              return 'max-w-full';
            default:
              return '';
          }
    }

    const handleViewMode = (view:string) => {
        console.log(`View changed to: ${view}`);
        setViewMode(view)
    }
    return (
        <div className="flex flex-col h-full w-full">
            <div className="flex flex-row items-center py-2  border-b border-zinc-300 justify-between ">
                <span className="ml-[1rem] ">
                    <Button className="gap-1 bg-slate-100  border-slate-300" variant={"outline"}>
                        <text>Main page</text>
                        <ChevronDown size={18} />
                    </Button>
                </span>
                <div className="flex">
                    <span className="bg-slate-200 border-slate-300 border flex gap-2 items-center max-w-max p-2 rounded-md ml-auto mr-[1rem]">
                    <UndoOptions />
                    </span>
                <span className="bg-slate-200 border-slate-300 border flex gap-2 items-center max-w-max p-2 rounded-md ml-auto mr-[2rem]">
                    <ViewOptions ViewMode={handleViewMode}  />
                </span>
                </div>
            </div>
            
            <div className={`h-full w-[99%] ${viewScreen()} bg-white border-[1px] border-slate-300 rounded-md m-1  p-1`}>
        <Frame>
          <Element is="div" canvas>
            <p>Start building</p>
          </Element>
        </Frame>
      </div>
        </div>
    )
}

export default EditorPannel