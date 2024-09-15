"use client";

import React, { CSSProperties, useRef, useState } from "react";
import ContentEditable from "react-contenteditable";
import { useNode } from "@craftjs/core";
import HoverableWrapper from "../wrappers/hoverWrapper";
import { AlignCenter, AlignJustify, AlignLeft, AlignRight } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ChromePicker, ColorResult } from 'react-color';
import { useColorPicker } from "@/app/Context/ColorPickerContext";

interface TextProp {
  text: string;
  fontSize?: number;
  color?: string;
  fontFamily?: string;
  fontWeight?: string;
  letterSpacing?: string;
  lineHeight?: string;
  textAlign?: CSSProperties['textAlign'];
  opacity?: number;
  tag?: keyof JSX.IntrinsicElements;
  margin?: number;
  padding?: number;
  borderRadius?: number;
  border?: number;
  borderColor?: string;
  width?:number,
  height?: number,
  maxWidth ?: number,
  minWidth ?: number
}

interface CraftComponent extends React.FC<TextProp> {
  craft: {
    props: {
      text: string;
      fontSize?: number;
      color?: string;
      fontFamily?: string;
      fontWeight?: string;
      letterSpacing?: string;
      lineHeight?: string;
      textAlign?: CSSProperties['textAlign'];
      opacity?: number;
      tag?: keyof JSX.IntrinsicElements;
      margin?: number;
      padding?: number;
      borderRadius?: number;
      border?: number;
      borderColor?: string;
      width?:number,
      height?: number,
      maxWidth ?: number,
      minWidth ?: number
    };
    related: {
      settings: React.FC;
    };
  };
}

export const Text: CraftComponent = ({
  text,
  fontSize,
  color,
  fontFamily,
  fontWeight,
  letterSpacing,
  lineHeight,
  textAlign,
  opacity,
  tag,
  margin,
  padding,
  borderRadius,
  border,
  borderColor,
  width,
  height,
  maxWidth,
  minWidth
}: TextProp) => {
  const {
    connectors: { connect, drag },
    setProp,
    id,
  } = useNode((node) => ({
    text: node.data.props.text,
    id: node.id,
    textAlign: node.data.props.textAlign,
    opacity: node.data.props.opacity,
    tag: node.data.props.tag,
    margin: node.data.props.margin,
    padding: node.data.props.padding,
    borderRadius: node.data.props.borderRadius,
    border: node.data.props.border,
    borderColor: node.data.props.borderColor,
    width: node.data.props.width,
    height: node.data.props.height,
    maxWidth: node.data.props.maxWidth,
    minWidth: node.data.props.minWidth
  }));

  const [editable, setEditable] = useState(false);


  const TagComponent = tag;

  return (
    <HoverableWrapper id={id} type="text">
      <div
        ref={(ref) => {
          if (ref) {
            connect(drag(ref));
          }
        }}
        style={{
          fontSize,
          color,
          fontFamily,
          fontWeight,
          letterSpacing,
          lineHeight,
          textAlign,
          opacity,
          margin,
          padding,
          borderRadius,
          border: `${border}px solid ${borderColor}`, 
          width: width ? `${width}px` : undefined,
          height: height ? `${height}px` : undefined,
          maxWidth: maxWidth ? `${maxWidth}px` : undefined,
          minWidth: minWidth ? `${minWidth}px` : undefined
        }}
      >
        <ContentEditable
          html={text}
          disabled={!editable}
          onClick={() => setEditable(true)}
          onBlur={() => {
            setEditable(false);
            setProp((props) => (props.text = text));
          }}
          onChange={(e) => setProp((props) => (props.text = e.target.value))}
          tagName="p"
          className="border-b border-gray-300 p-1"
        />
      </div>
    </HoverableWrapper>
  );
};

