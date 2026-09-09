export type FactsLocale = 'de' | 'it' | 'fr' | 'en';

export type NumericRange = Readonly<{
  min: number;
  max: number;
}>;

export const ECONOMIC_FACTS = {
  systemCosts: {
    perKwp: { min: 1_800, max: 3_000 },
    bySize: {
      5: { min: 12_000, max: 15_000 },
      8: { min: 17_000, max: 21_000 },
      10: { min: 19_000, max: 24_000 },
      15: { min: 27_000, max: 34_000 },
    },
  },
  storageCosts: {
    byCapacity: {
      5: { min: 3_500, max: 5_000 },
      10: { min: 5_500, max: 7_500 },
      15: { min: 7_500, max: 9_500 },
      20: { min: 9_500, max: 12_000 },
    },
    retrofitHybridInverter: { min: 1_500, max: 3_000 },
    paybackYears: { min: 10, max: 14 },
  },
  incentives: {
    pronovoPerKwpUpTo30: 360,
    pronovoPerKwpOver30: 300,
    tenKwpApprox: 3_600,
    federalSharePercent: { min: 15, max: 20 },
    combinedMaxPercent: 40,
    zurichStoragePerKwh: 500,
    zurichStorageMaximum: 15_000,
  },
  production: {
    plateauKwhPerKwp: { min: 950, max: 1_000 },
    ticinoValaisKwhPerKwp: { min: 1_050, max: 1_100 },
  },
  selfConsumptionPercent: {
    withoutStorage: { min: 25, max: 35 },
    withStorage: { min: 60, max: 80 },
  },
  roofAreaM2PerKwp: 6.5,
  electricityMedianCtPerKwh: 27.7,
  feedInCtPerKwh: { min: 4, max: 15 },
  systemPaybackYears: {
    plateau: { min: 9, max: 13 },
    ticinoValais: { min: 7, max: 11 },
  },
  moduleLifetimeYears: { min: 25, max: 30 },
  performanceWarranty: { percent: 80, afterYears: 25 },
  cantonElectricityCtPerKwh: {
    BS: 33.3, SH: 32.2, VD: 31.7, BL: 31.0, GL: 30.9, SG: 29.9,
    TG: 29.2, NE: 29.2, GR: 29.2, SO: 29.1, AR: 28.7, BE: 28.0,
    AI: 27.6, JU: 27.4, AG: 27.3, FR: 27.3, VS: 26.8, OW: 26.5,
    SZ: 25.3, UR: 25.1, LU: 25.0, GE: 24.9, TI: 24.8, ZH: 24.7,
    ZG: 23.0, NW: 22.1,
  },
} as const;

export const SOURCE_NOTES: Record<FactsLocale, string> = {
  de: 'Richtwerte, Stand September 2026. Quellen: Pronovo, ElCom, Swissolar.',
  it: 'Valori indicativi, aggiornato settembre 2026. Fonti: Pronovo, ElCom, Swissolar.',
  fr: 'Valeurs indicatives, mise à jour septembre 2026. Sources : Pronovo, ElCom, Swissolar.',
  en: 'Indicative values, updated September 2026. Sources: Pronovo, ElCom, Swissolar.',
};

export const SYSTEM_PRICE_NOTES: Record<FactsLocale, string> = {
  de: 'Preise unabhängiger Installateure, schlüsselfertig inkl. Montage und MwSt., ohne Batteriespeicher. Lokale Elektrizitätswerke liegen in der Regel höher.',
  it: 'Prezzi di installatori indipendenti, chiavi in mano con montaggio e IVA, senza accumulo. Le aziende elettriche locali applicano di regola prezzi più alti.',
  fr: 'Prix d’installateurs indépendants, clés en main avec pose et TVA, sans stockage. Les entreprises électriques locales pratiquent généralement des prix plus élevés.',
  en: 'Prices from independent installers, turnkey including installation and VAT, without battery storage. Local electricity utilities generally charge more.',
};

export const STORAGE_PRICE_NOTES: Record<FactsLocale, string> = {
  de: "Preise inkl. Installation und Inbetriebnahme. Wird der Speicher später nachgerüstet und fehlt ein Hybrid-Wechselrichter, kommen 1'500 bis 3'000 CHF dazu.",
  it: "Prezzi con installazione e messa in servizio comprese. Se l’accumulo viene aggiunto in un secondo momento e manca un inverter ibrido, si aggiungono da 1'500 a 3'000 CHF.",
  fr: "Prix comprenant l’installation et la mise en service. Si le stockage est ajouté ultérieurement sans onduleur hybride, il faut compter 1'500 à 3'000 CHF de plus.",
  en: "Prices include installation and commissioning. If storage is added later without a hybrid inverter, an additional CHF 1'500 to CHF 3'000 applies.",
};

