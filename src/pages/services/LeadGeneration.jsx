import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Users, Funnel, Magnet, MailCheck } from 'lucide-react'
import ScrollReveal from '../../components/ScrollReveal'

export default function LeadGeneration() {
  useEffect(() => {
    document.title = 'Lead Generation Services | BLM Digital Limited'
    window.scrollTo(0, 0)
  }, [])

  return (
    <main>
      <section className="page-hero">
        <div className="page-hero-glow" />
        <ScrollReveal>
          <div className="badge-pill">
            <span className="badge-dot" />
            B2B & High-Ticket B2C
          </div>
          <h1>Build a Scalable<br /><span className="text-green">Sales Pipeline.</span></h1>
          <p>
            We design end-to-end lead generation systems that consistently deliver qualified, 
            high-intent prospects directly to your sales team.
          </p>
        </ScrollReveal>
      </section>

      <section className="section-pad">
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'60px', alignItems:'center' }} className="responsive-grid">
            <ScrollReveal delay={1}>
              <div style={{ borderRadius:'24px', overflow:'hidden', border:'1px solid var(--line)', boxShadow:'var(--shadow-green)' }}>
                <img src="/service_lead_gen.png" alt="Lead Generation Funnel" style={{ width:'100%', height:'auto', display:'block' }} />
              </div>
            </ScrollReveal>
            <ScrollReveal className="service-detail-content">
              <h2>Quality leads over empty volume.</h2>
              <p className="lead">
                A lead is useless if it doesn't convert into a sale. We focus on lead quality and intent, 
                building robust funnels that filter out time-wasters and nurture prospects until they're ready to buy.
              </p>
              <ul className="service-list" style={{ marginTop: '30px' }}>
                <li><strong>Multi-Channel Campaigns:</strong> Integrating Google, LinkedIn, and Meta Ads.</li>
                <li><strong>Lead Magnet Strategy:</strong> Creating valuable assets (whitepapers, webinars) to capture data.</li>
                <li><strong>CRM Integration:</strong> Flowing leads seamlessly into HubSpot, Salesforce, or Pipedrive.</li>
                <li><strong>Marketing Automation:</strong> Setting up email nurture sequences to warm up cold leads.</li>
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section-pad light-panel">
        <div className="container">
          <ScrollReveal className="section-heading">
            <p className="eyebrow">Our Lead Gen Engine</p>
            <h2>How we fill your calendar.</h2>
            <p>We build automated systems that align marketing and sales for maximum revenue impact.</p>
          </ScrollReveal>
          
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))', gap:'30px' }}>
            <ScrollReveal delay={0}>
              <div className="service-card">
                <div className="service-icon-wrap"><Magnet size={24} className="service-icon" /></div>
                <h3>Targeted Acquisition</h3>
                <p>We use precise targeting across search and social platforms to capture demand from users actively looking for your solutions.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <div className="service-card">
                <div className="service-icon-wrap"><Funnel size={24} className="service-icon" /></div>
                <h3>Frictionless Capture</h3>
                <p>We build high-converting landing pages and native lead forms designed specifically to maximise your conversion rate and lower your cost per lead.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <div className="service-card">
                <div className="service-icon-wrap"><MailCheck size={24} className="service-icon" /></div>
                <h3>Automated Nurturing</h3>
                <p>We implement automated email and SMS sequences to educate prospects, build trust, and drive them to book a call or request a quote.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="page-cta section-pad">
        <div className="page-cta-glow" />
        <div className="container">
          <ScrollReveal className="page-cta-inner">
            <h2>Ready to scale your pipeline?</h2>
            <p>Book a free strategy call to discover how we can build a predictable, scalable lead generation engine for your business.</p>
            <Link className="btn primary large" to="/contact">
              Start Generating Leads <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
