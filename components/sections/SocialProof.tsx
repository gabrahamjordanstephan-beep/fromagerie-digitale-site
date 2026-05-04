'use client'

import { motion } from 'framer-motion'

const testimonial = {
  quote:
    "Depuis que Fromagerie Digitale a repris notre présence en ligne, des clients nous trouvent sur Google tous les jours. On a doublé nos commandes en trois mois, sans dépenser un euro en publicité.",
  author: 'Marie Leclerc',
  role:   'Fromagerie des Coteaux, Lyon',
}

export function SocialProof() {
  return (
    <section className="bg-fd-navy px-6 lg:px-16 py-28 lg:py-36">
      <div className="max-w-[1400px] mx-auto">

        <div className="border-t border-white/8 mb-16" />

        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-16 lg:gap-24">

          {/* Gauche : logo + chiffre clé */}
          <div className="lg:w-72 shrink-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/logo.svg"
                alt="Fromagerie Digitale"
                className="h-9 w-auto mb-16 opacity-60"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                className="font-bold text-white leading-none"
                style={{ fontSize: 'clamp(64px, 8vw, 112px)' }}
              >
                20+
              </div>
              <div className="text-white/40 text-sm tracking-wide mt-3">
                fromagers accompagnés
              </div>
              <div className="text-white/20 text-xs mt-1.5">
                en France
              </div>
            </motion.div>
          </div>

          {/* Droite : témoignage */}
          <div className="flex-1 max-w-[600px]">
            <motion.p
              className="text-white/20 text-[11px] tracking-[0.32em] uppercase mb-10 font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Ce qu&apos;ils en disent
            </motion.p>

            <motion.blockquote
              className="font-bold text-white leading-[1.2]"
              style={{ fontSize: 'clamp(20px, 2.6vw, 38px)' }}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              &ldquo;{testimonial.quote}&rdquo;
            </motion.blockquote>

            <motion.div
              className="mt-10 flex items-center gap-5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="w-8 h-px bg-fd-gold flex-shrink-0" />
              <div>
                <p className="text-white font-semibold text-sm">{testimonial.author}</p>
                <p className="text-white/35 text-xs mt-0.5">{testimonial.role}</p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="border-b border-white/8 mt-16" />
      </div>
    </section>
  )
}
