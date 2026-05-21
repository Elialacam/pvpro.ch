'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Sun, Zap, ArrowRight, Battery, Home, Wifi, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { getFormUrl } from '@/lib/i18n/formUrls';

function getLocale(pathname: string) {
  if (pathname.startsWith('/fr')) return 'fr';
  if (pathname.startsWith('/it')) return 'it';
  return 'de';
}

const stepsDE = [
  { num: '01', icon: Sun,       title: 'Sonnenlicht trifft auf die Module',       body: 'Die Solarmodule auf Ihrem Dach bestehen aus vielen kleinen Solarzellen. Sobald Sonnenstrahlen auf sie treffen, wird Energie freigesetzt — rund um die Uhr, auch bei bewölktem Himmel.', color: '#FBBF24', bg: '#FFFBEB' },
  { num: '02', icon: Zap,       title: 'Solarzellen erzeugen Gleichstrom',        body: 'Durch den photoelektrischen Effekt wird das Licht direkt in elektrische Energie umgewandelt. Es entsteht Gleichstrom (DC) — wie bei einer Batterie.', color: '#F97316', bg: '#FFF7ED' },
  { num: '03', icon: ArrowRight, title: 'Wechselrichter macht den Strom nutzbar', body: 'Da Haushaltsgeräte mit Wechselstrom (AC) laufen, wandelt der Wechselrichter den Gleichstrom um. Dieses Gerät ist das Herzstück Ihrer Anlage.', color: '#10B981', bg: '#F0FDF4' },
  { num: '04', icon: Home,      title: 'Strom wird im Haus genutzt',              body: 'Der umgewandelte Strom versorgt Ihre Geräte, Ihre Beleuchtung und Ihre Wärmepumpe — direkt aus Ihrer eigenen Produktion, ohne Kosten.', color: '#3B82F6', bg: '#EFF6FF' },
  { num: '05', icon: Battery,   title: 'Überschuss wird gespeichert oder eingespeist', body: 'Produzieren Sie mehr Strom als Sie verbrauchen, wird er in einem Batteriespeicher gespeichert — oder ins öffentliche Netz eingespeist und vergütet.', color: '#8B5CF6', bg: '#F5F3FF' },
];

const stepsIT = [
  { num: '01', icon: Sun,       title: 'La luce solare raggiunge i moduli',       body: 'I moduli solari sul tuo tetto sono composti da molte piccole celle fotovoltaiche. Non appena i raggi solari le colpiscono, viene liberata energia — tutto il giorno, anche con il cielo nuvoloso.', color: '#FBBF24', bg: '#FFFBEB' },
  { num: '02', icon: Zap,       title: 'Le celle producono corrente continua',     body: 'Grazie all\'effetto fotoelettrico, la luce viene convertita direttamente in energia elettrica. Si genera corrente continua (DC) — come in una batteria.', color: '#F97316', bg: '#FFF7ED' },
  { num: '03', icon: ArrowRight, title: 'L\'inverter rende l\'energia utilizzabile', body: 'Poiché gli elettrodomestici funzionano a corrente alternata (AC), l\'inverter converte la corrente continua. Questo dispositivo è il cuore del tuo impianto.', color: '#10B981', bg: '#F0FDF4' },
  { num: '04', icon: Home,      title: 'L\'energia viene usata in casa',           body: 'La corrente convertita alimenta i tuoi apparecchi, l\'illuminazione e la pompa di calore — direttamente dalla tua produzione, senza costi.', color: '#3B82F6', bg: '#EFF6FF' },
  { num: '05', icon: Battery,   title: 'L\'eccedenza viene accumulata o immessa in rete', body: 'Se produci più energia di quella che consumi, viene immagazzinata in una batteria di accumulo — oppure immessa nella rete pubblica e remunerata.', color: '#8B5CF6', bg: '#F5F3FF' },
];

