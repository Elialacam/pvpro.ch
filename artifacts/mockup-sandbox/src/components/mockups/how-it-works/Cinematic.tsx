import React, { useState } from "react";

const steps = [
  {
    number: "01",
    eyebrow: "Der erste Schritt",
    title: "Formular ausfüllen",
    body: "Beantworten Sie ein paar kurze Fragen zu Ihrem Haus und Ihrem Energiebedarf.",
    detail: "2 Min. · kostenlos · unverbindlich",
  },
  {
    number: "02",
    eyebrow: "Der zweite Schritt",
    title: "Angebote vergleichen",
    body: "Sie erhalten bis zu drei passende Angebote von geprüften Schweizer Solar-Installateuren.",
    detail: "Bis zu 3 Angebote · individuell auf Sie zugeschnitten",
  },
  {
    number: "03",
    eyebrow: "Der letzte Schritt",
    title: "Installateur wählen",
    body: "Vergleichen Sie echte Preise und Leistungen – und entscheiden Sie in Ruhe, was zu Ihnen passt.",
    detail: "Zertifizierte Fachbetriebe · klare Preise",
  },
];

export function Cinematic() {
  const [activeStep, setActiveStep] = useState(0);
  const [started, setStarted] = useState(false);

  return (
    <section
      className="cinematic-section relative isolate min-h-[760px] w-full overflow-hidden bg-[#0D1117] px-5 py-20 text-white sm:px-8 lg:px-16 lg:py-28"
      aria-labelledby="cinematic-heading"
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes cinematicFloat { 0%,100% { transform: translateY(0); opacity:.18 } 50% { transform: translateY(-9px); opacity:.28 } }
            @keyframes cinematicPulse { 0%,100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(249,115,22,.22) } 50% { transform: scale(1.018); box-shadow: 0 0 0 12px rgba(249,115,22,0) } }
            @keyframes cinematicDraw { from { transform: scaleX(0); transform-origin:left } to { transform: scaleX(1); transform-origin:left } }
            .cinematic-section:before { content:""; position:absolute; inset:0; pointer-events:none; opacity:.16; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.12'/%3E%3C/svg%3E"); mix-blend-mode:screen }
            .cinematic-number { animation: cinematicFloat 4.5s ease-in-out infinite; }
            .cinematic-progress { animation: cinematicDraw 1.4s cubic-bezier(.22,1,.36,1) both .4s; }
            .cinematic-cta { animation: cinematicPulse 3s ease-in-out infinite; }
            .cinematic-card { transition: transform .45s cubic-bezier(.22,1,.36,1), border-color .35s ease, background-color .35s ease; }
            .cinematic-card:hover { transform: translateY(-8px); }
            @media (prefers-reduced-motion: reduce) { .cinematic-number,.cinematic-progress,.cinematic-cta { animation:none } .cinematic-card { transition:none } }
          `,
        }}
      />

      <div className="pointer-events-none absolute -left-40 top-12 h-[480px] w-[480px] rounded-full bg-[#D4AF37]/[.07] blur-[110px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-[430px] w-[430px] rounded-full bg-[#F97316]/[.08] blur-[115px]" />

      <div className="relative mx-auto max-w-[1240px]">
        <div className="mb-16 max-w-3xl lg:mb-24">
          <div className="mb-7 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[.28em] text-[#D4AF37]">
            <span className="h-px w-10 bg-[#F97316]" />
            So funktioniert&apos;s
          </div>
          <h2 id="cinematic-heading" className="max-w-2xl font-serif text-5xl leading-[.98] tracking-[-.035em] text-[#F8F6F0] sm:text-6xl lg:text-[84px]">
            Solar werden kann<br />
            <em className="font-normal text-[#D4AF37]">so einfach sein.</em>
          </h2>
          <p className="mt-8 max-w-xl text-base leading-7 text-[#9AA3AD] sm:text-lg">
            In drei klaren Schritten zur passenden Solarlösung – persönlich, transparent und ohne Verkaufsdruck.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-[8%] right-[8%] top-[82px] hidden h-px bg-[#30353B] md:block" aria-hidden="true">
            <div className="cinematic-progress h-px w-full bg-gradient-to-r from-[#F97316] via-[#D4AF37] to-[#F97316]" />
          </div>
          <div className="grid gap-5 md:grid-cols-3 md:gap-6">
            {steps.map((step, index) => {
              const active = index === activeStep;
              return (
                <button
                  key={step.number}
                  type="button"
                  onClick={() => setActiveStep(index)}
                  className={`cinematic-card group relative min-h-[370px] overflow-hidden rounded-[2px] border p-7 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] sm:p-9 ${active ? "border-[#F97316]/65 bg-[#171B21]" : "border-[#2A3037] bg-[#11161C] hover:border-[#D4AF37]/50"}`}
                  aria-pressed={active}
                >
                  <div className="absolute -right-3 -top-10 font-mono text-[184px] font-bold leading-none tracking-[-.12em] text-[#D4AF37] cinematic-number" aria-hidden="true">
                    {step.number}
                  </div>
                  <div className="relative z-10 flex h-full flex-col">
                    <div className="mb-auto flex items-center justify-between">
                      <span className={`flex h-9 w-9 items-center justify-center rounded-full border text-xs font-bold ${active ? "border-[#F97316] text-[#F97316]" : "border-[#58616A] text-[#AEB5BA]"}`}>
                        {step.number}
                      </span>
                      <span className="text-[10px] uppercase tracking-[.2em] text-[#69737C]">0{index + 1} / 03</span>
                    </div>
                    <div className="mt-24">
                      <p className="mb-3 text-[10px] font-semibold uppercase tracking-[.2em] text-[#D4AF37]">{step.eyebrow}</p>
                      <h3 className="font-serif text-3xl leading-none tracking-[-.02em] text-[#F8F6F0]">{step.title}</h3>
                      <p className="mt-5 text-sm leading-6 text-[#A6ADB4]">{step.body}</p>
                      <p className="mt-6 border-t border-[#30363D] pt-4 text-[11px] font-medium tracking-wide text-[#D6D9D8]">{step.detail}</p>
                    </div>
                  </div>
                  <div className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#F97316] to-[#D4AF37] transition-all duration-500 ${active ? "w-full" : "w-0 group-hover:w-full"}`} />
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-7 border-t border-[#2A3037] pt-8 sm:flex-row sm:items-center lg:mt-20">
          <div className="flex items-center gap-4 text-sm text-[#8F989F]">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#D4AF37]/50 text-[#D4AF37]">✓</span>
            <span>100% kostenlos für Hausbesitzer</span>
          </div>
          <button
            type="button"
            onClick={() => setStarted(true)}
            className="cinematic-cta inline-flex items-center gap-6 rounded-[2px] bg-[#F97316] px-8 py-4 text-sm font-bold text-[#160E08] transition-colors hover:bg-[#FF8A3D] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D1117]"
          >
            {started ? "Formular wird geöffnet" : "Jetzt starten"}
            <span className="text-lg leading-none">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Cinematic;