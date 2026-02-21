import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Phone } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import SEO from '../components/SEO'

type Project = { id:number; name:string; category:string; year:string; accent:string; bg:string; tags:string[]; desc:string; url:string }

const PROJECTS: Project[] = [
  { id:1,  name:'Swift Auto Import',  category:'ვებ-აპლიკაცია', year:'2026', accent:'#3b82f6', bg:'/images/swift.png',          tags:['React','TypeScript','API'],    desc:'ავტომობილების იმპორტის პლატფორმა', url:'https://swiftauto.ge/' },
  { id:2,  name:'Pendant',            category:'ელ-კომერცია',   year:'2024', accent:'#ec4899', bg:'/images/pendant.png',        tags:['Shopify','Custom Theme'],      desc:'სამკაულების ონლაინ მაღაზია',       url:'https://pendant.ge/' },
  { id:3,  name:'Vel France',         category:'ელ-კომერცია',   year:'2025', accent:'#f59e0b', bg:'/images/vel-france.png',     tags:['WordPress','Custom'],          desc:'სუნამოების ონლაინ მაღაზია',       url:'https://velfrance.ge/' },
  { id:4,  name:'Agro Force',         category:'ელ-კომერცია',   year:'2025', accent:'#06b6d4', bg:'/images/agro-force.png',     tags:['WordPress','PHP'],             desc:'სასოფლო-სამეურნეო ტექნიკა',      url:'https://agroforce.ge/' },
  { id:5,  name:'Zmorph',             category:'ვებ-აპლიკაცია', year:'2023', accent:'#8b5cf6', bg:'/images/zmorph.png',         tags:['React','3D Printing'],         desc:'3D პრინტინგის პლატფორმა',         url:'https://zmorph3d.com/' },
  { id:6,  name:"Jacky's",            category:'ელ-კომერცია',   year:'2022', accent:'#10b981', bg:'/images/jackys.png',         tags:['WordPress','Custom'],          desc:'ტექნიკის ონლაინ მაღაზია',         url:'https://www.jackyselectronics.com/' },
  { id:7,  name:'Pabco Gypsum',       category:'ვებ-აპლიკაცია', year:'2023', accent:'#6366f1', bg:'/images/pabco.png',          tags:['React','CMS'],                 desc:'სამშენებლო მასალების პლატფორმა', url:'https://pabcogypsum.com/' },
  { id:8,  name:'Clare',              category:'ელ-კომერცია',   year:'2022', accent:'#f43f5e', bg:'/images/clare.png',          tags:['Next.js','E-commerce'],        desc:'კოსმეტიკის ონლაინ მაღაზია',      url:'https://clare.pro/' },
  { id:9,  name:'Elisa Industriq',    category:'ვებ-აპლიკაცია', year:'2024', accent:'#0ea5e9', bg:'/images/elisa-industriq.png',tags:['React','Industrial'],          desc:'სამრეწველო კომპანია',             url:'https://www.elisaindustriq.com/' },
  { id:10, name:'Manning Elliott',    category:'ვებ-აპლიკაცია', year:'2022', accent:'#84cc16', bg:'/images/manning.png',        tags:['React','Finance'],             desc:'საბუღალტრო ფირმა',               url:'https://manningelliott.com/' },
  { id:11, name:'Varner',             category:'ვებ-აპლიკაცია', year:'2024', accent:'#f97316', bg:'/images/varner.png',         tags:['Next.js','Fashion'],           desc:'ტანსაცმლის ბრენდი',              url:'https://varner.com/en/' },
  { id:12, name:'Warren Smith',       category:'ვებ-აპლიკაცია', year:'2025', accent:'#14b8a6', bg:'/images/warren-smith.png',   tags:['React','Sports'],              desc:'სათხილამურო კლუბი',              url:'https://www.warrensmith-skiacademy.com/' },
  { id:13, name:'Velor',              category:'ელ-კომერცია',   year:'2025', accent:'#eab308', bg:'/images/velor.png',          tags:['Shopify','Fashion'],           desc:'ტანსაცმლის ბრენდი',              url:'https://velor-cycling.com/en' },
  { id:14, name:'Green IT Solution',  category:'ვებ-აპლიკაცია', year:'2024', accent:'#22c55e', bg:'/images/green-it.png',       tags:['React','IT'],                  desc:'IT კომპანია',                    url:'https://www.greenit-solution.de/en/' },
]

