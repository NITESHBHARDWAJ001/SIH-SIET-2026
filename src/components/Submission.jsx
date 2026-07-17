import { motion } from 'framer-motion'
import { HiOutlineDocumentText, HiOutlineCode as HiCode, HiOutlineVideoCamera, HiOutlinePencilAlt, HiArrowRight, HiOutlineClock } from 'react-icons/hi'
import { siteConfig } from '../siteConfig.js'

const ITEMS = [
  { icon: HiOutlineDocumentText, label: 'PPT' },
  { icon: HiCode, label: 'GitHub Repository' },
  { icon: HiOutlineVideoCamera, label: 'Demo Video' },
  { icon: HiOutlinePencilAlt, label: 'Project Description' },
]

export default function Submission() {
  const isActive = false // flip to true once prototype phase begins

  return (
    <section className="py-20 md:py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-[28px] border border-slate/10 bg-white p-8 md:p-14 shadow-[var(--shadow-card)]"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-semibold tracking-wider text-gold uppercase">Next Phase</span>
              <h2 className="mt-2 font-heading font-bold text-3xl md:text-4xl text-ink">Prototype Submission</h2>
            </div>
            <span
              className={`inline-flex items-center gap-2 self-start rounded-full px-4 py-1.5 text-xs font-semibold ${
                isActive ? 'bg-green/10 text-green' : 'bg-slate/10 text-slate'
              }`}
            >
              <HiOutlineClock />
              {isActive ? 'Submissions Open' : `Opens ${siteConfig.dates.prototypeStart}`}
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ITEMS.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.label}
                  className="rounded-2xl bg-mist p-6 text-center ring-1 ring-slate/10"
                >
                  <div className="mx-auto h-12 w-12 rounded-xl bg-royal/10 text-royal flex items-center justify-center text-2xl">
                    <Icon />
                  </div>
                  <p className="mt-3 text-sm font-semibold text-ink">{item.label}</p>
                </div>
              )
            })}
          </div>

          <div className="mt-10 text-center">
            <a
              href={isActive ? siteConfig.submissionFormUrl : '#'}
              target={isActive ? '_blank' : undefined}
              rel={isActive ? 'noopener noreferrer' : undefined}
              aria-disabled={!isActive}
              className={`inline-flex items-center gap-2 rounded-full px-8 py-3.5 font-semibold shadow-[var(--shadow-card)] transition-all ${
                isActive
                  ? 'bg-royal text-white hover:-translate-y-0.5'
                  : 'bg-slate/15 text-slate cursor-not-allowed pointer-events-none'
              }`}
            >
              Submit Prototype <HiArrowRight />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
