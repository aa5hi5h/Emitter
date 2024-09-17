
import { Button } from "@/components/ui/button"
import { BedDouble, Box, CableCar, CircleUser, Crown, Gem, HandPlatter, Hotel, Image, Menu, Palmtree, Soup, Star, TentTree } from "lucide-react"
import {animate,motion, useMotionValue} from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { useState,useEffect } from "react"
import useMeasure from "react-use-measure"
import { Element, useNode } from "@craftjs/core"
import { Text } from "../Text"
import { CustomButton } from "../Button"
import { TemplateText } from "./utils/TemplateText"
import { TemplateDiv } from "./utils/TemplateDiv"
import { CustomInput } from "../Input"
import { TemplateImage } from "./utils/TemplateImage"
import { TestimonialCarousel } from "../Testimonial"
import { AccordionFAQ } from "../Faq"
import { MotionTemplateDiv } from "./utils/TemplateMotionDiv"


export const StoreCollectionTemplate = () => {
  const { connectors: { connect, drag } } = useNode();

  const ItemsList = [
    {name:1},{name:1},{name:1},{name:1}
]

const itemsList = [
    {name:"Product name", image:'ItemsImage', description:'Items description',price:"Items Price",href:"/productpage"},
    {name:"Product name", image:'ItemsImage', description:'Items description',price:"Items Price",href:"/productpage"},
    {name:"Product name", image:'ItemsImage', description:'Items description',price:"Items Price",href:"/productpage"},
    {name:"Product name", image:'ItemsImage', description:'Items description',price:"Items Price",href:"/productpage"},
]


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
     <Element is={TemplateDiv} canvas id="main-container" className="p-6">
  <Element is={TemplateDiv} canvas id="trending-stores" className="flex flex-col space-y-4 mb-[4rem] mx-[0.7rem]">
    <Element is={TemplateDiv} canvas id="trending-header" className="flex justify-between items-center">
      <Element is={TemplateDiv} canvas id="trending-title" className="flex flex-col space-y-2">
        <Element is={TemplateText} canvas id="trending-heading" className=" font-bold tracking-tight">Trending stores this week</Element>
        <Element is={TemplateText} canvas id="trending-subheading" className="">lore mipsum Neque porro quisquam est qui dolorem ipsum quia dolor</Element>
      </Element>
    </Element>
    <Element is={TemplateDiv} canvas id="trending-items" className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
      {ItemsList.map((item, index) => (
        <Element is={TemplateDiv} canvas id={`trending-item-${index}`} key={index} className="border-2 border-slate-300 p-4 mt-4 bg-slate-200 rounded-lg shadow-sm">
          <Element is={TemplateDiv} canvas id={`trending-item-content-${index}`} className="flex flex-col space-y-8 cursor-pointer">
            <Element is={TemplateDiv} canvas id={`trending-item-details-${index}`} className="flex flex-col space-y-1">
              <Element is={TemplateText} canvas id={`trending-item-name-${index}`} className=" font-semibold tracking-tight">items name</Element>
              <Element is={TemplateText} canvas id={`trending-item-description-${index}`} className=" font-medium">description</Element>
            </Element>
            <Element is={TemplateDiv} canvas id={`trending-item-products-${index}`} className="flex gap-2 items-center">
              <Element is={Box} canvas id={`trending-item-box-${index}`} size={18} />
              <Element is={TemplateText} canvas id={`trending-item-count-${index}`} className=" font-semibold text-gray-700">X products</Element>
            </Element>
          </Element>
        </Element>
      ))}
    </Element>
  </Element>

  <Element is={TemplateDiv} id="sale-stores" canvas className="flex flex-col space-y-4 mb-[4rem] mx-[0.7rem]">
    <Element is={TemplateDiv} id="sale-header" canvas className="flex justify-between items-center">
      <Element is={TemplateDiv} id="sale-title" canvas className="flex flex-col space-y-2">
        <Element is={TemplateText} id="sale-heading" canvas className="font-bold tracking-tight">Stores having sales</Element>
      </Element>
    </Element>
    <Element is={TemplateDiv} id="sale-items" canvas className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
      {ItemsList.map((item, index) => (
        <Element is={TemplateDiv} canvas id={`sale-item-${index}`} key={index} className="border-2 border-slate-300 p-4 mt-4 bg-slate-200 rounded-lg shadow-sm">
          <Element is={TemplateDiv} canvas id={`sale-item-content-${index}`} className="flex flex-col space-y-8 cursor-pointer">
            <Element is={TemplateDiv} canvas id={`sale-item-details-${index}`} className="flex flex-col space-y-1">
              <Element is={TemplateText} canvas id={`sale-item-name-${index}`} className=" font-semibold tracking-tight">items name</Element>
              <Element is={TemplateText} canvas id={`sale-item-description-${index}`} className=" font-medium">description</Element>
            </Element>
            <Element is={TemplateDiv} canvas id={`sale-item-products-${index}`} className="flex gap-2 items-center">
              <Element is={Box} canvas id={`sale-item-box-${index}`} size={18} />
              <Element is={TemplateText} canvas id={`sale-item-count-${index}`} className=" font-semibold">X products</Element>
            </Element>
          </Element>
        </Element>
      ))}
    </Element>
  </Element>

  <Element is={TemplateDiv} canvas id="featured-store" className="flex flex-col space-y-4 mb-[1rem] mx-[0.7rem]">
    <Element is={TemplateDiv} canvas id="featured-header" className="flex justify-between items-center">
      <Element is={TemplateDiv}  canvas id="featured-title" className="flex flex-col space-y-2">
        <Element is={TemplateText} canvas id="featured-heading" className=" font-bold tracking-tight">Featured Store</Element>
      </Element>
    </Element>
    <Element is={TemplateDiv} canvas id="featured-content" className="flex flex-col p-4">
      <Element is={TemplateDiv} canvas id="featured-banner" className="flex justify-center items-center h-[30vh] w-[120vh] mx-auto rounded-t-lg bg-blue-200">
        <Element is={TemplateText} canvas id="featured-store-name" className="px-4 py-2 bg-black text-white text-sm rounded-full flex items-center gap-1">
          Urban Styles
        </Element>
      </Element>
      <Element canvas is={TemplateDiv} id="featured-products" className="flex flex-col w-[120vh] rounded-b-lg mx-auto border-[1px] border-blue-200 p-4">
        <Element canvas is={TemplateText} id="products-heading" className=" font-bold tracking-tight">Products</Element>
        <Element canvas is={TemplateDiv} id="products-container" className="flex gap-[4rem] px-2 py-8">
          <Element canvas is={TemplateDiv} id="products-overflow" className="overflow-hidden">
            <Element canvas is={MotionTemplateDiv} className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-8 px-4"  >
              <Element canvas is={TemplateDiv} id="products-list" className="flex gap-8">
                {[...itemsList, ...itemsList].map((product, index) => (
                  <Element canvas is={TemplateDiv} id={`product-${index}`} key={index} className="relative hover:cursor-pointer overflow-hidden h-[50vh] min-w-[37vh]">
                    <Element canvas is={TemplateDiv} id={`product-container-${index}`} className="rounded-lg">
                      <Element canvas is={TemplateDiv} id={`product-content-${index}`} className="flex flex-col h-[30vh] shadow-sm w-[37vh]">
                        <Element canvas is={TemplateDiv} id={`product-image-${index}`} className="h-[40vh] w-full flex border-slate-300 border-2 bg-slate-200 opacity-40 rounded-t-lg justify-center items-center">
                          <Element canvas is={TemplateImage} id={`product-image-icon-${index}`} size={36} />
                        </Element>
                        <Element canvas is={TemplateDiv} id={`product-details-${index}`} className="flex flex-col p-3 border-2 border-slate-200 rounded-b-lg">
                          <Element canvas is={TemplateText} id={`product-name-${index}`} className=" font-semibold tracking-tight">name</Element>
                          <Element canvas is={TemplateText} id={`product-price-${index}`} className=" font-medium">price</Element>
                          <Element canvas is={TemplateDiv} id={`product-button-container-${index}`} className="flex justify-between w-full gap-2 items-center mt-4">
                            <Element canvas is={CustomButton} id={`product-button-${index}`} className="w-full  transition-all">Add to cart</Element>
                          </Element>
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
    </Element>
  </Element>
</Element>
           <Element is={TemplateDiv} id="learning-platform-footer" className="p-3 flex w-full flex-col mb-[2rem]" canvas>
       <Element is={TemplateDiv} id="learning-platform-footer-divider" className="w-full mt-[3rem] h-[1px] border-gray-700 my-[3rem]" canvas />
       <Element is={TemplateDiv} id="learning-platform-footer-content" className="flex flex-col md:flex-row space-y-8 mb-[2rem] md:space-y-0 justify-between items-start" canvas>
         <Element is={TemplateText} id="learning-platform-footer-logo" className=" font-bold tracking-tight cursor-pointer pr-8" canvas>Logo</Element>
         <Element is={TemplateDiv} id="learning-platform-footer-links" className="flex gap-12 items-center" canvas>
           {[1, 2].map((columnIndex) => (
             <Element is={TemplateDiv} id={`learning-platform-footer-column-${columnIndex}`} key={columnIndex} className="flex flex-col items-center space-y-4" canvas>
               <Element is={TemplateText} id={`learning-platform-footer-column-title-${columnIndex}`} className="font-medium  mb-2 cursor-pointer" canvas>{`Column ${columnIndex}`}</Element>
               {[...Array(4)].map((_, linkIndex) => (
                 <Element is={TemplateText} id={`learning-platform-footer-link-${columnIndex}-${linkIndex + 1}`} key={linkIndex} canvas>{`Link ${linkIndex + 1 + (columnIndex - 1) * 4}`}</Element>
               ))}
             </Element>
           ))}
         </Element>
         <Element is={TemplateDiv} id="learning-platform-footer-subscribe" className="flex flex-col pl-8" canvas>
           <Element is={TemplateText} id="learning-platform-footer-subscribe-title" className="font-semibold " canvas>Subscribe</Element>
           <Element is={TemplateText} id="learning-platform-footer-subscribe-description" className="" canvas>
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
</div>
  );
};;


StoreCollectionTemplate.craft = {
  related: {
    settings: () => {
      return (
        <div>
          <h2>Select Elements to change thier propertise</h2>
        </div>
      );
    },
  },
};

export default StoreCollectionTemplate;