const stepsFR = [
  { num: '01', icon: Sun,       title: 'La lumière solaire atteint les modules',       body: 'Les modules solaires sur votre toit sont composés de nombreuses petites cellules photovoltaïques. Dès que les rayons solaires les frappent, de l\'énergie est libérée — en continu, même par temps nuageux.', color: '#FBBF24', bg: '#FFFBEB' },
  { num: '02', icon: Zap,       title: 'Les cellules produisent du courant continu',   body: 'Grâce à l\'effet photoélectrique, la lumière est convertie directement en énergie électrique. Il se forme un courant continu (DC) — comme dans une batterie.', color: '#F97316', bg: '#FFF7ED' },
  { num: '03', icon: ArrowRight, title: 'L\'onduleur rend le courant utilisable',       body: 'Comme les appareils ménagers fonctionnent en courant alternatif (AC), l\'onduleur convertit le courant continu. Cet appareil est le cœur de votre installation.', color: '#10B981', bg: '#F0FDF4' },
  { num: '04', icon: Home,      title: 'Le courant est utilisé dans la maison',        body: 'Le courant converti alimente vos appareils, votre éclairage et votre pompe à chaleur — directement depuis votre propre production, sans frais.', color: '#3B82F6', bg: '#EFF6FF' },
  { num: '05', icon: Battery,   title: 'Le surplus est stocké ou injecté dans le réseau', body: 'Si vous produisez plus d\'électricité que vous n\'en consommez, elle est stockée dans une batterie — ou injectée dans le réseau public et rémunérée.', color: '#8B5CF6', bg: '#F5F3FF' },
];

const komponentenDE = [
  { icon: '☀️', name: 'Solarmodule',     desc: 'Erzeugen Gleichstrom aus Sonnenlicht. Moderne Module erreichen Wirkungsgrade von bis zu 22%.', fact: 'Lebensdauer: 25–30 Jahre' },
  { icon: '⚡', name: 'Wechselrichter',   desc: 'Wandelt Gleichstrom (DC) in Wechselstrom (AC) um, den Ihre Geräte verwenden können.', fact: 'Herzstück der Anlage' },
  { icon: '📊', name: 'Stromzähler',      desc: 'Misst genau, wie viel Strom Sie verbrauchen und wie viel Sie ins Netz einspeisen.', fact: 'Zweirichtungszähler' },
  { icon: '🔋', name: 'Batteriespeicher', desc: 'Optional, aber empfohlen: Speichert überschüssigen Solarstrom für die Nacht oder bewölkte Tage.', fact: 'Kapazität: 5–20 kWh' },
];

const komponentenIT = [
  { icon: '☀️', name: 'Moduli fotovoltaici', desc: 'Generano corrente continua dalla luce solare. I moduli moderni raggiungono rendimenti fino al 22%.', fact: 'Durata: 25–30 anni' },
  { icon: '⚡', name: 'Inverter',             desc: 'Converte la corrente continua (DC) in corrente alternata (AC) utilizzabile dai tuoi apparecchi.', fact: 'Cuore dell\'impianto' },
  { icon: '📊', name: 'Contatore',            desc: 'Misura con precisione quanta energia consumi e quanta immetti in rete.', fact: 'Contatore bidirezionale' },
  { icon: '🔋', name: 'Batteria di accumulo', desc: 'Opzionale ma consigliata: immagazzina l\'energia solare in eccesso per la notte o le giornate nuvolose.', fact: 'Capacità: 5–20 kWh' },
];

const komponentenFR = [
  { icon: '☀️', name: 'Modules solaires',    desc: 'Génèrent du courant continu à partir de la lumière solaire. Les modules modernes atteignent des rendements allant jusqu\'à 22%.', fact: 'Durée de vie: 25–30 ans' },
  { icon: '⚡', name: 'Onduleur',             desc: 'Convertit le courant continu (DC) en courant alternatif (AC) utilisable par vos appareils.', fact: 'Cœur de l\'installation' },
  { icon: '📊', name: 'Compteur',             desc: 'Mesure précisément votre consommation et votre injection dans le réseau.', fact: 'Compteur bidirectionnel' },
  { icon: '🔋', name: 'Batterie de stockage', desc: 'Optionnel mais recommandé: stocke l\'énergie solaire excédentaire pour la nuit ou les jours nuageux.', fact: 'Capacité: 5–20 kWh' },
];

