import Image from 'next/image'
import Link from 'next/link'
import { AnimatedSection } from './AnimatedSection'

export function CtaStrip() {
  return (
    <section className="relative px-6 md:px-16 py-24 overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=1920&q=85"
        alt="Beautiful wedding table arrangement"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-forest/70" />
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-4xl text-ivory font-light leading-snug">
            Ready to make your day{' '}
            <em className="italic text-sand">unforgettable?</em>
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <div className="flex flex-col items-start gap-2">
            <Link
              href="/contact"
              className="text-[10px] tracking-widest uppercase px-8 py-4 bg-sand text-charcoal rounded-sm relative overflow-hidden btn-shimmer hover:scale-[1.02] transition-transform duration-200 font-medium whitespace-nowrap"
            >
              Enquire Now
            </Link>
            <p className="text-[10px] text-ivory/40 tracking-wide">Free consultation · Auckland based</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
