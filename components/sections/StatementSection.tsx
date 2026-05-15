'use client'

import { motion } from 'framer-motion'

export function StatementSection() {
  return (
    <section className="bg-fd-cream px-6 lg:px-16 py-28 lg:py-36">
      <div className="max-w-[1400px] mx-auto">

        {/* Ligne fine en haut */}
        <div className="border-t border-fd-navy/12 mb-14" />

        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-10">

          {/* Label gauche */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-fd-navy/30 text-[11px] tracking-[0.28em] uppercase font-medium lg:w-44 flex-shrink-0 pt-2"
          >
            Notre philosophie
          </motion.p>

          {/* Manifeste */}
          <motion.p
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-bold text-fd-navy leading-[1.1] flex-1"
            style={{ fontSize: 'clamp(28px, 3.8vw, 58px)' }}
          >
            Nous croyons que chaque fromager
            mérite une présence digitale{' '}
            <em className="text-fd-gold not-italic">à la hauteur</em>
            {' '}de son savoir-faire.
          </motion.p>
        </div>

        {/* Ligne fine en bas */}
        <div className="border-b border-fd-navy/12 mt-14" />
      </div>
    </section>
  )
}
