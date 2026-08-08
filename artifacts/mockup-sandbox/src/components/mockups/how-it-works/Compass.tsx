import { useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Check,
  ChevronDown,
  House,
  Info,
  MapPin,
  Sparkles,
  SunMedium,
  WalletCards,
} from "lucide-react";

type RouteKey = "start" | "compare" | "decide";

const routes: Record<
  RouteKey,
  {
    eyebrow: string;
    title: string;
    body: string;
    icon: typeof House;
    color: string;
    facts: string[];
    prompt: string;
  }
> = {
  start: {
    eyebrow: "Ich bin noch ganz am Anfang",
    title: "Erst einmal herausfinden, was möglich ist.",
    body: "Ein kurzer Dach-Check zeigt dir, ob Solar zu deinem Zuhause und deinem Alltag passt.",
    icon: House,
    color: "#e89b52",
    facts: ["2 Minuten", "kostenlos", "ohne Verpflichtung"],
    prompt: "Mit dem Dach-Check starten",
  },
  compare: {
    eyebrow: "Ich habe schon Angebote",
    title: "Zahlen nebeneinander legen. Klar entscheiden.",
    body: "Wir machen Preis, Leistung und Garantie deiner Offerten direkt vergleichbar.",
    icon: BarChart3,
    color: "#6e9d98",
    facts: ["bis zu 3 Offerten", "zertifiziert", "neutral aufbereitet"],
    prompt: "Angebote vergleichen",
  },
  decide: {
    eyebrow: "Ich bin fast bereit",
    title: "Den passenden Installateur finden.",
    body: "Prüfe Bewertungen und Leistungsumfang – und entscheide in deinem Tempo.",
    icon: BadgeCheck,
    color: "#c87867",
    facts: ["Schweizer Partner", "echte Bewertungen", "kein Verkaufsdruck"],
    prompt: "Partner entdecken",
  },
};

const miniSteps = [
  { label: "Dein Zuhause", icon: House },
  { label: "Deine Möglichkeiten", icon: Sparkles },
  { label: "Deine Entscheidung", icon: BadgeCheck },
];

