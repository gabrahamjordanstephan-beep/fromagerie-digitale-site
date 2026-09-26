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
  service:   Service
  adjacent?: { prev: Service; next: Service } | null
}

/** Rend *mot* en italique gold, comme les <em> de la maquette. */
function withEmphasis(text: string): React.ReactNode {
  return text.split(/(\*[^*]+\*)/g).map((part, i) =>
    part.startsWith('*') && part.endsWith('*') && part.length > 2
      ? <em key={i} className="not-italic text-fd-gold font-semibold">{part.slice(1, -1)}</em>
      : <span key={i}>{part}</span>
  )
}

export function ServicePageContent({ service, adjacent }: Props) {
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
            {/* Overlay renforcé sur mobile pour protéger la lisibilité du texte */}
            <div className="absolute inset-0 bg-fd-navy/70 sm:hidden" />
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

      {/* ── BLOC 01 · LE CONSTAT ── cream ── */}
      <section className="bg-fd-cream px-6 lg:px-16 py-28">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-[220px_1fr] gap-12 lg:gap-24">
          <motion.p
            className="text-fd-navy/40 text-[11px] tracking-[0.36em] uppercase font-medium pt-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            01 — Le constat
          </motion.p>
          <div className="max-w-[820px]">
            {service.constatTitle && (
              <motion.h2
                className="font-bold text-fd-navy leading-[1.15] mb-8"
                style={{ fontSize: 'clamp(28px, 3.5vw, 52px)' }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              >
                {withEmphasis(service.constatTitle)}
              </motion.h2>
            )}
            {(service.constat ?? [service.description]).map((p, i) => (
              <motion.p
                key={i}
                className="text-fd-navy/80 leading-relaxed mt-6 first:mt-0"
                style={{ fontSize: 'clamp(16px, 1.4vw, 20px)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                {withEmphasis(p)}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOC 02 · POUR QUI ── dark ── */}
      <section className="bg-fd-dark px-6 lg:px-16 py-28">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-[220px_1fr] gap-12 lg:gap-24">
          <motion.p
            className="text-white/30 text-[11px] tracking-[0.36em] uppercase font-medium pt-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            02 — Pour qui
          </motion.p>
          <div className="max-w-[820px]">
            <motion.h2
              className="font-bold text-white leading-[1.15]"
              style={{ fontSize: 'clamp(28px, 3.5vw, 52px)' }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              {withEmphasis(service.pourQui?.title ?? service.benefits[0]?.title ?? '')}
            </motion.h2>
            <motion.p
              className="text-white/60 mt-8 leading-relaxed"
              style={{ fontSize: 'clamp(16px, 1.4vw, 20px)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              {service.pourQui?.desc ?? service.benefits[0]?.desc ?? ''}
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── BLOC 03 · CE QU'ON LIVRE ── cream, livrables numérotés ── */}
      <section className="bg-fd-cream px-6 lg:px-16 py-28">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-[220px_1fr] gap-12 lg:gap-24">
          <motion.p
            className="text-fd-navy/40 text-[11px] tracking-[0.36em] uppercase font-medium pt-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            03 — Ce qu'on livre
          </motion.p>
          <div className="max-w-[820px]">
            <motion.h2
              className="font-bold text-fd-navy leading-[1.15]"
              style={{ fontSize: 'clamp(28px, 3.5vw, 52px)' }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              {service.includes.length} livrables,
              <br />
              <em className="not-italic text-fd-gold">un {service.name.toLowerCase().split(' ')[0]}.</em>
            </motion.h2>
            <ul className="mt-12 divide-y divide-fd-navy/10">
              {service.includes.map((item, i) => (
                <motion.li
                  key={item}
                  className="py-5 flex items-start gap-6"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="text-fd-gold font-bold text-sm tracking-widest w-8 shrink-0 pt-0.5">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-fd-navy/80 leading-relaxed" style={{ fontSize: 'clamp(15px, 1.3vw, 18px)' }}>
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── BLOC 04 · NOTRE MÉTHODE ── dark ── */}
      {service.methode && service.methode.length > 0 && (
        <section className="bg-fd-dark px-6 lg:px-16 py-28">
          <div className="max-w-[1400px] mx-auto grid lg:grid-cols-[220px_1fr] gap-12 lg:gap-24">
            <motion.p
              className="text-white/30 text-[11px] tracking-[0.36em] uppercase font-medium pt-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              04 — Notre méthode
            </motion.p>
            <div>
              <motion.h2
                className="font-bold text-white leading-[1.15] mb-14"
                style={{ fontSize: 'clamp(28px, 3.5vw, 52px)' }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              >
                {service.methode.length} étapes,
                <br />
                <em className="not-italic text-fd-gold">
                  {service.meta.duree ?? 'un tempo précis'}.
                </em>
              </motion.h2>
              <div className="grid sm:grid-cols-2 gap-x-16 gap-y-12">
                {service.methode.map((step, i) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="text-fd-gold font-bold text-xs tracking-widest mb-3">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <h4 className="font-bold text-white text-xl mb-3">{step.title}</h4>
                    <p className="text-white/55 text-sm leading-relaxed">{step.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── ENCART DEVIS ── navy, carte éditoriale ── */}
      <section className="bg-fd-navy px-6 lg:px-16 py-24">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            className="border border-fd-gold/25 p-10 lg:p-14 grid lg:grid-cols-[1fr_auto] gap-10 items-end"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <h3 className="font-bold text-white leading-[1.15]" style={{ fontSize: 'clamp(28px, 3.2vw, 44px)' }}>
                Un projet à la <em className="not-italic text-fd-gold">hauteur</em>
                <br />de vos fromages.
              </h3>
              <p className="text-white/60 mt-5 max-w-xl leading-relaxed">
                Chaque projet est unique. On chiffre à partir d'un premier échange d'une demi-heure, sans engagement.
              </p>
              {(service.meta.duree || service.meta.format) && (
                <div className="mt-8 flex flex-wrap gap-x-12 gap-y-4">
                  {service.meta.duree && (
                    <div>
                      <div className="text-fd-gold text-[10px] tracking-[0.36em] uppercase font-semibold mb-1">Délai</div>
                      <div className="text-white font-bold">{service.meta.duree}</div>
                    </div>
                  )}
                  {service.meta.format && (
                    <div>
                      <div className="text-fd-gold text-[10px] tracking-[0.36em] uppercase font-semibold mb-1">Format</div>
                      <div className="text-white font-bold">{service.meta.format}</div>
                    </div>
                  )}
                </div>
              )}
            </div>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-fd-gold text-fd-navy font-bold px-8 py-4 hover:bg-fd-gold/90 transition-colors whitespace-nowrap"
            >
              Réserver un échange
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── BLOC 05 · FAQ ── cream ── */}
      {service.faq && service.faq.length > 0 && (
        <section className="bg-fd-cream px-6 lg:px-16 py-28">
          <div className="max-w-[1400px] mx-auto grid lg:grid-cols-[220px_1fr] gap-12 lg:gap-24">
            <motion.p
              className="text-fd-navy/40 text-[11px] tracking-[0.36em] uppercase font-medium pt-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              05 — Questions fréquentes
            </motion.p>
            <div className="max-w-[820px] divide-y divide-fd-navy/15">
              {service.faq.map((item, i) => (
                <motion.details
                  key={item.q}
                  className="group py-6"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <summary className="cursor-pointer list-none flex items-start justify-between gap-6 font-semibold text-fd-navy hover:text-fd-navy/70 transition-colors" style={{ fontSize: 'clamp(16px, 1.4vw, 20px)' }}>
                    <span>{item.q}</span>
                    <span className="text-fd-gold text-2xl leading-none shrink-0 pt-0.5 group-open:rotate-45 transition-transform duration-300">+</span>
                  </summary>
                  <p className="text-fd-navy/70 mt-4 leading-relaxed max-w-[720px]">{item.a}</p>
                </motion.details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── PAGINATION INTER-OFFRES ── navy ── */}
      {adjacent && (
        <section className="bg-fd-navy px-6 lg:px-16 py-16 border-t border-white/10">
          <div className="max-w-[1400px] mx-auto grid sm:grid-cols-2 gap-8">
            <Link href={`/services/${adjacent.prev.slug}`} className="group flex flex-col gap-2">
              <span className="text-fd-gold text-[10px] tracking-[0.36em] uppercase font-semibold">← Offre précédente</span>
              <span className="text-white/70 group-hover:text-white transition-colors font-semibold" style={{ fontSize: 'clamp(18px, 2vw, 26px)' }}>
                N°{adjacent.prev.num} · {adjacent.prev.name}
              </span>
            </Link>
            <Link href={`/services/${adjacent.next.slug}`} className="group flex flex-col gap-2 sm:text-right">
              <span className="text-fd-gold text-[10px] tracking-[0.36em] uppercase font-semibold">Offre suivante →</span>
              <span className="text-white/70 group-hover:text-white transition-colors font-semibold" style={{ fontSize: 'clamp(18px, 2vw, 26px)' }}>
                N°{adjacent.next.num} · {adjacent.next.name}
              </span>
            </Link>
          </div>
          <div className="max-w-[1400px] mx-auto mt-12 pt-8 border-t border-white/10 text-center">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-white/40 hover:text-white text-sm font-medium transition-colors"
            >
              Voir les neuf offres
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </section>
      )}

    </main>
  )
}
