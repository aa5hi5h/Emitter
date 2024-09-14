"use client";

import ComponentsPannel from "@/components/Pannel/Components";
import EditorPannel from "@/components/Pannel/Editor";
import PropertisePannel from "@/components/Pannel/Propertise";
import { Editor, Resolver } from "@craftjs/core";
import { Text } from "../../../components/Pannel/Components/Props/Text";
import { Container } from "@/components/Pannel/Components/Props/Container";
import { CustomButton } from "@/components/Pannel/Components/Props/Button";
import { CustomImage } from "@/components/Pannel/Components/Props/Image";
import { CustomBanner } from "@/components/Pannel/Components/Props/Banner";
import { CustomDiv } from "@/components/Pannel/Components/Props/Div";
import { HoverProvider } from "../../Context/hoverContext";
import { SelectionProvider } from "../../Context/selectionContext";
import { ColorPickerProvider } from "../../Context/ColorPickerContext";
import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { Id } from "../../../../convex/_generated/dataModel";
import React from "react";
import { EmptyCanvas } from "@/components/Pannel/Components/Props/EmptyCanvas";
import { CanvasProvider, useCanvas } from '../../Context/CanvasContext';


interface BuildProjectProps{
  params:{
    buildID: Id<"projects">
  }
}

export const resolver: Resolver = {
  Text,
  Container,
  CustomButton,
  CustomImage,
  CustomBanner,
  CustomDiv,
  EmptyCanvas,
};

const Build = ({params}: BuildProjectProps) =>  {

  const { buildID } = params;
  console.log("BuildID:", buildID)


  const project = useQuery(api.project.getProject, { projectId:buildID });
  const { checkIfCanvasEmpty } = useCanvas();

  if(!project){
    return null
  }
  return (
    <SelectionProvider>
      <HoverProvider>
        <ColorPickerProvider>
        <Editor resolver={resolver} onNodesChange={checkIfCanvasEmpty}>
          <div className="grid grid-cols-6 h-[90vh] ">
            <div className="col-span-1 border-r border-slate-300  h-full overflow-hidden">
              <ComponentsPannel />
            </div>
            <div className="col-span-4 relative border-r border-slate-300 h-full">
              <EditorPannel buildID={project._id} project={project} savedState={project.savedState} />
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