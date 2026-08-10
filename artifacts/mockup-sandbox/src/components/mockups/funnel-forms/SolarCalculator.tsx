import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BatteryCharging,
  Building2,
  Check,
  ChevronDown,
  Home,
  MapPin,
  Moon,
  Phone,
  Search,
  ShieldCheck,
  SunMedium,
  Zap,
} from "lucide-react";

type Contact = { firstName: string; lastName: string; email: string; phone: string };

const questions = [
  {
    eyebrow: "Voraussetzung",
    title: "Sind Sie Eigentümer der Liegenschaft?",
    hint: "Damit wir Ihr Solar-Potenzial korrekt berechnen können.",
    options: [
      { label: "Ja, ich bin Eigentümer", icon: Home },
      { label: "Nein", icon: Building2 },
      { label: "Noch nicht sicher", icon: Search },
    ],
  },
  {
    eyebrow: "Gebäude",
    title: "Um welchen Gebäudetyp handelt es sich?",
    hint: "Jede Immobilie hat ihr eigenes Solar-Potenzial.",
    options: [
      { label: "Einfamilienhaus", icon: Home },
      { label: "Mehrfamilienhaus", icon: Building2 },
      { label: "Gewerbe", icon: Building2 },
      { label: "Andere Immobilie", icon: Moon },
    ],
  },
  {
    eyebrow: "Dach",
    title: "Wie ist die Dachform Ihrer Immobilie?",
    hint: "Eine erste Einschätzung genügt – Details klären wir später.",
    options: [
      { label: "Satteldach", icon: Home },
      { label: "Pultdach", icon: SunMedium },
      { label: "Flachdach", icon: Building2 },
    ],
  },
  {
    eyebrow: "Speicher",
    title: "Möchten Sie Solarstrom speichern?",
    hint: "Mit einem Speicher nutzen Sie mehr eigenen Strom – auch am Abend.",
    options: [
      { label: "Ja, gerne", icon: BatteryCharging },
      { label: "Nein, danke", icon: SunMedium },
      { label: "Noch nicht sicher", icon: Search },
    ],
  },
] as const;

