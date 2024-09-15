"use client";
import React from "react";
import { useNode } from "@craftjs/core";
import HoverableWrapper from "../wrappers/hoverWrapper";
import { cn } from "@/lib/utils";
import { Container } from "./Container";
import { CustomDiv } from "./Div";

interface CardProps {
  title?: string;
  description?: string;
  content?: string;
  footer?: string;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
}

interface CraftComponent extends React.FC<CardProps> {
  craft: {
    props: CardProps;
    related: {
      settings: React.FC;
    };
  };
}

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, style, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)}
      style={style}
      {...props}
    />
  )
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
  )
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("text-2xl font-semibold leading-none tracking-tight", className)} {...props} />
  )
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
  )
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  )
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
  )
);
CardFooter.displayName = "CardFooter";

export const CustomCard: CraftComponent = ({
  title = "Card Title",
  description = "Card Description",
  content = "Card Content",
  footer = "Card Footer",
  backgroundColor = "#ffffff",
  textColor = "#000000",
  borderColor = "#e5e7eb",
}) => {
  const {
    connectors: { connect, drag },
    id,
  } = useNode((node) => ({
    id: node.id,
  }));

  return (
    <HoverableWrapper id={id} type="card">
      <div
        ref={(ref) => {
          if (ref) {
            connect(drag(ref));
          }
        }}
      >
        <Card style={{ backgroundColor, color: textColor, borderColor }}>
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent>{content}</CardContent>
          <CardFooter>{footer}</CardFooter>
        </Card>
      </div>
    </HoverableWrapper>
  );
};

export const CustomCardSettings: React.FC = () => {
  const {
    actions: { setProp },
    title,
    description,
    content,
    footer,
    backgroundColor,
    textColor,
    borderColor,
  } = useNode((node) => ({
    title: node.data.props.title,
    description: node.data.props.description,
    content: node.data.props.content,
    footer: node.data.props.footer,
    backgroundColor: node.data.props.backgroundColor,
    textColor: node.data.props.textColor,
    borderColor: node.data.props.borderColor,
  }));

  return (
    <div className="flex flex-col space-y-4">
      <div className="border-b border-zinc-300 px-2 pt-2">
        <label className="text-sm text-zinc-900 font-semibold">Card Content</label>
        <span className="flex items-center justify-between px-[8px] ml-[8px] mr-[4px] py-[12px]">
          <label className="text-sm font-medium text-slate-600" htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setProp((props: any) => (props.title = e.target.value))}
            className="border border-slate-400 w-[60%] bg-slate-100 font-semibold text-sm px-2 py-1 rounded-md focus:border-slate-800 outline-none"
          />
        </span>
        <span className="flex items-center justify-between px-[8px] ml-[8px] mr-[4px] py-[12px]">
          <label className="text-sm font-medium text-slate-600" htmlFor="description">Description</label>
          <input
            id="description"
            type="text"
            value={description}
            onChange={(e) => setProp((props: any) => (props.description = e.target.value))}
            className="border border-slate-400 w-[60%] bg-slate-100 font-semibold text-sm px-2 py-1 rounded-md focus:border-slate-800 outline-none"
          />
        </span>
        <span className="flex items-center justify-between px-[8px] ml-[8px] mr-[4px] py-[12px]">
          <label className="text-sm font-medium text-slate-600" htmlFor="content">Content</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setProp((props: any) => (props.content = e.target.value))}
            className="border border-slate-400 w-[60%] bg-slate-100 font-semibold text-sm px-2 py-1 rounded-md focus:border-slate-800 outline-none"
            rows={3}
          />
        </span>
        <span className="flex items-center justify-between px-[8px] ml-[8px] mr-[4px] py-[12px]">
          <label className="text-sm font-medium text-slate-600" htmlFor="footer">Footer</label>
          <input
            id="footer"
            type="text"
            value={footer}
            onChange={(e) => setProp((props: any) => (props.footer = e.target.value))}
            className="border border-slate-400 w-[60%] bg-slate-100 font-semibold text-sm px-2 py-1 rounded-md focus:border-slate-800 outline-none"
          />
        </span>
      </div>
      <div className="border-b border-zinc-300 px-2 pt-2">
        <label className="text-sm text-zinc-900 font-semibold">Styles</label>
        <span className="flex items-center justify-between px-[8px] ml-[8px] mr-[4px] py-[12px]">
          <label className="text-sm font-medium text-slate-600" htmlFor="backgroundColor">Background Color</label>
          <input
            id="backgroundColor"
            type="color"
            value={backgroundColor}
            onChange={(e) => setProp((props: any) => (props.backgroundColor = e.target.value))}
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
          <label className="text-sm font-medium text-slate-600" htmlFor="borderColor">Border Color</label>
          <input
            id="borderColor"
            type="color"
            value={borderColor}
            onChange={(e) => setProp((props: any) => (props.borderColor = e.target.value))}
            className="w-[5rem] h-8 bg-slate-100 rounded-md focus:border-slate-800 outline-none"
          />
        </span>
      </div>
    </div>
  );
};

CustomCard.craft = {
  props: {
    title: "Card Title",
    description: "Card Description",
    content: "Card Content",
    footer: "Card Footer",
    backgroundColor: "#ffffff",
    textColor: "#000000",
    borderColor: "#e5e7eb",
  },
  related: {
    settings: CustomCardSettings,
  },
};