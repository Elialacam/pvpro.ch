import type { Metadata } from 'next';
import { cities } from '@/lib/cities';
import { seoRouteGroup } from '@/lib/seoRoutes';

const SITE_URL = 'https://www.pvpro.ch';

const ogLocales = {
  de: 'de_CH',
  it: 'it_CH',
  fr: 'fr_CH',
  en: 'en_CH',
} as const;

type PageLocale = keyof typeof ogLocales;
type PageType = 'website' | 'article';

interface PageMetadataOptions {
  path: string;
  locale: PageLocale;
  type?: PageType;
}

function normalizePath(path: string): string {
  const withLeadingSlash = path.startsWith('/') ? path : `/${path}`;
  if (withLeadingSlash === '/') return '/';
  return withLeadingSlash.replace(/\/+$/, '');
}

function titleText(title: Metadata['title']): string {
  if (typeof title === 'string') return title;
  if (title && typeof title === 'object') {
    if ('absolute' in title && title.absolute) return title.absolute;
    if ('default' in title && title.default) return title.default;
  }
  return 'PvPro.ch';
}

const TITLE_SUFFIX = ' | PvPro.ch';

// These are editorial, route-specific titles rather than shortened strings.
// Keep the brand out of the entries: brandedTitle appends it exactly once.
const editorialTitles: Record<string, string> = {
  '/balkonkraftwerk': 'Balkonkraftwerk Schweiz: Ratgeber für Balkone',
  '/bewilligungspflicht-solaranlage-schweiz': 'Solaranlage: Bewilligung in der Schweiz',
  '/foerderungen-kanton-zuerich': 'Solarförderung im Kanton Zürich 2026',
  '/photovoltaik-installation-schweiz': 'PV-Installation Schweiz: Ablauf und Kosten',
  '/photovoltaik-komplettloesung-schweiz': 'PV-Komplettlösung Schweiz im Überblick',
  '/photovoltaik-kosten-pro-m2': 'Photovoltaik-Kosten pro m² in der Schweiz',
  '/photovoltaik-schweizer-klima': 'Photovoltaik fürs Schweizer Klima',
  '/photovoltaik-wartung-kosten': 'PV-Wartung in der Schweiz: Kosten',
  '/pv-kosten': 'PV-Kosten pro m²: Schweiz im Überblick',
  '/solaranlage-biel': 'Solaranlage Biel/Bienne: Offerten 2026',
  '/solaranlage-einfamilienhaus': 'Solaranlage fürs Einfamilienhaus',
  '/solaranlage-freiburg': 'Solaranlage im Kanton Freiburg',
  '/solaranlage-installieren-schweiz': 'Solaranlage installieren in der Schweiz',
  '/solaranlage-kosten': 'Solaranlage: Kosten in der Schweiz',
  '/solaranlage-mehrfamilienhaus': 'Solaranlage fürs Mehrfamilienhaus',
  '/solaranlage-mit-speicher': 'Solaranlage mit Speicher in der Schweiz',
  '/solaranlagen-typen-vergleich': 'Solaranlagen-Typen im Vergleich',
  '/solaranlage-offerte-einholen': 'Solarofferte in der Schweiz einholen',
  '/solaranlage-wallis': 'Solaranlage im Kanton Wallis',
  '/solarrechner': 'Solarrechner für die Schweiz',
  '/vergleichsportal-photovoltaik-schweiz': 'Photovoltaik-Anbieter vergleichen',
  '/wie-es-funktioniert': 'Solarofferten in drei Schritten',
  '/wie-funktioniert': 'Wie funktioniert eine Solaranlage?',
  '/en/balcony-power-station': 'Balcony solar power in Switzerland',
  '/en/complete-solar-solution-switzerland': 'Complete solar solutions in Switzerland',
  '/en/get-solar-panel-quotes': 'Get solar panel quotes in Switzerland',
  '/en/how-solar-works': 'How solar installations work in Switzerland',
  '/en/solar-apartment-building': 'Solar for Swiss apartment buildings',
  '/en/solar-calculator': 'Solar calculator for Switzerland',
  '/en/solar-comparison-portal-switzerland': 'Compare Swiss solar providers',
  '/en/solar-cost-per-m2': 'Solar costs per m² in Switzerland',
  '/en/solar-detached-house': 'Solar for Swiss detached houses',
  '/en/solar-panel-costs': 'Solar panel costs in Switzerland',
  '/en/solar-panel-installation-process-switzerland': 'Solar installation process in Switzerland',
  '/en/solar-panel-installation-switzerland': 'Solar panel installation in Switzerland',
  '/en/solar-panel-maintenance-costs': 'Solar panel maintenance costs in Switzerland',
  '/en/solar-panels-swiss-climate': 'Solar panels for the Swiss climate',
  '/en/solar-panel-types-comparison': 'Solar panel types compared',
  '/en/solar-subsidies-canton-zurich': 'Solar subsidies in Canton Zurich',
  '/en/solar-with-battery': 'Solar power with battery storage',
  '/fr/calculateur-solaire': 'Calculateur solaire pour la Suisse',
  '/fr/centrale-balcon': 'Centrale solaire de balcon en Suisse',
  '/fr/comparaison-types-panneaux-solaires': 'Types de panneaux solaires comparés',
  '/fr/comparateur-photovoltaique-suisse': 'Comparer les installateurs solaires suisses',
  '/fr/cout-installation-solaire': 'Coût d’une installation solaire en Suisse',
  '/fr/cout-pv-par-m2': 'Coût photovoltaïque au m² en Suisse',
  '/fr/demander-offre-panneau-solaire': 'Demander une offre solaire en Suisse',
  '/fr/entretien-photovoltaique-couts': 'Coûts d’entretien photovoltaïque',
  '/fr/fonctionnement-solaire': 'Fonctionnement d’une installation solaire',
  '/fr/installation-photovoltaique-suisse': 'Installation photovoltaïque en Suisse',
  '/fr/installer-panneau-solaire-suisse': 'Installer des panneaux solaires en Suisse',
  '/fr': 'Comparer trois offres solaires suisses',
  '/fr/photovoltaique-climat-suisse': 'Photovoltaïque et climat suisse',
  '/fr/solaire-avec-batterie': 'Solaire avec batterie en Suisse',
  '/fr/solaire-bienne': 'Solaire à Biel/Bienne: offres 2026',
  '/fr/solaire-fribourg': 'Solaire dans le canton de Fribourg',
  '/fr/solaire-immeuble': 'Solaire pour immeuble en Suisse',
  '/fr/solaire-maison-individuelle': 'Solaire pour maison individuelle',
  '/fr/solution-complete-photovoltaique-suisse': 'Solution photovoltaïque complète',
  '/fr/subventions-solaires-canton-zurich': 'Subventions solaires à Zurich',
  '/it/calcolatore-solare': 'Calcolatore solare per la Svizzera',
  '/it/centrale-balcone': 'Centrale solare da balcone in Svizzera',
  '/it/come-funziona-solare': 'Come funziona un impianto solare?',
  '/it/comparatore-fotovoltaico-svizzera': 'Confrontare fornitori solari svizzeri',
  '/it/confronto-tipi-impianti-solari': 'Tipi di impianti solari a confronto',
  '/it/costi-impianto-solare': 'Costi di un impianto solare in Svizzera',
  '/it/costo-fv-per-m2': 'Costo fotovoltaico al m² in Svizzera',
  '/it/fotovoltaico-clima-svizzero': 'Fotovoltaico per il clima svizzero',
  '/it/fotovoltaico-ticino': 'Fotovoltaico in Ticino: incentivi 2026',
  '/it/incentivi-solari-cantone-zurigo': 'Incentivi solari nel Cantone di Zurigo',
  '/it/installare-impianto-solare-svizzera': 'Installare il solare in Svizzera',
  '/it/manutenzione-fotovoltaico-costi': 'Costi di manutenzione fotovoltaica',
  '/it/processo-installazione-fotovoltaico-svizzera': 'Installazione FV in Svizzera: fasi',
  '/it/richiedere-preventivo-solare': 'Richiedere preventivi solari in Svizzera',
  '/it/solare-casa-unifamiliare': 'Solare per case unifamiliari svizzere',
  '/it/solare-con-accumulo': 'Solare con accumulo in Svizzera',
  '/it/solare-condominio': 'Solare per condomini in Svizzera',
  '/it/soluzione-completa-fotovoltaico-svizzera': 'Soluzione FV completa in Svizzera',
};

