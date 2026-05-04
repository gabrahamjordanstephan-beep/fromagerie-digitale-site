'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

export function PhotoFeature() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section ref={ref} className="relative h-[65vh] md:h-[75vh] overflow-hidden bg-fd-dark">
      <motion.div className="absolute inset-[-12%]" style={{ y }}>
        <Image
          src="/images/strip-plateau.jpeg"
          alt="Plateau de fromages artisanaux"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-fd-navy/45" />

      {/* Citation éditoriale */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-10 left-6 lg:left-16 right-6 lg:right-16"
      >
        <p
          className="font-bold text-white italic leading-[1.05]"
          style={{ fontSize: 'clamp(22px, 3.2vw, 48px)' }}
        >
          "Votre savoir-faire mérite<br className="hidden sm:block" /> d'être vu."
        </p>
        <p className="text-white/35 text-xs tracking-[0.25em] uppercase mt-4">
          Fromagerie Digitale — depuis 2024
        </p>
      </motion.div>
    </section>
  )
}
