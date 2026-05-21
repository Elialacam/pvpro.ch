import { Shield, TrendingDown, FileCheck } from 'lucide-react';

function t(lang: string, de: string, fr: string, it: string) {
  if (lang === 'fr') return fr;
  if (lang === 'it') return it;
  return de;
}

interface USPSectionProps {
  lang?: string;
}

export default function USPSection({ lang = 'de' }: USPSectionProps) {
  const usps = [
    {
      icon: Shield,
      title: t(lang, 'Geprüfte Installateure', 'Installateurs certifiés', 'Installatori certificati'),
      description: t(lang,
        'Nur zertifizierte Schweizer Solarteure mit nachgewiesener Qualifikation und Erfahrung.',
        'Uniquement des installateurs solaires suisses certifiés avec des qualifications et une expérience prouvées.',
        'Solo installatori solari svizzeri certificati con qualifiche ed esperienza comprovate.'
      ),
    },
    {
      icon: TrendingDown,
      title: t(lang, 'Bis zu 30% sparen', "Jusqu'à 30% d'économies", 'Risparmia fino al 30%'),
      description: t(lang,
        'Durch den Vergleich mehrerer Angebote erhalten Sie den besten Preis für Ihre Solaranlage.',
        "En comparant plusieurs offres, vous obtenez le meilleur prix pour votre installation solaire.",
        'Confrontando più preventivi, ottieni il miglior prezzo per il tuo impianto fotovoltaico.'
      ),
    },
    {
      icon: FileCheck,
      title: t(lang, '100% unverbindlich', '100% sans engagement', '100% senza impegno'),
      description: t(lang,
        'Kostenlos und ohne Verpflichtung. Sie entscheiden, welches Angebot am besten zu Ihnen passt.',
        "Gratuit et sans obligation. Vous décidez quelle offre vous convient le mieux.",
        'Gratuito e senza obbligo. Sei tu a decidere quale preventivo fa al caso tuo.'
      ),
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-sans font-semibold tracking-tight text-gray-900 mb-4">
            {t(lang, 'Warum PVPro?', 'Pourquoi PVPro ?', 'Perché PVPro?')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t(lang,
              'Die führende Vergleichsplattform für Solaranlagen in der Schweiz',
              "La plateforme de comparaison leader pour les installations solaires en Suisse",
              'La piattaforma di confronto leader per impianti fotovoltaici in Svizzera'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {usps.map((usp, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 rounded-2xl mb-6 group-hover:bg-primary-100 transition-colors">
                <usp.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-sans font-semibold tracking-tight text-gray-900 mb-3">
                {usp.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {usp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
