/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.sanity.io' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    const csp = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' data: https://fonts.gstatic.com",
      "img-src 'self' data: blob: https:",
      "frame-src 'none'",
      "connect-src 'self'",
      "media-src 'self'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      'upgrade-insecure-requests',
    ].join('; ')
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options',           value: 'DENY' },
          { key: 'X-Content-Type-Options',    value: 'nosniff' },
          { key: 'Referrer-Policy',           value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy',        value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'Content-Security-Policy',   value: csp },
        ],
      },
      {
        source: '/(.*\\.(?:ico|png|jpg|jpeg|webp|avif|svg|woff2|woff|ttf))',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ]
  },
  async redirects() {
    return [
      {
        source:      '/:path*',
        has:         [{ type: 'host', value: 'www.fromageriedigitale.com' }],
        destination: 'https://fromageriedigitale.com/:path*',
        permanent:   true,
      },
      // Un seul domaine pour Google : le .fr renvoie vers le .com
      {
        source:      '/:path*',
        has:         [{ type: 'host', value: '(?:www\\.)?fromageriedigitale\\.fr' }],
        destination: 'https://fromageriedigitale.com/:path*',
        permanent:   true,
      },
      // Offre fusionnée dans « Référencement local et IA »
      { source: '/services/autorite-geo', destination: '/services/visibilite-geo-ia', permanent: true },
      // Anciens articles remplacés par les guides des nouvelles offres
      { source: '/blog/pourquoi-votre-fromagerie-a-besoin-dun-site-web', destination: '/blog/site-internet-fromagerie', permanent: true },
      { source: '/blog/seo-local-fromagerie-attirer-clients-quartier', destination: '/blog/seo-local-fromagerie', permanent: true },
      { source: '/blog/instagram-fromagerie-5-idees-contenus', destination: '/blog/videos-reels-tiktok-fromagerie', permanent: true },
      // Article fusionné dans le guide des 7 réglages de la fiche Google
      { source: '/blog/fiche-google-my-business-fromagerie-erreurs', destination: '/blog/fiche-google-fromagerie-7-reglages', permanent: true },
    ]
  },
  compress:       true,
  poweredByHeader: false,
}
module.exports = nextConfig
