'use client';

import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { FormData } from '@/lib/formSchema';
import { Home, Building, Building2 } from 'lucide-react';

interface Step1PropertyProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
  watch: any;
}

export default function Step1Property({ register, errors, watch }: Step1PropertyProps) {
  const propertyType = watch('propertyType');
  const ownershipStatus = watch('ownershipStatus');

  const propertyTypes = [
    { value: 'einfamilienhaus', label: 'Einfamilienhaus', icon: Home },
    { value: 'mehrfamilienhaus', label: 'Mehrfamilienhaus', icon: Building },
    { value: 'gewerbegebaeude', label: 'Gewerbegebäude', icon: Building2 },
  ];

  const ownershipOptions = [
    { value: 'eigentuemer', label: 'Eigentümer' },
    { value: 'mieter', label: 'Mieter' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Was für eine Immobilie haben Sie?
        </h2>
        <p className="text-gray-600">
          Wählen Sie den Typ Ihrer Immobilie aus
        </p>
      </div>

      <div>
        <label className="label">Immobilientyp</label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {propertyTypes.map(({ value, label, icon: Icon }) => (
            <label
              key={value}
              className={`radio-card ${propertyType === value ? 'radio-card-selected' : ''}`}
            >
              <input
                type="radio"
                value={value}
                {...register('propertyType')}
                className="sr-only"
              />
              <div className="flex flex-col items-center text-center gap-3">
                <Icon className="w-8 h-8 text-primary" />
                <span className="font-semibold text-gray-900">{label}</span>
              </div>
            </label>
          ))}
        </div>
        {errors.propertyType && (
          <p className="mt-2 text-sm text-red-600">{errors.propertyType.message}</p>
        )}
      </div>

      <div>
        <label className="label">Sind Sie Eigentümer oder Mieter?</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {ownershipOptions.map(({ value, label }) => (
            <label
              key={value}
              className={`radio-card ${ownershipStatus === value ? 'radio-card-selected' : ''}`}
            >
              <input
                type="radio"
                value={value}
                {...register('ownershipStatus')}
                className="sr-only"
              />
              <div className="text-center">
                <span className="font-semibold text-gray-900">{label}</span>
              </div>
            </label>
          ))}
        </div>
        {errors.ownershipStatus && (
          <p className="mt-2 text-sm text-red-600">{errors.ownershipStatus.message}</p>
        )}
        {ownershipStatus === 'mieter' && (
          <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm text-yellow-800">
              Leider können wir nur Eigentümern helfen, da für die Installation einer Solaranlage das Eigentum an der Immobilie erforderlich ist.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
