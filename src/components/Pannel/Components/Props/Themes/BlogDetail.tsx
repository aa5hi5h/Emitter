
import { Button } from "@/components/ui/button"
import { BedDouble, CableCar, CircleUser, Crown, Gem, HandPlatter, Hotel, Image, Menu, Palmtree, Soup, Star, TentTree } from "lucide-react"
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
import { TemplateDiv } from "./utils/TemplateDiv"
import { CustomInput } from "../Input"
import { TemplateImage } from "./utils/TemplateImage"
import { TestimonialCarousel } from "../Testimonial"
import { AccordionFAQ } from "../Faq"


export const BlogDetailTemplate = () => {
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
       <Element is={TemplateDiv} canvas id="main-container" className="flex flex-col space-y-4">
       <Element is={TemplateDiv} canvas id="header-container" className="flex flex-col w-full px-4">
         <Element is={TemplateDiv} canvas id="header-content" className="max-w-6xl w-full my-[1.3rem] mx-auto flex items-center justify-between">
           <Element is={TemplateText} canvas id="main-heading" className=" font-semibold tracking-tight">Rentals</Element>
           <Element is={TemplateDiv} canvas id="nav-links" className="hidden md:flex gap-4 border border-gray-800 rounded-full py-2 px-3">
             <Element is={TemplateText} canvas id="nav-link-1">Link One</Element>
             <Element is={TemplateText} canvas id="nav-link-2">link two</Element>
             <Element is={TemplateText} canvas id="nav-link-3">Link three</Element>
           </Element>
           <Element is={TemplateDiv} canvas id="button-container" className="flex gap-x-4">
             <Element is={CustomButton} canvas id="bookings-button">Bookings</Element>
             <Element is={CustomButton} canvas id="signin-button">Sign in</Element>
           </Element>
         </Element>
       </Element>
       <Element is={TemplateDiv} canvas id="main-container" className="p-6">
  <Element is={TemplateDiv} canvas id="content-wrapper" className="flex flex-col">
    <Element is={TemplateDiv} canvas id="header-grid" className="grid items-center grid-cols-1 md:grid-cols-2 gap-4">
      <Element is={TemplateText} canvas id="blog-title" className="font-bold tracking-tight">Specific Blog title goes here</Element>
      <Element is={TemplateDiv} className="" canvas id="image-container">
        <Element is={TemplateDiv} canvas id="image-wrapper" className="h-[40vh] w-full mb-4 md:mb-0 flex justify-center bg-slate-200 items-center">
          <Element is={TemplateImage} size={32} canvas id="blog-image" />
        </Element>
      </Element>
    </Element>
    <Element is={TemplateDiv} canvas id="author-info" className="flex items-center mt-4 md:mt-[-3.7rem] space-x-2">
      <Element is={CircleUser} canvas id="author-avatar" size={28} />
      <Element is={TemplateDiv} canvas id="author-details" className="flex flex-col">
        <Element is={TemplateText} canvas id="author-name">Username</Element>
        <Element is={TemplateText} canvas id="post-date">DD-MM-YYYY</Element>
      </Element>
    </Element>
    <Element is={TemplateDiv} canvas id="blog-content" className="mt-8">
      <Element is={TemplateDiv} className="" canvas id="main-content">
        <Element is={TemplateText} canvas id="blog-text" className="font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur 
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Element>
        <Element is={TemplateDiv} canvas id="comments-section" className="mt-8">
          <Element is={TemplateText} canvas id="comments-heading" className="font-bold tracking-tight mb-4">Comments</Element>
          {[
            "Rust is cool",
            "Wow this blog was helpful",
            "Fullstack doesn't mean F.E + B.E instead it is F.E + B.E + Devops",
            "Time to learn and integrate ai"
          ].map((comment, index) => (
            <Element is={TemplateDiv} canvas id={`comment-${index}`} key={index} className="mb-6">
              <Element is={TemplateDiv} canvas id={`comment-author-${index}`} className="flex items-center space-x-2 mb-2">
                <Element is={CircleUser} canvas id={`comment-avatar-${index}`} size={28} />
                <Element is={TemplateDiv} canvas id={`comment-details-${index}`} className="flex flex-col">
                  <Element is={TemplateText} canvas id={`comment-username-${index}`}>Username</Element>
                  <Element is={TemplateText} canvas id={`comment-date-${index}`}>DD-MM-YYYY</Element>
                </Element>
              </Element>
              <Element is={TemplateText} canvas id={`comment-title-${index}`} className="font-medium">
                Comment title displays here. e.g-&quot;{comment}&quot;
              </Element>
            </Element>
          ))}
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
               <Element is={TemplateText} id={`learning-platform-footer-column-title-${columnIndex}`} className="font-medium mb-2 cursor-pointer" canvas>{`Column ${columnIndex}`}</Element>
               {[...Array(4)].map((_, linkIndex) => (
                 <Element is={TemplateText} id={`learning-platform-footer-link-${columnIndex}-${linkIndex + 1}`} key={linkIndex} canvas>{`Link ${linkIndex + 1 + (columnIndex - 1) * 4}`}</Element>
               ))}
             </Element>
           ))}
         </Element>
         <Element is={TemplateDiv} id="learning-platform-footer-subscribe" className="flex flex-col pl-8" canvas>
           <Element is={TemplateText} id="learning-platform-footer-subscribe-title" className=" font-semibold" canvas>Subscribe</Element>
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
 </Element >     
</div>
  );
};;


BlogDetailTemplate.craft = {
  related: {
    settings: () => {
      return (
        <div>
          <h2>Select an element which you want to style</h2>
        </div>
      );
    },
  },
};

export default BlogDetailTemplate;