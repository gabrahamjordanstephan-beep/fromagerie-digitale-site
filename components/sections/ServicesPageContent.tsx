'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link                        from 'next/link'
import Image                       from 'next/image'
import { ArrowRight }              from 'lucide-react'
import { useState }                from 'react'
import { services }                from '@/lib/services-data'

export function ServicesPageContent() {
  const [hovered, setHovered] = useState<string | null>(null)
  const active = services.find(s => s.slug === hovered)

  return (
    <main>

      {/* ── HEADER ── navy editorial ── */}
      <section className="bg-fd-navy px-6 lg:px-16 pt-40 pb-28">
        <div className="max-w-[1400px] mx-auto">
          <motion.p
            className="text-white/25 text-[11px] tracking-[0.36em] uppercase mb-12 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Ce que nous faisons
          </motion.p>
          <h1 className="font-bold" style={{ fontSize: 'clamp(48px, 7vw, 110px)' }}>
            <span className="block overflow-hidden leading-[1.05]">
              <motion.span
                className="block text-white"
                initial={{ y: '105%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                Tout pour
              </motion.span>
            </span>
            <span className="block overflow-hidden leading-[1.05]">
              <motion.span
                className="block text-fd-gold italic"
                initial={{ y: '105%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.85, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
              >
                votre fromagerie.
              </motion.span>
            </span>
          </h1>
          <motion.p
            className="text-white/35 text-base leading-relaxed max-w-[380px] mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            Six services pensés pour les artisans fromagers. Rien de superflu, tout ce qu&apos;il faut pour briller en ligne.
          </motion.p>
        </div>
      </section>

      {/* ── SERVICES LIST ── dark, hover → image right ── */}
      <section className="bg-fd-dark px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto flex gap-16">

          {/* Left — service rows */}
          <div className="flex-1 divide-y divide-white/8">
            {services.map((s, i) => (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.07 }}
              >
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex items-center justify-between py-10 gap-8 cursor-pointer"
                  onMouseEnter={() => setHovered(s.slug)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div className="flex items-start gap-8 flex-1 min-w-0">
                    <span className="text-white/15 font-bold text-xs tracking-widest w-6 shrink-0 pt-2">{s.num}</span>
                    <div className="min-w-0">
                      <h2
                        className={`font-bold transition-colors duration-300 ${hovered === s.slug ? 'text-fd-gold' : 'text-white/70 group-hover:text-white'}`}
                        style={{ fontSize: 'clamp(22px, 2.8vw, 42px)' }}
                      >
                        {s.name}
                      </h2>
                      <p className="text-white/30 text-sm mt-2 leading-relaxed line-clamp-1 max-w-lg">{s.tagline}</p>
                    </div>
                  </div>
                  <ArrowRight
                    size={18}
                    className={`shrink-0 transition-all duration-300 ${hovered === s.slug ? 'text-fd-gold translate-x-1' : 'text-white/15 group-hover:text-white/40'}`}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Right — sticky image */}
          <div className="hidden lg:block w-[340px] xl:w-[380px] shrink-0">
            <div className="sticky top-32 aspect-[3/4] relative overflow-hidden rounded-2xl">
              <AnimatePresence mode="wait">
                {active ? (
                  <motion.div
                    key={active.slug}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1.06 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Image
                      src={active.image}
                      alt={active.name}
                      fill
                      className="object-cover object-center"
                      sizes="380px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-fd-dark/60 via-transparent to-transparent" />
                    <div className="absolute bottom-5 left-5">
                      <p className="text-white/60 text-xs tracking-widest uppercase mb-1">{active.num}</p>
                      <p className="text-white font-semibold text-base">{active.name}</p>
                      <p className="text-white/50 text-sm mt-0.5">{active.tagline}</p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="placeholder"
                    className="absolute inset-0 border border-white/6 rounded-2xl flex flex-col items-center justify-center gap-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center">
                      <span className="text-white/20 text-lg">✦</span>
                    </div>
                    <p className="text-white/15 text-xs tracking-widest uppercase">Survolez un service</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA strip ── cream ── */}
      <section className="bg-fd-cream px-6 lg:px-16 py-24">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <h2 className="font-bold text-fd-navy leading-tight" style={{ fontSize: 'clamp(28px, 3.5vw, 52px)' }}>
            Pas sûr du service
            <br />
            qu&apos;il vous faut&nbsp;?
            <br />
            <em className="text-fd-gold not-italic">On en discute.</em>
          </h2>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2.5 text-fd-navy font-semibold text-sm border-b border-fd-navy/30 pb-0.5 hover:border-fd-navy whitespace-nowrap transition-colors duration-200 self-start md:self-auto"
          >
            Prendre contact
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </section>

    </main>
  )
}
