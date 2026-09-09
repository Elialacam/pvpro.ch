/**
 * Auto-generated blog articles (AutoSEO webhook → GitHub commit).
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

export interface AutoBlogFile {
  slug: string;
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
  const file = getAutoBlogFiles().find((f) => f.slug === slug);
  if (!file) return undefined;
  return file.articles[locale as 'de' | 'fr' | 'en' | 'it'];
}

export function getAutoSlugs(): string[] {
  return getAutoBlogFiles().map((f) => f.slug);
}

/** Card metadata for the blog listing pages, per locale. */
export function getAutoBlogCards(locale: 'de' | 'fr' | 'en' | 'it'): BlogPost[] {
  const authors: Record<string, string> = {
    de: 'PVPro Redaktion',
    fr: 'PVPro Rédaction',
    en: 'PVPro Editorial',
    it: 'Redazione PVPro',
  };
  return getAutoBlogFiles()
    .map((f) => {
      const a = f.articles[locale];
      if (!a) return null;
      const base = locale === 'de' ? '/blog' : `/${locale}/blog`;
      return {
        slug: f.slug,
        title: a.title,
        excerpt: a.metaDescription,
        image: a.image,
        author: authors[locale],
        date: a.date,
        readMin: a.readMin,
        tag: a.tag,
        href: `${base}/${f.slug}`,
      } as BlogPost;
    })
    .filter((c): c is BlogPost => !!c);
}
