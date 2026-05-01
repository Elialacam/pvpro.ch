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
      { source: '/fotovoltaico-ticino',                        destination: '/it/fotovoltaico-ticino',  permanent: true },
      { source: '/it/impianto-fotovoltaico-ginevra',           destination: '/fr/solaire-geneve',       permanent: true },
      { source: '/it/impianto-fotovoltaico-lugano',            destination: '/it/fotovoltaico-ticino',  permanent: true },
      { source: '/solaranlage-fribourg',                       destination: '/solaranlage-freiburg',    permanent: true },
      { source: '/solaranlage-genf',                           destination: '/fr/solaire-geneve',       permanent: true },
      { source: '/solaranlage-zuerich',                        destination: '/solaranlage-zurich',      permanent: true },
      { source: '/solaranlage-koeniz',                         destination: '/solaranlage-bern',        permanent: true },
      { source: '/solaire-geneve',                             destination: '/fr/solaire-geneve',       permanent: true },
      { source: '/solaranlage-baden',                          destination: '/solaranlage-aargau',      permanent: true },
      { source: '/solaranlage-lugano',                         destination: '/it/fotovoltaico-ticino',  permanent: true },
      { source: '/solaranlage-thun',                           destination: '/solaranlage-bern',        permanent: true },
      { source: '/solaranlage-biel',                           destination: '/solaranlage-bern',        permanent: true },
      { source: '/solaranlage-chur',                           destination: '/solaranlage-graubunden',  permanent: true },
      { source: '/www.pvpro.ch/solaranlage-fribourg',          destination: '/solaranlage-freiburg',    permanent: true },
      { source: '/www.pvpro.ch/solaranlage-genf',              destination: '/fr/solaire-geneve',       permanent: true },
      { source: '/www.pvpro.ch/solaranlage-zuerich',           destination: '/solaranlage-zurich',      permanent: true },
      { source: '/www.pvpro.ch/it/impianto-fotovoltaico-lugano', destination: '/it/fotovoltaico-ticino', permanent: true },
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
