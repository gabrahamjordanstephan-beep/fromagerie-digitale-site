type IconProps = {
  size?: number
  stroke?: string
  strokeWidth?: number
  className?: string
}

function Svg({
  size = 18,
  stroke = 'currentColor',
  strokeWidth = 2,
  className,
  children,
}: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {children}
    </svg>
  )
}

export const ArrowRight = (p: IconProps) => (
  <Svg {...p}><path d="M5 12h14M13 6l6 6-6 6" /></Svg>
)
export const ArrowLeft = (p: IconProps) => (
  <Svg {...p}><path d="M19 12H5M11 6l-6 6 6 6" /></Svg>
)
export const ArrowUpRight = (p: IconProps) => (
  <Svg {...p}><path d="M7 17L17 7M9 7h8v8" /></Svg>
)
export const Check = (p: IconProps) => (
  <Svg {...p}><path d="M5 12l5 5L20 7" /></Svg>
)
export const Cross = (p: IconProps) => (
  <Svg {...p}><path d="M6 6l12 12M18 6L6 18" /></Svg>
)
export const Plus = (p: IconProps) => (
  <Svg {...p}><path d="M12 5v14M5 12h14" /></Svg>
)
export const Menu = (p: IconProps) => (
  <Svg {...p}><path d="M4 7h16M4 12h16M4 17h16" /></Svg>
)
export const Clock = (p: IconProps) => (
  <Svg {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></Svg>
)
export const Star = (p: IconProps) => (
  <Svg {...p}><path d="M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.6l-5.4 2.9 1.2-6-4.5-4.2 6.1-.7z" /></Svg>
)
export const Spinner = (p: IconProps) => (
  <Svg {...p} className={`fd-spin ${p.className ?? ''}`}><path d="M12 3a9 9 0 1 0 9 9" /></Svg>
)
export const Search = (p: IconProps) => (
  <Svg {...p}><circle cx="11" cy="11" r="7" /><path d="M20 20l-3.5-3.5" /></Svg>
)
export const ChevronDown = (p: IconProps) => (
  <Svg {...p}><path d="M6 9l6 6 6-6" /></Svg>
)

/** Icône libre à partir d'un tracé SVG (données des sections). */
export function PathIcon({ d, ...p }: IconProps & { d: string }) {
  return <Svg {...p}><path d={d} /></Svg>
}

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
        <path d="M4 22 L28 10 L28 24 Z" fill="#F4BD45" />
        <path d="M4 22 L28 10 L22 6 Z" fill={dark ? '#F4BD45' : '#E1A62A'} opacity={dark ? 0.55 : 1} />
        <circle cx="20" cy="19" r="2" fill="#1C2C37" />
        <circle cx="14" cy="21" r="1.4" fill="#1C2C37" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="text-base font-bold tracking-[0.02em]">FROMAGERIE</span>
        <span className={`text-xs font-semibold tracking-[0.18em] ${dark ? 'text-fd-gold' : 'text-fd-navy'}`}>DIGITALE</span>
      </span>
    </span>
  )
}
