"use client"
import { Button } from "@/components/ui/button"
import { BadgePlus, ChevronsLeftRightEllipsis, DiamondPlus, Image, Link, Link2, List, RectangleHorizontal, Rows2, Square, SquareCode, SquarePlus, Text, TextCursorInput, TicketSlash } from "lucide-react"
import { useEditor } from "@craftjs/core"
import {Text as CustomText} from './Text'
import { CustomButton } from "./Button"
import { CustomImage } from "./Image"
import { CustomBanner } from "./Banner"
import { CustomDiv } from "./Div"
import { Element } from "@craftjs/core"
import { Container } from "./Container"
import { CustomInput } from "./Input"
import { CustomList } from "./List"
import { CustomCard } from "./Card"
import { CustomNavbar } from "./Navbar"
import { CustomVideo } from "./Video"
import { CustomCarousel } from "./Carousel"
import { TestimonialCarousel } from "./Testimonial"
import { AccordionFAQ } from "./Faq"
import AnimatedGradientBackground from "./Gradient"
import { PricingSection } from "./Pricing"
import { MultiStepForm } from "./Form"
const ComponentsProps = () => {

    const {connectors} = useEditor()
    
    return (
        <div className="flex flex-col space-y-2">
            <div className="flex gap-x-2 justify-between">
                <Button variant={"outline"} className="w-[100px] flex flex-col h-[80px]"> <Rows2 /> <h4>Row</h4></Button>
                <Button 
                variant={"outline"}
                ref={(ref) => { if(ref) {connectors.create(ref,<Container  />)}}} 
                className="w-[100px] flex flex-col h-[80px]"><Square /><h4>Container</h4></Button>
            </div>
            <div className="flex gap-x-2 justify-between">
                <Button 
                variant={"outline"} 
                ref={(ref) => {
                    if (ref) {
                      connectors.create(ref, <CustomBanner src="https://via.placeholder.com/820x150" alt="Draggable Banner" />);
                    }
                  }}
                className="w-[100px] flex flex-col h-[80px]"><TicketSlash /><h4>Banner</h4></Button>
                <Button variant={"outline"} className="w-[100px] flex flex-col h-[80px]"><Link2 /><h4>Link</h4></Button>
            </div>
            <div className="flex gap-x-2 justify-between">
                <Button 
                variant={"outline"} 
                className="w-[100px] flex flex-col h-[80px]"
                ref={(ref) => {
                    if(ref){ connectors.create(ref, <CustomButton >Buttton</CustomButton>)}}} ><RectangleHorizontal /><h4>Button</h4></Button>
                <Button 
                variant={"outline"} 
                ref={(ref) => {
                    if (ref) {
                      connectors.create(ref, <CustomImage src="https://via.placeholder.com/150" alt="Draggable Image" />);
                    }
                  }}
                className="w-[100px] flex flex-col h-[80px]"><Image /><h4>Image</h4></Button>
            </div>
            <div className="flex gap-x-2 justify-between">
                <Button 
                variant={"outline"}
                ref={(ref) => {
                    if(ref){ connectors.create(ref, <CustomText text="Draggable Text" fontSize={18} color={"black"} />)}}} 
                className="w-[100px] flex flex-col h-[80px]"><Text /><h4>Text</h4></Button>
                <Button 
                variant={"outline"}
                ref={(ref) => { if(ref) {connectors.create(ref,  <Element canvas is={CustomDiv}  backgroundColor="#f0f0f0"  padding={20} 
                  />)}}}
                className="w-[100px] flex flex-col h-[80px]"><SquareCode /><h4>Div</h4></Button>
            </div>
            <div className="flex gap-x-2 justify-between">
            <Button 
                variant={"outline"}
                ref={(ref) => { if(ref) {connectors.create(ref,  <CustomInput
                  />)}}}
                className="w-[100px] flex flex-col h-[80px]"><ChevronsLeftRightEllipsis /><h4>Input</h4></Button>
                <Button 
                variant={"outline"}
                ref={(ref) => {
                    if(ref){ connectors.create(ref, <CustomList items={["Item 1", "Item 2", "Item 3"]} />)}}} 
                className="w-[100px] flex flex-col h-[80px]"><List /><h4>List</h4></Button>
            </div>
            <div className="flex gap-x-2 justify-between">
            <Button 
                variant={"outline"}
                ref={(ref) => { if(ref) {connectors.create(ref,  <CustomCard
                  />)}}}
                className="w-[100px] flex flex-col h-[80px]"><BadgePlus /><h4>Card</h4></Button>
                <Button 
                variant={"outline"}
                ref={(ref) => {
                    if(ref){ connectors.create(ref, <CustomNavbar  />)}}} 
                className="w-[100px] flex flex-col h-[80px]"><List /><h4>Nav</h4></Button>
            </div>
            <div className="flex gap-x-2 justify-between">
            <Button 
                variant={"outline"}
                ref={(ref) => { if(ref) {connectors.create(ref,  <CustomVideo src="https://www.w3schools.com/html/mov_bbb.mp4"
                  />)}}}
                className="w-[100px] flex flex-col h-[80px]"><BadgePlus /><h4>Video</h4></Button>
                <Button 
                variant={"outline"}
                ref={(ref) => {
                    if(ref){ connectors.create(ref, <CustomCarousel images={ [
                      "https://via.placeholder.com/800x400?text=Slide+1",
                      "https://via.placeholder.com/800x400?text=Slide+2",
                      "https://via.placeholder.com/800x400?text=Slide+3",
                    ]}  />)}}} 
                className="w-[100px] flex flex-col h-[80px]">< Image /><h4>Carousel</h4></Button>
            </div>
            <div className="flex gap-x-2 justify-between">
            <Button 
                variant={"outline"}
                ref={(ref) => { if(ref) {connectors.create(ref,  <TestimonialCarousel testimonials={ [
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
                ]}
                  />)}}}
                className="w-[100px] flex flex-col h-[80px]"><BadgePlus /><h4>Testimonials</h4></Button>
                <Button 
                variant={"outline"}
                ref={(ref) => {
                    if(ref){ connectors.create(ref, <AccordionFAQ faqs={[
                      {
                        question: "What is your return policy?",
                        answer: "We offer a 30-day return policy for all unused items in their original packaging."
                      },
                      {
                        question: "How long does shipping take?",
                        answer: "Shipping typically takes 3-5 business days for domestic orders and 7-14 days for international orders."
                      },
                      {
                        question: "Do you offer international shipping?",
                        answer: "Yes, we ship to most countries worldwide. Shipping costs and times may vary depending on the destination."
                      },
                      {
                        question: "How can I track my order?",
                        answer: "Once your order ships, you'll receive a tracking number via email that you can use to monitor your package's progress."
                      }
                    ]} />)}}} 
                className="w-[100px] flex flex-col h-[80px]">< Image /><h4>FAQs</h4></Button>
            </div>
            <div className="flex gap-x-2 justify-between">
            <Button 
                variant={"outline"}
                ref={(ref) => { if(ref) {connectors.create(ref,  <AnimatedGradientBackground  padding={20} colorPalette= {'sunset'} duration={10000}
                  />)}}}
                className="w-[100px] flex flex-col h-[80px]"><BadgePlus /><h4>Gradient</h4></Button>
                <Button 
                variant={"outline"}
                ref={(ref) => {
                    if(ref){ connectors.create(ref, <PricingSection title=""  plans={[ {
                      title: "Basic",
                      price: "$9.99/mo",
                      features: ["Feature 1", "Feature 2", "Feature 3"],
                      ctaText: "Get Started",
                      ctaLink: "#",
                      highlighted: false,
                    },
                    {
                      title: "Pro",
                      price: "$19.99/mo",
                      features: ["Feature 1", "Feature 2", "Feature 3", "Pro Feature 1"],
                      ctaText: "Go Pro",
                      ctaLink: "#",
                      highlighted: true,
                    },
                    {
                      title: "Enterprise",
                      price: "$49.99/mo",
                      features: ["Feature 1", "Feature 2", "Feature 3", "Pro Feature 1", "Enterprise Feature 1"],
                      ctaText: "Contact Us",
                      ctaLink: "#",
                      highlighted: false,
                    },]}  />)}}} 
                className="w-[100px] flex flex-col h-[80px]"><List /><h4>Pricing</h4></Button>
            </div>
            <div className="flex gap-x-2 justify-between">
            <Button 
                variant={"outline"}
                ref={(ref) => { if(ref) {connectors.create(ref,  <MultiStepForm steps={[
                  {
                    title: "Step 1",
                    fields: [
                      {
                        id: "name",
                        label: "Name",
                        type: "text",
                        required: true,
                      },
                      {
                        id: "email",
                        label: "Email",
                        type: "email",
                        required: true,
                      },
                    ],
                  },
                  {
                    title: "Step 2",
                    fields: [
                      {
                        id: "age",
                        label: "Age",
                        type: "number",
                        required: true,
                      },
                      {
                        id: "gender",
                        label: "Gender",
                        type: "select",
                        options: ["Male", "Female", "Other"],
                        required: true,
                      }
                    ]},
                  ]}
                  primaryColor= "#007bff"
      secondaryColor= "#6c757d"
      backgroundColor= "#ffffff"
      textColor= "#000000"
     opacity={1}
      padding= "20px"
      borderRadius= "8px"
      submitButtonText= "Submit"

                  /> )}}}
                className="w-[100px] flex flex-col h-[80px]"><BadgePlus /><h4>Form</h4></Button>
            </div>
            
        </div>
    )
}

export default ComponentsProps