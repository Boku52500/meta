import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import { Code2, Search, Palette, ArrowRight, ArrowLeft, Phone, Zap, Shield, Globe, BarChart2, Target, Layers, TrendingUp, Eye, Link2, Award, MessageSquare, FileText } from 'lucide-react'

type Feat = { icon: React.ElementType; title: string; desc: string }
type Step = { n: string; title: string; desc: string }
interface SD { n:string; title:string; Icon:React.ElementType; c:string; c2:string; tag:string; hero:string; desc:string; seoTitle:string; seoDesc:string; keywords:string; stats:{v:string;l:string}[]; features:Feat[]; steps:Step[]; tools:string[] }

const DATA: Record<string, SD> = {
  'saitis-damzadeba': {
    n:'01', title:'საიტის დამზადება', Icon:Code2, c:'#3b82f6', c2:'#93c5fd',
    tag:'სტრატეგიულად. სწრაფად. გამორჩეულად.', hero:'საიტი, რომელიც ყიდის',
    desc:'ვქმნით ვებ-პლატფორმებს, სადაც ყოველი პიქსელი მიზნობრივია. კოდიდან ვიზუალამდე, ყოველი გადაწყვეტილება ემსახურება თქვენი ბიზნესის განვითარებას.',
    seoTitle:'საიტის დამზადება | ვებ-დეველოპმენტი | React & Next.js',
    seoDesc:'პროფესიონალური საიტის დამზადება — React, Next.js, Node.js. სწრაფი, ოპტიმიზირებული, ანალიტიკით. ვებ-დეველოპერი საქართველოში. +995 577 90 80 80',
    keywords:'საიტის დამზადება, ვებ-დეველოპმენტი, საიტის გაკეთება, ვებ-დეველოპერი, ვებ-სააგენტო, React, Next.js, ვებ-დიზაინი, landing page, ვებ-საიტი, საიტის დამზადება თბილისში, პროფესიონალური ვებ-საიტი, web development georgia, საიტის შექმნა',
    stats:[{v:'3×',l:'გაყიდვების ზრდა'},{v:'<2s',l:'ჩატვირთვა'},{v:'100%',l:'ოპტიმიზაცია'},{v:'99.9%',l:'უწყვეტად მუშაობა'}],
    features:[
      {icon:Zap,title:'სწრაფი ჩატვირთვა',desc:'Core Web Vitals ოპტიმიზაცია — Lighthouse 95+'},
      {icon:Globe,title:'Responsive დიზაინი',desc:'ნებისმიერ ეკრანზე — მობილური, ტაბლეტი, დესკტოპი'},
      {icon:Shield,title:'უსაფრთხოება',desc:'SSL, DDoS დაცვა, რეგულარული განახლებები'},
      {icon:BarChart2,title:'ანალიტიკა',desc:'Google Analytics, Hotjar — მომხმარებელთა ქცევის სრული სურათი'},
      {icon:Layers,title:'CMS ინტეგრაცია',desc:'კონტენტის მართვა ტექნიკური ცოდნის გარეშე'},
      {icon:Target,title:'კონვერსია',desc:'A/B ტესტირება და UX ოპტიმიზაცია მეტი გაყიდვისთვის'},
    ],
    steps:[
      {n:'01',title:'ბრიფი და კვლევა',desc:'ვისმენთ, ვიკვლევთ კონკურენტებს და ვადგენთ სტრატეგიას'},
      {n:'02',title:'UI/UX დიზაინი',desc:'ვქმნით პროტოტიპებს — დამტკიცებამდე'},
      {n:'03',title:'დეველოპმენტი',desc:'React / Next.js, Node.js — სუფთა, მასშტაბური კოდი'},
      {n:'04',title:'გაშვება',desc:'ტესტირება, ოპტიმიზაცია, CI/CD — ჩვენ ვმართავთ'},
    ],
    tools:['React','Next.js','TypeScript','Node.js','PostgreSQL','Tailwind CSS','Figma','Vercel','AWS'],
  },
  seo: {
    n:'02', title:'SEO ოპტიმიზაცია', Icon:Search, c:'#10b981', c2:'#6ee7b7',
    tag:'ხილვადობა. ტრაფიკი. შედეგი.', hero:'იყავი პირველ გვერდზე Google-ში',
    desc:'SEO სტრატეგია, რომელიც იწყება ღრმა ანალიზით. ტექნიკური გამართვა, კონტენტის გამართვა, ლინკ-ბილდინგი — ვქმნით მდგრად ორგანულ ტრაფიკს.',
    seoTitle:'SEO ოპტიმიზაცია | Google-ის პირველ გვერდზე მოხვედრა',
    seoDesc:'SEO ოპტიმიზაცია საქართველოში — ორგანული ტრაფიკი +340%, Google-ის #1 პოზიცია 6 თვეში. ტექნიკური SEO, ლინკ-ბილდინგი, კონტენტ-სტრატეგია. +995 577 90 80 80',
    keywords:'SEO ოპტიმიზაცია, SEO საქართველო, Google-ში პირველი ადგილი, ორგანული ტრაფიკი, SEO სპეციალისტი, ტექნიკური SEO, საიტის ოპტიმიზაცია, ლინკ-ბილდინგი, Core Web Vitals, SEO თბილისი, search engine optimization georgia, Google Search Console, SEMrush',
    stats:[{v:'340%',l:'ორგანული ტრაფიკი'},{v:'#1',l:'პოზიცია Google-ში'},{v:'6 თვე',l:'საშ. ვადა'},{v:'98%',l:'კმაყოფილი მომხმარებელი'}],
    features:[
      {icon:Search,title:'ტექნიკური SEO',desc:'აუდიტი, ერორები, სისწრაფე, სქემა, ინდექსინგი'},
      {icon:TrendingUp,title:'საკვანძო სიტყვები',desc:'მოცულობა, კონკურენცია, Intent — სრული კვლევა'},
      {icon:Eye,title:'Core Web Vitals',desc:'LCP, FID, CLS — Google-ის ძირითადი რეიტინგ-ფაქტორები'},
      {icon:Link2,title:'ლინკ-ბილდინგი',desc:'ავტორიტეტული ბექლინქები — White-Hat მეთოდები'},
      {icon:FileText,title:'კონტენტ-სტრატეგია',desc:'SEO-ოპტიმიზებული ტექსტები, ბლოგი, Landing გვერდები'},
      {icon:BarChart2,title:'ყოველთვიური ანგარიში',desc:'რანკინგი, ტრაფიკი, გაყიდვები — სრული გამჭვირვალობა'},
    ],
    steps:[
      {n:'01',title:'SEO აუდიტი',desc:'ვიკვლევთ საიტს სიღრმისეულად — ტექნიკური მხარე და კონტენტის მხარე'},
      {n:'02',title:'სტრატეგია',desc:'ვქმნით სტრატეგიას კვლევის საფუძველზე'},
      {n:'03',title:'დანერგვა',desc:'ყველა ცვლილებას ვახორციელებთ — ტექნიკური + კონტენტი'},
      {n:'04',title:'მონიტორინგი',desc:'ყოველთვიური ანგარიში, კორექტირება, ზრდა'},
    ],
    tools:['Google Search Console','SEMrush','Ahrefs','Screaming Frog','Google Analytics','PageSpeed Insights','Schema.org'],
  },
  brendingi: {
    n:'03', title:'ბრენდინგი', Icon:Palette, c:'#8b5cf6', c2:'#c4b5fd',
    tag:'იდენტობა. ხედვა. ნდობა.', hero:'ბრენდი, რომელიც არასდროს ავიწყდებათ',
    desc:'ბრენდი — ეს ემოცია, გამოცდილება და დაპირებაა. ვქმნით ვიზუალურ სისტემებს, რომლებიც გამოარჩევს თქვენს ბიზნესს.',
    seoTitle:'ბრენდინგი | ლოგოს დამზადება | ბრენდ-იდენტობა | Metaweb',
    seoDesc:'პროფესიონალური ბრენდინგი და ლოგოს შექმნა — ბრენდ-გაიდლაინი, ვიზუალური სისტემა, სოც.მედია კიტი. 150+ პროექტი. ბრენდინგი თბილისში. +995 577 90 80 80',
    keywords:'ბრენდინგი, ლოგოს დამზადება, ბრენდ-იდენტობა, ლოგოტიპი, ვიზუალური სტილი, ბრენდ-გაიდლაინი, ფირმული სტილი, კორპორატიული დიზაინი, ბრენდინგი თბილისში, ლოგოს შექმნა, ბრენდ-სტრატეგია, branding georgia, logo design',
    stats:[{v:'2×',l:'ნდობა'},{v:'150+',l:'ბრენდინგ-პროექტი'},{v:'30+',l:'ინდუსტრია'},{v:'100%',l:'უნიკალური დიზაინი'}],
    features:[
      {icon:Palette,title:'ლოგოტიპი',desc:'უნიკალური, მასშტაბური ლოგო — ყველა ფორმატში'},
      {icon:Layers,title:'ვიზუალური სისტემა',desc:'ფერები, ტიპოგრაფია, ფორმები'},
      {icon:Award,title:'ბრენდ-გაიდლაინი',desc:'PDF დოკუმენტი — სრული სახელმძღვანელო გამოყენებისთვის'},
      {icon:Globe,title:'ციფრული პრეზენტაცია',desc:'სოციალური მედია, ბანერები, იმეილ-თემპლეიტი'},
      {icon:MessageSquare,title:'ბრენდის ხმა',desc:'ტონი, სტილი, მესიჯი — კომუნიკაციის სტრატეგია'},
      {icon:Target,title:'კონკურენტების ანალიზი',desc:'ბაზრის კვლევა — გამოარჩიე შენი ბრენდი კონკურენტებისგან'},
    ],
    steps:[
      {n:'01',title:'კვლევა',desc:'ვიკვლევთ ბაზარს, კონკურენტებს, სამიზნე აუდიტორიას'},
      {n:'02',title:'კონცეფცია',desc:'ვქმნით რამოდენიმე კონცეფციას — ვირჩევთ ერთად'},
      {n:'03',title:'დიზაინი',desc:'ვქმნით სრულ ვიზუალურ სისტემას'},
      {n:'04',title:'ჩაბარება',desc:'ყველა ფორმატი (SVG, PNG, PDF) + სრული გაიდლაინი'},
    ],
    tools:['Figma','Adobe Illustrator','Adobe Photoshop','After Effects','Lottie','Notion'],
  },
}

