'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'

const links = [
  { href: '/',         label: 'Home' },
  { href: '/hire',     label: 'Hire Items' },
  { href: '/packages', label: 'Packages' },
  { href: '/gallery',  label: 'Gallery' },
]

export function Nav() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const pathname                   = usePathname()
  const reduce                     = useReducedMotion()
  const isHome                     = pathname === '/'

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  const transparent = isHome && !scrolled && !menuOpen
  const textColor   = transparent ? 'text-ivory' : 'text-forest'

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-16 py-5 flex justify-between items-center transition-all duration-300 ${
          transparent ? 'bg-transparent' : 'bg-ivory shadow-sm'
        }`}
      >
        {/* Logo */}
        <motion.div
          initial={reduce ? false : { letterSpacing: '0.05em', opacity: 0 }}
          animate={{ letterSpacing: '0.2em', opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Link
            href="/"
            className={`flex flex-col items-center leading-none transition-colors duration-300 ${textColor}`}
          >
            <span className="font-heading text-xs md:text-[11px] tracking-[0.3em] uppercase">The Wedding</span>
            <span className="w-full h-px my-1 bg-sand" />
            <span className="font-heading text-xs md:text-[11px] tracking-[0.3em] uppercase">People</span>
          </Link>
        </motion.div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-[10px] tracking-widest uppercase transition-colors duration-300 hover:opacity-70 ${textColor}`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-[10px] tracking-widest uppercase px-5 py-2.5 rounded-sm transition-all duration-200 hover:scale-[1.02] bg-forest text-ivory"
          >
            Enquire
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(v => !v)}
          className={`md:hidden flex flex-col gap-1.5 ${textColor}`}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
          <span className={`block w-6 h-px bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
        </button>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-forest flex flex-col items-center justify-center gap-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {[...links, { href: '/contact', label: 'Enquire' }].map(({ href, label }, i) => (
              <motion.div
                key={href}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
              >
                <Link
                  href={href}
                  className="font-heading text-3xl text-ivory tracking-widest"
                >
                  {label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
