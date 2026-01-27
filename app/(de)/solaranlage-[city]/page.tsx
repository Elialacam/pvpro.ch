import { Metadata } from 'next';
import { getCityBySlug, cities } from '@/lib/cities';
import { cityContents, CityContent } from '@/lib/city-content';
import { notFound } from 'next/navigation';
import UniqueCityPage from '@/components/UniqueCityPage';

export const dynamic = 'force-static';
export const revalidate = false;

// Generate static params for all cities that don't have a dedicated page
export async function generateStaticParams() {
  return cities
    .filter(city => city.language === 'de')
    .map((city) => ({
      city: city.slug,
    }));
}

interface PageProps {
  params: {
    city: string;
  };
}

const generateGenericContent = (slug: string, name: string, language: string, canton: string): CityContent => {
  const isDe = language === 'de';
  const isFr = language === 'fr';
  const isIt = language === 'it';

  return {
    slug,
    heroHeadline: isDe ? `Solaranlage in ${name}` : isFr ? `Installation Solaire à ${name}` : `Impianto Fotovoltaico a ${name}`,
    heroSubheadline: isDe ? `Bis zu 30% sparen in ${name}` : isFr ? `Économisez jusqu'à 30% à ${name}` : `Risparmia fino al 30% a ${name}`,
    heroDescription: isDe 
      ? `Finden Sie die besten Solarteure in ${name}. Vergleichen Sie kostenlos bis zu 3 Offerten für Ihre Photovoltaikanlage.` 
      : isFr 
      ? `Trouvez les meilleurs installateurs solaires à ${name}. Comparez gratuitement fino al 3 offres pour votre installation photovoltaïque.` 
      : `Trova i migliori installatori solari a ${name}. Confronta gratuitamente fino a 3 preventivi per il tuo impianto fotovoltaico.`,
    whySolarTitle: isDe ? `Warum Solar in ${name}?` : isFr ? `Pourquoi le solaire à ${name}?` : `Perché il solare a ${name}?`,
    whySolarIntro: isDe 
      ? `Die Region ${name} bietet hervorragende Bedingungen für Solarenergie.` 
      : isFr 
      ? `La regione di ${name} offre condizioni eccellenti per l'energia solare.` 
      : `La regione di ${name} offre condizioni eccellenti per l'energia solare.`,
    whySolarReasons: [
      { 
        title: isDe ? 'Hohe Rendite' : isFr ? 'Haut Rendement' : 'Alto Rendimento', 
        description: isDe ? 'Profitieren Sie von sinkenden Stromkosten.' : isFr ? 'Profitez de la baisse des coûts de l\'électricité.' : 'Approfitta della riduzione dei costi elettrici.' 
      },
      { 
        title: isDe ? 'Lokale Förderung' : isFr ? 'Subventions Locales' : 'Sussidi Locali', 
        description: isDe ? `Kanton ${canton} unterstützt Ihr Projekt.` : isFr ? `Le Canton de ${canton} soutient votre projet.` : `Il Canton ${canton} sostiene il tuo progetto.` 
      },
      { 
        title: isDe ? 'Umweltfreundlich' : isFr ? 'Écologique' : 'Ecologico', 
        description: isDe ? 'Produzieren Sie sauberen Strom.' : isFr ? 'Produisez de l\'électricité propre.' : 'Produci energia pulita.' 
      }
    ],
    cityFactsTitle: isDe ? `Fakten zu Solar in ${name}` : isFr ? `Faits sur le solaire à ${name}` : `Fatti sul solare a ${name}`,
    cityFactsParagraphs: [
      isDe 
        ? `${name} im Kanton ${canton} ist ein idealer Standort für Photovoltaik.` 
        : isFr 
        ? `${name} dans le Canton de ${canton} est un lieu ideal pour le photovoltaïque.` 
        : `${name} nel Canton ${canton} è un luogo ideale per il fotovoltaico.`
    ],
    pricing: { min: 9000, max: 25000, typical5kw: { min: 9000, max: 12000 }, afterSubsidy5kw: { min: 6500, max: 8500 }, roiYears: '10-12' },
    incentives: {
      title: isDe ? 'Förderungen' : isFr ? 'Subventions' : 'Sussidi',
      description: isDe ? 'Übersicht der Programme' : isFr ? 'Aperçu des programmes' : 'Panoramica dei programmi',
      programs: [
        { name: 'Pronovo (EIV)', amount: 'bis 30%', description: isDe ? 'Bundesförderung' : isFr ? 'Subvention fédérale' : 'Sussidio federale' }
      ]
    },
    caseStudies: [
      { name: 'Family Project', location: name, systemSize: '6 kWp', cost: '11k CHF', savings: '2k CHF/y', payback: '12y', quote: 'Sehr zufrieden!' }
    ],
    faqs: [
      { question: isDe ? 'Lohnt es sich?' : isFr ? 'Est-ce rentable?' : 'Conviene?', answer: isDe ? 'Ja, absolut.' : isFr ? 'Oui, assolutamente.' : 'Sì, assolutamente.' },
      { question: isDe ? 'Kosten?' : isFr ? 'Coût?' : 'Costi?', answer: isDe ? 'Ab 9.500 CHF.' : isFr ? 'Dès 9.500 CHF.' : 'Da 9.500 CHF.' },
      { question: isDe ? 'Förderung?' : isFr ? 'Subventions?' : 'Sussidi?', answer: isDe ? 'Bis zu 30%.' : isFr ? 'Jusqu\'à 30%.' : 'Fino al 30%.' },
      { question: isDe ? 'Dauer?' : isFr ? 'Durée?' : 'Durata?', answer: '3-4 Monate.' },
      { question: isDe ? 'Wartung?' : isFr ? 'Entretien?' : 'Manutenzione?', answer: 'Minimal.' },
      { question: isDe ? 'Speicher?' : isFr ? 'Batterie?' : 'Batteria?', answer: isDe ? 'Empfehlenswert.' : isFr ? 'Recommandé.' : 'Raccomandato.' },
      { question: isDe ? 'Winter?' : isFr ? 'Hiver?' : 'Inverno?', answer: 'Funktioniert hervorragend.' },
      { question: isDe ? 'Offerten?' : isFr ? 'Offres?' : 'Preventivi?', answer: 'Kostenlos bei PV Pro.' }
    ],
    testimonial: { initials: 'JS', name: 'J. Schmidt', quote: 'Perfekt!' }
  };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const city = getCityBySlug(params.city);
  if (!city) return { title: 'Stadt nicht gefunden' };

  return {
    title: `Solaranlage ${city.name} ${city.canton} - Kostenlos Offerten vergleichen | PV Pro`,
    description: `Solaranlage in ${city.name}: Jetzt bis zu 3 Offerten von geprüften Solarteuren vergleichen. Sichern Sie sich Förderungen in ${city.name} (${city.canton}). Unverbindlich & Kostenlos.`,
  };
}

export default function CityPage({ params }: PageProps) {
  const city = getCityBySlug(params.city);
  if (!city) notFound();

  const content = cityContents[params.city] || generateGenericContent(city.slug, city.name, city.language, city.canton);

  return <UniqueCityPage city={city} content={content} accentColor="blue" />;
}
