import Image from 'next/image';

export default function TrustBadges() {
  const badges = [
    {
      image: '/images/badge-tuv-cert.webp',
      title: 'TÜV geprüft',
      description: 'Zertifizierte Qualität',
    },
    {
      image: '/images/badge-ssl-cert.webp',
      title: 'SSL verschlüsselt',
      description: 'Sichere Datenübertragung',
    },
    {
      image: '/images/badge-datenschutz-cert.webp',
      title: 'Datenschutz konform',
      description: 'DSGVO-konform',
    },
    {
      image: '/images/badge-swiss-cert.webp',
      title: 'Schweizer Qualität',
      description: '100% Swiss Made',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-medium tracking-tight mb-4 text-gray-900">
            Ihr Vertrauen ist uns wichtig
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Über 10.000 zufriedene Kunden vertrauen bereits auf PVPro
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover:border-gray-300 hover:shadow-lg transition-all hover:scale-105"
            >
              <div className="inline-flex items-center justify-center mb-4 mx-auto">
                <Image
                  src={badge.image}
                  alt={badge.title}
                  width={150}
                  height={150}
                  className="w-32 h-32 md:w-36 md:h-36 object-contain"
                />
              </div>
              <h3 className="font-display font-medium tracking-tight text-gray-900 text-lg mb-2">
                {badge.title}
              </h3>
              <p className="text-sm text-gray-600">
                {badge.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-display font-medium tracking-tight text-primary mb-2">10.000+</div>
            <div className="text-gray-600">Zufriedene Kunden</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-display font-medium tracking-tight text-primary mb-2">500+</div>
            <div className="text-gray-600">Partner-Installateure</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-display font-medium tracking-tight text-primary mb-2">15+</div>
            <div className="text-gray-600">Jahre Erfahrung</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-display font-medium tracking-tight text-primary mb-2">100%</div>
            <div className="text-gray-600">Kostenlos</div>
          </div>
        </div>

        {/* Trust Logos */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-70 hover:opacity-100 transition-opacity">
            <Image
              src="/images/logos/proven-expert.svg"
              alt="Proven Expert - 100% Empfehlungen"
              width={120}
              height={60}
              className="h-12 w-auto"
            />
            <Image
              src="/images/logos/swiss-quality.svg"
              alt="Swiss Quality - Schweizer Qualität"
              width={60}
              height={60}
              className="h-12 w-auto"
            />
            <Image
              src="/images/logos/trustpilot.svg"
              alt="Trustpilot - Kundenbewertungen"
              width={120}
              height={30}
              className="h-8 w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
