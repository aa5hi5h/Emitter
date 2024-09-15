"use client";
import React from 'react';
import { useNode } from "@craftjs/core";
import HoverableWrapper from "../wrappers/hoverWrapper";

interface PricingPlan {
  title: string;
  price: string;
  features?: string[];
  ctaText?: string;
  ctaLink?: string;
  highlighted?: boolean;
}

interface PricingProps {
  plans: PricingPlan[];
  title: string;
  subtitle?: string;
  backgroundColor?: string;
  textColor?: string;
  opacity?: number;
  margin?: string;
  padding?: string;
}

interface CraftComponent extends React.FC<PricingProps> {
  craft: {
    props: PricingProps;
    related: {
      settings: React.FC;
    };
  };
}

const PricingCard: React.FC<PricingPlan & { textColor: string }> = ({
  title,
  price,
  features,
  ctaText,
  ctaLink,
  highlighted,
  textColor
}) => (
  <div className={`flex flex-col p-6 mx-4 my-4 rounded-lg ${
    highlighted ? 'bg-blue-100 border-2 border-blue-500' : 'bg-white border border-gray-200'
  }`}>
    <h3 className={`text-xl font-bold mb-2 ${textColor}`}>{title}</h3>
    <p className={`text-2xl font-bold mb-4 ${textColor}`}>{price}</p>
    <ul className="mb-6">
      {features!.map((feature, index) => (
        <li key={index} className={`mb-2 ${textColor}`}>{feature}</li>
      ))}
    </ul>
    <a
      href={ctaLink}
      className={`mt-auto py-2 px-4 rounded text-center ${
        highlighted ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
      } hover:opacity-80 transition-opacity`}
    >
      {ctaText}
    </a>
  </div>
);

