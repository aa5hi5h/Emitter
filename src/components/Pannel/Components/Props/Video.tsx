"use client";
import React, { useState, useRef } from "react";
import { useNode } from "@craftjs/core";
import HoverableWrapper from "../wrappers/hoverWrapper";

interface VideoProps {
  src: string;
  width?: string | number;
  height?: string | number;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
}

interface CraftComponent extends React.FC<VideoProps> {
  craft: {
    props: VideoProps;
    related: {
      settings: React.FC;
    };
  };
}

export const CustomVideo: CraftComponent = ({
  src,
  width = "100%",
  height = "auto",
  autoplay = false,
  loop = false,
  muted = false,
  controls = true,
}) => {
  const {
    connectors: { connect, drag },
    id,
  } = useNode((node) => ({
    id: node.id,
  }));

  return (
    <HoverableWrapper id={id} type="video">
      <div
        ref={(ref) => {
          if (ref) {
            connect(drag(ref));
          }
        }}
        style={{ display: "inline-block" }}
      >
        <video
          src={src}
          width={width}
          height={height}
          autoPlay={autoplay}
          loop={loop}
          muted={muted}
          controls={controls}
        />
      </div>
    </HoverableWrapper>
  );
};

export const CustomVideoSettings: React.FC = () => {
  const {
    actions: { setProp },
    src,
    width,
    height,
    autoplay,
    loop,
    muted,
    controls,
  } = useNode((node) => ({
    src: node.data.props.src,
    width: node.data.props.width,
    height: node.data.props.height,
    autoplay: node.data.props.autoplay,
    loop: node.data.props.loop,
    muted: node.data.props.muted,
    controls: node.data.props.controls,
  }));

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const videoURL = URL.createObjectURL(file);
      setProp((props: any) => (props.src = videoURL));
    }
  };

  return (
    <div className="flex flex-col space-y-4">
      <div className="border-b border-zinc-300 px-2 pt-2">
        <label className="text-sm text-zinc-900 font-semibold">Video Properties</label>
        <span className="flex items-center justify-between px-[8px] ml-[8px] mr-[4px] py-[12px]">
          <label className="text-sm font-medium text-slate-600" htmlFor="videoUpload">Upload Video</label>
          <input
            id="videoUpload"
            type="file"
            accept="video/*"
            ref={fileInputRef}
            onChange={handleFileUpload}
            className="hidden"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm"
          >
            Choose File
          </button>
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
        <label className="text-sm text-zinc-900 font-semibold">Video Settings</label>
        <span className="flex items-center justify-between px-[8px] ml-[8px] mr-[4px] py-[12px]">
          <label className="text-sm font-medium text-slate-600" htmlFor="autoplay">Autoplay</label>
          <input
            id="autoplay"
            type="checkbox"
            checked={autoplay}
            onChange={(e) => setProp((props: any) => (props.autoplay = e.target.checked))}
            className="w-4 h-4"
          />
        </span>
        <span className="flex items-center justify-between px-[8px] ml-[8px] mr-[4px] py-[12px]">
          <label className="text-sm font-medium text-slate-600" htmlFor="loop">Loop</label>
          <input
            id="loop"
            type="checkbox"
            checked={loop}
            onChange={(e) => setProp((props: any) => (props.loop = e.target.checked))}
            className="w-4 h-4"
          />
        </span>
        <span className="flex items-center justify-between px-[8px] ml-[8px] mr-[4px] py-[12px]">
          <label className="text-sm font-medium text-slate-600" htmlFor="muted">Muted</label>
          <input
            id="muted"
            type="checkbox"
            checked={muted}
            onChange={(e) => setProp((props: any) => (props.muted = e.target.checked))}
            className="w-4 h-4"
          />
        </span>
        <span className="flex items-center justify-between px-[8px] ml-[8px] mr-[4px] py-[12px]">
          <label className="text-sm font-medium text-slate-600" htmlFor="controls">Show Controls</label>
          <input
            id="controls"
            type="checkbox"
            checked={controls}
            onChange={(e) => setProp((props: any) => (props.controls = e.target.checked))}
            className="w-4 h-4"
          />
        </span>
      </div>
    </div>
  );
};

CustomVideo.craft = {
  props: {
    src: "",
    width: "100%",
    height: "auto",
    autoplay: false,
    loop: false,
    muted: false,
    controls: true,
  },
  related: {
    settings: CustomVideoSettings,
  },
};