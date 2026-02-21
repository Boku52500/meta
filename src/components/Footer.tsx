import { motion } from 'framer-motion'
import { Facebook, Linkedin, Instagram } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'სერვისები',   href: '/services' },
  { label: 'პროექტები',  href: '/projects' },
  { label: 'ჩვენ შესახებ', href: '/about' },
  { label: 'კონტაქტი',   href: '/contact' },
]

const SERVICE_LINKS = [
  { label: 'საიტის დამზადება', href: '/services/saitis-damzadeba' },
  { label: 'SEO ოპტიმიზაცია', href: '/services/seo' },
  { label: 'ბრენდინგი',       href: '/services/brendingi' },
]

const socials = [
  { icon: Facebook,  label: 'Facebook',  href: 'https://www.facebook.com/metawebgroup' },
  { icon: Linkedin,  label: 'LinkedIn',  href: 'https://www.linkedin.com/company/metawebge/' },
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/' },
]

export default function Footer() {
  const navigate = useNavigate()
  return (
    <footer className="relative bg-bg-primary overflow-hidden">
      {/* Top divider with gradient */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Ambient light */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-accent-blue/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <button onClick={() => navigate('/')} className="flex items-center mb-5 w-fit group" data-hover>
                <img src="/images/logo.png" alt="Metaweb" className="h-10 w-auto object-contain" />
              </button>
              <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-xs">
                ჩვენ ვქმნით პრემიუმ ციფრულ გამოცდილებებს პროგრესული ბრენდებისთვის — კონცეფციიდან სრულფასოვნებამდე. ვქმნით პროდუქტებს, რომლებიც რეალურ გავლენას ახდენს.
              </p>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, label, href }) => (
                  <a key={label} href={href} aria-label={label} data-hover target="_blank" rel="noopener noreferrer"
                    className="w-9 h-9 glass border border-white/8 hover:border-accent-blue/30 rounded-lg flex items-center justify-center text-white/40 hover:text-accent-blue-light transition-all duration-300">
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Pages */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
            <h4 className="font-display font-semibold text-white text-sm mb-5 tracking-wide">გვერდები</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <button onClick={() => navigate(href)} data-hover
                    className="animated-underline text-white/40 hover:text-white/80 text-sm transition-colors duration-200">
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}>
            <h4 className="font-display font-semibold text-white text-sm mb-5 tracking-wide">სერვისები</h4>
            <ul className="space-y-3">
              {SERVICE_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <button onClick={() => navigate(href)} data-hover
                    className="animated-underline text-white/40 hover:text-white/80 text-sm transition-colors duration-200">
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-white/25 text-sm">
            © {new Date().getFullYear()} Metaweb Agency. ყველა უფლება დაცულია.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
