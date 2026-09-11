/**
 * Zurich incentive records kept separate by payer and programme.
 *
 * The municipal PV figures are maximum total contributions: the amount shown
 * already includes the federal Pronovo contribution. They must not be added
 * to a separately calculated Pronovo amount.
 */

export type ZurichJurisdiction = 'federal' | 'canton' | 'municipality' | 'utility';

export type ZurichAmountType =
  | 'none'
  | 'calculated'
  | 'fixed'
  | 'per_kWp'
  | 'per_kWh'
  | 'fixed_plus_per_kWh'
  | 'tiered_per_kWp';

export type ZurichFederalRelation =
  | 'inclusive'
  | 'additive'
  | 'alternative'
  | 'unrelated'
  | 'unknown';

export type ZurichApplicationTiming =
  | 'before_work'
  | 'after_commissioning'
  | 'before_or_after'
  | 'not_applicable'
  | 'verify';

export type ZurichRecordStatus = 'current' | 'exhausted' | 'announced_not_final';

export interface ZurichIncentiveRecord {
  readonly jurisdiction: ZurichJurisdiction;
  readonly jurisdiction_name: string;
  readonly program_name: string;
  readonly amount_type: ZurichAmountType;
  readonly amount: number | Readonly<Record<string, number>> | null;
  readonly unit: string;
  readonly effective_from: string;
  readonly effective_to: string | null;
  readonly federal_relation: ZurichFederalRelation;
  readonly eligibility: string;
  readonly timing: ZurichApplicationTiming;
  readonly source_url: string;
  readonly source_checked_at: string;
  readonly status: ZurichRecordStatus;
  readonly notes: string;
}

export const ZURICH_INCENTIVE_SOURCE_CHECKED_AT = '2026-09-11';

