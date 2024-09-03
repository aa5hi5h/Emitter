'use client'
import React from "react";
import { useNode } from "@craftjs/core";

const ButtonProperties: React.FC = () => {
  const { setProp } = useNode((node) => ({
    backgroundColor: node.data.props.backgroundColor,
    borderRadius: node.data.props.borderRadius,
  }));

  return (
    <div>
      <div>
        <label>Background Color</label>
        <input
          type="color"
          onChange={(e) =>
            setProp((props) => (props.backgroundColor = e.target.value))
          }
        />
      </div>
      <div>
        <label>Border Radius</label>
        <input
          type="number"
          onChange={(e) =>
            setProp((props) => (props.borderRadius = e.target.value))
          }
        />
      </div>
    </div>
  );
};

export default ButtonProperties;
