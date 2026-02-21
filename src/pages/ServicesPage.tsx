import React, { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Code2, Search, Palette, ArrowRight, Check, ChevronRight } from 'lucide-react'
import SEO from '../components/SEO'

const servicesJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://metaweb.ge/services/#webpage',
    'url': 'https://metaweb.ge/services/',
    'name': 'სერვისები | Metaweb',
    'description': 'Metaweb-ის სამი ძირითადი სერვისი: საიტის დამზადება, SEO ოპტიმიზაცია და ბრენდინგი.',
    'inLanguage': 'ka',
    'breadcrumb': {
      '@type': 'BreadcrumbList',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'მთავარი', 'item': 'https://metaweb.ge/' },
        { '@type': 'ListItem', 'position': 2, 'name': 'სერვისები', 'item': 'https://metaweb.ge/services/' }
      ]
    }
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': 'Metaweb სერვისები',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'url': 'https://metaweb.ge/services/saitis-damzadeba', 'name': 'საიტის დამზადება' },
      { '@type': 'ListItem', 'position': 2, 'url': 'https://metaweb.ge/services/seo', 'name': 'SEO ოპტიმიზაცია' },
      { '@type': 'ListItem', 'position': 3, 'url': 'https://metaweb.ge/services/brendingi', 'name': 'ბრენდინგი' }
    ]
  }
]

const S = [
  { id:'saitis-damzadeba', n:'01', Icon:Code2, title:'საიტის დამზადება', tag:'სტრატეგიულად. სწრაფად. გამორჩეულად.', desc:'საიტი არ იწყება დიზაინით — იწყება გეგმით. ვისმენთ მოთხოვნებს და ვქმნით სტრუქტურას, რომელიც მომხმარებელს გაუმარტივებს გზას თქვენამდე.', feats:['UI/UX დიზაინი და პროტოტიპი','React / Next.js ფრონტენდი','Node.js / API ბექენდი','ანალიტიკა და კონვერსია','Responsive დიზაინი','ჰოსტინგი და მხარდაჭერა'], c:'#3b82f6' },
  { id:'seo', n:'02', Icon:Search, title:'SEO ოპტიმიზაცია', tag:'ხილვადობა. ტრაფიკი. შედეგი.', desc:'SEO სტრატეგია, რომელიც იწყება ანალიზით და მთავრდება შედეგით. ვსწავლობთ თქვენს აუდიტორიას და ვქმნით მარშრუტს პირველ გვერდზე მოსახვედრად.', feats:['ტექნიკური SEO აუდიტი','საკვანძო სიტყვების კვლევა','Core Web Vitals','ლინკ-ბილდინგი','Google Analytics','ყოველთვიური ანგარიში'], c:'#10b981' },
  { id:'brendingi', n:'03', Icon:Palette, title:'ბრენდინგი', tag:'იდენტობა. ხედვა. ნდობა.', desc:'ბრენდი — ეს ემოცია, გამოცდილება და დაპირებაა. ვქმნით ვიზუალურ სისტემებს, რომლებიც გამოარჩევს თქვენს ბიზნესს.', feats:['ლოგოტიპი და ვარიანტები','ფერების პალიტრა','ბრენდ-გაიდლაინი PDF','სოც. მედია მასალები'], c:'#8b5cf6' },
]
const ST = [
  { n:'01', t:'იდეების გენერირება', d:'ვპოულობთ იდეებს, რომლებიც შეესაბამება თქვენს მიზნებს.' },
  { n:'02', t:'სტრუქტურის შექმნა', d:'ვაყალიბებთ სტრუქტურას და საინფო არქიტექტურას.' },
  { n:'03', t:'ამოცანის შესრულება', d:'ვქმნით პროდუქტს, რომელიც მუშაობს.' },
  { n:'04', t:'ტექნიკური მხარდაჭერა', d:'ვუზრუნველყოფთ გამართულ, დაცულ გარემოს.' },
]

function Vis({ s }: { s: typeof S[0] }) {
  return (
    <div className="relative flex items-center justify-center h-64">
      <div className="absolute w-48 h-48 rounded-full border" style={{ borderColor:`${s.c}20`, animation:'orbit2d 14s linear infinite' }} />
      <div className="absolute w-28 h-28 rounded-full border" style={{ borderColor:`${s.c}12`, animation:'orbit2d 9s linear infinite reverse' }} />
      <div className="absolute w-36 h-36 rounded-full blur-3xl opacity-20" style={{ background:s.c }} />
      <motion.div animate={{ y:[-8,8,-8] }} transition={{ duration:4, repeat:Infinity, ease:'easeInOut' }}
        className="relative z-10 w-20 h-20 rounded-3xl flex items-center justify-center"
        style={{ background:`${s.c}15`, border:`1.5px solid ${s.c}45`, boxShadow:`0 0 40px ${s.c}25` }}>
        <s.Icon className="w-9 h-9" style={{ color:s.c }} />
      </motion.div>
    </div>
  )
}

