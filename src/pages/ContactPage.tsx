import { motion } from 'framer-motion'
import { Phone, Mail, MapPin } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import SEO from '../components/SEO'

const jsonLd = {
  '@context': 'https://schema.org', '@type': 'ContactPage',
  'name': 'კონტაქტი | Metaweb',
  'description': 'დაუკავშირდი Metaweb-ს — ვებ-დეველოპმენტი, SEO, ბრენდინგი საქართველოში.',
  'url': 'https://metaweb.ge/contact',
  'provider': { '@type': 'Organization', 'name': 'Metaweb', 'url': 'https://metaweb.ge',
    'telephone': '+995577908080', 'address': { '@type': 'PostalAddress', 'addressCountry': 'GE', 'addressLocality': 'თბილისი' }
  },
}

const CARDS = [
  { icon: Phone,  label: 'ტელეფონი',  value: '+995 577 90 80 80',     href: 'tel:+995577908080',        accent: '#3b82f6' },
  { icon: Mail,   label: 'ელ-ფოსტა',  value: 'info@metaweb.ge',       href: 'mailto:info@metaweb.ge',   accent: '#8b5cf6' },
]

export default function ContactPage() {
  const navigate = useNavigate()

  return (
    <div className="bg-bg-primary min-h-screen relative overflow-x-clip">
      <SEO
        title="კონტაქტი | Metaweb — ვებ-დეველოპმენტი საქართველოში"
        description="დაუკავშირდი Metaweb-ს. ვებ-საიტის დამზადება, SEO, ბრენდინგი. +995 577 90 80 80 | info@metaweb.ge"
        keywords="კონტაქტი, Metaweb, ვებ-საიტის დამზადება, ვებ-დეველოპმენტი, SEO, ბრენდინგი"
        canonical="/contact"
        jsonLd={jsonLd}
      />
      <div className="absolute inset-0 tech-grid opacity-15 pointer-events-none" />

      {/* Hero */}
      <section className="relative pt-28 pb-10 md:pt-32 md:pb-20 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[160px] pointer-events-none opacity-10"
          style={{ background: 'linear-gradient(135deg,#3b82f6,#8b5cf6)' }} />
        <div className="max-w-7xl mx-auto">
          <motion.button onClick={() => navigate('/')}
            initial={{ opacity:0, x:-20 }} animate={{ opacity:1, x:0 }} transition={{ duration:0.5 }}
            className="flex items-center gap-2 text-white/40 hover:text-white text-sm mb-10 transition-colors duration-200 group">
            <span className="w-6 h-px bg-white/30 group-hover:bg-white/70 transition-colors duration-200" />
            მთავარი
          </motion.button>

          <motion.div initial={{ opacity:0, y:40 }} animate={{ opacity:1, y:0 }}
            transition={{ duration:0.8, ease:[0.22,1,0.36,1] }} className="text-center">
            <span className="text-xs font-bold tracking-widest uppercase text-accent-blue mb-5 block">დაგვიკავშირდი</span>
            <h1 className="font-display font-black text-[clamp(2rem,7vw,5.5rem)] text-white leading-[0.95] mb-5">
              დაიწყე<br /><span className="gradient-text">დღესვე</span>
            </h1>
            <p className="text-white/45 text-sm md:text-lg max-w-lg mx-auto leading-relaxed">
              შენი ბრენდის განვითარება — იწყება აქ.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cards */}
      <section className="px-4 sm:px-6 pb-16 md:pb-32">
        <div className="max-w-2xl mx-auto grid sm:grid-cols-2 gap-6">
          {CARDS.map(({ icon: Icon, label, value, href, accent }, i) => (
            <motion.div key={label}
              initial={{ opacity:0, y:40 }} animate={{ opacity:1, y:0 }}
              transition={{ duration:0.6, delay:0.1+i*0.12, ease:[0.22,1,0.36,1] }}
              className="relative glass border border-white/8 hover:border-white/18 rounded-3xl p-7 sm:p-10 md:p-12 group transition-colors duration-300 overflow-hidden text-center">
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                style={{ background: accent }} />
              <div className="absolute top-0 inset-x-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg,transparent,${accent}80,transparent)` }} />

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                  style={{ background:`${accent}15`, border:`1px solid ${accent}30` }}>
                  <Icon className="w-7 h-7" style={{ color: accent }} />
                </div>
                <p className="text-white/35 text-xs tracking-widest uppercase mb-3">{label}</p>
                {href
                  ? <a href={href} data-hover
                      className="text-white font-bold text-lg hover:opacity-70 transition-opacity duration-200 break-all">
                      {value}
                    </a>
                  : <p className="text-white font-bold text-lg">{value}</p>
                }
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
