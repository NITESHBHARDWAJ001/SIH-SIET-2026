import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa'
import SietLogo from './Logo.jsx'
import SihLogo from './SihLogo.jsx'
import { siteConfig } from '../siteConfig.js'

const QUICK_LINKS = [
  { label: 'About SIH', href: '#about' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Problem Statements', href: '#problem-statements' },
  { label: 'Evaluation', href: '#evaluation' },
  { label: 'FAQ', href: '#faq' },
]

const RESOURCE_LINKS = [
  { label: 'Rulebook', href: '#resources' },
  { label: 'Guidelines PDF', href: siteConfig.guidelinesPdfUrl },
  { label: 'Official SIH Website', href: 'https://sih.gov.in' },
  { label: 'Contact Us', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-royal-dark text-white">
      <div className="section-container py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <SietLogo className="h-11 w-11" />
            <SihLogo className="h-11 w-11" />
          </div>
          <p className="font-heading font-bold text-lg">{siteConfig.eventName}</p>
          <p className="text-white/70 text-sm mt-1 max-w-sm">{siteConfig.orgFull}</p>
          <div className="flex gap-3 mt-5">
            {[FaInstagram, FaLinkedin, FaFacebook].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="h-9 w-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-gold hover:text-royal-dark transition-colors"
                aria-label="Social link"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="font-heading font-semibold mb-4 text-gold">Quick Links</p>
          <ul className="space-y-2.5">
            {QUICK_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-white/70 hover:text-white transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-heading font-semibold mb-4 text-gold">Resources</p>
          <ul className="space-y-2.5">
            {RESOURCE_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-white/70 hover:text-white transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="section-container py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/60">
          <p>© {new Date().getFullYear()} State Institute of Engineering & Technology, Nilokheri. All rights reserved.</p>
          <p>Smart India Hackathon 2026 — Internal Hackathon</p>
        </div>
      </div>
    </footer>
  )
}
