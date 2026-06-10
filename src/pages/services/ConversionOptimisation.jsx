import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Zap, SplitSquareHorizontal, MousePointerClick, TrendingUp } from 'lucide-react'
import ScrollReveal from '../../components/ScrollReveal'

export default function ConversionOptimisation() {
  useEffect(() => {
    document.title = 'Conversion Rate Optimisation | BLM Digital Limited'
    window.scrollTo(0, 0)
  }, [])

  return (
    <main>
      <section className="page-hero">
        <div className="page-hero-glow" />
        <ScrollReveal>
          <div className="badge-pill">
            <span className="badge-dot" />
            CRO Specialists
          </div>
          <h1>Turn More Clicks Into<br /><span className="text-green">Paying Customers.</span></h1>
          <p>
            We eliminate friction in your customer journey and build high-converting landing pages 
            to squeeze more revenue out of the traffic you already have.
          </p>
        </ScrollReveal>
      </section>

      <section className="section-pad">
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'60px', alignItems:'center' }} className="responsive-grid">
            <ScrollReveal delay={1}>
              <div style={{ borderRadius:'24px', overflow:'hidden', border:'1px solid var(--line)', boxShadow:'var(--shadow-green)' }}>
                <img src="/service_cro.png" alt="CRO Heatmap" style={{ width:'100%', height:'auto', display:'block' }} />
              </div>
            </ScrollReveal>
            <ScrollReveal className="service-detail-content">
              <h2>Stop wasting money on a leaky funnel.</h2>
              <p className="lead">
                Driving traffic is only half the battle. If your website doesn't effectively convert that traffic, 
                your ad spend is going to waste. We use data, psychology, and continuous testing to improve your conversion rate.
              </p>
              <ul className="service-list" style={{ marginTop: '30px' }}>
                <li><strong>Landing Page Design:</strong> Building high-converting pages for paid campaigns.</li>
                <li><strong>A/B Testing:</strong> Scientifically testing headlines, copy, and layouts.</li>
                <li><strong>User Behavior Analysis:</strong> Using heatmaps and session recordings to find friction.</li>
                <li><strong>Checkout Optimisation:</strong> Reducing cart abandonment for e-commerce brands.</li>
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section-pad light-panel">
        <div className="container">
          <ScrollReveal className="section-heading">
            <p className="eyebrow">Our CRO Framework</p>
            <h2>How we increase your conversion rate.</h2>
            <p>We rely on hard data and proven psychological principles, not guesswork, to redesign your user experience.</p>
          </ScrollReveal>
          
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))', gap:'30px' }}>
            <ScrollReveal delay={0}>
              <div className="service-card">
                <div className="service-icon-wrap"><MousePointerClick size={24} className="service-icon" /></div>
                <h3>Qualitative Research</h3>
                <p>We analyse user session recordings and heatmaps to see exactly where users are getting confused, frustrated, or dropping off your site.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <div className="service-card">
                <div className="service-icon-wrap"><Zap size={24} className="service-icon" /></div>
                <h3>Frictionless UX/UI Design</h3>
                <p>We redesign core pages and landing pages to clarify your value proposition, improve trust signals, and streamline the path to purchase.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <div className="service-card">
                <div className="service-icon-wrap"><SplitSquareHorizontal size={24} className="service-icon" /></div>
                <h3>Continuous A/B Testing</h3>
                <p>We run structured split tests on your traffic, pitting the original design against our variations to statistically prove what generates more revenue.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="page-cta section-pad">
        <div className="page-cta-glow" />
        <div className="container">
          <ScrollReveal className="page-cta-inner">
            <h2>Ready to boost your conversion rate?</h2>
            <p>Book a free strategy call. We'll review your current website and identify the fastest wins to improve your conversion rate today.</p>
            <Link className="btn primary large" to="/contact">
              Get Your Free CRO Audit <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
