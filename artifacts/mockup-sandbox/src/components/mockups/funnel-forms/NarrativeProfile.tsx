import { useMemo, useState, type FormEvent, type ReactNode } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  LockKeyhole,
  MapPin,
  Sparkles,
} from "lucide-react";

type Contact = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

const questions = [
  {
    eyebrow: "01 · Eigentum",
    title: "Sind Sie Eigentümer der Liegenschaft?",
    note: "Damit wir das Potenzial Ihres Dachs realistisch einschätzen können.",
    options: ["Ja, ich bin Eigentümer", "Nein", "Nicht sicher"],
  },
  {
    eyebrow: "02 · Gebäude",
    title: "Um welchen Gebäudetyp handelt es sich?",
    note: "Jede Immobilie hat andere Möglichkeiten. Wir berücksichtigen das direkt.",
    options: ["Einfamilienhaus", "Mehrfamilienhaus", "Gewerbegebäude", "Andere"],
  },
  {
    eyebrow: "03 · Dach",
    title: "Welche Dachform hat Ihre Immobilie?",
    note: "Eine grobe Angabe reicht — die Details prüft später ein Fachprofi.",
    options: ["Satteldach", "Pultdach", "Flachdach"],
  },
  {
    eyebrow: "04 · Speicher",
    title: "Möchten Sie Solarstrom speichern?",
    note: "Ein Batteriespeicher macht Sie unabhängiger vom Stromnetz.",
    options: ["Ja, gerne", "Nein, danke", "Noch nicht sicher"],
  },
] as const;

const shortValue = (value: string) =>
  value
    .replace("Ja, ich bin Eigentümer", "Ja")
    .replace("Ja, gerne", "Ja")
    .replace("Nein, danke", "Nein")
    .replace("Einfamilienhaus", "Einfamilienhaus")
    .replace("Mehrfamilienhaus", "Mehrfamilienhaus")
    .replace("Gewerbegebäude", "Gewerbe")
    .replace("Noch nicht sicher", "Nicht sicher");

