import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import CursorGlow from './components/CursorGlow'
import Particles from './components/Particles'
import BackToTop from './components/BackToTop'
import Home from './pages/Home'
import Services from './pages/Services'
import Process from './pages/Process'
import Results from './pages/Results'
import CaseStudies from './pages/CaseStudies'
import About from './pages/About'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsAndConditions from './pages/TermsAndConditions'
import GoogleAds from './pages/services/GoogleAds'
import MetaAds from './pages/services/MetaAds'
import SEO from './pages/services/SEO'
import ConversionOptimisation from './pages/services/ConversionOptimisation'
import Analytics from './pages/services/Analytics'
import LeadGeneration from './pages/services/LeadGeneration'
import './index.css'

export default function App() {
  return (
    <BrowserRouter>
      <CursorGlow />
      <Particles />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/process" element={<Process />} />
        <Route path="/results" element={<Results />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/services/google-ads" element={<GoogleAds />} />
        <Route path="/services/meta-ads" element={<MetaAds />} />
        <Route path="/services/seo" element={<SEO />} />
        <Route path="/services/conversion-optimisation" element={<ConversionOptimisation />} />
        <Route path="/services/analytics" element={<Analytics />} />
        <Route path="/services/lead-generation" element={<LeadGeneration />} />
      </Routes>
      <Footer />
      <BackToTop />
    </BrowserRouter>
  )
}