const faqsDE = [
  { q: 'Wie funktioniert eine Solaranlage einfach erklärt?', a: 'Solarmodule erzeugen aus Sonnenlicht Gleichstrom. Ein Wechselrichter wandelt diesen in nutzbaren Wechselstrom um, der direkt im Haushalt verwendet oder ins Netz eingespeist wird.' },
  { q: 'Was ist der Unterschied zwischen Photovoltaik und Solaranlage?', a: 'Photovoltaik erzeugt Strom aus Licht. Solarthermie dagegen erzeugt Wärme (z.B. für Warmwasser). Im Alltag wird "Solaranlage" meist als Synonym für Photovoltaik verwendet.' },
  { q: 'Was bringt ein 800 Watt Solarmodul am Tag?', a: 'Ein 800-Watt-System produziert im Sommer etwa 2–4 kWh pro Tag. Im Winter ist die Produktion deutlich geringer.' },
  { q: 'Kann ein Solarpanel einen Kühlschrank betreiben?', a: 'Ja, ein Solarpanel kann einen Kühlschrank betreiben — aber meist nicht dauerhaft alleine. Dafür ist ein grösseres System oder ein Speicher notwendig.' },
  { q: 'Ist man mit Photovoltaik autark?', a: 'Nicht vollständig. Ohne Speicher und im Winter bleibt man teilweise auf Strom aus dem Netz angewiesen. Mit einem grossen Batteriespeicher kann man jedoch sehr hohe Eigenversorgungsgrade erreichen.' },
  { q: 'Wie gross muss eine Solaranlage sein, um ein Auto zu laden?', a: "Für ein Elektroauto benötigt man etwa 2–4 kWp zusätzliche Leistung." },
  { q: 'Was bringt eine Solaranlage im Winter?', a: 'Im Winter produziert eine Solaranlage deutlich weniger Strom — aber nicht nichts. Kürzere Tage und tiefere Sonnenwinkel reduzieren die Produktion, Strom wird aber weiterhin erzeugt.' },
  { q: 'Wie lange reicht ein 10 kWh Speicher?', a: 'Ein 10-kWh-Speicher deckt je nach Haushalt den Abend und die Nacht ab. Bei hohem Verbrauch wird er schneller entladen.' },
];

const faqsIT = [
  { q: 'Come funziona un impianto fotovoltaico in modo semplice?', a: 'I moduli solari generano corrente continua dalla luce solare. Un inverter la converte in corrente alternata utilizzabile direttamente in casa o immessa in rete.' },
  { q: 'Qual è la differenza tra fotovoltaico e impianto solare?', a: 'Il fotovoltaico produce elettricità dalla luce. Il solare termico produce calore (es. per l\'acqua calda). Nel linguaggio comune "impianto solare" è spesso sinonimo di fotovoltaico.' },
  { q: 'Quanto produce un modulo da 800 Watt al giorno?', a: 'Un sistema da 800 Watt produce in estate circa 2–4 kWh al giorno. In inverno la produzione è sensibilmente inferiore.' },
  { q: 'Un pannello solare può alimentare un frigorifero?', a: 'Sì, un pannello solare può alimentare un frigorifero — ma di solito non in modo continuativo da solo. È necessario un sistema più grande o una batteria.' },
  { q: 'Con il fotovoltaico si è autosufficienti?', a: 'Non completamente. Senza batteria e in inverno si rimane parzialmente dipendenti dalla rete. Con una grande batteria si possono raggiungere gradi di autoapprovvigionamento molto elevati.' },
  { q: 'Quanto deve essere grande un impianto per ricaricare un\'auto?', a: 'Per un\'auto elettrica servono circa 2–4 kWp di potenza aggiuntiva.' },
  { q: 'Produce ancora energia in inverno?', a: 'In inverno un impianto produce molto meno — ma non zero. Giornate più corte e angoli solari più bassi riducono la produzione, ma l\'energia viene comunque generata.' },
  { q: 'Quanto dura una batteria da 10 kWh?', a: 'Una batteria da 10 kWh copre generalmente la sera e la notte. Con consumi elevati si scarica più rapidamente.' },
];

