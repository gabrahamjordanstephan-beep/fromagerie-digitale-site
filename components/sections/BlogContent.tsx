'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { blogPosts, formatDate } from '@/lib/blog-data'

function PaperTexture({ tone = 'dark' }: { tone?: 'dark' | 'cream' }) {
  const opacity = tone === 'dark' ? 0.06 : 0.08
  const blend   = tone === 'dark' ? 'mix-blend-screen' : 'mix-blend-multiply'
  return (
    <div
      aria-hidden
      className={`absolute inset-0 pointer-events-none ${blend}`}
      style={{
        opacity,
        backgroundImage:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.9 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
        backgroundSize: '240px 240px',
      }}
    />
  )
}

function DottedLine() {
  return (
    <span
      aria-hidden
      className="flex-1 mx-3 border-b border-dotted border-fd-navy/40 relative -top-1"
    />
  )
}

export function BlogContent() {
  const [featured, ...rest] = blogPosts

  return (
    <>
      {/* ─────────── PROLOGUE ─── hero éditorial navy ─────────── */}
      <section className="relative min-h-[85vh] bg-fd-dark overflow-hidden flex items-center pt-32 pb-24">
        <PaperTexture tone="dark" />

        <div className="relative w-full max-w-[1600px] mx-auto px-8 lg:px-20 grid grid-cols-12 gap-6">

          {/* Coin haut gauche — édition */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="col-span-12 flex items-center gap-4 -mt-8 lg:-mt-16 mb-10 lg:mb-16"
          >
            <span className="text-fd-gold text-[11px] tracking-[0.32em] uppercase font-semibold">
              Le Cahier du Crémier
            </span>
            <span className="flex-1 h-px bg-white/15" />
            <span className="text-white/40 text-[11px] tracking-[0.28em] uppercase" style={{ fontFamily: 'var(--font-courier)' }}>
              Édition {String(blogPosts.length).padStart(2, '0')} · {new Date().getFullYear()}
            </span>
          </motion.div>

          {/* Titre éditorial */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 lg:col-span-10 font-bold text-white leading-[0.92] tracking-[-0.02em]"
            style={{ fontSize: 'clamp(44px, 8vw, 132px)' }}
          >
            Chroniques
            <br />
            <span
              className="text-fd-gold"
              style={{
                fontFamily:    'var(--font-caveat)',
                fontWeight:    500,
                letterSpacing: '-0.02em',
                fontSize:      'clamp(56px, 10vw, 160px)',
              }}
            >
              digitales.
            </span>
          </motion.h1>

          {/* Chapô */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 lg:col-span-7 text-white/55 leading-relaxed mt-8 lg:mt-12"
            style={{ fontSize: 'clamp(16px, 1.4vw, 20px)' }}
          >
            SEO, sites, réseaux sociaux, IA. Ce que les fromagers artisans doivent savoir pour exister en ligne en {new Date().getFullYear()}. Un article, une conviction, jamais de bullshit.
          </motion.p>

          {/* Signature basse */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="col-span-12 flex items-end justify-between mt-16 lg:mt-24"
          >
            <div className="flex items-center gap-3">
              <svg width="26" height="26" viewBox="0 0 32 32" className="text-fd-gold" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round">
                <path d="M4 24 L28 24" />
                <path d="M7 24 C 7 15, 25 15, 25 24" />
                <path d="M16 15 L16 11" />
                <circle cx="16" cy="10" r="1.2" fill="currentColor" stroke="none" />
              </svg>
              <span className="text-white/40 text-[11px] tracking-[0.24em] uppercase font-medium">
                Fromagerie Digitale
              </span>
            </div>
            <div className="hidden md:flex items-center gap-3 text-white/30 text-[11px] tracking-[0.24em] uppercase">
              <span>Lire</span>
              <motion.span
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                ↓
              </motion.span>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fd-gold/40 to-transparent" />
      </section>

      {/* ─────────── ARTICLE VEDETTE ─── éditorial cream ─────────── */}
      <section className="relative bg-fd-cream px-6 lg:px-16 py-28 lg:py-36 overflow-hidden">
        <PaperTexture tone="cream" />

        <div className="relative max-w-[1400px] mx-auto grid grid-cols-12 gap-8 lg:gap-16">

          {/* Colonne gauche — numéro énorme + méta */}
          <div className="col-span-12 lg:col-span-4">
            <p className="text-fd-navy/40 text-[11px] tracking-[0.32em] uppercase font-semibold mb-6">
              À la Une
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-fd-navy font-bold leading-none"
              style={{ fontSize: 'clamp(96px, 12vw, 200px)' }}
            >
              N°01
            </motion.div>
            <div className="mt-8 space-y-1" style={{ fontFamily: 'var(--font-courier)' }}>
              <p className="text-fd-navy text-sm">{formatDate(featured.date)}</p>
              <p className="text-fd-navy/60 text-xs uppercase tracking-widest">{featured.category}</p>
              <p className="text-fd-navy/60 text-xs">{featured.readingTime} min de lecture</p>
            </div>
          </div>

          {/* Colonne droite — titre + chapô + CTA */}
          <div className="col-span-12 lg:col-span-8 lg:pt-10">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="font-bold text-fd-navy leading-[1.05] tracking-[-0.01em]"
              style={{ fontSize: 'clamp(32px, 4.2vw, 64px)' }}
            >
              <Link href={`/blog/${featured.slug}`} className="hover:text-fd-navy/70 transition-colors">
                {featured.title}
              </Link>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-fd-navy/70 mt-8 leading-relaxed max-w-[640px]"
              style={{ fontSize: 'clamp(16px, 1.4vw, 20px)' }}
            >
              {featured.excerpt}
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-10"
            >
              <Link
                href={`/blog/${featured.slug}`}
                className="group inline-flex items-center gap-2.5 text-fd-navy font-bold text-sm tracking-wide border-b-2 border-fd-gold pb-1 hover:text-fd-gold transition-colors"
              >
                Lire l&apos;article
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────── LE SOMMAIRE ─── liste style ticket ─────────── */}
      {rest.length > 0 && (
        <section className="relative bg-white px-6 lg:px-16 py-28 lg:py-36 overflow-hidden">
          <div className="relative max-w-[1400px] mx-auto grid grid-cols-12 gap-8 lg:gap-16">

            {/* Colonne gauche — étiquette manuscrite */}
            <div className="col-span-12 lg:col-span-4">
              <p className="text-fd-navy/40 text-[11px] tracking-[0.32em] uppercase font-semibold mb-6">
                Le sommaire
              </p>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="text-fd-navy leading-[1.1]"
                style={{
                  fontFamily: 'var(--font-caveat)',
                  fontWeight: 500,
                  fontSize:   'clamp(38px, 4.2vw, 64px)',
                }}
              >
                Toutes les
                <br />
                chroniques.
              </motion.p>
              <p className="mt-6 text-fd-navy/60 text-sm leading-relaxed max-w-xs" style={{ fontFamily: 'var(--font-courier)' }}>
                Une ligne par article. Une conviction, un temps de lecture, une catégorie. Choisissez.
              </p>
            </div>

            {/* Colonne droite — le ticket */}
            <div className="col-span-12 lg:col-span-8 lg:pt-6">
              <ul className="divide-y divide-fd-navy/15">
                {rest.map((post, i) => (
                  <motion.li
                    key={post.slug}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
                  >
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-4 py-7 hover:bg-fd-cream/50 -mx-4 px-4 transition-colors"
                    >
                      <span className="text-fd-gold font-bold text-lg tabular-nums" style={{ fontFamily: 'var(--font-courier)' }}>
                        N°{String(i + 2).padStart(2, '0')}
                      </span>
                      <span className="min-w-0">
                        <span className="block font-bold text-fd-navy leading-tight group-hover:text-fd-navy/70 transition-colors" style={{ fontSize: 'clamp(18px, 2vw, 26px)' }}>
                          {post.title}
                        </span>
                        <span className="flex items-center gap-3 mt-2 text-fd-navy/50 text-xs tracking-wide" style={{ fontFamily: 'var(--font-courier)' }}>
                          <span>{formatDate(post.date)}</span>
                          <span>·</span>
                          <span className="uppercase">{post.category}</span>
                          <span>·</span>
                          <span>{post.readingTime} min</span>
                        </span>
                      </span>
                      <ArrowRight
                        size={18}
                        className="text-fd-navy/30 group-hover:text-fd-gold group-hover:translate-x-1 transition-all self-center"
                      />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fd-gold/40 to-transparent" />
        </section>
      )}
    </>
  )
}
