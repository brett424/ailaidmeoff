'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'The Reality', href: '#reality' },
  { label: 'Next Steps', href: '#next-steps' },
  { label: 'Resources', href: '#resources' },
  { label: 'Programs', href: '#programs' },
  { label: 'Take Assessment', href: '#assessment' },
  { label: 'About', href: '#about' },
]

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => {
    setMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy/95 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group"
            aria-label="AI Laid Me Off — Home"
          >
            <span className="text-gold font-black text-xl leading-none">AI</span>
            <span className="text-white font-bold text-xl leading-none">LaidMeOff</span>
            <span className="text-gold text-2xl leading-none font-black">&middot;</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-gold text-sm font-medium transition-colors duration-200 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <a
              href="#assessment"
              className="inline-flex items-center px-5 py-2.5 bg-gold text-navy font-semibold text-sm rounded-md hover:bg-gold/90 transition-colors duration-200 whitespace-nowrap"
            >
              Take the Free Assessment
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-navy/98 backdrop-blur-md border-t border-white/10 px-4 py-4">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="text-white/80 hover:text-gold hover:bg-white/5 px-3 py-3 rounded-md text-base font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-white/10">
              <a
                href="#assessment"
                onClick={handleLinkClick}
                className="block w-full text-center px-5 py-3 bg-gold text-navy font-semibold text-base rounded-md hover:bg-gold/90 transition-colors duration-200"
              >
                Take the Free Assessment
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