const faqsFR = [
  { q: 'Comment fonctionne une installation solaire simplement expliqué ?', a: 'Les modules solaires génèrent du courant continu à partir de la lumière solaire. Un onduleur le convertit en courant alternatif utilisable directement à la maison ou injecté dans le réseau.' },
  { q: 'Quelle est la différence entre photovoltaïque et installation solaire ?', a: 'Le photovoltaïque produit de l\'électricité. Le solaire thermique produit de la chaleur. Dans le langage courant, les deux termes sont souvent utilisés comme synonymes.' },
  { q: 'Que produit un module de 800 Watts par jour ?', a: 'Un système de 800 Watts produit en été environ 2–4 kWh par jour. En hiver, la production est nettement inférieure.' },
  { q: 'Un panneau solaire peut-il alimenter un réfrigérateur ?', a: 'Oui, mais généralement pas seul en continu. Un système plus grand ou une batterie est nécessaire.' },
  { q: 'Peut-on être autosuffisant avec le photovoltaïque ?', a: 'Pas complètement. Sans batterie et en hiver, on reste partiellement dépendant du réseau.' },
  { q: 'Quelle taille d\'installation pour recharger une voiture ?', a: 'Pour une voiture électrique, il faut environ 2–4 kWc de puissance supplémentaire.' },
  { q: 'Produit-elle encore de l\'énergie en hiver ?', a: 'En hiver, une installation produit beaucoup moins — mais pas zéro.' },
  { q: 'Combien de temps dure une batterie de 10 kWh ?', a: 'Une batterie de 10 kWh couvre généralement la soirée et la nuit selon la consommation.' },
];

const quickFactsDE = [
  { q: 'Produziert sie auch im Winter?', a: 'Ja — deutlich weniger, aber weiterhin Strom. Moderne Anlagen erzeugen auch bei Bewölkung Energie.' },
  { q: 'Kann ich ein E-Auto laden?', a: 'Ja. Mit ca. 2–4 kWp Zusatzleistung decken Sie den Grossteil des Ladbedarfs Ihres Elektroautos.' },
  { q: 'Bin ich damit autark?', a: 'Nicht vollständig — aber mit einem Speicher können Sie bis zu 70–80% Eigenversorgung erreichen.' },
  { q: 'Wie viel produziert 1 Modul täglich?', a: 'Ein 400-Watt-Modul erzeugt im Sommer ca. 1–2 kWh/Tag. Im Winter entsprechend weniger.' },
  { q: 'Was kostet eine 10-kWp-Anlage?', a: "Zwischen 20'000 und 35'000 CHF vor Förderungen. Die EIV-Vergütung reduziert die Kosten deutlich." },
  { q: 'Wann amortisiert sie sich?', a: 'Bei einem typischen Schweizer Haushalt in 8–12 Jahren — je nach Eigenverbrauch und Strompreis.' },
];

