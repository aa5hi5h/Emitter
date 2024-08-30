"use client";
import React, { useEffect } from "react";
import { useNode } from "@craftjs/core";
import { useHover } from "../../../../app/Context/hoverContext";
import { useSelection } from "@/app/Context/selectionContext";

interface HoverableWrapperProps {
  children: React.ReactNode;
  type: string;
  id: string;
}

const HoverableWrapper = ({ children, type, id }: HoverableWrapperProps) => {
  const { hoveredElement, setHoveredElement } = useHover();
  const { selectedElement, setSelectedElement } = useSelection();
  const { connectors: { connect } } = useNode();

  const isHovered = hoveredElement?.id === id && hoveredElement?.type === type;
  const isSelected = selectedElement?.id === id && selectedElement?.type === type;

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(`[data-id="${id}"]`)) {
        setSelectedElement(null);
      }
    };

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [id, setSelectedElement]);

  return (
    <div
      ref={(ref) => {
        if (ref) {
          connect(ref);
        }
      }}
      onMouseEnter={() => setHoveredElement({ id, type })}
      onMouseLeave={() => setHoveredElement(null)}
      onClick={(e) => {
        e.stopPropagation();
        setSelectedElement({ id, type });
      }}
      data-id={id}
      data-type={type}
      className={`relative transition-all duration-150 ${
        isSelected
          ? "border-[1px] border-solid border-blue-500"
          : isHovered
          ? "border-[1px] border-dashed border-blue-500"
          : "border-[1px] border-transparent"
      }`}
    >
      {children}
    </div>
  );
};

export default HoverableWrapper;
