"use client";
import React, { useState } from "react";
import { useNode } from "@craftjs/core";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import HoverableWrapper from "../wrappers/hoverWrapper";

interface TestimonialProps {
  testimonials: Array<{
    name: string;
    role: string;
    content: string;
    image: string;
  }>;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

interface CraftComponent extends React.FC<TestimonialProps> {
  craft: {
    props: TestimonialProps;
    related: {
      settings: React.FC;
    };
  };
}

const TestimonialCard = ({ name, role, content, image }:{name:any,role:any,content:any,image:any}) => (
  <div className="bg-white shadow-lg rounded-lg p-6 mx-4 my-8 flex flex-col items-center">
    <img src={image} alt={name} className="w-16 h-16 rounded-full mb-2" />
    <h3 className="font-bold">{name}</h3>
    <p className="text-gray-500">{role}</p>
    <p className="text-gray-600 text-center mt-4">{content}</p>
  </div>
);

export const TestimonialCarousel: CraftComponent = ({
  testimonials,
  autoPlay = false,
  autoPlayInterval = 5000,
}) => {
  const {
    connectors: { connect, drag },
    id,
  } = useNode((node) => ({
    id: node.id,
  }));

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  React.useEffect(() => {
    let interval: NodeJS.Timeout;
    if (autoPlay) {
      interval = setInterval(nextTestimonial, autoPlayInterval);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoPlay, autoPlayInterval]);

  return (
    <HoverableWrapper id={id} type="testimonial">
      <div
        ref={(ref) => {
          if (ref) {
            connect(drag(ref));
          }
        }}
        className="relative max-w-3xl mx-auto"
      >
        <TestimonialCard {...testimonials[currentIndex]} />
        <button 
          onClick={prevTestimonial} 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextTestimonial} 
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </HoverableWrapper>
  );
};

export const TestimonialCarouselSettings: React.FC = () => {
  const {
    actions: { setProp },
    testimonials,
    autoPlay,
    autoPlayInterval,
  } = useNode((node) => ({
    testimonials: node.data.props.testimonials,
    autoPlay: node.data.props.autoPlay,
    autoPlayInterval: node.data.props.autoPlayInterval,
  }));

  const handleTestimonialChange = (index: number, field: string, value: string) => {
    setProp((props: TestimonialProps) => {
      const newTestimonials = [...props.testimonials];
      newTestimonials[index] = { ...newTestimonials[index], [field]: value };
      props.testimonials = newTestimonials;
    });
  };

  const addTestimonial = () => {
    setProp((props: TestimonialProps) => {
      props.testimonials = [
        ...props.testimonials,
        { name: "", role: "", content: "", image: "" }
      ];
    });
  };

  const removeTestimonial = (index: number) => {
    setProp((props: TestimonialProps) => {
      props.testimonials = props.testimonials.filter((_, i) => i !== index);
    });
  };

  return (
    <div className="flex flex-col space-y-4">
      <div className="border-b border-zinc-300 px-2 pt-2">
        <label className="text-sm text-zinc-900 font-semibold">Carousel Settings</label>
        <span className="flex items-center justify-between px-[8px] ml-[8px] mr-[4px] py-[12px]">
          <label className="text-sm font-medium text-slate-600" htmlFor="autoPlay">Auto Play</label>
          <input
            id="autoPlay"
            type="checkbox"
            checked={autoPlay}
            onChange={(e) => setProp((props: TestimonialProps) => (props.autoPlay = e.target.checked))}
            className="w-4 h-4"
          />
        </span>
        <span className="flex items-center justify-between px-[8px] ml-[8px] mr-[4px] py-[12px]">
          <label className="text-sm font-medium text-slate-600" htmlFor="autoPlayInterval">Auto Play Interval (ms)</label>
          <input
            id="autoPlayInterval"
            type="number"
            value={autoPlayInterval}
            onChange={(e) => setProp((props: TestimonialProps) => (props.autoPlayInterval = parseInt(e.target.value)))}
            className="border border-slate-400 w-[5rem] bg-slate-100 font-semibold text-sm px-2 py-1 rounded-md focus:border-slate-800 outline-none"
          />
        </span>
      </div>
      <div className="border-b border-zinc-300 px-2 pt-2">
        <label className="text-sm text-zinc-900 font-semibold">Testimonials</label>
        {testimonials.map((testimonial:any, index:any) => (
          <div key={index} className="mb-4 p-2 border border-slate-300 rounded">
            <h4 className="font-semibold mb-2">Testimonial {index + 1}</h4>
            {Object.entries(testimonial).map(([field, value]) => (
              <span key={field} className="flex items-center justify-between px-[8px] ml-[8px] mr-[4px] py-[12px]">
                <label className="text-sm font-medium text-slate-600">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                <input
                  type="text"
                  value={testimonial[field]}
                  onChange={(e) => handleTestimonialChange(index, field, e.target.value)}
                  className="border border-slate-400 w-[60%] bg-slate-100 font-semibold text-sm px-2 py-1 rounded-md focus:border-slate-800 outline-none"
                />
              </span>
            ))}
            <button
              onClick={() => removeTestimonial(index)}
              className="mt-2 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          onClick={addTestimonial}
          className="mt-2 px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Testimonial
        </button>
      </div>
    </div>
  );
};

TestimonialCarousel.craft = {
  props: {
    testimonials: [
      {
        name: "John Doe",
        role: "CEO, TechCorp",
        content: "This product has revolutionized our workflow. Highly recommended!",
        image: "https://imgs.search.brave.com/xZJkUH12J2s5P9B2MUZmy0Go8v_7qRIMXW8lPyZqi9o/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvaW1hZ2VzLWlt/YWdlLWZpbGVzLTgv/MjQvcm91bmRfaW1h/Z2VfY2lyY2xlX3Bp/Y3R1cmVfcGhvdG9f/cGhvdG9ncmFwaHkt/MTI4LnBuZw"
      },
      {
        name: "Jane Smith",
        role: "Designer, CreativeCo",
        content: "The best tool I've used in years. It's intuitive and powerful.",
        image: "https://imgs.search.brave.com/xZJkUH12J2s5P9B2MUZmy0Go8v_7qRIMXW8lPyZqi9o/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvaW1hZ2VzLWlt/YWdlLWZpbGVzLTgv/MjQvcm91bmRfaW1h/Z2VfY2lyY2xlX3Bp/Y3R1cmVfcGhvdG9f/cGhvdG9ncmFwaHkt/MTI4LnBuZw"
      }
    ],
    autoPlay: false,
    autoPlayInterval: 5000,
  },
  related: {
    settings: TestimonialCarouselSettings,
  },
};