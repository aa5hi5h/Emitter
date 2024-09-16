import React from "react";
import { useNode, Element } from "@craftjs/core";
import { Button } from "@/components/ui/button";
import { Box, ChevronRight, Image, Menu } from "lucide-react";
import { Text } from "../Text";
import { CustomButton } from "../Button";
import { TemplateText } from "./utils/TemplateText";
import { animate, useMotionValue,motion } from "framer-motion"
import { useState,useEffect } from "react"
import useMeasure from "react-use-measure"
import {  TemplateDiv } from "./utils/TemplateDiv";
import { TemplateButton } from "./utils/TemplateButton";
import { TemplateImage } from "./utils/TemplateImage";


export const EcommerseNavbar = ({ viewMode , children }:any) => {
    const { connectors: { connect, drag } } = useNode();
    
    return (
      <div ref={(ref) => {
        if (ref) {
          connect(drag(ref));
        }
      }} className="flex justify-between items-center p-4 bg-white shadow-sm">
        <div className="text-xl font-bold">
            <Text text="logo" />
        </div>
        {viewMode === "monitor" ? (
          <div className="hidden md:flex space-x-4">
            {children}
            <Element canvas is={CustomButton} id="Ecom-Nav-Button" children={"Home"} />
            <Element canvas is={CustomButton} id="Ecom-Nav-Button-2" children={"Product"} />
            <Element canvas is={CustomButton} id="Ecom-Nav-Button-3" children={"About"} />
            <Element canvas is={CustomButton} id="Ecom-Nav-Button-4" children={"Contact"} />
          </div>
        ) : (
            <div className="flex gap-2">
          <Element canvas is={CustomButton} id="Ecom-mob-Nav" children={"Button"}  />
          <Menu />
          </div>
        )}
        <Element canvas is={CustomButton} id="Ecom-mob-Nav-2" children={"SignIn"} />
      </div>
    );
  };



export  const EcommerseFooter = ({ viewMode,children }:any) => {
    const { connectors: { connect, drag } } = useNode();
    
    return (
      <div ref={(ref) => {
        if (ref) {
          connect(drag(ref));
        }
      }} className="bg-gray-100 p-4 mt-8">
        <div className={`flex ${viewMode === 'mobile' ? 'flex-col' : 'flex-row justify-between'} items-center`}>
            <div className="text-sm text-gray-600">
                <Element className="text-sm text-gray-600" canvas is={TemplateText} id="Ecom-Footer-1" children="&copy; 2024 Your Company. All rights reserved." />
            </div>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                <Element className="text-sm text-gray-600 hover:text-gray-900" is={TemplateText} canvas id="Ecom-Footer-2" children="Privacy Policy" />
                </a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                <Element className="text-sm text-gray-600 hover:text-gray-900" is={TemplateText} id="Ecom-Footer-3" canvas children="Terms of Service" />
            </a>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-3 lg:gap-x-8">
            {children}
          </div>
        </div>
      </div>
    );
  };

