'use client'
import { motion, type Variants } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { blogPosts, formatDate } from '@/lib/blog-data'
import { BlogPostCard } from '@/components/ui/card-18'

const containerVariants: Variants = {
  hidden:   {},
  visible:  { transition: { staggerChildren: 0.12 } },
}

const itemVariants: Variants = {
  hidden:   { opacity: 0, y: 20 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

const categoryColors: Record<string, string> = {
  'Stratégie digitale': 'bg-fd-blue/12 text-fd-blue',
  'SEO':                'bg-fd-gold/15 text-fd-dark',
  'Réseaux sociaux':    'bg-fd-navy/8 text-fd-navy',
}

export function BlogContent() {
  const [featured, ...rest] = blogPosts

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-fd-navy pt-40 pb-24 px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <motion.p
            className="text-fd-gold text-xs tracking-[0.3em] uppercase mb-6"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
          >
            Blog
          </motion.p>
          <motion.h1
            className="font-bold text-white leading-tight"
            style={{ fontSize: 'clamp(40px, 6vw, 88px)' }}
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Conseils pour
            <br />
            <span className="text-fd-gold italic">fromagers digitaux</span>
          </motion.h1>
          <motion.p
            className="mt-6 text-white/50 text-lg max-w-xl leading-relaxed"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            Stratégie digitale, SEO local, réseaux sociaux : tout ce qu&apos;il faut savoir
            pour développer votre fromagerie sur internet.
          </motion.p>
        </div>
      </section>

      {/* ── Article vedette ── */}
      <section className="bg-fd-cream px-6 lg:px-16 py-16">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-fd-navy/30 text-[11px] tracking-[0.28em] uppercase mb-8">
            À la une
          </p>
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <a href={`/blog/${featured.slug}`} className="group block">
              <div className="relative overflow-hidden rounded-fd-xl border border-fd-navy/8 bg-white shadow-fd-card hover:shadow-fd-hover hover:border-fd-blue/20 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:h-[380px]">

                  {/* Image */}
                  <div className="relative w-full md:w-[42%] h-56 md:h-full overflow-hidden flex-shrink-0">
                    <img
                      src="/images/strip-plateau.jpeg"
                      alt={featured.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/20 to-transparent" />
                    <span className={`absolute top-5 left-5 text-xs font-semibold px-3 py-1.5 rounded-full ${categoryColors[featured.category] ?? 'bg-white/20 text-white'}`}>
                      {featured.category}
                    </span>
                  </div>

                  {/* Contenu */}
                  <div className="flex flex-col justify-between p-8 lg:p-10 flex-1">
                    <div>
                      <div className="flex items-center gap-3 text-fd-navy/35 text-xs mb-5">
                        <span>{formatDate(featured.date)}</span>
                        <span>·</span>
                        <span>{featured.readingTime} min de lecture</span>
                      </div>
                      <h2
                        className="font-bold text-fd-navy leading-tight mb-4 group-hover:text-fd-blue transition-colors duration-200"
                        style={{ fontSize: 'clamp(20px, 2.2vw, 30px)' }}
                      >
                        {featured.title}
                      </h2>
                      <p className="text-fd-navy/60 text-sm leading-relaxed line-clamp-3">
                        {featured.excerpt}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 mt-6 text-fd-navy font-semibold text-sm border-b border-fd-navy/20 pb-0.5 w-fit group-hover:border-fd-gold group-hover:text-fd-gold transition-colors duration-300">
                      Lire l&apos;article
                      <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>

                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Grille articles ── */}
      <section className="bg-white px-6 lg:px-16 py-16">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-fd-navy/30 text-[11px] tracking-[0.28em] uppercase mb-10">
            Autres articles
          </p>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {rest.map(post => (
              <motion.div key={post.slug} variants={itemVariants} className="h-full">
                <BlogPostCard
                  tag={post.category}
                  date={formatDate(post.date)}
                  title={post.title}
                  description={post.excerpt}
                  href={`/blog/${post.slug}`}
                  readingTime={post.readingTime}
                  className="h-full"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