const CATS = ['ყველა','ვებ-აპლიკაცია','ელ-კომერცია']

function Card({ p, i }: { p: Project; i: number }) {
  const [hov, setHov] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const spotRef = useRef<HTMLDivElement>(null)
  const large = i % 5 === 0

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height
    if (cardRef.current) {
      cardRef.current.style.transform = `perspective(1200px) rotateX(${(py-0.5)*-8}deg) rotateY(${(px-0.5)*8}deg) translateZ(12px)`
      cardRef.current.style.transition = 'transform 0.08s ease'
    }
    if (spotRef.current) {
      spotRef.current.style.background = `radial-gradient(circle at ${px*100}% ${py*100}%,${p.accent}28 0%,transparent 60%)`
      spotRef.current.style.opacity = '1'
    }
  }
  const onLeave = () => {
    setHov(false)
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) translateZ(0)'
      cardRef.current.style.transition = 'transform 0.7s cubic-bezier(0.23,1,0.32,1)'
    }
    if (spotRef.current) spotRef.current.style.opacity = '0'
  }

  return (
    <motion.div layout
      initial={{ opacity:0, y:50 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, scale:0.9 }}
      transition={{ duration:0.55, delay:i*0.06, ease:[0.22,1,0.36,1] }}
      className={large ? 'md:col-span-2' : ''}
    >
      <div ref={cardRef} onMouseMove={onMove} onMouseLeave={onLeave} onMouseEnter={() => setHov(true)}
        onClick={() => window.open(p.url, '_blank', 'noopener,noreferrer')}
        data-hover className="relative rounded-3xl overflow-hidden cursor-pointer group"
        style={{ aspectRatio:'4/3', willChange:'transform' }}>

        {/* BG image */}
        <div className="absolute inset-0"
          style={{ backgroundImage:`url(${p.bg})`, backgroundSize:'cover', backgroundPosition:'center' }} />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#03040b]/95 via-[#03040b]/50 to-[#03040b]/10" />
        {/* Tech grid */}
        <div className="absolute inset-0 tech-grid opacity-10" />
        {/* Mouse glow */}
        <div ref={spotRef} className="absolute inset-0 pointer-events-none opacity-0" style={{ transition:'opacity 0.3s' }} />
        {/* Top accent line */}
        <div className="absolute top-0 inset-x-0 h-[1.5px] transition-opacity duration-300"
          style={{ background:`linear-gradient(90deg,transparent,${p.accent},transparent)`, opacity:hov?1:0 }} />
        {/* Watermark number */}
        <div className="absolute top-4 right-5 font-display font-black text-7xl leading-none select-none pointer-events-none"
          style={{ color:`${p.accent}10` }}>{String(p.id).padStart(2,'0')}</div>
        {/* Corner glow */}
        <div className="absolute -bottom-12 -right-12 w-52 h-52 rounded-full blur-3xl pointer-events-none opacity-0 group-hover:opacity-20 transition-opacity duration-500"
          style={{ background:p.accent }} />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between p-4 sm:p-6 h-full">
          {/* Top row */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full"
              style={{ background:`${p.accent}20`, color:p.accent, border:`1px solid ${p.accent}35` }}>
              {p.category}
            </span>
            <span className="text-white/30 text-xs font-mono">{p.year}</span>
          </div>

          {/* Bottom */}
          <div>
            <motion.div animate={{ opacity:hov?1:0, y:hov?0:8 }} transition={{ duration:0.28 }}
              className="flex flex-wrap gap-1.5 mb-3">
              {p.tags.map(t => (
                <span key={t} className="text-[10px] font-semibold px-2 py-0.5 rounded-md"
                  style={{ background:`${p.accent}15`, color:`${p.accent}cc`, border:`1px solid ${p.accent}30` }}>{t}</span>
              ))}
            </motion.div>

            <div className="flex items-end justify-between gap-3">
              <div>
                <p className="text-white/45 text-sm mb-1 leading-snug">{p.desc}</p>
                <h3 className="font-display font-bold text-white leading-tight text-base sm:text-xl">{p.name}</h3>
              </div>
              <motion.div animate={{ scale:hov?1:0.75, opacity:hov?1:0 }} transition={{ duration:0.25 }}
                className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background:`${p.accent}20`, border:`1px solid ${p.accent}45` }}>
                <ArrowUpRight className="w-5 h-5" style={{ color:p.accent }} />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const jsonLd = {
  '@context':'https://schema.org','@type':'CollectionPage',
  'name':'Metaweb პროექტები — ვებ-საიტები & ელ-კომერცია',
  'description':'Metaweb-ის 14+ შესრულებული პროექტი — React, Next.js, Shopify ვებ-საიტები.',
  'url':'https://metaweb.ge/projects',
  'provider':{'@type':'Organization','name':'Metaweb','url':'https://metaweb.ge'},
}

