'use client'

import { motion }  from 'framer-motion'
import Image       from 'next/image'
import Link        from 'next/link'
import { ArrowRight } from 'lucide-react'

const values = [
  {
    num:   '01',
    title: 'Authenticité',
    desc:  'Votre voix est votre meilleur atout. On ne vous impose pas un discours corporate. On amplifie ce que vous êtes déjà.',
  },
  {
    num:   '02',
    title: 'Terroir',
    desc:  'Votre région, vos fromages, votre histoire ont une âme. Le digital doit la révéler, pas la noyer sous des templates génériques.',
  },
  {
    num:   '03',
    title: 'Résultats',
    desc:  'Chaque action a un objectif concret : clients en boutique, commandes en ligne, notoriété locale. On ne travaille pas pour faire joli.',
  },
  {
    num:   '04',
    title: 'Proximité',
    desc:  'Vous avez accès à Abraham directement, pas à une équipe tournante. Un interlocuteur qui connaît votre projet de A à Z.',
  },
]

export function AProposHero() {
  return (
    <section className="relative min-h-[70vh] bg-fd-navy overflow-hidden flex items-center pt-20">

      <div className="absolute right-0 top-0 bottom-0 w-[42%] hidden lg:block">
        <motion.div
          className="absolute inset-0"
          initial={{ clipPath: 'inset(0 100% 0 0)' }}
          animate={{ clipPath: 'inset(0 0% 0 0)' }}
          transition={{ duration: 1.4, delay: 0.15, ease: [0.76, 0, 0.24, 1] }}
        >
          <Image
            src="/images/strip-fromager.jpeg"
            alt="Artisan fromager au travail — Fromagerie Digitale, agence digitale spécialisée pour fromageries artisanales"
            fill
            className="object-cover object-center"
            priority
            sizes="42vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-fd-navy via-fd-navy/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-fd-navy/40 via-transparent to-fd-navy/10" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-16 w-full py-24">
        <div className="max-w-[600px]">

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-white/25 text-[11px] tracking-[0.36em] uppercase mb-10 font-medium"
          >
            À propos
          </motion.p>

          <h1 className="font-bold" style={{ fontSize: 'clamp(48px, 7vw, 104px)' }}>
            <span className="block overflow-hidden leading-[1.05]">
              <motion.span
                className="block text-white"
                initial={{ y: '105%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              >
                L&apos;agence
              </motion.span>
            </span>
            <span className="block overflow-hidden leading-[1.05]">
              <motion.span
                className="block text-fd-gold italic"
                initial={{ y: '105%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.85, delay: 0.43, ease: [0.22, 1, 0.36, 1] }}
              >
                qui comprend
              </motion.span>
            </span>
            <span className="block overflow-hidden leading-[1.05]">
              <motion.span
                className="block text-white"
                initial={{ y: '105%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.85, delay: 0.61, ease: [0.22, 1, 0.36, 1] }}
              >
                les fromagers.
              </motion.span>
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12"
          >
            <Link
              href="/contact"
              className="group flex items-center gap-2.5 text-fd-gold font-semibold text-sm border-b border-fd-gold/35 pb-0.5 hover:border-fd-gold transition-colors duration-200"
            >
              Échanger avec nous
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export function AProposHistoire() {
  return (
    <section className="bg-fd-cream px-6 lg:px-16 py-28">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">

          <motion.p
            className="text-fd-navy/30 text-[11px] tracking-[0.28em] uppercase font-medium lg:w-44 shrink-0 pt-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            L&apos;histoire
          </motion.p>

          <div className="flex-1 max-w-[720px] space-y-8">
            <motion.h2
              className="font-bold text-fd-navy leading-[1.2]"
              style={{ fontSize: 'clamp(22px, 2.8vw, 42px)' }}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              Fromagerie Digitale est née d&apos;un constat simple : les artisans fromagers
              ont un savoir-faire exceptionnel, mais peinent à le faire rayonner
              en ligne face aux marques industrielles.
            </motion.h2>

            <motion.p
              className="text-fd-navy/55 text-base leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              Nous avons fondé cette agence après avoir observé, de près, la réalité du terrain :
              des fromageries extraordinaires{' '}
              <Link
                href="/services/seo-local"
                className="text-fd-navy underline underline-offset-2 decoration-fd-navy/30 hover:decoration-fd-navy transition-all"
              >
                invisibles sur Google
              </Link>
              , des boutiques sans présence sur{' '}
              <Link
                href="/services/social-media"
                className="text-fd-navy underline underline-offset-2 decoration-fd-navy/30 hover:decoration-fd-navy transition-all"
              >
                les réseaux sociaux
              </Link>
              , des artisans qui méritaient bien mieux qu&apos;un site vitrine générique
              fait à la va-vite.
            </motion.p>

            <motion.p
              className="text-fd-navy/55 text-base leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              Fromagerie Digitale est la réponse à ce manque. Une{' '}
              <Link
                href="/services"
                className="text-fd-navy underline underline-offset-2 decoration-fd-navy/30 hover:decoration-fd-navy transition-all"
              >
                agence digitale spécialisée fromageries artisanales
              </Link>{' '}
              qui connaît les contraintes saisonnières, les foires fromagers, l&apos;art de l&apos;affinage
              et la logique d&apos;une boutique artisanale. Basée à Paris, elle intervient dans toute la France.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function AProposFounders() {
  return (
    <section className="bg-fd-navy px-6 lg:px-16 py-28">
      <div className="max-w-[1400px] mx-auto">

        <div className="border-t border-white/8 mb-16" />

        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-16">

          <div className="lg:w-80 shrink-0">
            <motion.h2
              className="text-white/20 text-[11px] tracking-[0.32em] uppercase mb-8 font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Les fondateurs
            </motion.h2>
            <motion.div
              className="flex gap-5"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Fondatrice */}
              <div className="flex flex-col items-center gap-2.5">
                <div className="relative w-48 h-60 rounded-xl overflow-hidden border-2 border-fd-gold/50">
                  <Image
                    src="/images/fondatrice.jpg"
                    alt="Alice Gautro, fondatrice de Fromagerie Digitale — agence digitale pour fromageries artisanales à Paris"
                    fill
                    className="object-cover object-top"
                    sizes="192px"
                  />
                </div>
                <div className="text-center">
                  <p className="text-white font-semibold text-base leading-tight">Alice Gautro</p>
                  <p className="text-white/40 text-sm mt-0.5">Fondatrice</p>
                </div>
              </div>
              {/* Co-fondateur */}
              <div className="flex flex-col items-center gap-2.5">
                <div className="relative w-48 h-60 rounded-xl overflow-hidden border-2 border-fd-gold/50">
                  <Image
                    src="/images/cofondateur.jpg"
                    alt="Abraham Grenguende, co-fondateur de Fromagerie Digitale — expert en marketing digital pour fromagers artisanaux"
                    fill
                    className="object-cover object-top"
                    sizes="192px"
                  />
                </div>
                <div className="text-center">
                  <p className="text-white font-semibold text-base leading-tight">Grenguende Abraham</p>
                  <p className="text-white/40 text-sm mt-0.5">Co-fondateur</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex-1 max-w-[600px]">
            <motion.p
              className="font-bold text-white leading-[1.2]"
              style={{ fontSize: 'clamp(20px, 2.4vw, 36px)' }}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            >
              Nous croyons que le digital bien fait est le meilleur investissement
              qu&apos;un artisan fromager puisse faire aujourd&apos;hui.
            </motion.p>

            <motion.p
              className="text-white/45 text-base leading-relaxed mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              Passionnés de gastronomie et de communication digitale, nous avons bâti
              Fromagerie Digitale pour offrir aux artisans fromagers ce que les grandes
              agences généralistes ne peuvent pas donner : une expertise sectorielle profonde,
              une relation directe et un engagement sur les résultats.
            </motion.p>

            <motion.p
              className="text-white/45 text-base leading-relaxed mt-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              Quand vous travaillez avec Fromagerie Digitale, vous travaillez avec nous.
              Du premier appel à la livraison du projet et au-delà.
            </motion.p>
          </div>
        </div>

        <div className="border-b border-white/8 mt-16" />
      </div>
    </section>
  )
}

export function AProposValeurs() {
  return (
    <section className="bg-fd-cream px-6 lg:px-16 py-28">
      <div className="max-w-[1400px] mx-auto">

        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 mb-20">
          <motion.p
            className="text-fd-navy/30 text-[11px] tracking-[0.28em] uppercase font-medium lg:w-44 shrink-0 pt-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Nos valeurs
          </motion.p>
          <motion.h2
            className="font-bold text-fd-navy leading-[1.05] flex-1"
            style={{ fontSize: 'clamp(32px, 4.5vw, 68px)' }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Ce en quoi
            <br />
            <em className="text-fd-gold not-italic">nous croyons.</em>
          </motion.h2>
        </div>

        <div className="divide-y divide-fd-navy/8">
          {values.map((v, i) => (
            <motion.div
              key={v.num}
              className="py-10 flex flex-col md:flex-row md:items-start gap-6 md:gap-16 group"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-fd-navy/20 font-bold text-sm tracking-widest w-8 shrink-0 pt-1">
                {v.num}
              </span>
              <div className="flex-1 flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-16">
                <h3
                  className="font-bold text-fd-navy group-hover:text-fd-gold transition-colors duration-300"
                  style={{ fontSize: 'clamp(20px, 2.4vw, 34px)' }}
                >
                  {v.title}
                </h3>
                <p className="text-fd-navy/50 text-sm leading-relaxed md:max-w-sm">
                  {v.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function AProposCta() {
  return (
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
            className="group flex items-center gap-2.5 text-fd-gold font-semibold text-base border-b border-fd-gold/35 pb-0.5 hover:border-fd-gold transition-colors duration-200"
          >
            Démarrer la conversation
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
