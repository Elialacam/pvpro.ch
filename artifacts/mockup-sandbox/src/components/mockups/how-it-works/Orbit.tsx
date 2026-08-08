import { useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  FileText,
  Search,
  ShieldCheck,
  Sparkles,
  SunMedium,
  UserRoundCheck,
} from "lucide-react";

type Step = {
  number: string;
  title: string;
  short: string;
  description: string;
  bullets: string[];
  icon: typeof FileText;
  tint: string;
};

const steps: Step[] = [
  {
    number: "01",
    title: "Dein Projekt",
    short: "Dach & Bedarf",
    description: "Sag uns, was du vorhast. Zwei Minuten genügen, damit wir dein Dach und deinen Energiebedarf verstehen.",
    bullets: ["Kostenlos & unverbindlich", "Nur relevante Fragen", "Für jedes Dach in der Schweiz"],
    icon: FileText,
    tint: "#f16d4b",
  },
  {
    number: "02",
    title: "Deine Optionen",
    short: "Angebote prüfen",
    description: "Wir bringen dir bis zu drei passende Offerten von geprüften Solarteuren – übersichtlich an einem Ort.",
    bullets: ["Bis zu 3 Offerten", "Geprüfte Fachbetriebe", "Echte Preise statt Richtwerte"],
    icon: Search,
    tint: "#d09f2d",
  },
  {
    number: "03",
    title: "Deine Entscheidung",
    short: "Passenden Profi wählen",
    description: "Vergleiche in Ruhe und entscheide selbst, welcher Partner und welches Angebot zu dir passt.",
    bullets: ["Kein Verkaufsdruck", "Lokale Partner", "Transparenter Vergleich"],
    icon: UserRoundCheck,
    tint: "#285a5b",
  },
];

