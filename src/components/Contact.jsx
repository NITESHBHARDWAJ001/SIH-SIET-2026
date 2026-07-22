import { motion } from 'framer-motion'
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker, HiOutlineOfficeBuilding, HiOutlineUser,HiOutlineLink, } from 'react-icons/hi'
import { FaWhatsapp } from "react-icons/fa";
import { siteConfig } from '../siteConfig.js'

const ROWS = [
  { icon: HiOutlineOfficeBuilding, label: 'Department', value: siteConfig.contact.department },
  { icon: HiOutlineUser, label: 'Faculty Coordinator', value: siteConfig.contact.facultyCoordinator },
  // { icon: HiOutlineUser, label: 'Student Coordinators', value: siteConfig.contact.studentCoordinators },
  // { icon: HiOutlineMail, label: 'Email', value: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
  // { icon: HiOutlinePhone, label: 'Phone', value: siteConfig.contact.phone, href: `tel:${siteConfig.contact.phone}` },
  { icon: HiOutlineLocationMarker, label: 'Location', value: siteConfig.contact.location },
  {
  icon: FaWhatsapp,
  label: "WhatsApp Group",
  value: "Join Community",
  link: "https://chat.whatsapp.com/IHmE8uX3nG1F0FjbEHzGlX",
},
{
  icon: HiOutlineLink,
  label: "Join Link",
  value: "https://chat.whatsapp.com/IHmE8uX3nG1F0FjbEHzGlX",
  link: "https://chat.whatsapp.com/IHmE8uX3nG1F0FjbEHzGlX",
},
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-24 bg-mist">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-wider text-gold uppercase">Get in Touch</span>
          <h2 className="mt-2 font-heading font-bold text-3xl md:text-4xl text-ink">Contact Us</h2>
          <p className="mt-3 text-slate">Have questions? Reach out to the organizing team.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="rounded-[24px] bg-white p-8 shadow-[var(--shadow-card)] ring-1 ring-slate/10 space-y-5"
          >
            {ROWS.map((row) => {
              const Icon = row.icon
              const content = (
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-xl bg-royal/10 text-royal flex items-center justify-center text-lg">
                    <Icon />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate uppercase tracking-wide">{row.label}</p>
                    <p className="mt-0.5 text-sm font-medium text-ink">{row.value}</p>
                  </div>
                </div>
              )
              return row.href ? (
                <a key={row.label} href={row.href} className="block hover:opacity-80 transition-opacity">
                  {content}
                </a>
              ) : (
                <div key={row.label}>{content}</div>
              )
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-[24px] overflow-hidden shadow-[var(--shadow-card)] ring-1 ring-slate/10 h-80 lg:h-full min-h-80"
          >
            <iframe
              title="SIET Nilokheri Location"
              src="https://www.google.com/maps?q=State+Institute+of+Engineering+and+Technology+Nilokheri&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
