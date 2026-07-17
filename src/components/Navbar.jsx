import { useEffect, useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import SietLogo from './Logo.jsx'
import SihLogo from './SihLogo.jsx'
import { siteConfig } from '../siteConfig.js'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About SIH', href: '#about' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Guidelines', href: '#journey' },
  { label: 'Problem Statements', href: '#problem-statements' },
  { label: 'Resources', href: '#resources' },
  { label: 'Evaluation', href: '#evaluation' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-[var(--shadow-soft)] py-2'
          : 'bg-white/40 backdrop-blur-md py-4'
      }`}
    >
      <nav className="section-container flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5 shrink-0">
          <SietLogo className="h-9 w-9" />
          <SihLogo className="h-9 w-9" />
          <div className="hidden sm:block leading-tight text-left">
            <p className="font-heading font-bold text-royal text-sm">SIH 2026</p>
            <p className="text-[11px] text-slate">SIET Nilokheri</p>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/80 hover:text-royal transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={siteConfig.registrationFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-royal-dark shadow-[var(--shadow-card)] hover:brightness-105 hover:-translate-y-0.5 transition-all"
          >
            Register Now
          </a>
          <button
            className="lg:hidden text-2xl text-royal"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-slate/10 mt-2">
          <div className="section-container flex flex-col py-4 gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm font-medium text-ink/80 hover:text-royal border-b border-slate/10 last:border-none"
              >
                {link.label}
              </a>
            ))}
            <a
              href={siteConfig.registrationFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center justify-center rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-royal-dark"
            >
              Register Now
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
