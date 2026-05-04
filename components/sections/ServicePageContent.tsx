'use client'

import { motion }       from 'framer-motion'
import Image            from 'next/image'
import Link             from 'next/link'
import { ArrowRight }   from 'lucide-react'
import type { Service } from '@/lib/services-data'

/* clip-path uniquement en bas : cache le texte sous la ligne sans couper les côtés */
const lineClip: React.CSSProperties = { clipPath: 'inset(-200% -500% 0 -500%)' }

function Line({ children, delay = 0, className = '', trigger = 'inView' }: {
  children: React.ReactNode
  delay?: number
  className?: string
  trigger?: 'animate' | 'inView'
}) {
  const shared = {
    className: 'block',
    initial: { y: '105%' } as const,
    transition: { duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] as const },
  }
  return (
    <span className={`block leading-[1.05] ${className}`} style={lineClip}>
      {trigger === 'animate' ? (
        <motion.span {...shared} animate={{ y: '0%' }}>
          {children}
        </motion.span>
      ) : (
        <motion.span {...shared} whileInView={{ y: '0%' }} viewport={{ once: true }}>
          {children}
        </motion.span>
      )}
    </span>
  )
}

/* Découpe le nom en 1 ou 2 lignes selon le nombre de mots */
function splitName(name: string): string[] {
  const words = name.split(' ')
  if (words.length <= 1) return [name]
  const mid = Math.ceil(words.length / 2)
  return [words.slice(0, mid).join(' '), words.slice(mid).join(' ')]
}

type Props = {
  service: Service
  others:  Service[]
}

