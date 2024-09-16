"use client";
import React from "react";
import { useNode } from "@craftjs/core";
import HoverableWrapper from "../../../wrappers/hoverWrapper";
import { Image } from "lucide-react";

interface TemplateImageProps {
  src?: string;
  alt?: string;
  width?: string | number;
  height?: string | number;
  borderRadius?: number;
  opacity?: number;
  border?: number;
  borderColor?: string;
  size?: number
}

interface CraftComponent extends React.FC<TemplateImageProps> {
  craft: {
    props: {
      alt?: string;
      width?: string | number;
      height?: string | number;
      borderRadius?: number;
      opacity?: number;
      border?: number;
      borderColor?: string;
    };
    related: {
      settings: React.FC;
    };
  };
}

export const TemplateImage: CraftComponent = ({
  src,
  alt = "image",
  width = "100%",
  height = "auto",
  borderRadius = 0,
  opacity = 1,
  border = 0,
  borderColor = "#000000",
  size
}) => {
  const {
    connectors: { connect, drag },
    id,
  } = useNode((node) => ({
    id: node.id,
  }));

  return (
    <HoverableWrapper id={id} type="image">
      <div
        ref={(ref) => {
          if (ref) {
            connect(drag(ref));
          }
        }}
        style={{ display: "inline-block" }}
      >{
        src ? <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        style={{
          borderRadius: `${borderRadius}px`,
          opacity,
          border: `${border}px solid ${borderColor}`,
        }}
      /> : <Image size={size} />
      }
      </div>
    </HoverableWrapper>
  );
};

export const CustomImageSettings: React.FC = () => {
  const {
    actions: { setProp },
    src,
    alt,
    width,
    height,
    borderRadius,
    opacity,
    border,
    borderColor,
  } = useNode((node) => ({
    src: node.data.props.src,
    alt: node.data.props.alt,
    width: node.data.props.width,
    height: node.data.props.height,
    borderRadius: node.data.props.borderRadius,
    opacity: node.data.props.opacity,
    border: node.data.props.border,
    borderColor: node.data.props.borderColor,
  }));

  return (
    <div className="flex flex-col space-y-4">
      <div className="border-b border-zinc-300 px-2 pt-2">
        <label className="text-sm text-zinc-900 font-semibold">Image Properties</label>
        <span className="flex items-center justify-between px-[8px] ml-[8px] mr-[4px] py-[12px]">
          <label className="text-sm font-medium text-slate-600" htmlFor="src">Source</label>
          <input
            id="src"
            type="text"
            value={src}
            onChange={(e) => setProp((props: any) => (props.src = e.target.value))}
            className="border border-slate-400 w-[60%] bg-slate-100 font-semibold text-sm px-2 py-1 rounded-md focus:border-slate-800 outline-none"
          />
        </span>
        <span className="flex items-center justify-between px-[8px] ml-[8px] mr-[4px] py-[12px]">
          <label className="text-sm font-medium text-slate-600" htmlFor="alt">Alt Text</label>
          <input
            id="alt"
            type="text"
            value={alt}
            onChange={(e) => setProp((props: any) => (props.alt = e.target.value))}
            className="border border-slate-400 w-[60%] bg-slate-100 font-semibold text-sm px-2 py-1 rounded-md focus:border-slate-800 outline-none"
          />
        </span>
        <span className="flex items-center justify-between px-[8px] ml-[8px] mr-[4px] py-[12px]">
          <label className="text-sm font-medium text-slate-600" htmlFor="width">Width</label>
          <input
            id="width"
            type="text"
            value={width}
            onChange={(e) => setProp((props: any) => (props.width = e.target.value))}
            className="border border-slate-400 w-[5rem] bg-slate-100 font-semibold text-sm px-2 py-1 rounded-md focus:border-slate-800 outline-none"
          />
        </span>
        <span className="flex items-center justify-between px-[8px] ml-[8px] mr-[4px] py-[12px]">
          <label className="text-sm font-medium text-slate-600" htmlFor="height">Height</label>
          <input
            id="height"
            type="text"
            value={height}
            onChange={(e) => setProp((props: any) => (props.height = e.target.value))}
            className="border border-slate-400 w-[5rem] bg-slate-100 font-semibold text-sm px-2 py-1 rounded-md focus:border-slate-800 outline-none"
          />
        </span>
      </div>
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
            onChange={(e) => setProp((props: any) => (props.opacity = parseFloat(e.target.value)))}
            className="w-[40%] h-1 bg-blue-500 rounded-full appearance-none"
          />
        </span>
        <span className="flex items-center justify-between px-[8px] ml-[8px] mr-[4px] py-[12px]">
          <label className="text-sm font-medium text-slate-600" htmlFor="borderRadius">Border Radius</label>
          <input
            id="borderRadius"
            type="number"
            value={borderRadius}
            onChange={(e) => setProp((props: any) => (props.borderRadius = parseInt(e.target.value)))}
            className="border border-slate-400 w-[5rem] bg-slate-100 font-semibold text-sm px-2 py-1 rounded-md focus:border-slate-800 outline-none"
          />
        </span>
        <span className="flex items-center justify-between px-[8px] ml-[8px] mr-[4px] py-[12px]">
          <label className="text-sm font-medium text-slate-600" htmlFor="border">Border Width</label>
          <input
            id="border"
            type="number"
            value={border}
            onChange={(e) => setProp((props: any) => (props.border = parseInt(e.target.value)))}
            className="border border-slate-400 w-[5rem] bg-slate-100 font-semibold text-sm px-2 py-1 rounded-md focus:border-slate-800 outline-none"
          />
        </span>
        <span className="flex items-center justify-between px-[8px] ml-[8px] mr-[4px] py-[12px]">
          <label className="text-sm font-medium text-slate-600" htmlFor="borderColor">Border Color</label>
          <input
            id="borderColor"
            type="color"
            value={borderColor}
            onChange={(e) => setProp((props: any) => (props.borderColor = e.target.value))}
            className="w-[5rem] h-8 bg-slate-100 rounded-md focus:border-slate-800 outline-none"
          />
        </span>
      </div>
    </div>
  );
};

TemplateImage.craft = {
  props: {
  },
  related: {
    settings: CustomImageSettings,
  },
};