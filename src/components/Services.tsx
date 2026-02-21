import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { Code2, Palette, ShoppingCart, TrendingUp, Megaphone, Target } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const services = [
  {
    icon: Code2,
    title: 'ვებ-დეველოპმენტი',
    description: 'სწრაფი, მასშტაბური ვებ-აპლიკაციები, შექმნილი მოწინავე ფრეიმვორკებითა და საუკეთესო არქიტექტურით.',
    tags: ['React', 'Next.js', 'Node.js'],
    color: '#3b82f6',
    gradient: 'from-blue-500/20 to-blue-600/5',
    slug: 'saitis-damzadeba',
  },
  {
    icon: Palette,
    title: 'UI/UX დიზაინი',
    description: 'ვქმნით ინტერფეისებს, სადაც ესთეტიკა და ფუნქციურობა ერთიანდება და მომხმარებლებს დიდხანს ამახსოვრდებათ.',
    tags: ['Figma', 'Prototyping', 'Design Systems'],
    color: '#8b5cf6',
    gradient: 'from-purple-500/20 to-purple-600/5',
    slug: null,
  },
  {
    icon: ShoppingCart,
    title: 'ელ-კომერცია',
    description: 'ინტერნეტ-მაღაზიები გამარტივებული გადახდის პროცესით და გაყიდვებზე ორიენტირებული დიზაინით.',
    tags: ['Shopify', 'WooCommerce', 'Stripe'],
    color: '#06b6d4',
    gradient: 'from-cyan-500/20 to-cyan-600/5',
    slug: null,
  },
  {
    icon: TrendingUp,
    title: 'SEO და წარმადობა',
    description: 'მონაცემებზე დაფუძნებული SEO სტრატეგიები და ოპტიმიზაცია, რომელიც თქვენს საიტს საძიებო შედეგების სათავეში ათავსებს.',
    tags: ['Core Web Vitals', 'Analytics', 'Schema'],
    color: '#10b981',
    gradient: 'from-emerald-500/20 to-emerald-600/5',
    slug: 'seo',
  },
  {
    icon: Megaphone,
    title: 'ბრენდის იდენტობა',
    description: 'სისტემური ბრენდინგი — ლოგოდან ვიზუალურ იდენტობამდე — რომელიც მკაფიო ავტორიტეტს ქმნის და ნდობას ზრდის.',
    tags: ['Logo Design', 'Guidelines', 'Motion'],
    color: '#f59e0b',
    gradient: 'from-amber-500/20 to-amber-600/5',
    slug: 'brendingi',
  },
  {
    icon: Target,
    title: 'ციფრული სტრატეგია',
    description: 'ჰოლისტიკური ციფრული სტრატეგია — ტექნოლოგიის, დიზაინისა და მარკეტინგის ერთიანობა ზრდისთვის.',
    tags: ['Consulting', 'Growth', 'Analytics'],
    color: '#ec4899',
    gradient: 'from-pink-500/20 to-pink-600/5',
    slug: null,
  },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const spotRef = useRef<HTMLDivElement>(null)
  const Icon = service.icon
  const navigate = useNavigate()
  const dest = service.slug ? `/services/${service.slug}` : '/services'

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height
    if (cardRef.current) {
      cardRef.current.style.transform = `perspective(900px) rotateX(${(py - 0.5) * -18}deg) rotateY(${(px - 0.5) * 18}deg) translateZ(12px)`
      cardRef.current.style.transition = 'transform 0.1s ease'
    }
    if (spotRef.current) {
      spotRef.current.style.background = `radial-gradient(circle at ${px * 100}% ${py * 100}%, ${service.color}18 0%, transparent 65%)`
      spotRef.current.style.opacity = '1'
    }
  }
  const onLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px)'
      cardRef.current.style.transition = 'transform 0.6s cubic-bezier(0.23,1,0.32,1)'
    }
    if (spotRef.current) spotRef.current.style.opacity = '0'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.75, delay: index * 0.08, ease: [0.22,1,0.36,1] }}
    >
      <div
        ref={cardRef}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        onClick={() => navigate(dest)}
        data-hover
        className="holo-card glow-border relative p-5 sm:p-7 rounded-2xl bg-bg-card group cursor-pointer depth-card"
        style={{ willChange: 'transform' }}
      >
        {/* Radial specular highlight — updated via ref */}
        <div ref={spotRef} className="absolute inset-0 rounded-2xl pointer-events-none opacity-0" style={{ transition: 'opacity 0.3s' }} />
        {/* Bottom color line */}
        <div className="absolute bottom-0 left-6 right-6 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `linear-gradient(90deg, transparent, ${service.color}60, transparent)` }}
        />

        {/* 3D icon platform */}
        <div className="relative z-10 mb-6">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1"
            style={{ background: `${service.color}18`, border: `1px solid ${service.color}35`, boxShadow: `0 8px 24px ${service.color}20` }}
          >
            <Icon className="w-6 h-6" style={{ color: service.color }} />
          </div>
          <div className="absolute -bottom-2 left-2 w-10 h-2 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: `${service.color}30` }} />
        </div>

        <h3 className="relative z-10 font-display font-bold text-xl text-white mb-3">{service.title}</h3>
        <p className="relative z-10 text-white/45 text-sm leading-relaxed mb-5 group-hover:text-white/65 transition-colors duration-300">
          {service.description}
        </p>

        <div className="relative z-10 flex flex-wrap gap-2">
          {service.tags.map(tag => (
            <span key={tag} className="text-xs px-3 py-1 rounded-full font-medium"
              style={{ background: `${service.color}12`, color: service.color, border: `1px solid ${service.color}22` }}>
              {tag}
            </span>
          ))}
        </div>

        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
          <span style={{ color: service.color }} className="text-lg font-bold">→</span>
        </div>
      </div>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="services" className="section-pad relative bg-bg-secondary overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-30" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-4 block">
            რას ვაკეთებთ
          </span>
          <h2 className="font-display font-bold text-[clamp(2rem,5vw,3.5rem)] text-white mb-5">
            სერვისები, რომლებიც{' '}
            <br />
            <span className="gradient-text">რეალურ შედეგს იძლევა</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
კონცეფციიდან გაშვებამდე, ჩვენ ვქმნით სრულ ციფრულ ეკოსისტემას, რომელიც თქვენს მიზნებთან ერთად ვითარდება.          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
