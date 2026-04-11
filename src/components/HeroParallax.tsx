'use client'
import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react'

export function HeroParallax({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])

  return (
    <div ref={ref} className="relative min-h-screen overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 bg-gradient-to-br from-forest via-[#2d3e35] to-[#1e2b24]">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_#7a9b6e,_transparent_70%)]" />
      </motion.div>
      <div className="relative z-10">{children}</div>
    </div>
  )
}
