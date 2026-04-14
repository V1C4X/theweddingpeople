import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hire Collection',
  description: 'Browse our full wedding hire collection in Auckland — statement wedding bar, furniture, tableware, and linen. Enquire for availability.',
}

export default function HireLayout({ children }: { children: React.ReactNode }) {
  return children
}
