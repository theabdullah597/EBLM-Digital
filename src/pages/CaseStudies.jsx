import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import './CaseStudies.css'

const cases = [
  {
    id:'law',
    tag:'B2B Services · London',
    title:'Professional Services Firm Triples Lead Volume',
    challenge:'A London-based professional services firm came to us with underperforming Google Ads spend, no reliable conversion tracking and a cost per lead of over £89 — far above a sustainable level for their business.',
    solution:'We restructured their entire Google Ads account from scratch, implemented GA4 and GTM, created dedicated landing pages for each practice area and launched a systematic bid optimisation programme.',
    img:'case_study_results.png',
    metrics:[
      { label:'Increase in qualified leads', value:'312%' },
      { label:'Cost per lead (down from £89)', value:'£24.10' },
      { label:'Return on ad spend', value:'6.4x' },
      { label:'Conversion rate improvement', value:'+185%' },
    ],
  },
  {
    id:'ecom',
    tag:'E-Commerce · Manchester',
    title:'E-Commerce Brand Scales Revenue with Meta Ads',
    challenge:'A Manchester-based e-commerce brand had tried Meta Ads previously with inconsistent results, high CPAs and creative fatigue. They were spending £8k per month with little return.',
    solution:'We rebuilt their entire Meta funnel — new creative strategy, custom audience segments, a cold/warm/hot audience approach and systematic creative testing. We also improved their landing page conversion rate by 40%.',
    img:'',
    metrics:[
      { label:'Revenue growth in 90 days', value:'224%' },
      { label:'Return on ad spend achieved', value:'4.8x' },
      { label:'Reduction in cost per acquisition', value:'-38%' },
      { label:'Increase in average order value', value:'+22%' },
    ],
  },
  {
    id:'saas',
    tag:'SaaS · Edinburgh',
    title:'SaaS Company Builds Consistent Trial Pipeline',
    challenge:'A Scottish SaaS startup needed a steady flow of free trial sign-ups but had a limited budget and no paid acquisition experience. Their organic growth had plateaued.',
    solution:'We launched targeted Google Search campaigns focused on competitor keywords and high-intent buyer searches, with tightly controlled ad groups and dedicated trial sign-up landing pages for each customer segment.',
    img:'',
    metrics:[
      { label:'Trial sign-up growth in 60 days', value:'187%' },
      { label:'Cost per free trial sign-up', value:'£11.40' },
      { label:'Trial-to-paid conversion rate', value:'42%' },
      { label:'Monthly recurring revenue growth', value:'+£34k' },
    ],
  },
  {
    id:'trades',
    tag:'Local Services · Birmingham',
    title:'Trades Business Dominates Local Search',
    challenge:'A Birmingham electrical contractor was relying entirely on word-of-mouth referrals and had zero digital presence. They had no website, no Google Business Profile and were losing work to competitors.',
    solution:'We built a conversion-optimised website, claimed and optimised their Google Business Profile, launched a Local Services Ads campaign and built out a local SEO strategy targeting every service area in the West Midlands.',
    img:'',
    metrics:[
      { label:'Google local ranking position', value:'#1' },
      { label:'Increase in monthly enquiries', value:'89%' },
      { label:'Return on total investment', value:'5.2x' },
      { label:'New service areas covered', value:'12' },
    ],
  },
]

export default function CaseStudies() {
  useEffect(() => {
    document.title = 'Case Studies | BLM Digital Limited'
    window.scrollTo(0, 0)
  }, [])

  return (
    <main>
      <section className="page-hero">
        <div className="page-hero-glow" />
        <ScrollReveal>
          <p className="eyebrow">Case Studies</p>
          <h1>Results We're<br /><span className="text-green">Proud Of.</span></h1>
          <p>A selection of verified campaign results from UK businesses we've helped grow. All metrics are taken directly from live client accounts.</p>
        </ScrollReveal>
      </section>

      {/* Case Studies */}
      <section className="cases-section section-pad">
        <div className="container">
          <div className="cases-list">
            {cases.map((c, i) => (
              <ScrollReveal key={c.id}>
                <article className={`case-detail${i % 2 !== 0 ? ' reverse' : ''}`}>
                  <div className="case-detail-image">
                    {c.img
                      ? <img src={c.img} alt={c.title} />
                      : <div className="case-placeholder">
                          <div className="case-placeholder-content">
                            <div className="case-tag-pill">{c.tag}</div>
                            <div className="case-placeholder-metrics">
                              {c.metrics.slice(0,2).map(m => (
                                <div key={m.label} className="placeholder-metric">
                                  <strong>{m.value}</strong>
                                  <span>{m.label}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                    }
                    <div className="case-tag-overlay">{c.tag}</div>
                  </div>
                  <div className="case-detail-content">
                    <h2>{c.title}</h2>
                    <div className="challenge-block">
                      <h4>The Challenge</h4>
                      <p>{c.challenge}</p>
                    </div>
                    <div className="solution-block">
                      <h4>Our Approach</h4>
                      <p>{c.solution}</p>
                    </div>
                    <div className="case-metrics-row">
                      {c.metrics.map(m => (
                        <div key={m.label} className="case-metric-box">
                          <strong>{m.value}</strong>
                          <span>{m.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>



      <section className="page-cta section-pad">
        <div className="page-cta-glow" />
        <div className="container">
          <ScrollReveal className="page-cta-inner">
            <h2>Could your business be our next case study?</h2>
            <p>Book a free strategy call and let's discuss what results are possible for you.</p>
            <Link className="btn primary large" to="/contact">
              Book a Free Strategy Call <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