const editorialDescriptions: Record<string, string> = {
  '/balkonkraftwerk': 'Erfahren Sie alles über Kosten, Anmeldung und Regeln für Balkonkraftwerke in der Schweiz.',
  '/danke': 'Vielen Dank, Ihre Anfrage wurde erfolgreich an PvPro.ch übermittelt.',
  '/foerderungen': 'Informieren Sie sich über EIV, kantonale Förderprogramme und Steuerabzüge für Solaranlagen in der Schweiz.',
  '/photovoltaik-installation-schweiz': 'Erfahren Sie, wie eine Photovoltaikanlage in der Schweiz installiert wird und welche Kosten dabei entstehen.',
  '/photovoltaik-kosten-pro-m2': 'Erfahren Sie, was Photovoltaik pro m² in der Schweiz kostet und wie sich der Preis pro kWp zusammensetzt.',
  '/pv-kosten': 'Erfahren Sie, was Photovoltaik pro m² in der Schweiz kostet und wie sich der Preis pro kWp zusammensetzt.',
  '/solaranlage-einfamilienhaus': 'Erfahren Sie Kosten, Grösse, Förderungen und Vorteile einer Solaranlage für Ihr Einfamilienhaus.',
  '/solaranlage-mehrfamilienhaus': 'Erfahren Sie Kosten, ZEV, Grösse und Wirtschaftlichkeit einer Solaranlage für ein Mehrfamilienhaus.',
  '/solaranlage-mit-speicher': 'Erfahren Sie Kosten, Vorteile, Speichergrösse und Eigenverbrauch einer Solaranlage mit Batteriespeicher.',
  '/solaranlage-wallis': 'Vergleichen Sie bis zu drei kostenlose Offerten für Ihre Solaranlage im sonnenreichen Kanton Wallis.',
  '/solaranlage-zurich': 'Vergleichen Sie bis zu drei kostenlose Offerten geprüfter Solarteure für Ihre Solaranlage in Zürich.',
  '/wie-es-funktioniert': 'Füllen Sie das Formular aus, erhalten Sie bis zu drei Offerten und wählen Sie den passenden Installateur.',
  '/wie-funktioniert': 'Erfahren Sie, wie eine Solaranlage Strom produziert und welche Komponenten dabei zusammenwirken.',
  '/bewilligungspflicht-solaranlage-schweiz': 'Erfahren Sie, wann eine Solaranlage in der Schweiz bewilligungspflichtig ist und welche Regeln in Ihrem Kanton gelten.',
  '/foerderungen-kanton-zuerich': 'Erfahren Sie, welche Solar-Förderungen, Beiträge und Pflichten 2026 im Kanton Zürich für Ihre Anlage gelten.',
  '/photovoltaik-komplettloesung-schweiz': 'Entdecken Sie Schweizer PV-Komplettlösungen mit Modulen, Speicher, Wärmepumpe und Installation aus einer Hand.',
  '/photovoltaik-schweizer-klima': 'Erfahren Sie, welche Photovoltaikmodule bei Schnee, Kälte und Nebel im Schweizer Klima besonders gut funktionieren.',
  '/photovoltaik-wartung-kosten': 'Erfahren Sie, welche Kosten für Reinigung, Inspektion und Reparaturen einer Photovoltaikanlage in der Schweiz entstehen.',
  '/solaranlage-biel': 'Vergleichen Sie bis zu drei Offerten für Ihre Solaranlage in Biel/Bienne und informieren Sie sich über lokale Förderungen.',
  '/solaranlage-freiburg': 'Vergleichen Sie bis zu drei Offerten für Ihre Solaranlage im Kanton Freiburg und erfahren Sie mehr über Förderungen.',
  '/solaranlage-installieren-schweiz': 'Finden Sie zertifizierte Solarinstallateure in Ihrem Kanton und vergleichen Sie kostenlose Offerten für Ihre Anlage.',
  '/solaranlage-kosten': 'Erfahren Sie, was eine Solaranlage in der Schweiz kostet und wie Förderungen und Speicher den Preis beeinflussen.',
  '/solaranlagen-typen-vergleich': 'Vergleichen Sie monokristalline, polykristalline, Dünnschicht- und bifaziale Solaranlagen für die Schweiz.',
  '/solaranlage-offerte-einholen': 'Fordern Sie bis zu drei kostenlose Offerten geprüfter Solarteure an und vergleichen Sie passende Lösungen.',
  '/solarrechner': 'Berechnen Sie Kosten, Ertrag und Amortisation Ihrer Solaranlage in der Schweiz mit unserem kostenlosen Solarrechner.',
  '/vergleichsportal-photovoltaik-schweiz': 'Vergleichen Sie geprüfte Schweizer Solarinstallateure, Offerten und Lösungen für Ihre Photovoltaikanlage.',
  '/en/balcony-power-station': 'Learn about costs, registration and legal requirements for balcony solar power systems in Switzerland.',
  '/en/complete-solar-solution-switzerland': 'Explore complete Swiss solar solutions with panels, storage, heat pumps and installation from one provider.',
  '/en/get-solar-panel-quotes': 'Request up to three free quotes from certified solar panel installers in your Swiss canton.',
  '/en/how-it-works': 'Complete one form, receive up to three certified quotes and choose the solar installer that suits you.',
  '/en/how-solar-works': 'Learn how a solar installation produces electricity and which components make the system work.',
  '/en/solar-apartment-building': 'Learn about costs, ZEC, system size and profitability for solar installations on Swiss apartment buildings.',
  '/en/solar-cost-per-m2': 'Learn what solar power costs per m² in Switzerland and how the price per kWp is calculated.',
  '/en/solar-detached-house': 'Learn about costs, size, subsidies and benefits of a solar installation for a Swiss detached house.',
  '/en/solar-panel-installation-process-switzerland': 'Learn the steps, timing and costs involved in installing solar panels in Switzerland.',
  '/en/solar-panel-installation-switzerland': 'Find certified solar providers in your canton and compare free quotes for your Swiss installation.',
  '/en/solar-panel-maintenance-costs': 'Learn about cleaning, inspection and repair costs for solar panel maintenance in Switzerland.',
  '/en/solar-panels-swiss-climate': 'Find out which solar panels perform best in the Swiss climate of snow, cold and fog.',
  '/en/solar-subsidies-canton-zurich': 'Learn about solar subsidies, grants and obligations that apply in Canton Zurich in 2026.',
  '/en/solar-subsidies': 'Learn about one-time payments, cantonal programmes and tax deductions for Swiss solar installations.',
  '/en/solar-with-battery': 'Learn about the costs, benefits, storage size and self-consumption of solar power with a battery.',
  '/en/solar-calculator': 'Calculate the cost, yield and payback period of a solar installation in Switzerland with our free calculator.',
  '/en/solar-comparison-portal-switzerland': 'Compare certified Swiss solar providers, quotes and solutions for your photovoltaic installation.',
  '/en/solar-panel-costs': 'Find out what solar panels cost in Switzerland and how subsidies, system size and batteries affect the price.',
  '/en/solar-panel-types-comparison': 'Compare monocrystalline, polycrystalline, thin-film and bifacial solar panels for Swiss conditions.',
  '/fr/calculateur-solaire': 'Calculez le coût, le rendement et l’amortissement de votre installation solaire en Suisse avec notre outil gratuit.',
  '/fr/centrale-balcon': 'Découvrez les coûts, l’inscription et les règles applicables aux centrales solaires de balcon en Suisse.',
  '/fr/comment-ca-marche': 'Découvrez comment obtenir et comparer des offres d’installateurs solaires certifiés en Suisse en trois étapes.',
  '/fr/comparaison-types-panneaux-solaires': 'Comparez les panneaux monocristallins, polycristallins, à couche mince et bifaciaux pour la Suisse.',
  '/fr/comparateur-photovoltaique-suisse': 'Comparez les installateurs solaires suisses certifiés, leurs offres et les solutions photovoltaïques adaptées.',
  '/fr/cout-installation-solaire': 'Découvrez le coût d’une installation solaire en Suisse, les subventions disponibles et le prix d’une batterie.',
  '/fr/cout-pv-par-m2': 'Découvrez le coût du photovoltaïque au m² en Suisse et les facteurs qui influencent le prix par kWp.',
  '/fr/demander-offre-panneau-solaire': 'Demandez jusqu’à trois offres gratuites d’installateurs certifiés pour votre projet solaire en Suisse.',
  '/fr/entretien-photovoltaique-couts': 'Découvrez les coûts de nettoyage, d’inspection et de réparation d’une installation photovoltaïque en Suisse.',
  '/fr/fonctionnement-solaire': 'Comprenez comment une installation solaire produit, transforme et valorise l’électricité en Suisse.',
  '/fr/installation-photovoltaique-suisse': 'Découvrez les étapes, la durée et les coûts d’une installation photovoltaïque en Suisse.',
  '/fr/installer-panneau-solaire-suisse': 'Trouvez des installateurs solaires certifiés dans votre canton et comparez gratuitement leurs offres.',
  '/fr/photovoltaique-climat-suisse': 'Découvrez quels panneaux photovoltaïques résistent le mieux à la neige, au froid et au brouillard suisses.',
  '/fr/solaire-bienne': 'Comparez jusqu’à trois offres pour votre installation solaire à Biel/Bienne et découvrez les aides locales.',
  '/fr/solaire-fribourg': 'Comparez jusqu’à trois offres d’installateurs certifiés pour votre projet solaire dans le canton de Fribourg.',
  '/fr/solaire-maison-individuelle': 'Découvrez les coûts, la taille, les aides et les avantages d’une installation solaire pour votre maison.',
  '/fr/solaire-avec-batterie': 'Découvrez les coûts, les avantages, la taille du stockage et l’autoconsommation avec une batterie solaire.',
  '/fr/solaire-immeuble': 'Découvrez les coûts, le RCP, la taille et la rentabilité d’une installation solaire pour un immeuble.',
  '/fr/solution-complete-photovoltaique-suisse': 'Découvrez les solutions photovoltaïques complètes en Suisse avec panneaux, batterie et installation.',
  '/fr/subventions-solaires-canton-zurich': 'Découvrez les subventions, contributions et obligations solaires applicables dans le canton de Zurich.',
  '/fr/subventions-solaires': 'Découvrez les aides fédérales, cantonales et fiscales disponibles pour une installation photovoltaïque en Suisse.',
  '/it/calcolatore-solare': 'Calcola costi, rendimento e tempo di rientro del tuo impianto solare in Svizzera con il nostro strumento gratuito.',
  '/it/come-funziona': 'Compila il modulo, ricevi fino a tre preventivi certificati e scegli l’installatore più adatto a te.',
  '/it/come-funziona-solare': 'Scopri come un impianto solare produce energia e quali componenti ne assicurano il funzionamento.',
  '/it/costo-fv-per-m2': 'Scopri quanto costa il fotovoltaico al m² in Svizzera e come viene calcolato il prezzo per kWp.',
  '/it/centrale-balcone': 'Scopri costi, registrazione e requisiti legali per le centrali solari da balcone in Svizzera.',
  '/it/comparatore-fotovoltaico-svizzera': 'Confronta installatori solari svizzeri certificati, preventivi e soluzioni per il tuo impianto fotovoltaico.',
  '/it/confronto-tipi-impianti-solari': 'Confronta moduli monocristallini, policristallini, a film sottile e bifacciali per la Svizzera.',
  '/it/costi-impianto-solare': 'Scopri quanto costa un impianto solare in Svizzera e come incentivi, dimensioni e accumulo influenzano il prezzo.',
  '/it/fotovoltaico-clima-svizzero': 'Scopri quali moduli fotovoltaici funzionano meglio con neve, freddo e nebbia nel clima svizzero.',
  '/it/fotovoltaico-ticino': 'Confronta fino a tre offerte per il fotovoltaico in Ticino e scopri incentivi, costi e soluzioni di accumulo.',
  '/it/incentivi-solari-cantone-zurigo': 'Scopri incentivi, contributi e obblighi solari applicabili nel Cantone di Zurigo nel 2026.',
  '/it/incentivi-solari': 'Scopri la remunerazione unica, gli incentivi cantonali e le deduzioni fiscali per il fotovoltaico svizzero.',
  '/it/installare-impianto-solare-svizzera': 'Trova installatori solari certificati nel tuo Cantone e confronta preventivi gratuiti per il tuo impianto.',
  '/it/manutenzione-fotovoltaico-costi': 'Scopri i costi di pulizia, ispezione e riparazione per la manutenzione fotovoltaica in Svizzera.',
  '/it/processo-installazione-fotovoltaico-svizzera': 'Scopri le fasi, la durata e i costi dell’installazione di un impianto fotovoltaico in Svizzera.',
  '/it/richiedere-preventivo-solare': 'Richiedi fino a tre preventivi gratuiti da installatori certificati per il tuo impianto solare in Svizzera.',
  '/it/solare-casa-unifamiliare': 'Scopri costi, dimensioni, incentivi e vantaggi di un impianto solare per una casa unifamiliare in Svizzera.',
  '/it/solare-con-accumulo': 'Scopri costi, vantaggi, dimensionamento e autoconsumo di un impianto solare con accumulo a batteria.',
  '/it/solare-condominio': 'Scopri costi, CEL, dimensioni e redditività di un impianto solare per un condominio in Svizzera.',
  '/it/soluzione-completa-fotovoltaico-svizzera': 'Scopri soluzioni fotovoltaiche complete in Svizzera con moduli, accumulo e installazione inclusa.',
};

