'use client'

import { useState } from 'react'
import { Check, PathIcon } from '@/components/ui/icons'

const LINK = 'M10 14a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1M14 10a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1'

export function CopyLink() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className={`inline-flex min-h-[44px] items-center gap-2 rounded-full border border-fd-navy px-4 text-sm font-semibold transition-colors ${
        copied ? 'bg-fd-navy text-white' : 'bg-transparent text-fd-navy'
      }`}
    >
      {copied ? <Check size={16} /> : <PathIcon d={LINK} size={16} />}
      <span aria-live="polite">{copied ? 'Lien copié' : 'Copier le lien'}</span>
    </button>
  )
}
