"use client";
import React from "react";
import { useNode } from "@craftjs/core";


interface ImageProps {
  src: string;
  alt?: string;
  width?: string | number;
  height?: string | number;
}

export const CustomImage = ({ src, alt = "image", width = "100%", height = "auto" }: ImageProps) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <div
      ref={(ref) => {
        if (ref) {
          connect(drag(ref));
        }
      }}
      style={{ display: "inline-block" }}
    >
      <img src={src} alt={alt} width={width} height={height} />
    </div>
  );
};
