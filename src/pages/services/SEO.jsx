import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, Search, PenTool, Settings } from 'lucide-react'
import ScrollReveal from '../../components/ScrollReveal'

export default function SEO() {
  useEffect(() => {
    document.title = 'SEO Services | BLM Digital Limited'
    window.scrollTo(0, 0)
  }, [])

  return (
    <main>
      <section className="page-hero">
        <div className="page-hero-glow" />
        <ScrollReveal>
          <div className="badge-pill">
            <span className="badge-dot" />
            Organic Growth Specialists
          </div>
          <h1>Sustainable Organic<br /><span className="text-green">Search Visibility.</span></h1>
          <p>
            We build long-term, revenue-focused SEO strategies that reduce your dependency on paid traffic 
            and establish your brand as the leading authority in your industry.
          </p>
        </ScrollReveal>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="service-detail-grid">
            <ScrollReveal className="service-detail-content">
              <h2>Rankings that actually drive revenue.</h2>
              <p className="lead">
                We don't chase vanity metrics. Our SEO campaigns are designed with one goal: to put your website 
                in front of users who are actively searching for your exact products or services.
              </p>
              <ul className="service-list" style={{ marginTop: '30px' }}>
                <li><strong>Technical SEO:</strong> Ensuring your site is perfectly readable by search engines.</li>
                <li><strong>Content Strategy:</strong> Creating valuable, intent-driven content that ranks.</li>
                <li><strong>Local SEO:</strong> Dominating the map pack for UK-based service businesses.</li>
                <li><strong>Digital PR & Outreach:</strong> Building authoritative backlinks to boost domain power.</li>
              </ul>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <div style={{ borderRadius:'24px', overflow:'hidden', border:'1px solid var(--line)', boxShadow:'var(--shadow-green)' }}>
                <img src="/service_seo.png" alt="SEO Rankings Graph" style={{ width:'100%', height:'auto', display:'block' }} />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section-pad light-panel">
        <div className="container">
          <ScrollReveal className="section-heading">
            <p className="eyebrow">Our SEO Process</p>
            <h2>A comprehensive approach to search.</h2>
            <p>We treat your website as an organic growth engine, combining technical excellence with outstanding content.</p>
          </ScrollReveal>
          
          <div className="service-features-grid">
            <ScrollReveal delay={0}>
              <div className="service-card">
                <div className="service-icon-wrap"><Settings size={24} className="service-icon" /></div>
                <h3>Technical Foundation</h3>
                <p>We fix site speed, mobile usability, crawl errors, and architecture issues so Google can easily index and understand your site.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <div className="service-card">
                <div className="service-icon-wrap"><Search size={24} className="service-icon" /></div>
                <h3>Commercial Keyword Research</h3>
                <p>We map out the exact phrases your most profitable customers use, targeting bottom-of-funnel keywords with high conversion intent.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <div className="service-card">
                <div className="service-icon-wrap"><PenTool size={24} className="service-icon" /></div>
                <h3>Content & Authority</h3>
                <p>We produce best-in-class content to answer user queries and execute safe, high-quality backlink campaigns to increase your site's authority.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="page-cta section-pad">
        <div className="page-cta-glow" />
        <div className="container">
          <ScrollReveal className="page-cta-inner">
            <h2>Ready to dominate organic search?</h2>
            <p>Book a free consultation. We'll run an initial technical audit on your site and identify your biggest opportunities for organic growth.</p>
            <Link className="btn primary large" to="/contact">
              Get Your Free SEO Audit <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
