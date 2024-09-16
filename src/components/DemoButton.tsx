"use client"
import { ArrowRight } from "lucide-react"
import { Button } from "./ui/button"
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useRouter } from "next/navigation";
interface TemplateFolder {
    id: number;
    src: string;
    alt: string;
    data: any; // Add the data field here
  }
  


const DemoButton = () => {

    const createProjectWithTemplate = useMutation(api.project.createProjectWithTemplate);

    const router = useRouter()
    
   
    const handleClickHero = async() => {
      try {
        const projectId = await createProjectWithTemplate({
          title: "Ecommerse",
          savedState: "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"
        });
        router.push(`/build/${projectId}`);
      } catch (error) {
        console.error("Failed to create project:", error);
        alert("An error occurred while creating the project. Please try again.");
      }
    };

    return (
        <Button onClick={handleClickHero} size="sm" className="rounded-full cursor-pointer bg-[#c74db9] hover:bg-[#c74db9]/80 flex border border-foreground/20">
        Try Demo <ArrowRight className="w-4 h-4 ml-1" />
      </Button>
    )
}

export default DemoButton