const quickFactsIT = [
  { q: 'Produce anche in inverno?', a: 'Sì — molto meno, ma continua a produrre. I moderni impianti generano energia anche con il cielo nuvoloso.' },
  { q: 'Posso ricaricare un\'auto elettrica?', a: 'Sì. Con circa 2–4 kWp di potenza aggiuntiva copri la maggior parte del fabbisogno di ricarica.' },
  { q: 'Divento autosufficiente?', a: 'Non completamente — ma con una batteria puoi raggiungere il 70–80% di autoapprovvigionamento.' },
  { q: 'Quanto produce 1 modulo al giorno?', a: 'Un modulo da 400 Watt produce in estate ca. 1–2 kWh/giorno. In inverno proporzionalmente meno.' },
  { q: 'Quanto costa un impianto da 10 kWp?', a: "Tra 20'000 e 35'000 CHF prima degli incentivi. La RU riduce sensibilmente i costi." },
  { q: 'Quando si ammortizza?', a: 'Per una tipica famiglia svizzera in 8–12 anni — a seconda dell\'autoconsumo e del prezzo dell\'energia.' },
];

const quickFactsFR = [
  { q: 'Produit-elle aussi en hiver ?', a: 'Oui — beaucoup moins, mais toujours. Les installations modernes génèrent de l\'énergie même par temps nuageux.' },
  { q: 'Puis-je recharger une voiture électrique ?', a: 'Oui. Avec environ 2–4 kWc de puissance supplémentaire, vous couvrez la majeure partie du besoin de charge.' },
  { q: 'Serai-je autosuffisant ?', a: 'Pas complètement — mais avec une batterie, vous pouvez atteindre 70–80% d\'autoapprovisionnement.' },
  { q: 'Combien produit 1 module par jour ?', a: 'Un module de 400 Watts produit en été environ 1–2 kWh/jour. En hiver, proportionnellement moins.' },
  { q: 'Combien coûte une installation de 10 kWc ?', a: "Entre 20'000 et 35'000 CHF avant subventions. La RU réduit significativement les coûts." },
  { q: 'Quand est-elle amortie ?', a: 'Pour un ménage suisse typique en 8–12 ans — selon l\'autoconsommation et le prix de l\'électricité.' },
];

const textsDE = {
  stepLabel: 'Schritt', stepByStep: 'Schritt für Schritt', howTitle: 'Wie funktioniert eine Solaranlage?',
  components: 'Aufbau', componentsTitle: 'Welche Komponenten hat eine Solaranlage?',
  calcLabel: 'Interaktiv', calcTitle: 'Wie viel Strom produziert meine Anlage?', calcSub: 'Schieben Sie den Regler, um die Jahresproduktion zu sehen.',
  groesse: 'Anlagengrösse', klein: '3 kWp (klein)', gross: '20 kWp (gross)',
  proJahr: 'Pro Jahr', proTag: 'Pro Tag ⌀', ersparnis: 'Ersparnis/Jahr',
  evLabel: '🚗 E-Auto', waermeLabel: '♨️ Wärmepumpe',
  evCoverage: 'E-Auto-Ladebedarf gedeckt', waermeCoverage: 'Wärmepumpenbedarf gedeckt',
  ctaOfferte: 'Kostenlose Offerte anfordern →', ctaKosten: 'Kosten berechnen', ctaKostenHref: '/solaranlage-kosten',
  quickLabel: 'Auf einen Blick', quickTitle: 'Häufige Fragen kurz beantwortet',
  faqLabel: 'FAQ', faqTitle: 'Häufig gestellte Fragen',
  einspeisung: 'Einspeisung', einspeisungSub: 'Vergütung durch Netzbetreiber', speicher: 'Speicher', speicherSub: 'Für Abend & Nacht',
};

