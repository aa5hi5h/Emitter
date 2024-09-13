import React from "react";
import { useNode, Element } from "@craftjs/core";
import { Text } from "./Text";

interface EmptyCanvasProps {
  children?: React.ReactNode; 
}

export const EmptyCanvas:React.FC<EmptyCanvasProps> = ({children}) => {
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
      >
       {children}
    </div>
  );
};