export default function PortfolioPage() {
  const [cat, setCat] = useState('ყველა')
  const navigate = useNavigate()
  const filtered = cat === 'ყველა' ? PROJECTS : PROJECTS.filter(p => p.category === cat)
  const count = (c: string) => c === 'ყველა' ? PROJECTS.length : PROJECTS.filter(p => p.category === c).length

  return (
    <div className="bg-bg-primary min-h-screen relative overflow-x-clip">
      <SEO
        title="პროექტები | ვებ-საიტები & ელ-კომერცია | Metaweb"
        description="React, Next.js, WordPress ვებ-საიტები და ელ-კომერცია. დაათვალიერე ჩვენი პროექტები. +995 577 90 80 80"
        keywords="პროექტები, ვებ-საიტი, ელ-კომერცია, React, Next.js, Shopify, ვებ-დეველოპმენტი საქართველო"
        canonical="/projects"
        jsonLd={jsonLd}
      />
      <div className="absolute inset-0 tech-grid opacity-15 pointer-events-none" />

      {/* ── HERO ── */}
      <section className="relative pt-28 pb-10 md:pt-32 md:pb-16 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[160px] pointer-events-none opacity-15"
          style={{ background:'linear-gradient(135deg,#3b82f6,#8b5cf6)' }} />

        <div className="max-w-7xl mx-auto">
          <motion.button onClick={() => navigate('/')}
            initial={{ opacity:0, x:-20 }} animate={{ opacity:1, x:0 }} transition={{ duration:0.5 }}
            className="flex items-center gap-2 text-white/40 hover:text-white text-sm mb-10 transition-colors duration-200 group">
            <span className="w-6 h-px bg-white/30 group-hover:bg-white/70 transition-colors duration-200" />
            მთავარი
          </motion.button>

          <motion.div initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8, ease:[0.22,1,0.36,1] }}>
            <span className="text-xs font-bold tracking-widest uppercase text-accent-blue mb-5 block">ჩვენი ნამუშევრები</span>
            <h1 className="font-display font-black text-[clamp(2rem,7vw,5.5rem)] text-white leading-[0.95] mb-5">
              გამორჩეული<br />
              <span className="gradient-text">პროექტები</span>
            </h1>

          </motion.div>



        </div>
      </section>

      {/* ── FILTERS + GRID ── */}
      <section className="px-4 sm:px-6 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto">



          {/* Bento grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((p, i) => <Card key={p.id} p={p} i={i} />)}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
            transition={{ duration:0.8 }}
            className="relative rounded-3xl overflow-hidden glass border border-white/8 p-6 sm:p-10 md:p-12 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/8 via-transparent to-accent-purple/8 pointer-events-none" />
            <div className="absolute top-0 inset-x-0 h-px"
              style={{ background:'linear-gradient(90deg,transparent,#3b82f680,transparent)' }} />
            <div className="relative z-10">
              <span className="text-xs font-bold tracking-widest uppercase text-accent-blue mb-5 block">შემდეგი ნაბიჯი</span>
              <h2 className="font-display font-bold text-[clamp(1.8rem,4vw,3rem)] text-white mb-4">
                ერთად შევქმნათ<br />
                <span className="gradient-text">შენი პროექტი</span>
              </h2>
              <p className="text-white/45 mb-8 max-w-md mx-auto">
                გვიამბე შენი იდეა და ჩვენ გადავაქცევთ სიტყვებს პროდუქტად.
              </p>
              <a href="tel:+995577908080" data-hover
                className="inline-flex items-center gap-3 bg-gradient-to-r from-accent-blue to-accent-purple text-white px-8 py-4 rounded-2xl font-semibold shadow-lg shadow-accent-blue/25 hover:shadow-accent-blue/40 transition-all duration-300 hover:-translate-y-0.5">
                <Phone className="w-5 h-5" />
                +995 577 90 80 80
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
