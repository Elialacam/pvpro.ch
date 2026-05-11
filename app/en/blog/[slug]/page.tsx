import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getBlogArticle, getBlogArticleSlugs } from '@/lib/blogArticles';
import BlogArticlePage from '@/components/BlogArticlePage';

interface Props {
  params: { slug: string };
}

const enSlugToDeSlug: Record<string, string> = {
  'solar-panels-north-facing-roof-switzerland':       'solaranlage-norddach-schweiz',
  'chinese-vs-european-solar-panels-switzerland':     'chinesische-vs-europaeische-solarmodule-schweiz',
  'solar-panel-insurance-switzerland':                'solaranlage-versicherung-schweiz',
  'solar-installer-bankruptcy-guarantee-switzerland': 'solaranlage-installateur-konkurs-garantie-schweiz',
  'solar-battery-fire-risk-safety-switzerland':     'batteriespeicher-brandgefahr-sicherheit-schweiz',
  'find-best-solar-installer-switzerland':          'besten-solarinstallateur-schweiz-finden',
  'solar-panels-heat-pump-combination-switzerland': 'solaranlage-waermepumpe-kombinieren-schweiz',
  'solar-panel-tax-deduction-switzerland-2026': 'solaranlage-steuerabzug-schweiz-2026',
  'is-solar-worth-it-switzerland-2026':         'lohnt-sich-solaranlage-schweiz-2026',
  'balcony-power-station-switzerland':   'balkonkraftwerk-schweiz',
  'solar-panels-winter-switzerland':     'solaranlage-winter-schweiz',
  'solar-subsidies-switzerland-2026':    'foerderungen-photovoltaik-2026',
  'solar-battery-storage-worth-it':      'batteriespeicher-solaranlage-lohnt-sich',
  'choosing-solar-installer-switzerland': 'richtigen-solarinstallateur-schweiz-waehlen',
  'maximise-solar-self-consumption':     'eigenverbrauch-optimieren-solar',
  'solar-system-roi-switzerland':        'roi-photovoltaik-schweiz',
};

function resolveSlug(slug: string): string {
  return enSlugToDeSlug[slug] ?? slug;
}

export async function generateStaticParams() {
  const deSlugs = getBlogArticleSlugs().map(slug => ({ slug }));
  const enSlugs = Object.keys(enSlugToDeSlug).map(slug => ({ slug }));
  return [...deSlugs, ...enSlugs];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const deSlug = resolveSlug(params.slug);
  const article = getBlogArticle(deSlug, 'en');
  if (!article) return {};
  return {
    title: `${article.title} | PVPro.ch`,
    description: article.metaDescription,
    alternates: {
      canonical: `https://www.pvpro.ch/en/blog/${params.slug}`,
      languages: {
        'de-CH': `https://www.pvpro.ch/blog/${deSlug}`,
        'fr-CH': `https://www.pvpro.ch/fr/blog/${deSlug}`,
        'en-CH': `https://www.pvpro.ch/en/blog/${params.slug}`,
        'it-CH': `https://www.pvpro.ch/it/blog/${deSlug}`,
        'x-default': `https://www.pvpro.ch/blog/${deSlug}`,
      },
    },
  };
}

export default function BlogPostEnPage({ params }: Props) {
  const deSlug = resolveSlug(params.slug);
  const article = getBlogArticle(deSlug, 'en');
  if (!article) notFound();
  return <BlogArticlePage article={article} blogBase="/en/blog" homeHref="/en" />;
}
