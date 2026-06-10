import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { PoundSterling, TrendingUp, Target, Rocket, Handshake, Lightbulb, ArrowRight } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import './Results.css'

const stats = [
  { num: '£21.4M+', label: 'Tracked revenue influenced across client campaigns',   Icon: PoundSterling, w: '87%' },
  { num: '185%',    label: 'Average ROI improvement within the first 90 days',      Icon: TrendingUp,    w: '92%' },
  { num: '50,000+', label: 'Qualified leads generated for UK businesses',           Icon: Target,        w: '78%' },
  { num: '5.6x',    label: 'Average return on ad spend achieved for clients',       Icon: Rocket,        w: '95%' },
  { num: '97%',     label: 'Client retention rate over 12 months',                  Icon: Handshake,     w: '97%' },
  { num: '£18.70',  label: 'Average cost per lead across all client campaigns',     Icon: Lightbulb,     w: '73%' },
]

function StatBar({ targetWidth }) {
  const barRef = useRef(null)
  useEffect(() => {
    const el = barRef.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.style.width = targetWidth; io.unobserve(el) }
    }, { threshold: .5 })
    io.observe(el)
    return () => io.disconnect()
  }, [targetWidth])
  return <div className="stat-bar"><div ref={barRef} className="stat-fill" /></div>
}

export default function Results() {
  useEffect(() => {
    document.title = 'Results | BLM Digital Limited'
    window.scrollTo(0, 0)
  }, [])

  return (
    <main>
      <section className="page-hero">
        <div className="page-hero-glow" />
        <ScrollReveal>
          <p className="eyebrow">Proven Performance</p>
          <h1>Real Campaigns.<br /><span className="text-green">Real Growth.</span></h1>
          <p>We measure success in revenue, not vanity metrics. Here are the numbers that matter — all verified from live client accounts.</p>
        </ScrollReveal>
      </section>

      {/* Key Stats — equal-height cards */}
      <section className="results-page section-pad">
        <div className="container">
          <ScrollReveal className="section-heading">
            <p className="eyebrow">Key Metrics</p>
            <h2>Numbers that speak for themselves.</h2>
            <p>These aggregated figures reflect verified campaign performance across our active UK client portfolio.</p>
          </ScrollReveal>
          <div className="results-stats-grid">
            {stats.map((s, i) => {
              const { Icon } = s
              return (
                <ScrollReveal delay={i % 3} key={s.num}>
                  <div className="results-stat-card">
                    <div className="results-stat-icon">
                      <Icon size={22} />
                    </div>
                    <strong className="stat-num">{s.num}</strong>
                    <span>{s.label}</span>
                    <StatBar targetWidth={s.w} />
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benchmark Table */}
      <section className="results-table-section section-pad light-panel">
        <div className="container">
          <ScrollReveal className="section-heading">
            <p className="eyebrow">Performance Benchmarks</p>
            <h2>How we compare against industry averages.</h2>
          </ScrollReveal>
          <ScrollReveal>
            <div className="results-table-wrap">
              <table className="results-table">
                <thead>
                  <tr>
                    <th>Metric</th>
                    <th>Industry Average</th>
                    <th>BLM Digital Clients</th>
                    <th>Improvement</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { metric: 'Click-Through Rate (CTR)', industry: '2.1%',   blm: '4.8%',   delta: '+129%' },
                    { metric: 'Cost Per Click (CPC)',      industry: '£2.69',  blm: '£1.74',  delta: '-35%'  },
                    { metric: 'Conversion Rate',           industry: '3.2%',   blm: '7.6%',   delta: '+138%' },
                    { metric: 'Cost Per Lead',             industry: '£52.00', blm: '£18.70', delta: '-64%'  },
                    { metric: 'Return on Ad Spend',        industry: '2.87x',  blm: '5.62x',  delta: '+96%'  },
                    { metric: 'Quality Score (Google)',    industry: '5.4/10', blm: '8.1/10', delta: '+50%'  },
                  ].map(r => (
                    <tr key={r.metric}>
                      <td>{r.metric}</td>
                      <td className="industry-avg">{r.industry}</td>
                      <td className="blm-result">{r.blm}</td>
                      <td className="improvement">{r.delta}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="table-note">* Benchmarks sourced from Google Ads industry reports and WordStream UK data (2024). BLM Digital figures represent aggregated client averages.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Channel Performance */}
      <section className="channel-performance section-pad">
        <div className="container">
          <ScrollReveal className="section-heading">
            <p className="eyebrow">By Channel</p>
            <h2>Performance across every channel we manage.</h2>
          </ScrollReveal>
          <div className="channel-grid">
            {[
              { channel: 'Google Search',   metrics: [{ l:'Average CTR', v:'4.8%' }, { l:'Avg. CPC', v:'£1.74' }, { l:'Conversion Rate', v:'7.6%' }, { l:'ROAS', v:'5.2x' }] },
              { channel: 'Meta Ads',         metrics: [{ l:'Reach per £1k', v:'12,400' }, { l:'CPM', v:'£4.20' }, { l:'CPC', v:'£0.62' }, { l:'Lead Cost', v:'£14.90' }] },
              { channel: 'Google SEO',       metrics: [{ l:'Avg. Ranking Impr.', v:'+62%' }, { l:'Organic Traffic', v:'+180%' }, { l:'Leads via Organic', v:'+145%' }, { l:'Domain Authority', v:'+28' }] },
              { channel: 'Performance Max',  metrics: [{ l:'Conversion Rate', v:'6.1%' }, { l:'ROAS', v:'4.8x' }, { l:'CPA Improvement', v:'-41%' }, { l:'Impressions', v:'+220%' }] },
            ].map((c, i) => (
              <ScrollReveal delay={i % 2} key={c.channel}>
                <div className="channel-card">
                  <div className="channel-header">
                    <h3>{c.channel}</h3>
                  </div>
                  <div className="channel-metrics">
                    {c.metrics.map(m => (
                      <div key={m.l} className="channel-metric">
                        <span>{m.l}</span>
                        <strong>{m.v}</strong>
                      </div>
                    ))}
                  </div>
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
            <h2>Want results like these?</h2>
            <p>Book a free strategy call and find out what's possible for your business.</p>
            <Link className="btn primary large" to="/contact">
              Book a Free Strategy Call <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
