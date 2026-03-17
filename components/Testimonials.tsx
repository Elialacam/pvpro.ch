'use client';

import { Star } from 'lucide-react';

interface Review {
  name: string;
  avatar: string | null;
  text: string;
}

const reviews: Review[] = [
  {
    name: 'Thomas Weber',
    avatar: '/images/testimonials/weber.png',
    text: 'Wir sind sehr zufrieden mit unserer neuen Solaranlage. PVPro hat uns perfekt beraten und mit einem lokalen Fachbetrieb verbunden. Alles lief reibungslos!',
  },
  {
    name: 'Sandra Müller',
    avatar: null,
    text: 'Super einfach und schnell. Drei Offerten innerhalb von zwei Tagen erhalten, alle sehr professionell. Habe mich für den besten Preis entschieden. Sehr empfehlenswert!',
  },
  {
    name: 'Andreas Brunner',
    avatar: '/images/testimonials/andreas.png',
    text: 'Der Prozess war so einfach! Formular ausgefüllt, drei Angebote erhalten, das beste gewählt. Jetzt produzieren wir unseren eigenen Strom.',
  },
  {
    name: 'Beat Keller',
    avatar: null,
    text: 'Ich war skeptisch, aber PVPro hat mich wirklich überzeugt. Die vermittelten Installateure waren kompetent und pünktlich. Die Anlage läuft seit 6 Monaten perfekt.',
  },
  {
    name: 'Josef Berber',
    avatar: '/images/testimonials/josef.png',
    text: 'Installation sauber gemacht, die Monteure waren sehr freundlich. Anlage produziert echt ordentlich, sogar mehr als erwartet. Bin sehr zufrieden!',
  },
  {
    name: 'Laura Meier',
    avatar: null,
    text: 'Kostenloser Service, geprüfte Installateure, keine Werbeanrufe — genau das wurde versprochen und genau das wurde geliefert. 5 Sterne!',
  },
  {
    name: 'Tobias Schneider',
    avatar: '/images/testimonials/tobias.png',
    text: 'Kompetent, zuverlässig und professionell. Transparente Beratung mit exzellentem Service. Die Solaranlage hat sich schon nach 8 Jahren amortisiert.',
  },
  {
    name: 'Hans Zimmermann',
    avatar: null,
    text: 'Habe über PVPro drei Offerten verglichen und dabei fast 4000 CHF gespart. Der lokale Installateur war top — schnelle Montage, alles erklärt.',
  },
  {
    name: 'Markus Frei',
    avatar: '/images/testimonials/mtb.png',
    text: 'Top Service, top Qualität. Die Monteure haben sehr sauber gearbeitet und alles verständlich erklärt. Kann ich nur weiterempfehlen!',
  },
  {
    name: 'Anna Huber',
    avatar: null,
    text: 'Sehr gute Erfahrung! PVPro hat mir geholfen, die beste Lösung für mein Dach zu finden. Seit der Installation spare ich monatlich über 120 CHF Stromkosten.',
  },
  {
    name: 'Daniel Ochs',
    avatar: '/images/testimonials/octo.png',
    text: 'Ich bin total fasziniert von dem Service. Alles hat super geklappt, der Installateur war sehr professionell und die Anlage läuft einwandfrei.',
  },
  {
    name: 'Claudia Fischer',
    avatar: null,
    text: 'Einfach, schnell und kostenlos. Ich habe nie gedacht, dass es so unkompliziert sein kann. Drei Offerten in 24 Stunden — unglaublich!',
  },
];

const avatarColors = ['#1e3a5f', '#1d4ed8', '#15803d', '#7c3aed', '#b91c1c', '#0e7490', '#92400e', '#831843'];

function Avatar({ review }: { review: Review }) {
  const colorIndex = review.name.charCodeAt(0) % avatarColors.length;
  if (review.avatar) {
    return (
      <img
        src={review.avatar}
        alt={review.name}
        className="w-10 h-10 rounded-full object-cover flex-shrink-0"
      />
    );
  }
  return (
    <div
      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
      style={{ background: avatarColors[colorIndex] }}
    >
      {review.name.charAt(0)}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="flex-shrink-0 w-[300px] mx-2.5 bg-white rounded-3xl p-6 shadow-md border border-gray-100">
      {/* Header: avatar + name + stars */}
      <div className="flex items-center gap-3 mb-4">
        <Avatar review={review} />
        <div className="flex items-center gap-2 flex-wrap">
          <p className="font-bold text-gray-900 text-sm">{review.name}</p>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-[#F97316] text-[#F97316]" />
            ))}
          </div>
        </div>
      </div>
      {/* Text with left orange border */}
      <div className="border-l-4 pl-3" style={{ borderColor: '#F97316' }}>
        <p className="text-gray-500 text-sm leading-relaxed">{review.text}</p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const doubled = [...reviews, ...reviews];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container-custom mb-10">
        <div className="text-center">
          <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Kundenstimmen</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-2">
            Was unsere Kunden sagen
          </h2>
          <p className="text-gray-500 text-sm">
            Über 13'000 Haushalte haben bereits über PVPro ihre Solaranlage gefunden.
          </p>
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="flex marquee-track" style={{ width: 'max-content' }}>
          {doubled.map((review, i) => <ReviewCard key={i} review={review} />)}
        </div>
      </div>
    </section>
  );
}
