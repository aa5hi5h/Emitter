
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
export const LmsLandingTemplate = () => {
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
           <Element is={TemplateButton} id="learning-platform-login-button" canvas>Login</Element>
         </Element>
       </Element>
     </Element>
     
     <Element is={TemplateDiv} id="learning-platform-hero" className="p-6" canvas>
       <Element is={TemplateDiv} id="learning-platform-hero-content" className="flex flex-col space-y-4" canvas>
         <Element is={TemplateDiv} id="learning-platform-hero-text" className="flex flex-col space-y-4 max-w-2xl mx-auto mt-[5.7rem]" canvas>
           <Element is={TemplateText} id="learning-platform-hero-title" className=" font-bold tracking-tight text-center" canvas>
             Improve your learning experience
           </Element>
           <Element is={TemplateText} id="learning-platform-hero-description" className=" pb-[1.1rem] text-center pt-[0.2rem]" canvas>
             "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
             ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
             laboris nisi ut aliquip"
           </Element>
           <Element is={TemplateDiv} id="learning-platform-hero-buttons" className="flex gap-x-4 mx-auto pl-[200px]" canvas>
             <Element is={TemplateButton} id="learning-platform-view-courses-button" canvas>View courses</Element>
             <Element is={TemplateButton} id="learning-platform-login-button-hero" className="border-slate-300"  canvas>Login</Element>
           </Element>
         </Element>
         <Element is={TemplateDiv} id="learning-platform-hero-image" className="flex justify-center h-screen w-full pt-[2.7rem] items-center" canvas>
           <Element is={TemplateDiv} id="learning-platform-hero-image-container" className="w-full h-full flex justify-center items-center bg-slate-200" canvas>
             <Element is={TemplateImage} id="learning-platform-hero-placeholder" size={52} canvas />
           </Element>
         </Element>
       </Element>
     </Element>

     <Element is={TemplateDiv} id="learning-platform-testimonials" className="flex w-full h-full justify-center mt-[4rem] items-center" canvas>
    <Element is={TemplateDiv} id="learning-platform-testimonials-content" className="flex flex-col justify-center items-center" canvas>
      <Element is={TemplateText} id="learning-platform-testimonials-title" className=" font-bold tracking-tight" canvas>Clients Testimonials</Element>
      <Element is={TemplateText} id="learning-platform-testimonials-subtitle" className=" mt-[0.7rem]" canvas>
        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      </Element>
      <Element is={TemplateDiv} id="learning-platform-testimonials-carousel" className="w-full mt-[2.3rem]" canvas>
        <Element is={TestimonialCarousel} id="learning-platform-testimonials-component" canvas
          testimonials={[
            {
              name: "John Doe",
              role: "Student",
              content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
              image: "/path/to/john-doe-image.jpg"
            },
            {
              name: "Jane Smith",
              role: "Professional",
              content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
              image: "/path/to/jane-smith-image.jpg"
            },
            // Add more testimonials as needed
          ]}
          autoPlay={true}
          autoPlayInterval={5000}
        />
      </Element>
    </Element>
  </Element>

  <Element is={TemplateDiv} id="learning-platform-faq" className="p-6 my-[1rem]" canvas>
    <Element is={TemplateDiv} id="learning-platform-faq-grid" className="grid grid-cols-1 md:grid-cols-2 space-y-4 gap-x-8" canvas>
      <Element is={TemplateDiv} id="learning-platform-faq-left" className="col-span-1 p-4 mt-[3.7rem]" canvas>
        <Element is={TemplateDiv} id="learning-platform-faq-left-content" className="flex flex-col space-y-4" canvas>
          <Element is={TemplateText} id="learning-platform-faq-title" className="text-start font-bold tracking-tight " canvas>FAQs</Element>
          <Element is={TemplateText} id="learning-platform-faq-description" className="text-start mt-[0.7rem] pb-[1rem]" canvas>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
          </Element>
          <Element is={TemplateButton} id="learning-platform-faq-contact-button" className="max-w-max" canvas>Contact</Element>
        </Element>
      </Element>
      <Element is={TemplateDiv} id="learning-platform-faq-right" className="col-span-1 px-4" canvas>
        <Element is={TemplateDiv} id="learning-platform-faq-accordion" className="max-w-2xl mx-auto w-full mt-[2.3rem]" canvas>
          <Element is={AccordionFAQ} id="learning-platform-faq-component" canvas
            faqs={[
              {
                question: "What courses do you offer?",
                answer: "We offer a wide range of courses including web development, data science, artificial intelligence, and more. Check our course catalog for a complete list."
              },
              {
                question: "How long does each course take to complete?",
                answer: "Course duration varies depending on the complexity and depth of the subject. On average, our courses take 4-8 weeks to complete when studying part-time."
              },
              {
                question: "Are the courses self-paced?",
                answer: "Yes, all our courses are self-paced. You can start and complete them according to your own schedule."
              },
              {
                question: "Do you provide certificates upon completion?",
                answer: "Yes, we provide a certificate of completion for all our courses. These certificates can be shared on your professional profiles."
              },
              {
                question: "What kind of support do you offer to students?",
                answer: "We offer various support channels including email support, community forums, and weekly live Q&A sessions with instructors."
              }
            ]}
          />
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
               <Element is={TemplateText} id={`learning-platform-footer-column-title-${columnIndex}`} className=" font-medium mb-2 cursor-pointer" canvas>{`Column ${columnIndex}`}</Element>
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
             <Element is={TemplateButton} id="learning-platform-footer-subscribe-button" canvas>Subscribe</Element>
           </Element>
         </Element>
       </Element>
     </Element>
   </Element>
</div>
  );
};

LmsLandingTemplate.craft = {
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

export default LmsLandingTemplate;