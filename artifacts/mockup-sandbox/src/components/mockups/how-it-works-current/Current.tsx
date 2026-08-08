import './_group.css';
import { FileText, Search, CheckCircle } from 'lucide-react';

const steps = [
  {
    step: '1',
    title: 'Formular ausfüllen',
    description: 'In 2 Minuten, kostenlos und unverbindlich.',
    Icon: FileText,
  },
  {
    step: '2',
    title: 'Offerten erhalten',
    description: 'Bis zu 3 Offerten von geprüften Installateuren aus Ihrem Kanton.',
    Icon: Search,
  },
  {
    step: '3',
    title: 'Vergleichen & wählen',
    description: 'Sie vergleichen die Preise und wählen das beste Angebot — ohne Verpflichtung.',
    Icon: CheckCircle,
  },
];

export function Current() {
  return (
    <section className="section-padding bg-gray-50" style={{ minHeight: '100vh' }}>
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2
            className="text-gray-900 mb-4"
            style={{ fontSize: 'clamp(1.875rem, 4vw, 2.25rem)', fontWeight: 600, letterSpacing: '-0.025em' }}
          >
            So funktioniert&apos;s
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            In drei einfachen Schritten von der Anfrage bis zur passenden Solar-Offerte.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connection line */}
          <div
            className="hidden md:block absolute h-0.5 z-0"
            style={{
              top: '5rem',
              left: '16.67%',
              right: '16.67%',
              background: 'linear-gradient(to right, #e7d9a0, #D4AF37, #e7d9a0)',
            }}
          />

          {steps.map(({ step, title, description, Icon }, index) => (
            <div key={index} className="relative z-10 text-center">
              <div className="relative inline-block mb-6">
                <div
                  className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg relative z-20"
                  style={{ border: '4px solid #f3ebb8' }}
                >
                  <Icon style={{ width: '2.5rem', height: '2.5rem', color: 'var(--primary)' }} />
                </div>
                <div
                  className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-semibold shadow-md z-30"
                  style={{ background: 'var(--primary)' }}
                >
                  {step}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3" style={{ letterSpacing: '-0.025em' }}>
                {title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary">Jetzt starten</button>
        </div>
      </div>
    </section>
  );
}