export default function ServicesPage() {
  const [active, setActive] = useState(S[0].id)
  useEffect(() => {
    const obs = new IntersectionObserver(
      es => es.forEach(e => { if (e.isIntersecting) { const id = e.target.getAttribute('id'); if (id) setActive(id) } }),
      { rootMargin: '-40% 0px -50% 0px' }
    )
    S.forEach(s => { const el = document.getElementById(s.id); if (el) obs.observe(el) })
    return () => obs.disconnect()
  }, [])
  useEffect(() => {
    const h = window.location.hash?.replace('#', '')
    if (h) setTimeout(() => { document.getElementById(h)?.scrollIntoView({ behavior:'smooth', block:'start' }) }, 100)
  }, [])
  const go = (id: string) => {
    window.history.replaceState(null, '', `#${id}`)
    document.getElementById(id)?.scrollIntoView({ behavior:'smooth', block:'start' })
  }
  const navigate = useNavigate()
  const cur = S.find(s => s.id === active) ?? S[0]
  const btnRefs = useRef<(HTMLButtonElement|null)[]>([])
  const sidebarRef = useRef<HTMLDivElement>(null)
  const [indPos, setIndPos] = useState({ top: 12, height: 64 })
  useEffect(() => {
    const idx = S.findIndex(s => s.id === active)
    const btn = btnRefs.current[idx]
    const container = sidebarRef.current
    if (btn && container) {
      const bRect = btn.getBoundingClientRect()
      const cRect = container.getBoundingClientRect()
      setIndPos({ top: bRect.top - cRect.top, height: bRect.height })
    }
  }, [active])
  return (
    <div className="bg-bg-primary min-h-screen relative">
      <SEO
        title="სერვისები — საიტის დამზადება, SEO, ბრენდინგი"
        description="Metaweb-ის სამი ძირითადი სერვისი: საიტის დამზადება React/Next.js-ზე, SEO ოპტიმიზაცია Google-ის პირველ გვერდზე და ბრენდ-იდენტობის შექმნა."
        canonical="/services"
        jsonLd={servicesJsonLd}
      />
      <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />
      {/* Hero */}
      <div className="pt-24 pb-8 md:pt-32 md:pb-16 px-4 md:px-6 text-center relative z-10">
        <motion.div initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8 }}>
          <h1 className="font-display font-extrabold text-[clamp(2.2rem,8vw,6rem)] text-white leading-[0.95] mb-4">სერვისები</h1>
          <p className="text-white/50 text-sm md:text-lg max-w-xl mx-auto">სამი ძირითადი მიმართულება, რომელიც თქვენს ბრენდს სრულყოფილად აქცევს.</p>
        </motion.div>
      </div>

      {/* Two-col layout */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex gap-10 items-start">
          {/* Sticky sidebar */}
          <aside className="hidden md:block shrink-0" style={{ width:'260px', position:'sticky', top:'5rem', alignSelf:'flex-start' }}>
            <div ref={sidebarRef} className="glass border border-white/8 rounded-2xl p-3 relative overflow-hidden">
              <motion.div className="absolute left-3 w-0.5 rounded-full"
                style={{ background:cur.c, boxShadow:`0 0 8px ${cur.c}` }}
                animate={{ top: indPos.top, height: indPos.height }}
                transition={{ type:'spring', stiffness:300, damping:30 }} />
              <div className="flex flex-col gap-2 pl-4">
                {S.map((s, idx) => { const on = active===s.id; return (
                  <button key={s.id} ref={el => { btnRefs.current[idx] = el }} onClick={() => go(s.id)} data-hover className={`relative flex items-center gap-3 p-3 rounded-xl text-left transition-all group ${on?'bg-white/5':'hover:bg-white/3'}`}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background:on?`${s.c}20`:'transparent', border:`1px solid ${on?s.c+'40':'transparent'}` }}>
                      <s.Icon className="w-5 h-5" style={{ color:on?s.c:'#ffffff50' }} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-semibold tracking-widest mb-0.5" style={{ color:on?'#ffffff40':'#ffffff20' }}>{s.n}</div>
                      <div className={`font-display font-semibold text-sm ${on?'text-white':'text-white/50 group-hover:text-white/75'}`}>{s.title}</div>
                    </div>
                    {on && <ChevronRight className="w-4 h-4 ml-auto" style={{ color:s.c }} />}
                  </button>
                )})}
              </div>
              <div className="mt-4 pt-4 border-t border-white/5 px-3">
                <p className="text-white/30 text-xs leading-relaxed">ჩვენ ვეხმარებით ბრენდებს, გახდნენ საუკეთესოები.</p>
                <button onClick={() => window.location.href='tel:+995577908080'} className="mt-3 w-full flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-semibold text-white/60 hover:text-white glass border border-white/10 hover:border-white/25 transition-all">
                  <ArrowRight className="w-3.5 h-3.5" />გელოდებით შენც
                </button>
              </div>
            </div>
          </aside>
          {/* Service sections */}
          <div className="flex-1 min-w-0">
            {S.map((s, i) => (
              <section key={s.id} id={s.id} className="relative flex items-center py-10 md:min-h-screen md:py-24 scroll-mt-20">
                {i > 0 && <div className="absolute top-0 left-0 right-0 h-px" style={{ background:`linear-gradient(90deg,transparent,${s.c}30,transparent)` }} />}
                <div className="absolute inset-0 pointer-events-none" style={{ background:`radial-gradient(ellipse at 70% 50%,${s.c}08 0%,transparent 65%)` }} />
                <motion.div initial={{ opacity:0, y:40 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:'-80px' }} transition={{ duration:0.75, ease:[0.22,1,0.36,1] }} className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <span className="font-display font-extrabold text-3xl sm:text-5xl leading-none select-none" style={{ color:`${s.c}20` }}>{s.n}</span>
                      <span className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full" style={{ background:`${s.c}15`, color:s.c, border:`1px solid ${s.c}30` }}>სერვისი</span>
                    </div>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0" style={{ background:`${s.c}15`, border:`1px solid ${s.c}35`, boxShadow:`0 8px 32px ${s.c}20` }}>
                        <s.Icon className="w-7 h-7" style={{ color:s.c }} />
                      </div>
                      <div>
                        <h2 className="font-display font-extrabold text-[clamp(1.4rem,4vw,2.6rem)] text-white leading-tight">{s.title}</h2>
                        <p className="text-sm font-semibold mt-1" style={{ color:s.c }}>{s.tag}</p>
                      </div>
                    </div>
                    <p className="text-white/55 text-sm md:text-base leading-relaxed mb-6 md:mb-8 max-w-lg">{s.desc}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {s.feats.map(f => (
                        <div key={f} className="flex items-start gap-2.5">
                          <div className="mt-0.5 w-5 h-5 rounded-md flex items-center justify-center shrink-0" style={{ background:`${s.c}15`, border:`1px solid ${s.c}30` }}>
                            <Check className="w-3 h-3" style={{ color:s.c }} />
                          </div>
                          <span className="text-white/65 text-sm leading-snug">{f}</span>
                        </div>
                      ))}
                    </div>
                    <motion.button whileHover={{ scale:1.03 }} whileTap={{ scale:0.97 }} onClick={() => navigate(`/services/${s.id}`)} data-hover className="mt-8 flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white" style={{ background:`linear-gradient(135deg,${s.c},${s.c}cc)`, boxShadow:`0 8px 24px ${s.c}30` }}>
                      დეტალურად<ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                  <div className="hidden lg:flex items-center justify-center"><Vis s={s} /></div>
                </motion.div>
              </section>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.7 }} className="my-20 p-8 md:p-12 rounded-3xl glass border border-white/10 relative overflow-hidden text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 via-accent-purple/5 to-transparent pointer-events-none" />
          <div className="relative z-10">
            <h3 className="font-display font-bold text-[clamp(1.6rem,4vw,2.5rem)] text-white mb-3">მზად ხარ დასაწყებად?</h3>
            <p className="text-white/50 mb-7 max-w-md mx-auto">დაგვიკავშირდი დღესვე უფასო კონსულტაციისთვის.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <motion.button whileHover={{ scale:1.05 }} whileTap={{ scale:0.97 }} onClick={() => navigate('/contact')} data-hover className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-accent-blue to-accent-purple shadow-xl shadow-accent-blue/20">
                დაიწყე<ArrowRight className="w-4 h-4" />
              </motion.button>
              <motion.button whileHover={{ scale:1.03 }} whileTap={{ scale:0.97 }} onClick={() => window.location.href='/'} data-hover className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white/70 hover:text-white glass border border-white/10 hover:border-white/25 transition-all">
                მთავარი გვერდი
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
