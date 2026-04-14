import { Suspense } from 'react'
import Image from 'next/image'
import { EnquiryForm } from '@/components/EnquiryForm'

export const metadata = {
  title: 'Enquire',
  description: 'Get in touch with The Wedding People to check availability and pricing for your Auckland wedding hire.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-20">
      <div className="grid md:grid-cols-2 min-h-[calc(100vh-5rem)]">

        {/* Left — image-backed info panel */}
        <div className="relative px-10 md:px-16 py-16 flex flex-col justify-center overflow-hidden min-h-[400px]">
          <Image
            src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=85"
            alt="Romantic wedding reception with warm lighting"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-forest/70" />
          <div className="relative z-10">
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
