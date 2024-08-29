"use client"
import { Button } from "@/components/ui/button"
import { Image, Link, Link2, RectangleHorizontal, Rows2, Square, SquareCode, Text, TicketSlash } from "lucide-react"
import { useEditor } from "@craftjs/core"
import {Text as CustomText} from './Text'
import { CustomButton } from "./Button"
import { CustomImage } from "./Image"
import { CustomBanner } from "./Banner"
import { CustomDiv } from "./Div"
import { Element } from "@craftjs/core"
import { Container } from "./Container"
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
                    if(ref){ connectors.create(ref, <CustomButton size="default" variant="default" color="primary">Buttton</CustomButton>)}}} ><RectangleHorizontal /><h4>Button</h4></Button>
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
                    if(ref){ connectors.create(ref, <CustomText text="Draggable Text" />)}}} 
                className="w-[100px] flex flex-col h-[80px]"><Text /><h4>Text</h4></Button>
                <Button 
                variant={"outline"}
                ref={(ref) => { if(ref) {connectors.create(ref,  <Element canvas is={CustomDiv}  backgroundColor="#f0f0f0" padding="20px"
                  />)}}}
                className="w-[100px] flex flex-col h-[80px]"><SquareCode /><h4>Div</h4></Button>
            </div>
        </div>
    )
}

export default ComponentsProps