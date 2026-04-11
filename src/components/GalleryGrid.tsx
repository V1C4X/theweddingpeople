'use client'
import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'

export interface GalleryImage {
  src: string
  alt: string
  category: 'all' | 'weddings' | 'shoots' | 'bar'
}

interface Props { images: GalleryImage[] }

const FILTERS = [
  { value: 'all',      label: 'All' },
  { value: 'weddings', label: 'Real Weddings' },
  { value: 'shoots',   label: 'Styled Shoots' },
  { value: 'bar',      label: 'The Bar' },
] as const

export function GalleryGrid({ images }: Props) {
  const [filter, setFilter]     = useState<string>('all')
  const [lightbox, setLightbox] = useState<number | null>(null)
  const reduce                   = useReducedMotion()

  const filtered = filter === 'all' ? images : images.filter(i => i.category === filter)

  const close     = useCallback(() => setLightbox(null), [])
  const prev      = useCallback(() => setLightbox(i => i !== null ? Math.max(0, i - 1) : null), [])
  const next      = useCallback(() => setLightbox(i => i !== null ? Math.min(filtered.length - 1, i + 1) : null), [filtered.length])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (lightbox === null) return
      if (e.key === 'Escape')     close()
      if (e.key === 'ArrowLeft')  prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox, close, prev, next])

  return (
    <>
      {/* Filters */}
      <div className="flex gap-2 flex-wrap mb-8">
        {FILTERS.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => setFilter(value)}
            className={`text-[10px] tracking-widest uppercase px-4 py-2 rounded-sm border transition-all duration-200 ${
              filter === value
                ? 'bg-forest text-ivory border-forest'
                : 'border-linen text-charcoal/60 hover:border-forest'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Masonry grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-3">
        {filtered.map((img, i) => (
          <motion.div
            key={`${filter}-${i}`}
            className="mb-3 break-inside-avoid cursor-pointer overflow-hidden rounded-sm"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.07 }}
            onClick={() => setLightbox(i)}
          >
            <div className="relative w-full overflow-hidden group">
              <Image
                src={img.src}
                alt={img.alt}
                width={800}
                height={600}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={close}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh] mx-4"
              initial={reduce ? false : { scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.35 }}
              onClick={e => e.stopPropagation()}
            >
              <Image
                src={filtered[lightbox].src}
                alt={filtered[lightbox].alt}
                width={1200}
                height={900}
                className="max-h-[85vh] w-auto object-contain rounded-sm"
              />
            </motion.div>

            {/* Controls */}
            <button onClick={close}
              className="absolute top-6 right-6 text-white/60 hover:text-white text-2xl leading-none"
              aria-label="Close">✕</button>
            {lightbox > 0 && (
              <button onClick={(e) => { e.stopPropagation(); prev() }}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-3xl"
                aria-label="Previous">‹</button>
            )}
            {lightbox < filtered.length - 1 && (
              <button onClick={(e) => { e.stopPropagation(); next() }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-3xl"
                aria-label="Next">›</button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
