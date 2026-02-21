import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Zap, Star, Eye, Lightbulb, MessageCircle, Target, Phone, Users, Briefcase, Award, Clock } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import SEO from '../components/SEO'

const jsonLd = {
  '@context':'https://schema.org','@type':'AboutPage',
  'name':'Metaweb შესახებ — ვებ-დეველოპმენტის სააგენტო',
  'description':'Metaweb — ვებ-დეველოპმენტის სააგენტო. ჩვენი გუნდი, ღირებულებები და მისია.',
  'url':'https://metaweb.ge/about',
  'provider':{'@type':'Organization','name':'Metaweb','url':'https://metaweb.ge'},
}

const VALUES = [
  { icon:Zap,           title:'სიჩქარე',       desc:'საიტი საშუალოდ 3 კვირაში. პროექტს არასოდეს ვაჭიანურებთ, გაწვდით შედეგს დროულად.' },
  { icon:Star,          title:'ხარისხი',        desc:'ყოველი კოდის სტრიქონი იწერება მაღალი სტანდარტებით. პრემიუმ პროდუქტი — ყოველთვის.' },
  { icon:Eye,           title:'გამჭვირვალობა',  desc:'მომხმარებელმა ყოველ ეტაპზე იცის, რა ეტაპზე ვართ. სრული გამჭვირვალობა პროცესის დასაწყისიდან ბოლომდე.' },
  { icon:Lightbulb,     title:'ინოვაცია',       desc:'ვიყენებთ უახლეს ტექნოლოგიებს — React, Next.js, WordPress. ყოველთვის ვართ ეპოქის წინ.' },
  { icon:MessageCircle, title:'კომუნიკაცია',    desc:'სწრაფი პასუხი, მკაფიო კომუნიკაცია. შენი კითხვა არასოდეს რჩება უპასუხოდ.' },
  { icon:Target,        title:'შედეგი',          desc:'ვებ-საიტი — ეს ინვესტიციაა. ჩვენი პროდუქტები გაძლევთ რეალურ შედეგებს.' },
]

const MILESTONES = [
  { year:'2021', title:'დასაწყისი',  desc:'Metaweb დაარსდა ერთი მკაფიო ამბიციით — შეექმნა ვებ-პროდუქტები, რომლებიც რეალურად პასუხობს ბაზრის მოთხოვნებს და იძლევა შედეგს.' },
  { year:'2022', title:'ზრდა',  desc:'პირველი წარმატებული პროექტები. ჩამოყალიბდა სტრატეგიული მიდგომა დიზაინსა და დეველოპმენტში.' },
  { year:'2023', title:'განვითარება',       desc:'30+ დასრულებული პროექტი, პირველი საერთაშორისო მომხმარებლები. გუნდი გაფართოვდა ახალი სპეციალისტებით და პროცესები გაუმჯობესდა.' },
  { year:'2024', title:'მასშტაბი',   desc:'50+ პროექტი. შეგვემატა SEO და ბრენდინგის სერვისები, რამავ Metaweb-ი აქცია სრულფასოვან ციფრულ პარტნიორად.' },
  { year:'2025', title:'პიკი',       desc:'120+ შესრულებული პროექტი. 100% კმაყოფილი მომხმარებელი. React, Next.js, WordPress ეკოსისტემები.' },
  { year:'2026', title:'მომავალი',   desc:'AI ინტეგრაციები, ახალი სერვისები. Metaweb ხდება ციფრული ტრანსფორმაციის პარტნიორი.' },
]

const STATS = [
  { icon:Briefcase, value:'150+',  label:'შესრულებული პროექტი' },
  { icon:Users,     value:'100%', label:'კმაყოფილი კლიენტი' },
  { icon:Clock,     value:'3 კვირა',  label:'საშუალო დრო' },
  { icon:Award,     value:'10+',   label:'წლიანი გამოცდილება' },
]

