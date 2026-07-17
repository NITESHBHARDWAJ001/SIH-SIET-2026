import { motion } from 'framer-motion'
import { HiOutlineUpload, HiOutlinePresentationChartBar, HiOutlineDesktopComputer, HiOutlineChatAlt2, HiOutlineClipboardCheck, HiOutlineChartBar, HiOutlineBadgeCheck, HiChevronRight } from 'react-icons/hi'

const STEPS = [
  { icon: HiOutlineUpload, title: 'Prototype Submission' },
  { icon: HiOutlinePresentationChartBar, title: 'Presentation' },
  { icon: HiOutlineDesktopComputer, title: 'Live Demo' },
  { icon: HiOutlineChatAlt2, title: 'Question Answer' },
  { icon: HiOutlineClipboardCheck, title: 'Evaluation' },
  { icon: HiOutlineChartBar, title: 'Ranking' },
  { icon: HiOutlineBadgeCheck, title: 'Nomination' },
]

export default function Judging() {
  return (
    <section className="py-20 md:py-24 bg-mist">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-wider text-gold uppercase">Process</span>
          <h2 className="mt-2 font-heading font-bold text-3xl md:text-4xl text-ink">Judging Process</h2>
          <p className="mt-3 text-slate">A clear, sequential flow from submission to nomination.</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {STEPS.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="flex items-center gap-3"
              >
                <div className="flex flex-col items-center gap-2 rounded-2xl bg-white px-5 py-5 shadow-[var(--shadow-card)] ring-1 ring-slate/10 w-32">
                  <div className="h-10 w-10 rounded-full bg-royal/10 text-royal flex items-center justify-center text-lg">
                    <Icon />
                  </div>
                  <p className="text-xs font-semibold text-ink text-center leading-snug">{step.title}</p>
                </div>
                {i < STEPS.length - 1 && (
                  <HiChevronRight className="hidden sm:block text-gold text-xl shrink-0" />
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
