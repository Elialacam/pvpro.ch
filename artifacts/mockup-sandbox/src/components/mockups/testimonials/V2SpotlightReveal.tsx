import { useState } from "react";
import { ArrowUpRight, Check, MapPin, Star } from "lucide-react";

const reviews = [
  { name: "Markus B., Wil SG", kWp: "9,2 kWp", quote: "Kein einziger Werbeanruf – genau das hatte ich befürchtet.", detail: "Bei so einem Vergleichsportal rechnet man ja fast damit, dass danach das Telefon nicht mehr stillsteht. Bei mir kam nichts dergleichen. Ich habe die drei Offerten per Mail bekommen und konnte in Ruhe schauen, ohne dass mich jemand bedrängt hat.", photo: "/__mockup/images/projects/project1.png", location: "Gewerbegebäude, Wil" },
  { name: "Sandra K., Bülach ZH", kWp: null, quote: "Ich habe auf den Haken gewartet – es gab keinen.", detail: "Ehrlich gesagt dachte ich, irgendwo kommt dann noch eine Rechnung oder eine versteckte Gebühr. Nichts davon. Der Vergleich war wirklich gratis, und die Offerten kamen direkt von den Installateuren, ohne Zwischenkosten.", photo: "/__mockup/images/projects/project2.png", location: "Einfamilienhaus, Bülach" },
  { name: "Peter H., Chur GR", kWp: "11 kWp", quote: "Kein Billiganbieter, sondern ein Fachbetrieb aus der Region.", detail: "Meine Sorge war, dass ich an irgendeine anonyme Firma gerate. Stattdessen kam die Offerte von einem Betrieb aus dem Nachbarort, den sogar mein Nachbar schon kannte. Die Anlage läuft jetzt seit dem Sommer einwandfrei.", photo: "/__mockup/images/projects/project3.png", location: "Grossanlage, Chur" },
  { name: "Nadia F., Frauenfeld TG", kWp: null, quote: "Wirklich drei Offerten – und ich konnte selber vergleichen.", detail: "Ich hatte erwartet, dass man mich einfach an eine einzige Firma weiterreicht. Es waren tatsächlich drei unabhängige Angebote mit unterschiedlichen Preisen. Erst dadurch habe ich gemerkt, wie gross die Unterschiede sein können.", photo: "/__mockup/images/projects/project4.jpg", location: "Wohnhaus, Ticino" },
  { name: "Thomas R., Olten SO", kWp: "8,5 kWp", quote: "War skeptisch gegenüber Vergleichsportalen – am Ende über 4'000 Franken gespart.", detail: "Von solchen Seiten halte ich normalerweise wenig. Aber die günstigste der drei Offerten lag deutlich unter dem, was mir eine Firma vorher direkt angeboten hatte. Rund 4'000 Franken Unterschied für praktisch dieselbe Anlage.", photo: "/__mockup/images/projects/project5.jpg", location: "Flachdach, Olten" },
  { name: "Claudia W., Luzern", kWp: null, quote: "In der Mittagspause ausgefüllt, am nächsten Tag die Offerten gehabt.", detail: "Ich hatte mit viel Aufwand gerechnet, Formulare, Rückfragen, das ganze Theater. War aber in ein paar Minuten erledigt. Einzig eine Offerte kam erst zwei Tage später, aber das war völlig okay.", photo: "/__mockup/images/projects/project6.jpg", location: "Mehrfamilienhaus, Luzern" },
];

