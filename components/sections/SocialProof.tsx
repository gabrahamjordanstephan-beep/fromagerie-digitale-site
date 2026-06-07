'use client'
import { motion } from 'framer-motion'
import { TestimonialsColumn } from '@/components/ui/testimonials-columns-1'

const testimonials = [
  {
    text: "Fromagerie Digitale a transformé notre visibilité en ligne. Aujourd'hui, nos clients nous trouvent sur Google avant même de passer devant notre vitrine.",
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    name: 'Marie Leclerc',
    role: 'Fromagerie des Coteaux, Lyon',
  },
  {
    text: "En trois mois, nos commandes en ligne ont doublé. L'équipe a su raconter notre histoire de façon authentique et convaincante.",
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    name: 'Pierre Morin',
    role: 'Maison Morin Fromages, Bordeaux',
  },
  {
    text: "Notre Instagram était inexistant. Aujourd'hui, on a une vraie communauté de passionnés qui partage nos plateaux. Incroyable résultat.",
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    name: 'Sophie Durand',
    role: 'La Cave à Fromages, Strasbourg',
  },
  {
    text: "Le site est magnifique et vraiment à notre image. Nos clients nous complimentent dessus en boutique. C'est exactement ce qu'on voulait.",
    image: 'https://randomuser.me/api/portraits/men/54.jpg',
    name: 'Jacques Bernard',
    role: 'Fromagerie Bernard & Fils, Dijon',
  },
  {
    text: "Grâce au référencement local, on est passé de 10 à plus de 80 avis Google en quelques semaines. Notre chiffre d'affaires a suivi.",
    image: 'https://randomuser.me/api/portraits/women/22.jpg',
    name: 'Isabelle Petit',
    role: 'Le Chalet des Fromages, Annecy',
  },
  {
    text: "Je suis fromager, pas marketeur. Fromagerie Digitale s'est occupée de tout et le résultat dépasse largement mes attentes.",
    image: 'https://randomuser.me/api/portraits/men/76.jpg',
    name: 'Thomas Renard',
    role: 'Affineur Renard, Rouen',
  },
  {
    text: "Notre fiche Google était incomplète et mal tenue. En un mois, on recevait des appels de nouveaux clients chaque jour.",
    image: 'https://randomuser.me/api/portraits/women/12.jpg',
    name: 'Claire Fontaine',
    role: 'Fromagerie Fontaine, Nantes',
  },
  {
    text: "Le blog qu'ils ont créé pour nous attire des clients qui cherchent du fromage affiné de qualité. Un investissement rentabilisé en 2 mois.",
    image: 'https://randomuser.me/api/portraits/men/19.jpg',
    name: 'Éric Vidal',
    role: 'Maison Vidal Affineurs, Toulouse',
  },
  {
    text: "Professionnel, rapide, à l'écoute. Ils comprennent notre métier et savent comment le mettre en valeur sur internet. Je recommande.",
    image: 'https://randomuser.me/api/portraits/women/57.jpg',
    name: 'Nathalie Rousseau',
    role: 'La Fromagerie du Marché, Rennes',
  },
]

const firstColumn  = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn  = testimonials.slice(6, 9)

export function SocialProof() {
  return (
    <section className="bg-fd-cream px-6 lg:px-16 pt-0 pb-28 lg:pb-36 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">

        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center justify-center max-w-[560px] mx-auto mb-16"
        >
          <div className="flex justify-center mb-5">
            <span className="border border-fd-gold/40 text-fd-gold text-xs font-semibold tracking-[0.22em] uppercase py-1.5 px-4 rounded-full">
              Témoignages
            </span>
          </div>

          <h2
            className="font-bold text-fd-navy text-center leading-tight"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
          >
            Ce que disent{' '}
            <span className="text-fd-gold italic">nos fromagers</span>
          </h2>

          <p className="text-center text-fd-navy/55 mt-5 text-lg leading-relaxed">
            Des artisans fromagers qui ont choisi de confier leur présence digitale à Fromagerie Digitale.
          </p>
        </motion.div>

        {/* Colonnes animées */}
        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn}  duration={18} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={22} />
          <TestimonialsColumn testimonials={thirdColumn}  className="hidden lg:block" duration={20} />
        </div>
      </div>
    </section>
  )
}
