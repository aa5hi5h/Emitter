"use client";
import React, { useState, useEffect } from "react";
import { useNode } from "@craftjs/core";
import { ChevronLeft, ChevronRight } from "lucide-react";
import HoverableWrapper from "../wrappers/hoverWrapper";

interface CarouselProps {
  images: string[];
  autoSlide?: boolean;
  slideInterval?: number;
  showArrows?: boolean;
  showDots?: boolean;
  height?: string | number;
}

interface CraftComponent extends React.FC<CarouselProps> {
  craft: {
    props: CarouselProps;
    related: {
      settings: React.FC;
    };
  };
}

export const CustomCarousel: CraftComponent = ({
  images,
  autoSlide = true,
  slideInterval = 3000,
  showArrows = true,
  showDots = true,
  height = "400px",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const {
    connectors: { connect, drag },
    id,
  } = useNode((node) => ({
    id: node.id,
  }));

  useEffect(() => {
    if (!autoSlide) return;
    const slideTimer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, slideInterval);
    return () => clearInterval(slideTimer);
  }, [autoSlide, images.length, slideInterval]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <HoverableWrapper id={id} type="carousel">
      <div
        ref={(ref) => {
          if (ref) {
            connect(drag(ref));
          }
        }}
        className="relative w-full overflow-hidden rounded-lg shadow-lg"
        style={{ height }}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover flex-shrink-0"
            />
          ))}
        </div>
        {showArrows && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={goToNext}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}
        {showDots && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-white" : "bg-white bg-opacity-50"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </HoverableWrapper>
  );
};

export const CustomCarouselSettings: React.FC = () => {
  const {
    actions: { setProp },
    images,
    autoSlide,
    slideInterval,
    showArrows,
    showDots,
    height,
  } = useNode((node) => ({
    images: node.data.props.images,
    autoSlide: node.data.props.autoSlide,
    slideInterval: node.data.props.slideInterval,
    showArrows: node.data.props.showArrows,
    showDots: node.data.props.showDots,
    height: node.data.props.height,
  }));

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImages = Array.from(files).map((file) => URL.createObjectURL(file));
      setProp((props: any) => (props.images = [...props.images, ...newImages]));
    }
  };

  return (
    <div className="flex flex-col space-y-4">
      <div className="border-b border-zinc-300 px-2 pt-2">
        <label className="text-sm text-zinc-900 font-semibold">Carousel Images</label>
        <div className="flex flex-wrap gap-2 mt-2">
          {images.map((img:any, index:any) => (
            <img key={index} src={img} alt={`Thumbnail ${index + 1}`} className="w-16 h-16 object-cover rounded" />
          ))}
        </div>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageUpload}
          className="mt-2 text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
      </div>
      <div className="border-b border-zinc-300 px-2 pt-2">
        <label className="text-sm text-zinc-900 font-semibold">Carousel Settings</label>
        <span className="flex items-center justify-between px-[8px] ml-[8px] mr-[4px] py-[12px]">
          <label className="text-sm font-medium text-slate-600" htmlFor="autoSlide">Auto Slide</label>
          <input
            id="autoSlide"
            type="checkbox"
            checked={autoSlide}
            onChange={(e) => setProp((props: any) => (props.autoSlide = e.target.checked))}
            className="w-4 h-4"
          />
        </span>
        <span className="flex items-center justify-between px-[8px] ml-[8px] mr-[4px] py-[12px]">
          <label className="text-sm font-medium text-slate-600" htmlFor="slideInterval">Slide Interval (ms)</label>
          <input
            id="slideInterval"
            type="number"
            value={slideInterval}
            onChange={(e) => setProp((props: any) => (props.slideInterval = parseInt(e.target.value)))}
            className="border border-slate-400 w-20 bg-slate-100 font-semibold text-sm px-2 py-1 rounded-md focus:border-slate-800 outline-none"
          />
        </span>
        <span className="flex items-center justify-between px-[8px] ml-[8px] mr-[4px] py-[12px]">
          <label className="text-sm font-medium text-slate-600" htmlFor="showArrows">Show Arrows</label>
          <input
            id="showArrows"
            type="checkbox"
            checked={showArrows}
            onChange={(e) => setProp((props: any) => (props.showArrows = e.target.checked))}
            className="w-4 h-4"
          />
        </span>
        <span className="flex items-center justify-between px-[8px] ml-[8px] mr-[4px] py-[12px]">
          <label className="text-sm font-medium text-slate-600" htmlFor="showDots">Show Dots</label>
          <input
            id="showDots"
            type="checkbox"
            checked={showDots}
            onChange={(e) => setProp((props: any) => (props.showDots = e.target.checked))}
            className="w-4 h-4"
          />
        </span>
        <span className="flex items-center justify-between px-[8px] ml-[8px] mr-[4px] py-[12px]">
          <label className="text-sm font-medium text-slate-600" htmlFor="height">Height</label>
          <input
            id="height"
            type="text"
            value={height}
            onChange={(e) => setProp((props: any) => (props.height = e.target.value))}
            className="border border-slate-400 w-20 bg-slate-100 font-semibold text-sm px-2 py-1 rounded-md focus:border-slate-800 outline-none"
          />
        </span>
      </div>
    </div>
  );
};

CustomCarousel.craft = {
  props: {
    images: [],
    autoSlide: true,
    slideInterval: 3000,
    showArrows: true,
    showDots: true,
    height: "400px",
  },
  related: {
    settings: CustomCarouselSettings,
  },
};