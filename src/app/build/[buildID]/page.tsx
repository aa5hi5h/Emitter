"use client";

import ComponentsPannel from "@/components/Pannel/Components";
import EditorPannel from "@/components/Pannel/Editor";
import PropertisePannel from "@/components/Pannel/Propertise";
import { Editor, useEditor } from "@craftjs/core";
import { Text } from "../../../components/Pannel/Components/Props/Text";
import { Container } from "@/components/Pannel/Components/Props/Container";
import { CustomButton } from "@/components/Pannel/Components/Props/Button";
import { CustomImage } from "@/components/Pannel/Components/Props/Image";
import { CustomBanner } from "@/components/Pannel/Components/Props/Banner";
import { CustomDiv } from "@/components/Pannel/Components/Props/Div";
import { HoverProvider } from "../../Context/hoverContext";
import { SelectionProvider } from "../../Context/selectionContext";
import { ColorPickerProvider } from "../../Context/ColorPickerContext";
import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { Id } from "../../../../convex/_generated/dataModel";
import React, { useEffect, useState } from "react";
import { EmptyCanvas } from "@/components/Pannel/Components/Props/EmptyCanvas";
import { CanvasProvider, useCanvas } from '../../Context/CanvasContext';
import { CustomInput } from "@/components/Pannel/Components/Props/Input";
import { CustomList } from "@/components/Pannel/Components/Props/List";
import { CustomCard } from "@/components/Pannel/Components/Props/Card";
import { CustomNavbar } from "@/components/Pannel/Components/Props/Navbar";
import { CustomVideo } from "@/components/Pannel/Components/Props/Video";
import { CustomCarousel } from "@/components/Pannel/Components/Props/Carousel";
import { TestimonialCarousel } from "@/components/Pannel/Components/Props/Testimonial";
import { AccordionFAQ } from "@/components/Pannel/Components/Props/Faq";
import AnimatedGradientBackground from "@/components/Pannel/Components/Props/Gradient";
import { MultiStepForm } from "@/components/Pannel/Components/Props/Form";
import { FeatureCard, FeaturesSection, HeroSection, ImageBackground, LandingPage } from "@/components/Pannel/Components/Props/Landing";
import { PricingSection } from "@/components/Pannel/Components/Props/Pricing";
import { TemplateText } from "@/components/Pannel/Components/Props/Themes/utils/TemplateText";
import { TemplateDiv } from "@/components/Pannel/Components/Props/Themes/utils/TemplateDiv";
import EcommerceNewLandingTemplate from "@/components/Pannel/Components/Props/Themes/EcomLanding";
import { ArrowUpRight, Box, ChevronRight, CircleUser, Image, Terminal, Triangle } from "lucide-react";
import { TemplateImage } from "@/components/Pannel/Components/Props/Themes/utils/TemplateImage";
import LmsLandingTemplate from "@/components/Pannel/Components/Props/Themes/LmsTemplate";
import BlogLandingTemplate from "@/components/Pannel/Components/Props/Themes/BlogLanging";
import StoreCollectionTemplate from "@/components/Pannel/Components/Props/Themes/Stores";
import { MotionTemplateDiv } from "@/components/Pannel/Components/Props/Themes/utils/TemplateMotionDiv";
import BlogDetailTemplate from "@/components/Pannel/Components/Props/Themes/BlogDetail";
import { BedDouble, CableCar, Crown, Gem, HandPlatter, Hotel, Menu, Palmtree, Soup, Star, TentTree } from "lucide-react"
import RentalLandingTemplate from "@/components/Pannel/Components/Props/Themes/RentalLanding";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { resolver } from "../resolver";
import { Palette } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';


interface BuildProjectProps{
  params:{
    buildID: Id<"projects">
  }
}

const Build = ({params}: BuildProjectProps) =>  {

  const { buildID } = params;
  console.log("BuildID:", buildID)


  const project = useQuery(api.project.getProject, { projectId:buildID });
  const { checkIfCanvasEmpty } = useCanvas();

  const [activePanel, setActivePanel] = useState<string | null >(null);
  const [showAlert, setShowAlert] = useState(true);

  const togglePanel = (panel:any) => {
    setActivePanel(activePanel === panel ? null : panel);
  };

  if(!project){
    return null
  }

  const dismissAlert = () => {
    setShowAlert(false);
    localStorage.setItem('mobileAlertShown', 'true');
  };
  
  return (
    <SelectionProvider>
      <HoverProvider>
        <ColorPickerProvider>
        <Editor resolver={resolver} onNodesChange={checkIfCanvasEmpty}>
      <div className="flex flex-col h-[90vh] md:grid md:grid-cols-6">

      {showAlert && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center md:hidden">
                  <div className="bg-yellow-50 p-6 rounded-lg shadow-lg max-w-sm w-full mx-4">
                    <div className="flex items-center mb-4">
                      <Terminal className="h-6 w-6 text-yellow-400 mr-2" />
                      <AlertTitle className="text-lg font-semibold">Tip</AlertTitle>
                    </div>
                    <AlertDescription className="mb-4 text-sm">
                      For easier navigation and a better experience consider using a larger screen if possible.
                    </AlertDescription>
                    <Button 
                      variant="default" 
                      size="sm" 
                      onClick={dismissAlert} 
                      className="w-full"
                    >
                      Got it
                    </Button>
                  </div>
                </div>
              )}
        {/* Mobile Controls */}
        <div className="md:hidden flex justify-between p-2 border-b">
          <button 
            onClick={() => togglePanel('components')} 
            className={`p-2 ${activePanel === 'components' ? 'bg-gray-200' : ''}`}
          >
            <Menu size={24} />
          </button>
          <button 
            onClick={() => togglePanel('properties')} 
            className={`p-2 ${activePanel === 'properties' ? 'bg-gray-200' : ''}`}
          >
            <Palette size={24} />
          </button>
        </div>

        {/* Components Panel */}
        <div className={`${activePanel === 'components' ? 'block' : 'hidden'} md:block md:col-span-1 border-r border-slate-300 h-full overflow-auto`}>
          <ComponentsPannel />
        </div>

        {/* Editor Panel */}
        <div className="flex-grow md:col-span-4 relative overflow-hidden border-r border-slate-300 h-full">
          <EditorPannel buildID={project._id} project={project} savedState={project.savedState} />
        </div>

        {/* Properties Panel */}
        <div className={`${activePanel === 'properties' ? 'block' : 'hidden'} md:block md:col-span-1 h-full overflow-auto`}>
          <PropertisePannel activePanel={activePanel} setActivePanel={setActivePanel} />
        </div>
      </div>
    </Editor>
        </ColorPickerProvider>
      </HoverProvider>
    </SelectionProvider>
  );
}

export default Build