const textsIT = {
  stepLabel: 'Fase', stepByStep: 'Passo dopo passo', howTitle: 'Come funziona un impianto fotovoltaico?',
  components: 'Componenti', componentsTitle: 'Quali componenti ha un impianto fotovoltaico?',
  calcLabel: 'Interattivo', calcTitle: 'Quanta energia produce il mio impianto?', calcSub: 'Sposta il cursore per vedere la produzione annua.',
  groesse: 'Dimensione impianto', klein: '3 kWp (piccolo)', gross: '20 kWp (grande)',
  proJahr: 'All\'anno', proTag: 'Al giorno ⌀', ersparnis: 'Risparmio/anno',
  evLabel: '🚗 Auto EV', waermeLabel: '♨️ Pompa di calore',
  evCoverage: 'Fabbisogno auto EV coperto', waermeCoverage: 'Fabbisogno pompa di calore coperto',
  ctaOfferte: 'Richiedi preventivo gratuito →', ctaKosten: 'Calcola i costi', ctaKostenHref: '/it/costi-impianto-solare',
  quickLabel: 'In breve', quickTitle: 'Domande frequenti in sintesi',
  faqLabel: 'FAQ', faqTitle: 'Domande frequenti',
  einspeisung: 'Immissione in rete', einspeisungSub: 'Remunerazione dal gestore di rete', speicher: 'Accumulo', speicherSub: 'Per sera e notte',
};

const textsFR = {
  stepLabel: 'Étape', stepByStep: 'Étape par étape', howTitle: 'Comment fonctionne une installation solaire ?',
  components: 'Composants', componentsTitle: 'Quels composants comprend une installation solaire ?',
  calcLabel: 'Interactif', calcTitle: 'Combien d\'électricité produit mon installation ?', calcSub: 'Faites glisser le curseur pour voir la production annuelle.',
  groesse: 'Taille installation', klein: '3 kWc (petit)', gross: '20 kWc (grand)',
  proJahr: 'Par an', proTag: 'Par jour ⌀', ersparnis: 'Économies/an',
  evLabel: '🚗 Voiture EV', waermeLabel: '♨️ Pompe à chaleur',
  evCoverage: 'Besoin recharge VE couvert', waermeCoverage: 'Besoin pompe à chaleur couvert',
  ctaOfferte: 'Demander un devis gratuit →', ctaKosten: 'Calculer les coûts', ctaKostenHref: '/fr/cout-installation-solaire',
  quickLabel: 'En bref', quickTitle: 'Questions fréquentes en résumé',
  faqLabel: 'FAQ', faqTitle: 'Questions fréquemment posées',
  einspeisung: 'Injection réseau', einspeisungSub: 'Rémunération par le gestionnaire de réseau', speicher: 'Stockage', speicherSub: 'Pour soir & nuit',
};

