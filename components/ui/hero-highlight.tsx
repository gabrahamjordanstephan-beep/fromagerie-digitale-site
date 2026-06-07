'use client'
import { cn } from '@/lib/utils'
import { useMotionValue, motion, useMotionTemplate } from 'framer-motion'
import React from 'react'

const dotPattern = (color: string) => ({
  backgroundImage: `radial-gradient(circle, ${color} 1px, transparent 1px)`,
  backgroundSize: '18px 18px',
})

export const HeroHighlight = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode
  className?: string
  containerClassName?: string
}) => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent<HTMLDivElement>) {
    if (!currentTarget) return
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <div
      className={cn(
        'relative flex items-center justify-center w-full group bg-fd-cream',
        containerClassName
      )}
      onMouseMove={handleMouseMove}
    >
      {/* Points dorés au survol */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          ...dotPattern('rgb(201 168 76)'),
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(220px circle at ${mouseX}px ${mouseY}px, black 0%, transparent 100%)
          `,
          maskImage: useMotionTemplate`
            radial-gradient(220px circle at ${mouseX}px ${mouseY}px, black 0%, transparent 100%)
          `,
        }}
      />

      <div className={cn('relative z-20 w-full', className)}>{children}</div>
    </div>
  )
}

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <motion.span
      initial={{ backgroundSize: '0% 100%' }}
      animate={{ backgroundSize: '100% 100%' }}
      transition={{ duration: 1.8, ease: 'linear', delay: 0.4 }}
      style={{
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left center',
        display: 'inline',
      }}
      className={cn(
        'relative inline-block pb-1 px-1 rounded-md bg-gradient-to-r from-fd-gold/70 to-fd-gold/50',
        className
      )}
    >
      {children}
    </motion.span>
  )
}
