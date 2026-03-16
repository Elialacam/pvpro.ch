import Link from 'next/link';
import { ChevronRight, FileText, Search, CheckCircle, Clock, ShieldCheck, Euro, Phone } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wie es funktioniert – PVPro.ch | Solarofferten in 3 Schritten',
  description: 'So einfach funktioniert PVPro: Formular ausfüllen, bis zu 3 Offerten erhalten und den besten Installateur wählen. Kostenlos und unverbindlich.',
};

const steps = [
  {
    number: '1',
    Icon: FileText,
    title: 'Formular ausfüllen',
    subtitle: 'Dauert weniger als 2 Minuten',
    description: 'Geben Sie Ihre Kontaktdaten und Adresse in unser einfaches Online-Formular ein. Es sind keine technischen Vorkenntnisse notwendig — wir führen Sie Schritt für Schritt durch den Prozess.',
    details: [
      'Name, Telefonnummer und E-Mail-Adresse',
      'Vollständige Adresse Ihrer Liegenschaft',
      'Kein Konto erforderlich, keine Registrierung',
      '100% kostenlos und unverbindlich',
    ],
  },
  {
    number: '2',
    Icon: Search,
    title: 'Wir vermitteln geprüfte Installateure',
    subtitle: 'Innerhalb von 24–48 Stunden',
    description: 'Nach Eingang Ihrer Anfrage leiten wir diese an bis zu 3 geprüfte Solarinstallateure in Ihrer Region weiter. Jeder Partner in unserem Netzwerk wurde vorab auf Zertifikate, Referenzen und Qualität geprüft.',
    details: [
      'Bis zu 3 unabhängige Offerten',
      'Ausschliesslich zertifizierte Fachbetriebe',
      'Installateure aus Ihrer Region',
      'Individuelle Angebote auf Ihr Dach zugeschnitten',
    ],
  },
  {
    number: '3',
    Icon: CheckCircle,
    title: 'Vergleichen und wählen',
    subtitle: 'Ohne Druck, ohne Verpflichtung',
    description: 'Sie erhalten die Angebote der Installateure direkt und vergleichen Preise, Leistungen und Konditionen in Ruhe. Sie entscheiden selbst, ob und welches Angebot Sie annehmen — ganz ohne Druck.',
    details: [
      'Echte Preise, keine Lockangebote',
      'Kein Installateur hat Vorrang',
      'Kein Vertrag mit PVPro',
      'Freie Entscheidung ohne Mindestbestellung',
    ],
  },
];

const benefits = [
  { Icon: Clock,       title: 'Zeitersparnis',      text: 'Statt selbst Angebote einzuholen, erledigt PVPro die Suche für Sie — in weniger als 2 Minuten.' },
  { Icon: ShieldCheck, title: 'Geprüfte Qualität',  text: 'Nur Installateure mit gültigen Zertifikaten, Versicherungsnachweis und positiven Referenzen.' },
  { Icon: Euro,        title: 'Kostenlos',           text: 'Unser Service ist für Hausbesitzer zu 100% kostenlos. Wir finanzieren uns durch Installateurprovisionen.' },
  { Icon: Phone,       title: 'Persönlicher Support', text: 'Bei Fragen steht Ihnen unser Team jederzeit per Telefon und E-Mail zur Verfügung.' },
];

export default function WieEsFunktioniertPage() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-20">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-sm text-gray-400 mb-10">
          <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-700 font-medium">Wie es funktioniert</span>
        </nav>

        {/* Page header */}
        <div className="max-w-3xl mb-20">
          <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Einfach & transparent</p>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight mb-6 leading-tight">
            In 3 Schritten zur besten Solarofferte
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            PVPro macht den Vergleich von Solaranlagen einfach, schnell und kostenlos. Sie müssen nicht selbst mehrere Installateure kontaktieren — wir erledigen das für Sie.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-0 mb-24">
          {steps.map((step, i) => {
            const Icon = step.Icon;
            return (
              <div key={step.number} className="relative">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="absolute left-9 top-[88px] w-0.5 h-[calc(100%-40px)] bg-gradient-to-b from-orange-200 to-orange-100 hidden sm:block" />
                )}
                <div className="flex flex-col sm:flex-row gap-8 pb-16">
                  {/* Left: number + icon */}
                  <div className="flex-shrink-0 flex flex-col items-center sm:items-start gap-0">
                    <div className="relative w-[72px] h-[72px] rounded-2xl flex items-center justify-center shadow-md" style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
                      <Icon className="w-8 h-8 text-white" />
                      <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gray-900 text-white text-xs font-black flex items-center justify-center">
                        {step.number}
                      </span>
                    </div>
                  </div>
                  {/* Right: content */}
                  <div className="flex-1 pt-2">
                    <p className="text-xs font-semibold text-[#F97316] uppercase tracking-widest mb-1">{step.subtitle}</p>
                    <h2 className="text-2xl font-black text-gray-900 mb-3">{step.title}</h2>
                    <p className="text-gray-600 leading-relaxed mb-5 max-w-xl">{step.description}</p>
                    <ul className="flex flex-col gap-2">
                      {step.details.map((d) => (
                        <li key={d} className="flex items-center gap-2.5 text-sm text-gray-600">
                          <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
                            <span className="text-[#F97316] text-[10px] font-black">✓</span>
                          </span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Benefits grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Warum PVPro?</p>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">Die Vorteile auf einen Blick</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => {
              const Icon = b.Icon;
              return (
                <div key={b.title} className="rounded-2xl border border-gray-100 p-7 hover:shadow-lg transition-shadow">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
                    <Icon className="w-5 h-5 text-[#F97316]" />
                  </div>
                  <h3 className="font-black text-gray-900 mb-2">{b.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{b.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* FAQ teaser */}
        <div className="rounded-2xl border border-gray-100 p-8 sm:p-10 mb-12">
          <h2 className="text-xl font-black text-gray-900 mb-6">Häufige Fragen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { q: 'Ist der Service wirklich kostenlos?', a: 'Ja, zu 100%. Wir finanzieren uns durch Provisionen der Installateure — ohne Aufpreis für Sie.' },
              { q: 'Bin ich zur Auswahl eines Angebots verpflichtet?', a: 'Nein. Sie können alle Offerten ablehnen, ohne irgendwelche Konsequenzen.' },
              { q: 'Wie schnell erhalte ich die Offerten?', a: 'In der Regel innerhalb von 24–48 Stunden nach Ihrer Anfrage.' },
              { q: 'In welchen Regionen ist PVPro aktiv?', a: 'Wir sind in der ganzen Schweiz tätig, in allen 26 Kantonen.' },
            ].map((faq) => (
              <div key={faq.q}>
                <p className="font-bold text-gray-900 mb-1 text-sm">{faq.q}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-gray-100">
            <Link href="/faq" className="text-sm font-semibold text-[#F97316] hover:underline">
              Alle FAQ ansehen →
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-2xl p-10 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
          <h2 className="text-2xl font-black text-gray-900 mb-3">Jetzt kostenlos starten</h2>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Füllen Sie das Formular in unter 2 Minuten aus und erhalten Sie bis zu 3 Offerten von geprüften Installateuren.
          </p>
          <Link
            href="/anfrage"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm transition-opacity hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
          >
            Kostenlose Offerte anfordern →
          </Link>
        </div>

      </div>
    </main>
  );
}
