'use client';

import { FileText, Search, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLocale } from '@/lib/LocaleContext';
import { Locale } from '@/lib/i18n';

const howItWorksContent: Record<Locale, {
  title: string;
  subtitle: string;
  cta: string;
  steps: { step: string; title: string; description: string }[];
}> = {
  de: {
    title: 'So funktioniert\'s',
    subtitle: 'In 3 einfachen Schritten vergleichen Sie die Angebote und wählen die günstigste Lösung',
    cta: 'Jetzt starten',
    steps: [
      { step: '1', title: 'Formular ausfüllen', description: 'Formular ausfüllen (2 Minuten) — kostenlos und unverbindlich.' },
      { step: '2', title: 'Angebote vergleichen', description: 'Erhalten Sie bis zu 3 massgeschneiderte Offerten von zertifizierten Installateuren in Ihrem Kanton.' },
      { step: '3', title: 'Installateur wählen', description: 'Wir vergleichen echte Preise und zertifizierte Installateure in Ihrer Region — Sie wählen das beste Angebot.' },
    ],
  },
  fr: {
    title: 'Comment ça marche',
    subtitle: 'En 3 étapes simples, comparez les offres et choisissez la solution la plus avantageuse',
    cta: 'Commencer maintenant',
    steps: [
      { step: '1', title: 'Remplir le formulaire', description: 'Remplissez le formulaire (2 minutes) — gratuit et sans engagement.' },
      { step: '2', title: 'Comparer les offres', description: 'Recevez jusqu\'à 3 devis personnalisés d\'installateurs certifiés dans votre canton.' },
      { step: '3', title: 'Choisir l\'installateur', description: 'Nous comparons les prix réels et les installateurs certifiés dans votre région — vous choisissez la meilleure offre.' },
    ],
  },
  en: {
    title: 'How It Works',
    subtitle: 'In 3 simple steps, compare offers and choose the most affordable solution',
    cta: 'Get Started',
    steps: [
      { step: '1', title: 'Fill Out the Form', description: 'Fill out the form (2 minutes) — free and no obligation.' },
      { step: '2', title: 'Compare Quotes', description: 'Receive up to 3 customized quotes from certified installers in your canton.' },
      { step: '3', title: 'Choose Your Installer', description: 'We compare real prices and certified installers in your region — you choose the best offer.' },
    ],
  },
  it: {
    title: 'Come funziona',
    subtitle: 'In 3 semplici passi confronti le offerte e scegli la soluzione più conveniente',
    cta: 'Inizia ora',
    steps: [
      { step: '1', title: 'Compila il modulo', description: 'Compila il modulo (2 minuti) — gratuito e senza impegno.' },
      { step: '2', title: 'Confronta i preventivi', description: 'Ricevi fino a 3 preventivi personalizzati da installatori certificati nel tuo cantone.' },
      { step: '3', title: 'Scegli il tuo installatore', description: 'Confrontiamo prezzi reali e installatori certificati nella tua regione — tu scegli l\'offerta migliore.' },
    ],
  },
};

const icons = [FileText, Search, CheckCircle];

function Step({ item, index }: { item: { step: string; title: string; description: string }; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const Icon = icons[index];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="relative text-center"
    >
      <div className="relative inline-block mb-6">
        <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-md border border-gray-100 relative z-20">
          <Icon className="w-9 h-9 text-primary" />
        </div>
        <div className="absolute -top-2.5 -right-2.5 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-extrabold text-sm shadow-md z-30">
          {item.step}
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
      <p className="text-gray-500 leading-relaxed">{item.description}</p>
    </motion.div>
  );
}

export default function HowItWorks() {
  const locale = useLocale();
  const content = howItWorksContent[locale] || howItWorksContent.de;

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            {content.title}
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 relative">
          <div
            className="hidden md:block absolute top-10 h-0.5 z-0"
            style={{ left: '20%', right: '20%', background: 'linear-gradient(90deg, #dcfce7, #86efac, #dcfce7)' }}
          />
          {content.steps.map((item, index) => (
            <Step key={index} item={item} index={index} />
          ))}
        </div>

        <div className="text-center mt-14">
          <button
            onClick={() => { window.location.href = '/anfrage'; }}
            className="btn-primary text-base px-8 py-3.5 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
          >
            {content.cta}
          </button>
        </div>
      </div>
    </section>
  );
}
