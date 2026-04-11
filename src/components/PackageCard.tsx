import Link from 'next/link'

interface Props {
  tag: string
  name: string
  guestRange: string
  features: string[]
  missingFeatures?: string[]
  featured?: boolean
}

export function PackageCard({ tag, name, guestRange, features, missingFeatures = [], featured = false }: Props) {
  const base = featured
    ? 'bg-forest text-ivory border-forest'
    : 'bg-ivory text-forest border-linen'

  return (
    <div className={`border rounded-sm p-7 flex flex-col gap-5 ${base}`}>
      <div>
        <p className={`text-[9px] tracking-[0.3em] uppercase mb-3 ${featured ? 'text-sand' : 'text-sage'}`}>
          {tag}
        </p>
        <h3 className={`font-heading text-2xl font-light ${featured ? 'text-ivory' : 'text-forest'}`}>
          {name}
        </h3>
        <p className={`text-xs mt-1 ${featured ? 'text-ivory/50' : 'text-charcoal/50'}`}>{guestRange}</p>
      </div>

      <div className="w-8 h-px bg-sand" />

      <ul className="flex flex-col gap-2">
        {features.map(f => (
          <li key={f} className={`text-xs flex gap-2 items-start ${featured ? 'text-ivory/80' : 'text-charcoal/70'}`}>
            <span className={featured ? 'text-sand' : 'text-sage'}>✓</span>
            {f}
          </li>
        ))}
        {missingFeatures.map(f => (
          <li key={f} className="text-xs flex gap-2 items-start text-charcoal/25">
            <span>–</span>{f}
          </li>
        ))}
      </ul>

      <Link
        href="/contact?item=package"
        className={`text-center text-[10px] tracking-widest uppercase py-3 rounded-sm mt-auto transition-all duration-200 hover:scale-[1.02] ${
          featured
            ? 'bg-sand text-charcoal btn-shimmer relative overflow-hidden'
            : 'border border-forest text-forest hover:bg-forest hover:text-ivory'
        }`}
      >
        Enquire
      </Link>
    </div>
  )
}
