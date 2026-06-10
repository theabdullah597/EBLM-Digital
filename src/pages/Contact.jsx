import { useEffect, useState } from 'react'
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import './Contact.css'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent

  useEffect(() => {
    document.title = 'Contact Us | BLM Digital Limited'
    window.scrollTo(0, 0)
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => {
      setStatus('sent')
      e.target.reset()
      setTimeout(() => setStatus('idle'), 4000)
    }, 1400)
  }

  return (
    <main>
      <section className="page-hero">
        <div className="page-hero-glow" />
        <ScrollReveal>
          <p className="eyebrow">Book a Consultation</p>
          <h1>Let's Talk About<br /><span className="text-green">Growing Your Business.</span></h1>
          <p>Tell us about your business and your marketing goals. We'll get back to you within one working day with our thoughts and a suggested approach.</p>
        </ScrollReveal>
      </section>

      <section className="contact-section section-pad light-panel">
        <div className="container">
          <div className="contact-inner">
            {/* Left col */}
            <div className="contact-left">
              <ScrollReveal>
                <h2>Get in touch</h2>
                <p>Whether you're starting from scratch, taking over from an existing agency or looking to scale what's already working — we'd love to hear from you.</p>
                <div className="contact-info-list">
                  {[
                    { icon:<Phone size={22} />, label:'Phone', value:'+44 (0)20 1234 5678', href:'tel:+442012345678' },
                    { icon:<Mail size={22} />, label:'Email', value:'hello@blmdigital.com', href:'mailto:hello@blmdigital.com' },
                    { icon:<MapPin size={22} />, label:'Location', value:'London, United Kingdom', href:null },
                    { icon:<Clock size={22} />, label:'Response Time', value:'Within one working day', href:null },
                  ].map(i => (
                    <div className="contact-info-item" key={i.label}>
                      <div className="contact-info-icon">{i.icon}</div>
                      <div>
                        <strong>{i.label}</strong>
                        {i.href ? <a href={i.href}>{i.value}</a> : <span>{i.value}</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
              <ScrollReveal delay={1} className="what-to-expect">
                <h3>What to expect</h3>
                <ul>
                  <li>We'll review your enquiry and research your business and market</li>
                  <li>We'll schedule a 30-minute video call at a time that suits you</li>
                  <li>We'll share a tailored audit of your current marketing performance</li>
                  <li>We'll outline a clear growth strategy — no obligation to proceed</li>
                </ul>
              </ScrollReveal>
            </div>

            {/* Form */}
            <ScrollReveal delay={1} className="contact-form-wrap">
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <label className="form-group">
                    <span>Full Name *</span>
                    <input type="text" name="name" placeholder="Your full name" required autoComplete="name" />
                  </label>
                  <label className="form-group">
                    <span>Email Address *</span>
                    <input type="email" name="email" placeholder="you@yourcompany.com" required autoComplete="email" />
                  </label>
                </div>
                <div className="form-row">
                  <label className="form-group">
                    <span>Company Name</span>
                    <input type="text" name="company" placeholder="Your company name" autoComplete="organization" />
                  </label>
                  <label className="form-group">
                    <span>Monthly Ad Spend</span>
                    <select name="budget" defaultValue="">
                      <option value="" disabled>Select your budget</option>
                      <option>Under £1,000/month</option>
                      <option>£1,000 – £5,000/month</option>
                      <option>£5,000 – £15,000/month</option>
                      <option>£15,000 – £50,000/month</option>
                      <option>£50,000+/month</option>
                    </select>
                  </label>
                </div>
                <label className="form-group">
                  <span>Services Interested In</span>
                  <div className="checkbox-group">
                    {['Google Ads','Meta Ads','SEO','Conversion Optimisation','Analytics & Tracking','Lead Generation'].map(s => (
                      <label className="checkbox" key={s}>
                        <input type="checkbox" name="services" value={s} />
                        <span>{s}</span>
                      </label>
                    ))}
                  </div>
                </label>
                <label className="form-group">
                  <span>Tell us about your goals *</span>
                  <textarea name="message" rows="5" placeholder="What are you looking to achieve? What are your biggest marketing challenges right now?" required />
                </label>
                <button
                  className={`btn primary full-width submit-btn${status === 'sent' ? ' sent' : ''}`}
                  type="submit"
                  disabled={status === 'sending'}
                >
                  {status === 'idle' && (<>Send Enquiry <ArrowRight size={18} /></>)}
                  {status === 'sending' && 'Sending…'}
                  {status === 'sent' && '✓ Enquiry Sent!'}
                </button>
                <p className="form-note">We'll respond within one working day. Your details are never shared with third parties.</p>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  )
}
