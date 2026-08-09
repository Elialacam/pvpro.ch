/**
 * AutoSEO webhook endpoint.
 *
 * Flow:
 *  1. AutoSEO POSTs a new article (German) to this endpoint with the shared secret.
 *  2. We structure the article via OpenAI into our BlogArticle JSON shape.
 *  3. We translate it into FR / EN / IT (same structure).
 *  4. We commit content/autoblog/<slug>.json (+ cover image, if provided) to GitHub.
 *  5. Vercel redeploys automatically; the sitemap picks up the new slug.
 *
 * Required env vars (set in Vercel for production):
 *  - AUTOSEO_WEBHOOK_SECRET  shared secret; AutoSEO must send it
 *  - OPENAI_API_KEY          for structuring + translation
 *  - GITHUB_TOKEN            fine-grained token, contents:write on the repo
 * Optional:
 *  - GITHUB_REPO   (default "Elialacam/pvpro.ch")
 *  - GITHUB_BRANCH (default "main")
 *  - OPENAI_MODEL  (default "gpt-4o")
 */

import { NextRequest, NextResponse } from 'next/server';
import { timingSafeEqual } from 'crypto';
import dns from 'dns/promises';
import net from 'net';

export const runtime = 'nodejs';
export const maxDuration = 300;

const GITHUB_REPO = process.env.GITHUB_REPO || 'Elialacam/pvpro.ch';
const GITHUB_BRANCH = process.env.GITHUB_BRANCH || 'main';
const OPENAI_MODEL = process.env.OPENAI_MODEL || 'gpt-4o';
const FALLBACK_IMAGE = '/images/solaranlage-chalet-alpen-sommer.webp';

const LOCALES = ['fr', 'en', 'it'] as const;

const FORM_URLS: Record<string, string> = {
  de: '/anfrage',
  fr: '/fr/demande',
  en: '/en/request',
  it: '/it/richiesta',
};

const MONTHS: Record<string, string[]> = {
  de: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
  fr: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
  en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  it: ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre'],
};

function localizedDate(locale: string, d: Date): string {
  const day = d.getDate();
  const m = MONTHS[locale][d.getMonth()];
  const y = d.getFullYear();
  if (locale === 'de') return `${day}. ${m} ${y}`;
  if (locale === 'en') return `${m} ${day}, ${y}`;
  return `${day} ${m} ${y}`;
}

function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);
}

// ── OpenAI helper ─────────────────────────────────────────────────────────

async function openaiJson(system: string, user: string): Promise<any> {
  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: OPENAI_MODEL,
      response_format: { type: 'json_object' },
      messages: [
        { role: 'system', content: system },
        { role: 'user', content: user },
      ],
    }),
  });
  if (!res.ok) {
    const t = await res.text();
    throw new Error(`OpenAI error ${res.status}: ${t.slice(0, 300)}`);
  }
  const data = await res.json();
  return JSON.parse(data.choices[0].message.content);
}

const ARTICLE_SHAPE = `{
  "title": string,                       // article H1
  "metaDescription": string,             // 140-160 chars
  "tag": string,                         // one of: Ratgeber, Förderungen, Speicher, Tipps, Finanzen (translate for other locales)
  "intro": string,                       // 2-4 sentence lead paragraph
  "sections": [                          // 3-8 sections
    {
      "heading": string,
      "content": [string, ...],          // 1-4 paragraphs
      "bullets": [string, ...],          // optional
      "highlight": string                // optional single key takeaway
    }
  ],
  "ctaHeading": string,
  "ctaText": string,
  "ctaButton": string,
  "faqs": [ { "question": string, "answer": string } ]   // 3-5 FAQs
}`;

const WORDING_RULE =
  'CRITICAL wording rule: the words "Region", "region", "régione", "régional", "regione" must NEVER appear in any language. ' +
  'Use "Kanton" (DE), "canton" (FR/EN), "Cantone" (IT), or neutral words like "Gebiet"/"zone"/"area" instead.';

// ── Security helpers ──────────────────────────────────────────────────────

function safeEqual(a: string, b: string): boolean {
  const ab = Buffer.from(a);
  const bb = Buffer.from(b);
  if (ab.length !== bb.length) {
    // still do a comparison to keep timing uniform
    timingSafeEqual(ab, ab);
    return false;
  }
  return timingSafeEqual(ab, bb);
}

function isPrivateIp(ip: string): boolean {
  if (net.isIPv6(ip)) {
    const low = ip.toLowerCase();
    return low === '::1' || low.startsWith('fe80') || low.startsWith('fc') || low.startsWith('fd') || low.startsWith('::ffff:');
  }
  const p = ip.split('.').map(Number);
  return (
    p[0] === 10 || p[0] === 127 || p[0] === 0 ||
    (p[0] === 172 && p[1] >= 16 && p[1] <= 31) ||
    (p[0] === 192 && p[1] === 168) ||
    (p[0] === 169 && p[1] === 254) ||
    (p[0] === 100 && p[1] >= 64 && p[1] <= 127)
  );
}

