import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useNavigate, useLocation } from 'react-router-dom'

const links = [
  { label: 'სერვისები', href: '/services' },
  { label: 'პროექტები', href: '/projects' },
  { label: 'ჩვენ შესახებ', href: '/about' },
  { label: 'კონტაქტი', href: '/contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      navigate('/')
    }
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    if (href.startsWith('/')) {
      navigate(href)
      return
    }
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/')
      setTimeout(() => {
        const el2 = document.querySelector(href)
        if (el2) el2.scrollIntoView({ behavior: 'smooth' })
      }, 50)
    }
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass border-b border-white/5 py-3' : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button onClick={handleLogoClick} className="flex items-center group" data-hover>
            <img src="/images/logo.png" alt="Metaweb" className="h-14 w-auto object-contain" fetchPriority="high" loading="eager" />
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="animated-underline text-sm text-white/60 hover:text-white transition-colors duration-300 font-medium"
                data-hover
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate('/contact')}
              data-hover
              className="relative px-5 py-2.5 text-sm font-semibold rounded-xl overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-accent-blue to-accent-purple rounded-xl" />
              <span className="absolute inset-0 bg-gradient-to-r from-accent-purple to-accent-cyan rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 text-white">დაწყება →</span>
            </motion.button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white/70 hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            data-hover
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[64px] left-0 right-0 z-40 glass-strong border-b border-white/5 p-6"
          >
            <nav className="flex flex-col gap-4">
              {links.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-lg text-white/70 hover:text-white transition-colors py-2 border-b border-white/5"
                  data-hover
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => { setMobileOpen(false); navigate('/contact') }}
                data-hover
                className="mt-2 px-5 py-3 bg-gradient-to-r from-accent-blue to-accent-purple rounded-xl text-white font-semibold text-center"
              >
                დაწყება →
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
