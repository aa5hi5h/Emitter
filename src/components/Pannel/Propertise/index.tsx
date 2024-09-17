"use client";
import React, { useEffect, useState } from "react";
import { Element, useEditor } from "@craftjs/core";
import { FlipHorizontal, FlipHorizontal2, FlipVertical, FlipVertical2, AlignHorizontalSpaceAround, AlignVerticalSpaceAround, Frame, X } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Container } from "../Components/Props/Container";

const PropertisePannel = ({ activePanel, setActivePanel }:any) => {

  const [isPanelOpen, setIsPanelOpen] = useState(false);


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


  useEffect(() => {
    if (selected?.settings) {
      setIsPanelOpen(true);
    } else {
      setIsPanelOpen(false);
    }
  }, [selected,setIsPanelOpen]);

  useEffect(() => {
    if (isPanelOpen) {
      setActivePanel('properties');
    } else {
      setActivePanel(null);
    }
  }, [isPanelOpen, setActivePanel]);

  const handleClose = () => {
    setIsPanelOpen(false);
  };

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
        <Button 
          onClick={handleClose}
          className=" md:hidden pr-4"
          variant="ghost"
          size="icon"
        >
          <X className="h-6 w-6" />
        </Button>
      </div>
      <ScrollArea className="h-full w-full  overflow-y-auto">
        <div className="max-h-[calc(100vh-96px)]"> {/* Subtracts header height */}
          { selected ? selected.settings && React.createElement(selected.settings) :  <div className="flex items-center justify-center h-full">
        <p className="text-gray-500">Please select an element to view its properties</p>
      </div>}
        </div>
      </ScrollArea>
    </div>
  );
};

export default PropertisePannel;
