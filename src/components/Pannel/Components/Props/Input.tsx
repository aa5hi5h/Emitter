"use client";
import React from "react";
import { useNode } from "@craftjs/core";
import HoverableWrapper from "../wrappers/hoverWrapper";

interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  width?: string | number;
  borderRadius?: number;
  borderColor?: string;
  backgroundColor?: string;
  textColor?: string;
}

interface CraftComponent extends React.FC<InputProps> {
  craft: {
    props: InputProps;
    related: {
      settings: React.FC;
    };
  };
}

export const CustomInput: CraftComponent = ({
  type = "text",
  placeholder = "",
  value = "",
  width = "100%",
  borderRadius = 4,
  borderColor = "#cccccc",
  backgroundColor = "#ffffff",
  textColor = "#000000",
}) => {
  const {
    connectors: { connect, drag },
    id,
  } = useNode((node) => ({
    id: node.id,
  }));

  return (
    <HoverableWrapper id={id} type="input">
      <div
        ref={(ref) => {
          if (ref) {
            connect(drag(ref));
          }
        }}
        style={{ width }}
      >
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          style={{
            width: "100%",
            borderRadius: `${borderRadius}px`,
            border: `1px solid ${borderColor}`,
            backgroundColor,
            color: textColor,
            padding: "8px",
          }}
          readOnly
        />
      </div>
    </HoverableWrapper>
  );
};

export const CustomInputSettings: React.FC = () => {
  const {
    actions: { setProp },
    type,
    placeholder,
    value,
    width,
    borderRadius,
    borderColor,
    backgroundColor,
    textColor,
  } = useNode((node) => ({
    type: node.data.props.type,
    placeholder: node.data.props.placeholder,
    value: node.data.props.value,
    width: node.data.props.width,
    borderRadius: node.data.props.borderRadius,
    borderColor: node.data.props.borderColor,
    backgroundColor: node.data.props.backgroundColor,
    textColor: node.data.props.textColor,
  }));

  return (
    <div className="flex flex-col space-y-4">
      <div className="border-b border-zinc-300 px-2 pt-2">
        <label className="text-sm text-zinc-900 font-semibold">Input Properties</label>
        <span className="flex items-center justify-between px-[8px] ml-[8px] mr-[4px] py-[12px]">
          <label className="text-sm font-medium text-slate-600" htmlFor="type">Type</label>
          <select
            id="type"
            value={type}
            onChange={(e) => setProp((props: any) => (props.type = e.target.value))}
            className="border border-slate-400 bg-slate-100 font-semibold text-sm px-2 py-1 rounded-md focus:border-slate-800 outline-none"
          >
            <option value="text">Text</option>
            <option value="number">Number</option>
            <option value="email">Email</option>
            <option value="password">Password</option>
          </select>
        </span>
        <span className="flex items-center justify-between px-[8px] ml-[8px] mr-[4px] py-[12px]">
          <label className="text-sm font-medium text-slate-600" htmlFor="placeholder">Placeholder</label>
          <input
            id="placeholder"
            type="text"
            value={placeholder}
            onChange={(e) => setProp((props: any) => (props.placeholder = e.target.value))}
            className="border border-slate-400 w-[60%] bg-slate-100 font-semibold text-sm px-2 py-1 rounded-md focus:border-slate-800 outline-none"
          />
        </span>
        <span className="flex items-center justify-between px-[8px] ml-[8px] mr-[4px] py-[12px]">
          <label className="text-sm font-medium text-slate-600" htmlFor="value">Value</label>
          <input
            id="value"
            type="text"
            value={value}
            onChange={(e) => setProp((props: any) => (props.value = e.target.value))}
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
      </div>
      <div className="border-b border-zinc-300 px-2 pt-2">
        <label className="text-sm text-zinc-900 font-semibold">Styles</label>
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
          <label className="text-sm font-medium text-slate-600" htmlFor="borderColor">Border Color</label>
          <input
            id="borderColor"
            type="color"
            value={borderColor}
            onChange={(e) => setProp((props: any) => (props.borderColor = e.target.value))}
            className="w-[5rem] h-8 bg-slate-100 rounded-md focus:border-slate-800 outline-none"
          />
        </span>
        <span className="flex items-center justify-between px-[8px] ml-[8px] mr-[4px] py-[12px]">
          <label className="text-sm font-medium text-slate-600" htmlFor="backgroundColor">Background Color</label>
          <input
            id="backgroundColor"
            type="color"
            value={backgroundColor}
            onChange={(e) => setProp((props: any) => (props.backgroundColor = e.target.value))}
            className="w-[5rem] h-8 bg-slate-100 rounded-md focus:border-slate-800 outline-none"
          />
        </span>
        <span className="flex items-center justify-between px-[8px] ml-[8px] mr-[4px] py-[12px]">
          <label className="text-sm font-medium text-slate-600" htmlFor="textColor">Text Color</label>
          <input
            id="textColor"
            type="color"
            value={textColor}
            onChange={(e) => setProp((props: any) => (props.textColor = e.target.value))}
            className="w-[5rem] h-8 bg-slate-100 rounded-md focus:border-slate-800 outline-none"
          />
        </span>
      </div>
    </div>
  );
};

CustomInput.craft = {
  props: {
    type: "text",
    placeholder: "",
    value: "",
    width: "100%",
    borderRadius: 4,
    borderColor: "#cccccc",
    backgroundColor: "#ffffff",
    textColor: "#000000",
  },
  related: {
    settings: CustomInputSettings,
  },
};