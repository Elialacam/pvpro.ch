import { useMemo, useState, type FormEvent } from "react";
import { ArrowRight, Check, ChevronLeft, CircleHelp, Home, LockKeyhole, MapPin, SunMedium } from "lucide-react";

type Contact = { firstName: string; email: string; phone: string };

const questions = [
  {
    eyebrow: "Grundstück",
    title: "Was dürfen wir für Sie prüfen?",
    detail: "Starten Sie mit dem, was Sie bereits wissen. Der Rest ergibt sich unterwegs.",
    options: [
      { label: "Mein eigenes Haus", note: "Dach & Energie für Ihr Zuhause", icon: "⌂" },
      { label: "Ein Mietobjekt", note: "Für ein Gebäude, das Sie verwalten", icon: "▥" },
      { label: "Ein Gewerbeobjekt", note: "Mehr Fläche, mehr Möglichkeiten", icon: "⌁" },
    ],
  },
  {
    eyebrow: "Gebäude",
    title: "Wie sieht Ihr Dach ungefähr aus?",
    detail: "Eine grobe Auswahl genügt für die erste Potenzialrechnung.",
    options: [
      { label: "Schräg", note: "Satteldach oder Pultdach", icon: "⌃" },
      { label: "Flach", note: "Flachdach mit freier Fläche", icon: "—" },
      { label: "Noch unklar", note: "Wir helfen beim Einordnen", icon: "?" },
    ],
  },
  {
    eyebrow: "Energie",
    title: "Wann soll Ihre Sonne arbeiten?",
    detail: "Damit wir Speicher und Verbrauch richtig zusammendenken.",
    options: [
      { label: "Vor allem tagsüber", note: "Homeoffice, Haushalt, Betrieb", icon: "☼" },
      { label: "Auch abends", note: "Mehr Unabhängigkeit nach Sonnenuntergang", icon: "◒" },
      { label: "Rund um die Uhr", note: "Mit einem passenden Speicher", icon: "◐" },
    ],
  },
] as const;