export function Orbit() {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const current = steps[active];
  const Icon = current.icon;

  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-[#f7f4ec] px-5 py-14 text-[#172b2d] sm:px-8 sm:py-20 lg:px-14 lg:py-24">
      <div className="pointer-events-none absolute -right-28 -top-24 h-[26rem] w-[26rem] rounded-full bg-[#d09f2d]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -left-20 h-[24rem] w-[24rem] rounded-full bg-[#f16d4b]/10 blur-3xl" />
      <div className="relative mx-auto max-w-6xl">
        <header className="flex flex-col justify-between gap-8 border-b border-[#ddd9ce] pb-10 lg:flex-row lg:items-end">
          <div>
            <div className="mb-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.24em] text-[#285a5b]">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-[#285a5b] text-[#f7f4ec]"><SunMedium size={14} /></span>
              So funktioniert PVPro
            </div>
            <h2 className="max-w-3xl text-[3.3rem] font-black leading-[.91] tracking-[-.07em] sm:text-7xl lg:text-[6.2rem]">
              Ein klarer Weg zu<br /><span className="text-[#f16d4b]">deiner Solaranlage.</span>
            </h2>
          </div>
          <p className="max-w-[20rem] text-sm leading-6 text-[#697976]">
            Keine lineare Anleitung. Wähle den Moment, der dich gerade interessiert – und spring direkt hinein.
          </p>
        </header>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(280px,0.8fr)_1.2fr] lg:gap-16 lg:items-center">
          <div className="relative mx-auto w-full max-w-[25rem]">
            <div className="relative aspect-square rounded-full border border-[#d8d3c7] bg-[#fbf9f3] shadow-[0_30px_80px_rgba(38,61,58,.08)]">
              <div className="absolute inset-[13%] rounded-full border border-dashed border-[#d3cec1]" />
              <div className="absolute inset-[28%] rounded-full bg-[#285a5b] shadow-[0_14px_30px_rgba(40,90,91,.22)]">
                <div className="flex h-full flex-col items-center justify-center text-center text-[#f7f4ec]">
                  <Sparkles size={20} className="mb-3 text-[#efc95d]" />
                  <span className="text-[10px] font-bold uppercase tracking-[.19em] text-[#b8d0c8]">dein weg</span>
                  <span className="mt-2 text-2xl font-black tracking-[-.05em]">PVPro</span>
                </div>
              </div>
              {steps.map((step, index) => {
                const angle = index * 120 - 90;
                const IconStep = step.icon;
                const isActive = active === index;
                return (
                  <button
                    key={step.number}
                    type="button"
                    onClick={() => setActive(index)}
                    aria-label={`Schritt ${step.number}: ${step.title}`}
                    className="absolute left-1/2 top-1/2 flex h-[5.4rem] w-[5.4rem] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border-4 border-[#fbf9f3] text-center transition-transform duration-300 hover:scale-105"
                    style={{ transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-8.7rem) rotate(${-angle}deg)`, backgroundColor: isActive ? step.tint : "#e7e2d7", color: isActive ? "#fffaf1" : "#6b7772" }}
                  >
                    <IconStep size={21} strokeWidth={2.2} />
                    <span className="mt-1 text-[9px] font-black tracking-[.14em]">{step.number}</span>
                  </button>
                );
              })}
            </div>
            <div className="mt-5 flex justify-center gap-2">
              {steps.map((step, index) => <button key={step.number} onClick={() => setActive(index)} aria-label={`Zu ${step.title}`} className={`h-1.5 rounded-full transition-all ${index === active ? "w-10 bg-[#f16d4b]" : "w-1.5 bg-[#c7c2b6]"}`} />)}
            </div>
          </div>

          <article className="rounded-[2rem] border border-[#dfdacf] bg-[#fffdf8] p-6 shadow-[0_22px_60px_rgba(38,61,58,.07)] sm:p-10">
            <div className="flex items-center justify-between border-b border-[#ebe6da] pb-6">
              <span className="text-[10px] font-bold uppercase tracking-[.22em]" style={{ color: current.tint }}>Schritt {current.number}</span>
              <span className="rounded-full bg-[#f1eee5] px-3 py-1 text-[10px] font-bold uppercase tracking-[.15em] text-[#79837f]">{current.short}</span>
            </div>
            <div className="pt-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl" style={{ backgroundColor: `${current.tint}18`, color: current.tint }}><Icon size={24} /></div>
              <h3 className="max-w-xl text-4xl font-black leading-[.95] tracking-[-.06em] sm:text-6xl">{current.title}</h3>
              <p className="mt-6 max-w-xl text-base leading-7 text-[#697976]">{current.description}</p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-3">
                {current.bullets.map((bullet) => <li key={bullet} className="flex items-start gap-2 text-xs font-semibold leading-5 text-[#375455]"><span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-[#e4eee7] text-[#285a5b]"><Check size={10} strokeWidth={3} /></span>{bullet}</li>)}
              </ul>
            </div>
            <div className="mt-10 flex flex-col gap-4 border-t border-[#ebe6da] pt-6 sm:flex-row sm:items-center sm:justify-between">
              <button type="button" onClick={() => setOpen(!open)} className="flex items-center gap-2 text-xs font-bold text-[#285a5b] underline decoration-[#d09f2d] underline-offset-4">{open ? "Details ausblenden" : "Warum dieser Schritt?"}<ChevronDown size={14} className={`transition-transform ${open ? "rotate-180" : ""}`} /></button>
              <button type="button" onClick={() => setActive((active + 1) % steps.length)} className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#f16d4b] px-6 py-3.5 text-sm font-bold text-white transition-transform hover:scale-[1.03]">Nächster Schritt <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></button>
            </div>
            {open && <div className="mt-5 rounded-2xl bg-[#f7f4ec] p-4 text-sm leading-6 text-[#697976]">Wir halten es bewusst einfach: Du siehst nur die Informationen, die für deine nächste Entscheidung zählen. So kommst du ohne Umwege zu einer belastbaren Offerte.</div>}
          </article>
        </div>

        <div className="mt-8 flex flex-col gap-4 rounded-[1.6rem] bg-[#285a5b] px-6 py-5 text-[#f7f4ec] sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div className="flex items-center gap-3"><ShieldCheck size={20} className="shrink-0 text-[#efc95d]" /><span className="text-sm font-semibold">Deine Angaben bleiben vertraulich und werden nur mit deiner Zustimmung geteilt.</span></div>
          <button type="button" onClick={() => setActive(0)} className="shrink-0 rounded-full bg-[#efc95d] px-5 py-3 text-xs font-black text-[#285a5b] transition-transform hover:scale-[1.03]">Jetzt loslegen</button>
        </div>
      </div>
    </section>
  );
}

export default Orbit;