export function SolarCalculator() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [address, setAddress] = useState("");
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [contact, setContact] = useState<Contact>({ firstName: "", lastName: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  const building = answers[1] ?? "";
  const hasBattery = answers[3]?.startsWith("Ja");
  const metrics = useMemo(() => {
    const scale = building === "Mehrfamilienhaus" || building === "Gewerbe";
    return {
      power: building ? (scale ? "18–32 kWp" : "8–12 kWp") : "?",
      production: building ? (scale ? "18'500–31'000 kWh" : "8'500–12'000 kWh") : "?",
      savings: building ? (scale ? "CHF 4'800 – 7'900" : "CHF 2'100 – 3'400") : "?",
      co2: building ? (scale ? "9.1 t/Jahr" : "4.2 t/Jahr") : "?",
      usage: hasBattery ? 74 : building ? 46 : 22,
    };
  }, [building, hasBattery]);

  const choose = (value: string) => {
    setAnswers((old) => ({ ...old, [step]: value }));
  };
  const next = () => {
    if (step < 5) setStep((old) => old + 1);
  };
  const back = () => setStep((old) => Math.max(0, old - 1));
  const canContinue = step < 4 ? Boolean(answers[step]) : step === 4 ? address.trim().length > 3 : Object.values(contact).every(Boolean);

  return (
    <main className="min-h-screen bg-[#f4f3ef] text-[#20211f]" style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}>
      <div className="mx-auto flex min-h-screen max-w-[1440px] flex-col lg:flex-row">
        <section className="relative overflow-hidden bg-white px-5 py-6 shadow-[8px_0_30px_rgba(40,35,20,0.05)] sm:px-10 lg:sticky lg:top-0 lg:h-screen lg:w-[46%] lg:px-14 lg:py-12">
          <div className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full bg-[#fcb210]/10 blur-3xl" />
          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#fcb210] text-[#20211f]"><Zap size={20} fill="currentColor" /></div>
              <div><div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#9b6a00]">PVPro.ch</div><div className="text-xs text-[#77766f]">Solarberatung Schweiz</div></div>
            </div>
            <div className="hidden items-center gap-2 text-xs text-[#77766f] sm:flex"><ShieldCheck size={15} className="text-[#9b6a00]" /> Sicher & unverbindlich</div>
          </div>

          <div className="mt-7 rounded-2xl bg-[#fcb210] px-5 py-4 lg:hidden">
            <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.16em]"><span>Ihr Solar-Potenzial</span><Zap size={16} fill="currentColor" /></div>
            <div className="mt-1 text-2xl font-black">{metrics.savings === "?" ? "Berechnung läuft …" : metrics.savings}</div>
          </div>

          <div className="mt-16 hidden lg:block">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#9b6a00]"><Zap size={15} fill="currentColor" /> Ihr Solar-Potenzial</div>
            <h1 className="mt-4 max-w-md text-4xl font-black leading-[1.04] tracking-[-0.04em]">Was Ihr Dach<br />leisten kann.</h1>
            <p className="mt-4 max-w-sm text-sm leading-6 text-[#77766f]">Beantworten Sie ein paar Fragen. Die Einschätzung aktualisiert sich live – ohne Fachbegriffe, ohne Verpflichtung.</p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 lg:mt-14">
            {[
              ["Geschätzte Leistung", metrics.power, "text-[#20211f]"],
              ["Jahresproduktion", metrics.production, "text-[#20211f]"],
              ["Jährliche Ersparnis", metrics.savings, "text-[#9b6a00]"],
              ["CO₂ Einsparung", metrics.co2, "text-[#20211f]"],
            ].map(([label, value, color]) => (
              <div key={label} className="rounded-2xl border border-[#e9e5db] bg-[#fcfbf8] p-4 transition-all duration-300">
                <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#99978e]">{label}</div>
                <div className={`mt-3 text-lg font-black tracking-[-0.03em] ${color}`}>{value}</div>
              </div>
            ))}
          </div>
          <div className="mt-7 rounded-2xl border border-[#e9e5db] bg-[#fcfbf8] p-5">
            <div className="flex items-center justify-between text-xs font-bold"><span>Eigenverbrauch</span><span className="text-[#9b6a00]">{metrics.usage}%</span></div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#e8e3d8]"><div className="h-full rounded-full bg-[#fcb210] transition-all duration-500" style={{ width: `${metrics.usage}%` }} /></div>
            <div className="mt-3 flex justify-between text-[11px] text-[#99978e]"><span>Ohne Speicher</span><span>Mit Speicher</span></div>
          </div>
          <p className="absolute bottom-10 left-14 hidden max-w-xs text-xs italic leading-5 text-[#99978e] lg:block">Basierend auf Ihren Angaben. Eine genaue Planung erfolgt nach der kostenlosen Erstberatung.</p>
        </section>

        <section className="flex flex-1 flex-col bg-[#f4f3ef] px-5 py-7 sm:px-10 lg:px-20 lg:py-14">
          <div className="mx-auto flex w-full max-w-[620px] flex-1 flex-col">
            <div className="flex items-center justify-between"><div className="text-xs font-bold uppercase tracking-[0.18em] text-[#77766f]">Solar-Rechner</div><div className="rounded-full bg-[#fcb210] px-3 py-1.5 text-xs font-bold">Schritt {step + 1} / 6</div></div>
            <div className="mt-5 h-1 rounded-full bg-[#dfdcd4]"><div className="h-full rounded-full bg-[#fcb210] transition-all duration-500" style={{ width: `${((step + 1) / 6) * 100}%` }} /></div>

            {!submitted ? (
              <div className="mt-12">
                {step < 4 && (
                  <>
                    <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#9b6a00]">{questions[step].eyebrow}</div>
                    <h2 className="mt-3 text-3xl font-black leading-tight tracking-[-0.04em] sm:text-4xl">{questions[step].title}</h2>
                    <p className="mt-3 text-sm text-[#77766f]">{questions[step].hint}</p>
                    <div className="mt-9 space-y-3">
                      {questions[step].options.map((option) => {
                        const Icon = option.icon;
                        const active = answers[step] === option.label;
                        return <button type="button" key={option.label} onClick={() => choose(option.label)} className={`group flex w-full items-center justify-between rounded-2xl border bg-white px-5 py-5 text-left shadow-[0_4px_18px_rgba(50,45,35,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#fcb210] ${active ? "border-2 border-[#fcb210] bg-[#fffaf0]" : "border-[#e9e5db]"}`}><span className="flex items-center gap-4"><span className={`grid h-11 w-11 place-items-center rounded-xl ${active ? "bg-[#fcb210]" : "bg-[#f4f3ef]"}`}><Icon size={20} /></span><span className="font-bold">{option.label}</span></span>{active ? <Check size={20} className="text-[#9b6a00]" /> : <ChevronDown size={18} className="rotate-[-90deg] text-[#aaa69b]" />}</button>;
                      })}
                    </div>
                  </>
                )}
                {step === 4 && <AddressStep address={address} setAddress={setAddress} showSuggestion={showSuggestion} setShowSuggestion={setShowSuggestion} />}
                {step === 5 && <ContactStep contact={contact} setContact={setContact} />}
              </div>
            ) : <SuccessState name={contact.firstName} />}

            {!submitted && <div className="mt-12 pb-8">
              <button type="button" disabled={!canContinue} onClick={() => step === 5 ? setSubmitted(true) : next()} className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#fcb210] px-5 py-4 font-black transition-all hover:bg-[#e9a300] disabled:cursor-not-allowed disabled:opacity-40">{step === 5 ? "Potenzial kostenlos berechnen" : "Weiter"}<ArrowRight size={19} /></button>
              <button type="button" onClick={back} disabled={step === 0} className="mx-auto mt-5 flex items-center gap-2 text-sm text-[#77766f] transition-colors hover:text-[#20211f] disabled:invisible"><ArrowLeft size={15} /> Zurück</button>
            </div>}
          </div>
        </section>
      </div>
    </main>
  );
}

