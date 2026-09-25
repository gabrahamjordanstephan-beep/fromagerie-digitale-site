import type { Metadata } from 'next'
import { BookingEmbed } from '@/components/sections/BookingEmbed'
import { Mail, MapPin, Linkedin, Check } from 'lucide-react'

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
      <section className="pt-10 md:pt-14 px-6">
        <div className="max-w-5xl mx-auto">
          <BookingEmbed />
        </div>
      </section>

      {/* Cartes rassurance — grille horizontale sous le calendrier */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {/* Email fallback */}
          <a
            href="mailto:contact@fromageriedigitale.com"
            className="group bg-white rounded-fd-lg shadow-fd-card p-6 hover:shadow-fd-hover transition-shadow duration-200 flex flex-col"
          >
            <div className="w-11 h-11 rounded-fd bg-fd-blue/10 flex items-center justify-center mb-4 group-hover:bg-fd-blue/15 transition-colors">
              <Mail size={18} className="text-fd-blue" />
            </div>
            <h3 className="font-semibold text-fd-navy text-sm mb-1">Écrivez-nous</h3>
            <p className="text-fd-navy/50 text-xs mb-2">Si l'agenda ne convient pas</p>
            <p className="text-fd-blue text-sm font-medium break-all mt-auto">contact@fromageriedigitale.com</p>
          </a>

          {/* Localisation */}
          <div className="bg-white rounded-fd-lg shadow-fd-card p-6 flex flex-col">
            <div className="w-11 h-11 rounded-fd bg-fd-blue/10 flex items-center justify-center mb-4">
              <MapPin size={18} className="text-fd-blue" />
            </div>
            <h3 className="font-semibold text-fd-navy text-sm mb-1">Basés à Paris</h3>
            <p className="text-fd-navy/50 text-xs mb-2">Intervention toute la France</p>
            <p className="text-fd-navy text-sm mt-auto">Paris 17e</p>
          </div>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/company/fromageriedigitale/"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-fd-lg shadow-fd-card p-6 hover:shadow-fd-hover transition-shadow duration-200 flex flex-col"
          >
            <div className="w-11 h-11 rounded-fd bg-[#0A66C2]/10 flex items-center justify-center mb-4 group-hover:bg-[#0A66C2]/15 transition-colors">
              <Linkedin size={18} className="text-[#0A66C2]" />
            </div>
            <h3 className="font-semibold text-fd-navy text-sm mb-1">LinkedIn</h3>
            <p className="text-fd-navy/50 text-xs mb-2">Suivez nos actualités</p>
            <p className="text-[#0A66C2] text-sm font-medium mt-auto">@fromageriedigitale</p>
          </a>

          {/* Badge signature */}
          <div className="bg-fd-navy rounded-fd-lg p-6 text-center flex flex-col justify-center">
            <p className="text-fd-gold font-bold text-3xl mb-1">100%</p>
            <p className="text-white text-sm font-medium mb-2">Spécialisé fromageries</p>
            <p className="text-white/50 text-xs italic leading-relaxed">
              « L'agence qui parle le langage des fromagers »
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
