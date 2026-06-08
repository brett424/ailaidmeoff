import { Mail, ExternalLink } from 'lucide-react'

const quickLinks = [
  { label: 'The Reality', href: '#reality' },
  { label: 'Next Steps', href: '#next-steps' },
  { label: 'Resources', href: '#resources' },
  { label: 'Programs', href: '#programs' },
  { label: 'Take Assessment', href: '#assessment' },
  { label: 'About', href: '#about' },
]

const programs = [
  { label: 'Flourishing Resilience', href: '#programs' },
  { label: 'When a Chapter Ends', href: '#programs' },
  { label: '1:1 Coaching', href: '#programs' },
]

export default function Footer() {
  return (
    <footer className="bg-navy text-white" aria-label="Site footer">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="inline-flex items-center gap-1.5 mb-4" aria-label="AI Laid Me Off — Home">
              <span className="text-gold font-black text-xl">AI</span>
              <span className="text-white font-bold text-xl">LaidMeOff.com</span>
            </a>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Practical guidance for professionals navigating AI-driven career transition.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-gold text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Programs
            </h3>
            <ul className="flex flex-col gap-3">
              {programs.map((program) => (
                <li key={program.label}>
                  <a
                    href={program.href}
                    className="text-white/60 hover:text-gold text-sm transition-colors duration-200"
                  >
                    {program.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Contact
            </h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="mailto:brett@flourishinmidlife.com"
                  className="inline-flex items-center gap-2 text-white/60 hover:text-gold text-sm transition-colors duration-200"
                >
                  <Mail size={14} strokeWidth={2} />
                  brett@flourishinmidlife.com
                </a>
              </li>
              <li>
                <a
                  href="https://flourishinmidlife.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/60 hover:text-gold text-sm transition-colors duration-200"
                >
                  <ExternalLink size={14} strokeWidth={2} />
                  flourishinmidlife.com
                </a>
              </li>
              <li>
                <span className="text-white/40 text-xs">
                  Connect on LinkedIn
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Gold rule above copyright */}
        <div className="border-t border-gold/20 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-xs text-center sm:text-left">
              &copy; 2024 Brett A. Blair, PhD. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-white/40 hover:text-white/70 text-xs transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-white/40 hover:text-white/70 text-xs transition-colors duration-200"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
