'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const services = [
  {
    id: 'seo',    num: '01', name: 'SEO Local',
    desc: 'Soyez trouvé par vos clients locaux.',
    href: '/services/seo-local',
    img: '/images/strip-boutique.jpeg',
  },
  {
    id: 'ecom',   num: '02', name: 'E-commerce',
    desc: 'Vendez vos fromages partout en France.',
    href: '/services/ecommerce',
    img: '/images/strip-ecommerce.jpeg',
  },
  {
    id: 'brand',  num: '03', name: 'Branding',
    desc: 'Une identité qui raconte votre terroir.',
    href: '/services/branding',
    img: '/images/cta-bg.jpeg',
  },
  {
    id: 'social', num: '04', name: 'Social Media',
    desc: 'Des contenus qui font saliver.',
    href: '/services/social-media',
    img: '/images/strip-social.jpeg',
  },
  {
    id: 'ads',    num: '05', name: 'Ads Meta & Google',
    desc: 'Attirez des amateurs de fromage.',
    href: '/services/ads',
    img: '/images/strip-fromager.jpeg',
  },
  {
    id: 'form',   num: '06', name: 'Formation Digitale',
    desc: 'Prenez en main votre communication.',
    href: '/services/formation',
    img: '/images/strip-plateau.jpeg',
  },
]

export function ServicesPreview() {
  const [hovered, setHovered] = useState<string | null>(null)
  const active = services.find(s => s.id === hovered)

  return (
    <section className="bg-fd-dark px-6 lg:px-16 py-28">
      <div className="max-w-[1400px] mx-auto">

        <div className="flex items-start gap-16">

          {/* Liste services */}
          <div className="flex-1 min-w-0">

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-white/25 text-[11px] tracking-[0.3em] uppercase mb-14"
            >
              Ce que nous faisons
            </motion.p>

            <div>
              {services.map((s, i) => (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                >
                  <Link
                    href={s.href}
                    onMouseEnter={() => setHovered(s.id)}
                    onMouseLeave={() => setHovered(null)}
                    className="group flex items-center justify-between border-t border-white/8 py-6 first:border-t-0"
                  >
                    <div className="flex items-baseline gap-6 md:gap-10 min-w-0">
                      <span className="text-white/20 text-xs font-mono flex-shrink-0">{s.num}</span>
                      <div className="min-w-0">
                        <span
                          className={`font-bold block leading-tight transition-colors duration-300 ${
                            hovered === s.id ? 'text-fd-gold' : 'text-white'
                          }`}
                          style={{ fontSize: 'clamp(22px, 2.8vw, 44px)' }}
                        >
                          {s.name}
                        </span>
                        <span className="text-white/30 text-sm mt-0.5 block lg:hidden">{s.desc}</span>
                      </div>
                    </div>
                    <ArrowUpRight
                      size={18}
                      className={`flex-shrink-0 ml-4 transition-all duration-300 ${
                        hovered === s.id
                          ? 'text-fd-gold translate-x-1 -translate-y-1'
                          : 'text-white/15'
                      }`}
                    />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Ligne finale */}
            <div className="border-t border-white/8 mt-0" />
          </div>

          {/* Image au survol — desktop uniquement */}
          <div className="hidden lg:block w-[340px] xl:w-[380px] flex-shrink-0">
            <div className="sticky top-32 aspect-[3/4] relative overflow-hidden rounded-2xl">
              <AnimatePresence mode="wait">
                {active ? (
                  <motion.div
                    key={active.id}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1.06 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Image
                      src={active.img}
                      alt={active.name}
                      fill
                      className="object-cover"
                      sizes="380px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-fd-dark/60 via-transparent to-transparent" />
                    <div className="absolute bottom-5 left-5">
                      <p className="text-white/60 text-xs tracking-widest uppercase mb-1">{active.num}</p>
                      <p className="text-white font-semibold text-base">{active.name}</p>
                      <p className="text-white/50 text-sm mt-0.5">{active.desc}</p>
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
      </div>
    </section>
  )
}
