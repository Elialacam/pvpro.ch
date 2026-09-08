/**
 * Previously generated blog articles retained as local content.
 *
 * Each file in content/autoblog/<slug>.json contains one article in all
 * 4 locales. These are merged with the hand-written articles in
 * lib/blogArticles.ts by the getter functions there.
 *
 * Server-side only (uses fs) — never import from a 'use client' component.
 */

import fs from 'fs';
import path from 'path';
import type { BlogArticle } from './blogArticles';
import type { BlogPost } from './blogPosts';
import { autoBlogPath, getAutoBlogSlugRecord, type BlogLocale } from './autoBlogSlugs';

export interface AutoBlogFile {
  slug: string;
  localeSlugs?: Record<BlogLocale, string>;
  createdAt: string; // ISO date
  articles: Record<'de' | 'fr' | 'en' | 'it', BlogArticle>;
}

const AUTOBLOG_DIR = path.join(process.cwd(), 'content', 'autoblog');

let cache: AutoBlogFile[] | null = null;

export function getAutoBlogFiles(): AutoBlogFile[] {
  if (cache) return cache;
  let files: AutoBlogFile[] = [];
  try {
    if (fs.existsSync(AUTOBLOG_DIR)) {
      files = fs
        .readdirSync(AUTOBLOG_DIR)
        .filter((f) => f.endsWith('.json'))
        .map((f) => {
          try {
            return JSON.parse(fs.readFileSync(path.join(AUTOBLOG_DIR, f), 'utf8')) as AutoBlogFile;
          } catch {
            return null;
          }
        })
        .filter((f): f is AutoBlogFile => !!f && !!f.slug && !!f.articles);
      // newest first
      files.sort((a, b) => (b.createdAt || '').localeCompare(a.createdAt || ''));
    }
  } catch {
    files = [];
  }
  cache = files;
  return files;
}

export function getAutoArticle(slug: string, locale: string): BlogArticle | undefined {
  const canonical = getAutoBlogSlugRecord(slug, locale as BlogLocale);
  const file = getAutoBlogFiles().find((f) => f.slug === (canonical?.legacySlug ?? slug));
  if (!file) return undefined;
  const article = file.articles[locale as BlogLocale];
  if (!article) return undefined;
  return {
    ...article,
    slug: file.localeSlugs?.[locale as BlogLocale] ?? canonical?.slugs[locale as BlogLocale] ?? article.slug,
    publishedAt: file.createdAt,
    modifiedAt: file.createdAt,
  };
}

export function getAutoSlugs(): string[] {
  return getAutoBlogFiles().map((f) => f.slug);
}

/** Canonical static-route params for generated content in one locale. */
export function getAutoArticleLocaleSlugs(locale: BlogLocale): string[] {
  return getAutoBlogFiles()
    .map((file) => file.localeSlugs?.[locale] ?? getAutoBlogSlugRecord(file.slug)?.slugs[locale])
    .filter((slug): slug is string => !!slug);
}

/** Card metadata for the blog listing pages, per locale. */
export function getAutoBlogCards(locale: 'de' | 'fr' | 'en' | 'it'): BlogPost[] {
  const authors: Record<string, string> = {
    de: 'PVPro.ch Redaktion',
    fr: 'PVPro.ch Rédaction',
    en: 'PVPro.ch Editorial',
    it: 'Redazione PVPro.ch',
  };
  return getAutoBlogFiles()
    .map((f) => {
      const a = f.articles[locale];
      if (!a) return null;
      const base = locale === 'de' ? '/blog' : `/${locale}/blog`;
      return {
        slug: f.localeSlugs?.[locale] ?? getAutoBlogSlugRecord(f.slug)?.slugs[locale] ?? f.slug,
        title: a.title,
        excerpt: a.metaDescription,
        image: a.image,
        author: authors[locale],
        date: a.date,
        readMin: (() => {
          // Keep card and article reading time based on the same visible editorial content.
          const { articleReadingMinutes } = require('./blogUtils') as typeof import('./blogUtils');
          return articleReadingMinutes({ ...a, publishedAt: f.createdAt, modifiedAt: f.createdAt });
        })(),
        tag: a.tag,
        href: getAutoBlogSlugRecord(f.slug) ? autoBlogPath(getAutoBlogSlugRecord(f.slug)!, locale) : `${base}/${f.slug}`,
      } as BlogPost;
    })
    .filter((c): c is BlogPost => !!c);
}
