import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BarChart2, PieChart, Database, Activity } from 'lucide-react'
import ScrollReveal from '../../components/ScrollReveal'

export default function Analytics() {
  useEffect(() => {
    document.title = 'Analytics & Tracking | BLM Digital Limited'
    window.scrollTo(0, 0)
  }, [])

  return (
    <main>
      <section className="page-hero">
        <div className="page-hero-glow" />
        <ScrollReveal>
          <div className="badge-pill">
            <span className="badge-dot" />
            Data & Measurement Experts
          </div>
          <h1>Know Exactly Where Your<br /><span className="text-green">Revenue Comes From.</span></h1>
          <p>
            We implement robust tracking infrastructure and custom analytics dashboards 
            so you can make confident, data-driven decisions about your marketing budget.
          </p>
        </ScrollReveal>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="service-detail-grid">
            <ScrollReveal className="service-detail-content">
              <h2>Stop guessing what's working.</h2>
              <p className="lead">
                If your tracking is broken, you're flying blind. We ensure that every click, lead, phone call, 
                and purchase is accurately tracked and attributed to the correct marketing channel.
              </p>
              <ul className="service-list" style={{ marginTop: '30px' }}>
                <li><strong>GA4 Migration & Setup:</strong> Ensuring Google Analytics 4 is configured perfectly.</li>
                <li><strong>Google Tag Manager:</strong> Clean, scalable tag deployments without needing developers.</li>
                <li><strong>Server-Side Tracking:</strong> Future-proofing your data against ad blockers and iOS updates.</li>
                <li><strong>Custom Dashboards:</strong> Building live Looker Studio reports for your executive team.</li>
              </ul>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <div style={{ borderRadius:'24px', overflow:'hidden', border:'1px solid var(--line)', boxShadow:'var(--shadow-green)' }}>
                <img src="/service_analytics.png" alt="Analytics Dashboard" style={{ width:'100%', height:'auto', display:'block' }} />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section-pad light-panel">
        <div className="container">
          <ScrollReveal className="section-heading">
            <p className="eyebrow">Our Data Process</p>
            <h2>How we build reliable tracking.</h2>
            <p>We don't just paste code into your header. We build comprehensive measurement architectures.</p>
          </ScrollReveal>
          
          <div className="service-features-grid">
            <ScrollReveal delay={0}>
              <div className="service-card">
                <div className="service-icon-wrap"><Database size={24} className="service-icon" /></div>
                <h3>Tracking Audit</h3>
                <p>We audit your existing analytics setup to find double-counting errors, broken goals, and misattributed traffic sources.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <div className="service-card">
                <div className="service-icon-wrap"><Activity size={24} className="service-icon" /></div>
                <h3>Advanced Implementation</h3>
                <p>We deploy cross-domain tracking, e-commerce tracking, and offline conversion tracking to give you a complete picture of your user journey.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <div className="service-card">
                <div className="service-icon-wrap"><PieChart size={24} className="service-icon" /></div>
                <h3>Visualisation & Reporting</h3>
                <p>We translate raw data into beautiful, actionable Looker Studio dashboards so you can see your true CPA and ROAS at a glance.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="page-cta section-pad">
        <div className="page-cta-glow" />
        <div className="container">
          <ScrollReveal className="page-cta-inner">
            <h2>Ready to fix your tracking?</h2>
            <p>Book a free consultation. We'll discuss your current data challenges and outline a plan to build a reliable measurement infrastructure.</p>
            <Link className="btn primary large" to="/contact">
              Let's Discuss Analytics <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
