import { motion } from 'framer-motion'
import { HiOutlineUserGroup, HiOutlineCalendar, HiOutlineCheckCircle, HiArrowRight } from 'react-icons/hi'
import { siteConfig } from '../siteConfig.js'

const DETAILS = [
  { icon: HiOutlineCheckCircle, label: 'Eligibility', value: 'All currently enrolled diploma/degree students' },
  { icon: HiOutlineUserGroup, label: 'Team Size', value: '6 members (min. 1 female member)' },
  { icon: HiOutlineCalendar, label: 'Registration Deadline', value: siteConfig.dates.registrationDeadline },
]

export default function Registration() {
  return (
    <section className="py-20 md:py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-royal to-royal-dark px-8 py-14 md:px-14 md:py-16 text-center"
        >
          <div className="absolute -top-16 -left-16 h-64 w-64 rounded-full bg-gold/20 blur-3xl" />
          <div className="absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-green/20 blur-3xl" />

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full bg-green/20 border border-green/40 px-4 py-1.5 text-xs font-semibold text-green">
              🟢 Registration Open
            </span>
            <h2 className="mt-5 font-heading font-bold text-3xl md:text-4xl text-white">
              Ready to Build Something That Matters?
            </h2>
            <p className="mt-3 text-white/80 max-w-xl mx-auto">
              Secure your team's spot in SIH 2026 Internal Hackathon at SIET Nilokheri.
            </p>

            <div className="mt-9 grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-left">
              {DETAILS.map((d) => {
                const Icon = d.icon
                return (
                  <div key={d.label} className="rounded-2xl bg-white/10 border border-white/15 p-5">
                    <Icon className="text-gold text-xl" />
                    <p className="mt-3 text-xs font-semibold text-white/60 uppercase tracking-wide">{d.label}</p>
                    <p className="mt-1 text-sm font-semibold text-white">{d.value}</p>
                  </div>
                )
              })}
            </div>

            <a
              href={siteConfig.registrationFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 font-semibold text-royal-dark shadow-[var(--shadow-card)] hover:brightness-105 hover:-translate-y-0.5 transition-all"
            >
              Register Now <HiArrowRight />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
