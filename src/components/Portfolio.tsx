import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, ArrowRight, ArrowUpRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const categories = ['ყველა', 'ვებ-აპლიკაცია', 'ელ-კომერცია']

const projects = [
  {
    category: 'ვებ-აპლიკაცია',
    type: 'Swift Auto Import',
    year: '2026',
    gradient: 'from-blue-600/30 via-purple-600/20 to-transparent',
    accent: '#3b82f6',
    bg: '/images/swift.png',
    size: 'small',
  },
  {
    category: 'ელ-კომერცია',
    type: 'Pendant',
    year: '2024',
    gradient: 'from-pink-600/30 via-rose-600/20 to-transparent',
    accent: '#ec4899',
    bg: '/images/pendant.png',
    size: 'small',
  },
  {
    category: 'ელ-კომერცია',
    type: 'Vel France',
    year: '2025',
    gradient: 'from-amber-600/30 via-orange-600/20 to-transparent',
    accent: '#f59e0b',
    bg: '/images/vel-france.png',
    size: 'small',
  },
  {
    category: 'ელ-კომერცია',
    type: 'Agro Force',
    year: '2025',
    gradient: 'from-cyan-600/30 via-teal-600/20 to-transparent',
    accent: '#06b6d4',
    bg: '/images/agro-force.png',
    size: 'small',
  },
  {
    category: 'ვებ-აპლიკაცია',
    type: 'Zmorph',
    year: '2023',
    gradient: 'from-violet-600/30 via-purple-600/20 to-transparent',
    accent: '#8b5cf6',
    bg: '/images/zmorph.png',
    size: 'small',
  },
  {
    category: 'ელ-კომერცია',
    type: "Jacky's",
    year: '2022',
    gradient: 'from-emerald-600/30 via-green-600/20 to-transparent',
    accent: '#10b981',
    bg: '/images/jackys.png',
    size: 'small',
  },
  {
    category: 'ვებ-აპლიკაცია',
    type: "Pabco Gypsum",
    year: '2023',
    gradient: 'from-indigo-600/30 via-blue-600/20 to-transparent',
    accent: '#6366f1',
    bg: '/images/pabco.png',
    size: 'small',
  },
  {
    category: 'ელ-კომერცია',
    type: "Clare",
    year: '2022',
    gradient: 'from-rose-600/30 via-pink-600/20 to-transparent',
    accent: '#f43f5e',
    bg: '/images/clare.png',
    size: 'small',
  },
  {
    category: 'ვებ-აპლიკაცია',
    type: "Elisa Industriq",
    year: '2024',
    gradient: 'from-sky-600/30 via-cyan-600/20 to-transparent',
    accent: '#0ea5e9',
    bg: '/images/elisa-industriq.png',
    size: 'small',
  },
  {
    category: 'ვებ-აპლიკაცია',
    type: "Manning Elliott",
    year: '2022',
    gradient: 'from-lime-600/30 via-emerald-600/20 to-transparent',
    accent: '#84cc16',
    bg: '/images/manning.png',
    size: 'small',
  },
   {
    category: 'ვებ-აპლიკაცია',
    type: "Varner",
    year: '2024',
    gradient: 'from-orange-600/30 via-amber-600/20 to-transparent',
    accent: '#f97316',
    bg: '/images/varner.png',
    size: 'small',
  },
   {
    category: 'ვებ-აპლიკაცია',
    type: "Warren Smith",
    year: '2025',
    gradient: 'from-teal-600/30 via-emerald-600/20 to-transparent',
    accent: '#14b8a6',
    bg: '/images/warren-smith.png',
    size: 'small',
  },
   {
    category: 'ელ-კომერცია',
    type: "Velor",
    year: '2025',
    gradient: 'from-yellow-500/30 via-amber-600/20 to-transparent',
    accent: '#eab308',
    bg: '/images/velor.png',
    size: 'small',
  },
  {
    category: 'ვებ-აპლიკაცია',
    type: "Green IT Solution",
    year: '2024',
    gradient: 'from-green-600/30 via-emerald-600/20 to-transparent',
    accent: '#22c55e',
    bg: '/images/green-it.png',
    size: 'small',
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [hovered, setHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const spotRef = useRef<HTMLDivElement>(null)

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height
    if (cardRef.current) {
      cardRef.current.style.transform = `perspective(1000px) rotateX(${(py - 0.5) * -12}deg) rotateY(${(px - 0.5) * 12}deg) translateZ(16px)`
      cardRef.current.style.transition = 'transform 0.1s ease'
    }
    if (spotRef.current) {
      spotRef.current.style.background = `radial-gradient(circle at ${px * 100}% ${py * 100}%, ${project.accent}22 0%, transparent 60%)`
      spotRef.current.style.opacity = '1'
    }
  }
  const onLeave = () => {
    setHovered(false)
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)'
      cardRef.current.style.transition = 'transform 0.6s cubic-bezier(0.23,1,0.32,1)'
    }
    if (spotRef.current) spotRef.current.style.opacity = '0'
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className={project.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
    >
      <div
        ref={cardRef}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        onMouseEnter={() => setHovered(true)}
        data-hover
        className="relative rounded-2xl overflow-hidden cursor-default group depth-card h-full"
        style={{
          aspectRatio: '4/3',
          willChange: 'transform',
        }}
      >
      {/* Base bg */}
      <div
        className="absolute inset-0 bg-bg-card"
        style={project.bg ? { backgroundImage: `url(${project.bg})`, backgroundSize: 'cover', backgroundPosition: 'center' } : undefined}
      />
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
      <div className="absolute inset-0 tech-grid opacity-15" />

      {/* Mouse-tracked glow — updated via ref */}
      <div ref={spotRef} className="absolute inset-0 pointer-events-none opacity-0" style={{ transition: 'opacity 0.3s' }} />

      {/* Hover reveal overlay — slides up */}
      <motion.div
        className="absolute inset-0 flex flex-col justify-end p-8 pointer-events-none"
        animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 20 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="glass border border-white/10 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold" style={{ color: project.accent }}>დეტალურად ნახვა</span>
            <ArrowUpRight className="w-4 h-4" style={{ color: project.accent }} />
          </div>
        </div>
      </motion.div>

      {/* Corner glow */}
      <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-2xl"
        style={{ background: project.accent }} />

      {/* Top edge accent */}
      <div className="absolute top-0 left-0 right-0 h-px transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${project.accent}70, transparent)`, opacity: hovered ? 1 : 0 }} />

      {/* Content */}
      <div className="relative z-10 p-5 sm:p-8 h-full flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between mb-5">
            <span className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
              style={{ background: `${project.accent}18`, color: project.accent, border: `1px solid ${project.accent}28` }}>
              {project.type}
            </span>
            <span className="text-white/25 text-sm font-mono">{project.year}</span>
          </div>
        </div>


      </div>
      </div>
    </motion.div>
  )
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('ყველა')
  const navigate = useNavigate()

  const filtered = activeFilter === 'ყველა'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  const visible = filtered.slice(0, 6)

  return (
    <section id="portfolio" className="section-pad bg-bg-primary relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-20" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-accent-purple mb-4 block">
            ჩვენი პროექტები
          </span>
          <h2 className="font-display font-bold text-[clamp(2rem,5vw,3.5rem)] text-white mb-5">
            გამორჩეული{' '}
            <span className="gradient-text">პროექტები</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            ჩვენი გამორჩეული ციფრული პროექტების კოლექცია.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              data-hover
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-gradient-to-r from-accent-blue to-accent-purple text-white shadow-lg shadow-accent-blue/20'
                  : 'glass border border-white/10 text-white/50 hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-auto">
          <AnimatePresence mode="popLayout">
            {visible.map((project, i) => (
              <ProjectCard key={`${project.type}-${project.year}`} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-14"
        >
          <button
            onClick={() => navigate('/projects')}
            data-hover
            className="group inline-flex items-center gap-3 glass border border-white/10 hover:border-accent-blue/30 text-white/70 hover:text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300"
          >
            ყველა პროექტის ნახვა
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
