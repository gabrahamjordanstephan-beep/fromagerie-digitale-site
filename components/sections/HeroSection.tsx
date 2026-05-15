'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'

// Révélation ligne par ligne (overflow hidden + slide up)
function LineReveal({ children, delay = 0, className = '' }: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  return (
    <span className={`block overflow-hidden leading-[1.05] ${className}`}>
      <motion.span
        className="block"
        initial={{ y: '105%' }}
        animate={{ y: '0%' }}
        transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.span>
    </span>
  )
}

function RotatingBadge() {
  const text = 'Fromagerie Digitale ✦ Fromagerie Digitale ✦ '
  return (
    <div className="relative w-32 h-32">
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        <svg viewBox="0 0 130 130" className="w-full h-full">
          <defs>
            <path id="rc" d="M65,65 m -52,0 a52,52 0 1,1 104,0 a52,52 0 1,1 -104,0" />
          </defs>
          <text fill="#F4BD45" fontSize="10" fontFamily="Poppins,sans-serif" fontWeight="600" letterSpacing="1.8">
            <textPath href="#rc">{text}</textPath>
          </text>
        </svg>
      </motion.div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 rounded-full bg-fd-gold flex flex-col items-center justify-center gap-0.5">
          <span style={{ fontFamily: 'Poppins,sans-serif', color: '#314C5C', fontSize: '16px', fontWeight: 800, lineHeight: 1 }}>FD</span>
        </div>
      </div>
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-fd-navy overflow-hidden flex items-center">

      {/* Photo — saigne jusqu'au bord droit, aucun border-radius */}
      <div className="absolute right-0 top-0 bottom-0 w-[48%] lg:w-[44%]">
        <motion.div
          className="absolute inset-0"
          initial={{ clipPath: 'inset(0 100% 0 0)' }}
          animate={{ clipPath: 'inset(0 0% 0 0)' }}
          transition={{ duration: 1.5, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
        >
          <Image
            src="/images/hero-artisan.jpeg"
            alt="Artisan fromager travaillant le fromage — Fromagerie Digitale agence web"
            fill
            className="object-cover object-center"
            priority
            sizes="44vw"
          />
          {/* Fondu vers la gauche */}
          <div className="absolute inset-0 bg-gradient-to-r from-fd-navy via-fd-navy/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-fd-navy/60 via-transparent to-fd-navy/20" />
          {/* Overlay renforcé sur mobile pour protéger la lisibilité du texte */}
          <div className="absolute inset-0 bg-fd-navy/70 sm:hidden" />
        </motion.div>

        {/* Badge rotatif sur le bord de l'image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.7, ease: [0.22, 1, 0.36, 1] }}
          className="absolute -left-16 bottom-20 z-20 hidden lg:block"
        >
          <RotatingBadge />
        </motion.div>
      </div>

      {/* Contenu textuel */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-16 w-full pt-24 pb-20">
        <div className="max-w-[640px]">

          {/* Label discret */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-white/30 text-[11px] tracking-[0.32em] uppercase mb-10 font-medium"
          >
            Agence Digitale — Fromageries Artisanales
          </motion.p>

          {/* Titre éditorial — révélation ligne par ligne */}
          <h1 className="font-bold" style={{ fontSize: 'clamp(52px, 6.8vw, 100px)' }}>
            <LineReveal delay={0.3} className="text-white">L&apos;agence qui</LineReveal>
            <LineReveal delay={0.48} className="text-fd-gold italic">parle le langage</LineReveal>
            <LineReveal delay={0.66} className="text-white">des fromagers</LineReveal>
          </h1>

          {/* Baseline + CTA en ligne */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col sm:flex-row items-start sm:items-end gap-8 sm:gap-12"
          >
            <p className="text-white/40 text-base leading-relaxed max-w-[280px]">
              Nous transformons votre savoir-faire en présence digitale qui attire, convainc et fidélise.
            </p>
            <Link
              href="/contact"
              className="group flex items-center gap-2.5 text-fd-gold font-semibold text-sm border-b border-fd-gold/35 pb-0.5 hover:border-fd-gold whitespace-nowrap transition-colors duration-200"
            >
              Parlons de votre projet
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>

          {/* Stats horizontaux */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="flex gap-4 sm:gap-10 mt-16 border-t border-white/8 pt-8"
          >
            {[
              { n: '20+', l: 'fromagers accompagnés' },
              { n: '3 sem.', l: 'délai de livraison' },
              { n: '100%', l: 'spécialisé fromagerie' },
            ].map(({ n, l }) => (
              <div key={l} className="flex flex-col items-center text-center">
                <div className="text-white font-bold text-4xl leading-none">{n}</div>
                <div className="text-white/70 text-sm mt-2 tracking-wide">{l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="text-white/20"
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  )
}
