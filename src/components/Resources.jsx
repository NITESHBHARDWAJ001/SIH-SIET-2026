import { motion } from 'framer-motion'
import { HiOutlineBookOpen, HiOutlineDocumentText, HiOutlineTemplate, HiOutlineClipboardList, HiOutlineCollection, HiOutlineExternalLink, HiOutlineQuestionMarkCircle, HiOutlineDownload } from 'react-icons/hi'
import { siteConfig } from '../siteConfig.js'

const RESOURCES = [
  { icon: HiOutlineBookOpen, title: 'Rulebook', desc: 'Complete rules governing the internal hackathon.', href: 'https://drive.google.com/file/d/10gfwhZQN1u7-IkU5IvrKWT38-xleroqZ/view', external: false },
  { icon: HiOutlineDocumentText, title: 'Guidelines PDF', desc: 'Step-by-step guidance for teams.', href: siteConfig.guidelinesPdfUrl, external: false },
  { icon: HiOutlineTemplate, title: 'PPT Template', desc: 'Official presentation template for submissions.', href: 'https://docs.google.com/presentation/d/10otNgjnv5KPoUZsBdk_iF4YC1agCoWSg/edit?slide=id.p1#slide=id.p1', external: false },
  // { icon: HiOutlineClipboardList, title: 'Report Template', desc: 'Standard format for the project report.', href: '#', external: false },
  { icon: HiOutlineCollection, title: 'Problem Statements', desc: 'Full list once released on 1 August.', href: '#problem-statements', external: false },
  { icon: HiOutlineExternalLink, title: 'Official SIH Website', desc: 'Visit the national Smart India Hackathon portal.', href: 'https://sih.gov.in', external: true },
  { icon: HiOutlineQuestionMarkCircle, title: 'FAQs PDF', desc: 'Downloadable answers to common queries.', href: 'https://drive.google.com/file/d/1AH4guBGcjUtmN6-wmqpYFHlJ-SC0nQry/view', external: false },
]

export default function Resources() {
  return (
    <section id="resources" className="py-20 md:py-24 bg-mist">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-wider text-gold uppercase">Downloads</span>
          <h2 className="mt-2 font-heading font-bold text-3xl md:text-4xl text-ink">Resources</h2>
          <p className="mt-3 text-slate">Everything your team needs, in one place.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {RESOURCES.map((res, i) => {
            const Icon = res.icon
            return (
              <motion.a
                key={res.title}
                href={res.href}
                target={res.external ? '_blank' : undefined}
                rel={res.external ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group flex items-start gap-4 rounded-[20px] bg-white p-6 shadow-[var(--shadow-card)] ring-1 ring-slate/10 hover:-translate-y-1 transition-transform"
              >
                <div className="h-11 w-11 shrink-0 rounded-xl bg-royal/10 text-royal flex items-center justify-center text-xl">
                  <Icon />
                </div>
                <div className="flex-1">
                  <p className="font-heading font-semibold text-ink">{res.title}</p>
                  <p className="mt-1 text-sm text-slate">{res.desc}</p>
                </div>
                <HiOutlineDownload className="text-slate/50 group-hover:text-gold transition-colors mt-1" />
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
