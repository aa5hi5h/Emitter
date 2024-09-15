import React, { forwardRef } from 'react';
import { useEditor, useNode , Node, Frame } from '@craftjs/core';
import { CustomDiv } from './Div';
import { Text, TextSettings } from './Text';
import { ButtonSettings, CustomButton } from './Button';

interface CustomNavbarProps {
  backgroundColor?: string;
  padding?: number;
  borderBottom?: number;
  borderColor?: string;
}

interface CustomDivProps {
    backgroundColor?: string;
    children?: React.ReactNode;
    opacity?: number;
    margin?: number;
    padding?: number;
    borderRadius?: number;
    border?: number;
    borderColor?: string;
    forwardedRef?: React.Ref<HTMLDivElement>;  // Add this line
  }


export const CustomNavbar = ({
  backgroundColor = '#ffffff',
  padding = 16,
  borderBottom = 1,
  borderColor = '#e5e7eb',
}: CustomNavbarProps) => {
  const { connectors: { connect, drag } } = useNode();

  return (
    <div className="flex justify-between items-center">
      <Text
        text="Logo"
        fontSize={24}
        fontWeight="bold"
      />
      <div className="flex space-x-4">
        <CustomButton>
          Home
        </CustomButton>
        <CustomButton>
          About
        </CustomButton>
        <CustomButton>
          Contact
        </CustomButton>
      </div>
    </div>
  );
};

const CustomNavbarSettings = () => {
  const { backgroundColor, padding, borderBottom, borderColor, setProp } = useNode((node) => ({
    backgroundColor: node.data.props.backgroundColor,
    padding: node.data.props.padding,
    borderBottom: node.data.props.borderBottom,
    borderColor: node.data.props.borderColor,
  }));

  const { nodeId } = useEditor((state) => {
    const [selectedId] = Array.from(state.events.selected); 
    return { nodeId: selectedId };
  });

  const { node } = useEditor((state) => ({
    node: state.nodes[nodeId] 
  }));

  if (!node) return null; 
  const selectedComponent = node.data.type;


  return (
    <div className="flex flex-col space-y-4">
         {selectedComponent === "Text" && <TextSettings />}
         {selectedComponent === "CustomButton" && <ButtonSettings />}
      <div className="border-b border-zinc-300 px-2 pt-2">
        <label className="text-sm text-zinc-900 font-semibold">Navbar Settings</label>
        <span className="flex items-center justify-between px-2 py-2">
          <label className="text-sm font-medium text-slate-600" htmlFor="backgroundColor">Background Color</label>
          <input
            id="backgroundColor"
            type="color"
            value={backgroundColor}
            onChange={(e) => setProp((props: any) => props.backgroundColor = e.target.value)}
            className="border rounded-lg border-gray-300"
          />
        </span>
        <span className="flex items-center justify-between px-2 py-2">
          <label className="text-sm font-medium text-slate-600" htmlFor="padding">Padding</label>
          <input
            id="padding"
            type="number"
            value={padding}
            onChange={(e) => setProp((props: any) => props.padding = parseInt(e.target.value))}
            className="border border-slate-400 w-20 bg-slate-100 font-semibold text-sm px-2 py-1 rounded-md focus:border-slate-800 outline-none"
          />
        </span>
        <span className="flex items-center justify-between px-2 py-2">
          <label className="text-sm font-medium text-slate-600" htmlFor="borderBottom">Border Bottom</label>
          <input
            id="borderBottom"
            type="number"
            value={borderBottom}
            onChange={(e) => setProp((props: any) => props.borderBottom = parseInt(e.target.value))}
            className="border border-slate-400 w-20 bg-slate-100 font-semibold text-sm px-2 py-1 rounded-md focus:border-slate-800 outline-none"
          />
        </span>
        <span className="flex items-center justify-between px-2 py-2">
          <label className="text-sm font-medium text-slate-600" htmlFor="borderColor">Border Color</label>
          <input
            id="borderColor"
            type="color"
            value={borderColor}
            onChange={(e) => setProp((props: any) => props.borderColor = e.target.value)}
            className="border rounded-lg border-gray-300"
          />
        </span>
      </div>
    </div>
  );
};

CustomNavbar.craft = {
  props: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderBottom: 1,
    borderColor: '#e5e7eb',
  },
  related: {
    settings: CustomNavbarSettings,
  },
};