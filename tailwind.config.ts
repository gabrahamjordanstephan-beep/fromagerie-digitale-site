import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'fd-navy':  '#314C5C',
        'fd-gold':  '#F4BD45',
        'fd-blue':  '#4A7BA7',
        'fd-cream': '#F5F0E8',
        'fd-dark':  '#1C2C37',
      },
      fontFamily: {
        poppins: ['"Poppins"', 'sans-serif'],
      },
      boxShadow: {
        'fd-card':  '0 4px 24px rgba(27,42,74,0.10)',
        'fd-hover': '0 12px 40px rgba(27,42,74,0.20)',
        'fd-gold':  '0 4px 20px rgba(201,168,76,0.30)',
      },
      borderRadius: {
        'fd':    '12px',
        'fd-lg': '20px',
        'fd-xl': '32px',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'float':   'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
export default config
