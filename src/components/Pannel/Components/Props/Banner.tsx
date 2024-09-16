"use client";
import React from "react";
import { useNode } from "@craftjs/core";
import HoverableWrapper from "../wrappers/hoverWrapper";

interface BannerProps {
  src: string;
  alt?: string;
  width?: string;
  height?: string;
}

interface CraftComponent extends React.FC<BannerProps> {
  craft: {
    props: {
      src: string;
      alt?: string;
      width?: string;
      height?: string;
    };
    related: {
      settings: React.FC;
    };
  };
}

export const CustomBanner: CraftComponent = ({
  src,
  alt = "banner",
  width = "100%",
  height = "150px",
}) => {
  const {
    connectors: { connect, drag },
    id,
  } = useNode((node) => ({
    id: node.id,
  }));

  return (
    <HoverableWrapper id={id} type="banner">
      <div
        ref={(ref) => {
          if (ref) {
            connect(drag(ref));
          }
        }}
        style={{ display: "block", width: width, height: height, overflow: "hidden" }}
      >
        <img
          src={src}
          alt={alt}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    </HoverableWrapper>
  );
};

export const CustomBannerSettings: React.FC = () => {
  const {
    actions: { setProp },
    src,
    alt,
    width,
    height,
  } = useNode((node) => ({
    src: node.data.props.src,
    alt: node.data.props.alt,
    width: node.data.props.width,
    height: node.data.props.height,
  }));

  return (
    <div className="flex flex-col space-y-4">
      <div className="border-b border-zinc-300 px-2 pt-2">
        <label className="text-sm text-zinc-900 font-semibold">Banner Properties</label>
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
    </div>
  );
};

CustomBanner.craft = {
  props: {
    src: "",
    alt: "banner",
    width: "100%",
    height: "150px",
  },
  related: {
    settings: CustomBannerSettings,
  },
};