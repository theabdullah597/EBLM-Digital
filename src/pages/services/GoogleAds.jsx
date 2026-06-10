import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Search, Target, CheckCircle, BarChart2 } from 'lucide-react'
import ScrollReveal from '../../components/ScrollReveal'

export default function GoogleAds() {
  useEffect(() => {
    document.title = 'Google Ads Services | BLM Digital Limited'
    window.scrollTo(0, 0)
  }, [])

  return (
    <main>
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-glow" />
        <ScrollReveal>
          <div className="badge-pill">
            <span className="badge-dot" />
            Google Partner Agency
          </div>
          <h1>Capture High-Intent<br /><span className="text-green">Search Traffic.</span></h1>
          <p>
            We build and manage data-driven Google Ads and Performance Max campaigns that connect your 
            business with customers at the exact moment they're ready to buy.
          </p>
        </ScrollReveal>
      </section>

      {/* Visual & Intro */}
      <section className="section-pad">
        <div className="container">
          <div className="service-detail-grid">
            <ScrollReveal className="service-detail-content">
              <h2>Stop wasting budget on broad match guesswork.</h2>
              <p className="lead">
                Google Ads is the most powerful intent-based marketing platform in the world, but without strict
                management, it can quickly drain your budget. We focus exclusively on conversion-led strategies.
              </p>
              <ul className="service-list" style={{ marginTop: '30px' }}>
                <li><strong>Search Campaigns:</strong> Targeting precise, high-intent queries.</li>
                <li><strong>Performance Max:</strong> Leveraging AI across Google's entire network.</li>
                <li><strong>Retargeting:</strong> Bringing back visitors who didn't convert the first time.</li>
                <li><strong>Shopping Ads:</strong> Driving product sales with high-visibility placements.</li>
              </ul>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <div style={{ borderRadius:'24px', overflow:'hidden', border:'1px solid var(--line)', boxShadow:'var(--shadow-green)' }}>
                <img src="/service_google_ads.png" alt="Google Ads Dashboard" style={{ width:'100%', height:'auto', display:'block' }} />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-pad light-panel">
        <div className="container">
          <ScrollReveal className="section-heading">
            <p className="eyebrow">Our Approach</p>
            <h2>How we drive better ROI.</h2>
            <p>We don't just set and forget. Our team constantly monitors, tests, and refines your campaigns to lower your cost-per-acquisition.</p>
          </ScrollReveal>
          
          <div className="service-features-grid">
            <ScrollReveal delay={0}>
              <div className="service-card">
                <div className="service-icon-wrap"><Search size={24} className="service-icon" /></div>
                <h3>Granular Account Structure</h3>
                <p>We build hyper-segmented campaigns to ensure your ad copy perfectly matches the user's search intent, increasing Quality Score and lowering CPC.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <div className="service-card">
                <div className="service-icon-wrap"><Target size={24} className="service-icon" /></div>
                <h3>Negative Keyword Mining</h3>
                <p>We rigorously review search term reports to identify and exclude irrelevant terms, ensuring your budget is only spent on qualified traffic.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <div className="service-card">
                <div className="service-icon-wrap"><BarChart2 size={24} className="service-icon" /></div>
                <h3>Advanced Bidding Strategies</h3>
                <p>We leverage Google's machine learning and value-based bidding to maximise your ROAS, focusing on lead quality rather than just volume.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="page-cta section-pad">
        <div className="page-cta-glow" />
        <div className="container">
          <ScrollReveal className="page-cta-inner">
            <h2>Ready to dominate search?</h2>
            <p>Book a free 30-minute strategy call. We'll audit your current Google Ads account and show you exactly where you're leaving money on the table.</p>
            <Link className="btn primary large" to="/contact">
              Book a Free Audit <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
