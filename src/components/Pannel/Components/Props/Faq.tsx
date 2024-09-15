"use client";
import React, { useState } from 'react';
import { useNode } from "@craftjs/core";
import { ChevronDown, ChevronUp } from 'lucide-react';
import HoverableWrapper from "../wrappers/hoverWrapper";

interface FAQItem {
  question: string;
  answer: string;
}

interface AccordionFAQProps {
  faqs: FAQItem[];
}

interface CraftComponent extends React.FC<AccordionFAQProps> {
  craft: {
    props: AccordionFAQProps;
    related: {
      settings: React.FC;
    };
  };
}

const AccordionItem: React.FC<{
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
}> = ({ question, answer, isOpen, toggleOpen }) => (
  <div className="border-b border-gray-200">
    <button
      className="flex justify-between items-center w-full py-4 px-6 text-left"
      onClick={toggleOpen}
    >
      <span className="font-medium">{question}</span>
      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
    </button>
    {isOpen && (
      <div className="py-4 px-6 bg-gray-50">
        <p>{answer}</p>
      </div>
    )}
  </div>
);

export const AccordionFAQ: CraftComponent = ({ faqs }) => {
  const {
    connectors: { connect, drag },
    id,
  } = useNode((node) => ({
    id: node.id,
  }));

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <HoverableWrapper id={id} type="accordion-faq">
      <div
        ref={(ref) => {
          if (ref) {
            connect(drag(ref));
          }
        }}
        className="max-w-2xl mx-auto border border-gray-200 rounded-lg overflow-hidden"
      >
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            toggleOpen={() => toggleOpen(index)}
          />
        ))}
      </div>
    </HoverableWrapper>
  );
};

export const AccordionFAQSettings: React.FC = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props as AccordionFAQProps,
  }));

  const handleFAQChange = (index: number, field: keyof FAQItem, value: string) => {
    setProp((props: AccordionFAQProps) => {
      const newFAQs = [...props.faqs];
      newFAQs[index] = { ...newFAQs[index], [field]: value };
      props.faqs = newFAQs;
    });
  };

  const addFAQ = () => {
    setProp((props: AccordionFAQProps) => {
      props.faqs = [
        ...props.faqs,
        { question: "New Question", answer: "New Answer" }
      ];
    });
  };

  const removeFAQ = (index: number) => {
    setProp((props: AccordionFAQProps) => {
      props.faqs = props.faqs.filter((_, i) => i !== index);
    });
  };

  return (
    <div className="flex flex-col space-y-4">
      <div className="border-b border-zinc-300 px-2 pt-2">
        <label className="text-sm text-zinc-900 font-semibold">FAQs</label>
        {props.faqs.map((faq, index) => (
          <div key={index} className="mb-4 p-2 border border-slate-300 rounded">
            <h4 className="font-semibold mb-2">FAQ {index + 1}</h4>
            {(Object.keys(faq) as Array<keyof FAQItem>).map((field) => (
              <span key={field} className="flex flex-col px-[8px] ml-[8px] mr-[4px] py-[12px]">
                <label className="text-sm font-medium text-slate-600 mb-1">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                <textarea
                  value={faq[field]}
                  onChange={(e) => handleFAQChange(index, field, e.target.value)}
                  className="border border-slate-400 w-full bg-slate-100 font-semibold text-sm px-2 py-1 rounded-md focus:border-slate-800 outline-none"
                  rows={field === 'question' ? 2 : 4}
                />
              </span>
            ))}
            <button
              onClick={() => removeFAQ(index)}
              className="mt-2 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          onClick={addFAQ}
          className="mt-2 px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add FAQ
        </button>
      </div>
    </div>
  );
};

AccordionFAQ.craft = {
  props: {
    faqs: [
      {
        question: "What is your return policy?",
        answer: "We offer a 30-day return policy for all unused items in their original packaging."
      },
      {
        question: "How long does shipping take?",
        answer: "Shipping typically takes 3-5 business days for domestic orders and 7-14 days for international orders."
      },
      {
        question: "Do you offer international shipping?",
        answer: "Yes, we ship to most countries worldwide. Shipping costs and times may vary depending on the destination."
      },
      {
        question: "How can I track my order?",
        answer: "Once your order ships, you'll receive a tracking number via email that you can use to monitor your package's progress."
      }
    ],
  },
  related: {
    settings: AccordionFAQSettings,
  },
};