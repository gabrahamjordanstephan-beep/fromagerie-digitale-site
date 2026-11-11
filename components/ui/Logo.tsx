import Image from 'next/image'

/**
 * Logo officiel de Fromagerie Digitale.
 * `onDark` : version au texte blanc, pour les fonds bleu nuit.
 */
export function Logo({ onDark = false, className = 'h-9 w-auto' }: { onDark?: boolean; className?: string }) {
  return (
    <Image
      src={onDark ? '/logo.svg' : '/logo-dark.svg'}
      alt="Fromagerie Digitale"
      width={424}
      height={102}
      priority
      unoptimized
      className={className}
    />
  )
}
