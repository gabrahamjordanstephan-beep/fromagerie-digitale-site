import type { Metadata } from 'next'
import { Fraunces, IBM_Plex_Mono, Inter } from 'next/font/google'
import { LeonieShop } from '@/components/demo/LeonieShop'
import './leonie.css'

const serif = Fraunces({ subsets: ['latin'], weight: ['400', '600', '700'], style: ['normal', 'italic'], variable: '--lv-serif', display: 'swap' })
const sans = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--lv-sans', display: 'swap' })
const mono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--lv-mono', display: 'swap' })

export const metadata: Metadata = {
  title: 'La Cave de Léonie, boutique démo',
  description: 'Boutique démo fictive conçue par Fromagerie Digitale pour montrer un site de fromagerie avec commande en retrait.',
  // Fromagerie fictive : la page ne doit pas apparaître dans Google.
  robots: { index: false, follow: true },
  alternates: { canonical: '/demo/la-cave-de-leonie' },
}

export default function LeoniePage() {
  return (
    <div className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
      <LeonieShop />
    </div>
  )
}
