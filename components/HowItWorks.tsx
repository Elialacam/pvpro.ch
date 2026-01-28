'use client';

import { FileText, Search, CheckCircle } from 'lucide-react';
import { useLocale } from '@/lib/LocaleContext';
import { Locale } from '@/lib/i18n';

// HowItWorks content per locale
const howItWorksContent: Record<Locale, {
  title: string;
  subtitle: string;
  cta: string;
  steps: {
    step: string;
    title: string;
    description: string;
  }[];
}> = {
  de: {
    title: 'So funktioniert\'s',
    subtitle: 'In drei einfachen Schritten zur perfekten Solaranlage',
    cta: 'Jetzt starten',
    steps: [
      {
        step: '1',
        title: 'Formular ausfüllen',
        description: 'In nur 2 Minuten geben Sie Ihre Anforderungen ein – kostenlos und unverbindlich.',
      },
      {
        step: '2',
        title: 'Angebote vergleichen',
        description: 'Sie erhalten bis zu 3 massgeschneiderte Offerten von geprüften Solarteuren aus Ihrer Region.',
      },
      {
        step: '3',
        title: 'Installateur wählen',
        description: 'Vergleichen Sie die Angebote und wählen Sie den besten Solarteur für Ihr Projekt. Sparen Sie Geld!',
      },
    ],
  },
  fr: {
    title: 'Comment ça marche',
    subtitle: 'En trois étapes simples vers l\'installation solaire parfaite',
    cta: 'Commencer maintenant',
    steps: [
      {
        step: '1',
        title: 'Remplir le formulaire',
        description: 'En seulement 2 minutes, indiquez vos besoins – gratuit et sans engagement.',
      },
      {
        step: '2',
        title: 'Comparer les offres',
        description: 'Recevez jusqu\'à 3 devis personnalisés d\'installateurs certifiés de votre région.',
      },
      {
        step: '3',
        title: 'Choisir l\'installateur',
        description: 'Comparez les offres et choisissez le meilleur installateur pour votre projet. Économisez!',
      },
    ],
  },
  en: {
    title: 'How It Works',
    subtitle: 'In three simple steps to the perfect solar system',
    cta: 'Get Started',
    steps: [
      {
        step: '1',
        title: 'Fill Out the Form',
        description: 'In just 2 minutes, enter your requirements – free and no obligation.',
      },
      {
        step: '2',
        title: 'Compare Quotes',
        description: 'Receive up to 3 customized quotes from certified installers in your region.',
      },
      {
        step: '3',
        title: 'Choose Your Installer',
        description: 'Compare offers and choose the best installer for your project. Save money!',
      },
    ],
  },
  it: {
    title: 'Come funziona',
    subtitle: 'In tre semplici passi verso l\'impianto solare perfetto',
    cta: 'Inizia ora',
    steps: [
      {
        step: '1',
        title: 'Compila il modulo',
        description: 'In soli 2 minuti inserisci le tue esigenze – gratuito e senza impegno.',
      },
      {
        step: '2',
        title: 'Confronta i preventivi',
        description: 'Ricevi fino a 3 preventivi personalizzati da installatori certificati nella tua regione.',
      },
      {
        step: '3',
        title: 'Scegli il tuo installatore',
        description: 'Confronta le offerte e scegli il miglior installatore per il tuo progetto. Risparmia denaro!',
      },
    ],
  },
};

const icons = [FileText, Search, CheckCircle];

export default function HowItWorks() {
  const locale = useLocale();
  const content = howItWorksContent[locale] || howItWorksContent.de;

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {content.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connection Lines for Desktop */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-200 via-primary-300 to-primary-200 transform translate-y-[-50%] z-0"
               style={{ left: '16.67%', right: '16.67%' }} />

          {content.steps.map((item, index) => {
            const Icon = icons[index];
            return (
              <div key={index} className="relative z-10">
                <div className="text-center">
                  {/* Step Number Badge */}
                  <div className="relative inline-block mb-6">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-primary-100 relative z-20">
                      <Icon className="w-10 h-10 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md z-30">
                      {item.step}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => {
              const formElement = document.getElementById('formular');
              if (formElement) {
                const elementPosition = formElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - (window.innerHeight / 2) + (formElement.offsetHeight / 2);
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
              }
            }}
            className="btn-primary"
          >
            {content.cta}
          </button>
        </div>
      </div>
    </section>
  );
}
