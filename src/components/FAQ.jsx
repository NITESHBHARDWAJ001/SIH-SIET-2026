import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiChevronDown } from 'react-icons/hi'

const FAQS = [
  { q: 'Who can participate?', a: 'Any currently enrolled diploma or degree student of SIET Nilokheri is eligible to participate.' },
  { q: 'What is the team size?', a: 'Teams must have exactly 6 members, including at least 1 female member, as per SIH guidelines.' },
  { q: 'Can team members be changed after registration?', a: 'Minor changes may be allowed before the problem statement release, subject to committee approval. No changes are allowed after that.' },
  { q: 'Is a GitHub repository mandatory?', a: 'Yes, all teams must submit a public or shared GitHub repository containing their prototype source code.' },
  { q: 'What do we need to submit?', a: 'Each team must submit a presentation (PPT), GitHub repository link, demo video, and a project description.' },
  { q: 'Can we edit our submission after uploading?', a: 'Submissions can be updated until the submission deadline. No edits are accepted after the deadline closes.' },
  { q: 'How does the evaluation process work?', a: 'Teams are evaluated on a 100-mark rubric covering innovation, feasibility, prototype quality, and presentation, followed by a live Q&A.' },
  { q: 'What is the selection criteria?', a: 'Top-ranked teams based on cumulative evaluation scores are shortlisted for nomination to represent SIET at SIH 2026.' },
  { q: 'Where can I find important dates?', a: 'All key dates are listed in the Timeline section above and will be updated in Announcements as the event progresses.' },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="py-20 md:py-24">
      <div className="section-container max-w-3xl">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-wider text-gold uppercase">Support</span>
          <h2 className="mt-2 font-heading font-bold text-3xl md:text-4xl text-ink">Frequently Asked Questions</h2>
          <p className="mt-3 text-slate">Everything you need to know before you register.</p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={faq.q}
                className="rounded-2xl bg-white ring-1 ring-slate/10 shadow-[var(--shadow-card)] overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-heading font-semibold text-ink">{faq.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-royal shrink-0"
                  >
                    <HiChevronDown size={20} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p className="px-6 pb-5 text-sm text-slate leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
