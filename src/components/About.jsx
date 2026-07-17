import { motion } from 'framer-motion'
import { HiOutlineLightBulb, HiOutlineOfficeBuilding, HiOutlineSparkles, HiOutlineBriefcase, HiOutlineGlobeAlt } from 'react-icons/hi'

const POINTS = [
  {
    icon: HiOutlineLightBulb,
    title: 'What is SIH',
    desc: 'A nationwide initiative to provide students a platform to solve pressing problems faced by industry, ministries, and society.',
  },
  {
    icon: HiOutlineOfficeBuilding,
    title: 'Government Initiative',
    desc: 'Organized by the Ministry of Education and AICTE to institutionalize innovation and product development in higher education.',
  },
  {
    icon: HiOutlineSparkles,
    title: 'Innovation Focus',
    desc: 'Encourages students to think out-of-the-box and build working prototypes rather than just theoretical ideas.',
  },
  {
    icon: HiOutlineBriefcase,
    title: 'Industry Problems',
    desc: 'Real-world problem statements sourced directly from government ministries, PSUs, and industry partners.',
  },
  {
    icon: HiOutlineGlobeAlt,
    title: 'National Level Competition',
    desc: 'One of the largest open innovation platforms in the world, bringing together lakhs of students annually.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 md:py-24">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-wider text-gold uppercase">About</span>
          <h2 className="mt-2 font-heading font-bold text-3xl md:text-4xl text-ink">Smart India Hackathon</h2>
          <p className="mt-3 text-slate">
            India's flagship nationwide hackathon initiative that empowers students to solve real problems with real impact.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {POINTS.map((p, i) => {
            const Icon = p.icon
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-[20px] bg-white p-7 shadow-[var(--shadow-card)] ring-1 ring-slate/10 hover:-translate-y-1 transition-transform"
              >
                <div className="h-12 w-12 rounded-xl bg-royal/10 text-royal flex items-center justify-center text-2xl">
                  <Icon />
                </div>
                <h3 className="mt-4 font-heading font-semibold text-lg text-ink">{p.title}</h3>
                <p className="mt-2 text-sm text-slate leading-relaxed">{p.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
