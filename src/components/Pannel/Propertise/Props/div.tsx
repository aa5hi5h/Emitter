"use client"
import React from "react";
import { useNode } from "@craftjs/core";

const DivProperties: React.FC = () => {
  const { setProp } = useNode((node) => ({
    backgroundColor: node.data.props.backgroundColor,
    padding: node.data.props.padding,
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
        <label>Padding</label>
        <input
          type="number"
          onChange={(e) =>
            setProp((props) => (props.padding = e.target.value))
          }
        />
      </div>
    </div>
  );
};

export default DivProperties;
