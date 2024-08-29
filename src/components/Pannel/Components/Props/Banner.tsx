"use client";
import React from "react";
import { useNode } from "@craftjs/core";

interface BannerProps {
  src: string;
  alt?: string;
}

export const CustomBanner = ({ src, alt = "banner" }: BannerProps) => {
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
      style={{ display: "inline-block", width: "820px", height: "150px" }}
    >
      <img src={src} alt={alt} style={{ width: "100%", height: "100%" }} />
    </div>
  );
};