function AddressStep({ address, setAddress, showSuggestion, setShowSuggestion }: { address: string; setAddress: (v: string) => void; showSuggestion: boolean; setShowSuggestion: (v: boolean) => void }) {
  return <div><div className="text-xs font-bold uppercase tracking-[0.18em] text-[#9b6a00]">Standort</div><h2 className="mt-3 text-3xl font-black leading-tight tracking-[-0.04em] sm:text-4xl">Wo befindet sich die Liegenschaft?</h2><p className="mt-3 text-sm text-[#77766f]">Wir prüfen die Förderungen in Ihrem Kanton.</p><div className="relative mt-9"><Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#99978e]" size={20} /><input value={address} onChange={(e) => { setAddress(e.target.value); setShowSuggestion(e.target.value.length > 2); }} placeholder="Strasse, PLZ oder Ort" className="w-full rounded-2xl border border-[#dedad0] bg-white px-12 py-5 text-base outline-none transition-all placeholder:text-[#aaa69b] focus:border-[#fcb210] focus:ring-4 focus:ring-[#fcb210]/15" />{showSuggestion && <button type="button" onClick={() => { setAddress("Bahnhofstrasse 12, 8001 Zürich"); setShowSuggestion(false); }} className="absolute left-0 right-0 top-[calc(100%+8px)] z-10 flex items-center gap-3 rounded-xl border border-[#e9e5db] bg-white p-4 text-left text-sm shadow-xl"><MapPin size={18} className="text-[#9b6a00]" /><span><strong>Bahnhofstrasse 12</strong><br /><span className="text-[#77766f]">8001 Zürich</span></span></button>}</div></div>;
}

function ContactStep({ contact, setContact }: { contact: Contact; setContact: (v: Contact) => void }) {
  const update = (key: keyof Contact, value: string) => setContact({ ...contact, [key]: value });
  return <div><div className="text-xs font-bold uppercase tracking-[0.18em] text-[#9b6a00]">Letzter Schritt</div><h2 className="mt-3 text-3xl font-black leading-tight tracking-[-0.04em] sm:text-4xl">Wohin dürfen wir Ihre Berechnung schicken?</h2><p className="mt-3 text-sm text-[#77766f]">Nur für Ihre persönliche Solar-Einschätzung – kein Verkaufsdruck.</p><div className="mt-9 grid gap-3 sm:grid-cols-2">{([["firstName", "Vorname"], ["lastName", "Nachname"], ["email", "E-Mail-Adresse"], ["phone", "Telefonnummer"]] as const).map(([key, label]) => <label key={key} className="text-xs font-bold text-[#55534d]">{label}<input value={contact[key]} onChange={(e) => update(key, e.target.value)} type={key === "email" ? "email" : key === "phone" ? "tel" : "text"} className="mt-2 w-full rounded-xl border border-[#dedad0] bg-white px-4 py-4 text-sm font-normal outline-none transition-all focus:border-[#fcb210] focus:ring-4 focus:ring-[#fcb210]/15" /></label>)}</div><div className="mt-5 flex items-start gap-2 text-xs leading-5 text-[#77766f]"><ShieldCheck size={16} className="mt-0.5 shrink-0 text-[#9b6a00]" /> Ihre Daten bleiben in der Schweiz und werden vertraulich behandelt.</div></div>;
}

function SuccessState({ name }: { name: string }) {
  return <div className="mt-24 rounded-3xl bg-white p-8 text-center shadow-[0_8px_30px_rgba(50,45,35,0.06)] sm:p-12"><div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#fcb210]"><Check size={30} /></div><h2 className="mt-7 text-3xl font-black tracking-[-0.04em]">Danke{name ? `, ${name}` : ""}.</h2><p className="mx-auto mt-4 max-w-sm text-sm leading-6 text-[#77766f]">Ihre Solar-Einschätzung ist unterwegs. Wir melden uns persönlich mit den nächsten Schritten.</p><div className="mt-7 flex items-center justify-center gap-2 text-xs font-bold text-[#9b6a00]"><Phone size={15} /> Antwort innerhalb eines Werktags</div></div>;
}