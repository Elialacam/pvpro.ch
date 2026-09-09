import Hero from '@/components/Hero';
import ClientLogos from '@/components/ClientLogos';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import TeamSection from '@/components/TeamSection';
import SwissMap from '@/components/SwissMapLazy';
import BlogSection from '@/components/BlogSection';
import CtaAnfrage from '@/components/CtaAnfrage';
import FAQ from '@/components/FAQ';
import { cities } from '@/lib/cities';
import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { Metadata } from 'next';
import { pageMetadata } from '@/lib/pageMetadata';
import { ECONOMIC_FACTS, formatRangeForLocale, getSystemCostRange } from '@/lib/facts';

export const metadata: Metadata = pageMetadata({
  title: 'Compare solar quotes: 3 certified installers | PvPro.ch',
  description: 'Compare up to three free quotes from certified Swiss solar installers for your solar system.',
}, { path: '/en', locale: 'en' });

export default function EnglishHomePage() {
  const defaultFAQs = [
    {
      question: 'How much does a solar system cost in Switzerland?',
      answer: `A 10 kWp solar system costs ${formatRangeForLocale(getSystemCostRange(10), 'CHF', 'en')} without battery storage. The exact price depends on the system size, roof characteristics, and components used.`,
    },
    {
      question: 'How does the PvPro.ch referral service work?',
      answer: 'You fill out our short form indicating your requirements. We forward your request to up to 3 certified installers in your canton. They prepare personalized quotes for you. You compare the offers and choose the best one - completely without obligation.',
    },
    {
      question: 'Are there subsidies for solar systems in Switzerland?',
      answer: `Yes! Switzerland offers various subsidies: the federal share is ${formatRangeForLocale(ECONOMIC_FACTS.incentives.federalSharePercent, '%', 'en')} of investment costs without storage. Additionally, there are cantonal and municipal incentive programs, plus tax deductions. Our partner installers help you apply for all available subsidies.`,
    },
    {
      question: 'How long does a solar system installation take?',
      answer: 'From request to installation, it typically takes 2-4 months. The actual mounting on the roof usually takes only 1-3 days, depending on the system size. After installation, the commissioning and acceptance by the grid operator follows.',
    },
    {
      question: 'Is a solar system worthwhile even with little sunshine?',
      answer: `Yes! Even in less sunny areas of Switzerland, solar systems produce enough electricity to pay for themselves. Modern solar modules work efficiently even with diffuse light. On the Swiss Plateau, the indicative payback period is ${formatRangeForLocale(ECONOMIC_FACTS.systemPaybackYears.plateau, 'years', 'en')}, with a module lifespan of ${formatRangeForLocale(ECONOMIC_FACTS.moduleLifetimeYears, 'years', 'en')}.`,
    },
    {
      question: 'Is PvPro.ch service really free?',
    answer: 'Yes, our service is free and non-binding for you. We are financed through commissions from our partner installers. You pay nothing for the referral and still receive the same prices as if you contacted the installer directly.',
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
      <ClientLogos label="Our partner installers" />
      <TeamSection />
      <SwissMap />
      <Testimonials />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-sans font-semibold tracking-tight text-gray-900 mb-4">
              Solar Systems Across Switzerland
            </h2>
            <p className="text-xl text-gray-600">
              We connect you with installers in all major Swiss cities
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {cities.map((city) => {
              let href = '';
              if (city.language === 'fr') {
                href = `/fr/solaire-${city.slug}`;
              } else if (city.language === 'it') {
                href = `/it/fotovoltaico-${city.slug}`;
              } else {
                href = `/solaranlage-${city.slug}`;
              }
              return (
                <Link
                  key={city.slug}
                  href={href}
                  className="group flex items-center gap-2 p-4 rounded-lg border border-gray-200 hover:border-primary hover:bg-primary-50 transition-all duration-200 cursor-pointer"
                >
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="font-sans font-bold text-gray-900 group-hover:text-primary transition-colors truncate">
                      {city.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      {city.canton}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <BlogSection locale="en" />
      <FAQ />
      <CtaAnfrage />
    </>
  );
}
