'use client'
import { useState } from 'react';
import { FormProvider, useForm, SubmitHandler, FieldValues, Controller } from 'react-hook-form';
import PersonalInformation from './personalInformation';
import AddressInformation from './addressInformation';
import DocumentUpload from './documentUpload';
import Review from './review';

const steps = [
  { name: 'Personal Information', component: PersonalInformation },
  { name: 'Address Information', component: AddressInformation },
  { name: 'Document Upload', component: DocumentUpload },
  { name: 'Review', component: Review },
];

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const methods = useForm({ mode: 'onBlur' });
  const { handleSubmit, formState: { errors, isValid }, trigger } = methods;

  const progress = ((currentStep + 1) / steps.length) * 100;
  const StepComponent = steps[currentStep].component;

  const nextStep = async () => {
    const isStepValid = await trigger(); // Trigger validation for current step
    if (isStepValid) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log('Form submitted', data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
          <div className="h-2 bg-blue-500 rounded-full" style={{ width: `${progress}%` }}></div>
        </div>

        <div className="text-center mb-4">
          <span className="text-xl font-semibold">{Math.round(progress)}%</span>
        </div>

        {/* Pass errors to the StepComponent */}
        <StepComponent errors={errors} /> 

        <div className="flex justify-between mt-4">
          {currentStep > 0 && (
            <button
              type="button"
              onClick={prevStep}
              className="px-4 py-2 bg-gray-500 text-white rounded-md"
            >
              Back
            </button>
          )}

          {currentStep < steps.length - 1 ? (
            <button
              type="button"
              onClick={nextStep}
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
              disabled={!isValid} 
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded-md"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </FormProvider>
  );
};

export default MultiStepForm;