const MAX_IMAGE_BYTES = 8 * 1024 * 1024;

/** Download a cover image with SSRF protections: https only, no redirects,
 *  public IPs only, size + time limits. Returns null when anything is off. */
async function fetchImageSafely(rawUrl: string): Promise<{ buf: Buffer; contentType: string } | null> {
  try {
    const u = new URL(rawUrl);
    if (u.protocol !== 'https:') return null;
    if (net.isIP(u.hostname) ? isPrivateIp(u.hostname) : false) return null;
    if (!net.isIP(u.hostname)) {
      const addrs = await dns.lookup(u.hostname, { all: true });
      if (addrs.length === 0 || addrs.some((a) => isPrivateIp(a.address))) return null;
    }
    const res = await fetch(u.href, {
      redirect: 'error',
      signal: AbortSignal.timeout(15000),
    });
    if (!res.ok) return null;
    const len = Number(res.headers.get('content-length') || '0');
    if (!len || len > MAX_IMAGE_BYTES) return null;
    const contentType = res.headers.get('content-type') || '';
    if (!/^image\//.test(contentType)) return null;

    // Stream with a hard byte cap (content-length can lie)
    const reader = res.body?.getReader();
    if (!reader) return null;
    const chunks: Uint8Array[] = [];
    let total = 0;
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      total += value.length;
      if (total > MAX_IMAGE_BYTES) {
        reader.cancel();
        return null;
      }
      chunks.push(value);
    }
    return { buf: Buffer.concat(chunks), contentType };
  } catch {
    return null;
  }
}

// ── GitHub helpers (Git Data API — single atomic commit) ─────────────────

