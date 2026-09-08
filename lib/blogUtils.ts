import type { BlogArticle } from './blogArticles';

export type BlogLocale = 'de' | 'it' | 'fr' | 'en';

const months: Record<BlogLocale, Record<string, number>> = {
  de: { januar: 0, februar: 1, märz: 2, april: 3, mai: 4, juni: 5, juli: 6, august: 7, september: 8, oktober: 9, november: 10, dezember: 11 },
  it: { gennaio: 0, febbraio: 1, marzo: 2, aprile: 3, maggio: 4, giugno: 5, luglio: 6, agosto: 7, settembre: 8, ottobre: 9, novembre: 10, dicembre: 11 },
  fr: { janvier: 0, février: 1, mars: 2, avril: 3, mai: 4, juin: 5, juillet: 6, août: 7, septembre: 8, octobre: 9, novembre: 10, décembre: 11 },
  en: { january: 0, february: 1, march: 2, april: 3, may: 4, june: 5, july: 6, august: 7, september: 8, october: 9, november: 10, december: 11 },
};

/** Deterministically converts the already displayed, localized article date to ISO. */
export function localizedDateToIso(date: string, locale: BlogLocale): string {
  const normalized = date.trim().toLocaleLowerCase(locale).replace(',', '');
  let match = normalized.match(/^(\d{1,2})\.?\s+([\p{L}]+)\s+(\d{4})$/u);
  if (match) {
    const month = months[locale][match[2]];
    if (month !== undefined) return `${match[3]}-${String(month + 1).padStart(2, '0')}-${match[1].padStart(2, '0')}`;
  }
  match = normalized.match(/^([\p{L}]+)\s+(\d{1,2})\s+(\d{4})$/u);
  if (match) {
    const month = months[locale][match[1]];
    if (month !== undefined) return `${match[3]}-${String(month + 1).padStart(2, '0')}-${match[2].padStart(2, '0')}`;
  }
  throw new Error(`Cannot parse localized article date: ${date}`);
}

export function articleDates(article: Pick<BlogArticle, 'date' | 'locale' | 'publishedAt' | 'modifiedAt'>) {
  const publishedAt = article.publishedAt ?? localizedDateToIso(article.date, article.locale);
  return { publishedAt, modifiedAt: article.modifiedAt ?? publishedAt };
}

export function sanitizeFaqs<T extends { question?: string; answer?: string; q?: string; a?: string }>(faqs: T[]) {
  return faqs
    .map((faq) => ({ question: (faq.question ?? faq.q ?? '').trim(), answer: (faq.answer ?? faq.a ?? '').trim() }))
    .filter((faq) => faq.question.length > 0 && faq.answer.length > 0);
}

export function countVisibleWords(text: string): number {
  // Unicode letters/numbers, allowing apostrophes inside words (l'électricité, don't).
  return text.match(/[\p{L}\p{N}]+(?:['’][\p{L}\p{N}]+)*/gu)?.length ?? 0;
}

export function articleReadingMinutes(article: BlogArticle): number {
  const text = [
    article.title,
    article.intro,
    ...article.sections.flatMap((section) => [
      section.heading,
      ...section.content,
      ...(section.bullets ?? []),
      ...(section.stats ?? []).flatMap((stat) => [stat.label, stat.value]),
      section.highlight ?? '',
    ]),
    ...sanitizeFaqs(article.faqs).flatMap((faq) => [faq.question, faq.answer]),
  ].join(' ');
  return Math.max(1, Math.round(countVisibleWords(text) / 200));
}

export const BLOG_ORIGIN = 'https://www.pvpro.ch';
export const AUTHOR_IMAGE_PATH: string | null = null;

export function authorDetails(locale: BlogLocale) {
  const content = {
    de: { role: 'Gründer PVPro.ch', bio: "Elia Alacam hat PVPro.ch in Lugano gegründet. Er hat seither über 1'000 Offertenanfragen an Schweizer Solarbetriebe vermittelt und schreibt hier über Kosten, Förderung und Offerten.", href: '/ueber-uns', label: 'Über Elia Alacam' },
    it: { role: 'Fondatore di PVPro.ch', bio: "Elia Alacam ha fondato PVPro.ch a Lugano. Da allora ha trasmesso oltre 1'000 richieste di preventivo a ditte solari svizzere e qui scrive di costi, incentivi e preventivi.", href: '/it/chi-siamo', label: 'Su Elia Alacam' },
    fr: { role: 'Fondateur de PVPro.ch', bio: 'Elia Alacam a fondé PVPro.ch à Lugano. Depuis, il a transmis plus de 1\'000 demandes d\'offres à des entreprises solaires suisses et écrit ici sur les coûts, les subventions et les offres.', href: '/fr/a-propos', label: 'À propos d’Elia Alacam' },
    en: { role: 'Founder of PVPro.ch', bio: 'Elia Alacam founded PVPro.ch in Lugano. Since then, he has connected more than 1,000 quote requests with Swiss solar companies and writes here about costs, incentives and quotes.', href: '/en/about-us', label: 'About Elia Alacam' },
  };
  return content[locale];
}