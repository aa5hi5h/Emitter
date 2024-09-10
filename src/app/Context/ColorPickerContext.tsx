import React, { createContext, useState, useContext, ReactNode } from "react";

interface ColorPickerContextProps {
  pickerVisible: boolean;
  ColorBorder: string;
  setPickerVisible: (visible: boolean) => void;
  setColorBorder: (color: string) => void;
}

const ColorPickerContext = createContext<ColorPickerContextProps | undefined>(undefined);

export const ColorPickerProvider = ({ children }: { children: ReactNode }) => {
  const [pickerVisible, setPickerVisible] = useState(false);
  const [ColorBorder, setColorBorder] = useState("#000000");

  return (
    <ColorPickerContext.Provider
      value={{ pickerVisible, ColorBorder, setPickerVisible, setColorBorder }}
    >
      {children}
    </ColorPickerContext.Provider>
  );
};

export const useColorPicker = () => {
  const context = useContext(ColorPickerContext);
  if (!context) {
    throw new Error("useColorPicker must be used within a ColorPickerProvider");
  }
  return context;
};