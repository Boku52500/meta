import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Users, Star } from 'lucide-react'

// ── Holographic Grid Warp ──────────────────────────────────────────────
function GridWarp() {
  const cvs   = useRef<HTMLCanvasElement>(null)
  const mouse = useRef({ x: -9999, y: -9999 })
  const raf   = useRef(0)

  useEffect(() => {
    const canvas = cvs.current!
    const ctx    = canvas.getContext('2d')!
    let W = 0, H = 0

    const NR = 26        // horizontal lines
    const NC = 32        // vertical lines
    const SX = 60        // x-samples per horizontal line
    const NEAR = 0.6, FAR = 16, XH = 9

    const resize = () => {
      W = canvas.offsetWidth; H = canvas.offsetHeight
      canvas.width = W; canvas.height = H
    }
    resize()
    window.addEventListener('resize', resize)

    const onMove = (e: MouseEvent) => {
      const rc = canvas.getBoundingClientRect()
      mouse.current = { x: e.clientX - rc.left, y: e.clientY - rc.top }
    }
    window.addEventListener('mousemove', onMove)

    let last = 0
    const draw = (ts: number) => {
      if (ts - last < 33) { raf.current = requestAnimationFrame(draw); return }
      last = ts
      const t  = ts / 1000
      const mx = mouse.current.x, my = mouse.current.y
      const hasMouse = mx > -100

      ctx.fillStyle = '#02030a'
      ctx.fillRect(0, 0, W, H)

      const horizY = H * 0.40
      const focal  = W * 0.52

      // Depth for each row: r=0 far(horizon), r=NR-1 near(bottom)
      const depth = (r: number) => FAR * Math.pow(NEAR / FAR, r / (NR - 1))
      // Base screen-Y for row r
      const baseY = (r: number) => horizY + focal / depth(r)
      // Perspective scale (larger = closer)
      const pscale = (r: number) => focal / depth(r)

      // Multi-octave wave displacement (screen-space Y)
      const wave = (sx: number, d: number) => {
        const nx = sx / W
        return (Math.sin(nx * 5.5 + t * 0.65) * 0.07
              + Math.sin(nx * 10  - t * 0.50) * 0.035
              + Math.cos(nx * 3.5 + t * 0.38) * 0.05) * (focal / d) * 0.55
      }

      // Cursor gravity well: pulls grid lines toward cursor
      const gravity = (sx: number, sy: number) => {
        if (!hasMouse) return { dx: 0, dy: 0 }
        const dx = sx - mx, dy = sy - my
        const d2 = dx * dx + dy * dy
        const R  = 210
        if (d2 > R * R) return { dx: 0, dy: 0 }
        const d = Math.sqrt(d2)
        const f = (1 - d / R) * (1 - d / R) * 55
        return { dx: -(dx / d) * f, dy: -(dy / d) * f }
      }

      // ── Horizontal lines ──
      for (let r = 0; r < NR; r++) {
        const d  = depth(r)
        const by = baseY(r)
        if (by > H + 30 || by < horizY - 5) continue
        const ps   = pscale(r)
        const frac = r / (NR - 1)           // 0=far, 1=near
        const hue  = 210 - frac * 30        // 210(blue-far) → 180(cyan-near)
        const alph = 0.15 + frac * 0.55

        ctx.beginPath()
        for (let s = 0; s <= SX; s++) {
          const fx  = s / SX
          const wx  = -XH + 2 * XH * fx
          const sx  = W / 2 + wx * ps
          const wy  = wave(sx, d)
          const { dx, dy } = gravity(sx, by + wy)
          const px  = sx + dx, py = by + wy + dy
          s === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py)
        }
        ctx.strokeStyle = `hsla(${hue},100%,65%,${alph})`
        ctx.lineWidth   = 0.5 + frac * 1.0
        ctx.stroke()
      }

      // ── Vertical lines ──
      for (let c = 0; c < NC; c++) {
        const wx   = -XH + 2 * XH * (c / (NC - 1))
        const isCenter = c === Math.floor(NC / 2)
        ctx.beginPath()
        for (let r = 0; r < NR; r++) {
          const d  = depth(r)
          const by = baseY(r)
          if (by > H + 30) continue
          const ps = pscale(r)
          const sx = W / 2 + wx * ps
          const wy = wave(sx, d)
          const { dx, dy } = gravity(sx, by + wy)
          r === 0 ? ctx.moveTo(sx + dx, by + wy + dy)
                  : ctx.lineTo(sx + dx, by + wy + dy)
        }
        const alph = isCenter ? 0.45 : 0.18
        ctx.strokeStyle = `hsla(220,100%,65%,${alph})`
        ctx.lineWidth   = isCenter ? 0.9 : 0.5
        ctx.stroke()
      }

      // ── Horizon glow ──
      const hg = ctx.createLinearGradient(0, horizY - 12, 0, horizY + 50)
      hg.addColorStop(0,   'transparent')
      hg.addColorStop(0.3, 'rgba(80,160,255,0.18)')
      hg.addColorStop(0.55,'rgba(140,80,255,0.12)')
      hg.addColorStop(1,   'transparent')
      ctx.fillStyle = hg; ctx.fillRect(0, horizY - 12, W, 62)

      // ── Scan line sweeping up across grid ──
      const scanFrac = (t * 0.28) % 1
      const scanY = H - (H - horizY) * scanFrac
      if (scanFrac < 0.97) {
        const sg = ctx.createLinearGradient(0, scanY - 10, 0, scanY + 6)
        sg.addColorStop(0,   'transparent')
        sg.addColorStop(0.45,'rgba(120,210,255,0.14)')
        sg.addColorStop(1,   'transparent')
        ctx.fillStyle = sg; ctx.fillRect(0, scanY - 10, W, 16)
      }

      // ── Side vignette (edges fade) ──
      const lv = ctx.createLinearGradient(0, 0, W * 0.18, 0)
      lv.addColorStop(0, 'rgba(2,3,10,0.85)'); lv.addColorStop(1, 'transparent')
      ctx.fillStyle = lv; ctx.fillRect(0, 0, W * 0.18, H)
      const rv = ctx.createLinearGradient(W, 0, W * 0.82, 0)
      rv.addColorStop(0, 'rgba(2,3,10,0.85)'); rv.addColorStop(1, 'transparent')
      ctx.fillStyle = rv; ctx.fillRect(W * 0.82, 0, W * 0.18, H)

      // ── Sky fade above horizon ──
      const sky = ctx.createLinearGradient(0, 0, 0, horizY)
      sky.addColorStop(0, 'rgba(2,3,10,0.98)'); sky.addColorStop(1, 'transparent')
      ctx.fillStyle = sky; ctx.fillRect(0, 0, W, horizY)

      // ── Cursor gravity glow ──
      if (hasMouse) {
        const g = ctx.createRadialGradient(mx, my, 0, mx, my, 210)
        g.addColorStop(0,   'rgba(100,200,255,0.10)')
        g.addColorStop(0.5, 'rgba(80,130,255,0.04)')
        g.addColorStop(1,   'transparent')
        ctx.fillStyle = g; ctx.fillRect(0, 0, W, H)
      }

      raf.current = requestAnimationFrame(draw)
    }
    raf.current = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return <canvas ref={cvs} className="absolute inset-0 w-full h-full" style={{ willChange: 'contents' }} />
}

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } } }
const fadeUp  = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22,1,0.36,1] } } }