export function NarrativeProfile() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [selected, setSelected] = useState("");
  const [address, setAddress] = useState("");
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [contact, setContact] = useState<Contact>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const progress = Math.round(((step + 1) / 6) * 100);
  const isContact = step === 5;
  const hasAddress = Boolean(answers[4]);
  const propertyAnswers = useMemo(() => answers, [answers]);

  const saveAndContinue = () => {
    if (step < 4 && !selected) return;
    if (step === 4 && !address.trim()) return;
    if (step < 4) setAnswers((current) => ({ ...current, [step]: selected }));
    if (step === 4) setAnswers((current) => ({ ...current, 4: address.trim() }));
    setSelected("");
    setShowSuggestion(false);
    setStep((current) => Math.min(current + 1, 5));
  };

  const goBack = () => {
    if (step === 0) return;
    const previous = step - 1;
    setStep(previous);
    setSelected(previous < 4 ? answers[previous] ?? "" : "");
    if (previous === 4) setAddress(answers[4] ?? "");
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!contact.firstName || !contact.lastName || !contact.email || !contact.phone) return;
    setSubmitted(true);
  };

  const section = (
    number: number,
    title: string,
    content: ReactNode,
    unlocked: boolean,
  ) => (
    <div
      className={`border-b border-[#e7e3d9] py-5 transition-all duration-500 ${
        unlocked ? "translate-y-0 opacity-100" : "pointer-events-none h-0 overflow-hidden border-0 py-0 opacity-0"
      }`}
    >
      <div className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#a49d8b]">
        <span>0{number}</span>
        <span className="h-px w-5 bg-[#ddd7c8]" />
        {title}
        <Check size={13} strokeWidth={3} className="ml-auto text-[#d89b00]" />
      </div>
      <div className="pl-7 text-[15px] font-semibold text-[#242522]">{content}</div>
    </div>
  );

  return (
    <main className="min-h-screen bg-[#f4f3ef] font-sans text-[#242522]">
      <div className="flex min-h-screen flex-col lg:flex-row">
        <aside className="relative order-2 overflow-y-auto border-t border-[#dedbd2] bg-[#fffefa] px-6 py-7 lg:order-1 lg:h-screen lg:w-[48%] lg:border-r lg:border-t-0 lg:px-[8vw] lg:py-12">
          <div className="mx-auto max-w-[530px]">
            <div className="mb-12 flex items-start justify-between">
              <div>
                <div className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#a49d8b]">
                  <span className="h-2 w-2 rounded-full bg-[#fcb210]" />
                  persönliche auswertung
                </div>
                <h1 className="font-serif text-[30px] font-semibold tracking-[-0.04em] text-[#25251f]">
                  Ihre Solar-Analyse
                </h1>
                <p className="mt-1 text-xs italic text-[#d39a0a]">wird erstellt…</p>
              </div>
              <div className="hidden rounded-full border border-[#ece8dc] bg-[#fffdf8] p-3 text-[#d39a0a] sm:block">
                <Sparkles size={19} strokeWidth={1.7} />
              </div>
            </div>

            <div className="relative">
              <div className="absolute bottom-8 left-[10px] top-1 w-px bg-[#eee9dc]" />
              <div className="relative">
                {section(1, "Liegenschaft", <>Eigentümer: <span className="text-[#d39200]">✓ {shortValue(propertyAnswers[0] ?? "")}</span></>, Boolean(propertyAnswers[0]))}
                {section(2, "Gebäude", <>Typ: {shortValue(propertyAnswers[1] ?? "")} <span className="ml-1 text-base">⌂</span></>, Boolean(propertyAnswers[1]))}
                {section(3, "Dach", <>Form: {shortValue(propertyAnswers[2] ?? "")}</>, Boolean(propertyAnswers[2]))}
                {section(4, "Speicher", <>Batteriespeicher: {shortValue(propertyAnswers[3] ?? "")}{propertyAnswers[3]?.startsWith("Ja") && <span className="font-normal text-[#777263]"> — Eigenverbrauch bis 80%</span>}</>, Boolean(propertyAnswers[3]))}
                {section(5, "Standort", <span className="flex items-center gap-2"><MapPin size={15} className="text-[#d39200]" />{propertyAnswers[4] || address}</span>, hasAddress)}
              </div>

              <div className={`mt-7 border-l-4 border-[#fcb210] bg-[#fff6dc] px-5 py-5 transition-all duration-700 ${propertyAnswers[3] ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"}`}>
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.17em] text-[#a4791d]">Ihr Potenzial</p>
                <p className="font-serif text-lg font-semibold leading-snug text-[#574614]">
                  Geschätzte Anlage: 8–12 kWp
                </p>
                <p className="mt-1 text-sm text-[#796a44]">CHF 2&apos;100 – 3&apos;400 / Jahr</p>
              </div>
            </div>

            <div className="mt-14 flex items-center gap-2 text-xs text-[#989385]">
              <LockKeyhole size={14} />
              Ihre Daten werden sicher übertragen
            </div>
          </div>
        </aside>

        <section className="order-1 flex min-h-[650px] flex-1 flex-col bg-[#f5f5f3] lg:order-2 lg:h-screen">
          <header className="flex items-center justify-between px-6 py-6 sm:px-10 lg:px-[7vw] lg:py-9">
            <div className="text-sm font-bold tracking-[-0.02em]">solaro<span className="text-[#dfa000]">.</span></div>
            <div className="flex items-center gap-3 text-xs font-semibold text-[#77766f]">
              <span>Schritt {step + 1} von 6</span>
              <div className="h-1.5 w-20 overflow-hidden rounded-full bg-[#deded9] sm:w-28">
                <div className="h-full rounded-full bg-[#fcb210] transition-all duration-500" style={{ width: `${progress}%` }} />
              </div>
            </div>
          </header>

          <div className="flex flex-1 items-center px-6 pb-10 sm:px-10 lg:px-[7vw]">
            <div className="w-full max-w-[570px]">
              {!isContact ? (
                <div key={step} className="transition-all duration-500">
                  <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#c38c08]">{questions[step].eyebrow}</p>
                  <h2 className="max-w-[520px] text-[30px] font-bold leading-[1.08] tracking-[-0.045em] text-[#262622] sm:text-[40px]">
                    {questions[step].title}
                  </h2>
                  <p className="mt-4 max-w-[440px] text-sm leading-6 text-[#77766f]">{questions[step].note}</p>

                  {step < 4 ? (
                    <div className="mt-8 space-y-3">
                      {questions[step].options.map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => setSelected(option)}
                          className={`group flex w-full items-center justify-between rounded-xl border px-5 py-[18px] text-left text-[15px] font-semibold transition-all duration-200 ${
                            selected === option ? "border-[#fcb210] bg-[#fff8e6] shadow-[0_5px_20px_rgba(180,130,0,0.1)]" : "border-[#e4e3df] bg-white hover:-translate-y-0.5 hover:border-[#e5bb58] hover:shadow-[0_5px_18px_rgba(40,40,30,0.06)]"
                          }`}
                        >
                          <span>{option}</span>
                          <span className={`flex h-5 w-5 items-center justify-center rounded-full border transition-all ${selected === option ? "border-[#fcb210] bg-[#fcb210] text-white" : "border-[#d9d8d2] text-transparent"}`}>
                            <Check size={12} strokeWidth={3} />
                          </span>
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="relative mt-8">
                      <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 text-[#b4b0a5]" size={19} />
                      <input
                        autoFocus
                        value={address}
                        onChange={(event) => { setAddress(event.target.value); setShowSuggestion(event.target.value.length > 2); }}
                        placeholder="z. B. Bahnhofstrasse 12, Zürich"
                        className="w-full rounded-xl border border-[#e2e1dc] bg-white px-12 py-[19px] text-[15px] font-medium outline-none transition focus:border-[#fcb210] focus:ring-4 focus:ring-[#fcb210]/10"
                      />
                      {showSuggestion && (
                        <button type="button" onClick={() => { setAddress("Bahnhofstrasse 12, 8001 Zürich"); setShowSuggestion(false); }} className="absolute left-0 right-0 top-[calc(100%+7px)] flex items-center gap-3 rounded-xl border border-[#e5e2d9] bg-white p-4 text-left text-sm shadow-lg">
                          <MapPin size={16} className="text-[#d99c05]" />
                          <span><strong>Bahnhofstrasse 12</strong><br /><span className="text-xs text-[#8e8b82]">8001 Zürich, Schweiz</span></span>
                          <ChevronDown size={15} className="ml-auto -rotate-90 text-[#aaa69a]" />
                        </button>
                      )}
                    </div>
                  )}

                  <button type="button" disabled={step < 4 ? !selected : !address.trim()} onClick={saveAndContinue} className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-[#fcb210] py-[18px] text-sm font-bold text-[#30250b] transition hover:bg-[#e9a300] disabled:cursor-not-allowed disabled:opacity-40">
                    Weiter <ArrowRight size={17} />
                  </button>
                  <button type="button" onClick={goBack} disabled={step === 0} className="mx-auto mt-5 flex items-center gap-1 text-xs font-semibold text-[#88867d] transition hover:text-[#30250b] disabled:invisible">
                    <ArrowLeft size={14} /> Zurück
                  </button>
                </div>
              ) : submitted ? (
                <div className="rounded-2xl border border-[#e7ddbd] bg-[#fffaf0] p-8 text-center">
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#fcb210] text-[#392b08]"><Check size={27} strokeWidth={2.5} /></div>
                  <h2 className="text-3xl font-bold tracking-[-0.04em]">Ihre Analyse ist unterwegs.</h2>
                  <p className="mt-3 text-sm leading-6 text-[#77766f]">Wir melden uns persönlich mit passenden Offerten für {address || "Ihre Liegenschaft"}.</p>
                </div>
              ) : (
                <form onSubmit={submit} className="transition-all duration-500">
                  <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#c38c08]">06 · Kontakt</p>
                  <h2 className="text-[30px] font-bold leading-[1.08] tracking-[-0.045em] sm:text-[40px]">Wohin dürfen wir Ihre Analyse senden?</h2>
                  <p className="mt-4 text-sm leading-6 text-[#77766f]">Keine Massenangebote. Wir wählen passende Schweizer Fachbetriebe für Sie aus.</p>
                  <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {(["firstName", "lastName"] as const).map((field) => <input key={field} required value={contact[field]} onChange={(e) => setContact({ ...contact, [field]: e.target.value })} placeholder={field === "firstName" ? "Vorname" : "Nachname"} className="rounded-xl border border-[#e2e1dc] bg-white px-5 py-4 text-sm outline-none transition focus:border-[#fcb210] focus:ring-4 focus:ring-[#fcb210]/10" />)}
                  </div>
                  <input required type="email" value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })} placeholder="E-Mail-Adresse" className="mt-3 w-full rounded-xl border border-[#e2e1dc] bg-white px-5 py-4 text-sm outline-none transition focus:border-[#fcb210] focus:ring-4 focus:ring-[#fcb210]/10" />
                  <input required type="tel" value={contact.phone} onChange={(e) => setContact({ ...contact, phone: e.target.value })} placeholder="Telefonnummer" className="mt-3 w-full rounded-xl border border-[#e2e1dc] bg-white px-5 py-4 text-sm outline-none transition focus:border-[#fcb210] focus:ring-4 focus:ring-[#fcb210]/10" />
                  <button type="submit" className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#fcb210] py-[18px] text-sm font-bold text-[#30250b] transition hover:bg-[#e9a300]">Offerten anfordern <ArrowRight size={17} /></button>
                  <button type="button" onClick={goBack} className="mx-auto mt-5 flex items-center gap-1 text-xs font-semibold text-[#88867d] transition hover:text-[#30250b]"><ArrowLeft size={14} /> Zurück</button>
                </form>
              )}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}