import Image from 'next/image'
import Link from 'next/link'

interface Props {
  name: string
  description: string
  imageSrc: string
  imageAlt: string
  enquireParam: string
  featured?: boolean
}

export function ItemCard({ name, description, imageSrc, imageAlt, enquireParam, featured = false }: Props) {
  if (featured) {
    return (
      <div className="col-span-full bg-forest rounded-sm overflow-hidden flex flex-col md:flex-row items-center gap-8 p-8 md:p-12">
        <div className="flex-1">
          <p className="text-sand text-[9px] tracking-[0.3em] uppercase mb-3">Signature Piece</p>
          <h2 className="font-heading text-3xl md:text-4xl text-ivory font-light">{name}</h2>
          <p className="text-sm font-light text-ivory/60 mt-3 leading-relaxed max-w-md">{description}</p>
          <Link
            href={`/contact?item=${enquireParam}`}
            className="inline-block mt-6 text-[10px] tracking-widest uppercase px-6 py-3 bg-sand text-charcoal rounded-sm relative overflow-hidden btn-shimmer hover:scale-[1.02] transition-transform duration-200"
          >
            Enquire About This
          </Link>
        </div>
        <div className="relative w-full md:w-72 h-48 md:h-56 rounded-sm overflow-hidden flex-shrink-0">
          <Image src={imageSrc} alt={imageAlt} fill sizes="(max-width: 768px) 100vw, 300px" className="object-cover" />
        </div>
      </div>
    )
  }

  return (
    <div className="bg-linen rounded-sm overflow-hidden group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="font-heading text-xl text-forest">{name}</h3>
        <p className="text-xs font-light text-charcoal/60 mt-2 leading-relaxed">{description}</p>
        <Link
          href={`/contact?item=${enquireParam}`}
          className="inline-block mt-4 text-[10px] tracking-widest uppercase text-forest border-b border-forest/30 hover:border-forest transition-colors duration-200 pb-px"
        >
          Enquire →
        </Link>
      </div>
    </div>
  )
}
