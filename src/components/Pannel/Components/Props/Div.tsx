"use client";
import React, { useState } from "react";
import { useNode } from "@craftjs/core";
import HoverableWrapper from "../wrappers/hoverWrapper";
import ClickableOverlay from "../../Utils/nearestElement";
import { useSelection } from "@/app/Context/selectionContext";

interface CustomDivProps {
  backgroundColor?: string;
  padding?: string;
  children?: React.ReactNode;
}

export const CustomDiv = ({ backgroundColor, padding = "10px", children }: CustomDivProps) => {
  const {
    connectors: { connect, drag },
    id,
    actions: { setProp },
  } = useNode((node) => ({
    id: node.id,
  }));

  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const { setSelectedElement } = useSelection();

  const handleClick = () => {
    setSelectedElement({ id, type: "div" });
    setOverlayVisible(true);
  };

  return (
    <>
      {isOverlayVisible && <ClickableOverlay onClickOutside={() => setOverlayVisible(false)} />}
      <HoverableWrapper id={id} type="div">
        <div
          ref={(ref) => {
            if (ref) {
              connect(drag(ref));
            }
          }}
          style={{ backgroundColor, padding }}
          onClick={(e) => {
            e.stopPropagation();
            handleClick();
          }}
          className="selectable" // Add a class to target
        >
          {children}
        </div>
      </HoverableWrapper>
    </>
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