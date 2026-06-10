import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Megaphone, Users, LayoutTemplate, Activity } from 'lucide-react'
import ScrollReveal from '../../components/ScrollReveal'

export default function MetaAds() {
  useEffect(() => {
    document.title = 'Meta Ads Services | BLM Digital Limited'
    window.scrollTo(0, 0)
  }, [])

  return (
    <main>
      <section className="page-hero">
        <div className="page-hero-glow" />
        <ScrollReveal>
          <div className="badge-pill">
            <span className="badge-dot" />
            Meta Business Partner
          </div>
          <h1>Scroll-Stopping<br /><span className="text-green">Social Advertising.</span></h1>
          <p>
            We design, launch, and scale high-converting Facebook and Instagram ad campaigns 
            that capture attention, build desire, and generate qualified leads.
          </p>
        </ScrollReveal>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="service-detail-grid">
            <ScrollReveal delay={1}>
              <div style={{ borderRadius:'24px', overflow:'hidden', border:'1px solid var(--line)', boxShadow:'var(--shadow-green)' }}>
                <img src="/service_meta_ads.png" alt="Meta Ads Dashboard" style={{ width:'100%', height:'auto', display:'block' }} />
              </div>
            </ScrollReveal>
            <ScrollReveal className="service-detail-content">
              <h2>Turn social scrolling into tangible revenue.</h2>
              <p className="lead">
                Meta Ads offer the most sophisticated audience targeting available. Whether you want to generate B2B leads
                or drive D2C e-commerce sales, we craft campaigns that reach the right people with the right message.
              </p>
              <ul className="service-list" style={{ marginTop: '30px' }}>
                <li><strong>Lead Generation:</strong> High-converting in-platform native lead forms.</li>
                <li><strong>Dynamic Product Ads:</strong> Showing users exactly what they left in their cart.</li>
                <li><strong>Video Campaigns:</strong> Engaging short-form video creative that converts.</li>
                <li><strong>Lookalike Audiences:</strong> Finding new customers who match your best clients.</li>
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section-pad light-panel">
        <div className="container">
          <ScrollReveal className="section-heading">
            <p className="eyebrow">Our Methodology</p>
            <h2>How we win on Meta.</h2>
            <p>Success on Facebook and Instagram requires the perfect balance of striking creative and technical media buying.</p>
          </ScrollReveal>
          
          <div className="service-features-grid">
            <ScrollReveal delay={0}>
              <div className="service-card">
                <div className="service-icon-wrap"><LayoutTemplate size={24} className="service-icon" /></div>
                <h3>Creative Testing Framework</h3>
                <p>We continuously test angles, hooks, and formats (images, videos, carousels) to identify winning creatives before scaling your budget.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <div className="service-card">
                <div className="service-icon-wrap"><Users size={24} className="service-icon" /></div>
                <h3>Advanced Audience Architecture</h3>
                <p>We structure your campaigns to hit cold audiences for awareness, while heavily retargeting warm audiences to drive final conversions.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <div className="service-card">
                <div className="service-icon-wrap"><Activity size={24} className="service-icon" /></div>
                <h3>Conversion API Integration</h3>
                <p>We implement Meta's Conversions API (CAPI) to ensure accurate tracking and attribution in a post-iOS14 privacy-first world.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="page-cta section-pad">
        <div className="page-cta-glow" />
        <div className="container">
          <ScrollReveal className="page-cta-inner">
            <h2>Ready to scale your social revenue?</h2>
            <p>Book a free 30-minute strategy call to discover how we can transform your Facebook and Instagram advertising.</p>
            <Link className="btn primary large" to="/contact">
              Let's Discuss Meta Ads <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
