"use client";
import React, { useState } from 'react';
import { useNode } from "@craftjs/core";
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import HoverableWrapper from "../wrappers/hoverWrapper";

interface FormField {
  id: string;
  label: string;
  type: 'text' | 'email' | 'number' | 'textarea' | 'select' | 'checkbox' | 'radio';
  options?: string[]; // For select, checkbox, and radio types
  required: boolean;
}

interface FormStep {
  title: string;
  fields: FormField[];
}

interface MultiStepFormProps {
  steps: FormStep[];
  primaryColor?: string;
  secondaryColor?: string;
  backgroundColor?: string;
  textColor?: string;
  opacity?: number;
  margin?: string;
  padding?: string;
  borderRadius?: string;
  submitButtonText?: string;
}

interface CraftComponent extends React.FC<MultiStepFormProps> {
  craft: {
    props: MultiStepFormProps;
    related: {
      settings: React.FC;
    };
  };
}

const FormField: React.FC<FormField & { value: any; onChange: (value: any) => void }> = ({ 
    id, 
    label, 
    type, 
    options, 
    required, 
    value, 
    onChange 
  }) => {
    switch (type) {
      case 'text':
      case 'email':
      case 'number':
        return (
          <input
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            required={required}
            className="w-full px-3 py-2 border rounded"
          />
        );
      case 'textarea':
        return (
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            required={required}
            className="w-full px-3 py-2 border rounded"
          />
        );
      case 'select':
        return (
          <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            required={required}
            className="w-full px-3 py-2 border rounded"
          >
            {options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      case 'checkbox':
        return (
          <div>
            {options?.map((option) => (
              <label key={option} className="flex items-center">
                <input
                  type="checkbox"
                  checked={value?.includes(option)}
                  onChange={(e) => {
                    const newValue = e.target.checked
                      ? [...(value || []), option]
                      : (value || []).filter((v: string) => v !== option);
                    onChange(newValue);
                  }}
                  required={required}
                  className="mr-2"
                />
                {option}
              </label>
            ))}
          </div>
        );
      case 'radio':
        return (
          <div>
            {options?.map((option) => (
              <label key={option} className="flex items-center">
                <input
                  type="radio"
                  checked={value === option}
                  onChange={() => onChange(option)}
                  required={required}
                  className="mr-2"
                />
                {option}
              </label>
            ))}
          </div>
        );
      default:
        return null;
    }
  };
  

export const MultiStepForm: CraftComponent = ({
  steps,
  primaryColor,
  secondaryColor,
  backgroundColor,
  textColor,
  opacity,
  margin,
  padding,
  borderRadius,
  submitButtonText,
}) => {
  const {
    connectors: { connect, drag },
    id,
  } = useNode((node) => ({
    id: node.id,
  }));

  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, any>>({});

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  const currentFields = steps[currentStep]?.fields || [];

  return (
    <HoverableWrapper id={id} type="multi-step-form">
      <div
        ref={(ref) => {
          if (ref) {
            connect(drag(ref));
          }
        }}
        style={{
          backgroundColor,
          color: textColor,
          opacity,
          margin,
          padding,
          borderRadius,
        }}
      >
        <h2 className="text-2xl font-bold mb-4">{steps[currentStep]?.title}</h2>
        <form onSubmit={handleSubmit}>
          {currentFields.map((field) => (
            <div key={field.id} className="mb-4">
              <label className="block mb-2">{field.label}</label>
              <FormField
                {...field}
                value={formData[field.id]}
                onChange={(value) => setFormData({ ...formData, [field.id]: value })}
              />
            </div>
          ))}
          <div className="flex justify-between mt-6">
            {currentStep > 0 && (
              <button
                type="button"
                onClick={handlePrevStep}
                style={{ backgroundColor: secondaryColor }}
                className="px-4 py-2 rounded text-white"
              >
                Previous
              </button>
            )}
            {currentStep < steps.length - 1 ? (
              <button
                type="button"
                onClick={handleNextStep}
                style={{ backgroundColor: primaryColor }}
                className="px-4 py-2 rounded text-white"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                style={{ backgroundColor: primaryColor }}
                className="px-4 py-2 rounded text-white"
              >
                {submitButtonText}
              </button>
            )}
          </div>
        </form>
      </div>
    </HoverableWrapper>
  );
};

export const MultiStepFormSettings: React.FC = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props as MultiStepFormProps,
  }));

  const handleStepChange = (index: number, field: keyof FormStep, value: any) => {
    setProp((props: MultiStepFormProps) => {
      const newSteps = [...props.steps];
      newSteps[index] = { ...newSteps[index], [field]: value };
      props.steps = newSteps;
    });
  };

  const handleFieldChange = (stepIndex: number, fieldIndex: number, field: keyof FormField, value: any) => {
    setProp((props: MultiStepFormProps) => {
      const newSteps = [...props.steps];
      const newFields = [...newSteps[stepIndex].fields];
      newFields[fieldIndex] = { ...newFields[fieldIndex], [field]: value };
      newSteps[stepIndex].fields = newFields;
      props.steps = newSteps;
    });
  };

  const addStep = () => {
    setProp((props: MultiStepFormProps) => {
      props.steps = [
        ...props.steps,
        {
          title: "New Step",
          fields: [],
        }
      ];
    });
  };

  const removeStep = (index: number) => {
    setProp((props: MultiStepFormProps) => {
      props.steps = props.steps.filter((_, i) => i !== index);
    });
  };

  const addField = (stepIndex: number) => {
    setProp((props: MultiStepFormProps) => {
      const newSteps = [...props.steps];
      newSteps[stepIndex].fields.push({
        id: `field_${Date.now()}`,
        label: "New Field",
        type: "text",
        required: false,
      });
      props.steps = newSteps;
    });
  };

  const removeField = (stepIndex: number, fieldIndex: number) => {
    setProp((props: MultiStepFormProps) => {
      const newSteps = [...props.steps];
      newSteps[stepIndex].fields = newSteps[stepIndex].fields.filter((_, i) => i !== fieldIndex);
      props.steps = newSteps;
    });
  };

  return (
    <div className="flex flex-col space-y-4">
      <div className="border-b border-zinc-300 px-2 pt-2">
        <label className="text-sm text-zinc-900 font-semibold">General Settings</label>
        {(Object.keys(props) as Array<keyof MultiStepFormProps>).map((prop) => {
          if (prop !== 'steps') {
            return (
              <span key={prop} className="flex flex-col px-[8px] ml-[8px] mr-[4px] py-[12px]">
                <label className="text-sm font-medium text-slate-600 mb-1">
                  {prop.charAt(0).toUpperCase() + prop.slice(1)}
                </label>
                {prop === 'opacity' ? (
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={props[prop] as number}
                    onChange={(e) => setProp((props: MultiStepFormProps) => ({ ...props, [prop]: parseFloat(e.target.value) }))}
                    className="w-full"
                  />
                ) : (
                  <input
                    type={prop.includes('Color') ? 'color' : 'text'}
                    value={props[prop] as string}
                    onChange={(e) => setProp((props: MultiStepFormProps) => ({ ...props, [prop]: e.target.value }))}
                    className="border border-slate-400 w-full bg-slate-100 font-semibold text-sm px-2 py-1 rounded-md focus:border-slate-800 outline-none"
                  />
                )}
              </span>
            );
          }
        })}
      </div>
      <div className="border-b border-zinc-300 px-2 pt-2">
        <label className="text-sm text-zinc-900 font-semibold">Form Steps</label>
        {props.steps.map((step, stepIndex) => (
          <div key={stepIndex} className="mb-4 p-2 border border-slate-300 rounded">
            <h4 className="font-semibold mb-2">Step {stepIndex + 1}</h4>
            <span className="flex flex-col px-[8px] ml-[8px] mr-[4px] py-[12px]">
              <label className="text-sm font-medium text-slate-600 mb-1">Title</label>
              <input
                value={step.title}
                onChange={(e) => handleStepChange(stepIndex, 'title', e.target.value)}
                className="border border-slate-400 w-full bg-slate-100 font-semibold text-sm px-2 py-1 rounded-md focus:border-slate-800 outline-none"
              />
            </span>
            <div className="mt-4">
              <h5 className="font-medium mb-2">Fields</h5>
              {step.fields.map((field, fieldIndex) => (
                <div key={field.id} className="mb-2 p-2 border border-slate-200 rounded">
                  <span className="flex flex-col px-[8px] ml-[8px] mr-[4px] py-[12px]">
                    <label className="text-sm font-medium text-slate-600 mb-1">Label</label>
                    <input
                      value={field.label}
                      onChange={(e) => handleFieldChange(stepIndex, fieldIndex, 'label', e.target.value)}
                      className="border border-slate-400 w-full bg-slate-100 font-semibold text-sm px-2 py-1 rounded-md focus:border-slate-800 outline-none"
                    />
                  </span>
                  <span className="flex flex-col px-[8px] ml-[8px] mr-[4px] py-[12px]">
                    <label className="text-sm font-medium text-slate-600 mb-1">Type</label>
                    <select
                      value={field.type}
                      onChange={(e) => handleFieldChange(stepIndex, fieldIndex, 'type', e.target.value)}
                      className="border border-slate-400 w-full bg-slate-100 font-semibold text-sm px-2 py-1 rounded-md focus:border-slate-800 outline-none"
                    >
                       <option value="text">Text</option>
                      <option value="email">Email</option>
                      <option value="number">Number</option>
                      <option value="textarea">Textarea</option>
                      <option value="select">Select</option>
                      <option value="checkbox">Checkbox</option>
                      <option value="radio">Radio</option>
                    </select>
                  </span>
                  <span className="flex items-center px-[8px] ml-[8px] mr-[4px] py-[12px]">
                    <label className="text-sm font-medium text-slate-600 mr-2">Required</label>
                    <input
                      type="checkbox"
                      checked={field.required}
                      onChange={(e) => handleFieldChange(stepIndex, fieldIndex, 'required', e.target.checked)}
                      className="border border-slate-400 bg-slate-100"
                    />
                  </span>
                  <button
                    onClick={() => removeField(stepIndex, fieldIndex)}
                    className="mt-2 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Remove Field
                  </button>
                </div>
              ))}
              <button
                onClick={() => addField(stepIndex)}
                className="mt-2 px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Add Field
              </button>
            </div>
            <button
              onClick={() => removeStep(stepIndex)}
              className="mt-4 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Remove Step
            </button>
          </div>
        ))}
        <button
          onClick={addStep}
          className="mt-4 px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Add Step
        </button>
      </div>
    </div>
  )
}

MultiStepForm.craft = {
    props: {
      steps: [
        {
          title: "Step 1",
          fields: [
            {
              id: "name",
              label: "Name",
              type: "text",
              required: true,
            },
            {
              id: "email",
              label: "Email",
              type: "email",
              required: true,
            },
          ],
        },
        {
          title: "Step 2",
          fields: [
            {
              id: "age",
              label: "Age",
              type: "number",
              required: true,
            },
            {
              id: "gender",
              label: "Gender",
              type: "select",
              options: ["Male", "Female", "Other"],
              required: true,
            },
          ],
        },
      ],
      primaryColor: "#007bff",
      secondaryColor: "#6c757d",
      backgroundColor: "#ffffff",
      textColor: "#000000",
      opacity: 1,
      margin: "0",
      padding: "20px",
      borderRadius: "8px",
      submitButtonText: "Submit",
    },
    related: {
      settings: MultiStepFormSettings,
    },
  };