import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { motion } from 'framer-motion'
import { Trophy, Users, Calendar, TrendingUp } from 'lucide-react'

const stats = [
  { value: 150, suffix: '+', label: 'დასრულებული პროექტი',  icon: Trophy, color: '#3b82f6' },
  { value: 98, suffix: '%', label: 'კმაყოფილი მომხმარებელი', icon: Users, color: '#8b5cf6' },
  { value: 10, suffix: '+', label: 'წლიანი გამოცდილება', icon: Calendar, color: '#06b6d4' },
  { value: 340, suffix: '%', label: 'საშ. ROI', icon: TrendingUp, color: '#10b981' },
]

export default function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <section id="stats" className="section-pad bg-bg-secondary relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-blue/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-purple/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-radial from-accent-blue/5 via-transparent to-transparent" style={{ backgroundSize: '60% 60%', backgroundPosition: 'center' }} />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-4 block">
            ციფრებში
          </span>
          <h2 className="font-display font-bold text-[clamp(2rem,5vw,3.5rem)] text-white">
            შედეგები, რომლებიც{' '}
            <br />
            <span className="gradient-text">თავად საუბრობს</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            const circumference = 2 * Math.PI * 36
            const pct = stat.suffix === '%' ? stat.value / 100 : 0.75
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="holo-card glow-border relative glass rounded-2xl p-6 md:p-8 text-center group depth-card overflow-hidden"
              >
                {/* Ambient glow bg */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{ background: `radial-gradient(ellipse at 50% 0%, ${stat.color}18, transparent 65%)` }} />

                {/* 3D orbital ring SVG */}
                <div className="relative z-10 mx-auto mb-6 flex items-center justify-center" style={{ width: 88, height: 88 }}>
                  {/* Spinning orbit track */}
                  <svg className="absolute inset-0" width="88" height="88" viewBox="0 0 88 88">
                    <circle cx="44" cy="44" r="36" fill="none" stroke={`${stat.color}15`} strokeWidth="2" />
                    <motion.circle
                      cx="44" cy="44" r="36" fill="none"
                      stroke={stat.color} strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeDasharray={circumference}
                      initial={{ strokeDashoffset: circumference }}
                      whileInView={{ strokeDashoffset: circumference * (1 - pct) }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.8, delay: i * 0.15 + 0.3, ease: 'easeOut' }}
                      style={{ transform: 'rotate(-90deg)', transformOrigin: '44px 44px', filter: `drop-shadow(0 0 6px ${stat.color}80)` }}
                    />
                  </svg>
                  {/* Orbiting dot */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4 + i, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-0"
                  >
                    <div className="absolute top-0.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
                      style={{ background: stat.color, boxShadow: `0 0 8px ${stat.color}` }} />
                  </motion.div>
                  {/* Center icon */}
                  <div className="relative w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ background: `${stat.color}18`, border: `1px solid ${stat.color}30` }}>
                    <Icon className="w-5 h-5" style={{ color: stat.color }} />
                  </div>
                </div>

                {/* Counter */}
                <div className="relative z-10 font-display font-extrabold text-4xl sm:text-5xl mb-2 number-highlight"
                  style={{ color: stat.color, textShadow: `0 0 30px ${stat.color}40` }}>
                  {inView
                    ? <CountUp end={stat.value} duration={2.5} delay={i * 0.15} suffix={stat.suffix} />
                    : <span>0{stat.suffix}</span>
                  }
                </div>
                <div className="relative z-10 font-semibold text-white text-base mb-1">{stat.label}</div>

                {/* Animated bottom accent */}
                <motion.div
                  initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.1 + 0.5 }}
                  className="absolute bottom-0 left-6 right-6 h-px rounded-full"
                  style={{ background: `linear-gradient(90deg, transparent, ${stat.color}60, transparent)` }}
                />
              </motion.div>
            )
          })}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-4 sm:gap-8 pt-12 border-t border-white/5"
        >
          {['Google Partner', 'Shopify Expert', 'AWS Certified', 'ISO 27001', 'Meta Business Partner'].map((badge) => (
            <span key={badge} className="text-white/25 text-sm font-medium tracking-wide hover:text-white/50 transition-colors cursor-default">
              {badge}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
