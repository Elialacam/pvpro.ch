'use client';

import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { FormData } from '@/lib/formSchema';
import { MapPin, Home } from 'lucide-react';

interface Step3LocationProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
  watch: any;
}

export default function Step3Location({ register, errors, watch }: Step3LocationProps) {
  const roofType = watch('roofType');

  const roofTypes = [
    { value: 'flachdach', label: 'Flachdach', description: 'Flaches oder leicht geneigtes Dach' },
    { value: 'schraegdach', label: 'Schrägdach', description: 'Geneigtes Dach (häufigste Form)' },
    { value: 'gemischt', label: 'Gemischt', description: 'Kombination aus beiden' },
    { value: 'weiss-nicht', label: 'Weiss nicht', description: 'Ich bin mir nicht sicher' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Wo befindet sich Ihre Immobilie?
        </h2>
        <p className="text-gray-600">
          Wir benötigen Ihren Standort, um lokale Solarteure zu finden
        </p>
      </div>

      <div>
        <label className="label flex items-center gap-2">
          <MapPin className="w-5 h-5 text-primary" />
          Standort
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              placeholder="PLZ (z.B. 8001)"
              {...register('postalCode')}
              className="input-field"
              maxLength={4}
            />
            {errors.postalCode && (
              <p className="mt-1 text-sm text-red-600">{errors.postalCode.message}</p>
            )}
          </div>
          <div>
            <input
              type="text"
              placeholder="Stadt (z.B. Zürich)"
              {...register('city')}
              className="input-field"
            />
            {errors.city && (
              <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>
            )}
          </div>
        </div>
        <div className="mt-4">
          <input
            type="text"
            placeholder="z.B. Bahnhofstrasse 12"
            {...register('street')}
            className="input-field"
          />
          <p className="mt-1 text-xs text-gray-500">Straße und Hausnummer (optional)</p>
          {errors.street && (
            <p className="mt-1 text-sm text-red-600">{errors.street.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="label flex items-center gap-2">
          <Home className="w-5 h-5 text-primary" />
          Wie würden Sie Ihr Dach beschreiben?
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {roofTypes.map(({ value, label, description }) => (
            <label
              key={value}
              className={`radio-card ${roofType === value ? 'radio-card-selected' : ''}`}
            >
              <input
                type="radio"
                value={value}
                {...register('roofType')}
                className="sr-only"
              />
              <div className="text-center">
                <span className="font-semibold text-gray-900 block">{label}</span>
                <span className="text-sm text-gray-600">{description}</span>
              </div>
            </label>
          ))}
        </div>
        {errors.roofType && (
          <p className="mt-2 text-sm text-red-600">{errors.roofType.message}</p>
        )}
      </div>
    </div>
  );
}
