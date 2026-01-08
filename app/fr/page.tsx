import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import TeamSection from '@/components/TeamSection';
import SwissMap from '@/components/SwissMap';
import FAQ from '@/components/FAQ';
import Link from 'next/link';
import { cities } from '@/lib/cities';
import { MapPin } from 'lucide-react';

export default function FrenchHomePage() {
  const defaultFAQs = [
    {
      question: 'Combien coûte une installation solaire en Suisse?',
      answer: 'Une installation solaire typique pour une maison individuelle coûte entre CHF 9.500 et CHF 25.000. Le prix exact dépend de la taille de l\'installation, de l\'état du toit et des composants utilisés. Avec une batterie de stockage, les coûts sont plus élevés, entre CHF 19.500 et CHF 35.000.',
    },
    {
      question: 'Comment fonctionne l\'intermédiation de PVPro?',
      answer: 'Vous remplissez notre court formulaire en indiquant vos besoins. Nous transmettons votre demande à un maximum de 3 installateurs certifiés dans votre région. Ceux-ci préparent des offres personnalisées pour vous. Vous comparez les devis et choisissez la meilleure offre - sans aucun engagement.',
    },
    {
      question: 'Existe-t-il des subventions pour les installations solaires en Suisse?',
      answer: 'Oui! La Suisse offre différentes subventions: la Rétribution Unique (RU) de la Confédération couvre jusqu\'à 30% des coûts d\'investissement. En plus, il existe des programmes de subventions cantonales et communales ainsi que des déductions fiscales. Nos installateurs partenaires vous aident à demander toutes les subventions disponibles.',
    },
    {
      question: 'Combien de temps faut-il pour installer une installation solaire?',
      answer: 'De la demande à l\'installation, il faut généralement 2-4 mois. Le montage proprement dit sur le toit ne dure habituellement que 1-3 jours, selon la taille de l\'installation. Après l\'installation, la mise en service et l\'acceptation par le gestionnaire de réseau suivent.',
    },
    {
      question: 'Une installation solaire est-elle rentable même avec peu de soleil?',
      answer: 'Oui! Même dans les régions moins ensoleillées de Suisse, les installations solaires produisent assez d\'électricité pour s\'amortir. Les modules solaires modernes fonctionnent efficacement même avec une lumière diffuse. La période d\'amortissement moyenne en Suisse est de 10-15 ans, pour une durée de vie de 25-30 ans.',
    },
    {
      question: 'Le service de PVPro est-il vraiment gratuit?',
      answer: 'Oui, notre service est à 100% gratuit et sans engagement pour vous. Nous nous finançons par des commissions de nos installateurs partenaires. Vous ne payez rien pour l\'intermédiation et recevez néanmoins les mêmes prix qu\'en cas de demande directe auprès de l\'installateur.',
    },
  ];

  return (
    <>
      {/* FAQPage Schema */}
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
      <Testimonials />
      <TeamSection />
      <SwissMap />
      <HowItWorks />

      {/* Cities Section - Internal Linking */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Installations solaires dans toute la Suisse
            </h2>
            <p className="text-xl text-gray-600">
              Nous mettons en relation avec des installateurs dans toutes les grandes villes suisses
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {cities.map((city) => (
              <a
                key={city.slug}
                href="#formular"
                className="group flex items-center gap-2 p-4 rounded-lg border border-gray-200 hover:border-primary hover:bg-primary-50 transition-all duration-200 cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-gray-900 group-hover:text-primary transition-colors truncate">
                    {city.name}
                  </div>
                  <div className="text-xs text-gray-500">
                    {city.canton}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <FAQ />
    </>
  );
}
