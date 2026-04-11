import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

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
  title: 'The Wedding People — Auckland Wedding Hire',
  description: 'Premium wedding hire in Auckland. Statement bar, furniture, tableware and linen for your perfect day.',
  openGraph: {
    title: 'The Wedding People',
    description: 'Premium wedding hire in Auckland, New Zealand.',
    locale: 'en_NZ',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-NZ" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="bg-ivory font-body text-charcoal">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
