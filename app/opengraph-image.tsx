import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt     = "Fromagerie Digitale — L'agence qui parle le langage des fromagers"
export const size    = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#1B2A4A',
          padding: '72px 80px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Logo mark — 3 chevrons dorés */}
        <svg width="72" height="72" viewBox="0 15 65 70" xmlns="http://www.w3.org/2000/svg">
          <path fill="#C9A84C" d="M47.4,19.56L3.57,41.42C1.93,42.23,0,41.04,0,39.21v-7.12c0-1.89,1.07-3.62,2.76-4.46l22.8-11.38c2.02-1.01,4.24-1.53,6.49-1.53h14.21c2.7,0,3.55,3.64,1.14,4.84Z"/>
          <path fill="#C9A84C" d="M50.9,20.94L3.89,43.69c-2.06,1-3.22,3.22-2.86,5.48l2.17,13.63c.36,2.29,3,3.39,4.89,2.05l44.26-31.6c2.19-1.57,3.31-4.24,2.89-6.9l-.55-3.43c-.28-1.76-2.18-2.75-3.78-1.97Z"/>
          <path fill="#C9A84C" d="M13.79,78.35l46.52-23.75c2.04-1.04,3.15-3.29,2.74-5.54l-2.46-13.58c-.41-2.28-3.07-3.33-4.93-1.94L12.09,66.09c-2.16,1.61-3.22,4.31-2.74,6.96l.62,3.41c.32,1.75,2.23,2.7,3.82,1.89Z"/>
        </svg>

        {/* Texte central */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ fontSize: 72, fontWeight: 800, color: '#ffffff', lineHeight: 1.0 }}>
            Fromagerie
          </div>
          <div style={{ fontSize: 72, fontWeight: 800, color: '#C9A84C', lineHeight: 1.0, fontStyle: 'italic' }}>
            Digitale.
          </div>
        </div>

        {/* Bas de page */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div style={{ fontSize: 22, color: 'rgba(255,255,255,0.45)', maxWidth: 600, lineHeight: 1.4 }}>
            L&apos;agence digitale spécialisée pour les fromageries artisanales
          </div>
          <div style={{ fontSize: 18, color: '#C9A84C', letterSpacing: '0.1em', fontWeight: 600 }}>
            fromageriedigitale.fr
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
