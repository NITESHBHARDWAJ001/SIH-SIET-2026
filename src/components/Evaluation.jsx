import { motion } from 'framer-motion'
import { HiOutlineLightBulb, HiOutlineSparkles, HiOutlineCog, HiOutlineCube, HiOutlineCode, HiOutlineTrendingUp, HiOutlineColorSwatch, HiOutlinePresentationChartBar, HiOutlineChatAlt2 } from 'react-icons/hi'

const CRITERIA = [
  { icon: HiOutlineLightBulb, title: 'Problem Understanding', marks: 10, desc: 'Clarity on the problem statement and its context.' },
  { icon: HiOutlineSparkles, title: 'Innovation & Creativity', marks: 20, desc: 'Originality and novelty of the proposed solution.' },
  { icon: HiOutlineCog, title: 'Technical Feasibility', marks: 15, desc: 'Practicality of implementation with available resources.' },
  { icon: HiOutlineCube, title: 'Prototype Quality', marks: 15, desc: 'Functionality and polish of the working prototype.' },
  { icon: HiOutlineCode, title: 'Technical Implementation', marks: 10, desc: 'Soundness of architecture and code quality.' },
  { icon: HiOutlineTrendingUp, title: 'Impact & Scalability', marks: 10, desc: 'Real-world impact potential and scalability.' },
  { icon: HiOutlineColorSwatch, title: 'UI / UX', marks: 5, desc: 'Usability and design quality of the solution.' },
  { icon: HiOutlinePresentationChartBar, title: 'Presentation & Communication', marks: 10, desc: 'Clarity and effectiveness of the pitch.' },
  { icon: HiOutlineChatAlt2, title: 'Technical Q&A', marks: 5, desc: 'Depth of understanding shown during questioning.' },
]

export default function Evaluation() {
  return (
    <section id="evaluation" className="py-20 md:py-24">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-wider text-gold uppercase">Scoring</span>
          <h2 className="mt-2 font-heading font-bold text-3xl md:text-4xl text-ink">Evaluation Criteria</h2>
          <p className="mt-3 text-slate">Total 100 marks, assessed across nine parameters.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CRITERIA.map((c, i) => {
            const Icon = c.icon
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-[20px] bg-white p-6 shadow-[var(--shadow-card)] ring-1 ring-slate/10"
              >
                <div className="flex items-start justify-between">
                  <div className="h-11 w-11 rounded-xl bg-gold/10 text-[#B8860B] flex items-center justify-center text-xl">
                    <Icon />
                  </div>
                  <span className="font-heading font-extrabold text-2xl text-royal">{c.marks}</span>
                </div>
                <h3 className="mt-4 font-heading font-semibold text-base text-ink">{c.title}</h3>
                <p className="mt-2 text-sm text-slate leading-relaxed">{c.desc}</p>
              </motion.div>
            )
          })}
        </div>

        <div className="mt-8 flex justify-center">
          <div className="rounded-full bg-royal px-8 py-3 font-heading font-bold text-white shadow-[var(--shadow-card)]">
            Total = 100 Marks
          </div>
        </div>
      </div>
    </section>
  )
}
