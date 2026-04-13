'use client';

import { Star } from 'lucide-react';
import { useLocale } from '@/lib/LocaleContext';

interface Review {
  name: string;
  avatar: string | null;
  text: string;
}

const reviewsByLocale: Record<string, Review[]> = {
  de: [
    { name: 'Thomas Weber',     avatar: '/images/testimonials/weber.webp',  text: 'Wir sind sehr zufrieden mit unserer neuen Solaranlage. PVPro hat uns perfekt beraten und mit einem lokalen Fachbetrieb verbunden. Alles lief reibungslos!' },
    { name: 'Sandra Müller',    avatar: null,                              text: 'Super einfach und schnell. Drei Offerten innerhalb von zwei Tagen erhalten, alle sehr professionell. Habe mich für den besten Preis entschieden. Sehr empfehlenswert!' },
    { name: 'Andreas Brunner',  avatar: '/images/testimonials/andreas.webp', text: 'Der Prozess war so einfach! Formular ausgefüllt, drei Angebote erhalten, das beste gewählt. Jetzt produzieren wir unseren eigenen Strom.' },
    { name: 'Beat Keller',      avatar: null,                              text: 'Ich war skeptisch, aber PVPro hat mich wirklich überzeugt. Die vermittelten Installateure waren kompetent und pünktlich. Die Anlage läuft seit 6 Monaten perfekt.' },
    { name: 'Josef Berber',     avatar: '/images/testimonials/josef.webp',  text: 'Installation sauber gemacht, die Monteure waren sehr freundlich. Anlage produziert echt ordentlich, sogar mehr als erwartet. Bin sehr zufrieden!' },
    { name: 'Laura Meier',      avatar: null,                              text: 'Kostenloser Service, geprüfte Installateure, keine Werbeanrufe — genau das wurde versprochen und genau das wurde geliefert. 5 Sterne!' },
    { name: 'Tobias Schneider', avatar: '/images/testimonials/tobias.webp', text: 'Kompetent, zuverlässig und professionell. Transparente Beratung mit exzellentem Service. Die Solaranlage hat sich schon nach 8 Jahren amortisiert.' },
    { name: 'Hans Zimmermann',  avatar: null,                              text: 'Habe über PVPro drei Offerten verglichen und dabei fast 4000 CHF gespart. Der lokale Installateur war top — schnelle Montage, alles erklärt.' },
    { name: 'Markus Frei',      avatar: '/images/testimonials/mtb.webp',   text: 'Top Service, top Qualität. Die Monteure haben sehr sauber gearbeitet und alles verständlich erklärt. Kann ich nur weiterempfehlen!' },
    { name: 'Anna Huber',       avatar: null,                              text: 'Sehr gute Erfahrung! PVPro hat mir geholfen, die beste Lösung für mein Dach zu finden. Seit der Installation spare ich monatlich über 120 CHF Stromkosten.' },
    { name: 'Daniel Ochs',      avatar: '/images/testimonials/octo.webp',  text: 'Ich bin total fasziniert von dem Service. Alles hat super geklappt, der Installateur war sehr professionell und die Anlage läuft einwandfrei.' },
    { name: 'Claudia Fischer',  avatar: null,                              text: 'Einfach, schnell und kostenlos. Ich habe nie gedacht, dass es so unkompliziert sein kann. Drei Offerten in 24 Stunden — unglaublich!' },
  ],
  fr: [
    { name: 'Thomas Weber',     avatar: '/images/testimonials/weber.webp',  text: 'Très satisfaits de notre nouvelle installation solaire. PVPro nous a parfaitement conseillés et mis en contact avec un professionnel local. Tout s\'est passé sans accroc !' },
    { name: 'Sandra Müller',    avatar: null,                              text: 'Super simple et rapide. Trois offres reçues en deux jours, toutes très professionnelles. J\'ai choisi le meilleur prix. Je recommande vivement !' },
    { name: 'Andreas Brunner',  avatar: '/images/testimonials/andreas.webp', text: 'Le processus était si simple ! Formulaire rempli, trois offres reçues, la meilleure choisie. Maintenant nous produisons notre propre électricité.' },
    { name: 'Beat Keller',      avatar: null,                              text: "J'étais sceptique, mais PVPro m'a vraiment convaincu. Les installateurs proposés étaient compétents et ponctuels. Le système fonctionne parfaitement depuis 6 mois." },
    { name: 'Josef Berber',     avatar: '/images/testimonials/josef.webp',  text: 'Installation soignée, les techniciens étaient très sympathiques. Le système produit vraiment bien, même plus que prévu. Je suis très satisfait !' },
    { name: 'Laura Meier',      avatar: null,                              text: 'Service gratuit, installateurs certifiés, pas d\'appels commerciaux — exactement ce qui était promis et livré. 5 étoiles !' },
    { name: 'Tobias Schneider', avatar: '/images/testimonials/tobias.webp', text: 'Compétent, fiable et professionnel. Conseil transparent avec un service excellent. L\'installation solaire s\'est amortie en 8 ans.' },
    { name: 'Hans Zimmermann',  avatar: null,                              text: "J'ai comparé trois offres via PVPro et économisé près de 4000 CHF. L'installateur local était excellent — montage rapide, tout bien expliqué." },
    { name: 'Markus Frei',      avatar: '/images/testimonials/mtb.webp',   text: 'Service de qualité, travail soigné. Les techniciens ont tout expliqué clairement. Je recommande sans hésitation !' },
    { name: 'Anna Huber',       avatar: null,                              text: 'Très bonne expérience ! PVPro m\'a aidé à trouver la meilleure solution pour mon toit. J\'économise plus de 120 CHF par mois depuis l\'installation.' },
    { name: 'Daniel Ochs',      avatar: '/images/testimonials/octo.webp',  text: 'Je suis vraiment impressionné par le service. Tout s\'est déroulé parfaitement, l\'installateur était très professionnel.' },
    { name: 'Claudia Fischer',  avatar: null,                              text: 'Simple, rapide et gratuit. Je n\'aurais jamais pensé que ce serait aussi facile. Trois offres en 24 heures — incroyable !' },
  ],
  en: [
    { name: 'Thomas Weber',     avatar: '/images/testimonials/weber.webp',  text: 'We are very happy with our new solar system. PVPro gave us perfect advice and connected us with a local expert. Everything went smoothly!' },
    { name: 'Sandra Müller',    avatar: null,                              text: 'Super easy and fast. Received three quotes within two days, all very professional. Chose the best price. Highly recommended!' },
    { name: 'Andreas Brunner',  avatar: '/images/testimonials/andreas.webp', text: 'The process was so easy! Filled in the form, received three quotes, chose the best. Now we produce our own electricity.' },
    { name: 'Beat Keller',      avatar: null,                              text: 'I was skeptical, but PVPro truly convinced me. The installers were competent and punctual. The system has been running perfectly for 6 months.' },
    { name: 'Josef Berber',     avatar: '/images/testimonials/josef.webp',  text: 'Clean installation, the technicians were very friendly. The system produces really well, even more than expected. Very satisfied!' },
    { name: 'Laura Meier',      avatar: null,                              text: 'Free service, certified installers, no sales calls — exactly what was promised and delivered. 5 stars!' },
    { name: 'Tobias Schneider', avatar: '/images/testimonials/tobias.webp', text: 'Competent, reliable and professional. Transparent advice with excellent service. The solar system paid for itself in 8 years.' },
    { name: 'Hans Zimmermann',  avatar: null,                              text: 'Compared three quotes via PVPro and saved nearly CHF 4,000. The local installer was great — fast installation, everything explained.' },
    { name: 'Markus Frei',      avatar: '/images/testimonials/mtb.webp',   text: 'Top service, top quality. The technicians worked cleanly and explained everything clearly. Highly recommend!' },
    { name: 'Anna Huber',       avatar: null,                              text: 'Great experience! PVPro helped me find the best solution for my roof. I save over CHF 120 per month since installation.' },
    { name: 'Daniel Ochs',      avatar: '/images/testimonials/octo.webp',  text: 'I am totally impressed by the service. Everything went perfectly, the installer was very professional.' },
    { name: 'Claudia Fischer',  avatar: null,                              text: 'Simple, fast and free. I never thought it could be this easy. Three quotes in 24 hours — incredible!' },
  ],
  it: [
    { name: 'Thomas Weber',     avatar: '/images/testimonials/weber.webp',  text: 'Siamo molto soddisfatti del nostro nuovo impianto solare. PVPro ci ha consigliato perfettamente e ci ha messo in contatto con un professionista locale. Tutto è andato liscio!' },
    { name: 'Sandra Müller',    avatar: null,                              text: 'Semplicissimo e veloce. Tre preventivi ricevuti in due giorni, tutti molto professionali. Ho scelto il miglior prezzo. Consigliatissimo!' },
    { name: 'Andreas Brunner',  avatar: '/images/testimonials/andreas.webp', text: 'Il processo è stato semplicissimo! Modulo compilato, tre offerte ricevute, la migliore scelta. Ora produciamo la nostra elettricità.' },
    { name: 'Beat Keller',      avatar: null,                              text: 'Ero scettico, ma PVPro mi ha davvero convinto. Gli installatori erano competenti e puntuali. L\'impianto funziona perfettamente da 6 mesi.' },
    { name: 'Josef Berber',     avatar: '/images/testimonials/josef.webp',  text: 'Installazione curata, i tecnici erano molto gentili. L\'impianto produce davvero bene, anche più del previsto. Sono molto soddisfatto!' },
    { name: 'Laura Meier',      avatar: null,                              text: 'Servizio gratuito, installatori certificati, nessuna chiamata commerciale — esattamente ciò che era stato promesso e consegnato. 5 stelle!' },
    { name: 'Tobias Schneider', avatar: '/images/testimonials/tobias.webp', text: 'Competente, affidabile e professionale. Consulenza trasparente con un servizio eccellente. L\'impianto solare si è ammortizzato in 8 anni.' },
    { name: 'Hans Zimmermann',  avatar: null,                              text: 'Ho confrontato tre preventivi tramite PVPro e risparmiato quasi 4000 CHF. L\'installatore locale era ottimo — montaggio rapido, tutto spiegato.' },
    { name: 'Markus Frei',      avatar: '/images/testimonials/mtb.webp',   text: 'Servizio di qualità, lavoro accurato. I tecnici hanno lavorato in modo impeccabile e spiegato tutto chiaramente. Solo da consigliare!' },
    { name: 'Anna Huber',       avatar: null,                              text: 'Ottima esperienza! PVPro mi ha aiutato a trovare la soluzione migliore per il mio tetto. Risparmio oltre 120 CHF al mese dall\'installazione.' },
    { name: 'Daniel Ochs',      avatar: '/images/testimonials/octo.webp',  text: 'Sono totalmente impressionato dal servizio. Tutto è andato alla perfezione, l\'installatore era molto professionale.' },
    { name: 'Claudia Fischer',  avatar: null,                              text: 'Semplice, veloce e gratuito. Non avrei mai pensato che potesse essere così facile. Tre preventivi in 24 ore — incredibile!' },
  ],
};

