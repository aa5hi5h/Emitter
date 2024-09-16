import React from 'react';
import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";

import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import GridPattern from "@/components/magicui/grid-pattern";
import { cn } from "@/lib/utils";
import { ArrowDownToLine, Bolt, LayoutTemplate, Settings, SwatchBook } from 'lucide-react';
import { useConvexAuth } from 'convex/react';


export async function BentoDemo() {


  const features = [
    {
      Icon: ArrowDownToLine,
      name: "Save and Load",
      description: "Save your files and start from where you left.",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      href: "/dashboard" ,
      cta: "Learn more",
      className: "col-span-3 lg:col-span-1",
    },
    {
      Icon: LayoutTemplate,
      name: "Templates",
      description: "Try making something out of templates,a great place to start.",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      href: "/template",
      cta: "Templates",
      className: "col-span-3 lg:col-span-2",
    },
    {
      Icon: SwatchBook,
      name: "Components",
      description: "Use editable components which enables you to drag and drop on the editor pannel.",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      href:"/dashboard",
      cta: "Learn more",
      className: "col-span-3 lg:col-span-2",
    },
    {
      Icon: Bolt,
      name: "Propertise",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      description:
        "Get your desired design with jsut few twerks.",
      href: "/dashboard",
      cta: "Learn more",
      className: "col-span-3 lg:col-span-1",
    },
  ];

    return (
        <BentoGrid className="lg:grid-rows-3">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
    );
  }