export const ZURICH_INCENTIVES = {
  pronovo: {
    jurisdiction: 'federal',
    jurisdiction_name: 'Confederation / Pronovo',
    program_name: 'Einmalvergütung (EIV; KLEIV/GREIV/HEIV according to eligibility)',
    amount_type: 'calculated',
    amount: null,
    unit: 'calculated by Pronovo',
    effective_from: '2026-01-01',
    effective_to: null,
    federal_relation: 'unknown',
    eligibility:
      'Eligible photovoltaic installations are assessed by Pronovo according to commissioning date, capacity, installation type and applicable bonuses.',
    timing: 'after_commissioning',
    source_url: 'https://pronovo.ch/',
    source_checked_at: ZURICH_INCENTIVE_SOURCE_CHECKED_AT,
    status: 'current',
    notes:
      'Do not turn the federal EIV into a universal percentage or universal CHF/kWp formula. Use the current Pronovo calculation and decision.',
  },
  cantonOrdinary: {
    jurisdiction: 'canton',
    jurisdiction_name: 'Kanton Zürich',
    program_name: 'Ordentliches Energie-Förderprogramm 2026',
    amount_type: 'none',
    amount: null,
    unit: 'no general domestic PV/storage amount',
    effective_from: '2026-01-01',
    effective_to: null,
    federal_relation: 'unrelated',
    eligibility:
      'The ordinary cantonal programme does not provide a general grant for ordinary private photovoltaic systems or domestic battery storage. Other building and energy measures have separate conditions.',
    timing: 'verify',
    source_url:
      'https://www.zh.ch/de/news-uebersicht/mitteilungen/2025/umwelt-tiere/energie/foerderprogramm-energie-geht-2026-unveraendert-weiter.html',
    source_checked_at: ZURICH_INCENTIVE_SOURCE_CHECKED_AT,
    status: 'current',
    notes:
      'Municipal programmes and sector-specific cantonal programmes must not be placed in this ordinary cantonal record.',
  },
  cantonAgriculturalBattery: {
    jurisdiction: 'canton',
    jurisdiction_name: 'Kanton Zürich – Landwirtschaft',
    program_name: 'Investitionshilfe Batteriespeicher Landwirtschaft 2026',
    amount_type: 'fixed',
    amount: 200_000,
    unit: 'CHF total programme budget',
    effective_from: '2026-01-01',
    effective_to: '2026-12-31',
    federal_relation: 'unrelated',
    eligibility:
      'Agricultural investment-aid projects only; this is not a domestic or ordinary private battery grant.',
    timing: 'before_work',
    source_url:
      'https://www.zh.ch/de/planen-bauen/bauvorschriften/bauen-an-besonderer-lage/bauen-ausserhalb-von-bauzonen/inhalt/landwirtschaftliche-bauten/investitionshilfen.html',
    source_checked_at: ZURICH_INCENTIVE_SOURCE_CHECKED_AT,
    status: 'exhausted',
    notes:
      'The official page states that the 2026 battery-storage funds are already exhausted and no further batteries can be subsidised.',
  },
  cityPv: {
    jurisdiction: 'municipality',
    jurisdiction_name: 'Stadt Zürich',
    program_name: 'PV-Förderung Stadt Zürich / ewz',
    amount_type: 'tiered_per_kWp',
    amount: {
      baseChf: 5_000,
      upTo30KwpChfPerKwp: 450,
      from30To100KwpChfPerAdditionalKwp: 350,
      above100KwpChfPerAdditionalKwp: 310,
      permittedExistingBuildingAdditionalChf: 3_000,
    },
    unit: 'maximum total CHF, city including Pronovo',
    effective_from: '2026-08-01',
    effective_to: null,
    federal_relation: 'inclusive',
    eligibility:
      'PV installations in the City of Zurich; the legally required minimum output for new builds is not eligible. The CHF 3,000 supplement is for permit-required PV installations on existing buildings.',
    timing: 'before_work',
    source_url: 'https://www.stadt-zuerich.ch/de/umwelt-und-energie/energie/foerdergelder.html',
    source_checked_at: ZURICH_INCENTIVE_SOURCE_CHECKED_AT,
    status: 'current',
    notes:
      'The maximum total already includes Pronovo. Submit the city and federal applications separately, but never add a separate Pronovo estimate to these city maximums.',
  },
  cityBattery: {
    jurisdiction: 'municipality',
    jurisdiction_name: 'Stadt Zürich',
    program_name: 'Stationäre Batteriespeicherförderung Stadt Zürich / ewz',
    amount_type: 'fixed_plus_per_kWh',
    amount: {
      baseChf: 1_000,
      chfPerKwh: 100,
      secondLifeChfPerKwh: 100,
      minimumKwh: 3,
      maximumKwh: 100,
      maximumKwhPerInstalledKw: 1.5,
    },
    unit: 'CHF per stationary storage installation',
    effective_from: '2026-08-01',
    effective_to: null,
    federal_relation: 'unrelated',
    eligibility:
      'Stationary storage of at least 3 kWh, operated with a PV generation system behind the same connection, a grid-compatible energy-management system and no lead batteries.',
    timing: 'before_work',
    source_url: 'https://www.stadt-zuerich.ch/de/umwelt-und-energie/energie/foerdergelder.html',
    source_checked_at: ZURICH_INCENTIVE_SOURCE_CHECKED_AT,
    status: 'current',
    notes:
      'Eligible capacity is capped at 1.5 kWh per installed kW of renewable generation and 100 kWh per storage installation. The programme also requires at least six years of operation.',
  },
  ewzFeedIn: {
    jurisdiction: 'utility',
    jurisdiction_name: 'ewz / Stadt Zürich',
    program_name: 'EEA/VVRE Rückliefervergütung 2026',
    amount_type: 'calculated',
    amount: {
      announcedAverageRpPerKwh: 12.91,
      announcedSolarquartierRpPerKwh: 14,
    },
    unit: 'announced Rp./kWh',
    effective_from: '2026-01-01',
    effective_to: null,
    federal_relation: 'unrelated',
    eligibility:
      'Solar producers feeding electricity into the ewz distribution network or participating in ewz.solarquartier, subject to the applicable final utility tariff.',
    timing: 'verify',
    source_url:
      'https://www.stadt-zuerich.ch/de/aktuell/medienmitteilungen/2025/12/ewz-treibt-den-solar-ausbau-voran-und-staerkt-die-rahmenbedingungen.html',
    source_checked_at: ZURICH_INCENTIVE_SOURCE_CHECKED_AT,
    status: 'announced_not_final',
    notes:
      'The Stadtrat announcement gives an average of 12.91 Rp./kWh and 14 Rp./kWh for ewz.solarquartier, but the official ewz tariff page still states the 2026 schedule is subject to Gemeinderat approval. Do not present either number as a definitive current tariff until the final VVRE/EEA tariff is published.',
  },
} as const satisfies Record<string, ZurichIncentiveRecord>;

export type ZurichIncentiveId = keyof typeof ZURICH_INCENTIVES;

export const ZURICH_INCENTIVE_SOURCES = {
  cityFunding:
    'https://www.stadt-zuerich.ch/de/umwelt-und-energie/energie/foerdergelder.html',
  cityAnnouncement:
    'https://www.stadt-zuerich.ch/de/aktuell/medienmitteilungen/2026/06/stadt-zuerich-erhoeht-beitraege-fuer-pv-anlagen-und-foerdert-batteriespeicher.html',
  ewzCurrentRates:
    'https://www.ewz.ch/de/private/solaranlagen/verrechnungsloesungen/stromruecklieferung.html',
  ewzAnnouncement:
    'https://www.stadt-zuerich.ch/de/aktuell/medienmitteilungen/2025/12/ewz-treibt-den-solar-ausbau-voran-und-staerkt-die-rahmenbedingungen.html',
  cantonEnergy:
    'https://www.zh.ch/de/news-uebersicht/mitteilungen/2025/umwelt-tiere/energie/foerderprogramm-energie-geht-2026-unveraendert-weiter.html',
  cantonAgriculture:
    'https://www.zh.ch/de/planen-bauen/bauvorschriften/bauen-an-besonderer-lage/bauen-ausserhalb-von-bauzonen/inhalt/landwirtschaftliche-bauten/investitionshilfen.html',
  pronovo: 'https://pronovo.ch/',
} as const;