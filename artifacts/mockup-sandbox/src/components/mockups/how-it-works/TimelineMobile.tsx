import { useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Clock3,
  FileText,
  ShieldCheck,
  SlidersHorizontal,
  SunMedium,
  UsersRound,
  X,
} from "lucide-react";

type Step = {
  number: string;
  title: string;
  description: string;
  signal: string;
  detail: string;
  icon: typeof FileText;
};

const steps: Step[] = [
  {
    number: "01",
    title: "Formular ausfüllen",
    description: "In 2 Minuten, kostenlos und unverbindlich.",
    signal: "2 Minuten",
    detail: "Keine Vorbereitung nötig. Wir fragen nur, was für eine passende Solarlösung wirklich zählt.",
    icon: FileText,
  },
  {
    number: "02",
    title: "Offerten erhalten",
    description: "Bis zu 3 Offerten von geprüften Installateuren aus Ihrem Kanton.",
    signal: "Bis zu 3 Offerten",
    detail: "Transparent aufbereitet und direkt vergleichbar – damit du nicht Äpfel mit Birnen vergleichst.",
    icon: SlidersHorizontal,
  },
  {
    number: "03",
    title: "Vergleichen & wählen",
    description: "Sie vergleichen die Preise und wählen das beste Angebot — ohne Verpflichtung.",
    signal: "Zertifizierte Installateure",
    detail: "Ohne Verkaufsdruck. Deine Anfrage bleibt unverbindlich, bis du dich bewusst entscheidest.",
    icon: ShieldCheck,
  },
];

