"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Share2 } from 'lucide-react';
import { useQuery, useMutation } from 'convex/react';
import { api } from '../../../convex/_generated/api';
import { Id } from '../../../convex/_generated/dataModel';
import lz from "lzutf8"

interface Template {
  _id: Id<"templates">;
  title: string;
  data: string;
  image?: string;
}

const TemplateCard: React.FC<{ template: Template; onSelect: () => void }> = ({ template, onSelect }) => (
  <Card className="w-full">
    <CardHeader>
      <CardTitle>{template.title}</CardTitle>
    </CardHeader>
    <CardContent>
      {template.image && <img src={template.image} alt={template.title} className="w-full h-48 object-cover" />}
    </CardContent>
    <CardFooter className="flex justify-between">
      <Button variant="outline" size="icon">
        <Heart className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon">
        <Share2 className="h-4 w-4" />
      </Button>
      <Button onClick={onSelect}>Select</Button>
    </CardFooter>
  </Card>
);

const TemplateSection: React.FC = () => {
  const templates = useQuery(api.template.getTemplates);
  const createProjectWithTemplate = useMutation(api.project.createProjectWithTemplate);
  const router = useRouter();



const templateStructure = {
    ROOT: {
        type: {
          resolvedName: "Container"
        },
        isCanvas: true,
        props: {
          backgroundColor: "#ffffff",
          padding: "20px"
        },
        displayName: "Root",
        custom: {},
        hidden: false,
        nodes: [
          "Header",
          "HeroSection",
          "FeaturesSection",
          "Footer"
        ],
        linkedNodes: {}
      },
      Header: {
        type: {
          resolvedName: "Container"
        },
        isCanvas: true,
        props: {
          backgroundColor: "#f0f0f0",
          padding: "10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        },
        displayName: "Header",
        custom: {},
        parent: "ROOT",
        hidden: false,
        nodes: [
          "Logo",
          "Navigation"
        ],
        linkedNodes: {}
      },
      Logo: {
        type: {
          resolvedName: "Text"
        },
        props: {
          text: "Your Logo",
          fontSize: 24,
          fontWeight: "bold",
          color: "#333333"
        },
        displayName: "Logo",
        custom: {},
        parent: "Header",
        hidden: false,
        nodes: [],
        linkedNodes: {}
      },
      Navigation: {
        type: {
          resolvedName: "Container"
        },
        isCanvas: true,
        props: {
          display: "flex",
          gap: "20px"
        },
        displayName: "Navigation",
        custom: {},
        parent: "Header",
        hidden: false,
        nodes: [
          "NavItem1",
          "NavItem2",
          "NavItem3"
        ],
        linkedNodes: {}
      },
      NavItem1: {
        type: {
          resolvedName: "Text"
        },
        props: {
          text: "Home",
          fontSize: 16,
          color: "#333333"
        },
        displayName: "NavItem",
        custom: {},
        parent: "Navigation",
        hidden: false,
        nodes: [],
        linkedNodes: {}
      },
      NavItem2: {
        type: {
          resolvedName: "Text"
        },
        props: {
          text: "Features",
          fontSize: 16,
          color: "#333333"
        },
        displayName: "NavItem",
        custom: {},
        parent: "Navigation",
        hidden: false,
        nodes: [],
        linkedNodes: {}
      },
      NavItem3: {
        type: {
          resolvedName: "Text"
        },
        props: {
          text: "Contact",
          fontSize: 16,
          color: "#333333"
        },
        displayName: "NavItem",
        custom: {},
        parent: "Navigation",
        hidden: false,
        nodes: [],
        linkedNodes: {}
      },
      HeroSection: {
        type: {
          resolvedName: "Container"
        },
        isCanvas: true,
        props: {
          backgroundColor: "#e0e0e0",
          padding: "40px",
          textAlign: "center"
        },
        displayName: "HeroSection",
        custom: {},
        parent: "ROOT",
        hidden: false,
        nodes: [
          "HeroTitle",
          "HeroSubtitle",
          "HeroCTA"
        ],
        linkedNodes: {}
      },
      HeroTitle: {
        type: {
          resolvedName: "Text"
        },
        props: {
          text: "Welcome to Our Platform",
          fontSize: 48,
          fontWeight: "bold",
          color: "#333333",
          marginBottom: "20px"
        },
        displayName: "HeroTitle",
        custom: {},
        parent: "HeroSection",
        hidden: false,
        nodes: [],
        linkedNodes: {}
      },
      HeroSubtitle: {
        type: {
          resolvedName: "Text"
        },
        props: {
          text: "Revolutionizing the way you do business",
          fontSize: 24,
          color: "#666666",
          marginBottom: "30px"
        },
        displayName: "HeroSubtitle",
        custom: {},
        parent: "HeroSection",
        hidden: false,
        nodes: [],
        linkedNodes: {}
      },
      HeroCTA: {
        type: {
          resolvedName: "Button"
        },
        props: {
          text: "Get Started",
          backgroundColor: "#007bff",
          color: "#ffffff",
          padding: "12px 24px",
          fontSize: 18,
          borderRadius: 4
        },
        displayName: "HeroCTA",
        custom: {},
        parent: "HeroSection",
        hidden: false,
        nodes: [],
        linkedNodes: {}
      },
      FeaturesSection: {
        type: {
          resolvedName: "Container"
        },
        isCanvas: true,
        props: {
          backgroundColor: "#ffffff",
          padding: "40px",
          display: "flex",
          justifyContent: "space-around"
        },
        displayName: "FeaturesSection",
        custom: {},
        parent: "ROOT",
        hidden: false,
        nodes: [
          "Feature1",
          "Feature2",
          "Feature3"
        ],
        linkedNodes: {}
      },
      Feature1: {
        type: {
          resolvedName: "Container"
        },
        isCanvas: true,
        props: {
          width: "30%",
          textAlign: "center"
        },
        displayName: "Feature",
        custom: {},
        parent: "FeaturesSection",
        hidden: false,
        nodes: [
          "FeatureIcon1",
          "FeatureTitle1",
          "FeatureDescription1"
        ],
        linkedNodes: {}
      },
      FeatureIcon1: {
        type: {
          resolvedName: "Image"
        },
        props: {
          src: "/api/placeholder/64/64",
          width: 64,
          height: 64,
          marginBottom: "20px"
        },
        displayName: "FeatureIcon",
        custom: {},
        parent: "Feature1",
        hidden: false,
        nodes: [],
        linkedNodes: {}
      },
      FeatureTitle1: {
        type: {
          resolvedName: "Text"
        },
        props: {
          text: "Easy to Use",
          fontSize: 24,
          fontWeight: "bold",
          color: "#333333",
          marginBottom: "10px"
        },
        displayName: "FeatureTitle",
        custom: {},
        parent: "Feature1",
        hidden: false,
        nodes: [],
        linkedNodes: {}
      },
      FeatureDescription1: {
        type: {
          resolvedName: "Text"
        },
        props: {
          text: "Our platform is designed with simplicity in mind, making it easy for anyone to get started.",
          fontSize: 16,
          color: "#666666"
        },
        displayName: "FeatureDescription",
        custom: {},
        parent: "Feature1",
        hidden: false,
        nodes: [],
        linkedNodes: {}
      },
      Feature2: {
        type: {
          resolvedName: "Container"
        },
        isCanvas: true,
        props: {
          width: "30%",
          textAlign: "center"
        },
        displayName: "Feature",
        custom: {},
        parent: "FeaturesSection",
        hidden: false,
        nodes: [
          "FeatureIcon2",
          "FeatureTitle2",
          "FeatureDescription2"
        ],
        linkedNodes: {}
      },
      FeatureIcon2: {
        type: {
          resolvedName: "Image"
        },
        props: {
          src: "/api/placeholder/64/64",
          width: 64,
          height: 64,
          marginBottom: "20px"
        },
        displayName: "FeatureIcon",
        custom: {},
        parent: "Feature2",
        hidden: false,
        nodes: [],
        linkedNodes: {}
      },
      FeatureTitle2: {
        type: {
          resolvedName: "Text"
        },
        props: {
          text: "Powerful Analytics",
          fontSize: 24,
          fontWeight: "bold",
          color: "#333333",
          marginBottom: "10px"
        },
        displayName: "FeatureTitle",
        custom: {},
        parent: "Feature2",
        hidden: false,
        nodes: [],
        linkedNodes: {}
      },
      FeatureDescription2: {
        type: {
          resolvedName: "Text"
        },
        props: {
          text: "Gain valuable insights with our advanced analytics tools and make data-driven decisions.",
          fontSize: 16,
          color: "#666666"
        },
        displayName: "FeatureDescription",
        custom: {},
        parent: "Feature2",
        hidden: false,
        nodes: [],
        linkedNodes: {}
      },
      Feature3: {
        type: {
          resolvedName: "Container"
        },
        isCanvas: true,
        props: {
          width: "30%",
          textAlign: "center"
        },
        displayName: "Feature",
        custom: {},
        parent: "FeaturesSection",
        hidden: false,
        nodes: [
          "FeatureIcon3",
          "FeatureTitle3",
          "FeatureDescription3"
        ],
        linkedNodes: {}
      },
      FeatureIcon3: {
        type: {
          resolvedName: "Image"
        },
        props: {
          src: "/api/placeholder/64/64",
          width: 64,
          height: 64,
          marginBottom: "20px"
        },
        displayName: "FeatureIcon",
        custom: {},
        parent: "Feature3",
        hidden: false,
        nodes: [],
        linkedNodes: {}
      },
      FeatureTitle3: {
        type: {
          resolvedName: "Text"
        },
        props: {
          text: "24/7 Support",
          fontSize: 24,
          fontWeight: "bold",
          color: "#333333",
          marginBottom: "10px"
        },
        displayName: "FeatureTitle",
        custom: {},
        parent: "Feature3",
        hidden: false,
        nodes: [],
        linkedNodes: {}
      },
      FeatureDescription3: {
        type: {
          resolvedName: "Text"
        },
        props: {
          text: "Our dedicated support team is always available to help you with any questions or issues.",
          fontSize: 16,
          color: "#666666"
        },
        displayName: "FeatureDescription",
        custom: {},
        parent: "Feature3",
        hidden: false,
        nodes: [],
        linkedNodes: {}
      },
      Footer: {
        type: {
          resolvedName: "Container"
        },
        isCanvas: true,
        props: {
          backgroundColor: "#333333",
          padding: "20px",
          color: "#ffffff",
          textAlign: "center"
        },
        displayName: "Footer",
        custom: {},
        parent: "ROOT",
        hidden: false,
        nodes: [
          "FooterText"
        ],
        linkedNodes: {}
      },
      FooterText: {
        type: {
          resolvedName: "Text"
        },
        props: {
          text: "© 2024 Your Company. All rights reserved.",
          fontSize: 14,
          color: "#ffffff"
        },
        displayName: "FooterText",
        custom: {},
        parent: "Footer",
        hidden: false,
        nodes: [],
        linkedNodes: {}
      }
    };


  const handleCLick = () => {

  const stateString = JSON.stringify(templateStructure);
const compressedState = lz.encodeBase64(lz.compress(stateString));
console.log("COMPRESED_STATE",compressedState)
  }
  const handleCreateProjectWithTemplate = async (template: Template) => {
    try {
      const projectId = await createProjectWithTemplate({
        title: template.title,
        savedState: template.data
      });
      router.push(`/build/${projectId}`);
    } catch (error) {
      console.error("Failed to create project:", error);
      alert("An error occurred while creating the project. Please try again.");
    }
  };

  if (templates === undefined) {
    return <div>Loading templates...</div>;
  }

  return (
    <div className="h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-6xl font-semibold tracking-tight mb-8">Templates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {templates.map((template) => (
            <TemplateCard 
              key={template._id} 
              template={template}
              onSelect={() => handleCreateProjectWithTemplate(template)}
            />
          ))}
          <Button onClick={handleCLick}>COmpressed Data</Button>
        </div>
      </div>
    </div>
  );
};

export default TemplateSection;