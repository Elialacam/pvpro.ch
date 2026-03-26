/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  staticPageGenerationTimeout: 1000,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    domains: [],
  },
  compress: true,
  poweredByHeader: false,
  swcMinify: true,
  async redirects() {
    return [
      // ── 404 city pages → nearest existing canton page (301 permanent) ──────────
      { source: '/solaranlage-zuerich',                    destination: '/solaranlage-zurich',        permanent: true },
      { source: '/solaranlage-genf',                       destination: '/fr/solaire-geneve',          permanent: true },
      { source: '/solaranlage-fribourg',                   destination: '/solaranlage-freiburg',       permanent: true },
      { source: '/solaranlage-chur',                       destination: '/solaranlage-graubunden',     permanent: true },
      { source: '/solaranlage-thun',                       destination: '/solaranlage-bern',           permanent: true },
      { source: '/solaranlage-baden',                      destination: '/solaranlage-aargau',         permanent: true },
      { source: '/solaranlage-lugano',                     destination: '/it/fotovoltaico-ticino',     permanent: true },
      { source: '/it/impianto-fotovoltaico-lugano',        destination: '/it/fotovoltaico-ticino',     permanent: true },
      { source: '/it/impianto-fotovoltaico-ginevra',       destination: '/it',                         permanent: true },
    ];
  },
  async rewrites() {
    return {
      beforeFiles: [
        { source: '/sitemap.xml', destination: '/api/sitemap' },
      ],
    };
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
        ],
      },
    ]
  },
}

module.exports = nextConfig
