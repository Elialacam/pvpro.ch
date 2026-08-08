import React, { useState } from "react";
import { ArrowRight, Check, ChevronDown, Menu, Play, ShieldCheck, SunMedium, X } from "lucide-react";

const proofPoints = ["Geprüfte Fachbetriebe", "Kostenlos & unverbindlich", "Antwort in 48 Stunden"];

export function SolarHeroRefined() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [started, setStarted] = useState(false);

  return (
    <main className="solar-page min-h-screen overflow-hidden bg-[#f7f4ed] text-[#14221f]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Fraunces:opsz,wght@9..144,500;9..144,600&display=swap');
        .solar-page { font-family: 'DM Sans', sans-serif; }
        .solar-serif { font-family: 'Fraunces', serif; }
        .solar-grid { background-image: linear-gradient(rgba(20,34,31,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(20,34,31,.06) 1px,transparent 1px); background-size: 42px 42px; }
        .solar-orb { animation: solarDrift 8s ease-in-out infinite; }
        .solar-rise { animation: solarRise .75s cubic-bezier(.22,1,.36,1) both; }
        @keyframes solarDrift { 0%,100% { transform: translate3d(0,0,0) } 50% { transform: translate3d(0,-10px,0) } }
        @keyframes solarRise { from { opacity:0; transform:translateY(18px) } to { opacity:1; transform:translateY(0) } }
        @media (prefers-reduced-motion: reduce) { .solar-orb,.solar-rise { animation:none } }
      `}</style>

      <nav className="relative z-20 mx-auto flex max-w-[1360px] items-center justify-between px-6 py-5 lg:px-12">
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e75d2f] text-[#fffaf0]"><SunMedium size={19} strokeWidth={2.5} /></span>
          <span className="text-[15px] font-bold tracking-[-.03em]">pv<span className="text-[#e75d2f]">pro</span><span className="ml-1 text-[10px] font-medium uppercase tracking-[.2em] text-[#718078]">CH</span></span>
        </div>
        <div className="hidden items-center gap-9 text-[13px] font-semibold text-[#50615a] md:flex">
          <a href="#so-funktionierts" className="transition-colors hover:text-[#e75d2f]">So funktioniert&apos;s</a>
          <a href="#vorteile" className="transition-colors hover:text-[#e75d2f]">Ihre Vorteile</a>
          <a href="#faq" className="transition-colors hover:text-[#e75d2f]">Fragen & Antworten</a>
        </div>
        <button onClick={() => setStarted(true)} className="hidden items-center gap-2 rounded-full bg-[#14221f] px-5 py-3 text-[12px] font-bold text-[#fffaf0] transition-transform hover:-translate-y-0.5 md:flex">
          Offerten vergleichen <ArrowRight size={15} />
        </button>
        <button aria-label="Menü öffnen" onClick={() => setMenuOpen(!menuOpen)} className="rounded-full p-2 md:hidden">{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
      </nav>
      {menuOpen && <div className="absolute right-5 top-16 z-30 w-56 rounded-2xl border border-[#d8d6ce] bg-[#fffaf0] p-3 shadow-xl md:hidden">
        {["So funktioniert's", "Ihre Vorteile", "Fragen & Antworten"].map((item) => <a key={item} href="#" onClick={() => setMenuOpen(false)} className="block rounded-xl px-3 py-3 text-sm font-semibold hover:bg-[#eee9dc]">{item}</a>)}
      </div>}

      <section className="solar-grid relative mx-auto max-w-[1360px] px-6 pb-14 pt-10 lg:px-12 lg:pb-24 lg:pt-20">
        <div className="pointer-events-none absolute -right-32 -top-20 h-[540px] w-[540px] rounded-full bg-[#e7b84c]/20 blur-3xl solar-orb" />
        <div className="grid items-center gap-14 lg:grid-cols-[1.06fr_.94fr] lg:gap-20">
          <div className="relative z-10 max-w-[690px]">
            <div className="solar-rise mb-7 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[.22em] text-[#e75d2f]" style={{ animationDelay: ".05s" }}>
              <span className="h-px w-9 bg-[#e75d2f]" /> Schweizer Solarberatung
            </div>
            <h1 className="solar-rise solar-serif text-[clamp(3.25rem,7.2vw,7.4rem)] leading-[.91] tracking-[-.055em]" style={{ animationDelay: ".12s" }}>
              Die Sonne<br /><em className="font-normal text-[#e75d2f]">rechnet sich.</em>
            </h1>
            <p className="solar-rise mt-8 max-w-[500px] text-[17px] leading-7 text-[#5d6a63]" style={{ animationDelay: ".2s" }}>
              Vergleichen Sie bis zu drei geprüfte Solaranlagen-Angebote für Ihr Zuhause. Klar, kostenlos und passend zu Ihrem Dach.
            </p>
            <div className="solar-rise mt-9 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: ".28s" }}>
              <button onClick={() => setStarted(true)} className="group inline-flex items-center justify-center gap-4 rounded-full bg-[#e75d2f] px-7 py-4 text-sm font-bold text-[#fffaf0] shadow-[0_12px_28px_rgba(231,93,47,.2)] transition-all hover:-translate-y-1 hover:bg-[#d9522a]">
                {started ? "Formular gestartet" : "Kostenlose Offerten erhalten"} <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
              </button>
              <a href="#so-funktionierts" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#bfc8bf] px-6 py-4 text-sm font-bold text-[#31443d] transition-colors hover:bg-[#eeeadf]"><Play size={14} fill="currentColor" /> So funktioniert&apos;s</a>
            </div>
            <div className="solar-rise mt-8 flex flex-wrap gap-x-5 gap-y-2 text-[11px] font-semibold text-[#718078]" style={{ animationDelay: ".36s" }}>
              {proofPoints.map((point) => <span key={point} className="flex items-center gap-1.5"><Check size={14} className="text-[#e75d2f]" strokeWidth={3} />{point}</span>)}
            </div>
          </div>

          <div className="relative min-h-[420px] lg:min-h-[540px]">
            <div className="absolute right-0 top-0 h-[370px] w-[88%] overflow-hidden rounded-[44%_44%_8%_8%/18%_18%_8%_8%] bg-[#d8e1d7] lg:h-[485px]">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_25%,rgba(255,255,255,.35)_25.3%,transparent_25.6%,transparent_50%,rgba(255,255,255,.25)_50.3%,transparent_50.6%,transparent_75%,rgba(255,255,255,.3)_75.3%,transparent_75.6%)] bg-[length:92px_92px]" />
              <div className="absolute -bottom-24 -left-12 h-64 w-[130%] rotate-[-8deg] rounded-[50%] bg-[#b7c8b5]" />
              <div className="absolute bottom-4 left-1/2 h-36 w-36 -translate-x-1/2 rounded-full bg-[#f2c253] shadow-[0_0_0_22px_rgba(242,194,83,.15),0_0_0_48px_rgba(242,194,83,.08)]" />
              <div className="absolute left-8 top-10 text-[10px] font-bold uppercase tracking-[.25em] text-[#60776c]">Energie, die bleibt</div>
            </div>
            <div className="absolute bottom-2 left-0 w-[255px] rounded-3xl border border-[#e4dfd2] bg-[#fffaf0]/95 p-5 shadow-[0_18px_50px_rgba(48,66,54,.14)] backdrop-blur">
              <div className="mb-5 flex items-center justify-between"><span className="text-[11px] font-bold uppercase tracking-[.16em] text-[#718078]">Ihre Ersparnis</span><span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#e6efe3] text-[#457050]"><ShieldCheck size={15} /></span></div>
              <div className="solar-serif text-4xl tracking-[-.04em]">CHF 2’840 <span className="text-sm font-sans text-[#718078]">/ Jahr</span></div>
              <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-[#e8e3d8]"><div className="h-full w-[72%] rounded-full bg-[#e75d2f]" /></div>
              <div className="mt-2 flex justify-between text-[10px] font-semibold text-[#718078]"><span>Eigenverbrauch</span><span className="text-[#e75d2f]">72%</span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="so-funktionierts" className="mx-auto flex max-w-[1360px] flex-wrap items-center justify-between gap-6 border-t border-[#dedbd2] px-6 py-7 lg:px-12">
        <p className="text-xs font-bold uppercase tracking-[.16em] text-[#718078]">In 3 Schritten zur eigenen Energie</p>
        <div className="flex items-center gap-3 text-xs font-semibold text-[#50615a]"><span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#e75d2f] text-[#fffaf0]">1</span> Bedarf angeben <ChevronDown size={14} className="rotate-[-90deg] text-[#b4bbb2]" /><span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#dbe5d9] text-[#49644d]">2</span> Angebote erhalten <ChevronDown size={14} className="rotate-[-90deg] text-[#b4bbb2]" /><span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#dbe5d9] text-[#49644d]">3</span> Entscheiden</div>
      </section>
    </main>
  );
}

export default SolarHeroRefined;