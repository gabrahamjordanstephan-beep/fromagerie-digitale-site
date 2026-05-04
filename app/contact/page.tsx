import type { Metadata } from 'next'
import { ContactForm }  from '@/components/sections/ContactForm'
import { Mail, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title:      'Contact',
  description:
    'Contactez Fromagerie Digitale pour discuter de votre projet digital. Formulaire, email, ou chat — on vous répond rapidement.',
  alternates: { canonical: 'https://fromageriedigitale.fr/contact' },
}

export default function ContactPage() {
  return (
    <div className="pt-20 min-h-screen bg-fd-cream">

      {/* Header */}
      <section className="bg-fd-navy py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-fd-gold font-medium text-sm uppercase tracking-widest mb-3">
            Contact
          </p>
          <h1 className="font-bold text-white text-4xl md:text-5xl mb-4">
            Parlons de votre projet
          </h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Premier échange gratuit et sans engagement. On vous dit honnêtement
            ce qui peut fonctionner pour votre fromagerie.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Formulaire — US-09 */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-fd-lg shadow-fd-card p-8">
              <h2 className="font-bold text-fd-navy text-2xl mb-2">Envoyez-nous un message</h2>
              <p className="text-fd-navy/50 text-sm mb-8">Réponse garantie sous 24h.</p>
              <ContactForm />
            </div>
          </div>

          {/* Infos directes — US-10 */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-fd-lg shadow-fd-card p-6">
              <div className="w-12 h-12 rounded-fd bg-fd-blue/10 flex items-center justify-center mb-4">
                <Mail size={20} className="text-fd-blue" />
              </div>
              <h3 className="font-semibold text-fd-navy mb-1">Formulaire de contact</h3>
              <p className="text-fd-navy/50 text-xs mb-2">Remplissez le formulaire ci-contre</p>
              <p className="text-fd-blue text-sm font-medium">Réponse sous 24h</p>
            </div>

            <div className="bg-white rounded-fd-lg shadow-fd-card p-6">
              <div className="w-12 h-12 rounded-fd bg-fd-blue/10 flex items-center justify-center mb-4">
                <Clock size={20} className="text-fd-blue" />
              </div>
              <h3 className="font-semibold text-fd-navy mb-1">Disponibilité</h3>
              <p className="text-fd-navy/50 text-xs mb-2">On vous répond vite</p>
              <p className="text-fd-navy text-sm">Lundi — Vendredi</p>
              <p className="text-fd-navy text-sm">9h — 18h</p>
            </div>

            <div className="bg-white rounded-fd-lg shadow-fd-card p-6">
              <div className="w-12 h-12 rounded-fd bg-fd-blue/10 flex items-center justify-center mb-4">
                <MapPin size={20} className="text-fd-blue" />
              </div>
              <h3 className="font-semibold text-fd-navy mb-1">Localisation</h3>
              <p className="text-fd-navy/50 text-xs mb-2">Intervention toute la France</p>
              <p className="text-fd-navy text-sm">Corbeil-Essonnes</p>
              <p className="text-fd-navy text-sm">Île-de-France</p>
            </div>

            {/* Badge rassurant */}
            <div className="bg-fd-navy rounded-fd-lg p-6 text-center">
              <p className="text-fd-gold font-bold text-2xl mb-1">100%</p>
              <p className="text-white text-sm font-medium mb-1">Spécialisé fromageries</p>
              <p className="text-white/50 text-xs italic">
                &ldquo;L&apos;agence qui parle le langage des fromagers&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
