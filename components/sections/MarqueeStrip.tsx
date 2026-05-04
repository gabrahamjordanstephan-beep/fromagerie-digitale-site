'use client'

import { motion } from 'framer-motion'

const itemsRow1 = [
  'SEO Local',
  'E-commerce',
  'Branding',
  'Social Media',
  'Ads Meta & Google',
  'Formation Digitale',
  'Sites Web',
  'Identité Visuelle',
]

const itemsRow2 = [
  'Fromageries Artisanales',
  'Affineurs',
  'Crémiers',
  'Caves à Fromages',
  'Épiceries Fines',
  'Marchés Locaux',
  'Producteurs',
  'Artisans du Goût',
]

function Row({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const repeated = [...items, ...items, ...items, ...items]
  return (
    <div className="overflow-hidden py-4">
      <motion.div
        animate={{ x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
        transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
        className="flex w-max"
      >
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center">
            <span
              className={`font-bold text-sm tracking-[0.14em] uppercase px-8 whitespace-nowrap ${
                reverse ? 'text-white/20 font-normal' : 'text-fd-gold/75'
              }`}
            >
              {item}
            </span>
            <span
              className={`flex-shrink-0 ${reverse ? 'text-white/10' : 'text-fd-gold/35'}`}
              style={{ fontSize: '9px' }}
            >
              ✦
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export function MarqueeStrip() {
  return (
    <div className="bg-fd-dark overflow-hidden select-none border-t border-white/[0.04] border-b border-b-white/[0.04]">
      <Row items={itemsRow1} />
      <div className="border-t border-white/[0.04]" />
      <Row items={itemsRow2} reverse />
    </div>
  )
}
