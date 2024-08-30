import React, { createContext, useContext, useState, ReactNode } from 'react';


interface HoverContextProps {
  hoveredElement: { id: string; type: string } | null;
  setHoveredElement: React.Dispatch<React.SetStateAction<{ id: string; type: string } | null>>;
}


const HoverContext = createContext<HoverContextProps | undefined>(undefined);


export const useHover = () => {
  const context = useContext(HoverContext);
  if (!context) {
    throw new Error("useHover must be used within a HoverProvider");
  }
  return context;
};


export const HoverProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [hoveredElement, setHoveredElement] = useState<{ id: string; type: string } | null>(null);

  return (
    <HoverContext.Provider value={{ hoveredElement, setHoveredElement }}>
      {children}
    </HoverContext.Provider>
  );
};
