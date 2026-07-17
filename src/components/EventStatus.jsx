import { motion } from 'framer-motion'
import { HiOutlineCheckCircle, HiOutlineCalendar, HiOutlineDocumentText, HiOutlineCode, HiOutlinePresentationChartBar, HiOutlineChartBar } from 'react-icons/hi'
import { siteConfig } from '../siteConfig.js'

const STATUS_CARDS = [
  {
    icon: HiOutlineCheckCircle,
    title: 'Registration',
    value: 'OPEN',
    tone: 'green',
    detail: `Closes ${siteConfig.dates.registrationDeadline}`,
  },
  {
    icon: HiOutlineDocumentText,
    title: 'Problem Statements',
    value: siteConfig.dates.problemStatements,
    tone: 'gold',
    detail: 'Release date',
  },
  {
    icon: HiOutlineCode,
    title: 'Prototype Phase',
    value: `${siteConfig.dates.prototypeStart.split(' ')[0]}–${siteConfig.dates.prototypeEnd}`,
    tone: 'royal',
    detail: 'Build & iterate',
  },
  {
    icon: HiOutlinePresentationChartBar,
    title: 'Presentation Round',
    value: `${siteConfig.dates.evaluationStart.split(' ')[0]}–${siteConfig.dates.evaluationEnd}`,
    tone: 'royal',
    detail: 'Internal evaluation',
  },
  {
    icon: HiOutlineChartBar,
    title: 'Results',
    value: 'PENDING',
    tone: 'gold',
    detail: 'Announced after evaluation',
  },
  {
    icon: HiOutlineCalendar,
    title: 'Nomination',
    value: `${siteConfig.dates.nominationStart.split(' ')[0]}–${siteConfig.dates.nominationEnd}`,
    tone: 'green',
    detail: 'SIH portal upload',
  },
]

const TONE_STYLES = {
  green: { bg: 'bg-green/10', text: 'text-green', ring: 'ring-green/20' },
  gold: { bg: 'bg-gold/10', text: 'text-[#B8860B]', ring: 'ring-gold/30' },
  royal: { bg: 'bg-royal/10', text: 'text-royal', ring: 'ring-royal/20' },
}

export default function EventStatus() {
  return (
    <section className="relative -mt-16 z-10">
      <div className="section-container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {STATUS_CARDS.map((card, i) => {
            const tone = TONE_STYLES[card.tone]
            const Icon = card.icon
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-[20px] bg-white p-6 shadow-[var(--shadow-card)] ring-1 ring-slate/10 hover:-translate-y-1 transition-transform"
              >
                <div className={`h-11 w-11 rounded-xl ${tone.bg} ${tone.text} flex items-center justify-center text-xl ring-1 ${tone.ring}`}>
                  <Icon />
                </div>
                <p className="mt-4 text-sm font-semibold text-slate">{card.title}</p>
                <p className={`mt-1 font-heading font-bold text-xl ${tone.text}`}>{card.value}</p>
                <p className="mt-1 text-xs text-slate">{card.detail}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
