"use client";
import React, { useState } from "react";
import { Node, useEditor, useNode } from "@craftjs/core";
import { motion, Variant } from "framer-motion";
import HoverableWrapper from "../wrappers/hoverWrapper";
import { Check, ChevronDown, Mail, MapPin, Phone } from "lucide-react";
import { Text } from "./Text";
import { CustomButton } from "./Button";
import SettingsControl from "../wrappers/settingControl";

import { Element as CraftElement } from "@craftjs/core";

interface LandingPageProps {
  title: string;
  subtitle: string;
  ctaText: string;
  backgroundImage: string;
}

interface CraftComponent extends React.FC<LandingPageProps> {
  craft: {
    props: {
      title: string;
      subtitle: string;
      ctaText: string;
      backgroundImage: string;
    };
    related: {
      settings: React.FC;
    };
  };
}


  
  const draggable = true;
  const droppable = true;

 export const ImageBackground = ({children, background}:any) => {
    const { connectors: {connect, drag} } = useNode();
    return (
      <div
      ref={(ref) => {
        if (ref) {
          connect(drag(ref));
        }
      }}
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="absolute inset-0 -z-10 opacity-10"
      >
        {children}
      </div>
    );
  };

  
 export const HeroSection = ({children}:any) => {
    const { connectors: {connect,drag} } = useNode();
    return (
      <section  ref={(ref) => {
        if (ref) {
          connect(drag(ref));
        }
      }} className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4 z-10">
          <div className="text-center">
            {children}
          </div>
        </div>
      </section>
    );
  };
  
export  const FeatureCard = ({title, description,children}:any) => {
    const { connectors: {connect, drag} } = useNode();
    return (
      <div
      ref={(ref) => {
        if (ref) {
          connect(drag(ref));
        }
      }}
        className="bg-gray-50 p-6 rounded-lg shadow-md"
      >
        <CraftElement  id="Feature-Card-Title" is={Text} text={title} fontSize={20} tag="h3" />
        <CraftElement  id="Feature-card-description" is={Text} text={description} fontSize={16} tag="p" />
        {children}
      </div>
    );
  };
  
 export const FeaturesSection = ({children}:any) => {
    const { connectors: {connect,drag} } = useNode();
    return (
      <section  ref={(ref) => {
        if (ref) {
          connect(drag(ref));
        }
      }} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <CraftElement id="Feature-section-title" is={Text} text="Our Amazing Features" fontSize={32} tag="h2" />
          <div className="grid md:grid-cols-3 gap-8">
            {children}
          </div>
        </div>
      </section>
    );
  };
  

export const LandingPage: CraftComponent = ({
  title = "Welcome to Our Brand",
  subtitle = "Discover the future of innovation",
  ctaText = "Get Started",
  backgroundImage = "/path-to-your-background-image.jpg",
}) => {
  const {
    connectors: { connect, drag },
    id,
  } = useNode((node) => ({
    id: node.id,
  }));

  const [activeTab, setActiveTab] = useState('monthly');

  const fadeInUp: Variant = {};

  const staggerChildren = {
    visible: { transition: { staggerChildren: 0.1 } }
  };


  return (
    <HoverableWrapper id={id} type="landingPage">
      <div
        ref={(ref) => {
          if (ref) {
            connect(drag(ref));
          }
        }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
       <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-900 font-sans">
      {/* Hero Section */}
      <CraftElement id="hero-section" is={HeroSection} canvas>
        <Text text={title} fontSize={40} />
        <Text text={subtitle} fontSize={20} />
        <CustomButton>{ctaText}</CustomButton>
        <CraftElement id="hero-background" is={ImageBackground} canvas background={backgroundImage}>
          {/* Image background content */}
        </CraftElement>
      </CraftElement>

      <CraftElement id="features-section" is={FeaturesSection} canvas>
        <CraftElement id="feature-card-1" is={FeatureCard} canvas title="Feature 1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        <CraftElement id="feature-card-2" is={FeatureCard} canvas title="Feature 2" description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        <CraftElement id="feature-card-3" is={FeatureCard} canvas title="Feature 3" description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris." />
      </CraftElement>
    </div>

      </div>

    </HoverableWrapper>
  );
};

export const LandingPageSettings: React.FC = () => {
  const {
    actions: { setProp },
    title,
    subtitle,
    ctaText,
    backgroundImage,
    nodeId
  } = useNode((node) => ({
    title: node.data.props.title,
    subtitle: node.data.props.subtitle,
    ctaText: node.data.props.ctaText,
    backgroundImage: node.data.props.backgroundImage,
    nodeId: node.data.props.nodeId
  }));

  return (
    <div className="flex flex-col space-y-4">
      <div className="border-b border-zinc-300 px-2 pt-2">
        <label className="text-sm text-zinc-900 font-semibold">Landing Page Properties</label>
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
          <label className="text-sm font-medium text-slate-600" htmlFor="subtitle">Subtitle</label>
          <input
            id="subtitle"
            type="text"
            value={subtitle}
            onChange={(e) => setProp((props: any) => (props.subtitle = e.target.value))}
            className="border border-slate-400 w-[60%] bg-slate-100 font-semibold text-sm px-2 py-1 rounded-md focus:border-slate-800 outline-none"
          />
        </span>
        <span className="flex items-center justify-between px-[8px] ml-[8px] mr-[4px] py-[12px]">
          <label className="text-sm font-medium text-slate-600" htmlFor="ctaText">CTA Text</label>
          <input
            id="ctaText"
            type="text"
            value={ctaText}
            onChange={(e) => setProp((props: any) => (props.ctaText = e.target.value))}
            className="border border-slate-400 w-[60%] bg-slate-100 font-semibold text-sm px-2 py-1 rounded-md focus:border-slate-800 outline-none"
          />
        </span>
        <span className="flex items-center justify-between px-[8px] ml-[8px] mr-[4px] py-[12px]">
          <label className="text-sm font-medium text-slate-600" htmlFor="backgroundImage">Background Image URL</label>
          <input
            id="backgroundImage"
            type="text"
            value={backgroundImage}
            onChange={(e) => setProp((props: any) => (props.backgroundImage = e.target.value))}
            className="border border-slate-400 w-[60%] bg-slate-100 font-semibold text-sm px-2 py-1 rounded-md focus:border-slate-800 outline-none"
          />
        </span>
      </div>
    </div>
  );
};

LandingPage.craft = {
  props: {
    title: "Welcome to Our Brand",
    subtitle: "Discover the future of innovation",
    ctaText: "Get Started",
    backgroundImage: "/path-to-your-background-image.jpg",
  },
  related: {
    settings: LandingPageSettings,
  },
};