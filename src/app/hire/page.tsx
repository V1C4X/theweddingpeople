'use client'
import { useState } from 'react'
import { PageHero } from '@/components/PageHero'
import { ItemCard } from '@/components/ItemCard'
import { AnimatedSection } from '@/components/AnimatedSection'
import { CtaStrip } from '@/components/CtaStrip'

const items = [
  {
    name: 'The Wedding Bar',
    description: 'Our flagship statement bar — the hero of any reception. Large, elegant, and completely unforgettable. Enquire for availability.',
    imageSrc: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1200&q=80',
    imageAlt: 'The Wedding Bar',
    category: 'bar',
    enquireParam: 'bar',
    featured: true,
  },
  {
    name: 'Chairs',
    description: 'Elegant hire chairs to complement your venue and style.',
    imageSrc: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80',
    imageAlt: 'Wedding chairs',
    category: 'furniture',
    enquireParam: 'furniture',
  },
  {
    name: 'Tables',
    description: 'Round, trestle, and farm tables available in multiple sizes.',
    imageSrc: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=800&q=80',
    imageAlt: 'Wedding tables',
    category: 'furniture',
    enquireParam: 'furniture',
  },
  {
    name: 'Crockery & Glassware',
    description: 'Complete place settings — dinner plates, side plates, wine glasses, champagne flutes.',
    imageSrc: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80',
    imageAlt: 'Wedding tableware',
    category: 'tableware',
    enquireParam: 'tableware',
  },
  {
    name: 'Linen',
    description: 'Tablecloths and napkins in neutral tones that suit any palette.',
    imageSrc: 'https://images.unsplash.com/photo-1549488344-cbb6c34cf08b?w=800&q=80',
    imageAlt: 'Wedding linen',
    category: 'linen',
    enquireParam: 'linen',
  },
]

const FILTERS = ['All', 'Bar', 'Furniture', 'Tableware', 'Linen']

export default function HirePage() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All'
    ? items
    : items.filter(i => i.category === active.toLowerCase())

  return (
    <main>
      <PageHero
        eyebrow="What We Offer"
        title="Our hire <em>collection</em>"
        titleHtml
        subtitle="Browse our full range and enquire about availability for your date."
        imageSrc="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1920&q=85"
        imageAlt="Elegant wedding bar setup"
      />

      <section className="px-6 md:px-16 py-16">
        <AnimatedSection>
          <div className="flex gap-2 flex-wrap mb-10">
            {FILTERS.map(f => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`text-[10px] tracking-widest uppercase px-4 py-2 rounded-sm border transition-all duration-200 ${
                  active === f
                    ? 'bg-forest text-ivory border-forest'
                    : 'border-linen text-charcoal/60 hover:border-forest'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filtered.map((item, i) => (
            <AnimatedSection key={item.name} delay={i * 0.1} className={item.featured ? 'md:col-span-3' : ''}>
              <ItemCard {...item} />
            </AnimatedSection>
          ))}
        </div>
      </section>

      <CtaStrip />
    </main>
  )
}
