"use client";
import React, { useState } from "react";
import ContentEditable from "react-contenteditable";
import { useNode } from "@craftjs/core";
import { Button } from "../../../../../ui/button" 
import HoverableWrapper from "../../../wrappers/hoverWrapper";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../../../../../ui/tooltip";
import { AlignCenter, AlignJustify, AlignLeft, AlignRight } from "lucide-react";
import { Chilanka } from "next/font/google";

interface TemplateButtonProps {
  children: string;
  opacity?: number;
  margin?: number;
  padding?: number;
  borderRadius?: number;
  border?: number;
  borderColor?: string;
  width?: number;
  height?: number;
  maxWidth?: number;
  minWidth?: number;
  textAlign?: string;
  fontFamily?: string;
  fontSize?: number;
  fontWeight?: string;
  color?: string;
  letterSpacing?: string;
  lineHeight?: string;
  link?: string | null,
  className?: string
}
interface CraftComponent extends React.FC<TemplateButtonProps> {
  craft: {
    props:{
      children: string;
  opacity?: number;
  margin?: number;
  padding?: number;
  borderRadius?: number;
  border?: number;
  borderColor?: string;
  width?: number;
  height?: number;
  maxWidth?: number;
  minWidth?: number;
  textAlign?: string;
  fontFamily?: string;
  fontSize?: number;
  fontWeight?: string;
  color?: string;
  letterSpacing?: string;
  lineHeight?: string;
  link?: string | null,

    },
    related: {
      settings: React.FC;
    };
  };
}

export const TemplateButton: CraftComponent = ({
  children,
  opacity,
  margin,
  padding,
  borderRadius,
  border,
  borderColor,
  width,
  height,
  maxWidth,
  minWidth,
  textAlign,
  fontFamily,
  fontSize,
  fontWeight,
  color,
  letterSpacing,
  lineHeight,
  link,
  className
}) => {
  const {
    connectors: { connect, drag },
    id,
    actions: { setProp }
  } = useNode((node) => ({
    id: node.id,
    opacity: node.data.props.opacity,
    margin: node.data.props.margin,
    padding: node.data.props.padding,
    borderRadius: node.data.props.borderRadius,
    border: node.data.props.border,
    borderColor: node.data.props.borderColor,
    width: node.data.props.width,
    height: node.data.props.height,
    maxWidth: node.data.props.maxWidth,
    minWidth: node.data.props.minWidth,
    textAlign: node.data.props.textAlign,
    fontFamily: node.data.props.fontFamily,
    fontSize: node.data.props.fontSize,
    fontWeight: node.data.props.fontWeight,
    color: node.data.props.color,
    letterSpacing: node.data.props.letterSpacing,
    lineHeight: node.data.props.lineHeight,
    link: node.data.props.link
  }));

  const [editable, setEditable] = useState(false);

  return (
    <HoverableWrapper id={id} type="button">
      <div
        ref={(ref) => {
          if (ref) {
            connect(drag(ref));
          }
        }}
        style={{
          opacity,
          margin: `${margin}px`,
          padding: `${padding}px`,
          borderRadius: `${borderRadius}px`,
          border: `${border}px solid ${borderColor}`,
          width: width ? `${width}px` : undefined,
          height: height ? `${height}px` : undefined,
          maxWidth: maxWidth ? `${maxWidth}px` : undefined,
          minWidth: minWidth ? `${minWidth}px` : undefined
        }}
      >
         <Button className={className}  >
          <ContentEditable
            html={children}
            style={{ 
              textAlign, 
              fontFamily, 
              fontSize: `${fontSize}px`, 
              fontWeight, 
              color: color === "#000000" ? "white" : color, 
              letterSpacing, 
              lineHeight 
            }}
            disabled={!editable}
            onClick={() => setEditable(true)}
            onBlur={() => setEditable(false)}
            onChange={(e) =>
              setProp((props: any) => (props.children = e.target.value))
            }
            tagName="span"
          />
        </Button>
      </div>
    </HoverableWrapper>
  );
};


