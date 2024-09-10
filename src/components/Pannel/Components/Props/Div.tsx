"use client";
import React, { useState } from "react";
import { useNode } from "@craftjs/core";
import HoverableWrapper from "../wrappers/hoverWrapper";
import ClickableOverlay from "../../Utils/nearestElement";
import { useSelection } from "@/app/Context/selectionContext";

interface CustomDivProps {
  backgroundColor?: string;
  children?: React.ReactNode;
  opacity: number;
  margin: number;
  padding: number;
  borderRadius: number;
  border: number;
  borderColor: string;
}

interface CraftComponent extends React.FC<CustomDivProps> {
  craft: {
    props:{
      backgroundColor:string,
      opacity: number;
      margin: number;
      padding: number;
      borderRadius: number;
      border: number;
      borderColor: string;

    },
    related: {
      settings: React.FC;
    };
  };
}

export const CustomDiv:CraftComponent = ({ 
  backgroundColor,
   children,
   opacity,
   margin,
   padding,
   border,
   borderColor,
   borderRadius
   }) => {
  const {
    connectors: { connect, drag },
    id,
    actions: { setProp },
  } = useNode((node) => ({
    id: node.id,
    opacity: node.data.props.opacity,
    margin: node.data.props.margin,
    padding: node.data.props.padding,
    borderRadius: node.data.props.borderRadius,
    border: node.data.props.border,
    borderColor: node.data.props.borderColor,
  }));

  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const { setSelectedElement } = useSelection();

  const handleClick = () => {
    setSelectedElement({ id, type: "div" });
    setOverlayVisible(true);
  };

  return (
    <>
      {isOverlayVisible && <ClickableOverlay onClickOutside={() => setOverlayVisible(false)} />}
      <HoverableWrapper id={id} type="div">
        <div
          ref={(ref) => {
            if (ref) {
              connect(drag(ref));
            }
          }}
          style={{ 
            backgroundColor,
            opacity,
            margin,
            padding,
            borderRadius,
            border: `${border}px solid ${borderColor}`,  
          }}
          onClick={(e) => {
            e.stopPropagation();
            handleClick();
          }}
          className="selectable" 
        >
          {children}
        </div>
      </HoverableWrapper>
    </>
  );
};

