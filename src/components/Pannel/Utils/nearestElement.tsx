import React, { useEffect } from "react";
import { useSelection } from "@/app/Context/selectionContext";

interface ClickableOverlayProps {
  onClickOutside: () => void;
}

const ClickableOverlay: React.FC<ClickableOverlayProps> = ({ onClickOutside }) => {
  const { setSelectedElement } = useSelection();

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest(".selectable")) {
        setSelectedElement(null);
        onClickOutside();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [onClickOutside, setSelectedElement]);

  return <div className="fixed inset-0 z-50 pointer-events-none" />;
};

export default ClickableOverlay;