// Main EcommerceLanding component
const EcommerceNewLandingTemplate = ({ viewMode }:any) => {
  const { connectors: { connect, drag } } = useNode();

  const ItemsList = [
    {name:1},{name:1},{name:1},{name:1}, {name:1},{name:1},{name:1},{name:1},
]

  
const FAST_DURATION = 5
const SLOW_DURATION = 35

const CaraouselItemsList = [
    {name:1},{name:1},{name:1},{name:1},{name:1},{name:1},{name:1}, {name:1},{name:1}
]

const storeList = [
    {name:1},{name:1},{name:1},{name:1},{name:1},{name:1}
]

const [mustFinish,setMustFinish] = useState(false)
const [duration,setDuration] = useState(FAST_DURATION)
const [render,setRender] = useState(false)

let [ref,{width}] = useMeasure()

const xStyles = useMotionValue(0)

useEffect(() => {
    let carouselControl;
    let finishPosition = -width/2 -50;

    if (mustFinish) {
      carouselControl = animate(xStyles, [xStyles.get(), finishPosition], {
        ease: "linear",
        duration: duration * (1 - xStyles.get() / finishPosition),
        onComplete: () => {
          setMustFinish(false);
          setRender(!render)
        },
      });
    } else {
      carouselControl = animate(xStyles, [0, finishPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return () => carouselControl?.stop();
  }, [xStyles, width, duration, mustFinish,render]);

  return (
    <div ref={(ref) => {
        if (ref) {
          connect(drag(ref));
        }
      }} className={`flex flex-col space-y-4 w-full`}>
      { viewMode === "monitor" ? 
      <Element is="div"  id="Ecommerse-Template" canvas >
      <Element is={TemplateDiv} id="ecommerce-main-container" className={`flex flex-col space-y-4 w-full`} canvas>
  <Element is={TemplateDiv} id="ecommerce-content-wrapper" className="p-6" canvas>
    <Element is={TemplateDiv} id="ecommerce-hero-section" className="flex flex-col space-y-4 max-w-4xl mb-[14.5rem] mx-auto mt-[4.3rem]" canvas>
      <Element is={TemplateText} id="ecommerce-hero-title" className=" font-bold text-center tracking-tight" canvas>
        Foundation for your commerce platform
      </Element>
      <Element is={TemplateText} id="ecommerce-hero-subtitle" className="text-slate-800 text-center pb-[1.1rem]" canvas>
        "Building and customizing your own Ecommerce platform with ease."
      </Element>
      <Element is={TemplateDiv} id="ecommerce-hero-buttons" className="flex justify-center gap-x-4" canvas>
        <Element is={TemplateButton} id="ecommerce-hero-button-1" canvas>
          Button
        </Element>
        <Element is={TemplateButton} id="ecommerce-hero-button-2" className="border-slate-300" canvas>
          Button
        </Element>
      </Element>
    </Element>
    <Element is={TemplateDiv} id="ecommerce-featured-products" className="flex flex-col space-y-4 mb-[8rem]" canvas>
      <Element is={TemplateDiv} id="ecommerce-featured-header" className="flex justify-between items-center" canvas>
        <Element is={TemplateDiv} id="ecommerce-featured-title-wrapper" className="flex flex-col space-y-2" canvas>
          <Element is={TemplateText} id="ecommerce-featured-title" className=" font-semibold tracking-tight" canvas>
            Featured Products
          </Element>
          <Element is={TemplateText} id="ecommerce-featured-subtitle" className=" text-slate-700" canvas>
            lore mipsum Neque porro quisquam est qui dolorem ipsum quia dolor
          </Element>
        </Element>
        <Element is={TemplateDiv} id="ecommerce-featured-view-all" className="flex gap-x-2" canvas>
          <Element is={TemplateButton} id="ecommerce-featured-view-all-button" canvas>
            view all products
          </Element>
          <Element is={ChevronRight} id="ecommerce-featured-chevron" canvas />
        </Element>
      </Element>
      <Element is={TemplateDiv} id="ecommerce-featured-grid" className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8" canvas>
        {ItemsList.map((item, index) => (
          <Element is='div' id={`ecommerce-featured-item-${index}`} key={index} canvas>
            <Element is={TemplateDiv} id={`ecommerce-featured-item-wrapper-${index}`} className="rounded-lg mt-4" canvas>
              <Element is={TemplateDiv} id={`ecommerce-featured-item-content-${index}`} className="flex flex-col h-[50vh] shadow-sm w-full" canvas>
                <Element is={TemplateDiv} id={`ecommerce-featured-item-image-${index}`} className="h-[30vh] w-full flex border-zinc-300 border-2 bg-slate-200 rounded-t-lg justify-center items-center" canvas>
                  <Element is={TemplateImage} id={`ecommerce-featured-item-image-icon-${index}`} size={36} canvas />
                </Element>
                <Element is={TemplateDiv} id={`ecommerce-featured-item-details-${index}`} className="flex flex-col p-3 border-2 border-slate-200 rounded-b-lg" canvas>
                  <Element is={TemplateText} id={`ecommerce-featured-item-name-${index}`} className=" font-semibold tracking-tight" canvas>
                    Item's name
                  </Element>
                  <Element is={TemplateText} id={`ecommerce-featured-item-price-${index}`} className=" font-medium" canvas>
                    $$$
                  </Element>
                  <Element is={TemplateDiv} id={`ecommerce-featured-item-button-wrapper-${index}`} className="flex justify-between w-full gap-2 items-center mt-4" canvas>
                    <Element is={TemplateButton} id={`ecommerce-featured-item-button-${index}`} className="w-full  transition-all" canvas>
                      Add to cart
                    </Element>
                  </Element>
                </Element>
              </Element>
            </Element>
          </Element>
        ))}
      </Element>
    </Element>
    <Element is={TemplateDiv} id="ecommerce-categories" className="flex flex-col space-y-4 mb-[4rem]" canvas>
      <Element is={TemplateDiv} id="ecommerce-categories-header" className="flex justify-between items-center" canvas>
        <Element is={TemplateDiv} id="ecommerce-categories-title-wrapper" className="flex flex-col space-y-2" canvas>
          <Element is={TemplateText} id="ecommerce-categories-title" className=" font-semibold tracking-tight" canvas>
            Featured Categories
          </Element>
          <Element is={TemplateText} id="ecommerce-categories-subtitle" className=" text-slate-700" canvas>
            lore mipsum Neque porro quisquam est qui dolorem ipsum quia dolor
          </Element>
        </Element>
        <Element is={TemplateDiv} id="ecommerce-categories-view-all" className="flex gap-x-2" canvas>
          <Element is={TemplateButton} id="ecommerce-categories-view-all-button" canvas>
            view all items
          </Element>
          <Element is={ChevronRight} id="ecommerce-categories-chevron" size={18} canvas />
        </Element>
      </Element>
      <Element is={TemplateDiv} id="ecommerce-categories-grid" className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8" canvas>
        {ItemsList.map((item, index) => (
          <Element is={TemplateDiv} id={`ecommerce-category-${index}`} key={index} className="border-2 border-slate-300 p-4 mt-4 bg-slate-200 rounded-lg shadow-sm" canvas>
            <Element is={TemplateDiv} id={`ecommerce-category-content-${index}`} className="flex flex-col space-y-8 cursor-pointer" canvas>
              <Element is={TemplateDiv} id={`ecommerce-category-details-${index}`} className="flex flex-col space-y-1" canvas>
                <Element is={TemplateText} id={`ecommerce-category-name-${index}`} className=" font-semibold tracking-tight" canvas>
                  item's name
                </Element>
                <Element is={TemplateText} id={`ecommerce-category-description-${index}`} className=" font-medium" canvas>
                  description
                </Element>
              </Element>
              <Element is={TemplateDiv} id={`ecommerce-category-products-${index}`} className="flex gap-2 items-center" canvas>
                <Element is={Box} id={`ecommerce-category-box-icon-${index}`} size={18} canvas />
                <Element is={TemplateText} id={`ecommerce-category-product-count-${index}`} className="font-semibold " canvas>
                  "X" products
                </Element>
              </Element>
            </Element>
          </Element>
        ))}
      </Element>
    </Element>
  </Element>
</Element>
  </Element>
   : <TemplateDiv className={`flex flex-col space-y-4 w-full`}>
            <EcommerseNavbar viewMode="mobile" />
            <TemplateDiv className="p-4">
            <TemplateDiv className="flex flex-col space-y-4 max-w-4xl mb-[14.5rem] mx-auto mt-[4.3rem]">
                    <TemplateText className="text-3xl font-bold text-center tracking-tight">Foundation for your commerce platform</TemplateText>
                    <TemplateText className="text-slate-800 text-sm text-center pb-[1.1rem]">"Building and customizing your own Ecommerce platform with ease."</TemplateText>
                        <TemplateDiv className="flex justify-center gap-x-4">
                            <TemplateButton>Button</TemplateButton>
                            <TemplateButton className="border-slate-300">Button</TemplateButton>
                        </TemplateDiv>
            </TemplateDiv>
            <TemplateDiv className="flex flex-col space-y-4 mb-[8rem]">
                <TemplateDiv className="flex justify-between gap-x-2">
                    <TemplateDiv className="flex flex-col space-y-1">
                        <TemplateText className="text-2xl font-bold tracking-tight">Featured Prodcuts</TemplateText>
                        <TemplateText className="text-sm text-slate-700">lore mipsum Neque m ipsum quia dolor</TemplateText>
                    </TemplateDiv>
                    <TemplateDiv className="flex mt-[6px]" >
                    <TemplateButton className="flex mt-[6px]">
                        view
                    </TemplateButton>
                    <ChevronRight size={18} />
                    </TemplateDiv>
                </TemplateDiv>
                <TemplateDiv className="overflow-hidden">
                <TemplateDiv className="max-w-7xl mx-auto">
                    <motion.div className=" w-full flex gap-x-8" ref={ref} style={{x:xStyles}}
                onHoverStart={() => {
                    setMustFinish(true)
                    setDuration(SLOW_DURATION)
                }}
                onHoverEnd={() => {
                    setMustFinish(true)
                    setDuration(FAST_DURATION)
                }} >
                    {
                        [...CaraouselItemsList,...CaraouselItemsList].map((item,index) => (
                            <TemplateDiv key={index} className="mt-[1.3rem]">
                            <TemplateDiv className="relative hover:cursor-pointer overflow-hidden h-[50vh] min-w-[37vh]">
      <TemplateDiv className="rounded-lg">
        <TemplateDiv className="flex flex-col h-[50vh] shadow-sm w-[37vh]">
          <TemplateDiv className="h-[40vh] w-full flex border-slate-300 border-2 bg-slate-200 opacity-40 rounded-t-lg justify-center items-center">
            <Image size={36}/>
          </TemplateDiv>
          <TemplateDiv className="flex flex-col p-3 border-2 border-slate-200 rounded-b-lg">
            <TemplateText className="text-xl font-semibold tracking-tight">name</TemplateText>
            <TemplateText className="text-sm font-medium">price</TemplateText>
            <TemplateDiv className="flex justify-between w-full gap-2 items-center mt-4">
              <TemplateButton  className="w-full bg-slate-200 hover:bg-slate-300 transition-all">
                Add to cart
              </TemplateButton>
            </TemplateDiv>
          </TemplateDiv>
        </TemplateDiv>
      </TemplateDiv>
    </TemplateDiv>
                            </TemplateDiv>
                        )

                        )
                    }
                    </motion.div>
                    </TemplateDiv>
                </TemplateDiv>
            </TemplateDiv>
            <TemplateDiv className="flex flex-col space-y-4 mb-[4rem]">
                <TemplateDiv className="flex justify-between gap-x-2 items-center">
                    <TemplateDiv className="flex flex-col space-y-1">
                        <TemplateText className="text-2xl font-bold tracking-tight">Featured shops</TemplateText>
                        <TemplateText className="text-sm text-slate-700">lore mipsum Neque quia dolor</TemplateText>
                    </TemplateDiv>
                    <TemplateButton className="flex">
                        view
                     </TemplateButton>
                </TemplateDiv>
                <TemplateDiv className="grid grid-cols-2  gap-4 mt-8">
                    {
                        storeList.map((item,index) => (
                            <TemplateDiv className="border-2 border-slate-300 p-4 mt-4 bg-slate-200 rounded-lg shadow-sm">
      <TemplateDiv className="flex flex-col space-y-8 cursor-pointer">
        <TemplateDiv className="flex flex-col space-y-1">
          <TemplateText className="text-xl font-semibold tracking-tight">item's name</TemplateText>
          <TemplateText className="text-sm text-gray-700 font-medium">description</TemplateText>
        </TemplateDiv>
        <TemplateDiv className="flex gap-2 items-center">
          <Box size={18}/>
          <TemplateText className="text-sm font-semibold text-gray-700">"X" products</TemplateText>
        </TemplateDiv>
      </TemplateDiv>
    </TemplateDiv>
                        )

                        )
                    }
                    </TemplateDiv>
            </TemplateDiv>
            <EcommerseFooter viewMode="mobile" />
        </TemplateDiv>
        </TemplateDiv>}
          
     </div>
  );
};

EcommerceNewLandingTemplate.craft = {
  props: {
    viewMode: "monitor",
  },
  related: {
    settings: () => {
      return (
        <div>
          <h2>Ecommerce Landing Page Settings</h2>
          {/* Add settings controls here */}
        </div>
      );
    },
  },
};

export default EcommerceNewLandingTemplate;