const WHY = [
  { accent:'#3b82f6', title:'ინდივიდუალური მიდგომა',      desc:'ჩვენ არ ვყიდით შაბლონებს. ყოველი პროექტი იწყება სიღრმისეული ანალიზით — შენი ბიზნესი, შენი მომხმარებელი, შენი კონკურენტული გარემო.', icon:Target },
  { accent:'#8b5cf6', title:'Full-Stack გუნდი',            desc:'UI/UX, Front-end, Back-end, SEO — ყველაფერი ერთ სივრცეში. კოორდინაცია და სიჩქარე გარანტირებულია.',                      icon:Users },
  { accent:'#06b6d4', title:'სწრაფი მიწოდება',             desc:'სტანდარტული საიტი — 2-3 კვირა. არაა საჭირო თვეობით ლოდინი.',                                                                  icon:Zap },
  { accent:'#10b981', title:'გრძელვადიანი პარტნიორობა',   desc:'გაშვების შემდეგ ჩვენ არ ვქრებით. ვუზრუნველყოფთ მხარდაჭერას, განახლებებს და ზრდის სტრატეგიებს.',                           icon:Award },
]

function ValueCard({ v, i }: { v: typeof VALUES[0]; i: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const Icon = v.icon
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX-r.left)/r.width, py = (e.clientY-r.top)/r.height
    if (ref.current) {
      ref.current.style.transform = `perspective(900px) rotateX(${(py-0.5)*-6}deg) rotateY(${(px-0.5)*6}deg) translateZ(8px)`
      ref.current.style.transition = 'transform 0.08s ease'
    }
  }
  const onLeave = () => {
    if (ref.current) {
      ref.current.style.transform = 'perspective(900px) rotateX(0) rotateY(0) translateZ(0)'
      ref.current.style.transition = 'transform 0.6s cubic-bezier(0.23,1,0.32,1)'
    }
  }
  return (
    <motion.div initial={{ opacity:0, y:40 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
      transition={{ duration:0.55, delay:i*0.08, ease:[0.22,1,0.36,1] }}>
      <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}
        className="h-full glass border border-white/8 hover:border-accent-blue/20 rounded-2xl p-6 group transition-colors duration-300 cursor-default"
        style={{ willChange:'transform' }}>
        <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
          style={{ background:'#3b82f615', border:'1px solid #3b82f630' }}>
          <Icon className="w-5 h-5 text-accent-blue" />
        </div>
        <h3 className="font-display font-bold text-white text-lg mb-2">{v.title}</h3>
        <p className="text-white/40 text-sm leading-relaxed">{v.desc}</p>
      </div>
    </motion.div>
  )
}

function TimelineItem({ m, i, last }: { m: typeof MILESTONES[0]; i: number; last: boolean }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once:true, margin:'-80px' })
  return (
    <div ref={ref} className="relative flex gap-8 items-start pb-12">
      {!last && (
        <div className="absolute left-[19px] top-10 w-px bg-white/8" style={{ height:'calc(100% - 1.5rem)' }}>
          <motion.div className="w-full bg-gradient-to-b from-accent-blue to-transparent"
            initial={{ height:0 }} animate={inView?{ height:'100%' }:{ height:0 }}
            transition={{ duration:1, delay:0.4+i*0.1 }} />
        </div>
      )}
      <motion.div initial={{ scale:0, opacity:0 }} animate={inView?{ scale:1, opacity:1 }:{ scale:0, opacity:0 }}
        transition={{ duration:0.4, delay:0.2+i*0.1 }}
        className="shrink-0 w-10 h-10 rounded-full border-2 border-accent-blue/50 bg-[#03040b] flex items-center justify-center z-10">
        <div className="w-2.5 h-2.5 rounded-full bg-accent-blue" />
      </motion.div>
      <motion.div initial={{ opacity:0, x:20 }} animate={inView?{ opacity:1, x:0 }:{ opacity:0, x:20 }}
        transition={{ duration:0.5, delay:0.25+i*0.1 }} className="pt-1">
        <span className="text-xs font-bold tracking-widest uppercase text-accent-blue/70 mb-1 block font-mono">{m.year}</span>
        <h3 className="font-display font-bold text-white text-xl mb-2">{m.title}</h3>
        <p className="text-white/40 text-sm leading-relaxed max-w-md">{m.desc}</p>
      </motion.div>
    </div>
  )
}

