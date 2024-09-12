"use client"
import { Button } from "@/components/ui/button"
import ViewOptions from "./ViewOptions"
import { ChevronDown, Redo, Undo } from "lucide-react"
import {Frame, Element, useEditor} from "@craftjs/core"
import { Container } from "../Components/Props/Container"
import UndoOptions from "./UndoOptions"
import { useEffect, useState } from "react"
import { useHover } from "@/app/Context/hoverContext"
import { useSelection } from "@/app/Context/selectionContext"
import { useColorPicker } from "@/app/Context/ColorPickerContext"
import { ChromePicker } from "react-color"
import lz from "lzutf8";

const EditorPannel = () => {


    const [viewMode,setViewMode] = useState<string>("monitor")
    const { hoveredElement, setHoveredElement } = useHover();
    const { selectedElement, setSelectedElement } = useSelection();
    const { pickerVisible, ColorBorder, setPickerVisible, setColorBorder } = useColorPicker();

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


    
    const handleSaveState = () => {
      const jsonState = query.serialize();
      const compressedState = lz.encodeBase64(lz.compress(jsonState))
      console.log("Serialized Editor State:", compressedState);
    };
    

    const handleViewMode = (view:string) => {
        console.log(`View changed to: ${view}`);
        setViewMode(view)
    }

    const handleClick = (e: React.MouseEvent) => {
      e.stopPropagation(); 
      setSelectedElement({id:"EditorPannel", type:"Pannel"}); 
    };

     const handleColorChange = (color: any) => {
    setColorBorder(color.hex);
  };
    return (
        <div className="flex flex-col h-full w-full">
            <div className="flex flex-row items-center py-2  border-b border-zinc-300 justify-between ">
                <span className="ml-[1rem] flex gap-x-2 ">
                <Button 
                className="gap-1 bg-purple-400 hover:bg-purple-500 hover:text-white text-white " 
                variant={"outline"}
                onClick={handleSaveState}>
                        Save
                    </Button>
                    <Button className="gap-1 bg-slate-100  border-slate-300" variant={"outline"}>
                        Main page
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
            
            <div
        className={`h-full w-[99%] ${viewScreen()} bg-white rounded-md m-1 p-1 transition-all duration-150 ${
          selectedElement === null
            ? hoveredElement?.id === "EditorPannel"
              ? "border-blue-400 border-[2px]"
              : "border-[1px] border-slate-300"
            : selectedElement.id === "EditorPannel"
            ? "border-blue-400 border-[2px] border-solid"
            : "border-[1px] border-slate-300"
        }`}
        onMouseEnter={() => setHoveredElement({id:"EditorPannel",type:"Pannel"})}
        onMouseLeave={() => setHoveredElement({id:"", type:""})}
        onClick={handleClick}
      >
        <Frame>
          <Element is="div" canvas>
            
          </Element>
        </Frame>
      </div>
        </div>
    )
}

export default EditorPannel