export function Compass() {
  const [active, setActive] = useState<RouteKey>("start");
  const [open, setOpen] = useState<number | null>(0);
  const route = routes[active];
  const RouteIcon = route.icon;

  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-[#f3eee5] px-5 py-16 text-[#1f2927] sm:px-8 lg:px-14 lg:py-24">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes compass-in { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
            .compass-in { animation: compass-in .55s cubic-bezier(.22,1,.36,1) both; }
            @media (prefers-reduced-motion: reduce) { .compass-in { animation: none; } }
          `,
        }}
      />
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#d9b46d]/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-9rem] right-[-4rem] h-[28rem] w-[28rem] rounded-full bg-[#87aaa2]/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[.82fr_1.18fr] lg:items-end lg:gap-20">
          <div>
            <div className="mb-6 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[.24em] text-[#b47732]">
              <span className="h-px w-9 bg-[#b47732]" />
              Dein Weg zu Solar
            </div>
            <h2 className="max-w-xl text-5xl font-black leading-[.94] tracking-[-.065em] sm:text-6xl lg:text-[5.7rem]">
              Nicht jeder startet am{" "}
              <span className="text-[#b47732]">gleichen Punkt.</span>
            </h2>
            <p className="mt-7 max-w-md text-base leading-7 text-[#65716e] sm:text-lg">
              Sag uns, wo du gerade stehst. Wir zeigen dir nur den nächsten sinnvollen Schritt – statt dich mit Informationen zu überladen.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#d9d2c5] bg-[#f9f5ed]/80 p-3 shadow-[0_20px_70px_rgba(66,53,35,.08)] backdrop-blur">
            <div className="grid gap-2 sm:grid-cols-3">
              {(Object.keys(routes) as RouteKey[]).map((key) => {
                const item = routes[key];
                const Icon = item.icon;
                const selected = active === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setActive(key)}
                    className={`group rounded-[1.35rem] px-4 py-5 text-left transition-transform duration-300 hover:-translate-y-0.5 ${selected ? "bg-[#20312f] text-[#f8f1e6] shadow-lg" : "text-[#66726e] hover:bg-[#eee8dc]"}`}
                  >
                    <span className="mb-8 grid h-10 w-10 place-items-center rounded-xl" style={{ backgroundColor: selected ? item.color : `${item.color}35`, color: selected ? "#fffaf1" : "#3f504c" }}>
                      <Icon size={19} strokeWidth={1.8} />
                    </span>
                    <span className="block text-[13px] font-bold leading-5">{item.eyebrow}</span>
                    <span className={`mt-2 block text-[11px] leading-4 ${selected ? "text-[#c6d0c9]" : "text-[#8a938e]"}`}>Dein sinnvoller Einstieg</span>
                  </button>
                );
              })}
            </div>

            <div className="compass-in mt-3 grid gap-8 rounded-[1.55rem] bg-[#fffaf1] p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center" key={active}>
              <div>
                <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.16em]" style={{ color: route.color }}>
                  <RouteIcon size={15} /> {route.eyebrow}
                </div>
                <h3 className="mt-4 max-w-lg text-3xl font-black leading-[1.02] tracking-[-.045em] sm:text-4xl">{route.title}</h3>
                <p className="mt-4 max-w-lg text-[15px] leading-6 text-[#68736f]">{route.body}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {route.facts.map((fact) => (
                    <span key={fact} className="inline-flex items-center gap-1.5 rounded-full bg-[#f0eadf] px-3 py-1.5 text-[11px] font-semibold text-[#53615c]">
                      <Check size={12} strokeWidth={3} style={{ color: route.color }} /> {fact}
                    </span>
                  ))}
                </div>
              </div>
              <button type="button" onClick={() => setOpen(open === 3 ? null : 3)} className="group inline-flex items-center justify-center gap-3 rounded-full px-5 py-3.5 text-sm font-bold text-[#fffaf1] transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#b47732] focus:ring-offset-2" style={{ backgroundColor: route.color }}>
                {route.prompt} <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-[#d7d0c2] pt-8 sm:mt-24">
          <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[.2em] text-[#b47732]">Immer im Bild</p>
              <h3 className="mt-2 text-2xl font-black tracking-[-.04em]">Drei klare Etappen. Keine Umwege.</h3>
            </div>
            <p className="flex items-center gap-2 text-xs font-semibold text-[#75807b]"><MapPin size={14} /> Für Hausbesitzer in der Schweiz</p>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {miniSteps.map((step, index) => {
              const Icon = step.icon;
              const isOpen = open === index;
              return (
                <div key={step.label} className={`rounded-2xl border transition-colors ${isOpen ? "border-[#b9aa91] bg-[#fffaf1]" : "border-[#ded7ca] bg-[#eee8dc]/50"}`}>
                  <button type="button" onClick={() => setOpen(isOpen ? null : index)} className="flex w-full items-center gap-4 p-5 text-left">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#20312f] font-mono text-xs font-bold text-[#f6eddf]">{String(index + 1).padStart(2, "0")}</span>
                    <span className="flex-1 text-sm font-bold">{step.label}</span>
                    <Icon size={18} className="text-[#b47732]" />
                    <ChevronDown size={16} className={`text-[#8a938e] transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && <p className="px-5 pb-5 pl-[4.75rem] text-sm leading-6 text-[#68736f]">{index === 0 ? "Wir stellen die richtigen Fragen zu Dach, Verbrauch und Budget." : index === 1 ? "Du erhältst verständliche Optionen, die zu deiner Situation passen." : "Du wählst selbst – mit allen Zahlen, Leistungen und Antworten."}</p>}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-[#20312f] px-6 py-5 text-[#f6eddf] sm:px-8">
          <p className="flex items-center gap-3 text-sm font-semibold"><WalletCards size={18} className="text-[#d9b46d]" /> Kostenlos, unverbindlich und transparent.</p>
          <p className="flex items-center gap-2 text-xs text-[#bdc9c2]"><Info size={14} /> Deine Daten bleiben bei uns.</p>
        </div>
      </div>
    </section>
  );
}