export const TextSettings = () => {
  const {
    actions: { setProp },
    text,
    fontSize,
    color,
    fontFamily,
    fontWeight,
    letterSpacing,
    lineHeight,
    textAlign,
    opacity,
    tag,
    margin,
    padding,
    borderRadius,
    border,
    borderColor,
    width,
    height,
    maxWidth,
    minWidth,
  } = useNode((node) => ({
    text: node.data.props.text,
    fontSize: node.data.props.fontSize,
    color: node.data.props.color,
    fontFamily: node.data.props.fontFamily,
    fontWeight: node.data.props.fontWeight,
    letterSpacing: node.data.props.letterSpacing,
    lineHeight: node.data.props.lineHeight,
    textAlign: node.data.props.textAlign,
    opacity: node.data.props.opacity,
    tag: node.data.props.tag,
    margin: node.data.props.margin,
    padding: node.data.props.padding,
    borderRadius: node.data.props.borderRadius,
    border: node.data.props.border,
    borderColor: node.data.props.borderColor,
    width: node.data.props.width,
    height: node.data.props.height,
    maxWidth: node.data.props.maxWidth,
    minWidth: node.data.props.minWidth,
  }));


  const { pickerVisible, ColorBorder, setPickerVisible, setColorBorder } = useColorPicker();
  const pickerRef = useRef<HTMLDivElement>(null);

  const togglePicker = () => setPickerVisible(!pickerVisible);


  const handleClickOutside = (event: MouseEvent) => {
    if (pickerRef.current && !pickerRef.current.contains(event.target as Node)) {
      setPickerVisible(false);
    }
  };

  React. useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOpacityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProp((props: any) => (props.opacity = parseFloat(event.target.value)));
  };

  const handleTagChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setProp((props: any) => (props.tag = event.target.value as keyof JSX.IntrinsicElements));
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, property: string) => {
    setProp((props: any) => (props[property] = event.target.value));
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
            value={text || ""}
            onChange={(e) => setProp((props:any) => (props.text = e.target.value))}
            className="border w-[7rem] border-slate-400  bg-slate-100 font-semibold text-sm px-2 py-1 rounded-md focus:border-purple-800 outline-none"
          />
  
  </span>
  <span className="flex items-center justify-between px-[8px] ml-[8px] mr-[4px] py-[12px]">
              <label className="text-sm font-medium text-slate-600" htmlFor="fontFamily">Font</label>
              <select
                id="fontFamily"
                value={fontFamily || "Arial"}
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
              value={fontWeight || "400"}
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
              value={color || "#000000"}
              onChange={(e) => setProp((props: any) => (props.color = e.target.value))}
              className="border rounded-lg border-gray-300"
            />
          </span>
          <span className="flex items-center justify-between px-[8px] ml-[8px] mr-[4px] py-[12px]">
            <label className="text-sm font-medium text-slate-600" htmlFor="fontSize">Size</label>
            <input
              id="fontSize"
              type="number"
              value={fontSize || 16}
              onChange={(e) => setProp((props:any) => (props.fontSize = parseInt(e.target.value, 10)))}
              className="border border-slate-400 w-[5rem] bg-slate-100 font-semibold text-sm px-2 py-1 rounded-md focus:border-slate-800 outline-none"
            />
          </span>
  <span className="flex items-center justify-between px-[8px] ml-[8px] mr-[4px] py-[12px]">
  <label className="text-sm font-medium text-slate-600" htmlFor="letterSpacing">Spacing</label>
  <input
    id="letterSpacing"
    type="number"
    value={parseFloat(letterSpacing) || 0}
    onChange={(e) => {
      const newValue = e.target.value;
      setProp((props: any) => (props.letterSpacing = `${newValue}px`));  
    }}
    className="border border-slate-400 w-[5rem] bg-slate-100 font-semibold text-sm px-2 py-1 rounded-md focus:border-slate-800 outline-none"
  />
</span>

    {/* Line Height */}
    <span className="flex items-center justify-between px-[8px] ml-[8px] mr-[4px] py-[12px]">
            <label className="text-sm font-medium text-slate-600" htmlFor="lineHeight">Line</label>
            <input
              id="lineHeight"
              type="number"
              value={lineHeight || "1.5"}
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

        <span className="flex items-center justify-between px-[8px] ml-[8px] gap-2 mr-[4px] py-[12px]">
          <label className="text-sm font-medium text-slate-600">Tag</label>
          <select value={tag} onChange={handleTagChange}
          className="border border-slate-400 w-[7rem] bg-slate-100 font-semibold text-sm px-2 py-1 rounded-md focus:border-slate-800 outline-none"
          >
            <option value="h1">H1</option>
            <option value="h2">H2</option>
            <option value="h3">H3</option>
            <option value="h4">H4</option>
            <option value="h5">H5</option>
            <option value="h6">H6</option>
            <option value="p">Paragraph</option>
            <option value="span">Span</option>
          </select>
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
  <label className="text-sm text-zinc-900 font-semibold">Sizing</label>
  <span className="flex items-center justify-between  ml-[8px] mr-[4px] py-[12px]">
  <label className="text-sm font-medium text-slate-600" htmlFor="width">Width</label>
  <div className=" flex gap-2">
  <input
    id="width"
    type="number"
    value={width || 0}
    onChange={(e) => setProp((props: any) => (props.width = parseInt(e.target.value)))
    }
    className="border border-slate-400 w-[4rem] bg-slate-100 font-semibold text-sm px-2 py-1 rounded-md focus:border-slate-800 outline-none"
  />

  </div>
</span>

<span className="flex items-center justify-between  ml-[8px] mr-[4px] py-[12px]">
  <label className="text-sm font-medium text-slate-600" htmlFor="height">Height</label>
  <input
    id="height"
    type="number"
    value={height || 0}
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
    value={maxWidth || 0}
    onChange={(e) => setProp((props: any) => (props.maxWidth = parseInt(e.target.value)))
    }
    className="border border-slate-400 w-[4rem] bg-slate-100 font-semibold text-sm px-2 py-1 rounded-md focus:border-slate-800 outline-none"
  />
</span>

<span className="flex items-center justify-between  ml-[8px] mr-[4px] py-[12px]">
  <label className="text-sm font-medium text-slate-600" htmlFor="minWidth">Min Width</label>
  <input
    id="minWidth"
    type="number"
    value={minWidth || 0}
    onChange={(e) => setProp((props: any) => (props.minWidth = parseInt(e.target.value)))
    }
    className="border border-slate-400 w-[4rem] bg-slate-100 font-semibold text-sm px-2 py-1 rounded-md focus:border-slate-800 outline-none"
  />
</span>
          </div>
          </div>
    </div>
    </div>
  );
};

Text.craft = {
  props: {
    text: "Hi",
    fontSize: 16,
    color: "#000000",
    fontFamily: "Arial",
    fontWeight: "400",
    letterSpacing: "0px",
    lineHeight: "1",
    textAlign: "left",
    opacity: 1,
    tag: "h1",
    margin: 0,
    padding: 0,
    borderRadius: 0,
    border: 0,
    borderColor: "#000000",
    width: 100,
    height: 100,
    maxWidth: 1000, 
    minWidth: 50,
  },
  related: {
    settings: TextSettings,
  },
};