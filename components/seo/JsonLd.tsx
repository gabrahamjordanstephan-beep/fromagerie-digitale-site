type Json = string | number | boolean | null | Json[] | { [key: string]: Json }

/** Insère un bloc de données structurées schema.org. */
export function JsonLd({ data }: { data: { [key: string]: Json } }) {
  return (
    <script
      type="application/ld+json"
      // Les données sont construites côté serveur à partir de constantes du site.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  )
}
