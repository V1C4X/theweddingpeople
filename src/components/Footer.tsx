import Link from 'next/link'

export function Footer() {
  const links = [
    { href: '/hire',     label: 'Hire Items' },
    { href: '/packages', label: 'Packages' },
    { href: '/gallery',  label: 'Gallery' },
    { href: '/contact',  label: 'Contact' },
  ]

  return (
    <footer className="bg-charcoal px-6 md:px-16 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <p className="font-heading text-base text-ivory tracking-[0.2em] uppercase">
            The Wedding People
          </p>
          <p className="text-xs text-white/40 mt-1 tracking-wide">Auckland, New Zealand</p>
        </div>
        <nav className="flex flex-wrap gap-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-xs text-white/50 hover:text-white/80 tracking-widest uppercase transition-colors duration-300"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  )
}
