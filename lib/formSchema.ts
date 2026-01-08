import { z } from 'zod';

export const step1Schema = z.object({
  propertyType: z.enum(['einfamilienhaus', 'mehrfamilienhaus', 'gewerbegebaeude'], {
    required_error: 'Bitte wählen Sie einen Immobilientyp',
  }),
  ownershipStatus: z.enum(['eigentuemer', 'mieter'], {
    required_error: 'Bitte wählen Sie Ihren Status',
  }),
});

export const step2Schema = z.object({
  annualConsumption: z.enum(['unter-2000', '2000-4000', '4000-6000', 'ueber-6000'], {
    required_error: 'Bitte wählen Sie Ihren Stromverbrauch',
  }),
  batteryInterest: z.enum(['ja', 'nein', 'unsicher'], {
    required_error: 'Bitte wählen Sie eine Option',
  }),
});

export const step3Schema = z.object({
  postalCode: z.string().min(4, 'Bitte geben Sie eine gültige PLZ ein').max(4, 'PLZ muss 4 Ziffern haben'),
  city: z.string().min(2, 'Bitte geben Sie eine Stadt ein'),
  street: z.string().optional(),
  roofType: z.enum(['flachdach', 'schraegdach', 'gemischt', 'weiss-nicht'], {
    required_error: 'Bitte wählen Sie einen Dachtyp',
  }),
});

export const step4Schema = z.object({
  firstName: z.string().min(2, 'Vorname muss mindestens 2 Zeichen haben'),
  lastName: z.string().min(2, 'Nachname muss mindestens 2 Zeichen haben'),
  email: z.string().email('Bitte geben Sie eine gültige E-Mail-Adresse ein'),
  phone: z.string().min(10, 'Bitte geben Sie eine gültige Telefonnummer ein'),
  comments: z.string().optional(),
  privacyAccepted: z.boolean().refine((val) => val === true, {
    message: 'Sie müssen die Datenschutzerklärung akzeptieren',
  }),
});

export const fullFormSchema = z.object({
  ...step1Schema.shape,
  ...step2Schema.shape,
  ...step3Schema.shape,
  ...step4Schema.shape,
});

export type FormData = z.infer<typeof fullFormSchema>;
export type Step1Data = z.infer<typeof step1Schema>;
export type Step2Data = z.infer<typeof step2Schema>;
export type Step3Data = z.infer<typeof step3Schema>;
export type Step4Data = z.infer<typeof step4Schema>;
