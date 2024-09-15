"use client"
import React, { useEffect, useRef, useState } from 'react';
import { useNode } from "@craftjs/core";
import HoverableWrapper from "../wrappers/hoverWrapper";

interface AnimatedGradientBackgroundProps {
  colorPalette: string;
  duration: number;
  children?: React.ReactNode;
  opacity?: number;
  margin?: number;
  padding?: number;
}

interface CraftComponent extends React.FC<AnimatedGradientBackgroundProps> {
  craft: {
    props: AnimatedGradientBackgroundProps;
    related: {
      settings: React.FC;
    };
  };
}

const colorPalettes = {
  sunset: ['#ff9a9e', '#fad0c4', '#ffecd2'],
  ocean: ['#48c6ef', '#6f86d6', '#a8edea'],
  forest: ['#78ffd6', '#a8ff78', '#e0ffcd'],
  lavender: ['#ddd6f3', '#faaca8', '#e6dee9'],
  peach: ['#fad0c4', '#ffd1ff', '#ffecd2'],
  berry: ['#ff9a9e', '#ff6a88', '#ff99ac'],
  mint: ['#84fab0', '#8fd3f4', '#aff1da'],
  aurora: ['#a18cd1', '#fbc2eb', '#b8e9ff'],
  desert: ['#f6d365', '#fda085', '#fee140'],
  cosmic: ['#3c1053', '#ad5389', '#e899dc']
};

export const AnimatedGradientBackground: CraftComponent = ({
  colorPalette = '',
  duration = 10000,
  children,
  margin,
  padding,
  opacity = 1
}) => {
  const gradientRef = useRef<HTMLDivElement | null>(null);
  const [colors, setColors] = useState(colorPalettes[colorPalette as keyof typeof colorPalettes] || colorPalettes.sunset);
  
  const {
    connectors: { connect, drag },
    id,
  } = useNode((node) => ({
    id: node.id,
    margin: node.data.props.margin,
    padding: node.data.props.padding,
    opacity: node.data.props.opacity
  }));

  useEffect(() => {
    setColors(colorPalettes[colorPalette as keyof typeof colorPalettes] || colorPalettes.sunset);
  }, [colorPalette,colorPalettes,colors,setColors]);

  useEffect(() => {
    const gradient = gradientRef.current;
    if (!gradient) return;

    let animationFrameId: number;

    const updateGradient = (timestamp: number) => {
      const normalizedTimestamp = (timestamp % duration) / duration;
      const gradientString = `linear-gradient(${normalizedTimestamp * 360}deg, ${colors.join(', ')})`;
      gradient.style.backgroundImage = gradientString;
      animationFrameId = requestAnimationFrame(updateGradient);
    };

    animationFrameId = requestAnimationFrame(updateGradient);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [colors, duration]);

  return (
    <HoverableWrapper id={id} type="gradient-background">
      <div
        ref={(ref) => {
          if (ref) {
            connect(drag(ref));
            gradientRef.current = ref;
          }
        }}
        style={{
          width: '100%',
          height: '100%',
          minHeight: '200px',
          position: 'relative',
          overflow: 'hidden',
          transition: 'background-image 0.5s ease',
          margin,
          padding,
          opacity,
        }}
      >
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
        }} />
        {children}
      </div>
    </HoverableWrapper>
  );
};

export const AnimatedGradientBackgroundSettings: React.FC = () => {
  const {
    actions: { setProp },
    colorPalette,
    duration,
    padding,
    margin,
    opacity,
    props
  } = useNode((node) => ({
    props: node.data.props,
    colorPalette: node.data.props.colorPalette,
    duration: node.data.props.duration,
    margin: node.data.props.margin,
    padding: node.data.props.padding,
    opacity: node.data.props.opacity
  }));

  const handleOpacityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProp((props: any) => (props.opacity = parseFloat(event.target.value)));
  };

  const handleColorPaletteChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setProp((props: AnimatedGradientBackgroundProps) => {
      props.colorPalette = e.target.value;
    });
  };

  return (
    <div className="flex flex-col space-y-4">
        <div className="border-b border-zinc-300 px-2 pt-2">
        <label className="text-sm text-zinc-900 font-semibold">Color Palette</label>
        <select
          value={props.colorPalette}
          onChange={handleColorPaletteChange}
          className="w-full border border-slate-400 bg-slate-100 font-semibold text-sm px-2 py-1 rounded-md focus:border-slate-800 outline-none mt-1"
        >
          <option value="sunset">Sunset</option>
          <option value="ocean">Ocean</option>
          <option value="forest">Forest</option>
          <option value="lavender">Lavender</option>
          <option value="peach">Peach</option>
          <option value="berry">Berry</option>
          <option value="mint">Mint</option>
          <option value="aurora">Aurora</option>
          <option value="desert">Desert</option>
          <option value="cosmic">Cosmic</option>
        </select>
      </div>
      <div className="border-b border-zinc-300 px-2 pt-2">
        <label className="text-sm text-zinc-900 font-semibold">Animation Duration (ms)</label>
        <input
          type="number"
          value={duration}
          onChange={(e) => setProp((props: AnimatedGradientBackgroundProps) => ({ ...props, duration: parseInt(e.target.value) }))}
          className="w-full border border-slate-400 bg-slate-100 font-semibold text-sm px-2 py-1 rounded-md focus:border-slate-800 outline-none mt-1"
        />
      </div>
      <div className="flex flex-col space-y-4">
  <div className="border-b border-zinc-300 px-2 pt-2">
  <label className="text-sm text-zinc-900 font-semibold">Styles</label>
  <span className="flex items-center justify-between px-[8px] ml-[8px] gap-2 mr-[4px] py-[12px]">
          <label className="text-sm font-medium text-slate-600" htmlFor="opacity">Opacity</label>
          <span className="bg-slate-200 border-slate-300 border flex gap-2 items-center max-w-max font-semibold p-1 text-sm rounded-md ml-auto">{Math.round(opacity * 100)}%</span>
          <input
            id="opacity"
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={opacity}
            onChange={handleOpacityChange}
            className="w-[40%] h-1 bg-blue-500 rounded-full appearance-none"
          />
        </span>

        <span className="flex items-center justify-between px-[8px] ml-[8px] mr-[4px] py-[12px]">
        <label className="text-sm font-medium text-slate-600" htmlFor="margin">Margin</label>
        <input
          id="margin"
          type="number"
          value={margin || 0}
          onChange={(e) => {
            const newValue = e.target.value;
            setProp((props: any) => (props.margin = parseInt(newValue)));
          }}
          className="border border-slate-400 w-[5rem] bg-slate-100 font-semibold text-sm px-2 py-1 rounded-md focus:border-slate-800 outline-none"
        />
      </span>

      {/* Padding */}
      <span className="flex items-center justify-between px-[8px] ml-[8px] mr-[4px] py-[12px]">
        <label className="text-sm font-medium text-slate-600" htmlFor="padding">Padding</label>
        <input
          id="padding"
          type="number"
          value={padding || 0}
          onChange={(e) => {
            const newValue = e.target.value;
            setProp((props: any) => (props.padding = parseInt(newValue)));
          }}
          className="border border-slate-400 w-[5rem] bg-slate-100 font-semibold text-sm px-2 py-1 rounded-md focus:border-slate-800 outline-none"
        />
      </span>
      </div>
      </div>
    </div>
  );
};

AnimatedGradientBackground.craft = {
  props: {
    colorPalette: 'sunset',
    duration: 10000,
    padding: 20
  },
  related: {
    settings: AnimatedGradientBackgroundSettings,
  },
};

export default AnimatedGradientBackground;