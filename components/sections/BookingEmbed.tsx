'use client'
import { useEffect } from 'react'
import Cal, { getCalApi } from '@calcom/embed-react'

const CAL_USERNAME    = process.env.NEXT_PUBLIC_CAL_USERNAME
const CAL_EVENT_SLUG  = process.env.NEXT_PUBLIC_CAL_EVENT_SLUG ?? 'decouverte-30min'

export function BookingEmbed() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: 'fd-decouverte' })
      const fdTheme = {
        'cal-brand':                '#F4BD45',
        'cal-text':                 '#314C5C',
        'cal-text-emphasis':        '#1C2C37',
        'cal-bg':                   '#FFFFFF',
        'cal-bg-muted':             '#F5F0E8',
        'cal-border':               '#E5E0D5',
        'cal-border-subtle':        '#F0EAE0',
        'cal-brand-emphasis':       '#E5AC30',
        'cal-brand-text':           '#314C5C',
      }
      cal('ui', {
        theme:                'light',
        cssVarsPerTheme:      { light: fdTheme, dark: fdTheme },
        hideEventTypeDetails: true,
        layout:               'month_view',
      })
    })()
  }, [])

  if (!CAL_USERNAME) {
    return (
      <div className="rounded-fd-lg bg-fd-cream border border-fd-navy/10 p-8 text-center">
        <p className="font-semibold text-fd-navy mb-2">Réservation bientôt disponible</p>
        <p className="text-fd-navy/60 text-sm mb-6">
          En attendant, écrivez-nous directement — nous vous répondons sous 24h.
        </p>
        <a
          href="mailto:contact@fromageriedigitale.com"
          className="inline-flex items-center gap-2 bg-fd-gold text-fd-navy font-semibold px-6 py-3 rounded-fd hover:shadow-fd-gold transition-shadow"
        >
          contact@fromageriedigitale.com
        </a>
      </div>
    )
  }

  return (
    <div className="rounded-fd-lg bg-white shadow-fd-card p-2 sm:p-4">
      <Cal
        namespace="fd-decouverte"
        calLink={`${CAL_USERNAME}/${CAL_EVENT_SLUG}`}
        style={{ width: '100%', minHeight: '820px' }}
        config={{ layout: 'month_view', theme: 'light' }}
      />
    </div>
  )
}
