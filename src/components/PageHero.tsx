import { AnimatedSection } from './AnimatedSection'

interface Props {
  eyebrow: string
  title: string
  titleHtml?: boolean
  subtitle?: string
}

export function PageHero({ eyebrow, title, titleHtml = false, subtitle }: Props) {
  return (
    <section className="bg-ivory px-6 md:px-16 pt-32 pb-16">
      <AnimatedSection>
        <p className="text-sage text-[10px] tracking-widest uppercase mb-4">{eyebrow}</p>
        {titleHtml ? (
          <h1
            className="font-heading text-4xl md:text-5xl text-forest leading-tight"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        ) : (
          <h1 className="font-heading text-4xl md:text-5xl text-forest leading-tight">{title}</h1>
        )}
        <div className="w-12 h-px bg-sand mt-5 mb-5" />
        {subtitle && (
          <p className="text-sm font-light text-charcoal/70 leading-relaxed max-w-lg">{subtitle}</p>
        )}
      </AnimatedSection>
    </section>
  )
}
