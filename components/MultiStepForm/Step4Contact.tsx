'use client';

import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { FormData } from '@/lib/formSchema';
import { User, Mail, Phone, Shield } from 'lucide-react';

interface Step4ContactProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

export default function Step4Contact({ register, errors }: Step4ContactProps) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Nur noch ein Schritt zu Ihren Solarangeboten!
        </h2>
        <p className="text-gray-600">
          Geben Sie Ihre Kontaktdaten ein, um Ihre kostenlosen Offerten zu erhalten
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="label flex items-center gap-2">
            <User className="w-4 h-4 text-primary" />
            Vorname
          </label>
          <input
            type="text"
            placeholder="Max"
            {...register('firstName')}
            className="input-field"
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
          )}
        </div>
        <div>
          <label className="label flex items-center gap-2">
            <User className="w-4 h-4 text-primary" />
            Nachname
          </label>
          <input
            type="text"
            placeholder="Mustermann"
            {...register('lastName')}
            className="input-field"
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="label flex items-center gap-2">
          <Mail className="w-4 h-4 text-primary" />
          E-Mail-Adresse
        </label>
        <input
          type="email"
          placeholder="max.mustermann@beispiel.ch"
          {...register('email')}
          className="input-field"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="label flex items-center gap-2">
          <Phone className="w-4 h-4 text-primary" />
          Telefonnummer
        </label>
        <input
          type="tel"
          placeholder="+41 79 123 45 67"
          {...register('phone')}
          className="input-field"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
        )}
        <p className="mt-1 text-sm text-gray-600">
          Damit wir Sie für Rückfragen erreichen können
        </p>
      </div>

      <div className="bg-gray-50 rounded-lg p-4">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            {...register('privacyAccepted')}
            className="mt-1 w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary"
          />
          <div className="flex-1">
            <span className="text-sm text-gray-900">
              Ich akzeptiere die{' '}
              <a href="/datenschutz" target="_blank" className="text-primary hover:underline">
                Datenschutzerklärung
              </a>{' '}
              und bin damit einverstanden, dass meine Daten zur Vermittlung von Solaranlagen-Angeboten verwendet werden.
            </span>
          </div>
        </label>
        {errors.privacyAccepted && (
          <p className="mt-2 text-sm text-red-600">{errors.privacyAccepted.message}</p>
        )}
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3">
        <Shield className="w-5 h-5 text-trust flex-shrink-0 mt-0.5" />
        <div className="text-sm text-gray-700">
          <p className="font-semibold text-gray-900 mb-1">Ihre Daten sind sicher</p>
          <p>
            Wir verwenden SSL-Verschlüsselung und geben Ihre Daten nur an geprüfte Solarteure weiter. Keine Weitergabe an Dritte.
          </p>
        </div>
      </div>
    </div>
  );
}
