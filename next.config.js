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
    return [{
      source: '/(.*)',
      headers: [
        { key: 'X-Frame-Options',        value: 'DENY' },
        { key: 'X-Content-Type-Options',  value: 'nosniff' },
        { key: 'Referrer-Policy',         value: 'strict-origin-when-cross-origin' },
        { key: 'Permissions-Policy',      value: 'camera=(), microphone=(), geolocation=()' },
      ],
    }]
  },
  async redirects() {
    return [{
      source:      '/:path*',
      has:         [{ type: 'host', value: 'www.fromageriedigitale.fr' }],
      destination: 'https://fromageriedigitale.fr/:path*',
      permanent:   true,
    }]
  },
  compress:       true,
  poweredByHeader: false,
}
module.exports = nextConfig
