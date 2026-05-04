'use client'

import { motion } from 'framer-motion'

const values = [
  {
    num:   '01',
    title: 'Authenticité',
    desc:  'Pas de jargon, pas de promesses vides. On travaille avec votre voix, votre histoire, vos fromages. Le digital doit vous prolonger, pas vous dénaturer.',
  },
  {
    num:   '02',
    title: 'Terroir',
    desc:  'Votre région, vos producteurs, vos affinages racontent une histoire unique. Notre rôle est de la faire entendre là où vos clients vous cherchent.',
  },
  {
    num:   '03',
    title: 'Résultats',
    desc:  'Chaque action a un objectif mesurable : plus de clients en boutique, plus de commandes en ligne. On ne travaille pas pour faire joli.',
  },
  {
    num:   '04',
    title: 'Artisanat',
    desc:  'Comme vous, nous travaillons sur mesure. Aucune solution copier-coller. Chaque fromager reçoit une stratégie pensée pour son marché et ses ambitions.',
  },
]

export function ValuesSection() {
  return (
    <section className="bg-fd-cream px-6 lg:px-16 py-28 lg:py-36">
      <div className="max-w-[1400px] mx-auto">

        {/* En-tête */}
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

        {/* Lignes valeurs */}
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