function brandedTitle(title: string): string {
  const normalizedBrand = title
    .replace(/PV\s*Pro(?:\.ch)?/gi, 'PvPro.ch')
    .replace(/\s*\|\s*PvPro\.ch\s*[–—-]\s*/gi, ' – ')
    .trim();
  const withoutBrand = normalizedBrand
    .replace(/PvPro\.ch/gi, '')
    .replace(/^\s*[|–—-]\s*|\s*[|–—-]\s*$/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  return withoutBrand ? `${withoutBrand}${TITLE_SUFFIX}` : 'PvPro.ch';
}

function cantonMetadata(path: string, locale: PageLocale): { title: string; description: string } | undefined {
  if (locale === 'de') {
    const slug = path.replace(/^\/solaranlage-/, '');
    const city = cities.find((entry) => entry.slug === slug && entry.language === 'de');
    if (city) {
      return {
        title: `Solaranlage in ${city.name}`,
        description: `Vergleichen Sie bis zu drei kostenlose Offerten geprüfter Solarteure für Ihre Solaranlage in ${city.name}.`,
      };
    }
  }

  if (locale === 'fr') {
    const slug = path.replace(/^\/fr\/solaire-/, '');
    const city = cities.find((entry) => entry.slug === slug && entry.language === 'fr');
    if (city) {
      return {
        title: `Solaire à ${city.name}`,
        description: `Comparez jusqu’à trois offres gratuites d’installateurs certifiés pour votre installation solaire à ${city.name}.`,
      };
    }
  }

  return undefined;
}

export function pageMetadata(
  metadata: Metadata,
  { path, locale, type = 'website' }: PageMetadataOptions,
): Metadata {
  const canonicalPath = normalizePath(path);
  const url = canonicalPath === '/' ? SITE_URL : `${SITE_URL}${canonicalPath}`;
  const canton = cantonMetadata(canonicalPath, locale);
  const title = brandedTitle(canton?.title || editorialTitles[canonicalPath] || titleText(metadata.title));
  const description = (canton?.description || editorialDescriptions[canonicalPath] || (typeof metadata.description === 'string' ? metadata.description : ''))
    .replace(/PV\s*Pro(?:\.ch)?/gi, 'PvPro.ch')
    .replace(/\s+/g, ' ')
    .trim();
  const { keywords: _keywords, openGraph: sourceOpenGraph, twitter: sourceTwitter, ...metadataWithoutKeywords } = metadata;
  const routeGroup = seoRouteGroup(canonicalPath);
  const languages = routeGroup ? {
    ...Object.fromEntries(Object.entries(routeGroup.paths).map(([language, route]) => [`${language}-CH`, `${SITE_URL}${route}`])),
    'x-default': `${SITE_URL}${routeGroup.paths.de ?? Object.values(routeGroup.paths)[0]}`,
  } : metadata.alternates?.languages;

  return {
    ...metadataWithoutKeywords,
    authors: metadata.authors?.length ? metadata.authors.map((author) => ({
      ...author,
      name: author.name?.replace(/PV\s*Pro(?:\.ch)?/gi, 'PvPro.ch'),
    })) : [{ name: 'PvPro.ch' }],
    title: { absolute: title },
    description,
    alternates: {
      ...metadata.alternates,
      canonical: url,
      ...(languages ? { languages } : {}),
    },
    openGraph: {
      ...sourceOpenGraph,
      type,
      locale: ogLocales[locale],
      url,
      siteName: 'PvPro.ch',
      title,
      description,
      images: sourceOpenGraph?.images || ['/og-image.jpg'],
    },
    twitter: {
      ...sourceTwitter,
      card: 'summary_large_image',
      title,
      description,
      images: sourceTwitter?.images || ['/og-image.jpg'],
    },
  };
}

export function canonicalUrl(path: string): string {
  const canonicalPath = normalizePath(path);
  return canonicalPath === '/' ? SITE_URL : `${SITE_URL}${canonicalPath}`;
}