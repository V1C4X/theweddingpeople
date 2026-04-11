import Image from 'next/image'
import Link from 'next/link'
import { AnimatedSection } from '@/components/AnimatedSection'
import { AnimatedWords } from '@/components/AnimatedWords'
import { ItemCard } from '@/components/ItemCard'
import { PackageCard } from '@/components/PackageCard'

const previewItems = [
  { name: 'Wedding Bar', description: 'Our signature statement piece — the perfect centrepiece for any reception.', imageSrc: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80', imageAlt: 'Wedding bar', category: 'bar', enquireParam: 'bar', featured: false },
  { name: 'Tableware', description: 'Crockery, glassware, and linen to complete your tablescape.', imageSrc: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80', imageAlt: 'Tableware', category: 'tableware', enquireParam: 'tableware', featured: false },
  { name: 'Furniture', description: 'Chairs and tables for every style of wedding and venue.', imageSrc: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80', imageAlt: 'Wedding furniture', category: 'furniture', enquireParam: 'furniture', featured: false },
]

const previewPackages = [
  { tag: 'Intimate', name: 'Elopement', guestRange: 'Up to 20 guests', features: ['Wedding bar', '20 place settings', 'Linen'], missingFeatures: [] },
  { tag: 'Most Popular', name: 'Small Wedding', guestRange: '20–60 guests', features: ['Wedding bar', '60 place settings', 'Linen & glassware', 'Tables & chairs'], missingFeatures: [], featured: true },
  { tag: 'Full Celebration', name: 'Full Wedding', guestRange: '60–120 guests', features: ['Wedding bar', '120 place settings', 'Full linen set', 'Tables, chairs & more'], missingFeatures: [] },
]

const galleryPreviews = [
  { src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80', alt: 'Wedding 1' },
  { src: 'https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=800&q=80', alt: 'Wedding 2' },
  { src: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=800&q=80', alt: 'Wedding 3' },
  { src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80', alt: 'Wedding 4' },
  { src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80', alt: 'Wedding 5' },
]

export default function HomePage() {
  return (
    <main>
      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-forest via-[#2d3e35] to-[#1e2b24] overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_#7a9b6e,_transparent_70%)]" />

        <div className="relative z-10 px-6 md:px-16 py-32 max-w-3xl">
          <AnimatedSection delay={0.1}>
            <p className="text-sand text-[10px] tracking-[0.4em] uppercase mb-6">Auckland Wedding Hire</p>
          </AnimatedSection>

          <AnimatedWords
            text="Beautiful details for your perfect day"
            as="h1"
            className="font-heading text-5xl md:text-7xl text-ivory font-light leading-[1.05]"
          />

          <AnimatedSection delay={0.9}>
            <p className="text-sm font-light text-ivory/60 mt-6 max-w-md leading-relaxed">
              Statement pieces, elegant tableware, and everything in between — hire what you love for your special day.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={1.1}>
            <div className="flex flex-wrap gap-4 mt-10">
              <Link href="/hire"
                className="text-[10px] tracking-widest uppercase px-7 py-4 bg-sand text-charcoal rounded-sm relative overflow-hidden btn-shimmer hover:scale-[1.02] transition-transform duration-200 font-medium">
                View Hire Items
              </Link>
              <Link href="/contact"
                className="text-[10px] tracking-widest uppercase px-7 py-4 border border-ivory/30 text-ivory rounded-sm hover:bg-ivory/10 transition-colors duration-200">
                Get a Quote
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── ABOUT ────────────────────────────────────────────────────── */}
      <section className="px-6 md:px-16 py-20 bg-ivory">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <p className="text-sage text-[10px] tracking-widest uppercase mb-4">About Us</p>
            <h2 className="font-heading text-4xl text-forest leading-tight">
              We make your vision{' '}
              <em className="italic text-sand">a reality</em>
            </h2>
            <div className="w-10 h-px bg-sand my-5" />
            <p className="text-sm font-light text-charcoal/70 leading-relaxed max-w-md">
              Based in Auckland, The Wedding People offers a curated collection of hire items —
              headlined by our statement wedding bar. Whether you&apos;re planning an intimate elopement
              or a full celebration, we have everything you need to make the day beautiful.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-2 gap-3">
              {['photo-1519225421980-715cb0215aed', 'photo-1460978812857-470ed1c77af0', 'photo-1532712938310-34cb3982ef74', 'photo-1511795409834-ef04bbd61622'].map((id, i) => (
                <div key={i} className="relative aspect-square rounded-sm overflow-hidden">
                  <Image
                    src={`https://images.unsplash.com/${id}?w=400&q=80`}
                    alt={`Wedding inspiration ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── HIRE ITEMS PREVIEW ───────────────────────────────────────── */}
      <section className="px-6 md:px-16 py-20 bg-linen">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="flex justify-between items-end mb-10">
              <div>
                <p className="text-sage text-[10px] tracking-widest uppercase mb-3">What We Offer</p>
                <h2 className="font-heading text-4xl text-forest">Our hire collection</h2>
              </div>
              <Link href="/hire" className="text-[10px] tracking-widest uppercase text-forest underline underline-offset-4 hover:text-sage transition-colors hidden md:block">
                View All Items →
              </Link>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {previewItems.map((item, i) => (
              <AnimatedSection key={item.name} delay={i * 0.12}>
                <ItemCard {...item} />
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.4}>
            <div className="text-center mt-8 md:hidden">
              <Link href="/hire" className="text-[10px] tracking-widest uppercase text-forest underline">
                View All Items →
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── PACKAGES TASTER ──────────────────────────────────────────── */}
      <section className="px-6 md:px-16 py-20 bg-ivory">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <p className="text-sage text-[10px] tracking-widest uppercase mb-3">Packages</p>
            <h2 className="font-heading text-4xl text-forest mb-2">A package for every wedding</h2>
            <div className="w-10 h-px bg-sand mb-10" />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {previewPackages.map((pkg, i) => (
              <AnimatedSection key={pkg.name} delay={i * 0.12}>
                <PackageCard {...pkg} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GALLERY PREVIEW ──────────────────────────────────────────── */}
      <section className="px-6 md:px-16 py-20 bg-linen">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="flex justify-between items-end mb-8">
              <div>
                <p className="text-sage text-[10px] tracking-widest uppercase mb-3">Gallery</p>
                <h2 className="font-heading text-4xl text-forest">Real weddings &amp; styled shoots</h2>
              </div>
              <Link href="/gallery" className="text-[10px] tracking-widest uppercase text-forest underline underline-offset-4 hover:text-sage transition-colors hidden md:block">
                View Gallery →
              </Link>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {galleryPreviews.map((img, i) => (
              <AnimatedSection key={i} delay={i * 0.08} className={i === 0 ? 'row-span-2' : ''}>
                <Link href="/gallery">
                  <div className={`relative overflow-hidden rounded-sm group ${i === 0 ? 'h-full min-h-[320px]' : 'h-40'}`}>
                    <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA STRIP ────────────────────────────────────────────────── */}
      <section className="bg-forest px-6 md:px-16 py-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
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
    </main>
  )
}
