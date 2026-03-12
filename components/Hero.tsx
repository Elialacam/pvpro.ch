'use client';

import { CheckCircle, ChevronRight, Users, Star, Shield } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from '@/lib/LocaleContext';
import { Locale } from '@/lib/i18n';

const heroContent: Record<Locale, {
  title: string;
  subtitle: string;
  description: string;
  checkmarks: string[];
  cta: string;
  formTitle: string;
  formSub: string;
  formBullets: string[];
  formCta: string;
}> = {
  de: {
    title: 'Solaranlagen in der Schweiz vergleichen:',
    subtitle: 'geprüfte Anbieter & Förder-Check',
    description: 'Wir analysieren Ihr Dach, prüfen verfügbare Förderungen und vermitteln geprüfte Solarteure aus Ihrer Region.',
    checkmarks: ['Geprüfte Schweizer Solarteure', 'Kantonale Angebote vergleichen', 'Kostenlos & unverbindlich', 'Keine Werbeanrufe'],
    cta: 'Jetzt Angebote vergleichen',
    formTitle: 'Kostenlose Offerte erhalten',
    formSub: 'In 2 Minuten fertig. Keine Werbeanrufe.',
    formBullets: ['Bis zu 3 Offerten von geprüften Installateuren', 'Kostenlose Förderprüfung inbegriffen', '100% unverbindlich & kostenlos'],
    formCta: 'Jetzt starten →',
  },
  fr: {
    title: 'Comparer les installations solaires en Suisse :',
    subtitle: 'fournisseurs certifiés & vérification des subventions',
    description: 'Nous analysons votre toit, vérifions les subventions disponibles et vous mettons en relation avec des installateurs certifiés de votre région.',
    checkmarks: ['Installateurs suisses certifiés', 'Comparer les offres cantonales', 'Gratuit et sans engagement', 'Pas d\'appels publicitaires'],
    cta: 'Comparer les offres maintenant',
    formTitle: 'Devis gratuit',
    formSub: 'Prêt en 2 minutes. Aucun appel publicitaire.',
    formBullets: ['Jusqu\'à 3 devis d\'installateurs certifiés', 'Vérification des subventions incluse', '100% sans engagement & gratuit'],
    formCta: 'Commencer maintenant →',
  },
  en: {
    title: 'Compare solar panels in Switzerland:',
    subtitle: 'certified providers & subsidy check',
    description: 'We analyze your roof, check available subsidies and connect you with certified solar installers from your region.',
    checkmarks: ['Certified Swiss installers', 'Compare cantonal offers', 'Free & no obligation', 'No sales calls'],
    cta: 'Compare quotes now',
    formTitle: 'Get free quotes',
    formSub: 'Ready in 2 minutes. No sales calls.',
    formBullets: ['Up to 3 quotes from certified installers', 'Free subsidy check included', '100% no obligation & free'],
    formCta: 'Start now →',
  },
  it: {
    title: 'Confronta impianti solari in Svizzera:',
    subtitle: 'fornitori certificati & verifica incentivi',
    description: 'Analizziamo il tuo tetto, verifichiamo i sussidi disponibili e ti mettiamo in contatto con installatori certificati della tua regione.',
    checkmarks: ['Installatori svizzeri certificati', 'Confronta offerte cantonali', 'Gratuito e senza impegno', 'Nessuna chiamata pubblicitaria'],
    cta: 'Confronta le offerte ora',
    formTitle: 'Preventivo gratuito',
    formSub: 'Pronto in 2 minuti. Nessuna chiamata.',
    formBullets: ['Fino a 3 preventivi da installatori certificati', 'Verifica incentivi inclusa', '100% senza impegno & gratuito'],
    formCta: 'Inizia ora →',
  },
};

const ctaHref: Record<Locale, string> = {
  de: '/anfrage',
  fr: '/anfrage',
  en: '/anfrage',
  it: '/anfrage',
};

export default function Hero() {
  const locale = useLocale();
  const content = heroContent[locale] || heroContent.de;
  const href = ctaHref[locale] || '/anfrage';

  return (
    <section className="bg-gradient-to-b from-primary-50 to-white py-6 sm:py-8 md:py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Text */}
          <div className="lg:pt-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-semibold tracking-tight text-gray-900 mb-2 leading-tight">
              {content.title}{' '}
              <span className="text-primary">{content.subtitle}</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 mt-4">{content.description}</p>

            <div className="flex flex-col gap-4 mb-8">
              {content.checkmarks.map((c, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-gray-700 font-medium text-lg">{c}</span>
                </div>
              ))}
            </div>

            <Link
              href={href}
              className="btn-primary py-4 px-8 rounded-2xl text-lg font-bold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all flex items-center gap-2 w-fit mb-8"
            >
              {content.cta}
              <ChevronRight className="w-5 h-5" />
            </Link>

            <div className="flex items-center">
              <Image src="/badges/logos-row.png" alt="Premium Solar Quality - Swiss Made - Trustpilot"
                width={320} height={60} className="object-contain" style={{ width: '280px', height: 'auto' }} />
            </div>
          </div>

          {/* Right Column - CTA Card */}
          <div>
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="bg-primary px-6 py-5">
                <h2 className="text-xl font-black text-white">{content.formTitle}</h2>
                <p className="text-white/80 text-sm mt-0.5">{content.formSub}</p>
              </div>
              <div className="px-6 py-6 space-y-4">
                {content.formBullets.map((b, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="text-gray-700 text-sm font-medium">{b}</span>
                  </div>
                ))}

                <Link
                  href={href}
                  className="block w-full btn-primary py-4 rounded-2xl text-lg font-black text-center shadow-lg shadow-primary/20 mt-2"
                >
                  {content.formCta}
                </Link>

                <div className="flex items-center justify-center gap-4 pt-2">
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <Shield className="w-3.5 h-3.5" />
                    <span>DSGVO Konform</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <Users className="w-3.5 h-3.5" />
                    <span>13'000+ Anfragen</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <Star className="w-3.5 h-3.5" />
                    <span>4.8 / 5</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-3 px-4">
              <Image src="/badges/trust-badges.png" alt="100% Kostenlos - Förderungen Geprüft - DSGVO-Konform - Keine Werbeanrufe"
                width={240} height={30} className="object-contain" style={{ width: '240px', height: 'auto' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
