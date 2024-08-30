"use client";
import React, { useState } from "react";
import ContentEditable from "react-contenteditable";
import { useNode } from "@craftjs/core";
import HoverableWrapper from "../wrappers/hoverWrapper"; 

interface TextProp {
  text: string;
}

export const Text = ({ text }: TextProp) => {
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
      >
        <ContentEditable
          html={text}
          disabled={!editable}
          onClick={() => setEditable(true)}
          onBlur={() => setEditable(false)}
          onChange={(e) =>
            setProp((props: any) => (props.text = e.target.value))
          }
          tagName="p"
        />
      </div>
    </HoverableWrapper>
  );
};
