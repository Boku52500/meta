import { motion } from 'framer-motion'

const ring1 = ['React', 'Next.js', 'TypeScript', 'Vue.js', 'Svelte', 'Remix']
const ring2 = ['Node.js', 'GraphQL', 'PostgreSQL', 'Redis', 'Docker', 'AWS', 'Vercel', 'Prisma']

const SIZE = 420
const CX = SIZE / 2

function OrbitRing({ items, radius, duration, reverse = false, color }: {
  items: string[]; radius: number; duration: number; reverse?: boolean; color: string
}) {
  return (
    <div style={{ position: 'absolute', inset: 0 }}>
      {/* Static track circle */}
      <div style={{
        position: 'absolute',
        left: CX - radius, top: CX - radius,
        width: radius * 2, height: radius * 2,
        border: `1px solid ${color}20`,
        borderRadius: '50%',
      }} />
      {/* Spinning wrapper — plain 2D rotate, zero 3D cost */}
      <div style={{
        position: 'absolute', left: 0, top: 0, width: SIZE, height: SIZE,
        animation: `orbit2d ${duration}s linear infinite`,
        animationDirection: reverse ? 'reverse' : 'normal',
      }}>
        {items.map((item, i) => {
          const a = (2 * Math.PI * i) / items.length
          return (
            <div key={item} style={{
              position: 'absolute',
              left: CX + Math.cos(a) * radius,
              top:  CX + Math.sin(a) * radius,
              transform: 'translate(-50%, -50%)',
              /* counter-rotate to keep label upright */
              animation: `orbit2d ${duration}s linear infinite`,
              animationDirection: reverse ? 'normal' : 'reverse',
            }}>
              <span className="px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap border"
                style={{ background: `${color}10`, borderColor: `${color}28`, color }}>
                {item}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default function TechStack() {
  return (
    <section className="section-pad relative bg-bg-primary overflow-hidden">
      <div className="absolute inset-0 mesh-bg pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-accent-cyan mb-4 block">
              ჩვენი სტეკი
            </span>
            <h2 className="font-display font-bold text-[clamp(1.6rem,5vw,3.5rem)] text-white mb-4 lg:mb-6">
              თანამედროვე{' '}
              <span className="gradient-text">ტექნოლოგიებზე დაფუძნებული</span>
            </h2>
            <p className="text-white/45 text-sm lg:text-lg leading-relaxed mb-6 lg:mb-8 max-w-lg">
              ვირჩევთ საუკეთესო ინსტრუმენტებსა და ფრეიმვორკებს, რათა თითოეული პროექტი იყოს სწრაფი, მასშტაბური და მომავალზე ორიენტირებული.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'ფრონტენდი', items: 'React · Next.js · TypeScript' },
                { label: 'ბექენდი',   items: 'Node.js · GraphQL · PostgreSQL' },
                { label: 'ღრუბელი',  items: 'AWS · Vercel · Docker · Redis' },
                { label: 'დიზაინი',  items: 'Figma · Framer · Tailwind CSS' },
              ].map(({ label, items }) => (
                <div key={label} className="glass border border-white/7 rounded-xl p-4">
                  <div className="text-white/30 text-[10px] font-semibold tracking-widest uppercase mb-1">{label}</div>
                  <div className="text-white/70 text-xs leading-relaxed">{items}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: 3D orbit — desktop only */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex relative items-center justify-center"
            style={{ height: 460 }}
          >
            {/* Central glow */}
            <div className="absolute w-20 h-20 rounded-full bg-accent-blue/20 blur-2xl z-10" />
            <div className="absolute w-8 h-8 rounded-full bg-white/10 border border-white/20 z-20 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-accent-blue" />
            </div>

            {/* 2D orbiting rings */}
            <div style={{ position: 'relative', width: 420, height: 420 }}>
              <OrbitRing items={ring1} radius={130} duration={18} color="#3b82f6" />
              <OrbitRing items={ring2} radius={200} duration={26} reverse color="#8b5cf6" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
