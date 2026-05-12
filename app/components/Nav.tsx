'use client'

import { useState, useEffect } from 'react'

const navItems = [
  { label: 'The Film', href: '#film' },
  { label: 'The Short', href: '#short' },
  { label: 'Team', href: '#team' },
  { label: 'Package', href: '#package' },
  { label: 'Market', href: '#market' },
  { label: 'Financing', href: '#financing' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Risk', href: '#risk' },
  { label: 'Press', href: '#press' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg/92 backdrop-blur-sm border-b border-line'
          : 'bg-transparent'
      }`}
      style={{ backdropFilter: scrolled ? 'blur(12px)' : undefined }}
    >
      <nav className="max-w-[76rem] mx-auto px-6 flex items-center justify-between h-14">
        <a
          href="#hero"
          className="font-serif text-sm tracking-widest text-dim hover:text-fg transition-colors duration-200"
        >
          Bot or Not
        </a>

        <ul className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-[11px] tracking-[0.18em] uppercase text-dim hover:text-fg transition-colors duration-200"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="lg:hidden p-2 flex flex-col gap-[5px] cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-5 h-px bg-dim transition-all duration-200 origin-center ${
              menuOpen ? 'rotate-45 translate-y-[6px]' : ''
            }`}
          />
          <span
            className={`block w-5 h-px bg-dim transition-all duration-200 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-5 h-px bg-dim transition-all duration-200 origin-center ${
              menuOpen ? '-rotate-45 -translate-y-[6px]' : ''
            }`}
          />
        </button>
      </nav>

      {menuOpen && (
        <div className="lg:hidden bg-bg border-b border-line">
          <ul className="max-w-[76rem] mx-auto px-6 py-6 flex flex-col gap-5">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-xs tracking-[0.2em] uppercase text-dim hover:text-fg transition-colors duration-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
