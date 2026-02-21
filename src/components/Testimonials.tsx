import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'რომან მამსირაშვილი',
    role: 'დამფუძნებელი',
    company: 'Swift Auto Import',
    avatar: 'RM',
    content: 'Metaweb-მა ჩვენი ციფრული პლატფორმა სრულად განაახლა. სისუფთავე, სისწრაფე და მარტივი პროცესი. მნიშვნელოვნად გაგვეზარდა მოთხოვნა და გაყიდვები. დეტალებზე მათი ყურადღება და ტექნიკური ექსპერტიზა უკონკურენტოა — ახლა ჩვენი კომპანია უფრო სანდოდ და თვალსაჩინოდ გამოიყურება.',
    rating: 5,
    color: '#3b82f6',
  },
  {
    name: 'ეკატერინე გოგოლაშვილი',
    role: 'დამფუძნებელი',
    company: 'Vel France',
    avatar: 'EG',
    content: 'Metaweb-მა ჩვენი ონლაინ მაღაზია ნულიდან შექმნა. ყველაფერი ძალიან მარტივია მომხმარებლისთვის — ნავიგაცია, შერჩევა, შეძენა. მას შემდეგ რაც ინტერნეტში გამოვჩნდით გაყიდვები საგრძნობლად გაგვეზარდა. მადლობა Metaweb-ს.',
    rating: 5,
    color: '#8b5cf6',
  },
  {
    name: 'გიგი ქავთარაძე',
    role: 'გენერალური დირექტორი',
    company: 'Agro Force',
    avatar: 'GQ',
    content: 'ჩვენი აგრო პლატფორმა ახლა სულ სხვაგვარად მუშაობს. ბაზრის მართვა, ფერმერთა და მომხმარებელთან კავშირი — ყველაფერი ერთ ნაბიჯშია. Metaweb-მა პროცესი სწრაფი და მარტივი გახადა, ხილვადობაც საგრძნობლად გაიზარდა.',
    rating: 5,
    color: '#06b6d4',
  },
  {
    name: 'გიორგი კეკელიძე',
    role: 'გენერალური მენეჯერი',
    company: 'Pendant',
    avatar: 'GK',
    content: 'დიდი ხანი ვგეგმავდით ონლაინ მაღაზიის შექმნას. გვეგონა, რომ პროცესი ძალიან რთული იქნებოდა, მაგრამ Metaweb-მა ყველაფერი მარტივად და სწრაფად გააკეთა. ახლა ჩვენი მაღაზია უკვე ონლაინაც ხელმისაწვდომია, გაყიდვები კი საკმაოდ გაიზარდა.',
    rating: 5,
    color: '#10b981',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const [direction, setDirection] = useState(1)

  const go = (dir: number) => {
    setDirection(dir)
    setActive(prev => (prev + dir + testimonials.length) % testimonials.length)
  }

  const t = testimonials[active]

  return (
    <section className="section-pad bg-bg-primary relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-15" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-purple/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-accent-purple mb-4 block">
            მომხმარებლის შეფასებები
          </span>
          <h2 className="font-display font-bold text-[clamp(2rem,5vw,3.5rem)] text-white">
            თქვენი სანდო{' '}
            <span className="gradient-text">ტექნოლოგიური პარტნიორი</span>
          </h2>
        </motion.div>

        {/* Testimonial card */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={active}
              custom={direction}
              initial={{ opacity: 0, x: direction * 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -80 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="glass-strong border border-white/7 rounded-3xl p-6 sm:p-10 md:p-14 relative overflow-hidden"
            >
              {/* Decorative quote icon */}
              <div
                className="absolute top-8 right-10 opacity-10"
                style={{ color: t.color }}
              >
                <Quote className="w-24 h-24" />
              </div>

              {/* Glow */}
              <div
                className="absolute inset-0 rounded-3xl opacity-20 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at 0% 0%, ${t.color}20, transparent 60%)` }}
              />

              {/* Stars */}
              <div className="flex gap-1 mb-7">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="relative z-10 text-white/80 text-sm sm:text-lg md:text-2xl leading-relaxed font-light mb-6 md:mb-10 max-w-3xl">
                "{t.content}"
              </p>

              {/* Author */}
              <div className="relative z-10 flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center font-display font-bold text-lg flex-shrink-0"
                  style={{ background: `${t.color}20`, border: `2px solid ${t.color}40`, color: t.color }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="font-display font-semibold text-white text-lg">{t.name}</div>
                  <div className="text-white/40 text-sm">{t.role}, {t.company}</div>
                </div>
                <div className="ml-auto hidden sm:block">
                  <div
                    className="text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full"
                    style={{ background: `${t.color}15`, color: t.color, border: `1px solid ${t.color}25` }}
                  >
                    დამოწმებული მომხმარებელი
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((item, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > active ? 1 : -1); setActive(i) }}
                  data-hover
                  className="transition-all duration-300"
                  style={{
                    width: i === active ? '28px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    background: i === active ? testimonials[i].color : 'rgba(255,255,255,0.15)',
                  }}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                onClick={() => go(-1)}
                data-hover
                className="w-12 h-12 glass border border-white/10 hover:border-white/20 rounded-xl flex items-center justify-center text-white/60 hover:text-white transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                onClick={() => go(1)}
                data-hover
                className="w-12 h-12 glass border border-white/10 hover:border-white/20 rounded-xl flex items-center justify-center text-white/60 hover:text-white transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
