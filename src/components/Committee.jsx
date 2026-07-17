import { motion } from 'framer-motion'
import { HiOutlineUserCircle } from 'react-icons/hi'

const GROUPS = [
  { title: 'Faculty Coordinators', members: ['To be announced'] },
  { title: 'Core Committee', members: ['To be announced'] },
  { title: 'Technical Team', members: ['To be announced'] },
  { title: 'Event Management', members: ['To be announced'] },
  { title: 'Media Team', members: ['To be announced'] },
]

export default function Committee() {
  return (
    <section className="py-20 md:py-24">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-wider text-gold uppercase">The Team</span>
          <h2 className="mt-2 font-heading font-bold text-3xl md:text-4xl text-ink">Organizing Committee</h2>
          <p className="mt-3 text-slate">The people making SIH 2026 at SIET Nilokheri possible.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {GROUPS.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-[20px] bg-white p-6 text-center shadow-[var(--shadow-card)] ring-1 ring-slate/10"
            >
              <div className="mx-auto h-14 w-14 rounded-full bg-royal/10 text-royal flex items-center justify-center text-2xl">
                <HiOutlineUserCircle />
              </div>
              <h3 className="mt-4 font-heading font-semibold text-sm text-ink">{g.title}</h3>
              <p className="mt-2 text-xs text-slate">{g.members.join(', ')}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
