"use client";
import React from "react";
import { useNode } from "@craftjs/core";
import HoverableWrapper from "../wrappers/hoverWrapper";

interface ListProps {
  items: string[];
  listType?: "ul" | "ol";
  bulletColor?: string;
  textColor?: string;
  fontSize?: number;
}

interface CraftComponent extends React.FC<ListProps> {
  craft: {
    props: ListProps;
    related: {
      settings: React.FC;
    };
  };
}

export const CustomList: CraftComponent = ({
  items = ["Item 1", "Item 2", "Item 3"],
  listType = "ul",
  bulletColor = "#000000",
  textColor = "#000000",
  fontSize = 16,
}) => {
  const {
    connectors: { connect, drag },
    id,
  } = useNode((node) => ({
    id: node.id,
  }));

  const ListTag = listType === "ol" ? "ol" : "ul";

  return (
    <HoverableWrapper id={id} type="list">
      <div
        ref={(ref) => {
          if (ref) {
            connect(drag(ref));
          }
        }}
      >
        <ListTag
          style={{
            color: textColor,
            fontSize: `${fontSize}px`,
            paddingLeft: "20px",
            listStyleType: listType === "ol" ? "decimal" : "disc",
          }}
        >
          {items.map((item, index) => (
            <li key={index} style={{ color: bulletColor }}>
              <span style={{ color: textColor }}>{item}</span>
            </li>
          ))}
        </ListTag>
      </div>
    </HoverableWrapper>
  );
};

export const CustomListSettings: React.FC = () => {
  const {
    actions: { setProp },
    items,
    listType,
    bulletColor,
    textColor,
    fontSize,
  } = useNode((node) => ({
    items: node.data.props.items,
    listType: node.data.props.listType,
    bulletColor: node.data.props.bulletColor,
    textColor: node.data.props.textColor,
    fontSize: node.data.props.fontSize,
  }));

  return (
    <div className="flex flex-col space-y-4">
      <div className="border-b border-zinc-300 px-2 pt-2">
        <label className="text-sm text-zinc-900 font-semibold">List Properties</label>
        <span className="flex items-center justify-between px-[8px] ml-[8px] mr-[4px] py-[12px]">
          <label className="text-sm font-medium text-slate-600" htmlFor="listType">List Type</label>
          <select
            id="listType"
            value={listType}
            onChange={(e) => setProp((props: any) => (props.listType = e.target.value))}
            className="border border-slate-400 bg-slate-100 font-semibold text-sm px-2 py-1 rounded-md focus:border-slate-800 outline-none"
          >
            <option value="ul">Unordered</option>
            <option value="ol">Ordered</option>
          </select>
        </span>
        <span className="flex items-center justify-between px-[8px] ml-[8px] mr-[4px] py-[12px]">
          <label className="text-sm font-medium text-slate-600" htmlFor="items">Items</label>
          <textarea
            id="items"
            value={items.join("\n")}
            onChange={(e) => setProp((props: any) => (props.items = e.target.value.split("\n")))}
            className="border border-slate-400 w-[60%] bg-slate-100 font-semibold text-sm px-2 py-1 rounded-md focus:border-slate-800 outline-none"
            rows={5}
          />
        </span>
      </div>
      <div className="border-b border-zinc-300 px-2 pt-2">
        <label className="text-sm text-zinc-900 font-semibold">Styles</label>
        <span className="flex items-center justify-between px-[8px] ml-[8px] mr-[4px] py-[12px]">
          <label className="text-sm font-medium text-slate-600" htmlFor="bulletColor">Bullet Color</label>
          <input
            id="bulletColor"
            type="color"
            value={bulletColor}
            onChange={(e) => setProp((props: any) => (props.bulletColor = e.target.value))}
            className="w-[5rem] h-8 bg-slate-100 rounded-md focus:border-slate-800 outline-none"
          />
        </span>
        <span className="flex items-center justify-between px-[8px] ml-[8px] mr-[4px] py-[12px]">
          <label className="text-sm font-medium text-slate-600" htmlFor="textColor">Text Color</label>
          <input
            id="textColor"
            type="color"
            value={textColor}
            onChange={(e) => setProp((props: any) => (props.textColor = e.target.value))}
            className="w-[5rem] h-8 bg-slate-100 rounded-md focus:border-slate-800 outline-none"
          />
        </span>
        <span className="flex items-center justify-between px-[8px] ml-[8px] mr-[4px] py-[12px]">
          <label className="text-sm font-medium text-slate-600" htmlFor="fontSize">Font Size</label>
          <input
            id="fontSize"
            type="number"
            value={fontSize}
            onChange={(e) => setProp((props: any) => (props.fontSize = parseInt(e.target.value)))}
            className="border border-slate-400 w-[5rem] bg-slate-100 font-semibold text-sm px-2 py-1 rounded-md focus:border-slate-800 outline-none"
          />
        </span>
      </div>
    </div>
  );
};

CustomList.craft = {
  props: {
    items: ["Item 1", "Item 2", "Item 3"],
    listType: "ul",
    bulletColor: "#000000",
    textColor: "#000000",
    fontSize: 16,
  },
  related: {
    settings: CustomListSettings,
  },
};