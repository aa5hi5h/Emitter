"use client";
import React, { useState } from "react";
import ContentEditable from "react-contenteditable";
import { useNode } from "@craftjs/core";
import { Button } from "@/components/ui/button";
import HoverableWrapper from "../wrappers/hoverWrapper";

interface ButtonProps {
  size?: "default" | "sm" | "lg";
  variant?: "default" | "ghost" | "secondary" | "link" | "destructive" | "outline";
  color?: "default" | "inherit" | "primary" | "secondary";
  children: string;
}

export const CustomButton = ({ size, variant, color, children }: ButtonProps) => {
  const {
    connectors: { connect, drag },
    id, 
    setProp,
  } = useNode((node) => ({
    id: node.id, 
    children: node.data.props.children,
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
      >
        <Button size={size} variant={variant} color={color}>
          <ContentEditable
            html={children}
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