export function TimelineMobile() {
  const [activeStep, setActiveStep] = useState(0);
  const [showInfo, setShowInfo] = useState(false);

  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-[#f7f7f5] px-5 py-14 text-[#0d1117] sm:px-8 sm:py-20">
      <style>{`
        @keyframes tm-rise { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes tm-flow { to { background-position: 0 28px; } }
        .tm-rise { animation: tm-rise .65s cubic-bezier(.22,1,.36,1) both; }
        .tm-flow { animation: tm-flow 1.3s linear infinite; }
        @media (prefers-reduced-motion: reduce) { .tm-rise, .tm-flow { animation: none; } }
      `}</style>
      <div className="pointer-events-none absolute -right-32 -top-24 h-80 w-80 rounded-full bg-[#f97316]/[.08] blur-3xl" />
      <div className="mx-auto max-w-3xl">
        <header className="tm-rise mb-10" style={{ animationDelay: "40ms" }}>
          <div className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.22em] text-[#b99622]">
            <span className="h-px w-8 bg-[#d4af37]" /> Solar. Einfach. Vergleichen.
          </div>
          <h2 className="max-w-xl text-5xl font-black leading-[.94] tracking-[-.065em] sm:text-7xl">
            So <span className="text-[#f97316]">funktioniert&apos;s.</span>
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-6 text-[#5c6470]">
            Drei klare Schritte von der Anfrage bis zur passenden Solar-Offerte.
          </p>
          <div className="mt-7 flex items-center gap-3 text-xs text-[#68717b]">
            <div className="flex -space-x-2">
              {["MK", "LS", "AF"].map((initials, index) => (
                <span
                  key={initials}
                  className="grid h-8 w-8 place-items-center rounded-full border-2 border-[#f7f7f5] bg-[#0d1117] text-[9px] font-bold text-[#f7f7f5]"
                  style={index === 1 ? { backgroundColor: "#d4af37", color: "#0d1117" } : undefined}
                >
                  {initials}
                </span>
              ))}
            </div>
            <span><strong className="text-[#0d1117]">4.9/5</strong> von Hausbesitzern</span>
          </div>
        </header>

        <div className="relative">
          <div className="absolute bottom-10 left-[22px] top-10 w-[3px] overflow-hidden rounded-full bg-[#e4e3dd] sm:left-[28px]">
            <div
              className="tm-flow w-full bg-[#f97316]"
              style={{ height: `${((activeStep + 1) / steps.length) * 100}%` }}
            />
          </div>
          <div className="space-y-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;
              const isComplete = index < activeStep;
              return (
                <article
                  key={step.number}
                  className="tm-rise relative"
                  style={{ animationDelay: `${140 + index * 100}ms` }}
                >
                  <button
                    type="button"
                    aria-expanded={isActive}
                    onClick={() => setActiveStep(index)}
                    className="relative z-10 flex min-h-[92px] w-full items-start gap-4 rounded-[1.4rem] p-3 text-left transition-transform active:scale-[.99] sm:gap-5 sm:p-4"
                  >
                    <span
                      className={`grid h-[46px] w-[46px] shrink-0 place-items-center rounded-2xl border-4 border-[#f7f7f5] shadow-sm transition-colors sm:h-[58px] sm:w-[58px] ${isActive || isComplete ? "bg-[#f97316] text-white" : "bg-[#0d1117] text-white"}`}
                    >
                      {isComplete ? <Check size={20} strokeWidth={3} /> : <Icon size={21} />}
                    </span>
                    <span className="min-w-0 flex-1 pt-1">
                      <span className="flex items-center justify-between gap-3">
                        <span className={`text-xl font-extrabold tracking-[-.04em] sm:text-2xl ${isActive ? "text-[#0d1117]" : "text-[#39414a]"}`}>
                          {step.title}
                        </span>
                        <ChevronDown size={19} className={`shrink-0 text-[#9ba0a4] transition-transform ${isActive ? "rotate-180" : ""}`} />
                      </span>
                      <span className="mt-1 block text-sm leading-5 text-[#68717b]">{step.description}</span>
                      {isActive && (
                        <span className="mt-4 block border-t border-[#e7e6e0] pt-3 text-[13px] leading-5 text-[#5d6670]">
                          {step.detail}
                          <span className="mt-3 flex items-center gap-2 text-xs font-bold text-[#0d1117]">
                            <span className="grid h-5 w-5 place-items-center rounded-full bg-[#d4af37]"><Check size={13} strokeWidth={3} /></span>
                            {step.signal}
                          </span>
                        </span>
                      )}
                    </span>
                  </button>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-10 rounded-[1.6rem] bg-[#0d1117] px-6 py-6 text-[#fffefa] sm:flex sm:items-center sm:justify-between sm:gap-6 sm:px-8">
          <div>
            <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.16em] text-[#d4af37]"><SunMedium size={14} /> Bereit für den nächsten Schritt?</p>
            <p className="mt-2 text-base font-semibold tracking-[-.02em] text-[#f5f2eb]">Finde heraus, was deine Dachfläche möglich macht.</p>
          </div>
          <button type="button" onClick={() => setShowInfo(true)} className="group mt-5 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-[#f97316] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#ff8837] focus:outline-none focus:ring-2 focus:ring-[#d4af37] sm:mt-0 sm:w-auto">
            Jetzt starten <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>
        <button type="button" onClick={() => setShowInfo(true)} className="mx-auto mt-6 flex min-h-11 items-center gap-2 px-3 text-xs font-semibold text-[#68717b] underline decoration-[#d4af37] underline-offset-4 hover:text-[#0d1117]">
          <UsersRound size={14} /> Was passiert mit meinen Daten?
        </button>
      </div>

      {showInfo && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-[#0d1117]/60 p-5 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="timeline-mobile-dialog">
          <div className="relative w-full max-w-md rounded-[2rem] bg-[#fffefa] p-7 shadow-2xl sm:p-10">
            <button type="button" aria-label="Dialog schliessen" onClick={() => setShowInfo(false)} className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full text-[#68717b] hover:bg-[#f0f0ec] hover:text-[#0d1117]"><X size={18} /></button>
            <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-[#d4af37]/20 text-[#0d1117]"><Clock3 size={23} /></div>
            <h3 id="timeline-mobile-dialog" className="text-2xl font-black tracking-[-.04em]">In 2 Minuten loslegen.</h3>
            <p className="mt-3 text-sm leading-6 text-[#66707b]">Deine Angaben werden vertraulich behandelt und nur genutzt, um passende Schweizer Installateure zu finden. Keine versteckten Kosten, kein Abo, kein Verkaufsdruck.</p>
            <button type="button" onClick={() => setShowInfo(false)} className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#f97316] px-5 py-3.5 text-sm font-bold text-white hover:bg-[#ff8837]">Formular öffnen <ArrowRight size={17} /></button>
          </div>
        </div>
      )}
    </section>
  );
}