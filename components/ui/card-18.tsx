'use client'
import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const cardVariants = cva(
  'group relative flex flex-col overflow-hidden rounded-fd-lg border border-fd-navy/8 bg-white text-fd-navy shadow-fd-card transition-all duration-300 ease-in-out hover:shadow-fd-hover hover:border-fd-blue/20',
  {
    variants: {
      variant: {
        default:  'p-0',
        featured: 'flex-col md:flex-row',
      },
    },
    defaultVariants: { variant: 'default' },
  }
)

const categoryColors: Record<string, string> = {
  'Stratégie digitale': 'bg-fd-blue/12 text-fd-blue',
  'SEO':                'bg-fd-gold/15 text-fd-dark',
  'Réseaux sociaux':    'bg-fd-navy/8 text-fd-navy',
}

export interface BlogPostCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  tag: string
  date: string
  title: string
  description: string
  imageUrl?: string
  href: string
  readMoreText?: string
  readingTime?: number
}

const BlogPostCard = React.forwardRef<HTMLDivElement, BlogPostCardProps>(
  (
    { className, variant, tag, date, title, description, imageUrl, href,
      readMoreText = "Lire l'article", readingTime, ...props },
    ref
  ) => {
    const cardHover = {
      hover: { y: -4, transition: { duration: 0.2, ease: 'easeInOut' } },
    }

    const tagClass = categoryColors[tag] ?? 'bg-fd-navy/8 text-fd-navy'

    const content = (
      <>
        {variant === 'featured' && imageUrl && (
          <div className="relative w-full overflow-hidden md:w-1/2 lg:w-3/5 min-h-[280px] md:min-h-0">
            <img
              src={imageUrl}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-fd-navy/10" />
          </div>
        )}

        <div className="flex flex-1 flex-col justify-between p-7 md:p-9">
          <div>
            <div className="mb-5 flex items-center gap-3 flex-wrap">
              <span className={cn('rounded-full text-xs font-semibold px-3 py-1.5 tracking-wide', tagClass)}>
                {tag}
              </span>
              <span className="text-fd-navy/35 text-xs">{date}</span>
              {readingTime && (
                <span className="text-fd-navy/35 text-xs">{readingTime} min de lecture</span>
              )}
            </div>

            <h3
              className={cn(
                'font-bold leading-tight text-fd-navy',
                variant === 'featured' ? 'text-2xl lg:text-3xl mb-4' : 'text-lg mb-3'
              )}
            >
              <span className="bg-gradient-to-r from-fd-gold to-fd-gold bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_2px]">
                {title}
              </span>
            </h3>

            <p className={cn('text-fd-navy/60 leading-relaxed', variant === 'featured' ? 'text-base' : 'text-sm')}>
              {description}
            </p>
          </div>

          {variant === 'featured' && (
            <div className="mt-8">
              <Button variant="default" className="group/button">
                {readMoreText}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
              </Button>
            </div>
          )}

          {variant !== 'featured' && (
            <div className="mt-5 flex items-center gap-1.5 text-fd-blue text-sm font-semibold">
              Lire
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </div>
          )}
        </div>
      </>
    )

    return (
      <motion.div
        ref={ref}
        className={cn(cardVariants({ variant, className }))}
        variants={cardHover}
        whileHover="hover"
        {...(props as React.HTMLAttributes<HTMLDivElement>)}
      >
        <a href={href} className="absolute inset-0 z-10" aria-label={`Lire : ${title}`}>
          <span className="sr-only">Lire l&apos;article</span>
        </a>
        <div className="relative z-0 flex h-full w-full flex-col md:flex-row">{content}</div>
      </motion.div>
    )
  }
)

BlogPostCard.displayName = 'BlogPostCard'
export { BlogPostCard }