export function HarvestRoute() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState<Contact>({ firstName: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);
  const current = questions[step];
  const progress = useMemo(() => (step + 1) / 5, [step]);

  const choose = (value: string) => {
    setAnswers((existing) => ({ ...existing, [step]: value }));
    window.setTimeout(() => setStep((value) => Math.min(value + 1, 4)), 180);
  };

  const submit = (event: FormEvent) => {
    event.preventDefault();
    if (contact.firstName && contact.email && contact.phone) setSubmitted(true);
  };

  return (
    <main
      className="min-h-[100dvh] overflow-hidden bg-[#e8eee5] px-5 py-5 text-[#20332c] sm:px-8"
      style={{ fontFamily: "'DM Sans', ui-sans-serif, sans-serif" }}
    >
      <style>{`
        @keyframes routeIn { from { opacity: 0; transform: translateX(20px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes riseIn { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
        .route-in { animation: routeIn .38s cubic-bezier(.2,.8,.2,1) both; }
        .rise-in { animation: riseIn .45s .08s cubic-bezier(.2,.8,.2,1) both; }
      `}</style>
      <div className="mx-auto flex min-h-[calc(100dvh-2.5rem)] max-w-[940px] flex-col">
        <header className="flex items-center justify-between border-b border-[#cad8ca] pb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-[11px] bg-[#f3b343] text-[#284337] shadow-[0_5px_14px_rgba(159,116,38,.18)]">
              <SunMedium size={20} strokeWidth={2.4} />
            </div>
            <div>
              <div className="text-[16px] font-extrabold tracking-[-.055em]">solario<span className="text-[#c48827]">.</span></div>
              <div className="text-[9px] font-bold uppercase tracking-[.16em] text-[#77917f]">Solar-Check</div>
            </div>
          </div>
          <div className="hidden items-center gap-2 text-[11px] font-bold text-[#6d8776] sm:flex">
            <LockKeyhole size={13} /> Kostenlos & unverbindlich
          </div>
        </header>

        <div className="grid flex-1 items-center gap-9 py-8 lg:grid-cols-[.82fr_1.18fr] lg:gap-16">
          <aside className="rise-in">
            <p className="text-[11px] font-extrabold uppercase tracking-[.2em] text-[#b27b22]">Ihr Solar-Weg</p>
            <h1 className="mt-3 max-w-[390px] text-[38px] font-extrabold leading-[.98] tracking-[-.07em] sm:text-[52px]">
              Gute Energie beginnt mit <span className="text-[#bd862d]">einer Frage.</span>
            </h1>
            <p className="mt-5 max-w-[335px] text-[14px] leading-6 text-[#678073]">
              Beantworten Sie fünf kurze Punkte. Wir übersetzen Ihre Angaben in ein klares, persönliches Dach-Potenzial.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full border-[3px] border-[#f0b443] border-r-[#c8d7c9] p-1">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-[#d9e7da] text-[11px] font-extrabold">{Math.round(progress * 100)}%</div>
              </div>
              <div>
                <div className="text-[12px] font-extrabold">{step < 4 ? `Schritt ${step + 1} von 5` : "Fast geschafft"}</div>
                <div className="mt-0.5 text-[11px] text-[#759080]">Dauert etwa 2 Minuten</div>
              </div>
            </div>
          </aside>

          <section className="route-in relative min-h-[470px] rounded-[30px] border border-[#d6e0d3] bg-[#f8fbf4] p-5 shadow-[0_24px_60px_rgba(43,70,48,.12)] sm:p-8" key={step}>
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-[#e5f0e3] px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[.12em] text-[#66806d]">{current?.eyebrow ?? "Kontakt"}</span>
              <span className="text-[12px] font-bold text-[#96aa98]">{step + 1} / 5</span>
            </div>
            {submitted ? (
              <div className="flex min-h-[365px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#dceede] text-[#3f8050]"><Check size={30} strokeWidth={3} /></div>
                <h2 className="mt-6 text-[27px] font-extrabold tracking-[-.05em]">Alles angekommen, {contact.firstName}.</h2>
                <p className="mt-3 max-w-[300px] text-sm leading-6 text-[#708378]">Wir melden uns mit einer ersten Einschätzung zu Ihrem Dach und Ihrem Standort.</p>
              </div>
            ) : step < 3 ? (
              <>
                <div className="mt-9 flex items-start justify-between gap-4">
                  <div><h2 className="max-w-[470px] text-[27px] font-extrabold leading-[1.08] tracking-[-.055em] sm:text-[32px]">{current.title}</h2><p className="mt-3 max-w-[390px] text-[13px] leading-5 text-[#7b8e80]">{current.detail}</p></div>
                  <Home className="mt-1 hidden shrink-0 text-[#d59a36] sm:block" size={27} />
                </div>
                <div className="mt-8 space-y-3">
                  {current.options.map((option) => (
                    <button key={option.label} type="button" onClick={() => choose(option.label)} className={`group flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition duration-200 hover:-translate-y-0.5 hover:border-[#e4ac43] ${answers[step] === option.label ? "border-[#e4ac43] bg-[#fff4d7]" : "border-[#e4e9df] bg-white"}`}>
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#edf4e9] text-[22px] font-bold text-[#6b8872] group-hover:bg-[#f8e7ba]">{option.icon}</span>
                      <span><span className="block text-[13px] font-extrabold">{option.label}</span><span className="mt-1 block text-[11px] text-[#819288]">{option.note}</span></span>
                      <ArrowRight className="ml-auto text-[#b8c5b7] transition group-hover:translate-x-1 group-hover:text-[#bf852d]" size={18} />
                    </button>
                  ))}
                </div>
              </>
            ) : step === 3 ? (
              <>
                <div className="mt-9"><h2 className="text-[29px] font-extrabold leading-[1.08] tracking-[-.055em]">Wo darf die Sonne landen?</h2><p className="mt-3 text-[13px] text-[#7b8e80]">Wir prüfen Ausrichtung, Ertrag und regionale Möglichkeiten.</p></div>
                <label className="relative mt-9 block"><MapPin className="absolute left-4 top-4 text-[#9cad9c]" size={18} /><input value={address} onChange={(event) => setAddress(event.target.value)} placeholder="Strasse, Ort oder PLZ" className="w-full rounded-2xl border-2 border-[#e4e9df] bg-white py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-[#e5ad43]" /></label>
                <button type="button" disabled={!address.trim()} onClick={() => setStep(4)} className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#27463a] py-3.5 text-sm font-extrabold text-[#f7f7e9] transition hover:bg-[#1e392f] disabled:cursor-not-allowed disabled:opacity-40">Standort bestätigen <ArrowRight size={17} /></button>
                <p className="mt-4 flex items-center justify-center gap-1.5 text-[10px] text-[#98a99a]"><CircleHelp size={12} /> Keine Adresse zur Hand? Eine PLZ genügt.</p>
              </>
            ) : (
              <>
                <div className="mt-9"><h2 className="text-[29px] font-extrabold leading-[1.08] tracking-[-.055em]">Wohin dürfen wir das Ergebnis schicken?</h2><p className="mt-3 text-[13px] text-[#7b8e80]">Nur Ihre Einschätzung — keine Werbeanrufe, versprochen.</p></div>
                <form onSubmit={submit} className="mt-8 space-y-3">
                  <input required value={contact.firstName} onChange={(e) => setContact({ ...contact, firstName: e.target.value })} placeholder="Vorname" className="w-full rounded-xl border border-[#e4e9df] bg-white px-4 py-3.5 text-[13px] outline-none focus:border-[#e5ad43]" />
                  <input required type="email" value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })} placeholder="E-Mail-Adresse" className="w-full rounded-xl border border-[#e4e9df] bg-white px-4 py-3.5 text-[13px] outline-none focus:border-[#e5ad43]" />
                  <input required type="tel" value={contact.phone} onChange={(e) => setContact({ ...contact, phone: e.target.value })} placeholder="Telefonnummer" className="w-full rounded-xl border border-[#e4e9df] bg-white px-4 py-3.5 text-[13px] outline-none focus:border-[#e5ad43]" />
                  <button className="mt-2 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#f0b343] py-3.5 text-sm font-extrabold text-[#26352d] shadow-[0_8px_18px_rgba(190,137,42,.2)] transition hover:bg-[#e6a631]">Solar-Check erhalten <ArrowRight size={17} /></button>
                </form>
              </>
            )}
            {!submitted && step > 0 && <button type="button" onClick={() => setStep((value) => value - 1)} className="mt-5 flex items-center gap-1 text-[11px] font-bold text-[#819487] hover:text-[#304a3d]"><ChevronLeft size={14} /> Zurück</button>}
          </section>
        </div>
        <footer className="border-t border-[#cad8ca] py-4 text-center text-[10px] font-semibold text-[#849987]">Ihre Angaben bleiben vertraulich · <span className="text-[#b27b22]">solario.</span> macht Sonnenenergie greifbar</footer>
      </div>
    </main>
  );
}