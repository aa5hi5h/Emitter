// components/user/Text.js
"use client";

import React, { useState } from "react";
import ContentEditable from "react-contenteditable";
import { useNode } from "@craftjs/core";
import HoverableWrapper from "../wrappers/hoverWrapper";


interface TextProp {
  text: string;
  fontSize: any;
  color: any
}

interface CraftComponent extends React.FC<TextProp> {
  craft: {
    props:{
      text:string,
      fontSize:number,
      color:string
    }
    related: {
      settings: React.FC;
    };
  };
}

export const Text: CraftComponent = ({ text, fontSize, color }: TextProp) => {
  const {
    connectors: { connect, drag },
    setProp,
    id, 
  } = useNode((node) => ({
    text: node.data.props.text,
    id: node.id, 
  }));

  const [editable, setEditable] = useState(false);

  return (
    <HoverableWrapper id={id} type="text">
      <div
        ref={(ref) => {
          if (ref) {
            connect(drag(ref));
          }
        }}
        style={{ fontSize, color }} // Apply font size and color directly
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
          className="border-b border-gray-300 p-1" // Add some styling
        />
      </div>
    </HoverableWrapper>
  );
};

// Settings component for the Text component
const TextSettings = () => {
  const {
    actions: { setProp },
    fontSize,
    color,
  } = useNode((node) => ({
    fontSize: node.data.props.fontSize,
    color: node.data.props.color,
  }));

  return (
    <div className="flex flex-col space-y-4">
      <div>
        <label className="block mb-1">Font Size</label>
        <input
          type="number"
          value={fontSize || 16}
          onChange={(e) => {
            const value = parseInt(e.target.value, 10);
            setProp((props:any) => (props.fontSize = value));
          }}
          className="border border-gray-300 p-1 rounded"
        />
      </div>
      <div>
        <label className="block mb-1">Text Color</label>
        <input
          type="color"
          value={color || "#000000"}
          onChange={(e) => setProp((props:any) => (props.color = e.target.value))}
          className="border border-gray-300 rounded"
        />
      </div>
    </div>
  );
};

Text.craft = {
  props: {
    text: "Hi",
    fontSize: 16,
    color: "#000000",
  },
  related: {
    settings: TextSettings, // Directly reference the TextSettings component
  },
};