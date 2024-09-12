"use client";

import ComponentsPannel from "@/components/Pannel/Components";
import EditorPannel from "@/components/Pannel/Editor";
import PropertisePannel from "@/components/Pannel/Propertise";
import { Editor } from "@craftjs/core";
import { Text } from "../../../components/Pannel/Components/Props/Text";
import { Container } from "@/components/Pannel/Components/Props/Container";
import { CustomButton } from "@/components/Pannel/Components/Props/Button";
import { CustomImage } from "@/components/Pannel/Components/Props/Image";
import { CustomBanner } from "@/components/Pannel/Components/Props/Banner";
import { CustomDiv } from "@/components/Pannel/Components/Props/Div";
import { HoverProvider } from "../../Context/hoverContext";
import { SelectionProvider } from "../../Context/selectionContext";
import { ColorPickerProvider } from "../../Context/ColorPickerContext";


interface BuildProjectProps{
  params:{
    buildID: string
  }
}

const Build = ({params}: BuildProjectProps) =>  {

  const { buildID } = params;
  console.log("BuildID:", buildID)
  return (
    <SelectionProvider>
      <HoverProvider>
        <ColorPickerProvider>
        <Editor resolver={{ Text, Container, CustomButton, CustomImage, CustomBanner, CustomDiv }}>
          <div className="grid grid-cols-6 h-[90vh] ">
            <div className="col-span-1 border-r border-slate-300 h-full">
              <ComponentsPannel />
            </div>
            <div className="col-span-4 relative border-r border-slate-300 h-full">
              <EditorPannel />
            </div>
            <div className="col-span-1 h-full overflow-hidden" >
              <PropertisePannel />
            </div>
          </div>
        </Editor>
        </ColorPickerProvider>
      </HoverProvider>
    </SelectionProvider>
  );
}

export default Build