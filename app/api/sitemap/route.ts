import { getAutoBlogFiles } from '@/lib/autoBlog';
import { autoBlogPath, autoBlogSlugRegistry, getAutoBlogSlugRecord } from '@/lib/autoBlogSlugs';
import { getBlogArticle, getBlogArticleSlugs } from '@/lib/blogArticles';
import { articleDates } from '@/lib/blogUtils';
import { staticSeoRouteGroups, type SeoLocale, type SeoRouteGroup } from '@/lib/seoRoutes';
import { manualArticleLocaleSlugs } from '@/lib/articleSeoRoutes';

const BASE = 'https://www.pvpro.ch';
const locales: SeoLocale[] = ['de', 'fr', 'en', 'it'];

function xml(value: string) {
  return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function groupXml(group: SeoRouteGroup, lastmod?: string): string {
  const paths = locales.flatMap(locale => group.paths[locale] ? [[locale, group.paths[locale]!] as const] : []);
  const alternateLinks = paths.map(([locale, path]) => `    <xhtml:link rel="alternate" hreflang="${locale}-CH" href="${BASE}${path}"/>`);
  const defaultPath = group.paths.de ?? paths[0]?.[1];
  if (defaultPath) alternateLinks.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE}${defaultPath}"/>`);
  return paths.map(([, path]) => `  <url>
    <loc>${BASE}${xml(path)}</loc>${lastmod ? `\n    <lastmod>${xml(lastmod)}</lastmod>` : ''}
    <changefreq>${group.changeFrequency ?? 'monthly'}</changefreq>
    <priority>${group.priority ?? .6}</priority>
${alternateLinks.join('\n')}
  </url>`).join('\n');
}

function articleGroup(slug: string): SeoRouteGroup | undefined {
  const translated = manualArticleLocaleSlugs[slug];
  const slugs = translated ?? (locales.every(locale => getBlogArticle(slug, locale)) ? Object.fromEntries(locales.map(locale => [locale, slug])) : undefined);
  if (!slugs || !locales.every(locale => slugs[locale] && getBlogArticle(slug, locale))) return undefined;
  return { paths: Object.fromEntries(locales.map(locale => [locale, `${locale === 'de' ? '' : `/${locale}`}/blog/${slugs[locale]}`])), priority: .65 };
}

export async function GET() {
  const autoLegacy = new Set(autoBlogSlugRegistry.map(record => record.legacySlug));
  const manual = getBlogArticleSlugs().filter(slug => !autoLegacy.has(slug)).flatMap(slug => {
    const group = articleGroup(slug);
    const article = getBlogArticle(slug, 'de');
    const date = article ? articleDates(article).modifiedAt : undefined;
    return group ? [{ group, lastmod: date && /^\d{4}-\d{2}-\d{2}/.test(date) ? date : undefined }] : [];
  });
  const auto = getAutoBlogFiles().flatMap(file => {
    const record = getAutoBlogSlugRecord(file.slug);
    if (!record || !file.createdAt || !/^\d{4}-\d{2}-\d{2}/.test(file.createdAt)) return [];
    return [{
    group: { paths: Object.fromEntries(locales.map(locale => [locale, autoBlogPath(record, locale)])), priority: .6 } as SeoRouteGroup,
    lastmod: file.createdAt,
    }];
  });
  const body = [...staticSeoRouteGroups.map(group => groupXml(group)), ...manual.map(({ group, lastmod }) => groupXml(group, lastmod)), ...auto.map(({ group, lastmod }) => groupXml(group, lastmod))].join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${body}\n</urlset>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}