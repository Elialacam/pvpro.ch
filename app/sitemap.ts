import { MetadataRoute } from 'next';

// generateSitemaps changes Next.js internal route from /sitemap.xml to /sitemap/[id].xml
// This eliminates the conflict with app/sitemap.xml/route.ts
// The actual sitemap.xml is served by app/api/sitemap/route.ts via next.config.js rewrite
export async function generateSitemaps() {
  return [{ id: 0 }];
}

export default async function sitemap({ id }: { id: number }): Promise<MetadataRoute.Sitemap> {
  return [];
}