function ProductionCalc({ locale }: { locale: string }) {
  const pathname = usePathname();
  const formUrl = getFormUrl(pathname);
  const [kwp, setKwp] = useState(8);
  const [hasEv, setHasEv] = useState(false);
  const [hasHeatpump, setHasHeatpump] = useState(false);

  const yearlyKwh = Math.round(kwp * 1000);
  const dailyKwh = (yearlyKwh / 365).toFixed(0);
  const savedChf = Math.round(yearlyKwh * 0.22);
  const evCoverage = hasEv ? Math.round((yearlyKwh / 2500) * 100) : null;
  const heatCoverage = hasHeatpump ? Math.round((yearlyKwh / 3000) * 100) : null;

  const T = locale === 'it' ? textsIT : locale === 'fr' ? textsFR : textsDE;

  return (
    <div className="rounded-3xl border border-gray-100 shadow-sm bg-white p-7 sm:p-10">
      <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-1">{T.calcLabel}</p>
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{T.calcTitle}</h2>
      <p className="text-gray-500 text-sm mb-8">{T.calcSub}</p>

      <div className="mb-8">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-bold text-gray-700">{T.groesse}</span>
          <span className="px-3 py-1 rounded-full text-sm font-bold text-white" style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>{kwp} kWp</span>
        </div>
        <input type="range" min={3} max={20} step={1} value={kwp}
          onChange={(e) => setKwp(Number(e.target.value))}
          className="w-full h-2 rounded-full appearance-none cursor-pointer slider-orange"
          style={{ background: `linear-gradient(to right, #F97316 ${((kwp - 3) / 17) * 100}%, #e5e7eb ${((kwp - 3) / 17) * 100}%)` }}
        />
        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>{T.klein}</span><span>{T.gross}</span>
        </div>
      </div>

      <div className="flex gap-3 mb-8 flex-wrap">
        <button onClick={() => setHasEv(!hasEv)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold border transition-all ${hasEv ? 'border-[#F97316] bg-orange-50 text-[#F97316]' : 'border-gray-200 text-gray-500'}`}>
          {T.evLabel}
        </button>
        <button onClick={() => setHasHeatpump(!hasHeatpump)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold border transition-all ${hasHeatpump ? 'border-[#F97316] bg-orange-50 text-[#F97316]' : 'border-gray-200 text-gray-500'}`}>
          {T.waermeLabel}
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
        <div className="rounded-2xl bg-gray-50 p-4 text-center">
          <p className="text-xs text-gray-400 mb-1 uppercase tracking-wide">{T.proJahr}</p>
          <p className="text-2xl font-bold text-gray-900">{yearlyKwh.toLocaleString('de-CH')}</p>
          <p className="text-xs text-gray-500">kWh</p>
        </div>
        <div className="rounded-2xl bg-gray-50 p-4 text-center">
          <p className="text-xs text-gray-400 mb-1 uppercase tracking-wide">{T.proTag}</p>
          <p className="text-2xl font-bold text-gray-900">{dailyKwh}</p>
          <p className="text-xs text-gray-500">kWh</p>
        </div>
        <div className="rounded-2xl bg-orange-50 border border-orange-100 p-4 text-center col-span-2 sm:col-span-1">
          <p className="text-xs text-[#F97316] mb-1 uppercase tracking-wide font-bold">{T.ersparnis}</p>
          <p className="text-2xl font-bold text-[#F97316]">~{savedChf.toLocaleString('de-CH')}</p>
          <p className="text-xs text-gray-500">CHF</p>
        </div>
      </div>

      {(hasEv || hasHeatpump) && (
        <div className="rounded-xl bg-gray-50 border border-gray-100 p-4 space-y-3">
          {hasEv && evCoverage !== null && (
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-600">{T.evCoverage}</span>
                <span className="font-bold text-gray-900">{Math.min(evCoverage, 100)}%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 rounded-full bg-[#F97316] transition-all duration-500" style={{ width: `${Math.min(evCoverage, 100)}%` }} />
              </div>
            </div>
          )}
          {hasHeatpump && heatCoverage !== null && (
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-600">{T.waermeCoverage}</span>
                <span className="font-bold text-gray-900">{Math.min(heatCoverage, 100)}%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 rounded-full bg-blue-500 transition-all duration-500" style={{ width: `${Math.min(heatCoverage, 100)}%` }} />
              </div>
            </div>
          )}
        </div>
      )}

      <div className="mt-6 pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
        <Link href={formUrl} className="flex-1 text-center py-3.5 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity"
          style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
          {T.ctaOfferte}
        </Link>
        <Link href={T.ctaKostenHref} className="flex-1 text-center py-3.5 rounded-full font-bold text-gray-700 text-sm border border-gray-200 hover:border-[#F97316] hover:text-[#F97316] transition-colors">
          {T.ctaKosten}
        </Link>
      </div>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-4 py-5 text-left">
        <span className="font-bold text-gray-900 text-sm sm:text-base">{q}</span>
        <ChevronDown className={`w-5 h-5 text-[#F97316] flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <p className="pb-5 text-gray-500 text-sm leading-relaxed">{a}</p>}
    </div>
  );
}

export default function WieFunktioniertInteractive() {
  const pathname = usePathname();
  const locale = getLocale(pathname);
  const [activeStep, setActiveStep] = useState(0);

  const steps = locale === 'it' ? stepsIT : locale === 'fr' ? stepsFR : stepsDE;
  const komponenten = locale === 'it' ? komponentenIT : locale === 'fr' ? komponentenFR : komponentenDE;
  const faqs = locale === 'it' ? faqsIT : locale === 'fr' ? faqsFR : faqsDE;
  const quickFacts = locale === 'it' ? quickFactsIT : locale === 'fr' ? quickFactsFR : quickFactsDE;
  const T = locale === 'it' ? textsIT : locale === 'fr' ? textsFR : textsDE;

  return (
    <>
      <section className="py-16 border-t border-gray-100">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-2">{T.stepByStep}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10">{T.howTitle}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-3">
              {steps.map((step, i) => {
                const Icon = step.icon;
                const isActive = activeStep === i;
                return (
                  <button key={i} onClick={() => setActiveStep(i)}
                    className={`w-full text-left rounded-2xl p-5 border transition-all duration-200 ${isActive ? 'border-transparent shadow-md' : 'border-gray-100 bg-white hover:border-gray-200'}`}
                    style={isActive ? { background: step.bg, borderColor: step.color + '40' } : {}}>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all"
                        style={{ background: isActive ? step.color : '#f3f4f6' }}>
                        <Icon className="w-5 h-5" style={{ color: isActive ? 'white' : '#9ca3af' }} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-bold uppercase tracking-wider" style={{ color: isActive ? step.color : '#9ca3af' }}>
                            {T.stepLabel} {step.num}
                          </span>
                        </div>
                        <p className="font-bold text-gray-900 text-sm sm:text-base">{step.title}</p>
                        {isActive && <p className="text-gray-500 text-sm mt-2 leading-relaxed">{step.body}</p>}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
            <div className="sticky top-28">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100" style={{ background: steps[activeStep].bg }}>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: steps[activeStep].color }}>
                      {(() => { const Icon = steps[activeStep].icon; return <Icon className="w-6 h-6 text-white" />; })()}
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest" style={{ color: steps[activeStep].color }}>
                        {T.stepLabel} {steps[activeStep].num}
                      </p>
                      <p className="font-bold text-gray-900">{steps[activeStep].title}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">{steps[activeStep].body}</p>
                  <div className="flex gap-1">
                    {steps.map((_, i) => (
                      <button key={i} onClick={() => setActiveStep(i)}
                        className="h-1.5 rounded-full transition-all duration-300"
                        style={{ width: activeStep === i ? 32 : 8, background: activeStep === i ? steps[activeStep].color : '#d1d5db' }}
                      />
                    ))}
                  </div>
                </div>
                {activeStep === 4 && (
                  <div className="border-t border-gray-100 bg-white/60 px-8 py-5">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-xl bg-white border border-gray-100 p-3 text-center">
                        <p className="text-xs text-gray-400 mb-0.5">{T.einspeisung}</p>
                        <p className="font-bold text-gray-900 text-sm">{T.einspeisungSub}</p>
                      </div>
                      <div className="rounded-xl bg-white border border-gray-100 p-3 text-center">
                        <p className="text-xs text-gray-400 mb-0.5">{T.speicher}</p>
                        <p className="font-bold text-gray-900 text-sm">{T.speicherSub}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-2">{T.components}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10">{T.componentsTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {komponenten.map((k) => (
              <div key={k.name} className="rounded-2xl bg-white border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-4xl mb-4 block">{k.icon}</span>
                <h3 className="font-bold text-gray-900 text-base mb-2">{k.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{k.desc}</p>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-orange-50 text-[#F97316]">{k.fact}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="rechner" className="py-16">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="max-w-3xl mx-auto">
            <ProductionCalc locale={locale} />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-2">{T.quickLabel}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10">{T.quickTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {quickFacts.map((item) => (
              <div key={item.q} className="rounded-2xl bg-white border border-gray-100 p-5 shadow-sm">
                <p className="font-bold text-gray-900 text-sm mb-2 flex items-start gap-2">
                  <span className="text-[#F97316] font-black flex-shrink-0">Q</span> {item.q}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed pl-5">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-2">{T.faqLabel}</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">{T.faqTitle}</h2>
            <div className="rounded-2xl border border-gray-100 shadow-sm bg-white px-6">
              {faqs.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
