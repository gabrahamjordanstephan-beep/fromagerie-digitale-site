import type { Metadata } from 'next'
import { BlogContent } from '@/components/sections/BlogContent'
import { CtaBanner } from '@/components/sections/CtaBanner'

export const metadata: Metadata = {
  title: 'Blog — Conseils digitaux pour fromageries artisanales',
  description:
    'Stratégie digitale, SEO local, réseaux sociaux : nos conseils pratiques pour développer votre fromagerie artisanale sur internet.',
  alternates: { canonical: 'https://fromageriedigitale.com/blog' },
  openGraph: {
    title: 'Blog Fromagerie Digitale',
    description: 'Conseils digitaux pour fromageries artisanales.',
    url: 'https://fromageriedigitale.com/blog',
  },
}

export default function BlogPage() {
  return (
    <>
      <BlogContent />
      <CtaBanner />
    </>
  )
}