async function githubApi(path: string, init?: RequestInit): Promise<any> {
  const res = await fetch(`https://api.github.com/repos/${GITHUB_REPO}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      Accept: 'application/vnd.github+json',
      'Content-Type': 'application/json',
      ...(init?.headers || {}),
    },
  });
  if (!res.ok) {
    const t = await res.text();
    throw new Error(`GitHub error ${res.status} on ${path}: ${t.slice(0, 300)}`);
  }
  return res.json();
}

/** Commit multiple files in ONE commit (one Vercel rebuild). Retries once on ref conflict. */
async function githubCommitFiles(
  files: { path: string; contentBase64: string }[],
  message: string,
) {
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const ref = await githubApi(`/git/ref/heads/${GITHUB_BRANCH}`);
      const baseSha = ref.object.sha;
      const baseCommit = await githubApi(`/git/commits/${baseSha}`);

      const treeItems = await Promise.all(
        files.map(async (f) => {
          const blob = await githubApi('/git/blobs', {
            method: 'POST',
            body: JSON.stringify({ content: f.contentBase64, encoding: 'base64' }),
          });
          return { path: f.path, mode: '100644', type: 'blob', sha: blob.sha };
        }),
      );

      const tree = await githubApi('/git/trees', {
        method: 'POST',
        body: JSON.stringify({ base_tree: baseCommit.tree.sha, tree: treeItems }),
      });

      const commit = await githubApi('/git/commits', {
        method: 'POST',
        body: JSON.stringify({ message, tree: tree.sha, parents: [baseSha] }),
      });

      await githubApi(`/git/refs/heads/${GITHUB_BRANCH}`, {
        method: 'PATCH',
        body: JSON.stringify({ sha: commit.sha }),
      });
      return commit.sha as string;
    } catch (e) {
      if (attempt === 0) continue; // one retry on concurrent-update conflicts
      throw e;
    }
  }
  throw new Error('GitHub commit failed');
}

// ── Handler ───────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  // 1. Auth
  const secret = process.env.AUTOSEO_WEBHOOK_SECRET;
  if (!secret) {
    return NextResponse.json({ error: 'Webhook not configured' }, { status: 503 });
  }
  const provided =
    req.headers.get('x-webhook-secret') ||
    req.headers.get('x-autoseo-secret') ||
    (req.headers.get('authorization') || '').replace(/^Bearer\s+/i, '') ||
    '';
  if (!provided || !safeEqual(provided, secret)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  for (const key of ['OPENAI_API_KEY', 'GITHUB_TOKEN'] as const) {
    if (!process.env[key]) {
      return NextResponse.json({ error: `${key} not configured` }, { status: 503 });
    }
  }

  // 2. Parse payload (defensively — field names vary), capped at 1 MB
  let body: any;
  try {
    const raw = await req.text();
    if (raw.length > 1024 * 1024) {
      return NextResponse.json({ error: 'Payload too large' }, { status: 413 });
    }
    body = JSON.parse(raw);
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  // AutoSEO "Send Test" ping: acknowledge without publishing anything
  if (body.event === 'test') {
    return NextResponse.json({ url: 'https://www.pvpro.ch/blog' });
  }

  const title: string = body.title || body.headline || '';
  const content: string =
    body.content_markdown || body.content || body.content_html || body.html ||
    body.markdown || body.body || body.text || '';
  const metaDescription: string =
    body.meta_description || body.metaDescription || body.description || '';
  const imageUrl: string =
    body.heroImageUrl || body.image || body.image_url || body.featured_image ||
    body.featuredImage || body.cover_image || '';

  if (!title || !content || content.length < 200) {
    return NextResponse.json(
      { error: 'Payload must include "title" and "content" (min 200 chars)' },
      { status: 400 },
    );
  }

  const slug = slugify(body.slug || title);
  if (!slug) return NextResponse.json({ error: 'Could not derive slug' }, { status: 400 });

  try {
    // 3. Cover image: download safely and prepare commit (optional)
    let imagePath = FALLBACK_IMAGE;
    let imageCommit: { repoPath: string; base64: string } | null = null;
    if (imageUrl && /^https:\/\//.test(imageUrl)) {
      const img = await fetchImageSafely(imageUrl);
      if (img) {
        const ct = img.contentType;
        const ext = ct.includes('png') ? 'png' : ct.includes('webp') ? 'webp' : 'jpg';
        imagePath = `/images/autoblog/${slug}.${ext}`;
        imageCommit = { repoPath: `public${imagePath}`, base64: img.buf.toString('base64') };
      }
    }

    // 4. Structure the German article
    const de = await openaiJson(
      `You are the editor of PVPro.ch, a Swiss solar comparison site. Convert the raw article below into clean, well-structured German (Swiss German conventions: "ss" instead of "ß"). Return ONLY a JSON object with exactly this shape:\n${ARTICLE_SHAPE}\n${WORDING_RULE}\nKeep all facts from the source; do not invent numbers. If the source has a meta description, refine it.`,
      `TITLE: ${title}\n\nMETA DESCRIPTION: ${metaDescription}\n\nCONTENT:\n${content.slice(0, 30000)}`,
    );

    // 5. Translate into FR / EN / IT
    const langNames: Record<string, string> = { fr: 'French (Swiss)', en: 'English', it: 'Italian (Swiss)' };
    const translations = await Promise.all(
      LOCALES.map((loc) =>
        openaiJson(
          `Translate this German solar-industry blog article JSON into ${langNames[loc]}. Keep EXACTLY the same JSON structure and keys; translate all string values naturally (not literally). Swiss context: currency CHF, cantonal system. ${WORDING_RULE}`,
          JSON.stringify(de),
        ),
      ),
    );

    // 6. Assemble the article file
    const now = new Date();
    const readMin = Math.max(3, Math.min(15, Math.round(content.split(/\s+/).length / 200)));
    const build = (loc: string, a: any) => ({
      slug,
      locale: loc,
      title: a.title,
      metaDescription: a.metaDescription,
      image: imagePath,
      date: localizedDate(loc, now),
      readMin,
      tag: a.tag || 'Ratgeber',
      intro: a.intro,
      sections: (a.sections || []).map((s: any) => ({
        heading: s.heading,
        content: Array.isArray(s.content) ? s.content : [String(s.content || '')],
        ...(s.bullets?.length ? { bullets: s.bullets } : {}),
        ...(s.highlight ? { highlight: s.highlight } : {}),
      })),
      ctaHeading: a.ctaHeading,
      ctaText: a.ctaText,
      ctaButton: a.ctaButton,
      formUrl: FORM_URLS[loc],
      relatedSlugs: [],
      faqs: a.faqs || [],
    });

    const file = {
      slug,
      createdAt: now.toISOString(),
      articles: {
        de: build('de', de),
        fr: build('fr', translations[0]),
        en: build('en', translations[1]),
        it: build('it', translations[2]),
      },
    };

    // 7. Commit everything to GitHub in a single atomic commit (one rebuild)
    const commitFiles = [
      {
        path: `content/autoblog/${slug}.json`,
        contentBase64: Buffer.from(JSON.stringify(file, null, 2)).toString('base64'),
      },
      ...(imageCommit ? [{ path: imageCommit.repoPath, contentBase64: imageCommit.base64 }] : []),
    ];
    await githubCommitFiles(commitFiles, `AutoSEO: new article "${de.title}" (${slug})`);

    return NextResponse.json({
      ok: true,
      slug,
      urls: {
        de: `https://www.pvpro.ch/blog/${slug}`,
        fr: `https://www.pvpro.ch/fr/blog/${slug}`,
        en: `https://www.pvpro.ch/en/blog/${slug}`,
        it: `https://www.pvpro.ch/it/blog/${slug}`,
      },
      note: 'Committed to GitHub; Vercel will deploy automatically.',
    });
  } catch (err: any) {
    console.error('AutoSEO webhook failed:', err);
    return NextResponse.json({ error: err?.message || 'Internal error' }, { status: 500 });
  }
}
