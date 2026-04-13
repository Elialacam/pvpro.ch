import Link from 'next/link';
import { ChevronRight, Calendar, Clock, CheckCircle2, XCircle, ArrowRight, AlertTriangle, Zap, TrendingUp } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Centrale solare da balcone in Svizzera: permessa, costi e conviene? | PVPro.ch',
  description: 'I mini impianti solari da balcone sono permessi in Svizzera? Costi, regole e se una centrale da balcone conviene — con confronto onesto con un impianto fotovoltaico completo.',
  alternates: { canonical: 'https://www.pvpro.ch/it/blog/centrale-balcone-svizzera' },
};

const righeConfronto = [
  { fattore: 'Costi', balkon: 'CHF 300–1.200', solar: 'CHF 20.000–35.000', winner: 'balkon' },
  { fattore: 'Potenza', balkon: '300–800 Watt', solar: '8.000–12.000 Watt', winner: 'solar' },
  { fattore: 'Produzione/anno', balkon: '200–600 kWh', solar: '8.000–12.000 kWh', winner: 'solar' },
  { fattore: 'Risparmio/anno', balkon: 'CHF 50–150', solar: 'CHF 1.500–3.000', winner: 'solar' },
  { fattore: 'Ammortamento', balkon: '3–6 anni', solar: '8–12 anni', winner: 'balkon' },
  { fattore: 'Plusvalore', balkon: 'Nessuno', solar: 'Sì (immobiliare)', winner: 'solar' },
  { fattore: 'Sussidi', balkon: 'Nessuno', solar: 'CRU + cantonale', winner: 'solar' },
  { fattore: 'Gruppo target', balkon: 'Inquilini', solar: 'Proprietari', winner: null },
];

const faqsIt = [
  { q: 'Le centrali solari da balcone sono permesse in Svizzera?', a: "Sì, sono in linea di principio permesse, ma devono essere notificate al gestore di rete e rispettare determinati limiti di potenza." },
  { q: 'Quale sanzione si rischia con impianti non dichiarati?', a: "In caso di violazioni il gestore di rete può adottare misure. In alcuni casi l'impianto può essere disconnesso o rimosso. Possono inoltre sorgere questioni di responsabilità." },
  { q: 'Le centrali da balcone da 2000 Watt sono permesse?', a: "In genere no, come semplice soluzione a spina. Tali impianti richiedono una notifica speciale, adattamenti tecnici ed eventualmente autorizzazioni." },
  { q: 'Cosa succede se non registro la mia centrale da balcone?', a: "Violi la normativa e rischi che l'impianto venga rimosso o limitato. Il gestore di rete può adottare misure." },
  { q: 'Quante centrali da balcone posso gestire?', a: "Nella maggior parte dei casi è previsto un impianto per nucleo familiare per evitare problemi di rete. Più impianti possono causare problemi di immissione." },
  { q: "Un accumulatore è soggetto a obbligo di notifica?", a: "Sì, anche gli accumulatori devono essere notificati a seconda del sistema, poiché possono influenzare la rete elettrica." },
  { q: 'Un gestore di rete può rilevare la mia centrale da balcone?', a: "Sì, tramite misurazioni e profili di carico può essere rilevata l'immissione. I gestori di rete possono misurare le variazioni nel flusso di corrente e identificare profili di carico insoliti." },
  { q: 'Per quanto tempo le centrali da balcone sono permesse?', a: "Attualmente sono permesse finché vengono rispettate le prescrizioni legali vigenti. Modifiche sono tuttavia possibili in base all'evoluzione della normativa." },
];

export default function CentraleBalconeSvizzeraPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="relative bg-[#0f1f3d] pt-28 pb-0 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #F97316 0%, transparent 55%)' }} />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-8">
            <Link href="/it" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/it/blog" className="hover:text-white/70 transition-colors">Blog</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Centrale solare da balcone Svizzera</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end pb-0">
            <div className="pb-12">
              <div className="flex items-center gap-3 mb-5">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#F97316]/20 text-orange-400 uppercase tracking-widest">Guida</span>
                <span className="flex items-center gap-1.5 text-white/40 text-xs">
                  <Calendar className="w-3.5 h-3.5" /> 17 marzo 2026
                </span>
                <span className="flex items-center gap-1.5 text-white/40 text-xs">
                  <Clock className="w-3.5 h-3.5" /> 7 min. di lettura
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
                Centrale solare da balcone in Svizzera: cosa è permesso — e conviene davvero?
              </h1>
              <p className="text-white/70 text-lg leading-relaxed">
                Una centrale solare da balcone sembra allettante. Ma quanta elettricità produce davvero — e quando un impianto solare completo è la scelta nettamente migliore?
              </p>
            </div>
            <div className="relative h-80 lg:h-[440px] rounded-t-2xl overflow-hidden self-end">
              <img
                src="/images/balkonkraftwerk-schweiz.webp"
                alt="Centrale solare da balcone in Svizzera – mini-impianto su balcone con vista sulle Alpi"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f3d]/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Corpo dell'articolo ── */}
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

          {/* Contenuto principale */}
          <article className="lg:col-span-2 space-y-14">

            {/* Intro */}
            <section>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                In Svizzera le centrali solari da balcone sono sempre più popolari — soprattutto tra gli inquilini o le persone che non possono installare un grande impianto solare. Ma per chi possiede casa propria, si pone la domanda decisiva:
              </p>
              <div className="rounded-2xl bg-amber-50 border border-amber-200 p-5 flex gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <p className="text-amber-800 font-medium text-sm leading-relaxed">
                  Una centrale da balcone è davvero la soluzione migliore — o sto perdendo il risparmio ben maggiore di un impianto solare completo?
                </p>
              </div>
            </section>

            {/* Cos'è? */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Cos&apos;è una centrale solare da balcone?</h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Una centrale solare da balcone è un mini-impianto solare per uso personale: tipicamente 1–2 moduli solari con una potenza compresa tra 300 e 800 watt, collegati tramite una normale presa. L&apos;elettricità prodotta viene consumata direttamente nell&apos;abitazione.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: 'Moduli', value: '1–2' },
                  { label: 'Potenza max.', value: '800 W' },
                  { label: 'Produzione/anno', value: '200–600 kWh' },
                  { label: 'Risparmio/anno', value: 'CHF 50–150' },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl bg-gray-50 border border-gray-100 p-4 text-center">
                    <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">{s.label}</p>
                    <p className="font-bold text-gray-900 text-sm">{s.value}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Permesse? */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Le centrali da balcone sono permesse in Svizzera?</h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Sì — in linea di principio permesse, ma con regole chiare. Molti sottovalutano gli adempimenti amministrativi.
              </p>
              <div className="space-y-3">
                {[
                  { ok: true, text: "L'impianto deve essere notificato al gestore di rete (di solito gratuito)" },
                  { ok: true, text: 'Le prescrizioni di sicurezza devono essere rispettate' },
                  { ok: false, text: 'Gli impianti oltre 800 W non sono semplicemente permessi come plug-and-play' },
                  { ok: false, text: 'Gli impianti da 2000 W richiedono autorizzazioni speciali' },
                  { ok: false, text: 'Gli impianti non dichiarati possono essere disconnessi' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    {item.ok
                      ? <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      : <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    }
                    <span className="text-gray-700 text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Produzione */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Quanta elettricità produce una centrale da balcone?</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Una centrale da balcone tipica produce circa <strong>200–600 kWh all&apos;anno</strong> — il che corrisponde al consumo base di alcuni apparecchi (frigorifero, standby). È lontano dal coprire la maggior parte del consumo elettrico del nucleo familiare.
              </p>
              <div className="rounded-2xl bg-gray-50 border border-gray-100 p-6 space-y-5">
                <p className="font-bold text-gray-900 text-sm mb-4">Confronto: produzione annuale</p>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Centrale da balcone (800 W)</span>
                    <span className="font-bold text-gray-800">fino a 600 kWh</span>
                  </div>
                  <div className="h-4 rounded-full bg-gray-200">
                    <div className="h-4 rounded-full bg-gray-400" style={{ width: '5%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Impianto solare (10 kWp)</span>
                    <span className="font-bold text-[#F97316]">9.000–11.000 kWh</span>
                  </div>
                  <div className="h-4 rounded-full bg-gray-200">
                    <div className="h-4 rounded-full bg-[#F97316]" style={{ width: '90%' }} />
                  </div>
                </div>
                <p className="text-xs text-gray-400">Un impianto solare completo produce <strong>15–20× più elettricità</strong> all&apos;anno.</p>
              </div>
            </section>

            {/* Tabella di confronto */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Centrale da balcone vs. impianto solare — il confronto diretto</h2>
              <p className="text-gray-500 text-sm mb-6">Per i proprietari di casa la differenza è enorme.</p>
              <div className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                <div className="grid grid-cols-3 bg-gray-50 px-5 py-3 text-xs font-bold text-gray-400 uppercase tracking-wider">
                  <span>Fattore</span>
                  <span className="text-center">Centrale da balcone</span>
                  <span className="text-center text-[#F97316]">Impianto solare</span>
                </div>
                {righeConfronto.map((row) => (
                  <div key={row.fattore} className="grid grid-cols-3 px-5 py-3.5 border-t border-gray-100 bg-white text-sm">
                    <span className="font-bold text-gray-800">{row.fattore}</span>
                    <span className={`text-center ${row.winner === 'balkon' ? 'text-green-600 font-bold' : 'text-gray-500'}`}>{row.balkon}</span>
                    <span className={`text-center ${row.winner === 'solar' ? 'text-[#F97316] font-bold' : 'text-gray-500'}`}>{row.solar}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-xl bg-[#F97316]/5 border border-[#F97316]/20 p-4">
                <p className="text-sm font-bold text-gray-900 mb-1">Conclusione:</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Una centrale da balcone è un piccolo complemento — un impianto solare è una <strong>vera soluzione energetica</strong>. Per un proprietario di casa, una centrale da balcone lascia migliaia di franchi di risparmio annuale sul tavolo.
                </p>
              </div>
            </section>

            {/* Quando cosa? */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Quando un impianto solare è la scelta migliore?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="rounded-2xl border border-gray-100 p-6 bg-white shadow-sm">
                  <p className="font-bold text-gray-500 text-sm mb-4 uppercase tracking-wide">Centrale da balcone utile se…</p>
                  <div className="space-y-2">
                    {['Sei un inquilino', 'Nessuna superficie di tetto propria disponibile', 'Installazione minimale desiderata', 'Prima scoperta dell\'energia solare'].map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl border border-[#F97316]/30 p-6 bg-orange-50 shadow-sm">
                  <p className="font-bold text-[#F97316] text-sm mb-4 uppercase tracking-wide">Impianto solare utile se…</p>
                  <div className="space-y-2">
                    {['Sei proprietario di una casa', 'Vuoi ridurre significativamente i costi energetici', 'Punti all\'indipendenza energetica a lungo termine', 'Vuoi aumentare il valore del tuo immobile'].map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Alternativa */}
            <section className="rounded-3xl bg-[#0f1f3d] p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: 'radial-gradient(circle at 80% 50%, #F97316 0%, transparent 55%)' }} />
              <div className="relative">
                <TrendingUp className="w-8 h-8 text-[#F97316] mb-4" />
                <h2 className="text-2xl font-bold text-white mb-3">Alternativa: impianto solare invece della centrale da balcone</h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  Molti iniziano con l&apos;idea di una centrale da balcone e si rendono poi conto: <strong className="text-white">l&apos;effetto è troppo piccolo.</strong>
                </p>
                <p className="text-white/70 leading-relaxed mb-6">
                  Un impianto solare completo ti fa risparmiare annualmente <strong className="text-white">CHF 1.500–3.000</strong> — ovvero 10–20× in più di una centrale da balcone. E con il contributo unico (CRU) e i sussidi cantonali, i costi di acquisto si riducono considerevolmente.
                </p>
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { icon: Zap, label: '15–20×', sub: 'più produzione di energia' },
                    { icon: TrendingUp, label: '10–20×', sub: 'più risparmio/anno' },
                    { icon: CheckCircle2, label: '100%', sub: 'sussidi disponibili' },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="rounded-xl bg-white/5 border border-white/10 p-3 text-center">
                        <Icon className="w-5 h-5 text-[#F97316] mx-auto mb-1" />
                        <p className="font-bold text-white text-lg">{item.label}</p>
                        <p className="text-white/50 text-xs">{item.sub}</p>
                      </div>
                    );
                  })}
                </div>
                <Link
                  href="/it/richiedere-preventivo-solare"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
                >
                  Richiedi preventivo gratuito <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Domande frequenti sulla centrale da balcone in Svizzera
              </h2>
              <div className="rounded-2xl border border-gray-100 px-6 shadow-sm bg-white">
                {faqsIt.map((f, i) => (
                  <details key={i} className="group border-b border-gray-100 last:border-0">
                    <summary className="flex items-center justify-between gap-4 py-5 cursor-pointer list-none select-none">
                      <span className="font-bold text-gray-900 text-sm sm:text-base">{f.q}</span>
                      <span className="text-[#F97316] flex-shrink-0 text-xl group-open:rotate-45 transition-transform duration-200">+</span>
                    </summary>
                    <p className="pb-5 text-gray-500 text-sm leading-relaxed">{f.a}</p>
                  </details>
                ))}
              </div>
            </section>

          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="sticky top-28">
              <div className="rounded-2xl border border-gray-100 p-6 shadow-sm bg-white mb-6">
                <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-4">In sintesi</p>
                <div className="space-y-3 text-sm">
                  {[
                    { label: 'Permessa in CH?', value: 'Sì, con notifica' },
                    { label: 'Potenza max.', value: '800 Watt (plug-and-play)' },
                    { label: 'Costi', value: 'CHF 300–1.200' },
                    { label: 'Produzione/anno', value: '200–600 kWh' },
                    { label: 'Risparmio/anno', value: 'CHF 50–150' },
                    { label: 'Obbligo di notifica', value: 'Sì, al gestore di rete' },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between items-start gap-2 py-2 border-b border-gray-50 last:border-0">
                      <span className="text-gray-500">{item.label}</span>
                      <span className="font-bold text-gray-900 text-right">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl p-6 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
                <Zap className="w-8 h-8 text-[#F97316] mx-auto mb-3" />
                <p className="font-bold text-gray-900 text-base mb-2">Sei proprietario?</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  Un impianto solare completo ti fa risparmiare 10× in più di una centrale da balcone.
                </p>
                <Link
                  href="/it/richiedere-preventivo-solare"
                  className="block w-full py-3 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity"
                  style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
                >
                  Richiedi subito un preventivo →
                </Link>
              </div>

              <div className="rounded-2xl border border-gray-100 p-5 shadow-sm bg-white mt-6">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Altri articoli</p>
                <div className="space-y-3">
                  {[
                    { href: '/it/blog/ritorno-investimento-solare-svizzera', title: "ROI di un impianto solare: quando l'investimento si ripaga?" },
                    { href: '/it/blog/incentivi-solari-2026', title: 'Incentivi fotovoltaici 2026 in Svizzera' },
                    { href: '/it/blog/accumulo-batteria-solare-svizzera', title: "Accumulo con batteria: l'investimento conviene?" },
                  ].map((a) => (
                    <Link key={a.href} href={a.href} className="block text-sm text-gray-700 hover:text-[#F97316] transition-colors leading-snug border-b border-gray-50 last:border-0 pb-2 last:pb-0">
                      → {a.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </main>
  );
}
