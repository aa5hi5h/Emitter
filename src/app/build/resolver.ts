import { Editor, Resolver } from "@craftjs/core";
import { Text } from "@/components/Pannel/Components/Props/Text";
import { Container } from "@/components/Pannel/Components/Props/Container";
import { CustomButton } from "@/components/Pannel/Components/Props/Button";
import { CustomImage } from "@/components/Pannel/Components/Props/Image";
import { CustomBanner } from "@/components/Pannel/Components/Props/Banner";
import { CustomDiv } from "@/components/Pannel/Components/Props/Div";
import { HoverProvider } from "../Context/hoverContext";
import { SelectionProvider } from "../Context/selectionContext";
import { ColorPickerProvider } from "../Context/ColorPickerContext";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Id } from "../../../convex/_generated/dataModel";
import React from "react";
import { EmptyCanvas } from "@/components/Pannel/Components/Props/EmptyCanvas";
import { CanvasProvider, useCanvas } from '../Context/CanvasContext';
import { CustomInput } from "@/components/Pannel/Components/Props/Input";
import { CustomList } from "@/components/Pannel/Components/Props/List";
import { CustomCard } from "@/components/Pannel/Components/Props/Card";
import { CustomNavbar } from "@/components/Pannel/Components/Props/Navbar";
import { CustomVideo } from "@/components/Pannel/Components/Props/Video";
import { CustomCarousel } from "@/components/Pannel/Components/Props/Carousel";
import { TestimonialCarousel } from "@/components/Pannel/Components/Props/Testimonial";
import { AccordionFAQ } from "@/components/Pannel/Components/Props/Faq";
import AnimatedGradientBackground from "@/components/Pannel/Components/Props/Gradient";
import { MultiStepForm } from "@/components/Pannel/Components/Props/Form";
import { FeatureCard, FeaturesSection, HeroSection, ImageBackground, LandingPage } from "@/components/Pannel/Components/Props/Landing";
import { PricingSection } from "@/components/Pannel/Components/Props/Pricing";
import { TemplateText } from "@/components/Pannel/Components/Props/Themes/utils/TemplateText";
import { TemplateDiv } from "@/components/Pannel/Components/Props/Themes/utils/TemplateDiv";
import EcommerceNewLandingTemplate from "@/components/Pannel/Components/Props/Themes/EcomLanding";
import { ArrowUpRight, Box, ChevronRight, CircleUser, Image } from "lucide-react";
import { TemplateImage } from "@/components/Pannel/Components/Props/Themes/utils/TemplateImage";
import LmsLandingTemplate from "@/components/Pannel/Components/Props/Themes/LmsTemplate";
import BlogLandingTemplate from "@/components/Pannel/Components/Props/Themes/BlogLanging";
import StoreCollectionTemplate from "@/components/Pannel/Components/Props/Themes/Stores";
import { MotionTemplateDiv } from "@/components/Pannel/Components/Props/Themes/utils/TemplateMotionDiv";
import BlogDetailTemplate from "@/components/Pannel/Components/Props/Themes/BlogDetail";
import { BedDouble, CableCar, Crown, Gem, HandPlatter, Hotel, Menu, Palmtree, Soup, Star, TentTree } from "lucide-react"
import RentalLandingTemplate from "@/components/Pannel/Components/Props/Themes/RentalLanding";


export const resolver: Resolver = {
    Text,
    Container,
    CustomButton,
    CustomImage,
    CustomBanner,
    CustomInput,
    CustomDiv,
    CustomList,
    CustomCard,
    CustomNavbar,
    CustomVideo,
    CustomCarousel,
    EmptyCanvas,
    AccordionFAQ,
    PricingSection,
    AnimatedGradientBackground,
    TestimonialCarousel,
    LandingPage,
    MultiStepForm,
    HeroSection,
    ImageBackground,
    FeaturesSection,
    FeatureCard,
    TemplateText,
    TemplateDiv,
    EcommerceNewLandingTemplate,
    ChevronRight,Image,Box,ArrowUpRight,
    BedDouble, CableCar, Crown,
    Gem, HandPlatter, Hotel,CircleUser,
     Menu, Palmtree, Soup, Star, TentTree ,
    TemplateImage,
    LmsLandingTemplate,
    BlogLandingTemplate,
    MotionTemplateDiv,
    StoreCollectionTemplate,
    RentalLandingTemplate,
    BlogDetailTemplate
  };