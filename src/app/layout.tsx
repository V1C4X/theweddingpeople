import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { JsonLd } from '@/components/JsonLd'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://theweddingpeople.nz'),
  title: {
    default: 'The Wedding People — Auckland Wedding Hire',
    template: '%s | The Wedding People',
  },
  description: 'Premium wedding hire in Auckland. Statement bar, furniture, tableware and linen for your perfect day. Free consultation — serving all of Auckland and beyond.',
  keywords: ['wedding hire Auckland', 'wedding bar hire NZ', 'wedding furniture hire Auckland', 'Auckland wedding packages', 'wedding tableware hire', 'wedding linen hire Auckland', 'South Auckland wedding'],
  authors: [{ name: 'The Wedding People' }],
  openGraph: {
    title: 'The Wedding People — Auckland Wedding Hire',
    description: 'Premium wedding hire in Auckland. Statement bar, furniture, tableware and linen for your perfect day.',
    url: 'https://theweddingpeople.nz',
    siteName: 'The Wedding People',
    locale: 'en_NZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Wedding People — Auckland Wedding Hire',
    description: 'Premium wedding hire in Auckland. Statement bar, furniture, tableware and linen for your perfect day.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'The Wedding People',
  description: 'Premium wedding hire in Auckland, New Zealand. We offer a curated collection of hire items including our signature statement wedding bar, furniture, tableware, and linen for weddings of all sizes.',
  url: 'https://theweddingpeople.nz',
  areaServed: {
    '@type': 'City',
    name: 'Auckland',
    containedInPlace: { '@type': 'Country', name: 'New Zealand' },
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Auckland',
    addressCountry: 'NZ',
  },
  priceRange: '$$',
  serviceType: ['Wedding Hire', 'Wedding Bar Hire', 'Wedding Furniture Hire', 'Wedding Tableware Hire', 'Wedding Linen Hire'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Wedding Hire Packages',
    itemListElement: [
      { '@type': 'Offer', name: 'Elopement Package', description: 'Intimate package for up to 20 guests — includes wedding bar, 20 place settings, and linen.' },
      { '@type': 'Offer', name: 'Small Wedding Package', description: 'Our most popular package for 20–60 guests — includes wedding bar, 60 place settings, linen, glassware, tables, and chairs.' },
      { '@type': 'Offer', name: 'Full Wedding Package', description: 'Complete package for 60–120 guests — includes wedding bar, 120 place settings, full linen set, tables, chairs, and more.' },
    ],
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'The Wedding People',
  url: 'https://theweddingpeople.nz',
  description: 'Auckland-based premium wedding hire company specialising in statement wedding bars, furniture, tableware, and linen.',
  areaServed: 'Auckland, New Zealand',
  foundingDate: '2026',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-NZ" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="bg-ivory font-body text-charcoal">
        <JsonLd data={localBusinessSchema} />
        <JsonLd data={organizationSchema} />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
