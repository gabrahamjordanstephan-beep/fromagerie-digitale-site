'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'

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

const stats = [
  { n: '2023', l: 'DEPUIS' },
  { n: '20+',  l: 'FROMAGERS ACCOMPAGNÉS' },
  { n: '100%', l: 'SPÉCIALISÉ FROMAGERIE' },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-fd-navy overflow-hidden flex flex-col">

      {/* Photo — saigne jusqu'au bord droit */}
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
          <div className="absolute inset-0 bg-gradient-to-r from-fd-navy via-fd-navy/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-fd-navy/60 via-transparent to-fd-navy/20" />
          <div className="absolute inset-0 bg-fd-navy/70 sm:hidden" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.7, ease: [0.22, 1, 0.36, 1] }}
          className="absolute -left-16 bottom-32 z-20 hidden lg:block"
        >
          <RotatingBadge />
        </motion.div>
      </div>

      {/* Contenu textuel */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16 w-full pt-24 pb-24">
          <div className="max-w-[720px]">

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-white/30 text-[11px] tracking-[0.32em] uppercase mb-10 font-medium"
            >
              Agence Digitale · Fromageries Artisanales
            </motion.p>

            <h1 className="font-bold" style={{ fontSize: 'clamp(52px, 6.8vw, 100px)' }}>
              <LineReveal delay={0.3} className="text-white">
                L&apos;agence qui
              </LineReveal>
              <LineReveal
                delay={0.48}
                className="text-fd-gold"
              >
                <span
                  style={{
                    fontFamily: "'Caveat', cursive",
                    fontWeight: 600,
                    letterSpacing: '-0.01em',
                    fontSize: '1.35em',
                    lineHeight: 0.9,
                    display: 'inline-block',
                    transform: 'translateY(0.06em)',
                  }}
                >
                  parle le langage
                </span>
              </LineReveal>
              <LineReveal delay={0.66} className="text-white">
                des fromagers.
              </LineReveal>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 max-w-[520px] text-white/75 leading-[1.5]"
              style={{ fontSize: 'clamp(15px, 1.15vw, 18px)' }}
            >
              Nous transformons votre savoir-faire en une présence digitale{' '}
              <span
                className="text-fd-gold"
                style={{
                  fontFamily: "'Caveat', cursive",
                  fontWeight: 600,
                  fontSize: '1.35em',
                  letterSpacing: '-0.01em',
                }}
              >
                qui vous ressemble
              </span>
              , qui attire, convainc et fidélise.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="mt-12"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-4 text-fd-gold border-b-2 border-fd-gold/40 pb-2 hover:border-fd-gold transition-colors duration-300"
                style={{ fontSize: 'clamp(18px, 1.5vw, 22px)', fontWeight: 600 }}
              >
                Parlons de votre projet
                <span className="inline-flex w-11 h-11 rounded-full border border-fd-gold/40 items-center justify-center group-hover:bg-fd-gold group-hover:border-fd-gold transition-all duration-300">
                  <ArrowRight
                    size={18}
                    strokeWidth={1.75}
                    className="text-fd-gold group-hover:text-fd-navy group-hover:translate-x-0.5 transition-all duration-300"
                  />
                </span>
              </Link>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Colophon — stats en bandeau bas, éditorial */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.75, duration: 0.7 }}
        className="relative z-10 border-t border-white/10 bg-fd-navy/60 backdrop-blur-sm"
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16 py-8 lg:py-10">
          <ul className="flex flex-col sm:flex-row items-center sm:items-center justify-between gap-8 sm:gap-12">
            {stats.map((s) => (
              <li
                key={s.l}
                className="flex flex-col items-center text-center gap-2 relative flex-1 min-w-0"
              >
                <span className="text-white/60 text-xs sm:text-sm tracking-[0.22em] uppercase font-medium">
                  {s.l}
                </span>
                <span
                  className="text-fd-gold font-bold leading-none"
                  style={{ fontSize: 'clamp(28px, 2.4vw, 40px)' }}
                >
                  {s.n}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 hidden md:block"
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
