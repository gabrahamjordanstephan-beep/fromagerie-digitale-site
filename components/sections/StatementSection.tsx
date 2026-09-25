'use client'

import { motion } from 'framer-motion'

export function StatementSection() {
  return (
    <section className="relative bg-fd-cream text-fd-navy px-6 lg:px-16 py-32 lg:py-40">
      <div className="max-w-[1400px] mx-auto grid grid-cols-12 gap-6">

        {/* Petit label discret — style FD */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="col-span-12 lg:col-start-2 lg:col-end-12 text-fd-navy/30 text-[11px] tracking-[0.28em] uppercase font-medium mb-10"
        >
          Notre philosophie
        </motion.p>

        {/* Manifeste : un paragraphe continu, Poppins light, italique gold sur les mots-clés */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="col-span-12 lg:col-start-2 lg:col-end-12 font-light leading-[1.15] tracking-[-0.015em]"
          style={{ fontSize: 'clamp(22px, 2.8vw, 44px)' }}
        >
          Nous ne faisons pas de{' '}
          <em className="italic text-fd-gold font-normal">marketing</em>
          . Nous racontons des{' '}
          <em className="italic text-fd-gold font-normal">vies</em>
          . Des mains dans le lait cru à quatre heures du matin. Des affinages qui refusent d&apos;être pressés. Des filières courtes qui préfèrent survivre{' '}
          <em className="italic text-fd-gold font-normal">debout</em>
          {' '}que grandir couchées.
        </motion.p>

      </div>
    </section>
  )
}
