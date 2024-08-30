import React, { createContext, useContext, useState, ReactNode } from 'react';


interface SelectionContextProps {
  selectedElement: { id: string; type: string } | null;
  setSelectedElement: React.Dispatch<React.SetStateAction<{ id: string; type: string } | null>>;
}


const SelectionContext = createContext<SelectionContextProps | undefined>(undefined);


export const useSelection = () => {
  const context = useContext(SelectionContext);
  if (!context) {
    throw new Error("useSelection must be used within a SelectionProvider");
  }
  return context;
};


export const SelectionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedElement, setSelectedElement] = useState<{ id: string; type: string } | null>(null);

  return (
    <SelectionContext.Provider value={{ selectedElement, setSelectedElement }}>
      {children}
    </SelectionContext.Provider>
  );
};
