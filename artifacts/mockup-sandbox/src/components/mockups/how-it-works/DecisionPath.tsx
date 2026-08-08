import { useState } from "react";
import { ArrowRight, Check, ChevronLeft, ChevronRight, CircleHelp, FileCheck2, Gauge, HandCoins, ShieldCheck, Sparkles, UsersRound } from "lucide-react";

type Route = {
  eyebrow: string;
  title: string;
  copy: string;
  icon: typeof FileCheck2;
  color: string;
  facts: string[];
};

const routes: Route[] = [
  {
    eyebrow: "Schritt 01 · Start",
    title: "Erzähl uns von deinem Dach.",
    copy: "Ein kurzer, klarer Check statt stundenlanger Recherche. Du beantwortest nur, was wir wirklich brauchen.",
    icon: FileCheck2,
    color: "#ff7548",
    facts: ["2 Minuten", "Kostenlos", "Ohne Vorbereitung"],
  },
  {
    eyebrow: "Schritt 02 · Auswahl",
    title: "Sieh, was wirklich passt.",
    copy: "Wir legen dir bis zu drei Angebote nebeneinander — mit Preis, Leistung und Bewertung, ohne Kleingedrucktes.",
    icon: Gauge,
    color: "#d3ab32",
    facts: ["Bis zu 3 Angebote", "Zertifizierte Profis", "Direkt vergleichbar"],
  },
  {
    eyebrow: "Schritt 03 · Entscheidung",
    title: "Du entscheidest. Nicht der Vertrieb.",
    copy: "Wähle in deinem Tempo den Installateur, der zu deinem Projekt passt. Kein Abo, kein Verkaufsdruck.",
    icon: HandCoins,
    color: "#214d50",
    facts: ["Reale Preise", "Lokale Partner", "Freie Entscheidung"],
  },
];

