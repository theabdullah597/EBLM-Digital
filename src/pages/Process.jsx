import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Search, Wrench, TrendingUp, Rocket, ArrowRight } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import './Process.css'

const steps = [
  {
    num: '01',
    Icon: Search,
    title: 'Discovery & Audit',
    summary: 'We start by understanding your business, goals and current marketing performance in detail.',
    desc: 'Before we spend a single pound of your budget, we conduct a thorough review of your existing campaigns, tracking setup, website, competitors and customer journey. This audit identifies exactly where revenue is being left on the table and informs every strategic decision going forward.',
    list: ['Current campaign performance analysis', 'Conversion tracking & attribution audit', 'Competitor landscape research', 'Customer journey mapping', 'Website conversion rate review', 'Budget efficiency assessment'],
    duration: '1–2 weeks',
    deliverable: 'Comprehensive Audit Report',
  },
  {
    num: '02',
    Icon: Wrench,
    title: 'Strategy & Build',
    summary: 'A bespoke campaign architecture designed around your specific business goals and margins.',
    desc: 'We design a tailored campaign structure, create compelling landing pages, configure conversion tracking and build audience strategies that give your campaigns the strongest possible foundation. Every element is built to align with your commercial objectives and target cost per acquisition.',
    list: ['Campaign architecture design', 'Keyword research & selection', 'Ad copy creation & testing', 'Landing page design guidance', 'Conversion tracking setup', 'Audience segmentation strategy'],
    duration: '2–3 weeks',
    deliverable: 'Live Campaign Setup',
  },
  {
    num: '03',
    Icon: TrendingUp,
    title: 'Optimise',
    summary: 'Continuous refinement to ensure every pound is generating the maximum possible return.',
    desc: 'Continuous monitoring of search terms, creative performance, cost per lead, budget allocation and conversion quality ensures every pound works as hard as possible. We run weekly performance reviews and make data-driven adjustments to bids, budgets and creative based on what the data shows.',
    list: ['Weekly performance reviews', 'Bid & budget optimisation', 'Ad copy & creative testing', 'Quality score improvements', 'Search term analysis', 'Audience refinement'],
    duration: 'Ongoing monthly',
    deliverable: 'Monthly Performance Report',
  },
  {
    num: '04',
    Icon: Rocket,
    title: 'Scale',
    summary: 'Proven performance leads to controlled, profitable growth across channels.',
    desc: 'Once performance is proven and cost per acquisition targets are consistently met, we strategically scale your investment in high-performing areas and expand into additional channels and markets to compound your growth. Scaling is always controlled, data-driven and tied to your business capacity.',
    list: ['Proven channel expansion', 'Budget scaling strategy', 'New audience development', 'Cross-channel attribution', 'International market opportunities', 'Long-term growth planning'],
    duration: 'Month 3 onwards',
    deliverable: 'Growth Strategy Roadmap',
  },
]

const faqs = [
  { q: 'How long before I see results?',        a: 'Most clients see measurable improvements within the first 30–60 days. Search campaigns can generate leads within weeks, while SEO typically takes 3–6 months to build significant organic momentum.' },
  { q: 'Do you require long-term contracts?',   a: 'No. We work on rolling monthly agreements with no minimum contract period. We believe our results should be the reason you stay, not a contract.' },
  { q: 'How much do your services cost?',       a: "Pricing is tailored to your business size, goals and the scope of services required. We'll provide a transparent proposal during your free strategy call." },
  { q: 'Can you work with our existing campaigns?', a: 'Absolutely. We frequently take over campaigns from other agencies or in-house teams. Our audit process will identify what\'s working and what needs to change.' },
  { q: 'How do you report on performance?',     a: 'You receive detailed monthly reports covering all key metrics, plus access to a live dashboard. We schedule regular calls to walk you through the numbers in plain English.' },
  { q: 'Do you work with businesses outside London?', a: "Yes. While we're London-based, we work with ambitious businesses all across the UK — from Edinburgh and Manchester to Bristol and Birmingham." },
]

export default function Process() {
  useEffect(() => {
    document.title = 'Our Process | BLM Digital Limited'
    window.scrollTo(0, 0)
  }, [])

  return (
    <main>
      <section className="page-hero">
        <div className="page-hero-glow" />
        <ScrollReveal>
          <p className="eyebrow">How We Work</p>
          <h1>A Clear System From<br /><span className="text-green">Audit to Scale.</span></h1>
          <p>We follow a proven four-step framework that removes guesswork, sets clear expectations and puts your budget to work from day one.</p>
        </ScrollReveal>
      </section>

      {/* Timeline */}
      <section className="process-page section-pad light-panel">
        <div className="container">
          <div className="process-steps-list">
            {steps.map((s, i) => {
              const { Icon } = s
              return (
                <ScrollReveal key={s.num} className={`process-step-row${i % 2 !== 0 ? ' reverse' : ''}`}>
                  <div className="process-step-visual">
                    <div className="step-circle">
                      <div className="step-circle-inner">
                        <Icon size={36} color="white" />
                      </div>
                    </div>
                    <div className="step-meta">
                      <div className="meta-item">
                        <span className="meta-label">Timeline</span>
                        <strong>{s.duration}</strong>
                      </div>
                      <div className="meta-item">
                        <span className="meta-label">Deliverable</span>
                        <strong>{s.deliverable}</strong>
                      </div>
                    </div>
                  </div>
                  <div className="process-step-content">
                    <span className="big-num">{s.num}</span>
                    <h2>{s.title}</h2>
                    <p className="step-summary">{s.summary}</p>
                    <p>{s.desc}</p>
                    <ul className="step-checklist">
                      {s.list.map(l => <li key={l}>{l}</li>)}
                    </ul>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQs — equal-height cards */}
      <section className="process-faq section-pad">
        <div className="container">
          <ScrollReveal className="section-heading">
            <p className="eyebrow">Common Questions</p>
            <h2>What to expect when working with us.</h2>
          </ScrollReveal>
          <div className="faq-grid">
            {faqs.map(f => (
              <ScrollReveal key={f.q}>
                <div className="faq-card">
                  <h3>{f.q}</h3>
                  <p>{f.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="page-cta section-pad">
        <div className="page-cta-glow" />
        <div className="container">
          <ScrollReveal className="page-cta-inner">
            <h2>Let's start your audit today.</h2>
            <p>Book a free strategy call and we'll walk you through exactly how our process applies to your business.</p>
            <Link className="btn primary large" to="/contact">
              Book a Free Strategy Call <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
