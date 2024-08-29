import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
import { Redo, Undo } from "lucide-react"
import { useEditor } from "@craftjs/core";


const UndoOptions = () => {

    const { actions, query } = useEditor();
    return (
        <TooltipProvider>
        <Tooltip>
            <TooltipTrigger asChild>
    <Undo  onClick={() => actions.history.undo()} className={`w-6 h-6 p-1 rounded-md hover:bg-slate-100 opacity-60 hover:opacity-100`} />
    </TooltipTrigger>
    <TooltipContent>Undo</TooltipContent>
    </Tooltip>
    <Tooltip>
        <TooltipTrigger asChild>
            <Redo  onClick={() => actions.history.redo()} className={`w-6 h-6 p-1 rounded-md hover:bg-slate-100 opacity-60 hover:opacity-100`} />
        </TooltipTrigger>
        <TooltipContent>Redo</TooltipContent>
    </Tooltip>
    </TooltipProvider>
    )
}

export default UndoOptions