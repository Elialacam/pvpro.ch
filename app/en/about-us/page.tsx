import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Users, Shield, Star, MapPin, Phone, Mail } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us – PVPro.ch | Swiss Solar Comparison Platform',
  description: 'Learn about PVPro.ch – the independent Swiss platform connecting homeowners with certified photovoltaic installers.',
  alternates: { canonical: 'https://www.pvpro.ch/en/about-us' },
};

const values = [
  { icon: Shield, title: 'Independence', text: 'We are not tied to any installer. Our recommendations are based solely on quality, price and customer ratings.' },
  { icon: Users,  title: 'Certified partners', text: 'Every installer in our network goes through a careful screening process: certifications, references, insurance and customer feedback.' },
  { icon: Star,   title: 'Transparency', text: 'No hidden costs, no obligations. You receive real prices from real installers in your region.' },
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
        <nav className="flex items-center gap-1.5 text-sm text-gray-400 mb-10">
          <Link href="/en" className="hover:text-gray-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-700 font-medium">About us</span>
        </nav>

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
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <Image src="/images/asset-beratung-indoor-1.png" alt="PVPro team" width={700} height={500} className="w-full h-auto object-cover" />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-24">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl p-6 text-center border border-gray-100 hover:shadow-md transition-shadow">
              <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mb-24">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">What sets us apart</p>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Our values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
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

        <div className="rounded-3xl p-10 sm:p-16 mb-16" style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-sm font-semibold text-orange-400 uppercase tracking-widest mb-3">Company</p>
              <h2 className="text-2xl font-bold text-white mb-4">NOBA Media Sagl</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                PVPro.ch is operated by NOBA Media Sagl, a Swiss company registered in the canton of Ticino.
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <MapPin className="w-4 h-4 text-orange-400 flex-shrink-0" />Via Santi Pietro e Paolo 16, 6953 Lugaggia, Switzerland
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <Phone className="w-4 h-4 text-orange-400 flex-shrink-0" />+41 77 977 07 50
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <Mail className="w-4 h-4 text-orange-400 flex-shrink-0" />anfrage@pvpro.ch
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { label: 'UID', value: 'CHE-236.020.113' },
                { label: 'CR', value: 'CH-501.4.029.665-0, Canton of Ticino' },
                { label: 'Director', value: 'Elia Alacam' },
                { label: 'Seat', value: 'Capriasca (TI)' },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 rounded-xl px-5 py-3" style={{ background: 'rgba(255,255,255,0.05)' }}>
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-widest w-24 flex-shrink-0 pt-0.5">{item.label}</span>
                  <span className="text-sm text-gray-300">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-2xl p-10 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Start for free now</h2>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">Get up to 3 quotes from certified installers in your region.</p>
          <Link href="/anfrage" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm transition-opacity hover:opacity-90" style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
            Get free quotes →
          </Link>
        </div>
      </div>
    </main>
  );
}
