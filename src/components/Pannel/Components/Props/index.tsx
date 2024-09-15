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
        </div>
    )
}

export default ComponentsProps