export const PricingSection: CraftComponent = ({
  plans,
  title,
  subtitle,
  backgroundColor = 'white',
  textColor = 'text-gray-800',
  opacity = 1,
  margin = '0',
  padding = '4rem 2rem',
}) => {
  const {
    connectors: { connect, drag },
    id,
  } = useNode((node) => ({
    id: node.id,
  }));

  return (
    <HoverableWrapper id={id} type="pricing-section">
      <section
        ref={(ref) => {
          if (ref) {
            connect(drag(ref));
          }
        }}
        style={{
          backgroundColor,
          opacity,
          margin,
          padding,
        }}
        className="w-full"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl font-bold text-center mb-2 ${textColor}`}>{title}</h2>
          {subtitle && <p className={`text-xl text-center mb-8 ${textColor}`}>{subtitle}</p>}
          <div className="flex flex-wrap justify-center">
            {plans.map((plan, index) => (
              <PricingCard key={index} {...plan} textColor={textColor} />
            ))}
          </div>
        </div>
      </section>
    </HoverableWrapper>
  );
};

export const PricingSectionSettings: React.FC = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props as PricingProps,
  }));

  const handlePlanChange = (index: number, field: keyof PricingPlan, value: string | string[] | boolean) => {
    setProp((props: PricingProps) => {
      const newPlans = [...props.plans];
      newPlans[index] = { ...newPlans[index], [field]: value };
      props.plans = newPlans;
    });
  };

  const addPlan = () => {
    setProp((props: PricingProps) => {
      props.plans = [
        ...props.plans,
        {
          title: "New Plan",
          price: "$0",
          features: ["Feature 1", "Feature 2"],
          ctaText: "Sign Up",
          ctaLink: "#",
          highlighted: false,
        }
      ];
    });
  };

  const removePlan = (index: number) => {
    setProp((props: PricingProps) => {
      props.plans = props.plans.filter((_, i) => i !== index);
    });
  };

  return (
    <div className="flex flex-col space-y-4">
      <div className="border-b border-zinc-300 px-2 pt-2">
        <label className="text-sm text-zinc-900 font-semibold">General Settings</label>
        <span className="flex flex-col px-[8px] ml-[8px] mr-[4px] py-[12px]">
          <label className="text-sm font-medium text-slate-600 mb-1">Title</label>
          <input
            value={props.title}
            onChange={(e) => setProp((props: PricingProps) => (props.title = e.target.value))}
            className="border border-slate-400 w-full bg-slate-100 font-semibold text-sm px-2 py-1 rounded-md focus:border-slate-800 outline-none"
          />
        </span>
        <span className="flex flex-col px-[8px] ml-[8px] mr-[4px] py-[12px]">
          <label className="text-sm font-medium text-slate-600 mb-1">Subtitle</label>
          <input
            value={props.subtitle}
            onChange={(e) => setProp((props: PricingProps) => (props.subtitle = e.target.value))}
            className="border border-slate-400 w-full bg-slate-100 font-semibold text-sm px-2 py-1 rounded-md focus:border-slate-800 outline-none"
          />
        </span>
        <span className="flex flex-col px-[8px] ml-[8px] mr-[4px] py-[12px]">
          <label className="text-sm font-medium text-slate-600 mb-1">Background Color</label>
          <input
            type="color"
            value={props.backgroundColor}
            onChange={(e) => setProp((props: PricingProps) => (props.backgroundColor = e.target.value))}
            className="w-full h-8"
          />
        </span>
        <span className="flex flex-col px-[8px] ml-[8px] mr-[4px] py-[12px]">
          <label className="text-sm font-medium text-slate-600 mb-1">Text Color</label>
          <select
            value={props.textColor}
            onChange={(e) => setProp((props: PricingProps) => (props.textColor = e.target.value))}
            className="border border-slate-400 w-full bg-slate-100 font-semibold text-sm px-2 py-1 rounded-md focus:border-slate-800 outline-none"
          >
            <option value="text-gray-800">Dark Gray</option>
            <option value="text-white">White</option>
            <option value="text-black">Black</option>
          </select>
        </span>
        <span className="flex flex-col px-[8px] ml-[8px] mr-[4px] py-[12px]">
          <label className="text-sm font-medium text-slate-600 mb-1">Opacity</label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={props.opacity}
            onChange={(e) => setProp((props: PricingProps) => (props.opacity = parseFloat(e.target.value)))}
            className="w-full"
          />
        </span>
        <span className="flex flex-col px-[8px] ml-[8px] mr-[4px] py-[12px]">
          <label className="text-sm font-medium text-slate-600 mb-1">Margin</label>
          <input
            value={props.margin}
            onChange={(e) => setProp((props: PricingProps) => (props.margin = e.target.value))}
            className="border border-slate-400 w-full bg-slate-100 font-semibold text-sm px-2 py-1 rounded-md focus:border-slate-800 outline-none"
          />
        </span>
        <span className="flex flex-col px-[8px] ml-[8px] mr-[4px] py-[12px]">
          <label className="text-sm font-medium text-slate-600 mb-1">Padding</label>
          <input
            value={props.padding}
            onChange={(e) => setProp((props: PricingProps) => (props.padding = e.target.value))}
            className="border border-slate-400 w-full bg-slate-100 font-semibold text-sm px-2 py-1 rounded-md focus:border-slate-800 outline-none"
          />
        </span>
      </div>
      <div className="border-b border-zinc-300 px-2 pt-2">
        <label className="text-sm text-zinc-900 font-semibold">Pricing Plans</label>
        {props.plans.map((plan, index) => (
          <div key={index} className="mb-4 p-2 border border-slate-300 rounded">
            <h4 className="font-semibold mb-2">Plan {index + 1}</h4>
            {(Object.keys(plan) as Array<keyof PricingPlan>).map((field) => (
              <span key={field} className="flex flex-col px-[8px] ml-[8px] mr-[4px] py-[12px]">
                <label className="text-sm font-medium text-slate-600 mb-1">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                {field === 'features' ? (
                  <textarea
                    value={plan[field]!.join('\n')}
                    onChange={(e) => handlePlanChange(index, field, e.target.value.split('\n'))}
                    className="border border-slate-400 w-full bg-slate-100 font-semibold text-sm px-2 py-1 rounded-md focus:border-slate-800 outline-none"
                    rows={4}
                  />
                ) : field === 'highlighted' ? (
                  <input
                    type="checkbox"
                    checked={plan[field] as boolean}
                    onChange={(e) => handlePlanChange(index, field, e.target.checked)}
                    className="w-4 h-4"
                  />
                ) : (
                  <input
                    value={plan[field] as string}
                    onChange={(e) => handlePlanChange(index, field, e.target.value)}
                    className="border border-slate-400 w-full bg-slate-100 font-semibold text-sm px-2 py-1 rounded-md focus:border-slate-800 outline-none"
                  />
                )}
              </span>
            ))}
            <button
              onClick={() => removePlan(index)}
              className="mt-2 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          onClick={addPlan}
          className="mt-2 px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Plan
        </button>
      </div>
    </div>
  );
};

PricingSection.craft = {
  props: {
    title: "Our Pricing Plans",
    subtitle: "Choose the plan that fits your needs",
    backgroundColor: "#f3f4f6",
    textColor: "text-gray-800",
    opacity: 1,
    margin: "0",
    padding: "4rem 2rem",
    plans: [
      {
        title: "Basic",
        price: "$9.99/mo",
        features: ["Feature 1", "Feature 2", "Feature 3"],
        ctaText: "Get Started",
        ctaLink: "#",
        highlighted: false,
      },
      {
        title: "Pro",
        price: "$19.99/mo",
        features: ["Feature 1", "Feature 2", "Feature 3", "Pro Feature 1"],
        ctaText: "Go Pro",
        ctaLink: "#",
        highlighted: true,
      },
      {
        title: "Enterprise",
        price: "$49.99/mo",
        features: ["Feature 1", "Feature 2", "Feature 3", "Pro Feature 1", "Enterprise Feature 1"],
        ctaText: "Contact Us",
        ctaLink: "#",
        highlighted: false,
      },
    ],
  },
  related: {
    settings: PricingSectionSettings,
  },
};