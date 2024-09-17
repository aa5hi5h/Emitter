"use client"
import { Button } from "@/components/ui/button"
import ViewOptions from "./ViewOptions"
import { ChevronDown, Redo, Undo } from "lucide-react"
import {Frame, Element, useEditor} from "@craftjs/core"
import UndoOptions from "./UndoOptions"
import { useCallback, useContext, useEffect, useState } from "react"
import { useHover } from "@/app/Context/hoverContext"
import { useSelection } from "@/app/Context/selectionContext"
import { useColorPicker } from "@/app/Context/ColorPickerContext"
import { ChromePicker } from "react-color"
import lz from "lzutf8";
import { Container } from "../Components/Props/Container"
import { Text } from "../Components/Props/Text"
import { api } from "../../../../convex/_generated/api"
import { Id } from "../../../../convex/_generated/dataModel";
import { useMutation } from "convex/react"
import { ProjectContext } from "@/app/Context/LoadState"
import MultiPageNavigation from "../Feature/PageNavigation/page"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useViewMode } from "@/app/Context/ViewMode"
import UnsavedChangesAlert from "../Utils/SaveAlert"
interface EditorPannelProp{
  buildID: Id<"projects">
  savedState?: string
  project: {
    _id: Id<"projects">
    _creationTime: number
    title: string
    userId: string
    savedState?: any
    createdAt: number
    updatedAt: number
  }
}

interface Pages {
  [key: string]: any;
}

const EditorPannel = ({buildID ,savedState,project}:EditorPannelProp) => {


    const { hoveredElement, setHoveredElement } = useHover();
    const { selectedElement, setSelectedElement } = useSelection();
    const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
    const [currentPage, setCurrentPage] = useState('main');
    const [pages, setPages] = useState<Pages>({
      main: savedState ? JSON.parse(lz.decompress(lz.decodeBase64(savedState))) : null,
  });

  const { viewMode } = useViewMode();

    const changePage = (pageLink: string) => {
      if (pageLink in pages) {
        setCurrentPage(pageLink);
        actions.deserialize(pages[pageLink]);
      } else {
        console.error(`Page ${pageLink} not found`);
      }
    };



    const { pickerVisible, ColorBorder, setPickerVisible, setColorBorder } = useColorPicker();

    const { isProjectOpening, setIsProjectOpening } = useContext(ProjectContext);

    const {actions,query} = useEditor()


    const updateProject = useMutation(api.project.updateProject);
    


    useEffect(() => {
      if (isProjectOpening && savedState) {
          try {
              console.log("Saved state:", savedState);
              const decompressedState = lz.decompress(lz.decodeBase64(savedState));
              console.log("Decompressed state:", decompressedState);
              
              let parsedState;
              try {
                  parsedState = JSON.parse(decompressedState);
              } catch (parseError) {
                  console.error("Error parsing decompressed state:", parseError);
                  const partialData = decompressedState.substring(0, decompressedState.lastIndexOf('}') + 1);
                  parsedState = JSON.parse(partialData);
              }
              console.log("Parsed state:", parsedState);
              
              console.log("Final state before deserialization:", parsedState);
              actions.deserialize(parsedState);
              console.log("Deserialization complete");
              setIsProjectOpening(false);

          } catch (error) {
              console.error("Error in deserialization process:", error);
          }
      }
  }, [isProjectOpening, savedState, actions, setIsProjectOpening]);


  useEffect(() => {
    if (savedState) {
        try {
            const decompressedState = lz.decompress(lz.decodeBase64(savedState));
            
            let parsedState;
            try {
                parsedState = JSON.parse(decompressedState);
            } catch (parseError) {
                console.error("Error parsing decompressed state:", parseError);
                const partialData = decompressedState.substring(0, decompressedState.lastIndexOf('}') + 1);
                parsedState = JSON.parse(partialData);
            }
            actions.deserialize(parsedState);
            console.log("SAVED_STATE", parsedState)
            console.log("Deserialization complete");

        } catch (error) {
            console.error("Error in deserialization process:", error);
        }
    }
}, []);

const handleGetTheme = () => {
  const jsonState = query.serialize();
        const compressedState = lz.encodeBase64(lz.compress(jsonState));
        console.log("STATE_TO_SAVE",compressedState)

}




 
    const handleSaveState = useCallback(async () => {
      if (!buildID) {
        console.error("No buildId found");
        return;
      }
      try {
        const jsonState = query.serialize();
        const compressedState = lz.encodeBase64(lz.compress(jsonState));
        console.log(compressedState)
      
        const result = await updateProject({
          projectId: buildID as Id<"projects">,
          title: project.title, 
          savedState: compressedState
        });
  
        console.log("State saved successfully", result);

      } catch (error) {
        console.error("Error saving state:", error);
      }
    }, [query, updateProject, buildID]);


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
                className="gap-1 bg-[#c74db9] hover:bg-[#c74db9]/80 hover:text-white text-white " 
                variant={"outline"}
                onClick={handleSaveState}
                >
                        Save
                    </Button>
                </span>
                <div className="flex">
                    <span className="bg-slate-200 border-slate-300 border flex gap-2 items-center max-w-max p-2 rounded-md ml-auto mr-[1rem]">
                    <UndoOptions />
                    </span>
                <span className="bg-slate-200 border-slate-300 border flex gap-2 items-center max-w-max p-2 rounded-md ml-auto mr-[2rem]">
                    <ViewOptions   />
                </span>
                </div>
            </div>
            
            <div
        className={`h-full w-[99%] bg-white rounded-md m-1 p-1 transition-all duration-150 ${
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
        <ScrollArea className="h-full w-full  overflow-y-auto">
        <div className="max-h-[calc(100vh-96px)]">
        <Frame>
        <Element is={Container} canvas>
        <p>Drag and drop here</p>
          </Element>
        </Frame>
        </div>
        </ScrollArea>
      </div>
      <UnsavedChangesAlert 
        isOpen={hasUnsavedChanges} 
        onSave={handleSaveState}
        onClose={() => setHasUnsavedChanges(false)}
      />
        </div>
    )
}
export default EditorPannel