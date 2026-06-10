import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Target, Search, Zap, Globe, FileText, Phone, Lock, UserCheck, TestTube, Lightbulb, ArrowRight } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import './About.css'

export default function About() {
  useEffect(() => {
    document.title = 'About Us | BLM Digital Limited'
    window.scrollTo(0, 0)
  }, [])

  return (
    <main>
      <section className="page-hero">
        <div className="page-hero-glow" />
        <ScrollReveal>
          <p className="eyebrow">About BLM Digital Limited</p>
          <h1>Marketing Built for<br /><span className="text-green">Business Owners.</span></h1>
          <p>We're a UK-based performance marketing agency founded on a simple principle: marketing should be measurable, transparent and tied directly to commercial growth.</p>
        </ScrollReveal>
      </section>

      {/* Mission & Story */}
      <section className="about-story section-pad">
        <div className="container">
          <div className="about-story-inner">
            <ScrollReveal className="about-img-col">
              <div className="about-image-wrap">
                <img src="team_about.png" alt="BLM Digital team working in modern office" />
                <div className="about-img-badge">
                  <strong>UK-Based</strong>
                  <span>London Headquarters</span>
                </div>
              </div>
            </ScrollReveal>
            <div className="about-content">
              <ScrollReveal>
                <p className="eyebrow">Our Story</p>
                <h2>No vanity metrics. No smoke and mirrors.</h2>
                <p>BLM Digital Limited was founded after seeing too many UK businesses waste money on marketing agencies that prioritised impressive-sounding reports over actual business results. We knew there had to be a better way.</p>
                <p>We focus exclusively on the numbers that matter to your business: qualified enquiries, booked calls, cost per acquisition, return on ad spend and long-term revenue growth. Every campaign is structured around transparent reporting and practical commercial outcomes that you can see and verify.</p>
                <p>Today, we work with ambitious UK businesses across every sector — from professional services and SaaS to e-commerce and local trades — helping them scale through intelligent, data-driven digital marketing.</p>
              </ScrollReveal>
              <ScrollReveal delay={1} className="about-values">
                <div className="value-item">
                  <div className="value-icon"><Target size={24} /></div>
                  <div>
                    <strong>Commercial Focus</strong>
                    <span>Every decision is tied to your bottom line, not vanity metrics or agency KPIs.</span>
                  </div>
                </div>
                <div className="value-item">
                  <div className="value-icon"><Search size={24} /></div>
                  <div>
                    <strong>Full Transparency</strong>
                    <span>You see everything — every penny spent, every result achieved, every test run.</span>
                  </div>
                </div>
                <div className="value-item">
                  <div className="value-icon"><Zap size={24} /></div>
                  <div>
                    <strong>Continuous Improvement</strong>
                    <span>We never stop optimising. Your campaigns improve every single week.</span>
                  </div>
                </div>
                <div className="value-item">
                  <div className="value-icon"><Globe size={24} /></div>
                  <div>
                    <strong>UK Expertise</strong>
                    <span>Deep knowledge of UK consumer behaviour, regulations and market dynamics.</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="about-stats section-pad">
        <div className="container">
          <div className="about-stats-grid">
            {[
              { num:'8+', label:'Years of performance marketing expertise' },
              { num:'97%', label:'Client retention rate over 12 months' },
              { num:'150+', label:'UK businesses helped to grow' },
              { num:'£21.4M+', label:'In revenue tracked for clients' },
            ].map((s,i) => (
              <ScrollReveal delay={i} key={s.num}>
                <div className="about-stat-card">
                  <strong>{s.num}</strong>
                  <span>{s.label}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What sets us apart */}
      <section className="about-difference section-pad">
        <div className="container">
          <ScrollReveal className="section-heading">
            <p className="eyebrow">Our Commitment</p>
            <h2>What you can always expect from us.</h2>
          </ScrollReveal>
          <div className="difference-grid">
            {[
              { Icon: FileText, title:'Monthly Reporting',          desc:'Detailed, jargon-free reports delivered every month showing exactly what your budget achieved and what we\'re doing next.' },
              { Icon: Phone,    title:'Regular Strategy Calls',     desc:'Scheduled calls to discuss performance, upcoming opportunities and any changes to your business or marketing goals.' },
              { Icon: Lock,     title:'No Lock-In Contracts',      desc:'We work on rolling monthly agreements because we believe our results should earn your continued investment, not a contract.' },
              { Icon: UserCheck,title:'Dedicated Account Manager',  desc:'A single point of contact who knows your business, answers your questions and owns the relationship end-to-end.' },
              { Icon: TestTube, title:'Continuous Testing',        desc:'We never become complacent. Every month brings new tests, new ideas and new ways to improve your campaign performance.' },
              { Icon: Lightbulb,title:'Proactive Recommendations',  desc:'We don\'t wait for you to ask questions. If we spot an opportunity or a risk, we tell you about it immediately.' },
            ].map((d, i) => {
              const { Icon } = d
              return (
                <ScrollReveal delay={i % 3} key={d.title}>
                  <div className="difference-card">
                    <div className="diff-icon-wrap">
                      <Icon size={24} className="diff-icon-svg" />
                    </div>
                    <h3>{d.title}</h3>
                    <p>{d.desc}</p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="page-cta section-pad">
        <div className="page-cta-glow" />
        <div className="container">
          <ScrollReveal className="page-cta-inner">
            <h2>Let's work together.</h2>
            <p>Book a free strategy call to find out how we can help your business grow.</p>
            <Link className="btn primary large" to="/contact">
              Book a Free Strategy Call <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
