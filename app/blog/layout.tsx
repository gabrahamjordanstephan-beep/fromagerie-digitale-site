import { Caveat, Courier_Prime } from 'next/font/google'

const caveat = Caveat({
  subsets:  ['latin'],
  weight:   ['400', '500', '600', '700'],
  variable: '--font-caveat',
  display:  'swap',
})

const courier = Courier_Prime({
  subsets:  ['latin'],
  weight:   ['400', '700'],
  variable: '--font-courier',
  display:  'swap',
})

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${caveat.variable} ${courier.variable}`}>
      {children}
    </div>
  )
}
