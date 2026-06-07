'use client'
import { motion } from 'framer-motion'
import { blogPosts, formatDate } from '@/lib/blog-data'
import { BlogPostCard } from '@/components/ui/card-18'

const containerVariants = {
  hidden:   {},
  visible:  { transition: { staggerChildren: 0.15 } },
}

const itemVariants = {
  hidden:   { opacity: 0, y: 20 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
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
            Stratégie digitale, SEO local, réseaux sociaux — tout ce qu&apos;il faut savoir
            pour développer votre fromagerie sur internet.
          </motion.p>
        </div>
      </section>

      {/* ── Article vedette ── */}
      <section className="bg-fd-cream px-6 lg:px-16 py-20">
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
            <BlogPostCard
              variant="featured"
              tag={featured.category}
              date={formatDate(featured.date)}
              title={featured.title}
              description={featured.excerpt}
              href={`/blog/${featured.slug}`}
              imageUrl="/images/strip-plateau.jpeg"
              readingTime={featured.readingTime}
            />
          </motion.div>
        </div>
      </section>

      {/* ── Grille articles ── */}
      <section className="bg-white px-6 lg:px-16 py-20">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-fd-navy/30 text-[11px] tracking-[0.28em] uppercase mb-12">
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
