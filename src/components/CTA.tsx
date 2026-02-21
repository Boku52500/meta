import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function CTA() {
  const navigate = useNavigate()
  return (
    <section id="contact" className="section-pad relative overflow-hidden bg-bg-secondary">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 via-accent-purple/10 to-accent-cyan/10" />
      <div className="absolute inset-0 tech-grid opacity-20" />

      {/* Glowing orbs */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-accent-blue/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent-purple/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Top border line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-blue/50 to-transparent" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >

          {/* Headline */}
          <h2 className="font-display font-extrabold text-[clamp(1.9rem,6vw,5.5rem)] text-white leading-[0.95] mb-6">
            მზად ხარ
            <br />
            <span className="gradient-text">განსაკუთრებელი პროექტის შესაქმნელად?</span>
          </h2>

          {/* Subtext */}
          <p className="text-white/50 text-base sm:text-xl max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed font-light">
            შეუერთდი 150-ზე მეტ პროგრესულ კომპანიას, რომლებიც Metaweb-ს ენდობიან თავიანთი ციფრული სივრცის შესაქმნელად.
            დაგვიკავშირდი დღესვე და ერთად ვაქციოთ შენი მიზნები რეალობად.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 sm:mb-16">
            <motion.button
              onClick={() => navigate('/contact')}
              whileHover={{ scale: 1.04, boxShadow: '0 0 60px rgba(59,130,246,0.5)' }}
              whileTap={{ scale: 0.97 }}
              data-hover
              className="group flex items-center gap-3 px-7 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan rounded-2xl font-bold text-white text-base sm:text-lg shadow-2xl shadow-accent-blue/20 transition-all duration-300"
              style={{ backgroundSize: '200% 100%', backgroundPosition: '0% 50%' }}
            >
              პროექტის დაწყება
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.a
              href="tel:+995577908080"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              data-hover
              className="group flex items-center gap-3 px-7 py-4 sm:px-10 sm:py-5 glass border border-white/10 hover:border-accent-blue/30 rounded-2xl font-semibold text-white/70 hover:text-white text-base sm:text-lg transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              +995 577 90 80 80
            </motion.a>
          </div>

          {/* Features row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-x-10 gap-y-3 text-white/35 text-sm"
          >
            {[
              '✓ უფასო კონსულტაცია',
              '✓ სწრაფი პასუხი',
            ].map(item => (
              <span key={item} className="hover:text-white/60 transition-colors">{item}</span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
