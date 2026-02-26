import { MetadataRoute } from 'next';
import { getAllCitySlugs, cities } from '@/lib/cities';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pvpro.ch';
  const currentDate = new Date();

  // Static pages - German (default)
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/solaranlage-mit-speicher`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/solaranlage-kosten`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/solarrechner`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/datenschutz`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/impressum`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ];

  // French static pages
  const frenchPages = [
    {
      url: `${baseUrl}/fr`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.95,
    },
  ];

  // Italian static pages
  const italianPages = [
    {
      url: `${baseUrl}/it`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/it/note-legali`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/it/protezione-dati`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ];

  // German city pages
  const germanCityPages = cities
    .filter(city => city.language === 'de')
    .map((city) => ({
      url: `${baseUrl}/solaranlage-${city.slug}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    }));

  // French city pages
  const frenchCityPages = cities
    .filter(city => city.language === 'fr')
    .map((city) => ({
      url: `${baseUrl}/fr/solaire-${city.slug}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    }));

  // Italian city pages
  const italianCityPages = cities
    .filter(city => city.language === 'it')
    .map((city) => ({
      url: `${baseUrl}/it/fotovoltaico-${city.slug}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.90,
    }));

  return [
    ...staticPages,
    ...frenchPages,
    ...italianPages,
    ...germanCityPages,
    ...frenchCityPages,
    ...italianCityPages
  ];
}