export const CustomDivSettings: React.FC = () => {
  const { 
    backgroundColor,  
    setProp,
    opacity,
    margin,
    padding,
    borderRadius,
    border,
    borderColor,

  } = useNode((node) => ({
    backgroundColor: node.data.props.backgroundColor,
    padding: node.data.props.padding,
    margin: node.data.props.margin,
    opacity:node.data.props.opacity,
    border: node.data.props.border,
    borderColor: node.data.props.borderColor,
    borderRadius: node.data.props.borderRadius

  }));

  const handleOpacityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProp((props: any) => (props.opacity = parseFloat(event.target.value)));
  };

  const handleBackgroundColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProp((props: any) => (props.backgroundColor = event.target.value));
  };


  return (
    <div className="flex flex-col space-y-4">
      <div className="">
        <div className="border-b border-zinc-300 px-2 pt-2">
        <label className="text-sm text-zinc-900 font-semibold">Position</label>
        <span className="flex justify-between px-[8px] ml-[8px] mr-[4px] py-[12px]">
  <label className="text-sm font-medium text-slate-600" htmlFor="positionType">Type</label>
  <select
    id="positionType"
    className="border border-slate-400 bg-slate-100 font-semibold text-sm px-2 py-1 rounded-md focus:border-slate-800 outline-none"
    defaultValue="relative"
  >
    <option value="absolute">Absolute</option>
    <option value="relative">Relative</option>
    <option value="sticky">Sticky</option>
    <option value="fixed">Fixed</option>
  </select>
</span>
</div>
<div className="flex flex-col space-y-4">
  <div className="border-b border-zinc-300 px-2 pt-2">
  <label className="text-sm text-zinc-900 font-semibold">Styles</label>
  <span className="flex items-center justify-between px-[8px] ml-[8px] gap-2 mr-[4px] py-[12px]">
          <label className="text-sm font-medium text-slate-600" htmlFor="opacity">Opacity</label>
          <span className="bg-slate-200 border-slate-300 border flex gap-2 items-center max-w-max font-semibold p-1 text-sm rounded-md ml-auto">{Math.round(opacity * 100)}%</span>
          <input
            id="opacity"
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={opacity}
            onChange={handleOpacityChange}
            className="w-[40%] h-1 bg-blue-500 rounded-full appearance-none"
          />
        </span>

        <span className="flex items-center justify-between px-[8px] ml-[8px] mr-[4px] py-[12px]">
        <label className="text-sm font-medium text-slate-600" htmlFor="margin">Margin</label>
        <input
          id="margin"
          type="number"
          value={margin || 0}
          onChange={(e) => {
            const newValue = e.target.value;
            setProp((props: any) => (props.margin = parseInt(newValue)));
          }}
          className="border border-slate-400 w-[5rem] bg-slate-100 font-semibold text-sm px-2 py-1 rounded-md focus:border-slate-800 outline-none"
        />
      </span>

      {/* Padding */}
      <span className="flex items-center justify-between px-[8px] ml-[8px] mr-[4px] py-[12px]">
        <label className="text-sm font-medium text-slate-600" htmlFor="padding">Padding</label>
        <input
          id="padding"
          type="number"
          value={padding || 0}
          onChange={(e) => {
            const newValue = e.target.value;
            setProp((props: any) => (props.padding = parseInt(newValue)));
          }}
          className="border border-slate-400 w-[5rem] bg-slate-100 font-semibold text-sm px-2 py-1 rounded-md focus:border-slate-800 outline-none"
        />
      </span>

      {/* Border Width */}
      <span className="flex items-center justify-between px-[8px] ml-[8px] mr-[4px] py-[12px]">
        <label className="text-sm font-medium text-slate-600" htmlFor="border">Border</label>
        <input
          id="border"
          type="number"
          value={border || 0}
          onChange={(e) => {
            const newValue = e.target.value;
            setProp((props: any) => (props.border = parseInt(newValue)));
          }}
          className="border border-slate-400 w-[5rem] bg-slate-100 font-semibold text-sm px-2 py-1 rounded-md focus:border-slate-800 outline-none"
        />
      </span>

      {/* Border Radius */}
      <span className="flex items-center justify-between px-[8px] ml-[8px] mr-[4px] py-[12px]">
        <label className="text-sm font-medium text-slate-600" htmlFor="borderRadius">Border Radius</label>
        <input
          id="borderRadius"
          type="number"
          value={borderRadius || 0}
          onChange={(e) => {
            const newValue = e.target.value;
            setProp((props: any) => (props.borderRadius = parseInt(newValue)));
          }}
          className="border border-slate-400 w-[5rem] bg-slate-100 font-semibold text-sm px-2 py-1 rounded-md focus:border-slate-800 outline-none"
        />
      </span>

      <div className="relative">
      <span className="flex items-center justify-between px-[8px] ml-[8px] mr-[4px] py-[12px]">
        <label className="text-sm font-medium text-slate-600" htmlFor="borderColor">Border Color</label>
        <input
          id="borderColor"
          type="color"
          value={borderColor || "#000000"}
          onChange={(e) => setProp((props: any) => (props.borderColor = e.target.value))}
          className="border rounded-lg border-gray-300 ml-auto"
        />
      </span>
    </div>
  </div>
       </div>

       <div className="flex flex-col space-y-4">
  <div className="border-b border-zinc-300 px-2 pt-2">
  <label className="text-sm text-zinc-900 font-semibold">Propertise</label>
  <span className="flex items-center justify-between px-[8px] ml-[8px] gap-2 mr-[4px] py-[12px]">
            <label className="text-sm font-medium text-slate-600" htmlFor="backgroundColor">Background Color</label>
            <input
              id="backgroundColor"
              type="color"
              value={backgroundColor || "#ffffff"}
              onChange={handleBackgroundColorChange}
              className="border rounded-lg border-gray-300 ml-auto"
            />
          </span>

          </div>
          </div>
</div>
</div>
  );
};

CustomDiv.craft = {
  props: {
    backgroundColor: "#ffffff",
    margin: 0,
    padding: 0,
    borderRadius: 0,
    border: 0,
    borderColor: "#000000",
    opacity: 1

  },
  related: {
    settings: CustomDivSettings,
  },
};