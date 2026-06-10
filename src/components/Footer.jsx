import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  const services = [
    'Google Ads Management', 'Meta Ads & Paid Social', 'Search Engine Optimisation',
    'Conversion Rate Optimisation', 'Analytics & Tracking', 'Lead Generation',
  ]
  const company = [
    { label: 'About Us',      to: '/about' },
    { label: 'How We Work',   to: '/process' },
    { label: 'Results',       to: '/results' },
    { label: 'Case Studies',  to: '/case-studies' },
    { label: 'Contact Us',    to: '/contact' },
  ]

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-top-inner">

          {/* Brand column — no social icons */}
          <div className="footer-brand-col">
            <Link className="brand" to="/" aria-label="BLM Digital Limited home">
              <span className="brand-mark"><span>BL</span><b>M</b></span>
              <span className="brand-sub">DIGITAL <em>LIMITED</em></span>
            </Link>
            <p className="footer-tagline">
              Performance marketing that drives measurable growth for ambitious UK businesses.
            </p>
            <div className="footer-cert-badges">
              <div className="cert-badge">Google Partner</div>
              <div className="cert-badge">Meta Business Partner</div>
            </div>
          </div>

          <div className="footer-nav-col">
            <h4>Services</h4>
            <ul>
              {services.map(s => (
                <li key={s}><Link to="/services">{s}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer-nav-col">
            <h4>Company</h4>
            <ul>
              {company.map(c => (
                <li key={c.to}><Link to={c.to}>{c.label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer-contact-col">
            <h4>Get In Touch</h4>
            <ul className="footer-contact-list">
              <li>
                <Phone size={16} />
                <a href="tel:+442012345678">+44 (0)20 1234 5678</a>
              </li>
              <li>
                <Mail size={16} />
                <a href="mailto:hello@blmdigital.com">hello@blmdigital.com</a>
              </li>
              <li>
                <MapPin size={16} />
                <span>London, United Kingdom</span>
              </li>
            </ul>
            <Link className="btn primary footer-btn" to="/contact">
              Book a Free Call <ArrowRight size={14} />
            </Link>
          </div>

        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p>© {year} BLM Digital Limited. All rights reserved. Registered in England &amp; Wales.</p>
          <div className="footer-legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-and-conditions">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
