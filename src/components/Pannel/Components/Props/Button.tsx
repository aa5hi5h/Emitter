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

interface CraftComponent extends React.FC<ButtonProps> {
  craft: {
    related: {
      settings: React.FC;
    };
  };
}

export const CustomButton: React.FC<ButtonProps> = ({ size, variant, color, children }) => {
  const {
    connectors: { connect, drag },
    id, 
    setProp,
  } = useNode((node) => ({
    id: node.id, 
    children: node.data.props.children,
  }));

  const sizeClasses = {
    small: "py-1 px-2 text-sm",
    medium: "py-2 px-4 text-base",
    large: "py-3 px-6 text-lg",
  };

  const variantClasses = {
    text: "text-blue-500",
    outlined: "border border-blue-500 text-blue-500",
    contained: "bg-blue-500 text-white",
  };

  const colorClasses = {
    default: "bg-white hover:bg-gray-100 text-black",
    primary: "bg-blue-500 hover:bg-blue-700 text-white",
    secondary: "bg-gray-500 hover:bg-gray-700 text-white",
  };

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

// Settings component for the Button
const ButtonSettings: React.FC = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <div className="p-2 border border-gray-200 rounded shadow-md bg-white">
    {/* Size settings */}
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">Size</label>
      <div className="flex space-x-2">
        {["small", "medium", "large"].map((size) => (
          <label key={size} className="flex items-center">
            <input
              type="radio"
              name="size"
              value={size}
              checked={props.size === size}
              onChange={() => setProp((props: any) => (props.size = size))}
              className="mr-1"
            />
            {size.charAt(0).toUpperCase() + size.slice(1)}
          </label>
        ))}
      </div>
    </div>

    {/* Variant settings */}
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">Variant</label>
      <div className="flex space-x-2">
        {["text", "outlined", "contained"].map((variant) => (
          <label key={variant} className="flex items-center">
            <input
              type="radio"
              name="variant"
              value={variant}
              checked={props.variant === variant}
              onChange={() => setProp((props: any) => (props.variant = variant))}
              className="mr-1"
            />
            {variant.charAt(0).toUpperCase() + variant.slice(1)}
          </label>
        ))}
      </div>
    </div>

    {/* Color settings */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Color</label>
      <div className="flex space-x-2">
        {["default", "primary", "secondary"].map((color) => (
          <label key={color} className="flex items-center">
            <input
              type="radio"
              name="color"
              value={color}
              checked={props.color === color}
              onChange={() => setProp((props: any) => (props.color = color))}
              className="mr-1"
            />
            {color.charAt(0).toUpperCase() + color.slice(1)}
          </label>
        ))}
      </div>
    </div>
  </div>
);
};

(CustomButton as CraftComponent).craft = {
  related: {
    settings: ButtonSettings,
  },
};

