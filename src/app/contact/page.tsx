import { Suspense } from 'react'
import { EnquiryForm } from '@/components/EnquiryForm'

export const metadata = {
  title: 'Enquire — The Wedding People',
  description: 'Get in touch to check availability and pricing for your wedding.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-20">
      <div className="grid md:grid-cols-2 min-h-[calc(100vh-5rem)]">

        {/* Left — forest green info panel */}
        <div className="bg-forest px-10 md:px-16 py-16 flex flex-col justify-center">
          <p className="text-sand text-[10px] tracking-widest uppercase mb-5">Get In Touch</p>
          <h1 className="font-heading text-4xl md:text-5xl text-ivory font-light leading-tight">
            Let&apos;s plan your{' '}
            <em className="italic text-sand">perfect day</em>
          </h1>
          <div className="w-10 h-px bg-sand mt-6 mb-6" />
          <p className="text-sm font-light text-ivory/60 leading-relaxed max-w-sm">
            Tell us about your wedding and we&apos;ll be in touch within 24 hours to discuss
            availability and pricing.
          </p>
          <div className="mt-10 flex flex-col gap-4">
            <p className="text-xs text-ivory/50 flex gap-3 items-center">
              <span className="text-sand">📍</span> Auckland, New Zealand
            </p>
            <p className="text-xs text-ivory/50 flex gap-3 items-center">
              <span className="text-sand">📞</span> [Phone — add to BRAIN/contacts.md]
            </p>
            <p className="text-xs text-ivory/50 flex gap-3 items-center">
              <span className="text-sand">✉️</span> carpetdirectsale@gmail.com
            </p>
          </div>
        </div>

        {/* Right — form */}
        <div className="bg-ivory px-10 md:px-16 py-16 flex flex-col justify-center">
          <Suspense fallback={<div className="text-sm text-charcoal/40">Loading form...</div>}>
            <EnquiryForm />
          </Suspense>
        </div>

      </div>
    </main>
  )
}