export default function Hero() {
  const navigate = useNavigate()
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#03040b]">
      {/* Holographic grid warp — full bleed background */}
      <GridWarp />

      {/* Vignette: fade edges so content reads clearly */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 80% at 50% 50%, transparent 20%, rgba(3,4,11,0.75) 100%)' }} />

      {/* Content — centered */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 pt-28 pb-16 md:py-32">
        <motion.div variants={stagger} initial="hidden" animate="show">



          {/* Headline */}
          <motion.h1 variants={fadeUp} className="font-display font-extrabold leading-[0.9] tracking-tight mb-7">
            <span className="block text-[clamp(3.2rem,8vw,7.5rem)] text-white">ჩვენ ვქმნით</span>
            <span className="block text-[clamp(3.2rem,8vw,7.5rem)] gradient-text">ციფრულ მომავალს.</span>
          </motion.h1>

          {/* Sub */}
          <motion.p variants={fadeUp} className="text-white/45 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
Metaweb ქმნის სწრაფ, ვიზუალურად შთამბეჭდავ და გაყიდვებზე ორიენტირებულ ციფრულ გამოცდილებებს — იდეიდან სრულმასშტაბიან გლობალურ გაშვებამდე.          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center mb-16">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(59,130,246,0.5)' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate('/contact')}
              data-hover
              className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent-blue to-accent-purple rounded-2xl font-bold text-white shadow-2xl shadow-accent-blue/25"
            >
              უფასო კონსულტაცია
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              onClick={() => navigate('/projects')}
              data-hover
              className="flex items-center gap-2 px-8 py-4 glass border border-white/10 hover:border-accent-blue/40 rounded-2xl font-semibold text-white/70 hover:text-white transition-all"
            >
              პროექტები
            </motion.button>
          </motion.div>

          {/* Stats row */}
          <motion.div variants={fadeUp} className="grid grid-cols-3 md:flex md:flex-wrap md:justify-center gap-3 md:gap-10 pt-8 border-t border-white/8">
            {[
              { v: '150+', l: 'დასრულებული პროექტი', icon: Star },
              { v: '98%',  l: 'კმაყოფილი მომხმარებლი', icon: Users },
              { v: '10+',  l: 'წლიანი გამოცდილება', icon: Sparkles },
            ].map(({ v, l, icon: Icon }) => (
              <div key={l} className="flex flex-col sm:flex-row items-center sm:items-start gap-1.5 sm:gap-3 text-center sm:text-left">
                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent-blue" />
                </div>
                <div>
                  <div className="font-display font-bold text-base sm:text-xl text-white leading-tight">{v}</div>
                  <div className="text-white/35 text-[10px] sm:text-xs leading-tight">{l}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }}
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5 text-white/20"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent animate-pulse" />
      </motion.div>
    </section>
  )
}