export const ButtonSettings: React.FC = () => {
  const { 
    actions: { setProp },
    children,
    opacity,
    margin,
    padding,
    borderRadius,
    border,
    borderColor,
    width,
    height,
    maxWidth,
    minWidth,
    textAlign,
    fontFamily,
    fontSize,
    fontWeight,
    color,
    letterSpacing,
    lineHeight,
    link
  } = useNode((node) => ({
    children: node.data.props.children,
    opacity: node.data.props.opacity,
    margin: node.data.props.margin,
    padding: node.data.props.padding,
    borderRadius: node.data.props.borderRadius,
    border: node.data.props.border,
    borderColor: node.data.props.borderColor,
    width: node.data.props.width,
    height: node.data.props.height,
    maxWidth: node.data.props.maxWidth,
    minWidth: node.data.props.minWidth,
    textAlign: node.data.props.textAlign,
    fontFamily: node.data.props.fontFamily,
    fontSize: node.data.props.fontSize,
    fontWeight: node.data.props.fontWeight,
    color: node.data.props.color,
    letterSpacing: node.data.props.letterSpacing,
    lineHeight: node.data.props.lineHeight,
    link: node.data.props.link
  }));


  const handleOpacityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProp((props: any) => (props.opacity = parseFloat(event.target.value)));
  };

  return (
    <div className="flex flex-col space-y-4">
      <div>
      <div className="flex flex-col space-y-4">
        <div className="border-b border-zinc-300 px-2 pt-2 ">
          <label className="text-sm text-zinc-900 font-semibold">Sizing</label>
          <span className="flex items-center justify-between ml-[8px] mr-[4px] py-[12px]">
            <label className="text-sm font-medium text-slate-600" htmlFor="width">Width</label>
            <input
              id="width"
              type="number"
              value={width}
              onChange={(e) => setProp((props: any) => (props.width = parseInt(e.target.value)))
              }
              className="border border-slate-400 w-[4rem] bg-slate-100 font-semibold text-sm px-2 py-1 rounded-md focus:border-slate-800 outline-none"
            />
          </span>

          <span className="flex items-center justify-between ml-[8px] mr-[4px] py-[12px]">
            <label className="text-sm font-medium text-slate-600" htmlFor="height">Height</label>
            <input
              id="height"
              type="number"
              value={height}
              onChange={(e) => setProp((props: any) => (props.height = parseInt(e.target.value)))
              }
              className="border border-slate-400 w-[4rem] bg-slate-100 font-semibold text-sm px-2 py-1 rounded-md focus:border-slate-800 outline-none"
            />
          </span>

          <span className="flex items-center justify-between ml-[8px] mr-[4px] py-[12px]">
            <label className="text-sm font-medium text-slate-600" htmlFor="maxWidth">Max Width</label>
            <input
              id="maxWidth"
              type="number"
              value={maxWidth}
              onChange={(e) => setProp((props: any) => (props.maxWidth = parseInt(e.target.value)))
              }
              className="border border-slate-400 w-[4rem] bg-slate-100 font-semibold text-sm px-2 py-1 rounded-md focus:border-slate-800 outline-none"
            />
          </span>

          <span className="flex items-center justify-between ml-[8px] mr-[4px] py-[12px]">
            <label className="text-sm font-medium text-slate-600" htmlFor="minWidth">Min Width</label>
            <input
              id="minWidth"
              type="number"
              value={minWidth}
              onChange={(e) => setProp((props: any) => (props.minWidth = parseInt(e.target.value)))
              }
              className="border border-slate-400 w-[4rem] bg-slate-100 font-semibold text-sm px-2 py-1 rounded-md focus:border-slate-800 outline-none"
            />
          </span>
        </div>
      </div>

      <div className="flex flex-col space-y-4">
  <div className="border-b border-zinc-300 px-2 pt-2">
  <label className="text-sm text-zinc-900 font-semibold">Text</label>
  <span className="flex items-center justify-between px-[8px] ml-[8px] mr-[4px] py-[12px]">
  <label className="text-sm font-medium text-slate-600" htmlFor="positionType">Styles</label>
  <select
    id="styletype"
    defaultValue="none"
    className="border border-slate-400 bg-slate-100 font-semibold text-sm px-2 py-1 rounded-md focus:border-slate-800 outline-none"
  >
    <option value="Bold">Bold</option>
    <option value="italic">Italic</option>
    <option value="none" >none</option>
  </select>
  </span>
  <span className="flex items-center  justify-between px-[8px] ml-[8px] mr-[4px] py-[12px]">
  <label className="text-sm font-medium text-slate-600" htmlFor="textContent">Content</label>
  <input
            id="textContent"
            type="text"
            value={children}
            onChange={(e) => setProp((props:any) => (props.children = e.target.value))}
            className="border w-[7rem] border-slate-400  bg-slate-100 font-semibold text-sm px-2 py-1 rounded-md focus:border-purple-800 outline-none"
          />
  
  </span>
  <span className="flex items-center justify-between px-[8px] ml-[8px] mr-[4px] py-[12px]">
              <label className="text-sm font-medium text-slate-600" htmlFor="fontFamily">Font</label>
              <select
                id="fontFamily"
                value={fontFamily }
                onChange={(e) => setProp((props:any) => (props.fontFamily = e.target.value))}
                className="border border-slate-400 w-[7rem] bg-slate-100 font-semibold text-sm px-2 py-1 rounded-md focus:border-slate-800 outline-none"
              >
                <option value="Arial">Arial</option>
                <option value="Courier New">Courier New</option>
                <option value="Georgia">Georgia</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Verdana">Verdana</option>
              </select>
            </span>
            <span className="flex items-center justify-between px-[8px] ml-[8px] mr-[4px] py-[12px]">
            <label className="text-sm font-medium text-slate-600" htmlFor="fontWeight">Weight</label>
            <select
              id="fontWeight"
              value={fontWeight}
              onChange={(e) => setProp((props: any) => (props.fontWeight = e.target.value))}
              className="border border-slate-400 w-[7rem] bg-slate-100 font-semibold text-sm px-2 py-1 rounded-md focus:border-slate-800 outline-none"
            >
              <option value="100">Thin</option>
              <option value="200">Extra Light</option>
              <option value="300">Light</option>
              <option value="400">Normal</option>
              <option value="500">Medium</option>
              <option value="600">Semi Bold</option>
              <option value="700">Bold</option>
              <option value="800">Extra Bold</option>
              <option value="900">Black</option>
            </select>
          </span>

          <span className="flex items-center justify-between px-[8px] ml-[8px] mr-[4px] py-[12px]">
            <label className="text-sm font-medium text-slate-600" htmlFor="color">Color</label>
            <input
              id="color"
              type="color"
              value={color}
              onChange={(e) => setProp((props: any) => (props.color = e.target.value))}
              className="border rounded-lg border-gray-300"
            />
          </span>
          <span className="flex items-center justify-between px-[8px] ml-[8px] mr-[4px] py-[12px]">
            <label className="text-sm font-medium text-slate-600" htmlFor="fontSize">Size</label>
            <input
              id="fontSize"
              type="number"
              value={fontSize}
              onChange={(e) => setProp((props:any) => (props.fontSize = parseInt(e.target.value, 10)))}
              className="border border-slate-400 w-[5rem] bg-slate-100 font-semibold text-sm px-2 py-1 rounded-md focus:border-slate-800 outline-none"
            />
          </span>
  <span className="flex items-center justify-between px-[8px] ml-[8px] mr-[4px] py-[12px]">
  <label className="text-sm font-medium text-slate-600" htmlFor="letterSpacing">Spacing</label>
  <input
    id="letterSpacing"
    type="number"
    value={parseFloat(letterSpacing)}  
    onChange={(e) => {
      const newValue = e.target.value;
      setProp((props: any) => (props.letterSpacing = `${newValue}px`));  
    }}
    className="border border-slate-400 w-[5rem] bg-slate-100 font-semibold text-sm px-2 py-1 rounded-md focus:border-slate-800 outline-none"
  />
</span>

    <span className="flex items-center justify-between px-[8px] ml-[8px] mr-[4px] py-[12px]">
            <label className="text-sm font-medium text-slate-600" htmlFor="lineHeight">Line</label>
            <input
              id="lineHeight"
              type="number"
              value={lineHeight}
              step="0.1"
              onChange={(e) => setProp((props:any) => (props.lineHeight = `${e.target.value}`))}
              className="border border-slate-400 w-[5rem] bg-slate-100 font-semibold text-sm px-2 py-1 rounded-md focus:border-slate-800 outline-none"
            />
          </span>
          <span className="flex items-center justify-between px-[8px] ml-[8px] mr-[4px] py-[12px]">
        <label className="text-sm font-medium text-slate-600">Align</label>
        <div className="bg-slate-200 border-slate-300 border flex gap-2 items-center max-w-max p-1 rounded-md ml-auto">
        <TooltipProvider>
        <Tooltip>
            <TooltipTrigger asChild>
            <AlignLeft  onClick={() => setProp((props:any) => (props.textAlign = 'left'))} className={`w-6 h-6 p-1 rounded-md hover:bg-slate-400 opacity-60 hover:opacity-100`} />
    </TooltipTrigger>
    <TooltipContent>Left</TooltipContent>
    </Tooltip>
    <Tooltip>
      <TooltipTrigger asChild>
      <AlignCenter onClick={() => setProp((props:any) => (props.textAlign = 'center'))} className={`w-6 h-6 p-1 rounded-md hover:bg-slate-400 opacity-60 hover:opacity-100`} />
      </TooltipTrigger>
      <TooltipContent>Center</TooltipContent>
    </Tooltip>
    <Tooltip>
      <TooltipTrigger asChild>
      <AlignRight  onClick={() => setProp((props:any) => (props.textAlign = 'right'))} className={`w-6 h-6 p-1 rounded-md hover:bg-slate-400 opacity-60 hover:opacity-100`} />
      </TooltipTrigger>
      <TooltipContent>Right</TooltipContent>
    </Tooltip>
    <Tooltip>
      <TooltipTrigger asChild>
      <AlignJustify  onClick={() => setProp((props:any) => (props.textAlign = 'justify'))} className={`w-6 h-6 p-1 rounded-md hover:bg-slate-400 opacity-60 hover:opacity-100`} />
      </TooltipTrigger>
      <TooltipContent>Justify</TooltipContent>
    </Tooltip>
    </TooltipProvider>
        </div>
      </span>     
</div>
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
        <label className="text-sm font-medium text-slate-600" htmlFor="border">Border</label>
        <input
          id="border"
          type="number"
          value={border}
          onChange={(e) => {
            const newValue = e.target.value;
            setProp((props: any) => (props.border = parseInt(newValue)));
          }}
          className="border border-slate-400 w-[5rem] bg-slate-100 font-semibold text-sm px-2 py-1 rounded-md focus:border-slate-800 outline-none"
        />
      </span>

      <span className="flex items-center justify-between px-[8px] ml-[8px] mr-[4px] py-[12px]">
        <label className="text-sm font-medium text-slate-600" htmlFor="borderRadius">Border Radius</label>
        <input
          id="borderRadius"
          type="number"
          value={borderRadius}
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
          value={borderColor}
          onChange={(e) => setProp((props: any) => (props.borderColor = e.target.value))}
          className="border rounded-lg border-gray-300 ml-auto"
        />
      </span>
    </div>
  </div>
  </div>
      </div>
    </div>
  );
};

TemplateButton.craft = {
  props: {
    children: "Button",
  },
  related: {
    settings: ButtonSettings
  }
};
