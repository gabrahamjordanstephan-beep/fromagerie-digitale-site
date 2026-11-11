import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { ConditionalChrome } from '@/components/layout/ConditionalChrome'
import { LocalBusinessSchema } from '@/components/seo/LocalBusinessSchema'
import { SITE_URL } from '@/lib/site'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-poppins',
})

const DEFAULT_TITLE = "Fromagerie Digitale, l'agence qui parle le langage des fromagers"
const DEFAULT_DESCRIPTION =
  'Agence digitale dédiée aux fromageries artisanales : site, fiche Google, référencement local et IA, identité, vidéo et publicité. Diagnostic offert.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: DEFAULT_TITLE, template: '%s | Fromagerie Digitale' },
  description: DEFAULT_DESCRIPTION,
  applicationName: 'Fromagerie Digitale',
  authors: [{ name: 'Fromagerie Digitale' }],
  creator: 'Fromagerie Digitale',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: SITE_URL,
    siteName: 'Fromagerie Digitale',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  twitter: { card: 'summary_large_image', title: DEFAULT_TITLE, description: DEFAULT_DESCRIPTION },
  robots: { index: true, follow: true },
  verification: { google: 'RQQ135bc5ssUC3mxQxX9qB31FAtpsWiTCvywGaepiP0' },
  alternates: { canonical: '/' },
}

export const viewport: Viewport = {
  themeColor: '#1C2C37',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={poppins.variable}>
      <body className="antialiased">
        <LocalBusinessSchema />
        <ConditionalChrome>{children}</ConditionalChrome>
      </body>
    </html>
  )
}
