import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Users, Shield, Star, MapPin, Phone, Mail } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us – PVPro.ch | Independent Swiss Solar Platform',
  description: 'Learn about PVPro.ch – the independent Swiss platform connecting homeowners with certified photovoltaic installers.',
  alternates: {
    canonical: 'https://www.pvpro.ch/en/about-us',
    languages: {
      'de-CH': 'https://www.pvpro.ch/ueber-uns',
      'fr-CH': 'https://www.pvpro.ch/fr/a-propos',
      'en-CH': 'https://www.pvpro.ch/en/about-us',
      'it-CH': 'https://www.pvpro.ch/it/chi-siamo',
      'x-default': 'https://www.pvpro.ch/ueber-uns',
    },
  },
};

const values = [
  {
    icon: Shield,
    title: 'Independence',
    text: 'We are not tied to any installer. Our recommendations are based solely on quality, price and customer ratings.',
  },
  {
    icon: Users,
    title: 'Certified partners',
    text: 'Every installer in our network goes through a careful screening process: certifications, references, insurance and customer feedback.',
  },
  {
    icon: Star,
    title: 'Transparency',
    text: 'No hidden costs, no obligations. You receive real prices from real installers in your region.',
  },
];

const stats = [
  { value: '10,000+', label: 'Satisfied customers' },
  { value: '500+',    label: 'Certified installers' },
  { value: '15+',     label: 'Years of experience' },
  { value: '26',      label: 'Swiss cantons' },
];

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-20">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-sm text-gray-400 mb-10">
          <Link href="/en" className="hover:text-gray-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-700 font-medium">About us</span>
        </nav>

        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Our story</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
              The independent Swiss solar platform
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              PVPro.ch was founded with a clear mission: to help Swiss homeowners find the best solar installation at the best price — simply, transparently and free of charge.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              In a market that is often opaque and hard to compare, we provide clarity. We connect you with up to 3 certified installers from your region and let the quotes speak for themselves.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/team-new.png"
              alt="The PVPro team"
              width={800}
              height={500}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-24">
          {stats.map((s) => (
            <div key={s.label} className="text-center rounded-2xl p-8" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
              <p className="text-3xl sm:text-4xl font-bold text-[#F97316] mb-2">{s.value}</p>
              <p className="text-sm text-gray-600 font-medium">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Mission */}
        <div className="mb-24">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Our mission</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-5">
              We make solar energy accessible to everyone
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Switching to solar energy is one of the best investments a homeowner can make. But the path to get there is often complicated. PVPro makes this step simple, fast and safe.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="rounded-2xl border border-gray-100 p-8 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
                    <Icon className="w-6 h-6 text-[#F97316]" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-3">{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* How we work */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
            <Image
              src="/images/hero-family-solar.png"
              alt="Family with solar installation"
              width={800}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">How we work</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-6">
              Your interests come first
            </h2>
            <div className="flex flex-col gap-5">
              {[
                { title: 'Free service', text: 'Our service is 100% free for homeowners. We are funded solely by installer commissions — at no extra cost to you.' },
                { title: 'No obligations', text: 'You decide whether and which offer you accept. No pressure, no minimum order, no contractual penalty.' },
                { title: 'Verified quality', text: 'We screen every installer before admitting them to the network. Certificates, references, proof of insurance and customer ratings are mandatory.' },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5" style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 mb-1">{item.title}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="rounded-2xl border border-gray-100 p-8 sm:p-12 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact</h2>
          <div className="flex flex-col gap-4 text-sm max-w-sm">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#F97316] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Address</p>
                <p className="font-semibold text-gray-800">Via Santi Pietro e Paolo 16<br />6953 Lugaggia, Switzerland</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#F97316] flex-shrink-0" />
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Email</p>
                <a href="mailto:anfrage@pvpro.ch" className="font-semibold text-gray-800 hover:text-[#F97316] transition-colors">anfrage@pvpro.ch</a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-[#F97316] flex-shrink-0" />
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Phone</p>
                <a href="tel:+41779770750" className="font-semibold text-gray-800 hover:text-[#F97316] transition-colors">+41 77 977 07 50</a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-2xl p-10 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Ready for your solar installation?</h2>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Request up to 3 free and no-obligation quotes now.
          </p>
          <Link
            href="/en/request"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm transition-opacity hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
          >
            Request a free quote →
          </Link>
        </div>

      </div>
    </main>
  );
}
