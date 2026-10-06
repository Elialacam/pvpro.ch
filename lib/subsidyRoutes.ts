export const subsidyRoutes = {
  de: { federal: '/einmalverguetung', cantonal: '/kantonale-foerderung' },
  fr: { federal: '/fr/retribution-unique', cantonal: '/fr/subventions-cantonales' },
  en: { federal: '/en/federal-solar-subsidy', cantonal: '/en/cantonal-solar-subsidies' },
  it: { federal: '/it/remunerazione-unica', cantonal: '/it/incentivi-cantonali' },
} as const;