export function DecisionPath() {
  const [step, setStep] = useState(0);
  const [started, setStarted] = useState(false);
  const current = routes[step];
  const Icon = current.icon;

  const move = (next: number) => setStep(Math.max(0, Math.min(routes.length - 1, next)));

  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-[#f3f0e9] px-5 py-16 text-[#142327] sm:px-8 sm:py-20 lg:px-14 lg:py-24">
      <div className="pointer-events-none absolute -left-28 top-16 h-80 w-80 rounded-full bg-[#ff7548]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[32rem] w-[32rem] rounded-full bg-[#d3ab32]/10 blur-3xl" />
      <div className="relative mx-auto max-w-6xl">
        <header className="grid gap-8 lg:grid-cols-[1fr_310px] lg:items-end">
          <div>
            <div className="mb-7 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.25em] text-[#214d50]">
              <span className="h-2 w-2 rounded-full bg-[#ff7548]" /> Dein Weg zur eigenen Energie
            </div>
            <h2 className="max-w-3xl text-[3.35rem] font-black leading-[.91] tracking-[-.07em] sm:text-7xl lg:text-[6.7rem]">
              Nicht mehr suchen.<br /><span className="text-[#ff7548]">Richtig wählen.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-[#657276] lg:pb-2">
            PVPro.ch nimmt dir nicht die Entscheidung ab. Wir machen sie einfach — Schritt für Schritt.
          </p>
        </header>

        <div className="mt-14 rounded-[2.4rem] border border-[#ddd8cd] bg-[#fffdf8]/80 p-4 shadow-[0_24px_70px_rgba(30,47,45,.08)] sm:p-7 lg:mt-20 lg:p-10">
          <div className="flex items-center justify-between gap-4 border-b border-[#e7e2d8] px-2 pb-6">
            <div className="flex items-center gap-2 sm:gap-4">
              {routes.map((route, index) => (
                <button
                  key={route.eyebrow}
                  type="button"
                  onClick={() => move(index)}
                  aria-label={`Zu ${route.eyebrow}`}
                  className="group flex items-center gap-2 text-left"
                >
                  <span className={`grid h-8 w-8 place-items-center rounded-full text-xs font-black transition-colors ${index <= step ? "bg-[#214d50] text-[#fffdf8]" : "bg-[#e7e3da] text-[#89918f]"}`}>
                    {index < step ? <Check size={14} strokeWidth={3} /> : `0${index + 1}`}
                  </span>
                  <span className={`hidden text-[10px] font-bold uppercase tracking-[.16em] sm:block ${index === step ? "text-[#214d50]" : "text-[#9aa09c]"}`}>{index === step ? "Aktuell" : route.eyebrow.split("·")[1]}</span>
                  {index < routes.length - 1 && <span className={`mx-1 h-px w-5 sm:mx-3 sm:w-12 ${index < step ? "bg-[#214d50]" : "bg-[#dedad1]"}`} />}
                </button>
              ))}
            </div>
            <span className="font-mono text-[10px] font-bold tracking-[.18em] text-[#a1a7a4]">{String(step + 1).padStart(2, "0")} / 03</span>
          </div>

          <div className="grid min-h-[335px] gap-10 px-2 py-10 sm:px-5 sm:py-14 lg:grid-cols-[1fr_285px] lg:gap-16 lg:px-8">
            <div className="flex flex-col justify-between">
              <div>
                <div className="mb-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.2em]" style={{ color: current.color }}>
                  <Icon size={18} strokeWidth={2} /> {current.eyebrow}
                </div>
                <h3 className="max-w-xl text-4xl font-black leading-[.96] tracking-[-.055em] sm:text-6xl">{current.title}</h3>
                <p className="mt-6 max-w-lg text-[15px] leading-7 text-[#687578] sm:text-base">{current.copy}</p>
              </div>
              <div className="mt-10 flex items-center gap-3">
                <button type="button" onClick={() => move(step - 1)} disabled={step === 0} className="grid h-11 w-11 place-items-center rounded-full border border-[#d9d5cc] text-[#214d50] transition-colors hover:bg-[#f0ece3] disabled:cursor-not-allowed disabled:opacity-30"><ChevronLeft size={18} /></button>
                <button type="button" onClick={() => move(step + 1)} disabled={step === routes.length - 1} className="group grid h-11 w-11 place-items-center rounded-full bg-[#214d50] text-[#fffdf8] transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-30"><ChevronRight size={18} className="transition-transform group-hover:translate-x-0.5" /></button>
                <span className="ml-2 text-xs font-semibold text-[#7d8785]">{step === routes.length - 1 ? "Bereit für den nächsten Schritt" : "Weiter"}</span>
              </div>
            </div>
            <aside className="rounded-[1.7rem] p-7 text-[#fffdf8]" style={{ backgroundColor: current.color }}>
              <div className="flex items-start justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/15"><Icon size={24} /></span>
                <Sparkles size={17} className="opacity-70" />
              </div>
              <p className="mt-12 text-[10px] font-bold uppercase tracking-[.2em] opacity-65">Darauf kannst du zählen</p>
              <ul className="mt-5 space-y-4">
                {current.facts.map((fact) => <li key={fact} className="flex items-center gap-3 text-sm font-semibold"><span className="grid h-5 w-5 place-items-center rounded-full bg-white/20"><Check size={12} strokeWidth={3} /></span>{fact}</li>)}
              </ul>
            </aside>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-[1.8rem] bg-[#214d50] px-7 py-6 text-[#fffdf8] sm:flex-row sm:items-center sm:px-9">
          <div className="flex items-start gap-4">
            <ShieldCheck className="mt-0.5 shrink-0 text-[#d3ab32]" size={21} />
            <div><p className="text-sm font-bold">Deine Daten bleiben deine Daten.</p><p className="mt-1 text-xs text-[#c4d0cd]">Vertraulich behandelt. Nur mit deiner Zustimmung geteilt.</p></div>
          </div>
          <button type="button" onClick={() => setStarted(true)} className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-[#ff7548] px-6 py-3.5 text-sm font-bold text-white transition-transform hover:scale-[1.03]">{started ? "Formular ist bereit" : "Jetzt herausfinden"} <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></button>
        </div>
        <button type="button" onClick={() => setStarted(true)} className="mx-auto mt-7 flex items-center gap-2 text-xs font-semibold text-[#72807d] underline decoration-[#d3ab32] underline-offset-4 hover:text-[#214d50]"><CircleHelp size={14} /> Noch Fragen? Wir helfen dir.</button>
      </div>
    </section>
  );
}

export default DecisionPath;