const fadeUp = { hidden:{opacity:0,y:30}, show:{opacity:1,y:0,transition:{duration:0.7,ease:[0.22,1,0.36,1]}} }
const stagger = { show:{ transition:{ staggerChildren:0.1 } } }

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug:string }>()
  const navigate = useNavigate()
  const s = DATA[slug ?? ''] ?? DATA['saitis-damzadeba']
  const Icon = s.Icon
  const currentSlug = slug && DATA[slug] ? slug : 'saitis-damzadeba'

  const pageJsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': s.title,
      'description': s.desc,
      'provider': { '@type': 'Organization', 'name': 'Metaweb', 'url': 'https://metaweb.ge' },
      'areaServed': { '@type': 'Country', 'name': 'Georgia' },
      'url': `https://metaweb.ge/services/${currentSlug}`,
      'inLanguage': 'ka',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'მთავარი', 'item': 'https://metaweb.ge/' },
        { '@type': 'ListItem', 'position': 2, 'name': 'სერვისები', 'item': 'https://metaweb.ge/services/' },
        { '@type': 'ListItem', 'position': 3, 'name': s.title, 'item': `https://metaweb.ge/services/${currentSlug}` },
      ],
    },
  ]

  return (
    <div className="bg-bg-primary min-h-screen relative overflow-x-clip">
      <SEO
        title={s.seoTitle}
        description={s.seoDesc}
        keywords={s.keywords}
        canonical={`/services/${currentSlug}`}
        jsonLd={pageJsonLd}
      />
      <div className="absolute inset-0 tech-grid opacity-15 pointer-events-none" />

      {/* ── HERO ── */}
      <section className="relative pt-24 pb-10 md:pt-36 md:pb-28 px-6 overflow-hidden">
        {/* Big bg glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full blur-[140px] pointer-events-none opacity-20"
          style={{ background: s.c }} />
        {/* Watermark number — desktop only to avoid mobile overflow */}
        <div className="hidden md:block absolute top-16 right-20 font-display font-extrabold select-none pointer-events-none leading-none"
          style={{ fontSize:'clamp(8rem,20vw,18rem)', color:`${s.c}06` }}>{s.n}</div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Back breadcrumb */}
          <motion.button
            initial={{ opacity:0, x:-20 }} animate={{ opacity:1, x:0 }} transition={{ duration:0.5 }}
            onClick={() => navigate('/services')}
            className="flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-6 md:mb-10 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">ყველა სერვისი</span>
          </motion.button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left */}
            <motion.div variants={stagger} initial="hidden" animate="show">
              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-2 mb-4 md:mb-6">
                <span className="text-xs font-bold tracking-[0.25em] uppercase px-3 py-1 rounded-full flex-shrink-0"
                  style={{ background:`${s.c}15`, color:s.c, border:`1px solid ${s.c}30` }}>სერვისი {s.n}</span>
                <span className="text-white/30 text-xs flex-shrink-0">/</span>
                <span className="text-white/40 text-xs line-clamp-1">{s.tag}</span>
              </motion.div>
              <motion.h1 variants={fadeUp}
                className="font-display font-extrabold text-[clamp(1.9rem,6vw,5rem)] leading-[0.95] text-white mb-3">
                {s.hero}
              </motion.h1>
              <motion.h2 variants={fadeUp}
                className="font-display font-bold text-[clamp(1.1rem,3vw,2rem)] mb-4"
                style={{ color: s.c }}>
                {s.title}
              </motion.h2>
              <motion.p variants={fadeUp} className="text-white/55 text-sm md:text-lg leading-relaxed mb-7 md:mb-10 max-w-xl">
                {s.desc}
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3">
                <motion.button
                  whileHover={{ scale:1.04 }} whileTap={{ scale:0.97 }}
                  onClick={() => window.location.href='tel:+995577908080'}
                  className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl font-bold text-white shadow-xl text-sm md:text-base"
                  style={{ background:`linear-gradient(135deg, ${s.c}, ${s.c}aa)`, boxShadow:`0 8px 32px ${s.c}35` }}
                >
                  <Phone className="w-4 h-4" />+995 577 90 80 80
                </motion.button>
                <motion.button
                  whileHover={{ scale:1.03 }} whileTap={{ scale:0.97 }}
                  onClick={() => navigate('/services')}
                  className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-white/60 hover:text-white glass border border-white/10 hover:border-white/25 transition-all text-sm md:text-base"
                >
                  <ArrowLeft className="w-4 h-4" />სხვა სერვისები
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right — animated visual */}
            <motion.div
              initial={{ opacity:0, scale:0.85 }} animate={{ opacity:1, scale:1 }}
              transition={{ duration:0.9, ease:[0.22,1,0.36,1] }}
              className="hidden lg:flex items-center justify-center"
            >
              <div className="relative w-72 h-72 flex items-center justify-center">
                <div className="absolute w-72 h-72 rounded-full border" style={{ borderColor:`${s.c}15`, animation:'orbit2d 18s linear infinite' }} />
                <div className="absolute w-52 h-52 rounded-full border" style={{ borderColor:`${s.c}10`, animation:'orbit2d 12s linear infinite reverse' }} />
                <div className="absolute w-36 h-36 rounded-full border" style={{ borderColor:`${s.c}20`, animation:'orbit2d 7s linear infinite' }} />
                <div className="absolute w-56 h-56 rounded-full blur-3xl opacity-15" style={{ background:s.c }} />
                {[0,1,2,3,4,5].map(i => (
                  <motion.div key={i}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10 + i*2, repeat:Infinity, ease:'linear' }}
                    className="absolute"
                    style={{ width: 80 + i*35, height: 80 + i*35 }}
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full"
                      style={{ background: s.c2, boxShadow:`0 0 8px ${s.c}`, opacity: 1 - i*0.15 }} />
                  </motion.div>
                ))}
                <motion.div
                  animate={{ y:[-10,10,-10] }}
                  transition={{ duration:4, repeat:Infinity, ease:'easeInOut' }}
                  className="relative z-10 w-28 h-28 rounded-3xl flex items-center justify-center"
                  style={{ background:`${s.c}18`, border:`2px solid ${s.c}45`, boxShadow:`0 0 60px ${s.c}30` }}
                >
                  <Icon className="w-14 h-14" style={{ color:s.c }} />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-10 md:py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {s.stats.map((st, i) => (
              <motion.div key={st.l}
                initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }} transition={{ duration:0.6, delay:i*0.1, ease:[0.22,1,0.36,1] }}
                className="glass border border-white/8 rounded-2xl p-4 md:p-6 text-center group hover:border-opacity-30 transition-all"
                style={{ '--hover-border': s.c } as React.CSSProperties}
              >
                <div className="font-display font-extrabold text-2xl md:text-4xl mb-1"
                  style={{ color:s.c, textShadow:`0 0 20px ${s.c}40` }}>{st.v}</div>
                <div className="text-white/45 text-sm">{st.l}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-10 md:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
            transition={{ duration:0.7 }} className="mb-8 md:mb-14">
            <span className="text-xs font-bold tracking-widest uppercase mb-4 block" style={{ color:s.c }}>რას მიიღებ</span>
            <h2 className="font-display font-bold text-[clamp(1.8rem,4vw,3rem)] text-white mb-3">
              სრული პაკეტი — ყველაფერი,<br/>
              <span style={{ color:s.c }}>რაც გჭირდება</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {s.features.map((f, i) => {
              const FIcon = f.icon
              return (
                <motion.div key={f.title}
                  initial={{ opacity:0, y:40 }} whileInView={{ opacity:1, y:0 }}
                  viewport={{ once:true, margin:'-40px' }} transition={{ duration:0.65, delay:i*0.08, ease:[0.22,1,0.36,1] }}
                  className="group glass border border-white/8 rounded-2xl p-6 hover:border-opacity-30 transition-all duration-300"
                  style={{ '--c':s.c } as React.CSSProperties}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                    style={{ background:`${s.c}15`, border:`1px solid ${s.c}30`, boxShadow:`0 4px 16px ${s.c}15` }}>
                    <FIcon className="w-5 h-5" style={{ color:s.c }} />
                  </div>
                  <h3 className="font-display font-bold text-white text-lg mb-2">{f.title}</h3>
                  <p className="text-white/45 text-sm leading-relaxed group-hover:text-white/65 transition-colors duration-300">{f.desc}</p>
                  <div className="mt-5 h-px w-0 group-hover:w-full transition-all duration-500 rounded-full"
                    style={{ background:`linear-gradient(90deg, ${s.c}80, transparent)` }} />
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-10 md:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
            transition={{ duration:0.7 }} className="mb-8 md:mb-16">
            <span className="text-xs font-bold tracking-widest uppercase mb-4 block" style={{ color:s.c }}>როგორ ვმუშაობთ</span>
            <h2 className="font-display font-bold text-[clamp(1.4rem,4vw,3rem)] text-white">
              4 ნაბიჯი იდეიდან <span style={{ color:s.c }}>შედეგამდე</span>
            </h2>
          </motion.div>

          {/* Desktop: horizontal timeline */}
          <div className="hidden lg:grid grid-cols-4 gap-6 relative">
            {/* Connecting line */}
            <div className="absolute top-7 left-[calc(100%/8)] right-[calc(100%/8)] h-px pointer-events-none"
              style={{ background:`linear-gradient(90deg,transparent,${s.c}45 15%,${s.c}45 85%,transparent)` }} />
            {s.steps.map((step, i) => (
              <motion.div key={step.n}
                initial={{ opacity:0, y:40 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }} transition={{ duration:0.65, delay:i*0.12, ease:[0.22,1,0.36,1] }}
                className="group flex flex-col items-center text-center"
              >
                {/* Numbered circle */}
                <div className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center mb-6 shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{ background:`${s.c}12`, border:`1.5px solid ${s.c}50`, boxShadow:`0 0 28px ${s.c}18` }}>
                  <span className="font-display font-extrabold text-xl tabular-nums" style={{ color:s.c }}>{String(i+1).padStart(2,'0')}</span>
                  <div className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-35 transition-opacity duration-300" style={{ background:s.c }} />
                </div>
                {/* Card */}
                <div className="w-full flex-1 rounded-2xl p-6 glass border border-white/8 group-hover:border-white/16 transition-all duration-300"
                  style={{ borderTop:`2px solid ${s.c}35` }}>
                  <h3 className="font-display font-bold text-white text-lg mb-3">{step.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/65 transition-colors duration-300">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile: vertical timeline */}
          <div className="lg:hidden flex flex-col">
            {s.steps.map((step, i) => (
              <motion.div key={step.n}
                initial={{ opacity:0, x:-24 }} whileInView={{ opacity:1, x:0 }}
                viewport={{ once:true }} transition={{ duration:0.6, delay:i*0.1, ease:[0.22,1,0.36,1] }}
                className="relative flex gap-4 pb-6 last:pb-0"
              >
                {/* Vertical connector */}
                {i < s.steps.length - 1 && (
                  <div className="absolute left-7 top-14 bottom-0 w-px"
                    style={{ background:`linear-gradient(to bottom,${s.c}45,transparent)` }} />
                )}
                {/* Circle */}
                <div className="relative z-10 shrink-0 w-14 h-14 rounded-full flex items-center justify-center"
                  style={{ background:`${s.c}12`, border:`1.5px solid ${s.c}50`, boxShadow:`0 0 22px ${s.c}18` }}>
                  <span className="font-display font-extrabold text-xl tabular-nums" style={{ color:s.c }}>{String(i+1).padStart(2,'0')}</span>
                </div>
                {/* Card */}
                <div className="flex-1 rounded-2xl p-5 glass border border-white/8"
                  style={{ borderLeft:`2px solid ${s.c}35` }}>
                  <h3 className="font-display font-bold text-white text-lg mb-2">{step.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOOLS ── */}
      <section className="py-10 md:py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
            transition={{ duration:0.7 }} className="text-center">
            <span className="text-xs font-bold tracking-widest uppercase mb-6 block" style={{ color:s.c }}>ტექნოლოგიები</span>
            <div className="flex flex-wrap justify-center gap-3">
              {s.tools.map((t, i) => (
                <motion.span key={t}
                  initial={{ opacity:0, scale:0.85 }} whileInView={{ opacity:1, scale:1 }}
                  viewport={{ once:true }} transition={{ duration:0.4, delay:i*0.05 }}
                  className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105"
                  style={{ background:`${s.c}12`, color:s.c2, border:`1px solid ${s.c}25` }}
                >{t}</motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-12 md:py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }} transition={{ duration:0.8 }}
            className="relative glass border border-white/10 rounded-3xl p-6 sm:p-10 md:p-16 text-center overflow-hidden"
          >
            <div className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{ background:`radial-gradient(ellipse at 50% 0%, ${s.c}12, transparent 65%)` }} />
            <div className="absolute top-0 left-0 right-0 h-px"
              style={{ background:`linear-gradient(90deg,transparent,${s.c}60,transparent)` }} />
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{ background:`${s.c}15`, border:`1px solid ${s.c}35`, boxShadow:`0 0 40px ${s.c}20` }}>
                <Icon className="w-8 h-8" style={{ color:s.c }} />
              </div>
              <h2 className="font-display font-extrabold text-[clamp(1.8rem,4vw,3.2rem)] text-white leading-tight mb-4">
                მზად ხარ დასაწყებად?
              </h2>
              <p className="text-white/50 text-sm md:text-lg max-w-lg mx-auto mb-7 md:mb-10 leading-relaxed">
                დაგვიკავშირდი დღესვე — უფასო კონსულტაცია და პროექტის შეფასება 24 საათში.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale:1.04, boxShadow:`0 0 40px ${s.c}50` }} whileTap={{ scale:0.97 }}
                  onClick={() => window.location.href='tel:+995577908080'}
                  className="flex items-center justify-center gap-3 px-6 md:px-8 py-3.5 md:py-4 rounded-2xl font-bold text-white text-sm md:text-lg shadow-2xl"
                  style={{ background:`linear-gradient(135deg,${s.c},${s.c}bb)`, boxShadow:`0 8px 32px ${s.c}30` }}
                >
                  <Phone className="w-5 h-5" />+995 577 90 80 80
                </motion.button>
                <motion.button
                  whileHover={{ scale:1.03 }} whileTap={{ scale:0.97 }}
                  onClick={() => navigate('/services')}
                  className="flex items-center justify-center gap-2 px-6 md:px-8 py-3.5 md:py-4 rounded-2xl font-semibold text-white/60 hover:text-white glass border border-white/10 hover:border-white/25 transition-all text-sm md:text-lg"
                >
                  <ArrowLeft className="w-5 h-5" />სხვა სერვისები
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
