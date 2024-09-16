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
import { TemplateImage } from "./utils/TemplateImage";
import { CustomInput } from "../Input";






export  const EcommerseFooter = ({children }:any) => {
    const { connectors: { connect, drag } } = useNode();
    
    return (
      <div ref={(ref) => {
        if (ref) {
          connect(drag(ref));
        }
      }} className="bg-gray-100 p-4 mt-8">
        <div className={`flex items-center`}>
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
const EcommerceNewLandingTemplate = () => {
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
      <Element is={TemplateDiv} className="" id="learning-platform-main" canvas>
     <Element is={TemplateDiv} id="learning-platform-header" className="p-4" canvas>
       <Element is={TemplateDiv} id="learning-platform-header-content" className="flex items-center justify-between" canvas>
         <Element is={TemplateText} id="learning-platform-logo" className=" font-bold tracking-tight" canvas>Logo</Element>
         <Element is={TemplateDiv} id="learning-platform-nav" className="flex items-center gap-x-4" canvas>
           <Element is={TemplateDiv} id="learning-platform-nav-links" className="flex gap-x-2" canvas>
             <Element is={TemplateText} id="learning-platform-nav-home" canvas>Home</Element>
             <Element is={TemplateText} id="learning-platform-nav-contact" canvas>Contact</Element>
             <Element is={TemplateText} id="learning-platform-nav-about" canvas>About</Element>
           </Element>
           <Element is={CustomButton} id="learning-platform-login-button" canvas>Login</Element>
         </Element>
       </Element>
     </Element>
      <Element is={TemplateDiv} id="ecommerce-main-container" className={`flex flex-col space-y-4 w-full`} canvas>
  <Element is={TemplateDiv} id="ecommerce-content-wrapper" className="p-6" canvas>
    <Element is={TemplateDiv} id="ecommerce-hero-section" className="flex flex-col space-y-4 max-w-4xl mb-[14.5rem] mx-auto mt-[4.3rem]" canvas>
      <Element is={TemplateText} id="ecommerce-hero-title" className=" font-bold text-center tracking-tight" canvas>
        Foundation for your commerce platform
      </Element>
      <Element is={TemplateText} id="ecommerce-hero-subtitle" className=" text-center pb-[1.1rem]" canvas>
      &quot;Building and customizing your own Ecommerce platform with ease.&quot;
      </Element>
      <Element is={TemplateDiv} id="ecommerce-hero-buttons" className="flex justify-center gap-x-4" canvas>
        <Element is={CustomButton} id="ecommerce-hero-button-1" canvas>
          Button
        </Element>
        <Element is={CustomButton} id="ecommerce-hero-button-2" className="border-slate-300" canvas>
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
          <Element is={CustomButton} id="ecommerce-featured-view-all-button" canvas>
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
                    Item&apos;s name
                  </Element>
                  <Element is={TemplateText} id={`ecommerce-featured-item-price-${index}`} className=" font-medium" canvas>
                    $$$
                  </Element>
                  <Element is={TemplateDiv} id={`ecommerce-featured-item-button-wrapper-${index}`} className="flex justify-between w-full gap-2 items-center mt-4" canvas>
                    <Element is={CustomButton} id={`ecommerce-featured-item-button-${index}`} className="w-full  transition-all" canvas>
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
          <Element is={CustomButton} id="ecommerce-categories-view-all-button" canvas>
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
                  item&apos;s name
                </Element>
                <Element is={TemplateText} id={`ecommerce-category-description-${index}`} className=" font-medium" canvas>
                  description
                </Element>
              </Element>
              <Element is={TemplateDiv} id={`ecommerce-category-products-${index}`} className="flex gap-2 items-center" canvas>
                <Element is={Box} id={`ecommerce-category-box-icon-${index}`} size={18} canvas />
                <Element is={TemplateText} id={`ecommerce-category-product-count-${index}`} className="font-semibold " canvas>
                &quot;X&quot; products
                </Element>
              </Element>
            </Element>
          </Element>
        ))}
      </Element>
      <Element is={TemplateDiv} id="learning-platform-footer" className="p-3 flex w-full flex-col mb-[2rem]" canvas>
       <Element is={TemplateDiv} id="learning-platform-footer-divider" className="w-full mt-[3rem] h-[1px] border-gray-700 my-[3rem]" canvas />
       <Element is={TemplateDiv} id="learning-platform-footer-content" className="flex flex-col md:flex-row space-y-8 mb-[2rem] md:space-y-0 justify-between items-start" canvas>
         <Element is={TemplateText} id="learning-platform-footer-logo" className="font-bold tracking-tight cursor-pointer pr-8" canvas>Logo</Element>
         <Element is={TemplateDiv} id="learning-platform-footer-links" className="flex gap-12 items-center" canvas>
           {[1, 2].map((columnIndex) => (
             <Element is={TemplateDiv} id={`learning-platform-footer-column-${columnIndex}`} key={columnIndex} className="flex flex-col items-center space-y-4" canvas>
               <Element is={TemplateText} id={`learning-platform-footer-column-title-${columnIndex}`} className="text-lg font-medium text-slate-700 mb-2 cursor-pointer" canvas>{`Column ${columnIndex}`}</Element>
               {[...Array(4)].map((_, linkIndex) => (
                 <Element is={TemplateText} id={`learning-platform-footer-link-${columnIndex}-${linkIndex + 1}`} key={linkIndex} canvas>{`Link ${linkIndex + 1 + (columnIndex - 1) * 4}`}</Element>
               ))}
             </Element>
           ))}
         </Element>
         <Element is={TemplateDiv} id="learning-platform-footer-subscribe" className="flex flex-col pl-8" canvas>
           <Element is={TemplateText} id="learning-platform-footer-subscribe-title" className="text-xl font-semibold text-slate-700" canvas>Subscribe</Element>
           <Element is={TemplateText} id="learning-platform-footer-subscribe-description" className="text-sm text-muted-foreground" canvas>
             Join our newsletter to stay up to date on features and releases.
           </Element>
           <Element is={TemplateDiv} id="learning-platform-footer-subscribe-form" className="flex gap-4 mt-4" canvas>
             <Element is={CustomInput} id="learning-platform-footer-subscribe-input" type="email" placeholder="Enter your email" className="focus-visible:ring-offset-0 focus-visible:ring-0 focus:outline-none p-3 rounded-md" canvas />
             <Element is={CustomButton} id="learning-platform-footer-subscribe-button" canvas>Subscribe</Element>
           </Element>
         </Element>
       </Element>
     </Element>
   </Element>
    </Element>
  </Element>
</Element>
     </div>
  );
};

EcommerceNewLandingTemplate.craft = {
  related: {
    settings: () => {
      return (
        <div>
          <h2>Select an Element which you want to change.</h2>
        </div>
      );
    },
  },
};

export default EcommerceNewLandingTemplate;