import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Search, Megaphone, TrendingUp, Zap, BarChart2, Users,
  CheckCircle, ArrowRight, Target, Eye, Clock, UserCheck,
  TestTube, Lightbulb
} from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import './Services.css'

const services = [
  {
    id: 'google-ads',
    Icon: Search,
    tag: 'Most Popular',
    title: 'Google Ads',
    desc: "High-intent search, display and Performance Max campaigns structured to capture buyers at the exact moment they're ready to purchase. We handle everything from keyword strategy to bid optimisation and conversion tracking.",
    list: ['Search & Shopping campaigns', 'Performance Max strategies', 'Remarketing & RLSA', 'Conversion tracking setup', 'Negative keyword management', 'Ad copy testing & optimisation'],
    cta: 'Start with Google Ads',
    path: '/services/google-ads'
  },
  {
    id: 'meta-ads',
    Icon: Megaphone,
    title: 'Meta Ads',
    desc: 'Facebook and Instagram advertising that builds awareness, drives retargeting and generates qualified leads. We create scroll-stopping creative and precision audience targeting to maximise your social budget.',
    list: ['Facebook & Instagram ads', 'Custom & Lookalike audiences', 'Lead generation campaigns', 'Creative strategy & testing', 'Catalogue & dynamic ads', 'Pixel setup & tracking'],
    cta: 'Start with Meta Ads',
    path: '/services/meta-ads'
  },
  {
    id: 'seo',
    Icon: TrendingUp,
    title: 'SEO',
    desc: 'Organic visibility, technical optimisation and content strategy that reduces your long-term dependency on paid traffic. We focus on rankings that drive revenue, not vanity metrics.',
    list: ['Technical SEO audit', 'Keyword & content strategy', 'On-page & off-page optimisation', 'Local SEO for UK businesses', 'Core Web Vitals improvements', 'Monthly ranking reports'],
    cta: 'Start with SEO',
    path: '/services/seo'
  },
  {
    id: 'cro',
    Icon: Zap,
    title: 'Conversion Optimisation',
    desc: 'Landing pages, funnels and reporting improvements designed to squeeze more enquiries from your existing traffic. Turn more clicks into leads without increasing your ad spend.',
    list: ['Landing page design & testing', 'A/B & multivariate testing', 'GA4 & GTM setup', 'Funnel analysis & reporting', 'Heatmaps & session recording', 'CRO strategy workshops'],
    cta: 'Boost Conversions',
    path: '/services/conversion-optimisation'
  },
  {
    id: 'analytics',
    Icon: BarChart2,
    title: 'Analytics & Tracking',
    desc: "Full GA4 implementation, GTM configuration and custom dashboard setup so you always know exactly where your leads and revenue are coming from. No guesswork — only data.",
    list: ['GA4 setup & configuration', 'Google Tag Manager', 'Custom Looker Studio reports', 'Call & form tracking', 'E-commerce tracking', 'Attribution modelling'],
    cta: 'Set Up Tracking',
    path: '/services/analytics'
  },
  {
    id: 'lead-gen',
    Icon: Users,
    title: 'Lead Generation',
    desc: 'End-to-end lead generation systems combining paid ads, landing pages and CRM integration to build a consistent pipeline of qualified prospects for your sales team.',
    list: ['Multi-channel lead campaigns', 'Lead magnet strategy', 'CRM & automation setup', 'Lead quality scoring', 'Nurture sequence design', 'Pipeline reporting'],
    cta: 'Generate Leads',
    path: '/services/lead-generation'
  },
]

const whyUs = [
  { Icon: BarChart2,  title: 'Data-First Approach',     desc: 'Every decision is backed by data. We track everything from click to conversion so your budget works as hard as possible.' },
  { Icon: Target,     title: 'Commercial Focus',         desc: 'We measure success in revenue and profit, not clicks and impressions. Our KPIs align with your business goals.' },
  { Icon: Eye,        title: 'Full Transparency',        desc: 'You get complete visibility into your campaigns, spending and results through regular detailed reports.' },
  { Icon: CheckCircle,title: 'UK-Based Expertise',      desc: 'Our team has deep experience with UK consumer behaviour, regulations and market dynamics across all major sectors.' },
  { Icon: Zap,        title: 'Agile Optimisation',      desc: "Weekly campaign reviews and rapid iterations ensure your budget is always allocated to what's performing best." },
  { Icon: UserCheck,  title: 'Dedicated Account Manager',desc: 'A single point of contact who knows your business, your goals and your campaigns inside out.' },
]

export default function Services() {
  useEffect(() => {
    document.title = 'Services | BLM Digital Limited'
    window.scrollTo(0, 0)
  }, [])

  return (
    <main>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-glow" />
        <ScrollReveal>
          <p className="eyebrow">Our Services</p>
          <h1>Full-Service Digital Marketing<br /><span className="text-green">That Delivers.</span></h1>
          <p>Every campaign is built to generate qualified enquiries, improve online visibility and turn visitors into paying customers — with full transparency on results.</p>
        </ScrollReveal>
      </section>

      {/* Services Grid */}
      <section className="services-page section-pad light-panel">
        <div className="container">
          <div className="services-grid">
            {services.map((s, i) => {
              const { Icon } = s
              return (
                <ScrollReveal delay={i % 3} key={s.id}>
                  <article className="service-card" id={s.id}>
                    <div className="service-icon-wrap">
                      <Icon size={24} className="service-icon" />
                    </div>
                    {s.tag && <div className="service-tag">{s.tag}</div>}
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                    <ul className="service-list">
                      {s.list.map(l => <li key={l}>{l}</li>)}
                    </ul>
                    <Link to={s.path} className="service-link">
                      {s.cta} <ArrowRight size={15} />
                    </Link>
                  </article>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us section-pad">
        <div className="container">
          <ScrollReveal className="section-heading">
            <p className="eyebrow">Why BLM Digital</p>
            <h2>What makes us different.</h2>
            <p>We're not a generalist agency. We specialise in performance marketing for ambitious UK businesses who want measurable, commercially-focused results.</p>
          </ScrollReveal>
          <div className="why-grid">
            {whyUs.map((w, i) => {
              const { Icon } = w
              return (
                <ScrollReveal delay={i % 3} key={w.title}>
                  <div className="why-card">
                    <div className="why-icon-wrap">
                      <Icon size={22} className="why-icon-svg" />
                    </div>
                    <h3>{w.title}</h3>
                    <p>{w.desc}</p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="page-cta section-pad">
        <div className="page-cta-glow" />
        <div className="container">
          <ScrollReveal className="page-cta-inner">
            <h2>Ready to get started?</h2>
            <p>Book a free 30-minute strategy call and find out which services will have the biggest impact on your business.</p>
            <Link className="btn primary large" to="/contact">
              Book a Free Strategy Call <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