function ReviewCard({ review, index }: { review: typeof reviews[number]; index: number }) {
  const [revealed, setRevealed] = useState(false);
  return (
    <article
      className={`group relative min-h-[390px] overflow-hidden rounded-[22px] border border-white/10 bg-[#171b22] shadow-2xl shadow-black/20 transition duration-500 hover:-translate-y-1 hover:border-[#fcb210]/60 ${revealed ? "-translate-y-1 border-[#fcb210]/60" : ""}`}
      onTouchStart={() => setRevealed((value) => !value)}
      style={{ transitionDelay: `${index * 45}ms` }}
    >
      <div className="absolute inset-0 overflow-hidden bg-[#272b31]">
        <img
          src={review.photo}
          alt={`Solaranlage bei ${review.location}`}
          className={`h-full w-full object-cover transition duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-105 group-hover:opacity-100 group-hover:translate-y-0 ${revealed ? "scale-105 translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-[#0c0f13] via-[#0c0f13]/25 to-transparent transition-opacity duration-500 ${revealed ? "opacity-95" : "opacity-0 group-hover:opacity-95"}`} />
        <div className="absolute -inset-10 bg-[#fcb210]/20 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-70" />
      </div>

      <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5">
        <span className="rounded-full border border-white/15 bg-black/25 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/65 backdrop-blur-md">
          Erfahrungsbericht 0{index + 1}
        </span>
        <span className="flex items-center gap-1.5 text-xs font-medium text-white/65">
          <span className="h-1.5 w-1.5 rounded-full bg-[#ffc812] shadow-[0_0_12px_#ffc812]" />
          Schweiz
        </span>
      </div>

      <div className={`absolute inset-x-0 bottom-0 z-10 p-6 transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] ${revealed ? "translate-y-0" : "group-hover:translate-y-0"}`}>
        <div className="mb-3 flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, starIndex) => <Star key={starIndex} size={14} fill="#fcb210" strokeWidth={0} />)}
          <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-[#fcb210]/15 px-2 py-1 text-[10px] font-semibold text-[#ffc812]"><Check size={11} strokeWidth={3} /> Google-Rezension</span>
        </div>
        <h3 className="max-w-[18rem] text-[21px] font-semibold leading-[1.12] tracking-[-0.025em] text-white">{review.quote}</h3>
        <div className={`grid transition-[grid-template-rows,opacity] duration-500 ${revealed ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100"}`}>
          <div className="overflow-hidden">
            <p className="mt-3 max-w-[29rem] text-[12px] leading-relaxed text-white/70">{review.detail}</p>
          </div>
        </div>
        <div className="mt-5 flex items-end justify-between border-t border-white/15 pt-4">
          <div>
            <p className="text-sm font-semibold text-white">{review.name}</p>
            <p className="mt-1 flex items-center gap-1 text-[11px] text-white/50"><MapPin size={11} /> {review.location}</p>
          </div>
          {review.kWp && <span className="font-mono text-xs text-[#ffc812]">{review.kWp}</span>}
        </div>
      </div>

      <div className={`pointer-events-none absolute right-5 top-16 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-[#ffc812]/50 bg-[#fcb210]/20 text-[#ffc812] backdrop-blur-md transition duration-500 group-hover:rotate-45 group-hover:opacity-0 ${revealed ? "opacity-0" : "opacity-100"}`}><ArrowUpRight size={17} /></div>
    </article>
  );
}

export function V2SpotlightReveal() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-10">
      <section className="relative w-full max-w-[1240px] overflow-hidden rounded-[32px] bg-[#0c0f13] px-6 py-16 text-white shadow-[0_30px_80px_rgba(12,15,19,.28)] sm:px-10 lg:px-14">
        <div className="pointer-events-none absolute -left-32 -top-40 h-[480px] w-[480px] rounded-full bg-[#fcb210]/[0.07] blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-48 -right-20 h-[500px] w-[500px] rounded-full bg-[#ffc812]/[0.05] blur-[110px]" />
        <header className="relative mb-10 flex flex-col justify-between gap-6 border-b border-white/10 pb-9 sm:flex-row sm:items-end">
          <div>
            <p style={{ color: "#ffc812" }} className="mb-2 text-xs font-bold uppercase tracking-widest">Kundenstimmen</p>
            <h2 className="text-4xl font-bold tracking-[-0.04em] text-gray-900 text-white sm:text-5xl">Was unsere Kunden sagen</h2>
          </div>
          <p className="max-w-[245px] text-sm leading-relaxed text-white/45">Echte Menschen. Echte Anlagen.<br />Und kein Kleingedrucktes.</p>
        </header>
        <div className="relative grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => <ReviewCard key={review.name} review={review} index={index} />)}
        </div>
        <footer className="relative mt-8 flex items-center justify-between border-t border-white/10 pt-5 text-[11px] uppercase tracking-[0.16em] text-white/35">
          <span>Hover to reveal the story</span>
          <span className="hidden sm:block">PVPro · 2024</span>
        </footer>
      </section>
    </div>
  );
}