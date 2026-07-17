import { motion } from 'framer-motion'
import { HiOutlineSpeakerphone, HiOutlineUserAdd, HiOutlineDocumentText, HiOutlineCode, HiOutlineClipboardCheck, HiOutlineUpload } from 'react-icons/hi'
import { siteConfig } from '../siteConfig.js'

const STEPS = [
  { icon: HiOutlineSpeakerphone, date: siteConfig.dates.noticeReleased, title: 'Notice Released' },
  { icon: HiOutlineUserAdd, date: siteConfig.dates.registrationOpens, title: 'Registration Opens' },
  { icon: HiOutlineDocumentText, date: siteConfig.dates.problemStatements, title: 'Problem Statements Released' },
  { icon: HiOutlineCode, date: `${siteConfig.dates.prototypeStart.split(' ')[0]}–${siteConfig.dates.prototypeEnd}`, title: 'Prototype Development' },
  { icon: HiOutlineClipboardCheck, date: `${siteConfig.dates.evaluationStart.split(' ')[0]}–${siteConfig.dates.evaluationEnd}`, title: 'Internal Evaluation' },
  { icon: HiOutlineUpload, date: `${siteConfig.dates.nominationStart.split(' ')[0]}–${siteConfig.dates.nominationEnd}`, title: 'Nomination & SIH Portal Upload' },
]

export default function Timeline() {
  return (
    <section id="timeline" className="py-20 md:py-24">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-wider text-gold uppercase">Roadmap</span>
          <h2 className="mt-2 font-heading font-bold text-3xl md:text-4xl text-ink">Event Timeline</h2>
          <p className="mt-3 text-slate">Key milestones from notice release to national nomination.</p>
        </div>

        {/* Desktop horizontal */}
        <div className="hidden lg:block relative">
          <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-royal via-gold to-green" />
          <div className="grid grid-cols-6 gap-4">
            {STEPS.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="h-16 w-16 rounded-full bg-white ring-4 ring-royal/10 shadow-[var(--shadow-card)] flex items-center justify-center text-royal text-2xl z-10">
                    <Icon />
                  </div>
                  <p className="mt-4 text-xs font-semibold text-gold">{step.date}</p>
                  <p className="mt-1 text-sm font-semibold text-ink leading-snug">{step.title}</p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Mobile vertical */}
        <div className="lg:hidden relative pl-8">
          <div className="absolute left-[15px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-royal via-gold to-green" />
          <div className="space-y-8">
            {STEPS.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="relative"
                >
                  <div className="absolute -left-8 h-8 w-8 rounded-full bg-white ring-4 ring-royal/10 shadow-md flex items-center justify-center text-royal text-base">
                    <Icon />
                  </div>
                  <p className="text-xs font-semibold text-gold">{step.date}</p>
                  <p className="text-sm font-semibold text-ink">{step.title}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
