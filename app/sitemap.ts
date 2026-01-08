import { MetadataRoute } from 'next';
import { getAllCitySlugs } from '@/lib/cities';

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
  ];

  // German city pages - critical for SEO (weekly crawl)
  const citySlugs = getAllCitySlugs();
  const cityPages = citySlugs.map((slug) => ({
    url: `${baseUrl}/solaranlage-${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  // Italian city pages
  const italianCityPages = [
    {
      url: `${baseUrl}/it/impianto-fotovoltaico-lugano`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.90, // High priority for Lugano (best solar location)
    },
  ];

  // French city pages
  const frenchCityPages = [
    {
      url: `${baseUrl}/fr/installation-solaire-geneve`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.88,
    },
  ];

  return [
    ...staticPages,
    ...frenchPages,
    ...italianPages,
    ...cityPages,
    ...italianCityPages,
    ...frenchCityPages
  ];
}
