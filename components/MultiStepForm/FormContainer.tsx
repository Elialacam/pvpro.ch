'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  Home, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  Calendar,
  Wallet,
  MapPin,
  Phone,
  Mail,
  User,
  Info
} from 'lucide-react';
import { usePathname } from 'next/navigation';

const formSchema = z.object({
  propertyType: z.string().min(1, 'Seleziona un tipo di proprietà'),
  roofType: z.string().min(1, 'Seleziona un tipo di tetto'),
  electricityBill: z.string().min(1, 'Seleziona la tua spesa elettrica'),
  timeline: z.string().min(1, 'Seleziona quando vuoi iniziare'),
  zipCode: z.string().min(4, 'Inserisci un NPA valido').max(4, 'Inserisci un NPA valido'),
  firstName: z.string().min(2, 'Nome richiesto'),
  lastName: z.string().min(2, 'Cognome richiesto'),
  email: z.string().email('Email non valida'),
  phone: z.string().min(10, 'Numero di telefono richiesto'),
});

type FormData = z.infer<typeof formSchema>;

export default function FormContainer() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const pathname = usePathname();
  const isTicino = pathname.includes('ticino') || pathname.includes('lugano');

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      propertyType: '',
      roofType: '',
      electricityBill: '',
      timeline: '',
      zipCode: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    },
  });

  const nextStep = async () => {
    let fields: (keyof FormData)[] = [];
    if (step === 1) fields = ['propertyType', 'roofType'];
    if (step === 2) fields = ['electricityBill', 'timeline'];
    if (step === 3) fields = ['zipCode'];

    const isValid = await trigger(fields);
    if (isValid) setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSuccess(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const labels = {
    step1: {
      title: isTicino ? 'Tipo di Proprietà' : 'Immobilientyp',
      subtitle: isTicino ? 'Che tipo di edificio vuoi coprire con il solare?' : 'Für welche Gebäudeart planen Sie die Anlage?',
      options: {
        house: isTicino ? 'Casa Singola' : 'Einfamilienhaus',
        apartment: isTicino ? 'Condominio' : 'Mehrfamilienhaus',
        commercial: isTicino ? 'Commerciale' : 'Gewerbebau',
        roof: isTicino ? 'Tipo di Tetto' : 'Dachtyp',
        flat: isTicino ? 'Tetto Piano' : 'Flachdach',
        pitched: isTicino ? 'Tetto a Falde' : 'Satteldach',
      }
    },
    step2: {
      title: isTicino ? 'Consumo Energetico' : 'Energieverbrauch',
      subtitle: isTicino ? 'Aiutaci a dimensionare il tuo impianto' : 'Helfen Sie uns bei der Dimensionierung',
      options: {
        bill: isTicino ? 'Spesa mensile elettricità' : 'Monatliche Stromkosten',
        low: 'CHF < 100',
        medium: 'CHF 100-200',
        high: 'CHF 200+',
        timeline: isTicino ? 'Tempistiche' : 'Zeitplan',
        now: isTicino ? 'Il prima possibile' : 'Sofort',
        soon: isTicino ? 'Entro 3 mesi' : 'In 3 Monaten',
        later: isTicino ? 'Solo informazioni' : 'Nur Information',
      }
    },
    step3: {
      title: isTicino ? 'Località' : 'Standort',
      subtitle: isTicino ? 'Dove si trova l\'edificio?' : 'Wo befindet sich das Gebäude?',
      zip: 'NPA (ZIP)',
    },
    step4: {
      title: isTicino ? 'Dati di Contatto' : 'Kontaktdaten',
      subtitle: isTicino ? 'Dove dobbiamo inviare i preventivi?' : 'Wohin sollen wir die Angebote senden?',
      firstName: isTicino ? 'Nome' : 'Vorname',
      lastName: isTicino ? 'Cognome' : 'Nachname',
      phone: isTicino ? 'Telefono' : 'Telefon',
      submit: isTicino ? 'Ottieni Preventivi' : 'Angebote anfordern',
    },
    success: {
      title: isTicino ? 'Richiesta Inviata!' : 'Anfrage gesendet!',
      message: isTicino ? 'Ti contatteremo a breve con le migliori offerte.' : 'Wir werden uns in Kürze mit den besten Angeboten bei Ihnen melden.',
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 text-center py-16">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-4">{labels.success.title}</h3>
        <p className="text-xl text-gray-600 max-w-md mx-auto">{labels.success.message}</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Progress Bar */}
      <div className="bg-gray-100 h-2">
        <motion.div 
          className="bg-primary h-full"
          initial={{ width: '0%' }}
          animate={{ width: `${(step / 4) * 100}%` }}
        />
      </div>

      <div className="p-8">
        <form onSubmit={handleSubmit(onSubmit)}>
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{labels.step1.title}</h3>
                  <p className="text-gray-600">{labels.step1.subtitle}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { id: 'house', icon: Home, label: labels.step1.options.house },
                    { id: 'apartment', icon: Building2, label: labels.step1.options.apartment },
                    { id: 'commercial', icon: Zap, label: labels.step1.options.commercial },
                  ].map((item) => (
                    <label key={item.id} className="relative cursor-pointer group">
                      <input
                        type="radio"
                        value={item.id}
                        {...register('propertyType')}
                        className="peer sr-only"
                      />
                      <div className="p-4 border-2 border-gray-100 rounded-xl flex flex-col items-center gap-3 peer-checked:border-primary peer-checked:bg-primary/5 transition-all group-hover:border-primary/50">
                        <item.icon className="w-8 h-8 text-gray-400 peer-checked:text-primary" />
                        <span className="font-medium text-gray-900">{item.label}</span>
                      </div>
                    </label>
                  ))}
                </div>
                {errors.propertyType && <p className="text-red-500 text-sm">{errors.propertyType.message}</p>}

                <div className="pt-6">
                  <p className="font-bold text-gray-900 mb-4 text-center">{labels.step1.options.roof}</p>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { id: 'pitched', label: labels.step1.options.pitched },
                      { id: 'flat', label: labels.step1.options.flat },
                    ].map((item) => (
                      <label key={item.id} className="relative cursor-pointer">
                        <input
                          type="radio"
                          value={item.id}
                          {...register('roofType')}
                          className="peer sr-only"
                        />
                        <div className="p-4 border-2 border-gray-100 rounded-xl text-center font-medium peer-checked:border-primary peer-checked:bg-primary/5 transition-all">
                          {item.label}
                        </div>
                      </label>
                    ))}
                  </div>
                  {errors.roofType && <p className="text-red-500 text-sm mt-2">{errors.roofType.message}</p>}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{labels.step2.title}</h3>
                  <p className="text-gray-600">{labels.step2.subtitle}</p>
                </div>

                <div className="space-y-4">
                  <p className="font-bold text-gray-900">{labels.step2.options.bill}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {['low', 'medium', 'high'].map((item) => (
                      <label key={item} className="relative cursor-pointer">
                        <input
                          type="radio"
                          value={item}
                          {...register('electricityBill')}
                          className="peer sr-only"
                        />
                        <div className="p-4 border-2 border-gray-100 rounded-xl text-center font-medium peer-checked:border-primary peer-checked:bg-primary/5 transition-all">
                          {labels.step2.options[item as keyof typeof labels.step2.options]}
                        </div>
                      </label>
                    ))}
                  </div>
                  {errors.electricityBill && <p className="text-red-500 text-sm">{errors.electricityBill.message}</p>}
                </div>

                <div className="pt-6">
                  <p className="font-bold text-gray-900 mb-4">{labels.step2.options.timeline}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      { id: 'now', label: labels.step2.options.now },
                      { id: 'soon', label: labels.step2.options.soon },
                      { id: 'later', label: labels.step2.options.later },
                    ].map((item) => (
                      <label key={item.id} className="relative cursor-pointer">
                        <input
                          type="radio"
                          value={item.id}
                          {...register('timeline')}
                          className="peer sr-only"
                        />
                        <div className="p-4 border-2 border-gray-100 rounded-xl text-center font-medium peer-checked:border-primary peer-checked:bg-primary/5 transition-all">
                          {item.label}
                        </div>
                      </label>
                    ))}
                  </div>
                  {errors.timeline && <p className="text-red-500 text-sm mt-2">{errors.timeline.message}</p>}
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{labels.step3.title}</h3>
                  <p className="text-gray-600">{labels.step3.subtitle}</p>
                </div>

                <div className="max-w-xs mx-auto">
                  <label className="block text-sm font-medium text-gray-700 mb-2">{labels.step3.zip}</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="6900"
                      {...register('zipCode')}
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-100 rounded-xl focus:border-primary outline-none transition-all text-xl"
                    />
                  </div>
                  {errors.zipCode && <p className="text-red-500 text-sm mt-2">{errors.zipCode.message}</p>}
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{labels.step4.title}</h3>
                  <p className="text-gray-600">{labels.step4.subtitle}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">{labels.step4.firstName}</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        {...register('firstName')}
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-100 rounded-xl focus:border-primary outline-none"
                      />
                    </div>
                    {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">{labels.step4.lastName}</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        {...register('lastName')}
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-100 rounded-xl focus:border-primary outline-none"
                      />
                    </div>
                    {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="email"
                        {...register('email')}
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-100 rounded-xl focus:border-primary outline-none"
                      />
                    </div>
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">{labels.step4.phone}</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        {...register('phone')}
                        placeholder="+41"
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-100 rounded-xl focus:border-primary outline-none"
                      />
                    </div>
                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-12 flex justify-between items-center">
            {step > 1 ? (
              <button
                type="button"
                onClick={prevStep}
                className="flex items-center gap-2 text-gray-600 font-semibold hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                {isTicino ? 'Indietro' : 'Zurück'}
              </button>
            ) : <div />}

            {step < 4 ? (
              <button
                type="button"
                onClick={nextStep}
                className="btn-primary flex items-center gap-2 px-8 py-3"
              >
                {isTicino ? 'Avanti' : 'Weiter'}
                <ArrowRight className="w-5 h-5" />
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary flex items-center gap-2 px-8 py-3 disabled:opacity-50"
              >
                {isSubmitting ? (isTicino ? 'Invio...' : 'Senden...') : labels.step4.submit}
                {!isSubmitting && <CheckCircle2 className="w-5 h-5" />}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
