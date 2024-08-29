"use client";
import React from "react";
import { useNode } from "@craftjs/core";

interface CustomDivProps {
  backgroundColor?: string;
  padding?: string;
  children?: React.ReactNode;
}

export const CustomDiv = ({ backgroundColor, padding, children }: CustomDivProps) => {
  const {
    connectors: { connect, drag },
    actions: { setProp },
  } = useNode();

  return (
    <div
      ref={(ref) => {
        if (ref) {
          connect(drag(ref));
        }
      }}
      style={{ backgroundColor, padding }}
      onClick={() => setProp((props: CustomDivProps) => props)}
    >
      {children}
    </div>
  );
};

export const CustomDivSettings: React.FC = () => {
  const { backgroundColor, padding, setProp } = useNode((node) => ({
    backgroundColor: node.data.props.backgroundColor,
    padding: node.data.props.padding,
  }));

  return (
    <div>
      <div>
        <label>Background Color</label>
        <input
          type="color"
          value={backgroundColor}
          onChange={(e) =>
            setProp((props: CustomDivProps) => (props.backgroundColor = e.target.value))
          }
        />
      </div>
      <div>
        <label>Padding</label>
        <input
          type="text"
          value={padding}
          onChange={(e) => setProp((props: CustomDivProps) => (props.padding = e.target.value))}
          placeholder="e.g., 10px"
        />
      </div>
    </div>
  );
};

CustomDiv.craft = {
  props: {
    backgroundColor: "#ffffff",
    padding: "10px",
  },
  related: {
    settings: CustomDivSettings,
  },
};
