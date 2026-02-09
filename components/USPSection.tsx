import { Shield, TrendingDown, FileCheck } from 'lucide-react';

export default function USPSection() {
  const usps = [
    {
      icon: Shield,
      title: 'Geprüfte Installateure',
      description: 'Nur zertifizierte Schweizer Solarteure mit nachgewiesener Qualifikation und Erfahrung.',
    },
    {
      icon: TrendingDown,
      title: 'Bis zu 30% sparen',
      description: 'Durch den Vergleich mehrerer Angebote erhalten Sie den besten Preis für Ihre Solaranlage.',
    },
    {
      icon: FileCheck,
      title: '100% unverbindlich',
      description: 'Kostenlos und ohne Verpflichtung. Sie entscheiden, welches Angebot am besten zu Ihnen passt.',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4">
            Warum PVPro?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Die führende Vergleichsplattform für Solaranlagen in der Schweiz
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {usps.map((usp, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 rounded-2xl mb-6 group-hover:bg-primary-100 transition-colors">
                <usp.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
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