export function ServicePageContent({ service, others }: Props) {
  return (
    <main>

      {/* ── HERO ── navy, image right, service name massive ── */}
      <section className="relative min-h-screen bg-fd-navy overflow-hidden flex items-center pt-20">

        {/* Image bleeding to right edge */}
        <div className="absolute right-0 top-0 bottom-0 w-[46%] lg:w-[42%]">
          <motion.div
            className="absolute inset-0"
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            animate={{ clipPath: 'inset(0 0% 0 0)' }}
            transition={{ duration: 1.4, delay: 0.15, ease: [0.76, 0, 0.24, 1] }}
          >
            <Image
              src={service.image}
              alt={service.name}
              fill
              className="object-cover object-center"
              priority
              sizes="42vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-fd-navy via-fd-navy/55 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-fd-navy/50 via-transparent to-fd-navy/20" />
          </motion.div>
        </div>

        {/* Text content */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-16 w-full py-20">
          <div className="max-w-[640px]">

            {/* Service number */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="text-fd-gold text-[11px] tracking-[0.36em] uppercase mb-10 font-semibold"
            >
              {service.num}
            </motion.p>

            {/* Service name — massive, découpe multi-mots sur 2 lignes */}
            <h1 className="font-bold" style={{ fontSize: 'clamp(52px, 7.5vw, 112px)' }}>
              {splitName(service.name).map((line, i) => (
                <Line key={line} delay={0.25 + i * 0.18} className="text-white" trigger="animate">
                  {line}
                </Line>
              ))}
            </h1>

            {/* Tagline — gold italic */}
            <div className="mt-5" style={{ fontSize: 'clamp(18px, 2.1vw, 28px)' }}>
              <Line delay={0.5} className="text-fd-gold italic font-semibold leading-snug" trigger="animate">
                {service.tagline}
              </Line>
            </div>

            {/* CTA link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mt-14"
            >
              <Link
                href="/contact"
                className="group flex items-center gap-2.5 text-fd-gold font-semibold text-sm border-b border-fd-gold/35 pb-0.5 hover:border-fd-gold whitespace-nowrap transition-colors duration-200"
              >
                Discuter de ce service
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── DESCRIPTION ── cream, manifesto paragraph ── */}
      <section className="bg-fd-cream px-6 lg:px-16 py-28">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-[820px]">
            <motion.p
              className="text-fd-navy/30 text-[11px] tracking-[0.36em] uppercase mb-10 font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Notre approche
            </motion.p>
            <motion.p
              className="font-bold text-fd-navy leading-[1.2]"
              style={{ fontSize: 'clamp(24px, 3.2vw, 48px)' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {service.description}
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── dark, numbered rows ── */}
      <section className="bg-fd-dark px-6 lg:px-16 py-28">
        <div className="max-w-[1400px] mx-auto">

          <motion.p
            className="text-white/20 text-[11px] tracking-[0.36em] uppercase mb-20 font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ce que vous gagnez
          </motion.p>

          <div className="divide-y divide-white/8">
            {service.benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                className="py-10 flex flex-col md:flex-row md:items-start gap-6 md:gap-16 group"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="text-white/15 font-bold text-sm tracking-widest w-8 shrink-0 pt-1">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex-1 flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-12">
                  <h3
                    className="font-bold text-white group-hover:text-fd-gold transition-colors duration-300"
                    style={{ fontSize: 'clamp(20px, 2.4vw, 34px)' }}
                  >
                    {benefit.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed md:max-w-xs md:text-right">
                    {benefit.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INCLUDES ── cream, checklist ── */}
      <section className="bg-fd-cream px-6 lg:px-16 py-28">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-16">

            <div className="lg:max-w-xs">
              <motion.p
                className="text-fd-navy/30 text-[11px] tracking-[0.36em] uppercase mb-6 font-medium"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Ce qui est inclus
              </motion.p>
              <motion.h2
                className="font-bold text-fd-navy leading-tight"
                style={{ fontSize: 'clamp(28px, 3vw, 48px)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                Tout est
                <br />
                <em className="text-fd-gold not-italic">compris.</em>
              </motion.h2>
            </div>

            <div className="flex-1 lg:max-w-[600px]">
              <ul className="divide-y divide-fd-navy/8">
                {service.includes.map((item, i) => (
                  <motion.li
                    key={item}
                    className="py-5 flex items-start gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <span className="text-fd-gold font-bold text-sm shrink-0 mt-0.5">✦</span>
                    <span className="text-fd-navy/70 text-sm leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── navy, big editorial text ── */}
      <section className="bg-fd-navy px-6 lg:px-16 py-36">
        <div className="max-w-[1400px] mx-auto">

          <motion.h2
            className="font-bold text-white leading-[0.95]"
            style={{ fontSize: 'clamp(48px, 7.5vw, 112px)' }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            Commençons
            <br />
            <span className="text-fd-gold italic">quelque chose</span>
            <br />
            de grand.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-16 flex flex-col sm:flex-row items-start gap-10"
          >
            <Link
              href="/contact"
              className="group flex items-center gap-2.5 text-fd-gold font-semibold text-base border-b border-fd-gold/35 pb-0.5 hover:border-fd-gold whitespace-nowrap transition-colors duration-200"
            >
              Démarrer la conversation
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── VOIR AUSSI ── dark, other services list ── */}
      <section className="bg-fd-dark px-6 lg:px-16 py-24">
        <div className="max-w-[1400px] mx-auto">

          <motion.p
            className="text-white/20 text-[11px] tracking-[0.36em] uppercase mb-16 font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Voir aussi
          </motion.p>

          <div className="divide-y divide-white/8">
            {others.map((s, i) => (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.07 }}
              >
                <Link
                  href={`/services/${s.slug}`}
                  className="group py-7 flex items-center justify-between gap-8 cursor-pointer"
                >
                  <div className="flex items-center gap-8">
                    <span className="text-white/15 font-bold text-xs tracking-widest w-6 shrink-0">{s.num}</span>
                    <h3
                      className="font-bold text-white/60 group-hover:text-white transition-colors duration-300"
                      style={{ fontSize: 'clamp(18px, 2.2vw, 30px)' }}
                    >
                      {s.name}
                    </h3>
                  </div>
                  <ArrowRight
                    size={18}
                    className="text-white/20 group-hover:text-fd-gold group-hover:translate-x-1 transition-all duration-300 shrink-0"
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-16 pt-10 border-t border-white/8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-white/30 hover:text-white text-sm font-medium transition-colors duration-200"
            >
              Tous nos services
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  )
}
