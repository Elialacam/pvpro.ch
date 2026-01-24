import { MetadataRoute } from 'next';
import { cantons } from '@/lib/cities';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pvpro.ch';
  const currentDate = new Date();

  // Static pages
  const staticPages = [
    { url: baseUrl, lastModified: currentDate, changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${baseUrl}/fr`, lastModified: currentDate, changeFrequency: 'weekly' as const, priority: 0.95 },
    { url: `${baseUrl}/it`, lastModified: currentDate, changeFrequency: 'weekly' as const, priority: 0.95 },
  ];

  // Canton pages
  const cantonPages = cantons.map((canton) => ({
    url: `${baseUrl}${canton.baseUrl}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  return [
    ...staticPages,
    ...cantonPages,
  ];
}
