import type { Metadata } from 'next'
import { BookingEmbed } from '@/components/sections/BookingEmbed'
import { Check } from 'lucide-react'

export const metadata: Metadata = {
  title:      'Réserver un appel',
  description:
    'Réservez un appel découverte de 30 minutes avec Fromagerie Digitale. Sans engagement, sans démarchage — on regarde ensemble votre présence en ligne.',
  alternates: { canonical: 'https://fromageriedigitale.com/contact' },
}

const inclus = [
  'Un audit rapide de votre présence en ligne actuelle',
  'Les 2 ou 3 leviers prioritaires pour votre fromagerie',
  'Un plan d\'action concret, adapté à votre budget',
]

export default function ContactPage() {
  return (
    <div className="pt-20 min-h-screen bg-fd-cream">

      {/* Hero éditorial */}
      <section className="bg-fd-navy py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-fd-gold font-medium text-sm uppercase tracking-widest mb-4">
            Prendre rendez-vous
          </p>
          <h1 className="font-bold text-white text-4xl md:text-5xl leading-tight mb-5">
            Un appel de 30 minutes,<br />
            <span className="italic font-light text-fd-gold">sans engagement.</span>
          </h1>
          <p className="text-white/70 text-lg leading-relaxed max-w-xl mx-auto">
            On échange sur votre fromagerie, vos ambitions et ce qui peut vraiment
            fonctionner pour vous. Pas de démarchage, pas de langue de bois.
          </p>
        </div>
      </section>

      {/* Bandeau "Ce qu'on couvre" — 3 bullets horizontaux, contexte avant réservation */}
      <section className="px-6 -mt-8 md:-mt-10 relative z-10">
        <div className="max-w-5xl mx-auto bg-white rounded-fd-lg shadow-fd-card p-6 md:p-8">
          <p className="text-fd-navy/50 text-xs uppercase tracking-widest mb-5 text-center font-medium">
            Ce qu'on couvre en 30 minutes
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
            {inclus.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 w-6 h-6 rounded-full bg-fd-gold/20 flex items-center justify-center shrink-0">
                  <Check size={14} className="text-fd-navy" strokeWidth={3} />
                </span>
                <span className="text-fd-navy text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Calendrier — pleine largeur pour respirer */}
      <section className="pt-10 md:pt-14 pb-20 md:pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <BookingEmbed />
        </div>
      </section>
    </div>
  )
}
