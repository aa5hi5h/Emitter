
import { Button } from "@/components/ui/button"
import { Image, Menu, Star } from "lucide-react"
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

// Main EcommerceLanding component
export const BlogLandingTemplate = () => {
  const { connectors: { connect, drag } } = useNode();

  const TestimonialPropList = [
    {name:"movingTestimonials"},
    {name:"movingTestimonials"},
    {name:"movingTestimonials"},
    {name:"movingTestimonials"},
    {name:"movingTestimonials"},
    {name:"movingTestimonials"},
    {name:"movingTestimonials"},
    {name:"movingTestimonials"},
    {name:"movingTestimonials"},
    {name:"movingTestimonials"},
    {name:"movingTestimonials"},
    {name:"movingTestimonials"},
    {name:"movingTestimonials"},
    {name:"movingTestimonials"},
    {name:"movingTestimonials"},
    {name:"movingTestimonials"},
    {name:"movingTestimonials"},
    {name:"movingTestimonials"},
    {name:"movingTestimonials"},

]

  return (
    <div ref={(ref) => {
        if (ref) {
          connect(drag(ref));
        }
      }} className={`flex flex-col space-y-4 w-full`}>
      <Element is={TemplateDiv} id="Blog-Landing-Template" canvas className="" >
       <Element is={TemplateDiv} id="learning-platform-header" className="p-4" canvas>
       <Element is={TemplateDiv} id="learning-platform-header-content" className="flex items-center justify-between" canvas>
         <Element is={TemplateText} id="learning-platform-logo" className=" font-bold tracking-tight" canvas>Logo</Element>
         <Element is={TemplateDiv} id="learning-platform-nav" className="flex items-center gap-x-4" canvas>
           <Element is={TemplateDiv} id="learning-platform-nav-links" className="flex gap-x-2" canvas>
             <Element is={TemplateText} id="learning-platform-nav-home" canvas>Home</Element>
             <Element is={TemplateText} id="learning-platform-nav-contact" canvas>Contact</Element>
             <Element is={TemplateText} id="learning-platform-nav-about" canvas>About</Element>
           </Element>
           <Element is={TemplateButton} id="learning-platform-login-button" canvas>Login</Element>
         </Element>
       </Element>
     </Element>
     <Element is={TemplateDiv} id="main-container" canvas className="p-6">
  <Element is={TemplateDiv} id="header-container" canvas className="flex flex-col space-y-4 max-w-xl mx-auto mt-[4.3rem]">
    <Element is={TemplateText} id="main-heading" canvas className=" font-bold text-center tracking-tight">Discover my stories and ideas</Element>
    <Element is={TemplateText} id="main-subtitle" canvas className=" text-center pb-[1.1rem]">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo"</Element>
    <Element is={TemplateDiv} id="button-container" canvas className="flex justify-center gap-x-4">
      <Element is={TemplateButton} canvas id="popular-button">Popular</Element>
      <Element is={TemplateButton} canvas id="join-button"  className="">Join</Element>
    </Element>
  </Element>
  <Element is={TemplateDiv} id="main-container" canvas className="container mx-auto px-4">
      <Element is={TemplateDiv} id="recent-posts-container" canvas className="w-full">
        <Element is={TemplateText} id="recent-posts-heading" canvas className=" font-bold tracking-tight mb-6">
          Recent Posts
        </Element>
        <Element is={TemplateDiv} id="posts-grid" canvas className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <Element is={TemplateDiv} canvas id={`post-container-${index}`} key={index} className="flex flex-col">
              <Element is={TemplateDiv} canvas id={`post-image-container-${index}`} className="h-64 w-full bg-slate-200 rounded-md flex justify-center items-center mb-4">
                <Element is={TemplateImage} size={32} canvas id={`post-image-${index}`} />
              </Element>
              <Element is={TemplateDiv} canvas id={`post-content-${index}`} className="flex flex-col space-y-2">
                <Element is={TemplateText} canvas id={`post-date-${index}`} className=" font-medium ">
                  DD-MM-YYYY
                </Element>
                <Element is={TemplateText} canvas id={`post-title-${index}`} className=" font-semibold">
                  {`Blog title ${index}`}
                </Element>
                <Element is={TemplateText} canvas id={`post-excerpt-${index}`} className="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo
                </Element>
                <Element is={TemplateButton} canvas id={`read-more-button-${index}`} className="">
                  Read more
                </Element>
              </Element>
            </Element>
          ))}
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
               <Element is={TemplateText} id={`learning-platform-footer-column-title-${columnIndex}`} className=" font-medium mb-2 cursor-pointer" canvas>{`Column ${columnIndex}`}</Element>
               {[...Array(4)].map((_, linkIndex) => (
                 <Element is={TemplateText} id={`learning-platform-footer-link-${columnIndex}-${linkIndex + 1}`} key={linkIndex} canvas>{`Link ${linkIndex + 1 + (columnIndex - 1) * 4}`}</Element>
               ))}
             </Element>
           ))}
         </Element>
         <Element is={TemplateDiv} id="learning-platform-footer-subscribe" className="flex flex-col pl-8" canvas>
           <Element is={TemplateText} id="learning-platform-footer-subscribe-title" className=" font-semibold " canvas>Subscribe</Element>
           <Element is={TemplateText} id="learning-platform-footer-subscribe-description" className="" canvas>
             Join our newsletter to stay up to date on features and releases.
           </Element>
           <Element is={TemplateDiv} id="learning-platform-footer-subscribe-form" className="flex gap-4 mt-4" canvas>
             <Element is={CustomInput} id="learning-platform-footer-subscribe-input" type="email" placeholder="Enter your email" className="focus-visible:ring-offset-0 focus-visible:ring-0 focus:outline-none p-3 rounded-md" canvas />
             <Element is={TemplateButton} id="learning-platform-footer-subscribe-button" canvas>Subscribe</Element>
           </Element>
         </Element>
       </Element>
     </Element>
     </Element>
     </Element>
</div>
  );
};

BlogLandingTemplate.craft = {
  related: {
    settings: () => {
      return (
        <div>
          <h2>Select Element to style them</h2>
        </div>
      );
    },
  },
};

export default BlogLandingTemplate;