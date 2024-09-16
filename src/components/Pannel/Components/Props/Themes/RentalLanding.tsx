
import { Button } from "@/components/ui/button"
import { BedDouble, CableCar, Crown, Gem, HandPlatter, Hotel, Image, Menu, Palmtree, Soup, Star, TentTree } from "lucide-react"
import { CustomCarousel } from "../Carousel"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Element, useNode } from "@craftjs/core"
import { Text } from "../Text"
import { CustomButton } from "../Button"
import { TemplateText } from "./utils/TemplateText"
import { TemplateButton } from "./utils/TemplateButton"
import { TemplateDiv } from "./utils/TemplateDiv"
import { CustomInput } from "../Input"
import { TemplateImage } from "./utils/TemplateImage"
import { TestimonialCarousel } from "../Testimonial"
import { AccordionFAQ } from "../Faq"


export const RentalLandingTemplate = () => {
  const { connectors: { connect, drag } } = useNode();

  const ItemsList = [
    {name:1},{name:1},{name:1},{name:1},{name:1},{name:1},{name:1},{name:1},{name:1},{name:1},{name:1},{name:1},
    {name:1},{name:1},{name:1},
]

  return (
    <div ref={(ref) => {
        if (ref) {
          connect(drag(ref));
        }
      }} className={`flex flex-col space-y-4 w-full`}>
       <Element is={TemplateDiv} canvas id="main-container" className="flex flex-col max-w-[56rem] space-y-4">
       <Element is={TemplateDiv} canvas id="header-container" className="flex flex-col w-full px-4">
         <Element is={TemplateDiv} canvas id="header-content" className="max-w-6xl w-full my-[1.3rem] mx-auto flex items-center justify-between">
           <Element is={TemplateText} canvas id="main-heading" className=" font-semibold tracking-tight">Rentals</Element>
           <Element is={TemplateDiv} canvas id="nav-links" className="hidden md:flex gap-4 border border-gray-800 rounded-full py-2 px-3">
             <Element is={TemplateText} canvas id="nav-link-1">Link One</Element>
             <Element is={TemplateText} canvas id="nav-link-2">link two</Element>
             <Element is={TemplateText} canvas id="nav-link-3">Link three</Element>
           </Element>
           <Element is={TemplateDiv} canvas id="button-container" className="flex gap-x-4">
             <Element is={TemplateButton} canvas id="bookings-button">Bookings</Element>
             <Element is={TemplateButton} canvas id="signin-button">Sign in</Element>
           </Element>
         </Element>
       </Element>
       <Element is={TemplateDiv} canvas id="content-container" className="p-6">
         <Element is={TemplateDiv} canvas id="content-inner" className="flex flex-col">
           <Element is={TemplateDiv} canvas id="category-icons" className="md:flex hidden mx-auto gap-x-8 px-4 mt-[-1.5rem]">
             {[
               { icon: Palmtree, label: "Beach" },
               { icon: Hotel, label: "Hotel" },
               { icon: BedDouble, label: "Sharing" },
               { icon: Soup, label: "Zostel" },
               { icon: CableCar, label: "Arctic" },
               { icon: TentTree, label: "Camping" },
               { icon: HandPlatter, label: "Luxious" },
               { icon: Gem, label: "Recommended" },
               { icon: Crown, label: "King" }
             ].map((item, index) => (
               <Element is={TemplateDiv} canvas id={`category-icon-${index}`} key={index} className="flex flex-col items-center gap-y-1 cursor-pointer">
                 <Element is={item.icon} canvas id={`category-icon-svg-${index}`} />
                 <Element is={TemplateText} canvas id={`category-icon-label-${index}`}>{item.label}</Element>
               </Element>
             ))}
           </Element>
           <Element is={TemplateDiv} canvas className="" id="items-grid-container">
             <Element is={TemplateDiv} canvas id="items-grid" className="grid grid-cols-3 gap-6 mt-8">
               {ItemsList.map((item, index) => (
                 <Element is={TemplateDiv} canvas className="" id={`item-${index}`} key={index}>
                   <Element is={TemplateDiv} canvas id={`item-inner-${index}`} className="rounded-lg mt-4">
                     <Element is={TemplateDiv} canvas id={`item-content-${index}`} className="flex flex-col h-[50vh] shadow-sm w-full">
                       <Element is={TemplateDiv} canvas id={`item-image-container-${index}`} className="h-[30vh] w-full flex border-zinc-300 border-2 bg-slate-200 opacity-40 rounded-t-lg justify-center items-center">
                         <Element is={TemplateImage} canvas id={`item-image-${index}`} size={36} />
                       </Element>
                       <Element is={TemplateDiv} canvas id={`item-details-${index}`} className="flex flex-col p-3 border-2 border-slate-200 rounded-b-lg">
                         <Element is={TemplateText} canvas id={`item-name-${index}`} className=" font-semibold tracking-tight">Place's name</Element>
                         <Element is={TemplateText} canvas id={`item-price-${index}`} className=" font-medium">$$$</Element>
                         <Element is={TemplateDiv} canvas id={`item-button-container-${index}`} className="flex justify-between w-full gap-2 items-center mt-4">
                           <Element is={TemplateButton} canvas id={`item-book-button-${index}`} className="w-full transition-all">Book</Element>
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
           <Element is={TemplateDiv} id="learning-platform-footer" className="p-3 flex w-full flex-col mb-[2rem]" canvas>
       <Element is={TemplateDiv}  id="learning-platform-footer-divider" className="w-full mt-[3rem] h-[1px] border-gray-700 my-[3rem]" canvas />
       <Element is={TemplateDiv}  id="learning-platform-footer-content" className="flex flex-col md:flex-row space-y-8 mb-[2rem] md:space-y-0 justify-between items-start" canvas>
         <Element is={TemplateText}  id="learning-platform-footer-logo" className="font-bold tracking-tight cursor-pointer pr-8" canvas>Logo</Element>
         <Element is={TemplateDiv}  id="learning-platform-footer-links" className="flex gap-12 items-center" canvas>
           {[1, 2].map((columnIndex) => (
             <Element is={TemplateDiv}  id={`learning-platform-footer-column-${columnIndex}`} key={columnIndex} className="flex flex-col items-center space-y-4" canvas>
               <Element is={TemplateText} id={`learning-platform-footer-column-title-${columnIndex}`} className=" font-medium  mb-2 cursor-pointer" canvas>{`Column ${columnIndex}`}</Element>
               {[...Array(4)].map((_, linkIndex) => (
                 <Element is={TemplateText}  id={`learning-platform-footer-link-${columnIndex}-${linkIndex + 1}`} key={linkIndex} canvas>{`Link ${linkIndex + 1 + (columnIndex - 1) * 4}`}</Element>
               ))}
             </Element>
           ))}
         </Element>
         <Element is={TemplateDiv}  id="learning-platform-footer-subscribe" className="flex flex-col pl-8" canvas>
           <Element is={TemplateText}  id="learning-platform-footer-subscribe-title" className=" font-semibold " canvas>Subscribe</Element>
           <Element is={TemplateText}  id="learning-platform-footer-subscribe-description" className="" canvas>
             Join our newsletter to stay up to date on features and releases.
           </Element>
           <Element is={TemplateDiv} id="learning-platform-footer-subscribe-form" className="flex gap-4 mt-4" canvas>
             <Element is={CustomInput} id="learning-platform-footer-subscribe-input" type="email" placeholder="Enter your email" className="focus-visible:ring-offset-0 focus-visible:ring-0 focus:outline-none p-3 rounded-md" canvas />
             <Element is={TemplateButton} id="learning-platform-footer-subscribe-button" canvas>Subscribe</Element>
           </Element>
         </Element>
       </Element>
     </Element>
 </Element >     
</div>
  );
};;


RentalLandingTemplate.craft = {
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

export default RentalLandingTemplate;