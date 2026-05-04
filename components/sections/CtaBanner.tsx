'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export function CtaBanner() {
  return (
    <section className="bg-fd-cream px-6 lg:px-16 py-28 lg:py-40">
      <div className="max-w-[1400px] mx-auto">

        <div className="border-t border-fd-navy/12 pt-14" />

        {/* Titre massif */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-bold text-fd-navy leading-[0.95]"
          style={{ fontSize: 'clamp(48px, 7.5vw, 112px)' }}
        >
          Commençons
          <br />
          <span className="text-fd-gold italic">quelque chose</span>
          <br />
          de grand.
        </motion.h2>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-14 flex flex-col sm:flex-row items-start gap-8 sm:gap-12"
        >
          <Link
            href="/contact"
            className="group flex items-center gap-2 text-fd-navy font-semibold border-b border-fd-navy/30 pb-0.5 hover:border-fd-navy hover:text-fd-gold transition-colors duration-300"
            style={{ fontSize: 'clamp(15px, 1.4vw, 20px)' }}
          >
            Démarrer la conversation
            <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </Link>

        </motion.div>

        {/* Note bas */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-fd-navy/30 text-sm mt-10"
        >
          Premier échange offert — sans engagement.
        </motion.p>

        <div className="border-b border-fd-navy/12 mt-14" />
      </div>
    </section>
  )
}
