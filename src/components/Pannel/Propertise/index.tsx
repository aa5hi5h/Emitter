"use client";
import React from "react";
import { useEditor } from "@craftjs/core";
import { FlipHorizontal, FlipHorizontal2, FlipVertical, FlipVertical2, AlignHorizontalSpaceAround, AlignVerticalSpaceAround } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const PropertisePannel = () => {
  const { selected } = useEditor((state) => {
    const selectedNodeIds = Array.from(state.events.selected);
    let selected;

    if (selectedNodeIds.length > 0) {
      const currentNodeId = selectedNodeIds[0];
      selected = {
        id: currentNodeId,
        name: state.nodes[currentNodeId].data.name,
        settings: state.nodes[currentNodeId].related && state.nodes[currentNodeId].related.settings,
      };
    }

    return {
      selected,
    };
  });

  if (!selected) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-gray-500">Please select an element to view its properties</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex flex-row items-center py-2 border-b border-zinc-300 justify-between">
        <span className="flex space-x-3 mx-auto p-2 mb-[2px]">
          <FlipHorizontal opacity={0.2} />
          <FlipHorizontal2 opacity={0.2} />
          <AlignVerticalSpaceAround opacity={0.2} />
          <FlipVertical opacity={0.2} />
          <FlipVertical2 opacity={0.2} />
          <AlignHorizontalSpaceAround opacity={0.2} />
        </span>
      </div>
      <ScrollArea className="h-full w-full  overflow-y-auto">
        <div className="max-h-[calc(100vh-96px)]"> {/* Subtracts header height */}
          {selected.settings && React.createElement(selected.settings)}
        </div>
      </ScrollArea>
    </div>
  );
};

export default PropertisePannel;
