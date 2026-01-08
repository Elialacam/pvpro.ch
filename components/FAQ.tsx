'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLocale } from '@/lib/LocaleContext';
import { Locale } from '@/lib/i18n';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items?: FAQItem[];
}

// FAQ content per locale
const faqContent: Record<Locale, {
  title: string;
  subtitle: string;
  moreQuestions: string;
  cta: string;
  faqs: FAQItem[];
}> = {
  de: {
    title: 'Häufig gestellte Fragen',
    subtitle: 'Alles, was Sie über Solaranlagen wissen müssen',
    moreQuestions: 'Haben Sie weitere Fragen? Wir helfen gerne weiter!',
    cta: 'Kostenlose Beratung anfordern',
    faqs: [
      {
        question: 'Was kostet eine Solaranlage in der Schweiz?',
        answer: 'Eine typische Solaranlage für ein Einfamilienhaus kostet zwischen 9.500 und 25.000 CHF. Der genaue Preis hängt von der Grösse der Anlage, der Dachbeschaffenheit und den verwendeten Komponenten ab. Mit einem Batteriespeicher liegen die Kosten höher, zwischen 19.500 und 35.000 CHF.',
      },
      {
        question: 'Wie funktioniert die Vermittlung bei PVPro?',
        answer: 'Sie füllen unser kurzes Formular aus, in dem Sie Ihre Anforderungen angeben. Wir leiten Ihre Anfrage an bis zu 3 geprüfte Solarteure in Ihrer Region weiter. Diese erstellen individuelle Angebote für Sie. Sie vergleichen die Offerten und wählen das beste Angebot aus – ganz ohne Verpflichtung.',
      },
      {
        question: 'Gibt es Förderungen für Solaranlagen in der Schweiz?',
        answer: 'Ja! Die Schweiz bietet verschiedene Förderungen: Die Einmalvergütung (EIV) vom Bund deckt bis zu 30% der Investitionskosten. Zusätzlich gibt es kantonale und kommunale Förderprogramme sowie steuerliche Abzüge. Unsere Partner-Installateure helfen Ihnen bei der Beantragung aller verfügbaren Förderungen.',
      },
      {
        question: 'Wie lange dauert die Installation einer Solaranlage?',
        answer: 'Von der Anfrage bis zur Installation vergehen in der Regel 2-4 Monate. Die eigentliche Montage auf dem Dach dauert meist nur 1-3 Tage, abhängig von der Anlagengrösse. Nach der Installation erfolgt noch die Inbetriebnahme und Abnahme durch den Netzbetreiber.',
      },
      {
        question: 'Lohnt sich eine Solaranlage auch bei wenig Sonnenschein?',
        answer: 'Ja! Selbst in weniger sonnenreichen Regionen der Schweiz produzieren Solaranlagen genug Strom, um sich zu amortisieren. Moderne Solarmodule arbeiten auch bei diffusem Licht effizient. Die durchschnittliche Amortisationszeit in der Schweiz liegt bei 10-15 Jahren, bei einer Lebensdauer von 25-30 Jahren.',
      },
      {
        question: 'Ist der Service von PVPro wirklich kostenlos?',
        answer: 'Ja, unser Service ist zu 100% kostenlos und unverbindlich für Sie. Wir finanzieren uns durch Provisionen von unseren Partner-Installateuren. Sie zahlen für die Vermittlung nichts und erhalten dennoch die gleichen Preise wie bei direkter Anfrage beim Solarteur.',
      },
    ],
  },
  fr: {
    title: 'Questions fréquentes',
    subtitle: 'Tout ce que vous devez savoir sur les installations solaires',
    moreQuestions: 'Vous avez d\'autres questions? Nous sommes là pour vous aider!',
    cta: 'Demander un conseil gratuit',
    faqs: [
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
    ],
  },
  en: {
    title: 'Frequently Asked Questions',
    subtitle: 'Everything you need to know about solar systems',
    moreQuestions: 'Have more questions? We\'re happy to help!',
    cta: 'Request Free Consultation',
    faqs: [
      {
        question: 'How much does a solar system cost in Switzerland?',
        answer: 'A typical solar system for a single-family home costs between CHF 9,500 and CHF 25,000. The exact price depends on the system size, roof characteristics, and components used. With a battery storage system, costs are higher, between CHF 19,500 and CHF 35,000.',
      },
      {
        question: 'How does the PVPro referral service work?',
        answer: 'You fill out our short form indicating your requirements. We forward your request to up to 3 certified installers in your region. They prepare personalized quotes for you. You compare the offers and choose the best one - completely without obligation.',
      },
      {
        question: 'Are there subsidies for solar systems in Switzerland?',
        answer: 'Yes! Switzerland offers various subsidies: the One-Time Payment (EIV) from the federal government covers up to 30% of investment costs. Additionally, there are cantonal and municipal incentive programs, plus tax deductions. Our partner installers help you apply for all available subsidies.',
      },
      {
        question: 'How long does a solar system installation take?',
        answer: 'From request to installation, it typically takes 2-4 months. The actual mounting on the roof usually takes only 1-3 days, depending on the system size. After installation, the commissioning and acceptance by the grid operator follows.',
      },
      {
        question: 'Is a solar system worthwhile even with little sunshine?',
        answer: 'Yes! Even in less sunny regions of Switzerland, solar systems produce enough electricity to pay for themselves. Modern solar modules work efficiently even with diffuse light. The average payback period in Switzerland is 10-15 years, with a lifespan of 25-30 years.',
      },
      {
        question: 'Is PVPro service really free?',
        answer: 'Yes, our service is 100% free and non-binding for you. We are financed through commissions from our partner installers. You pay nothing for the referral and still receive the same prices as if you contacted the installer directly.',
      },
    ],
  },
};

export default function FAQ({ items }: FAQProps) {
  const locale = useLocale();
  const content = faqContent[locale];
  const faqItems = items || content.faqs;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {content.title}
          </h2>
          <p className="text-xl text-gray-600">
            {content.subtitle}
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-gray-900 pr-8">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-primary flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            {content.moreQuestions}
          </p>
          <a href="#formular" className="btn-primary">
            {content.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
