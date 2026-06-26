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
      { source: '/solaranlage-chur',                           destination: '/solaranlage-graubunden',  permanent: true },
      { source: '/www.pvpro.ch/solaranlage-fribourg',          destination: '/solaranlage-freiburg',    permanent: true },
      { source: '/www.pvpro.ch/solaranlage-genf',              destination: '/fr/solaire-geneve',       permanent: true },
      { source: '/www.pvpro.ch/solaranlage-zuerich',           destination: '/solaranlage-zurich',      permanent: true },
      { source: '/www.pvpro.ch/it/impianto-fotovoltaico-lugano', destination: '/it/fotovoltaico-ticino', permanent: true },
      // 301: old PNG content images → new WebP (converted in image optimization pass)
      { source: '/images/aurora-energy-batteriespeicher.png',      destination: '/images/aurora-energy-batteriespeicher.webp',      permanent: true },
      { source: '/images/batteriespeicher-weiss-modern.png',       destination: '/images/batteriespeicher-weiss-modern.webp',       permanent: true },
      { source: '/images/bauernhaus-solaranlage-abend-eiger.png',  destination: '/images/bauernhaus-solaranlage-abend-eiger.webp',  permanent: true },
      { source: '/images/installateur-solarmodul-dach-alpen.png',  destination: '/images/installateur-solarmodul-dach-alpen.webp',  permanent: true },
      { source: '/images/solaranlage-bauernhaus-alpen.png',        destination: '/images/solaranlage-bauernhaus-alpen.webp',        permanent: true },
      { source: '/images/solaranlage-chalet-alpen-sommer.png',     destination: '/images/solaranlage-chalet-alpen-sommer.webp',     permanent: true },
      { source: '/images/solaranlage-chalet-bewoelkt.png',         destination: '/images/solaranlage-chalet-bewoelkt.webp',         permanent: true },
      { source: '/images/solaranlage-flachdach-basel-rhein.png',   destination: '/images/solaranlage-flachdach-basel-rhein.webp',   permanent: true },
      { source: '/images/solaranlage-flachdach-gewerbe-rhein.png', destination: '/images/solaranlage-flachdach-gewerbe-rhein.webp', permanent: true },
      { source: '/images/solaranlage-tessin-villa-palmen.png',     destination: '/images/solaranlage-tessin-villa-palmen.webp',     permanent: true },
      { source: '/images/solaranlage-waermepumpe-chalet-winter.png', destination: '/images/solaranlage-waermepumpe-chalet-winter.webp', permanent: true },
      { source: '/images/solardaecher-quartier-see-schweiz.png',   destination: '/images/solardaecher-quartier-see-schweiz.webp',   permanent: true },
      { source: '/images/solar-energieertrag-tablet-chalet.png',   destination: '/images/solar-energieertrag-tablet-chalet.webp',   permanent: true },
      { source: '/images/solarinstallateure-offerte-beratung.png', destination: '/images/solarinstallateure-offerte-beratung.webp', permanent: true },
      { source: '/images/solarinstallateure-vergleich-beratung.png', destination: '/images/solarinstallateure-vergleich-beratung.webp', permanent: true },
      { source: '/images/solarmodule-nass-alpen-eiger.png',        destination: '/images/solarmodule-nass-alpen-eiger.webp',        permanent: true },
      { source: '/images/solarmodul-regentropfen-alpen.png',       destination: '/images/solarmodul-regentropfen-alpen.webp',       permanent: true },
      { source: '/images/solar-monitoring-tablet-haus.png',        destination: '/images/solar-monitoring-tablet-haus.webp',        permanent: true },
      { source: '/images/steuererklaerung-solaranlage-schweiz.png', destination: '/images/steuererklaerung-solaranlage-schweiz.webp', permanent: true },
      { source: '/images/swissvolt-batteriespeicher-keller.png',   destination: '/images/swissvolt-batteriespeicher-keller.webp',   permanent: true },
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
