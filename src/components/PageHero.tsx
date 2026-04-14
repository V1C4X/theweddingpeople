'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { AnimatedSection } from './AnimatedSection'

interface Props {
  eyebrow: string
  title: string
  titleHtml?: boolean
  subtitle?: string
  imageSrc?: string
  imageAlt?: string
}

export function PageHero({ eyebrow, title, titleHtml = false, subtitle, imageSrc, imageAlt = '' }: Props) {
  return (
    <section className="relative px-6 md:px-16 pt-32 pb-16 overflow-hidden">
      {imageSrc ? (
        <>
          <Image src={imageSrc} alt={imageAlt} fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-forest/70" />
        </>
      ) : (
        <div className="absolute inset-0 bg-ivory" />
      )}
      <div className="relative z-10">
        <AnimatedSection>
          <p className={`text-[10px] tracking-widest uppercase mb-4 ${imageSrc ? 'text-sand' : 'text-sage'}`}>{eyebrow}</p>
          {titleHtml ? (
            <h1
              className={`font-heading text-4xl md:text-5xl leading-tight ${imageSrc ? 'text-ivory' : 'text-forest'}`}
              dangerouslySetInnerHTML={{ __html: title }}
            />
          ) : (
            <h1 className={`font-heading text-4xl md:text-5xl leading-tight ${imageSrc ? 'text-ivory' : 'text-forest'}`}>{title}</h1>
          )}
          <motion.div
            className="w-12 h-px bg-sand mt-5 mb-5 origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          />
          {subtitle && (
            <p className={`text-sm font-light leading-relaxed max-w-lg ${imageSrc ? 'text-ivory/70' : 'text-charcoal/70'}`}>{subtitle}</p>
          )}
        </AnimatedSection>
      </div>
    </section>
  )
}
