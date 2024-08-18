import ComponentsPannel from "@/components/Pannel/Components";
import EditorPannel from "@/components/Pannel/Editor";
import PropertisePannel from "@/components/Pannel/Propertise";


export default function Home() {
  return (
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
  );
}
