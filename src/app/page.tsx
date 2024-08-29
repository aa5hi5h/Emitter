"use client"
import ComponentsPannel from "@/components/Pannel/Components";
import EditorPannel from "@/components/Pannel/Editor";
import PropertisePannel from "@/components/Pannel/Propertise";
import {Editor} from "@craftjs/core"
import {Text} from "../components/Pannel/Components/Props/Text"
import { Container } from "@/components/Pannel/Components/Props/Container";
import { CustomButton } from "@/components/Pannel/Components/Props/Button";
import { CustomImage } from "@/components/Pannel/Components/Props/Image";
import { CustomBanner } from "@/components/Pannel/Components/Props/Banner";
import { CustomDiv } from "@/components/Pannel/Components/Props/Div";
export default function Home() {
  return (
    <Editor resolver={{Text,Container,CustomButton,CustomImage,CustomBanner,CustomDiv}}>
    <div className="grid grid-cols-6 h-[90vh] ">
     <div className="col-span-1 border-r border-slate-300 h-full">
     <ComponentsPannel />
     </div>
     <div className="col-span-4 border-r border-slate-300 h-full">
     <EditorPannel />
     </div>
     <div className="col-span-1">
     <PropertisePannel />
     </div>
    </div>
    </Editor>
  );
}