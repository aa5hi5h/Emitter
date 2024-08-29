"use client"
import { DraftingCompass, Layers } from "lucide-react"
import { useState } from "react"
import ComponentsProps from "./Props/index"
import LayersProp from "./LayersProp"

const ComponentsPannel = () => {

    const [selected,setSelected] = useState<string>("components")

    console.log(selected)

    return (
        <div className="flex flex-col h-full w-full">
        <div className="flex flex-row items-center py-2  border-b border-zinc-300 justify-between ">
            <div className="bg-slate-200 border-slate-300 mx-auto border  flex gap-1 items-center max-w-max rounded-md ml-auto">
                <span onClick={() => setSelected("components")} className={`hover:bg-slate-300 cursor-pointer gap-1 flex items-center  p-[6px] m-[2px] rounded-md  ${
              selected === "components" ? "bg-white hover:bg-white" : ""
            }` }><h2 className={`font-medium text-slate-500 hover:text-slate-600 ${selected === "components" ? "text-zinc-800 hover:text-zinc-800" : "" }`}>Components</h2></span>
                <span onClick={() => setSelected("layers")} className={`p-[6px] flex items-start gap-1 cursor-pointer hover:bg-slate-300 m-[2px] rounded-md ${ selected === "layers" ? "bg-white hover:bg-white" : ""}`}>
                    <h2 className={`font-medium text-slate-500 hover:text-slate-600 ${selected === "layers" ? "text-zinc-800 hover:text-zinc-800" : "" }`}>Layers</h2></span>
            </div>
        </div>
        <div className="h-full p-2 bg-slate-100">
            { selected === "components" ? <ComponentsProps /> : <LayersProp />}
        </div>
    </div>
    )
}

export default ComponentsPannel