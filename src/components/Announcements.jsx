import { motion } from 'framer-motion'
import { HiOutlineBell, HiOutlineCheckCircle } from 'react-icons/hi'
import { siteConfig } from '../siteConfig.js'

const ANNOUNCEMENTS = [
  { title: 'Registration Started', date: siteConfig.dates.registrationOpens, done: true },
  { title: 'Problem Statements Released', date: siteConfig.dates.problemStatements, done: false },
  { title: 'Prototype Submission Open', date: siteConfig.dates.prototypeStart, done: false },
  { title: 'Presentation Schedule Released', date: siteConfig.dates.evaluationStart, done: false },
  { title: 'Results Declared', date: siteConfig.dates.nominationStart, done: false },
]

export default function Announcements() {
  return (
    <section className="py-20 md:py-24 bg-mist">
      <div className="section-container max-w-3xl">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-wider text-gold uppercase">Stay Updated</span>
          <h2 className="mt-2 font-heading font-bold text-3xl md:text-4xl text-ink">Announcements</h2>
          <p className="mt-3 text-slate">Latest updates on the hackathon, posted as the event progresses.</p>
        </div>

        <div className="space-y-4">
          {ANNOUNCEMENTS.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-[var(--shadow-card)] ring-1 ring-slate/10"
            >
              <div
                className={`h-10 w-10 shrink-0 rounded-full flex items-center justify-center text-lg ${
                  a.done ? 'bg-green/10 text-green' : 'bg-slate/10 text-slate'
                }`}
              >
                {a.done ? <HiOutlineCheckCircle /> : <HiOutlineBell />}
              </div>
              <div className="flex-1">
                <p className="font-semibold text-ink text-sm">{a.title}</p>
                <p className="text-xs text-slate mt-0.5">{a.date}</p>
              </div>
              {a.done && (
                <span className="text-xs font-semibold text-green bg-green/10 rounded-full px-3 py-1">Live</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
