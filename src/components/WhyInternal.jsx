import { motion } from 'framer-motion'
import { HiOutlineScale, HiOutlineUserGroup, HiOutlineAcademicCap, HiOutlineBeaker, HiOutlinePresentationChartLine, HiOutlineUserCircle, HiOutlineFlag } from 'react-icons/hi'

const REASONS = [
  { icon: HiOutlineScale, title: 'Transparent Selection', desc: 'A fair, criteria-based process to identify the strongest teams to represent SIET.' },
  { icon: HiOutlineUserGroup, title: 'Equal Opportunity', desc: 'Every eligible student gets a level playing field to compete and showcase their ideas.' },
  { icon: HiOutlineAcademicCap, title: 'Better Preparation', desc: 'Teams get a dry run of the national format before the real SIH grand finale.' },
  { icon: HiOutlineBeaker, title: 'Prototype Validation', desc: 'Ideas are stress-tested for feasibility before being taken to the national stage.' },
  { icon: HiOutlinePresentationChartLine, title: 'Presentation Experience', desc: 'Structured practice in pitching, live demos, and handling technical Q&A.' },
  { icon: HiOutlineUserCircle, title: 'Faculty Mentorship', desc: 'Dedicated mentors guide teams through ideation, execution, and delivery.' },
  { icon: HiOutlineFlag, title: 'National Level Readiness', desc: 'Ensures only well-prepared, polished teams go on to represent the institute nationally.' },
]

export default function WhyInternal() {
  return (
    <section className="py-20 md:py-24 bg-mist">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-wider text-gold uppercase">Why This Matters</span>
          <h2 className="mt-2 font-heading font-bold text-3xl md:text-4xl text-ink">Why an Internal Hackathon?</h2>
          <p className="mt-3 text-slate">SIET conducts an internal round to ensure only the best-prepared teams represent the institute at SIH 2026.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {REASONS.map((r, i) => {
            const Icon = r.icon
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-[20px] bg-white p-6 shadow-[var(--shadow-card)] ring-1 ring-slate/10"
              >
                <div className="h-11 w-11 rounded-xl bg-green/10 text-green flex items-center justify-center text-xl">
                  <Icon />
                </div>
                <h3 className="mt-4 font-heading font-semibold text-base text-ink">{r.title}</h3>
                <p className="mt-2 text-sm text-slate leading-relaxed">{r.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
