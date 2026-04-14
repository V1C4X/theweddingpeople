import Image from 'next/image'
import Link from 'next/link'
import { AnimatedSection } from '@/components/AnimatedSection'
import { AnimatedWords } from '@/components/AnimatedWords'
import { ItemCard } from '@/components/ItemCard'
import { PackageCard } from '@/components/PackageCard'
import { HeroParallax } from '@/components/HeroParallax'
import { CtaStrip } from '@/components/CtaStrip'
import { JsonLd } from '@/components/JsonLd'

const faqData = [
  { question: 'What areas do you deliver to?', answer: 'We deliver across Auckland and can arrange delivery to surrounding regions. Contact us to discuss your venue location.' },
  { question: 'How far in advance should I book?', answer: 'We recommend booking at least 3–6 months ahead, especially for peak wedding season (October–April). Popular dates book out fast.' },
  { question: 'Can I customise a package?', answer: 'Absolutely. Our packages are starting points — we can add or swap items to suit your vision and guest count.' },
  { question: 'What is The Wedding Bar?', answer: 'Our signature statement bar is a large, elegant centrepiece designed for wedding receptions. It is our flagship hire item and the hero of any event.' },
  { question: 'Do you set up and pack down?', answer: 'Yes, delivery, setup, and pack-down are all included. We handle the logistics so you can focus on your day.' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: { '@type': 'Answer', text: answer },
  })),
}

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
      <HeroParallax>
        <div className="flex items-center min-h-screen px-6 md:px-16 py-32">
          <div className="max-w-3xl">
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
        </div>
      </HeroParallax>

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
                    sizes="(max-width: 768px) 50vw, 25vw"
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

      {/* ─── IMAGE BREAK ────────────────────────────────────────────── */}
      <section className="relative h-[50vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1920&q=85"
          alt="Wedding venue with natural light"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-forest/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <AnimatedSection>
            <p className="font-heading text-3xl md:text-5xl text-ivory font-light text-center leading-snug drop-shadow-lg">
              Every detail, <em className="italic text-sand">taken care of</em>
            </p>
          </AnimatedSection>
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
                    <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────────────────── */}
      <section className="px-6 md:px-16 py-20 bg-ivory">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <p className="text-sage text-[10px] tracking-widest uppercase mb-3">Common Questions</p>
            <h2 className="font-heading text-4xl text-forest mb-2">Frequently asked questions</h2>
            <div className="w-10 h-px bg-sand mb-10" />
          </AnimatedSection>
          <div className="flex flex-col gap-6">
            {faqData.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="border-b border-linen pb-6">
                  <h3 className="font-heading text-xl text-forest mb-2">{faq.question}</h3>
                  <p className="text-sm font-light text-charcoal/70 leading-relaxed">{faq.answer}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <JsonLd data={faqSchema} />

      <CtaStrip heading="Ready to make your day" highlight="unforgettable?" />
    </main>
  )
}
