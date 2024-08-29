"use client"
import { Button } from "@/components/ui/button"
import ViewOptions from "./ViewOptions"
import { ChevronDown, Redo, Undo } from "lucide-react"
import {Frame, Element, useEditor} from "@craftjs/core"
import { Container } from "../Components/Props/Container"
import UndoOptions from "./UndoOptions"
const EditorPannel = () => {

    const {actions,query} = useEditor()
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
                    <ViewOptions />
                </span>
                </div>
            </div>
            <Frame>
                <Element is="div"  canvas  className="h-full bg-white m-1 p-1">
                <p>Start building</p>
            </Element>
            </Frame>
        </div>
    )
}

export default EditorPannel