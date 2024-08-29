import React from "react";
import { useNode, Element } from "@craftjs/core";

interface ContainerProps {
  children?: React.ReactNode; 
}

export const Container:React.FC<ContainerProps> = ({children}) => {
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