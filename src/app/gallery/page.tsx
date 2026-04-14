import { PageHero } from '@/components/PageHero'
import { GalleryGrid, type GalleryImage } from '@/components/GalleryGrid'
import { CtaStrip } from '@/components/CtaStrip'

export const metadata = {
  title: 'Gallery',
  description: 'Real weddings and styled shoots featuring The Wedding People hire collection in Auckland.',
}

const images: GalleryImage[] = [
  { src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80', alt: 'Wedding table setting', category: 'weddings' },
  { src: 'https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=800&q=80', alt: 'Styled wedding bar', category: 'bar' },
  { src: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=800&q=80', alt: 'Wedding reception', category: 'weddings' },
  { src: 'https://images.unsplash.com/photo-1549488344-cbb6c34cf08b?w=800&q=80', alt: 'Styled shoot flowers', category: 'shoots' },
  { src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80', alt: 'Reception details', category: 'weddings' },
  { src: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&q=80', alt: 'Table arrangement', category: 'shoots' },
  { src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80', alt: 'Wedding venue', category: 'weddings' },
  { src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80', alt: 'Bar setup', category: 'bar' },
  { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80', alt: 'Glassware detail', category: 'shoots' },
]

export default function GalleryPage() {
  return (
    <main>
      <PageHero
        eyebrow="Gallery"
        title="Real weddings & <em>styled shoots</em>"
        titleHtml
        subtitle="A glimpse of what's possible with The Wedding People."
        imageSrc="https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=1920&q=85"
        imageAlt="Wedding styled shoot with florals"
      />
      <section className="px-6 md:px-16 py-16">
        <GalleryGrid images={images} />
      </section>

      <CtaStrip heading="Love what you see?" highlight="let's create yours." buttonText="Start Planning" />
    </main>
  )
}
