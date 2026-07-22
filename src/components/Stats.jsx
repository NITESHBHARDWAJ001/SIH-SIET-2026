import { motion } from 'framer-motion'
import CountUp from 'react-countup'

const STATS = [
  { value: 50, suffix: '+', label: 'Expected Teams' },
  { value: 7, suffix: '', label: 'Core Committee', display: '6–7' },
  { value: 5, suffix: '+', label: 'Faculty Mentors' },
  { value: 8, suffix: ' Days', label: 'Prototype Duration' },
  { value: 0, suffix: '', label: 'Selection Round', display: 'Top Teams' },
]

export default function Stats() {
  return (
    <section className="py-20 md:py-24 bg-mist">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-ink">By the Numbers</h2>
          <p className="mt-3 text-slate">A glimpse of the scale and energy behind SIH 2026 at SIET Nilokheri.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-[20px] bg-white p-6 text-center shadow-[var(--shadow-card)] ring-1 ring-slate/10"
            >
              <p className="font-heading font-extrabold text-3xl md:text-4xl text-royal">
                {stat.display ? (
                  stat.display
                ) : (
                  <>
                    <CountUp end={stat.value} duration={2} enableScrollSpy scrollSpyOnce />
                    {stat.suffix}
                  </>
                )}
              </p>
              <p className="mt-2 text-xs md:text-sm font-medium text-slate">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
