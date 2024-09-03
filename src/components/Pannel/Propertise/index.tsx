"use client";

import React from "react";
import { useEditor } from "@craftjs/core";
import { Text } from "../Components/Props/Text";
import ButtonProperties from "./Props/Button";
import DivProperties from "./Props/div";
import { AlignHorizontalSpaceAround, AlignVerticalSpaceAround, FlipHorizontal, FlipHorizontal2, FlipVertical, FlipVertical2 } from "lucide-react";

const PropertisePannel = () => {
  const { selected } = useEditor((state) => {
    // Convert the Set to an array for compatibility with ES6
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
    <div className="property-panel">
      <h2>Properties Panel</h2>
      <div className="bg-gray-100 mt-4 px-4 py-4 rounded shadow-md">
      {/* Header */}
      <div className="mb-4">
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold">Selected</p>
          <span className="inline-flex items-center px-2 py-0.5 rounded text-sm font-medium bg-blue-500 text-white">
            {selected.name}
          </span>
        </div>
      </div>

      {/* Render selected node settings if available */}
      {selected.settings && React.createElement(selected.settings)}

      {/* Delete Button */}
      <button
        className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded mt-4"
        onClick={() => {
          // Handle the delete action
        }}
      >
        Delete
      </button>
    </div>
    </div>
  </div>
  );
};

export default PropertisePannel;