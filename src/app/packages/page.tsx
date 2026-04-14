import { PageHero } from '@/components/PageHero'
import { PackageCard } from '@/components/PackageCard'
import { AnimatedSection } from '@/components/AnimatedSection'
import Link from 'next/link'
import { CtaStrip } from '@/components/CtaStrip'

const packages = [
  {
    tag: 'Intimate',
    name: 'Elopement',
    guestRange: 'Up to 20 guests',
    features: ['Wedding bar', '20 place settings', 'Linen included'],
    missingFeatures: ['Tables & chairs'],
    featured: false,
  },
  {
    tag: 'Most Popular',
    name: 'Small Wedding',
    guestRange: '20–60 guests',
    features: ['Wedding bar', '60 place settings', 'Linen & glassware', 'Tables & chairs'],
    missingFeatures: [],
    featured: true,
  },
  {
    tag: 'Full Celebration',
    name: 'Full Wedding',
    guestRange: '60–120 guests',
    features: ['Wedding bar', '120 place settings', 'Full linen set', 'Tables, chairs & more'],
    missingFeatures: [],
    featured: false,
  },
]

export const metadata = {
  title: 'Packages',
  description: 'Bundled wedding hire packages for every size celebration in Auckland — from intimate elopements to full weddings up to 120 guests.',
}

export default function PackagesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Packages"
        title="Bundled for <em>every celebration</em>"
        titleHtml
        subtitle="Not sure where to start? Our packages take the guesswork out of planning — everything you need, bundled together."
        imageSrc="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&q=85"
        imageAlt="Wedding reception table setting"
      />

      <section className="px-6 md:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {packages.map((pkg, i) => (
            <AnimatedSection key={pkg.name} delay={i * 0.12}>
              <PackageCard {...pkg} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <p className="text-center text-sm font-light text-charcoal/50 mt-10">
            Not sure which package fits?{' '}
            <Link href="/contact" className="text-forest underline underline-offset-4 hover:text-sage transition-colors">
              Get in touch
            </Link>{' '}
            and we&apos;ll help you choose.
          </p>
        </AnimatedSection>
      </section>

      <CtaStrip />
    </main>
  )
}
