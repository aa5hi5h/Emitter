"use client"
import React, { createContext, useContext, useState, Dispatch, SetStateAction, useCallback } from 'react';

interface CanvasContextType {
  isCanvasEmpty: boolean;
  setIsCanvasEmpty: Dispatch<SetStateAction<boolean>>;
  checkIfCanvasEmpty: () => void;
  setCheckIfCanvasEmpty: (fn: () => void) => void;
}

const CanvasContext = createContext<CanvasContextType | undefined>(undefined);

export const CanvasProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [isCanvasEmpty, setIsCanvasEmpty] = useState(true);
  const [checkIfCanvasEmpty, setCheckIfCanvasEmpty] = useState(() => () => {});

  return (
    <CanvasContext.Provider value={{ isCanvasEmpty, setIsCanvasEmpty, checkIfCanvasEmpty, setCheckIfCanvasEmpty }}>
      {children}
    </CanvasContext.Provider>
  );
};

export const useCanvas = () => {
  const context = useContext(CanvasContext);
  if (context === undefined) {
    throw new Error('useCanvas must be used within a CanvasProvider');
  }
  return context;
};