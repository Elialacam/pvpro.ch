import Hero from '@/components/Hero';
import ClientLogos from '@/components/ClientLogos';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import TeamSection from '@/components/TeamSection';
import SwissMap from '@/components/SwissMapLazy';
import BlogSection from '@/components/BlogSection';
import CtaAnfrage from '@/components/CtaAnfrage';
import FAQ from '@/components/FAQ';
import CantonGrid from '@/components/CantonGrid';
import { Metadata } from 'next';
import { pageMetadata } from '@/lib/pageMetadata';
import { ECONOMIC_FACTS, formatRangeForLocale } from '@/lib/facts';

const baseMetadata: Metadata = {
  title: 'Comparer les offres solaires : 3 entreprises certifiées | PvPro.ch',
  description: 'Comparez gratuitement jusqu’à 3 devis pour votre installation solaire en Suisse.',
};

export default function FrenchHomePage() {
  const defaultFAQs = [
    {
      question: 'Combien coûte une installation solaire en Suisse?',
      answer: `Une installation de 10 kWp coûte ${formatRangeForLocale(ECONOMIC_FACTS.systemCosts.bySize[10], 'CHF', 'fr')}, sans stockage. Un stockage de 10 kWh coûte ${formatRangeForLocale(ECONOMIC_FACTS.storageCosts.byCapacity[10], 'CHF', 'fr')}.`,
    },
    {
      question: 'Comment fonctionne l\'intermédiation de PvPro.ch?',
      answer: 'Vous remplissez notre court formulaire en indiquant vos besoins. Nous transmettons votre demande à un maximum de 3 installateurs certifiés dans votre canton. Ceux-ci préparent des offres personnalisées pour vous. Vous comparez les devis et choisissez la meilleure offre - sans aucun engagement.',
    },
    {
      question: 'Existe-t-il des subventions pour les installations solaires en Suisse?',
      answer: `Oui. La Rétribution Unique couvre une part fédérale indicative de ${formatRangeForLocale(ECONOMIC_FACTS.incentives.federalSharePercent, '%', 'fr')}. Le total des aides fédérales, cantonales et communales peut atteindre ${ECONOMIC_FACTS.incentives.combinedMaxPercent}%.`,
    },
    {
      question: 'Combien de temps faut-il pour installer une installation solaire?',
      answer: 'De la demande à l\'installation, il faut généralement 2-4 mois. Le montage proprement dit sur le toit ne dure habituellement que 1-3 jours, selon la taille de l\'installation. Après l\'installation, la mise en service et l\'acceptation par le gestionnaire de réseau suivent.',
    },
    {
      question: 'Une installation solaire est-elle rentable même avec peu de soleil?',
      answer: `Oui. Sur le Plateau, l'amortissement indicatif est de ${formatRangeForLocale(ECONOMIC_FACTS.systemPaybackYears.plateau, 'ans', 'fr')}, pour une durée de vie des modules de ${formatRangeForLocale(ECONOMIC_FACTS.moduleLifetimeYears, 'ans', 'fr')}.`,
    },
    {
      question: 'Le service de PvPro.ch est-il vraiment gratuit?',
      answer: 'Oui, notre service est à 100% gratuit et sans engagement pour vous. Nous nous finançons par des commissions de nos installateurs partenaires. Vous ne payez rien pour l\'intermédiation et recevez néanmoins les mêmes prix qu\'en cas de demande directe auprès de l\'installateur.',
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": defaultFAQs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />

      <Hero />
      <HowItWorks />
      <ClientLogos label="Nos installateurs partenaires" />
      <TeamSection />
      <SwissMap />
      <Testimonials />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-sans font-semibold tracking-tight text-gray-900 mb-4">
              Installations solaires dans toute la Suisse
            </h2>
            <p className="text-xl text-gray-600">
              Nous trouvons des installateurs certifiés dans toute la Suisse
            </p>
          </div>

          <CantonGrid locale="fr" />
        </div>
      </section>

      <BlogSection locale="fr" />
      <FAQ />
      <CtaAnfrage />
    </>
  );
}

export const metadata: Metadata = pageMetadata(baseMetadata, { path: '/fr', locale: 'fr' });
