import type { Metadata } from 'next'
import './globals.css'
import { Navbar }             from '@/components/layout/Navbar'
import { Footer }             from '@/components/layout/Footer'
import { LocalBusinessSchema } from '@/components/seo/LocalBusinessSchema'

export const metadata: Metadata = {
  metadataBase: new URL('https://fromageriedigitale.fr'),
  title: {
    default:  "Fromagerie Digitale — L'agence qui parle le langage des fromagers",
    template: '%s | Fromagerie Digitale',
  },
  description:
    "Agence digitale spécialisée pour les fromageries artisanales. Sites web, SEO local, e-commerce, branding. Votre histoire, en ligne.",
  keywords: [
    'agence digitale fromagerie', 'marketing fromagerie', 'site web fromager',
    'SEO local fromagerie', 'e-commerce fromage', 'branding artisan fromager',
  ],
  authors:  [{ name: 'Fromagerie Digitale' }],
  creator:  'Fromagerie Digitale',
  openGraph: {
    type:      'website',
    locale:    'fr_FR',
    url:       'https://fromageriedigitale.fr',
    siteName:  'Fromagerie Digitale',
    title:     "Fromagerie Digitale — L'agence qui parle le langage des fromagers",
    description:
      "Agence digitale spécialisée pour les fromageries artisanales. Votre histoire, en ligne.",
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Fromagerie Digitale' }],
  },
  twitter: {
    card:  'summary_large_image',
    title: "Fromagerie Digitale — L'agence qui parle le langage des fromagers",
    description: "Agence digitale spécialisée pour les fromageries artisanales.",
    images: ['/opengraph-image'],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://fromageriedigitale.fr' },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <LocalBusinessSchema />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
