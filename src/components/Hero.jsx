import { motion } from 'framer-motion'
import { HiOutlineDownload, HiArrowRight } from 'react-icons/hi'
import { FaWhatsapp } from "react-icons/fa";
import SietLogo from './Logo.jsx'
import SihBrainIcon from './SihBrainIcon.jsx'
import { siteConfig } from '../siteConfig.js'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-royal via-royal to-royal-dark pt-32 pb-24 md:pt-40 md:pb-32"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />
      <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-green/10 blur-3xl" />

      <div className="section-container relative grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center lg:text-left"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-xs font-semibold text-gold tracking-wide">
            Internal Hackathon · 2026
          </span>
          <h1 className="mt-6 font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1]">
            Smart India Hackathon <span className="text-gold">2026</span>
          </h1>
          <p className="mt-5 text-lg text-white/85 font-medium">
            Internal Hackathon | {siteConfig.orgFull}
          </p>
          <p className="mt-3 text-base text-gold font-semibold tracking-wide">
            {siteConfig.tagline}
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href={siteConfig.registrationFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 font-semibold text-royal-dark shadow-[var(--shadow-card)] hover:brightness-105 hover:-translate-y-0.5 transition-all"
            >
              Register Now <HiArrowRight />
            </a>
            <a
              href={siteConfig.guidelinesPdfUrl}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 border border-white/25 px-7 py-3.5 font-semibold text-white hover:bg-white/20 transition-all"
            >
              Download Guidelines <HiOutlineDownload />
            </a>
  {/* WhatsApp */}
  <a
    href="https://chat.whatsapp.com/GftPdnHqrnw24lXufg0yfi"
    target="_blank"
    rel="noopener noreferrer"
    className="group inline-flex h-14 items-center justify-center gap-3 rounded-full border border-[#25D366]/40 bg-[#25D366]/15 px-8 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#25D366] hover:shadow-[0_0_25px_rgba(37,211,102,0.45)]"
  >
    <FaWhatsapp className="text-2xl text-[#25D366] transition-colors duration-300 group-hover:text-white" />

    <span>Join WhatsApp Group</span>

    <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
  </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          className="relative hidden lg:flex items-center justify-center"
        >
          <div className="relative h-96 w-96 rounded-[32px] bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl flex items-center justify-center">
            <div className="flex items-center gap-6">
              <SietLogo className="h-32 w-32 drop-shadow-xl" />
              <div className="h-24 w-px bg-white/30" />
              <SihBrainIcon className="h-36 w-auto drop-shadow-xl" />
            </div>
            <div className="absolute -top-6 -left-6 h-16 w-16 rounded-2xl bg-gold/90 flex items-center justify-center text-royal-dark font-heading font-bold text-xs shadow-lg rotate-[-8deg]">
              SIH
              <br />
              2026
            </div>
            <div className="absolute -bottom-5 -right-5 h-14 w-14 rounded-full bg-green/90 flex items-center justify-center text-white shadow-lg">
              <HiArrowRight className="rotate-[-45deg]" size={22} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
