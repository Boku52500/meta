import Cursor from './components/Cursor'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Services from './components/Services'
import TechStack from './components/TechStack'
import Portfolio from './components/Portfolio'
import Process from './components/Process'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'
import { Routes, Route, Navigate } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import ServicesPage from './pages/ServicesPage'
import ServiceDetailPage from './pages/ServiceDetailPage'
import PortfolioPage from './pages/PortfolioPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import SEO from './components/SEO'

const homeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://metaweb.ge/#webpage',
  'url': 'https://metaweb.ge/',
  'name': 'Metaweb — ვებ-დეველოპმენტი, SEO და ბრენდინგი საქართველოში',
  'description': 'Metaweb — საქართველოს წამყვანი ციფრული სააგენტო. ვქმნით პრემიუმ საიტებს, ვახორციელებთ SEO ოპტიმიზაციას და ბრენდინგს.',
  'inLanguage': 'ka',
  'isPartOf': { '@id': 'https://metaweb.ge/#website' },
  'about': { '@id': 'https://metaweb.ge/#organization' },
  'breadcrumb': {
    '@type': 'BreadcrumbList',
    'itemListElement': [{ '@type': 'ListItem', 'position': 1, 'name': 'მთავარი', 'item': 'https://metaweb.ge/' }]
  }
}

function Home() {
  return (
    <>
      <SEO
        title="Metaweb — საიტის დამზადება, SEO და ბრენდინგი"
        description="Metaweb — წამყვანი ციფრული სააგენტო. ვქმნით პრემიუმ საიტებს, ვახორციელებთ SEO ოპტიმიზაციას და ბრენდინგს. +995 577 90 80 80"
        canonical="/"
        jsonLd={homeJsonLd}
      />
      <Hero />
      <Services />
      <TechStack />
      <Portfolio />
      <Process />
      <Stats />
      <Testimonials />
      <CTA />
    </>
  )
}

function App() {
  return (
    <div className="bg-bg-primary text-white min-h-screen" style={{ overflowX:'clip' }}>
      <Cursor />
      <Navigation />
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/projects" element={<PortfolioPage />} />
          <Route path="/portfolio" element={<Navigate to="/projects" replace />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