export default function AboutPage() {
  const navigate = useNavigate()
  return (
    <div className="bg-bg-primary min-h-screen relative overflow-x-clip">
      <SEO
        title="ჩვენ შესახებ | Metaweb — ციფრული სააგენტო"
        description="გაიცანი Metaweb — საქართველოს პრემიუმ ციფრული სააგენტო. ჩვენი მისია, ღირებულებები და გუნდი."
        keywords="Metaweb შესახებ, ვებ-დეველოპმენტი საქართველო, ვებ სააგენტო, React, Next.js, SEO"
        canonical="/about"
        jsonLd={jsonLd}
      />
      <div className="absolute inset-0 tech-grid opacity-15 pointer-events-none" />

      {/* HERO */}
      <section className="relative pt-28 pb-10 md:pt-32 md:pb-20 px-6">
        <div className="absolute top-0 left-1/4 w-[600px] h-[500px] rounded-full blur-[180px] pointer-events-none opacity-10"
          style={{ background:'linear-gradient(135deg,#3b82f6,#8b5cf6)' }} />
        <div className="max-w-7xl mx-auto">
          <motion.button onClick={() => navigate('/')}
            initial={{ opacity:0, x:-20 }} animate={{ opacity:1, x:0 }} transition={{ duration:0.5 }}
            className="flex items-center gap-2 text-white/40 hover:text-white text-sm mb-10 transition-colors duration-200 group">
            <span className="w-6 h-px bg-white/30 group-hover:bg-white/70 transition-colors duration-200" />
            მთავარი
          </motion.button>

          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <motion.div initial={{ opacity:0, y:40 }} animate={{ opacity:1, y:0 }}
              transition={{ duration:0.8, ease:[0.22,1,0.36,1] }}>
              <span className="text-xs font-bold tracking-widest uppercase text-accent-blue mb-5 block">ჩვენ შესახებ</span>
              <h1 className="font-display font-black text-[clamp(2rem,7vw,5.5rem)] text-white leading-[0.95] mb-5">
                ციფრული<br /><span className="gradient-text">სააგენტო</span>
              </h1>
              <div className="w-16 h-px bg-gradient-to-r from-accent-blue to-transparent mb-5" />
              <p className="text-white/45 text-sm md:text-lg leading-relaxed max-w-md">
                ვქმნით ვებ-პროდუქტებს, რომლებიც შედეგებზეა ორიენტირებული — ტექნიკური სრულყოფილებით, ვიზუალური სიზუსტით და სტრატეგიული აზროვნებით.
              </p>
            </motion.div>

            <motion.div initial={{ opacity:0, x:40 }} animate={{ opacity:1, x:0 }}
              transition={{ duration:0.8, delay:0.2, ease:[0.22,1,0.36,1] }}
              className="grid grid-cols-2 gap-4">
              {STATS.map((s, i) => {
                const Icon = s.icon
                return (
                  <motion.div key={s.label} initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }}
                    transition={{ duration:0.6, delay:0.3+i*0.1 }}
                    className="glass border border-white/8 hover:border-accent-blue/25 rounded-2xl p-4 md:p-6 text-center transition-colors duration-300">
                    <Icon className="w-5 h-5 text-accent-blue/60 mx-auto mb-2" />
                    <div className="font-display font-black text-2xl md:text-3xl text-white mb-1">{s.value}</div>
                    <div className="text-white/35 text-xs tracking-wide leading-tight">{s.label}</div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="px-6 py-10 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12 items-start">
            <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
              transition={{ duration:0.7 }} className="md:col-span-2">
              <span className="text-xs font-bold tracking-widest uppercase text-accent-blue/70 mb-4 block">ჩვენი ისტორია</span>
              <h2 className="font-display font-black text-[clamp(2rem,4vw,3.5rem)] text-white leading-[1.05]">
                იდეიდან<br /><span className="gradient-text">შედეგამდე</span>
              </h2>
            </motion.div>
            <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
              transition={{ duration:0.7, delay:0.15 }} className="md:col-span-3 space-y-5 pt-2">

              <p className="text-white/40 leading-relaxed">
                ჩვენ ავირჩიეთ განსხვავებული გზა — ყოველ პროექტს ვუდგებით სიღრმისეულად, ბიზნეს ლოგიკის, მომხმარებლის ქცევის და ტექნიკური შესაძლებლობების გათვალისწინებით. React, Next.js, WordPress — ვირჩევთ ინსტრუმენტს კონტექსტის მიხედვით.
              </p>
              <p className="text-white/40 leading-relaxed">
                დღეს 150+ პროექტი ატარებს ჩვენს ხელნაწერს — სხვადასხვა ქვეყანაში, სხვადასხვა ინდუსტრიაში. ყველა მომხმარებელი კმაყოფილია. ეს ჩვენი ერთადერთი მიზანია.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="px-6 py-10 md:py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
            transition={{ duration:0.6 }} className="text-center mb-8 md:mb-14">
            <span className="text-xs font-bold tracking-widest uppercase text-accent-blue/70 mb-4 block">ჩვენი პრინციპები</span>
            <h2 className="font-display font-bold text-[clamp(1.8rem,4vw,3rem)] text-white">რას გპირდებით</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {VALUES.map((v, i) => <ValueCard key={v.title} v={v} i={i} />)}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="px-6 py-10 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12">
            <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
              transition={{ duration:0.6 }} className="md:col-span-2">
              <span className="text-xs font-bold tracking-widest uppercase text-accent-blue/70 mb-4 block">ქრონოლოგია</span>
              <h2 className="font-display font-bold text-[clamp(1.8rem,4vw,3rem)] text-white mb-4">
                გზა<br /><span className="gradient-text">2021–2026</span>
              </h2>
              <p className="text-white/35 text-sm leading-relaxed">ახალი წელი — ახალი გამოწვევა, ახალი პროექტი, ახალი გაკვეთილი.</p>
            </motion.div>
            <div className="md:col-span-3">
              {MILESTONES.map((m, i) => <TimelineItem key={m.year} m={m} i={i} last={i===MILESTONES.length-1} />)}
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="px-6 py-10 md:py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
            transition={{ duration:0.6 }} className="text-center mb-8 md:mb-14">
            <span className="text-xs font-bold tracking-widest uppercase text-accent-blue/70 mb-4 block">რატომ Metaweb</span>
            <h2 className="font-display font-bold text-[clamp(1.8rem,4vw,3rem)] text-white">განსხვავება თვალსაჩინოა</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {WHY.map((w, i) => {
              const Icon = w.icon
              return (
                <motion.div key={w.title} initial={{ opacity:0, y:40 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
                  transition={{ duration:0.55, delay:i*0.1, ease:[0.22,1,0.36,1] }}
                  className="relative glass border border-white/8 hover:border-white/15 rounded-3xl p-5 md:p-8 group transition-colors duration-300 overflow-hidden">
                  <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-15 transition-opacity duration-500 pointer-events-none"
                    style={{ background:w.accent }} />
                  <div className="absolute top-0 inset-x-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background:`linear-gradient(90deg,transparent,${w.accent}80,transparent)` }} />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                      style={{ background:`${w.accent}15`, border:`1px solid ${w.accent}30` }}>
                      <Icon className="w-6 h-6" style={{ color:w.accent }} />
                    </div>
                    <h3 className="font-display font-bold text-white text-xl mb-3">{w.title}</h3>
                    <p className="text-white/40 text-sm leading-relaxed">{w.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
            transition={{ duration:0.8 }}
            className="relative rounded-3xl overflow-hidden glass border border-white/8 p-6 sm:p-10 md:p-12 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/8 via-transparent to-accent-purple/8 pointer-events-none" />
            <div className="absolute top-0 inset-x-0 h-px"
              style={{ background:'linear-gradient(90deg,transparent,#3b82f680,transparent)' }} />
            <div className="relative z-10">
              <span className="text-xs font-bold tracking-widest uppercase text-accent-blue mb-5 block">დავიწყოთ</span>
              <h2 className="font-display font-bold text-[clamp(1.8rem,4vw,3rem)] text-white mb-4">
                გვიყვარს ახალი<br /><span className="gradient-text">გამოწვევები</span>
              </h2>
              <p className="text-white/45 mb-8 max-w-md mx-auto">
                მოგვიყევი შენი იდეის შესახებ — ერთ ზარში განვსაზღვრავთ, სად ვართ და სად შეგვიძლია ვიყოთ.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="tel:+995577908080" data-hover
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-accent-blue to-accent-purple text-white px-8 py-4 rounded-2xl font-semibold shadow-lg shadow-accent-blue/25 hover:shadow-accent-blue/40 transition-all duration-300 hover:-translate-y-0.5">
                  <Phone className="w-5 h-5" />
                  +995 577 90 80 80
                </a>
                <button onClick={() => navigate('/projects')} data-hover
                  className="inline-flex items-center gap-2 glass border border-white/10 hover:border-white/25 text-white/60 hover:text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300">
                  ნამუშევრები →
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
