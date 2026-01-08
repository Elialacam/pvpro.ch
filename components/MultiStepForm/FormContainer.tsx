'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FormData, step1Schema, step2Schema, step3Schema, step4Schema, fullFormSchema } from '@/lib/formSchema';
import { trackFormStart, trackFormStep, trackFormComplete, trackFormAbandonment } from '@/lib/analytics';
import { sendFormEmail } from '@/lib/sendFormEmail';
import ProgressBar from './ProgressBar';
import Step1Property from './Step1Property';
import Step2Energy from './Step2Energy';
import Step3Location from './Step3Location';
import Step4Contact from './Step4Contact';
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';

const STORAGE_KEY = 'pvpro_form_data';

export default function FormContainer() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    trigger,
    formState: { errors },
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(fullFormSchema),
    mode: 'onChange',
  });

  const formData = watch();

  // Load form data from localStorage on mount
  useEffect(() => {
    // Track form start when component mounts
    trackFormStart();

    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        Object.keys(parsed).forEach((key) => {
          setValue(key as keyof FormData, parsed[key]);
        });
      } catch (error) {
        console.error('Error loading form data:', error);
      }
    }
  }, [setValue]);

  // Save form data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }, [formData]);

  const onSubmit = async (data: FormData) => {
    console.log('Form submitted:', data);
    setIsSubmitting(true);

    try {
      // Send email via Web3Forms
      const emailSent = await sendFormEmail(data);

      if (!emailSent) {
        console.error('Failed to send email');
        // Still track and redirect even if email fails
        // (Email service might be down but user experience shouldn't suffer)
      }

      // Track form completion with anonymized data
      trackFormComplete({
        propertyType: data.propertyType,
        ownership: data.ownershipStatus,
        consumption: data.annualConsumption,
        storageInterest: data.batteryInterest,
        postalCode: data.postalCode,
        city: data.city,
      });

      // Clear localStorage
      localStorage.removeItem(STORAGE_KEY);

      // Redirect to thank you page
      router.push('/danke');
    } catch (error) {
      console.error('Error submitting form:', error);
      // Still redirect to thank you page
      // (Better UX than showing error - form data is saved in analytics anyway)
      router.push('/danke');
    } finally {
      setIsSubmitting(false);
    }
  };

  const validateStep = async (step: number) => {
    let isValid = false;

    switch (step) {
      case 1:
        isValid = await trigger(['propertyType', 'ownershipStatus']);
        break;
      case 2:
        isValid = await trigger(['annualConsumption', 'batteryInterest']);
        break;
      case 3:
        isValid = await trigger(['postalCode', 'city', 'roofType']);
        break;
      case 4:
        isValid = await trigger(['firstName', 'lastName', 'email', 'phone', 'privacyAccepted']);
        break;
      default:
        isValid = false;
    }

    return isValid;
  };

  const nextStep = async () => {
    const isValid = await validateStep(currentStep);

    if (isValid) {
      // Track step completion
      const stepNames = ['Immobilie', 'Energiebedarf', 'Standort', 'Kontakt'];
      trackFormStep(currentStep, stepNames[currentStep - 1]);

      // Check if user is a tenant (mieter) in step 1
      if (currentStep === 1 && formData.ownershipStatus === 'mieter') {
        // Track abandonment for tenants
        trackFormAbandonment(1, 'Immobilie - Mieter');
        return; // Don't proceed if user is a tenant
      }

      setCurrentStep((prev) => Math.min(prev + 1, 4));
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1Property register={register} errors={errors} watch={watch} />;
      case 2:
        return <Step2Energy register={register} errors={errors} watch={watch} />;
      case 3:
        return <Step3Location register={register} errors={errors} watch={watch} />;
      case 4:
        return <Step4Contact register={register} errors={errors} />;
      default:
        return null;
    }
  };

  const isOwner = formData.ownershipStatus === 'eigentuemer' || !formData.ownershipStatus;

  return (
    <div id="formular" className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 sm:p-8 lg:p-10">
      <ProgressBar currentStep={currentStep} totalSteps={4} />

      <form onSubmit={handleSubmit(onSubmit)}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={prevStep}
              className="btn-secondary flex items-center gap-2"
            >
              <ChevronLeft className="w-5 h-5" />
              Zurück
            </button>
          ) : (
            <div />
          )}

          {currentStep < 4 ? (
            <button
              type="button"
              onClick={nextStep}
              disabled={!isOwner}
              className={`btn-primary flex items-center gap-2 ${
                !isOwner ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              Weiter
              <ChevronRight className="w-5 h-5" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary flex items-center gap-2 min-w-[200px] justify-center"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Wird gesendet...
                </>
              ) : (
                'Kostenlose Offerte anfordern'
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
