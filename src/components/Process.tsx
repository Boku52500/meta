import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { Search, Lightbulb, PenTool, Code2, Rocket } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'კვლევა და ანალიზი',
    description: 'ჩვენ სიღრმისეულად ვიკვლევთ თქვენს ბიზნესს, აუდიტორიასა და კონკურენტულ გარემოს, სტრატეგიული შესაძლებლობების გამოსავლენად და მკაფიო მიზნების დასადგენად.',
    color: '#3b82f6',
    deliverables: ['კონკურენტების ანალიზი', 'მომხმარებელთა ქცევის კვლევა', 'პროექტის ბრიფი'],
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'სტრატეგია და გეგმა',
    description: 'ვქმნით ყოვლისმომცველ სტრატეგიულ ჩარჩოს — ვგეგმავთ არქიტექტურას, ვარჩევთ ტექნოლოგიურ სტეკს და განვსაზღვრავთ მაილსთოუნების ვადებს, სრულად თქვენს ბიზნეს-მიზნებზე მორგებულად.',
    color: '#8b5cf6',
    deliverables: ['ტექნიკური სპეციფიკაცია', 'საინფორმაციო არქიტექტურა (საიტმაპი)'],
  },
  {
    number: '03',
    icon: PenTool,
    title: 'დიზაინი და პროტოტიპი',
    description: 'დიზაინი და ინტერაქტიული პროტოტიპები, რომლებიც თქვენს ხედვას სიცოცხლეს სძენს — განხილული, დახვეწილი და თქვენი მხრიდან დამტკიცებული.',
    color: '#06b6d4',
    deliverables: ['UI დიზაინი', 'ინტერაქტიული პროტოტიპი'],
  },
  {
    number: '04',
    icon: Code2,
    title: 'დეველოპმენტი და ტესტირება',
    description: 'სუფთა, მასშტაბური კოდი, შექმნილი მკაცრი სტანდარტებით და ყოვლისმომცველი ტესტირებით — წარმადობა, უსაფრთხოება და ხელმისაწვდომობა.',
    color: '#10b981',
    deliverables: ['ფრონტენდ-ბილდი', 'ბექენდ API', 'QA ტესტირება'],
  },
  {
    number: '05',
    icon: Rocket,
    title: 'გაშვება და ოპტიმიზაცია',
    description: 'სტაბილური მუშაობა და გაშვების შემდგომი სრული მხარდაჭერა — მონიტორინგი, ოპტიმიზაცია და მუდმივი გაუმჯობესება, რათა თქვენი პროდუქტი უწყვეტად ვითარდებოდეს.',
    color: '#f59e0b',
    deliverables: ['ანალიტიკის დაყენება', 'მუდმივი მხარდაჭერა'],
  },
]

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const topBorderRef = useRef<HTMLDivElement>(null)
  const iconRef = useRef<HTMLDivElement>(null)
  const isEven = index % 2 === 0
  const Icon = step.icon

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    const tx = ((e.clientY - r.top) / r.height - 0.5) * -10
    const ty = ((e.clientX - r.left) / r.width - 0.5) * 10
    if (cardRef.current) {
      cardRef.current.style.transform = `perspective(900px) rotateX(${tx}deg) rotateY(${ty}deg) translateZ(10px)`
      cardRef.current.style.transition = 'transform 0.1s ease'
    }
  }
  const onLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px)'
      cardRef.current.style.transition = 'transform 0.6s cubic-bezier(0.23,1,0.32,1)'
    }
    if (topBorderRef.current) topBorderRef.current.style.opacity = '0'
    if (iconRef.current) iconRef.current.style.boxShadow = `0 0 0px ${step.color}00`
  }
  const onEnter = () => {
    if (topBorderRef.current) topBorderRef.current.style.opacity = '1'
    if (iconRef.current) iconRef.current.style.boxShadow = `0 0 30px ${step.color}50`
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -60 : 60, y: 20 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`relative flex flex-col lg:flex-row items-center gap-8 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
    >
      {/* ── Card ── */}
      <div className="w-full lg:w-[calc(50%-3rem)]">
        <div
          ref={cardRef}
          onMouseMove={onMove} onMouseLeave={onLeave} onMouseEnter={onEnter}
          data-hover
          className="holo-card glow-border relative glass border border-white/8 rounded-2xl p-5 md:p-8 group depth-card overflow-hidden"
          style={{ willChange: 'transform' }}
        >
          {/* Corner number watermark */}
          <div className="absolute top-4 right-6 font-display font-extrabold text-6xl leading-none pointer-events-none select-none"
            style={{ color: `${step.color}08` }}>{step.number}</div>

          {/* Glowing top border on hover */}
          <div ref={topBorderRef} className="absolute top-0 left-6 right-6 h-px rounded-full"
            style={{ background: `linear-gradient(90deg, transparent, ${step.color}80, transparent)`, opacity: 0, transition: 'opacity 0.5s' }} />

          <div className="flex items-start gap-4 mb-5">
            <div
              ref={iconRef}
              className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ background: `${step.color}15`, border: `1px solid ${step.color}35`, transition: 'box-shadow 0.4s' }}
            >
              <Icon className="w-5 h-5" style={{ color: step.color }} />
            </div>
            <div>
              <div className="text-[10px] font-bold tracking-[0.25em] uppercase mb-1" style={{ color: step.color }}>ეტაპი {step.number}</div>
              <h3 className="font-display font-bold text-xl text-white">{step.title}</h3>
            </div>
          </div>

          <p className="text-white/45 text-sm leading-relaxed mb-5 group-hover:text-white/65 transition-colors duration-300">
            {step.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {step.deliverables.map(d => (
              <motion.span key={d}
                whileHover={{ scale: 1.05 }}
                className="text-xs px-3 py-1 rounded-lg font-medium"
                style={{ background: `${step.color}10`, color: `${step.color}cc`, border: `1px solid ${step.color}20` }}>
                ✓ {d}
              </motion.span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Center node ── */}
      <div className="hidden lg:flex w-24 flex-shrink-0 items-center justify-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.2 }}
          className="relative w-14 h-14 rounded-full flex items-center justify-center text-sm font-bold font-display z-10 cursor-default"
          style={{
            background: `radial-gradient(circle, ${step.color}25, ${step.color}08)`,
            border: `2px solid ${step.color}80`,
            color: step.color,
            boxShadow: `0 0 30px ${step.color}40, 0 0 60px ${step.color}15`,
          }}
        >
          {step.number}
          {/* Pulsing ring */}
          <motion.div
            animate={{ scale: [1, 1.8], opacity: [0.4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
            className="absolute inset-0 rounded-full"
            style={{ border: `1px solid ${step.color}60` }}
          />
        </motion.div>
      </div>

      <div className="hidden lg:block w-[calc(50%-3rem)]" />
    </motion.div>
  )
}

export default function Process() {
  return (
    <section id="process" className="section-pad bg-bg-tertiary relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent-purple/4 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-accent-cyan mb-4 block">როგორ ვმუშაობთ</span>
          <h2 className="font-display font-bold text-[clamp(2rem,5vw,3.5rem)] text-white mb-5">
            სიზუსტეზე დაფუძნებული <span className="gradient-text">პროცესი</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            ხუთი ნაბიჯი იდეიდან გამორჩეულ ციფრულ პროდუქტამდე.
          </p>
        </motion.div>

        <div className="relative">
          {/* Animated vertical spine */}
          <motion.div
            initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }}
            viewport={{ once: true }} transition={{ duration: 1.5, ease: 'easeInOut' }}
            style={{ transformOrigin: 'top' }}
            className="hidden lg:block absolute left-1/2 -translate-x-px top-6 bottom-6 w-px bg-gradient-to-b from-accent-blue/40 via-accent-purple/30 to-accent-cyan/20"
          />

          <div className="space-y-8 md:space-y-12">
            {steps.map((step, i) => <StepCard key={step.number} step={step} index={i} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
