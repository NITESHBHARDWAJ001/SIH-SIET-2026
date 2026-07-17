import { motion } from 'framer-motion'
import { HiOutlineUserAdd, HiOutlineClipboardList, HiOutlineCode, HiOutlineUpload, HiOutlinePresentationChartBar, HiOutlineScale, HiOutlineBadgeCheck, HiOutlineFlag } from 'react-icons/hi'

const STEPS = [
  { icon: HiOutlineUserAdd, title: 'Register Team', desc: 'Form a team and submit your details via the registration form.' },
  { icon: HiOutlineClipboardList, title: 'Choose Problem Statement', desc: 'Pick a problem statement aligned with your team’s skills and interests.' },
  { icon: HiOutlineCode, title: 'Build Prototype', desc: 'Design, develop, and refine your working solution over the prototype phase.' },
  { icon: HiOutlineUpload, title: 'Submit PPT & Repository', desc: 'Upload your presentation, source code, and supporting documents.' },
  { icon: HiOutlinePresentationChartBar, title: 'Presentation', desc: 'Present your solution live to the evaluation panel.' },
  { icon: HiOutlineScale, title: 'Judging', desc: 'Panel evaluates innovation, feasibility, and execution quality.' },
  { icon: HiOutlineBadgeCheck, title: 'Selection', desc: 'Top-ranked teams are shortlisted for national nomination.' },
  { icon: HiOutlineFlag, title: 'Represent SIET', desc: 'Selected teams move forward to represent the institute at SIH 2026.' },
]

export default function EventJourney() {
  return (
    <section id="journey" className="py-20 md:py-24 bg-mist">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-wider text-gold uppercase">Guidelines</span>
          <h2 className="mt-2 font-heading font-bold text-3xl md:text-4xl text-ink">Your Event Journey</h2>
          <p className="mt-3 text-slate">Eight steps from registration to representing SIET on the national stage.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="relative rounded-[20px] bg-white p-6 shadow-[var(--shadow-card)] ring-1 ring-slate/10"
              >
                <span className="absolute top-4 right-5 font-heading font-extrabold text-2xl text-royal/10">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="h-11 w-11 rounded-xl bg-royal/10 text-royal flex items-center justify-center text-xl">
                  <Icon />
                </div>
                <h3 className="mt-4 font-heading font-semibold text-base text-ink">{step.title}</h3>
                <p className="mt-2 text-sm text-slate leading-relaxed">{step.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