export const ELECTRICITY_TARIFF_NOTES: Record<FactsLocale, string> = {
  de: 'Quelle: ElCom 2026',
  it: 'Fonte: ElCom 2026',
  fr: 'Source : ElCom 2026',
  en: 'Source: ElCom 2026',
};

export function formatSwissNumber(value: number, maximumFractionDigits = 1): string {
  const [integer, fraction] = value.toFixed(maximumFractionDigits).split('.');
  const grouped = integer.replace(/\B(?=(\d{3})+(?!\d))/g, "'");
  if (!fraction || Number(fraction) === 0) return grouped;
  return `${grouped}.${fraction.replace(/0+$/, '')}`;
}

export function formatChf(value: number): string {
  return `${formatSwissNumber(value, 0)} CHF`;
}

export function formatRange(range: NumericRange, unit: string): string {
  return `${formatSwissNumber(range.min)}–${formatSwissNumber(range.max)} ${unit}`;
}

export function formatChfForLocale(value: number, locale: FactsLocale): string {
  const amount = formatSwissNumber(value, 0);
  return locale === 'en' ? `CHF ${amount}` : `${amount} CHF`;
}

export function formatRangeForLocale(
  range: NumericRange,
  unit: string,
  locale: FactsLocale,
): string {
  const start = formatSwissNumber(range.min);
  const end = formatSwissNumber(range.max);
  if (locale === 'de') return `${start} bis ${end} ${unit}`;
  if (locale === 'it') return `da ${start} a ${end} ${unit}`;
  if (locale === 'fr') return `de ${start} à ${end} ${unit}`;
  return `${start} to ${end} ${unit}`;
}

export function getSourceNote(locale: FactsLocale): string {
  return SOURCE_NOTES[locale];
}

export function getSystemCostRange(kwp: number): NumericRange {
  const exact = ECONOMIC_FACTS.systemCosts.bySize[
    kwp as keyof typeof ECONOMIC_FACTS.systemCosts.bySize
  ];
  if (exact) return exact;
  return {
    min: Math.round(kwp * ECONOMIC_FACTS.systemCosts.perKwp.min),
    max: Math.round(kwp * ECONOMIC_FACTS.systemCosts.perKwp.max),
  };
}

export function getPronovoRate(kwp: number): number {
  return kwp <= 30
    ? ECONOMIC_FACTS.incentives.pronovoPerKwpUpTo30
    : ECONOMIC_FACTS.incentives.pronovoPerKwpOver30;
}

export function calculatePronovoVariableContribution(kwp: number): number {
  const lowerTierKwp = Math.min(Math.max(kwp, 0), 30);
  const upperTierKwp = Math.max(kwp - 30, 0);
  return Math.round(
    lowerTierKwp * ECONOMIC_FACTS.incentives.pronovoPerKwpUpTo30
    + upperTierKwp * ECONOMIC_FACTS.incentives.pronovoPerKwpOver30,
  );
}

export function calculateAnnualSolarValueRange(
  annualProductionKwh: number,
  annualConsumptionKwh: number,
  selfConsumptionRange: NumericRange = ECONOMIC_FACTS.selfConsumptionPercent.withoutStorage,
): NumericRange {
  const calculateValue = (selfConsumptionPercent: number, feedInCtPerKwh: number): number => {
    const selfConsumedKwh = Math.min(
      annualConsumptionKwh,
      annualProductionKwh * selfConsumptionPercent / 100,
    );
    const exportedKwh = Math.max(annualProductionKwh - selfConsumedKwh, 0);
    return Math.round(
      selfConsumedKwh * ECONOMIC_FACTS.electricityMedianCtPerKwh / 100
      + exportedKwh * feedInCtPerKwh / 100,
    );
  };

  return {
    min: calculateValue(selfConsumptionRange.min, ECONOMIC_FACTS.feedInCtPerKwh.min),
    max: calculateValue(selfConsumptionRange.max, ECONOMIC_FACTS.feedInCtPerKwh.max),
  };
}