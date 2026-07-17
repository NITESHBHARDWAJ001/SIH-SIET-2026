import { motion } from 'framer-motion'
import { HiOutlineLockClosed } from 'react-icons/hi'
import { GiArtificialIntelligence, GiPlantRoots, GiHealthNormal, GiModernCity, GiLockedFortress } from 'react-icons/gi'
import { HiOutlineAcademicCap, HiOutlineGlobe, HiOutlineDotsCircleHorizontal } from 'react-icons/hi'
import { siteConfig } from '../siteConfig.js'

const CATEGORIES = [
  { icon: GiArtificialIntelligence, label: 'AI & ML' },
  { icon: GiPlantRoots, label: 'Agriculture' },
  { icon: GiHealthNormal, label: 'Healthcare' },
  { icon: GiModernCity, label: 'Smart Cities' },
  { icon: GiLockedFortress, label: 'Cyber Security' },
  { icon: HiOutlineAcademicCap, label: 'Education' },
  { icon: HiOutlineGlobe, label: 'Sustainability' },
  { icon: HiOutlineDotsCircleHorizontal, label: 'Miscellaneous' },
]

export default function ProblemStatements() {
  const isReleased = false // toggle to true after release, then swap for downloadable PDFs

  return (
    <section id="problem-statements" className="py-20 md:py-24 bg-mist">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-wider text-gold uppercase">Problem Statements</span>
          <h2 className="mt-2 font-heading font-bold text-3xl md:text-4xl text-ink">Problem Statement Categories</h2>
          <p className="mt-3 text-slate">Explore the domains you'll be able to choose from once statements are released.</p>
        </div>

        {!isReleased && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-14 max-w-md rounded-[24px] bg-white p-10 text-center shadow-[var(--shadow-card)] ring-1 ring-slate/10"
          >
            <div className="mx-auto h-16 w-16 rounded-full bg-royal/10 text-royal flex items-center justify-center text-3xl">
              <HiOutlineLockClosed />
            </div>
            <h3 className="mt-5 font-heading font-bold text-xl text-ink">Problem Statements</h3>
            <p className="mt-2 text-sm text-slate">
              Available from <span className="font-semibold text-royal">{siteConfig.dates.problemStatements}</span>
            </p>
          </motion.div>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {CATEGORIES.map((cat, i) => {
            const Icon = cat.icon
            return (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-[20px] bg-white p-6 text-center shadow-[var(--shadow-card)] ring-1 ring-slate/10 hover:-translate-y-1 transition-transform"
              >
                <div className="mx-auto h-12 w-12 rounded-xl bg-green/10 text-green flex items-center justify-center text-2xl">
                  <Icon />
                </div>
                <p className="mt-3 text-sm font-semibold text-ink">{cat.label}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
