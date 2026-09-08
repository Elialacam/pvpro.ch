"use client";

import { useState } from 'react';
import { CheckCircle2, Contact, MessageCircle, Phone } from 'lucide-react';

type Locale = 'de' | 'it' | 'fr' | 'en';

const PHONE_DISPLAY = '+41 76 270 38 87';
const PHONE_LINK = '+41762703887';

const content: Record<Locale, {
  title: string;
  received: string;
  question: string;
  whatsappTitle: string;
  whatsappText: string;
  whatsappHint: string;
  callbackTitle: string;
  callbackIntro: string;
  saveContact: string;
}> = {
  de: {
    title: 'Vielen Dank für Ihre Anfrage!',
    received: 'Ihre Angaben wurden erfolgreich übermittelt.',
    question: 'Wie möchten Sie Ihr Interesse an bis zu 3 kostenlosen Offerten bestätigen?',
    whatsappTitle: 'Über WhatsApp bestätigen',
    whatsappText: 'Hallo Mario, ich bestätige mein Interesse an bis zu 3 kostenlosen Offerten für eine Photovoltaikanlage.',
    whatsappHint: 'Am schnellsten und direkt mit Mario',
    callbackTitle: 'Ich möchte zurückgerufen werden',
    callbackIntro: 'Wir rufen Sie in Kürze von dieser Nummer an:',
    saveContact: 'Marios Nummer speichern',
  },
  it: {
    title: 'Grazie per la tua richiesta!',
    received: 'I tuoi dati sono stati inviati correttamente.',
    question: 'Come preferisci confermare il tuo interesse a ricevere fino a 3 preventivi gratuiti?',
    whatsappTitle: 'Conferma tramite WhatsApp',
    whatsappText: 'Ciao Mario, confermo il mio interesse a ricevere fino a 3 preventivi gratuiti per un impianto fotovoltaico.',
    whatsappHint: 'Il modo più rapido per parlare con Mario',
    callbackTitle: 'Preferisco essere richiamato',
    callbackIntro: 'Ti chiameremo a breve da questo numero:',
    saveContact: 'Salva il numero di Mario',
  },
  fr: {
    title: 'Merci pour votre demande !',
    received: 'Vos informations ont bien été transmises.',
    question: 'Comment souhaitez-vous confirmer votre intérêt pour recevoir jusqu’à 3 offres gratuites ?',
    whatsappTitle: 'Confirmer via WhatsApp',
    whatsappText: 'Bonjour Mario, je confirme mon intérêt pour recevoir jusqu’à 3 offres gratuites pour une installation photovoltaïque.',
    whatsappHint: 'Le moyen le plus rapide de joindre Mario',
    callbackTitle: 'Je préfère être rappelé',
    callbackIntro: 'Nous vous appellerons prochainement depuis ce numéro :',
    saveContact: 'Enregistrer le numéro de Mario',
  },
  en: {
    title: 'Thank you for your request!',
    received: 'Your details have been submitted successfully.',
    question: 'How would you like to confirm your interest in receiving up to 3 free quotes?',
    whatsappTitle: 'Confirm via WhatsApp',
    whatsappText: 'Hi Mario, I confirm my interest in receiving up to 3 free quotes for a photovoltaic system.',
    whatsappHint: 'The fastest way to speak with Mario',
    callbackTitle: 'I prefer a callback',
    callbackIntro: 'We will call you shortly from this number:',
    saveContact: 'Save Mario’s number',
  },
};

export default function ThankYouConfirmation({ locale }: { locale: Locale }) {
  const [showCallback, setShowCallback] = useState(false);
  const t = content[locale];
  const whatsappUrl = `https://wa.me/${PHONE_LINK.replace('+', '')}?text=${encodeURIComponent(t.whatsappText)}`;

  return (
    <section className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-white px-4 py-10 sm:px-6 sm:py-16">
      <div className="mx-auto w-full max-w-2xl">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-orange-100/70 sm:h-16 sm:w-16">
            <CheckCircle2 className="h-8 w-8 text-[#fcb210] sm:h-9 sm:w-9" strokeWidth={2.3} />
          </div>
          <h1 className="text-2xl font-extrabold tracking-tight text-gray-950 sm:text-3xl">
            {t.title}
          </h1>
          <p className="mt-2 text-sm text-gray-500 sm:text-base">{t.received}</p>
        </div>

        <div className="mt-8 sm:mt-10">
          <h2 className="mx-auto max-w-xl text-center text-lg font-bold leading-snug text-gray-900 sm:text-xl">
            {t.question}
          </h2>

          <div className="mt-5 space-y-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full items-center gap-4 rounded-2xl bg-[#20b85a] px-4 py-4 text-left text-white shadow-lg shadow-green-600/15 transition hover:bg-[#179b4a] sm:px-5"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/15">
                <MessageCircle className="h-7 w-7" fill="currentColor" strokeWidth={1.8} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-base font-extrabold sm:text-lg">{t.whatsappTitle}</span>
                <span className="mt-0.5 block text-xs text-white/80 sm:text-sm">{t.whatsappHint}</span>
              </span>
              <span className="text-2xl transition-transform group-hover:translate-x-1" aria-hidden="true">›</span>
            </a>

            <button
              type="button"
              onClick={() => setShowCallback((current) => !current)}
              aria-expanded={showCallback}
              className="flex w-full items-center gap-4 rounded-2xl border-2 border-gray-200 bg-white px-4 py-4 text-left text-gray-900 transition hover:border-[#fcb210] sm:px-5"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-50 text-[#e8a000]">
                <Phone className="h-6 w-6" />
              </span>
              <span className="flex-1 text-base font-bold sm:text-lg">{t.callbackTitle}</span>
              <span className={`text-2xl text-gray-400 transition-transform ${showCallback ? 'rotate-90' : ''}`} aria-hidden="true">›</span>
            </button>

            {showCallback && (
              <div className="rounded-2xl border border-orange-200 bg-orange-50/70 px-5 py-5 text-center">
                <p className="text-sm text-gray-600">{t.callbackIntro}</p>
                <a href={`tel:${PHONE_LINK}`} className="mt-2 block text-xl font-extrabold text-gray-950">
                  {PHONE_DISPLAY}
                </a>
                <a
                  href="/mario-kopar.vcf"
                  download
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-gray-700"
                >
                  <Contact className="h-5 w-5" />
                  {t.saveContact}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}