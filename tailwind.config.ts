import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Charte Fromagerie Digitale
        'fd-navy':  '#314C5C',
        'fd-gold':  '#F4BD45',
        'fd-blue':  '#4A7BA7',
        'fd-cream': '#F5F0E8',
        'fd-dark':  '#1C2C37',
        // Neutres de la refonte
        'fd-ink':   '#22343F',
        'fd-slate': '#4E6270',
        'fd-body':  '#3B4F5C',
        'fd-mist':  '#B9C7CF',
        'fd-fog':   '#D3DCE1',
        'fd-line':  '#D9D2C5',
        'fd-sand':  '#DDD3C2',
        'fd-paper': '#FBF8F3',
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        page: '1200px',
        wide: '1320px',
      },
      spacing: {
        gutter: 'clamp(16px, 5vw, 48px)',
        section: 'clamp(72px, 9vw, 112px)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
}

export default config
