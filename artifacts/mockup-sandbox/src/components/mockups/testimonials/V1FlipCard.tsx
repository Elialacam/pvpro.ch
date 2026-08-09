import { useState } from "react";
import { Check, MapPin, Star } from "lucide-react";
import "./V1FlipCard_group.css";

const reviews = [
  { name: "Markus B., Wil SG", kWp: "9,2 kWp", quote: "Kein einziger Werbeanruf – genau das hatte ich befürchtet.", detail: "Bei so einem Vergleichsportal rechnet man ja fast damit, dass danach das Telefon nicht mehr stillsteht. Bei mir kam nichts dergleichen. Ich habe die drei Offerten per Mail bekommen und konnte in Ruhe schauen, ohne dass mich jemand bedrängt hat.", photo: "/__mockup/images/projects/project1.png", location: "Gewerbegebäude, Wil" },
  { name: "Sandra K., Bülach ZH", kWp: null, quote: "Ich habe auf den Haken gewartet – es gab keinen.", detail: "Ehrlich gesagt dachte ich, irgendwo kommt dann noch eine Rechnung oder eine versteckte Gebühr. Nichts davon. Der Vergleich war wirklich gratis, und die Offerten kamen direkt von den Installateuren, ohne Zwischenkosten.", photo: "/__mockup/images/projects/project2.png", location: "Einfamilienhaus, Bülach" },
  { name: "Peter H., Chur GR", kWp: "11 kWp", quote: "Kein Billiganbieter, sondern ein Fachbetrieb aus der Region.", detail: "Meine Sorge war, dass ich an irgendeine anonyme Firma gerate. Stattdessen kam die Offerte von einem Betrieb aus dem Nachbarort, den sogar mein Nachbar schon kannte. Die Anlage läuft jetzt seit dem Sommer einwandfrei.", photo: "/__mockup/images/projects/project3.png", location: "Grossanlage, Chur" },
  { name: "Nadia F., Frauenfeld TG", kWp: null, quote: "Wirklich drei Offerten – und ich konnte selber vergleichen.", detail: "Ich hatte erwartet, dass man mich einfach an eine einzige Firma weiterreicht. Es waren tatsächlich drei unabhängige Angebote mit unterschiedlichen Preisen. Erst dadurch habe ich gemerkt, wie gross die Unterschiede sein können.", photo: "/__mockup/images/projects/project4.jpg", location: "Wohnhaus, Ticino" },
  { name: "Thomas R., Olten SO", kWp: "8,5 kWp", quote: "War skeptisch gegenüber Vergleichsportalen – am Ende über 4'000 Franken gespart.", detail: "Von solchen Seiten halte ich normalerweise wenig. Aber die günstigste der drei Offerten lag deutlich unter dem, was mir eine Firma vorher direkt angeboten hatte. Rund 4'000 Franken Unterschied für praktisch dieselbe Anlage.", photo: "/__mockup/images/projects/project5.jpg", location: "Flachdach, Olten" },
  { name: "Claudia W., Luzern", kWp: null, quote: "In der Mittagspause ausgefüllt, am nächsten Tag die Offerten gehabt.", detail: "Ich hatte mit viel Aufwand gerechnet, Formulare, Rückfragen, das ganze Theater. War aber in ein paar Minuten erledigt. Einzig eine Offerte kam erst zwei Tage später, aber das war völlig okay.", photo: "/__mockup/images/projects/project6.jpg", location: "Mehrfamilienhaus, Luzern" },
];

function Stars() {
  return <div className="flex gap-1" aria-label="5 von 5 Sternen">{Array.from({ length: 5 }, (_, i) => <Star key={i} size={16} fill="#fcb210" strokeWidth={1.5} color="#fcb210" />)}</div>;
}

export function V1FlipCard() {
  const [flipped, setFlipped] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-10" style={{ fontFamily: "'DM Sans', ui-sans-serif, sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@700;800&display=swap');`}</style>
      <div className="w-full max-w-6xl">
        <div className="mb-10 text-center sm:text-left">
          <p style={{ color: "#ffc812" }} className="text-xs font-bold uppercase tracking-widest mb-2">Kundenstimmen</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Manrope', sans-serif", letterSpacing: "-.045em" }}>Was unsere Kunden sagen</h2>
          <p className="text-gray-500 text-sm">Echte Erfahrungen. Echte Anlagen. Fahren Sie über eine Karte.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {reviews.map((review, index) => (
            <div
              key={review.name}
              className={`flip-card-scene group h-[346px] cursor-pointer ${flipped === index ? "is-flipped" : ""}`}
              tabIndex={0}
              role="button"
              aria-label={`${review.name}: Projektfoto anzeigen`}
              onClick={() => setFlipped(flipped === index ? null : index)}
              onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); setFlipped(flipped === index ? null : index); } }}
            >
              <div className="flip-card-inner relative h-full w-full">
                <article className="flip-card-face absolute inset-0 flex flex-col rounded-2xl border border-[#fcb210]/45 bg-white p-7 shadow-[0_14px_35px_rgba(83,70,35,0.08)] transition-shadow duration-300 group-hover:shadow-[0_20px_45px_rgba(252,178,16,0.18)]">
                  <div className="flex items-center justify-between mb-6">
                    <Stars />
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#fff8df] px-2.5 py-1 text-[10px] font-semibold text-gray-500"><Check size={12} strokeWidth={3} color="#fcb210" /> Google-Rezension</span>
                  </div>
                  <p className="text-xl font-bold leading-[1.25] text-gray-900" style={{ fontFamily: "'Manrope', sans-serif" }}>“{review.quote}”</p>
                  <p className="mt-4 line-clamp-4 text-sm leading-6 text-gray-500">{review.detail}</p>
                  <div className="mt-auto flex items-end justify-between border-t border-gray-100 pt-5">
                    <div><p className="text-sm font-bold text-gray-900">{review.name}</p><p className="mt-1 text-xs text-gray-400">Solar-Kunde</p></div>
                    <span className="text-[10px] uppercase tracking-wider text-gray-400">Hover für Projekt ↗</span>
                  </div>
                </article>
                <article className="flip-card-face flip-card-back absolute inset-0 overflow-hidden rounded-2xl bg-gray-900 shadow-[0_20px_50px_rgba(83,70,35,0.2)]">
                  <img src={review.photo} alt={`Solaranlage von ${review.name}`} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-900/10 to-transparent" />
                  <div className="absolute left-0 right-0 bottom-0 p-6 text-white">
                    <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold backdrop-blur-md"><MapPin size={13} color="#ffc812" /> {review.location}</div>
                    <div className="flex items-end justify-between"><div><p className="text-lg font-bold">{review.name}</p><p className="text-xs text-white/65">Realisierte Solaranlage</p></div>{review.kWp && <span className="rounded-lg bg-[#ffc812] px-2.5 py-1.5 text-xs font-bold text-gray-900">{review.kWp}</span>}</div>
                  </div>
                </article>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-7 text-center text-xs text-gray-400">Auf der Karte zeigen wir Ihnen, was hinter der Bewertung steckt.</p>
      </div>
    </div>
  );
}