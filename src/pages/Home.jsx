import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Search, Megaphone, BarChart2, Bell, TrendingUp,
  PoundSterling, Target, Rocket, Zap, Clock
} from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import './Home.css'

/* Metric count-up hook */
function useCountUp(target, active) {
  const ref = useRef(null)
  useEffect(() => {
    if (!active || !ref.current) return
    const el = ref.current
    const duration = 2000
    const step = target / (duration / 16)
    let current = 0
    const timer = setInterval(() => {
      current = Math.min(current + step, target)
      el.textContent = Math.round(current).toLocaleString('en-GB')
      if (current >= target) clearInterval(timer)
    }, 16)
    return () => clearInterval(timer)
  }, [active, target])
  return ref
}

const trustWords = [
  'Lead Generation','PPC Management','SEO Optimisation','Retargeting',
  'GA4 Analytics','Conversion Funnels','Meta Ads','Landing Pages',
]

export default function Home() {
  // Trigger count-up when hero is visible
  const heroRef = useRef(null)
  const countActive = useRef(false)
  const ref1 = useCountUp(12456, true)
  const ref2 = useCountUp(1245, true)

  useEffect(() => {
    document.title = 'BLM Digital Limited | Performance Marketing Agency UK'
  }, [])

  return (
    <main>
      {/* ── HERO ─────────────────────────────── */}
      <section className="hero-section section-pad" ref={heroRef}>
        <div className="hero-bg-grid" />
        <div className="hero-content container">
          {/* Copy */}
          <ScrollReveal className="hero-copy">
            <div className="badge-pill">
              <span className="badge-dot" />
              UK-Based Performance Marketing Agency
            </div>
            <h1>
              More Leads.<br />
              <span className="hero-highlight">Higher ROI.</span><br />
              Smarter Ads.
            </h1>
            <p className="lead">
              BLM Digital Limited helps ambitious UK companies scale through Google&nbsp;Ads,
              Meta&nbsp;Ads, SEO and conversion-led campaigns built around data, tracking
              and real commercial results.
            </p>
            <div className="hero-actions">
              <Link className="btn primary" to="/contact">
                Book a Free Strategy Call
                <ArrowRight size={18} />
              </Link>
              <Link className="btn ghost" to="/services">
                View Services
                <ArrowRight size={18} />
              </Link>
            </div>
            <div className="partner-row">
              {[
                { Icon: Search, title: 'Google Ads', sub: 'Campaign Management' },
                { Icon: Megaphone, title: 'Meta Ads', sub: 'Paid Social' },
                { Icon: BarChart2, title: 'Analytics', sub: 'Tracking & Reporting' },
              ].map(b => {
                const { Icon } = b
                return (
                  <div className="partner-badge" key={b.title}>
                    <div className="partner-icon"><Icon size={16} /></div>
                    <div><strong>{b.title}</strong><span>{b.sub}</span></div>
                  </div>
                )
              })}
            </div>
          </ScrollReveal>

          {/* Dashboard mockup */}
          <ScrollReveal delay={1} className="hero-visual">
            <div className="dashboard-card">
              <div className="dash-top">
                <div className="mini-logo">BL<span>M</span></div>
                <div className="dash-title">
                  <strong>Performance Overview</strong>
                  <small>Last 30 Days · Updated live</small>
                </div>
                <div className="live-badge"><span />Live</div>
              </div>
              <div className="metric-grid">
                <div className="metric"><small>Clicks</small><strong ref={ref1}>12,456</strong><em className="positive">↑ 32.5%</em></div>
                <div className="metric"><small>Conversions</small><strong ref={ref2}>1,245</strong><em className="positive">↑ 28.4%</em></div>
                <div className="metric"><small>Cost / Lead</small><strong>£18.73</strong><em className="positive">↓ 16.2%</em></div>
                <div className="metric"><small>ROAS</small><strong>5.62x</strong><em className="positive">↑ 41.3%</em></div>
              </div>
              <div className="chart">
                {[25,48,42,61,53,72,58,76,68,86,79,94].map((h,i) => (
                  <span key={i} style={{'--h': `${h}%`}} />
                ))}
              </div>
              <div className="dash-bottom">
                <div className="donut" />
                <ul>
                  <li><b className="dot-green"/>&nbsp;Search Campaigns<span>48%</span></li>
                  <li><b className="dot-light"/>&nbsp;Performance Max<span>28%</span></li>
                  <li><b className="dot-muted"/>&nbsp;Remarketing<span>15%</span></li>
                  <li><b className="dot-faint"/>&nbsp;Display<span>9%</span></li>
                </ul>
              </div>
            </div>
            {/* Floating notification cards */}
            <div className="notif-card notif-1">
              <div className="notif-icon"><Target size={24} color="var(--green)" /></div>
              <div><strong>New Conversion</strong><span>Lead form submitted · 2m ago</span></div>
            </div>
            <div className="notif-card notif-2">
              <div className="notif-icon"><TrendingUp size={24} color="var(--green)" /></div>
              <div><strong>ROAS Increased</strong><span>+41% this month</span></div>
            </div>
          </ScrollReveal>
        </div>

        {/* Trust ticker */}
        <div className="trust-strip container">
          <p className="trust-label">Trusted by growing UK businesses across</p>
          <div className="trust-track">
            <div className="trust-items">
              {[...trustWords, ...trustWords].map((w,i) => <span key={i}>{w}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS TEASER ─────────────────────────── */}
      <section className="home-stats section-pad">
        <div className="container">
          <div className="home-stats-grid">
            {[
              { num:'£21.4M+', label:'Tracked revenue influenced', Icon: PoundSterling },
              { num:'185%',    label:'Average ROI improvement',     Icon: TrendingUp },
              { num:'50,000+', label:'Qualified leads generated',   Icon: Target },
              { num:'5.6x',    label:'Average ROAS achieved',       Icon: Rocket },
            ].map((s,i) => {
              const { Icon } = s
              return (
                <ScrollReveal delay={i} key={s.num} className="home-stat-card">
                  <div className="stat-icon"><Icon size={28} /></div>
                  <strong className="stat-num">{s.num}</strong>
                  <span>{s.label}</span>
                </ScrollReveal>
              )
            })}
          </div>
          <ScrollReveal className="home-stats-cta">
            <Link className="btn outline-green" to="/results">View Full Results <ArrowRight size={15} /></Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ─────────────────────── */}
      <section className="home-services section-pad light-panel">
        <div className="container">
          <ScrollReveal className="section-heading">
            <p className="eyebrow">What We Do</p>
            <h2>Performance marketing services that deliver.</h2>
            <p>Every campaign is built to generate qualified enquiries and turn visitors into customers — with full transparency on what's working.</p>
          </ScrollReveal>
          <div className="home-services-grid">
            {[
              { Icon: Search, title:'Google Ads', desc:'High-intent search and Performance Max campaigns that capture buyers at exactly the right moment.', path: '/services/google-ads' },
              { Icon: Megaphone, title:'Meta Ads', desc:'Facebook and Instagram advertising for awareness, lead generation and audience growth.', path: '/services/meta-ads' },
              { Icon: TrendingUp, title:'SEO', desc:'Organic visibility and content strategy that reduces your long-term dependency on paid traffic.', path: '/services/seo' },
              { Icon: Zap, title:'Conversion Optimisation', desc:'Landing pages and funnel improvements that turn more clicks into leads without extra spend.', path: '/services/conversion-optimisation' },
              { Icon: BarChart2, title:'Analytics & Tracking', desc:'Full GA4 setup and custom reporting so you always know exactly where your revenue comes from.', path: '/services/analytics' },
              { Icon: Target, title:'Lead Generation', desc:'End-to-end lead systems combining paid ads, landing pages and CRM integration.', path: '/services/lead-generation' },
            ].map((s,i) => {
              const { Icon } = s
              return (
                <ScrollReveal delay={i % 3} key={s.title} className="home-svc-card">
                  <div className="home-svc-icon"><Icon size={32} /></div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <Link to={s.path} className="service-link">
                    Learn more
                    <ArrowRight size={14} />
                  </Link>
                </ScrollReveal>
              )
            })}
          </div>
          <ScrollReveal className="home-services-cta">
            <Link className="btn primary" to="/services">Explore All Services <ArrowRight size={18} /></Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── PROCESS PREVIEW ──────────────────────── */}
      <section className="home-process section-pad">
        <div className="container">
          <ScrollReveal className="section-heading">
            <p className="eyebrow">How We Work</p>
            <h2>A clear system from audit to scale.</h2>
            <p>We follow a proven four-step framework that removes guesswork and puts your budget to work from day one.</p>
          </ScrollReveal>
          <div className="home-process-steps">
            {[
              { num:'01', title:'Discovery & Audit', desc:'Review of your existing campaigns, tracking, website, competitors and customer journey.' },
              { num:'02', title:'Strategy & Build',  desc:'Campaign structure, landing pages, conversion tracking and audience strategy.' },
              { num:'03', title:'Optimise',          desc:'Monitor search terms, creative, cost per lead, budget and conversion quality.' },
              { num:'04', title:'Scale',             desc:'Increase spend where performance is proven and expand into additional channels.' },
            ].map((s,i) => (
              <ScrollReveal delay={i} key={s.num} className="home-process-card">
                <span className="process-num">{s.num}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="home-process-cta">
            <Link className="btn outline-green" to="/process">See the Full Process <ArrowRight size={15} /></Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────── */}
      <section className="home-cta section-pad">
        <div className="cta-glow" />
        <div className="container">
          <ScrollReveal className="cta-inner">
            <div className="cta-badge">
              <span className="badge-dot pulse" />
              Currently taking on new clients
            </div>
            <h2>Ready to make your marketing budget work harder?</h2>
            <p>
              Book a complimentary 30-minute strategy call. We'll review your setup, identify growth opportunities
              and outline a clear plan — with no obligation.
            </p>
            <div className="cta-actions">
              <Link className="btn primary large" to="/contact">
                Book Your Free Strategy Call
                <ArrowRight size={20} />
              </Link>
              <div className="cta-note">
                <Clock size={16} />
                No obligation · 30 minutes · Completely free
              </div>
            </div>
            <div className="cta-features">
              <span>✓ Campaign audit included</span>
              <span>✓ Competitor analysis</span>
              <span>✓ Growth roadmap</span>
              <span>✓ No sales pressure</span>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