const sectionText: Record<string, { label: string; heading: string; sub: string }> = {
  de: { label: 'Kundenstimmen', heading: 'Was unsere Kunden sagen', sub: "Über 13'000 Haushalte haben bereits über PVPro ihre Solaranlage gefunden." },
  fr: { label: 'Avis clients',  heading: 'Ce que disent nos clients', sub: "Plus de 13'000 ménages ont déjà trouvé leur installation solaire via PVPro." },
  en: { label: 'Customer reviews', heading: 'What our customers say', sub: "Over 13'000 households have already found their solar system through PVPro." },
  it: { label: 'Recensioni clienti', heading: 'Cosa dicono i nostri clienti', sub: "Oltre 13'000 famiglie hanno già trovato il loro impianto solare tramite PVPro." },
};

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
    <div className="flex-shrink-0 w-[300px] mx-2.5 bg-white rounded-2xl p-6 border-2 border-gray-200">
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
      <div className="border-l-4 pl-3" style={{ borderColor: '#F97316' }}>
        <p className="text-gray-500 text-sm leading-relaxed">{review.text}</p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const locale = useLocale();
  const reviews = reviewsByLocale[locale] || reviewsByLocale.de;
  const t = sectionText[locale] || sectionText.de;
  const doubled = [...reviews, ...reviews];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container-custom mb-10">
        <div className="text-center">
          <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">{t.label}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-2">
            {t.heading}
          </h2>
          <p className="text-gray-500 text-sm">{t.sub}</p>
        </div>
      </div>

      <div className="px-6 sm:px-10 lg:px-16">
        <div className="overflow-hidden">
          <div className="flex marquee-track" style={{ width: 'max-content' }}>
            {doubled.map((review, i) => <ReviewCard key={i} review={review} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
