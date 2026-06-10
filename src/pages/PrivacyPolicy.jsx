import { useEffect } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import './Legal.css'

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = 'Privacy Policy | BLM Digital Limited'
    window.scrollTo(0, 0)
  }, [])

  const updated = '10 June 2026'

  return (
    <main>
      <section className="page-hero legal-hero">
        <div className="page-hero-glow" />
        <ScrollReveal>
          <p className="eyebrow">Legal</p>
          <h1>Privacy Policy</h1>
          <p>Last updated: {updated}</p>
        </ScrollReveal>
      </section>

      <section className="legal-section section-pad light-panel">
        <div className="container">
          <div className="legal-inner">
            <nav className="legal-nav">
              <h4>Contents</h4>
              <ul>
                {['Who We Are','Information We Collect','How We Use Your Information','Legal Basis for Processing','Cookies','Third-Party Services','Data Retention','Your Rights','Data Security','Children\'s Privacy','Changes to This Policy','Contact Us'].map(t => (
                  <li key={t}><a href={`#${t.toLowerCase().replace(/[^a-z0-9]+/g,'-')}`}>{t}</a></li>
                ))}
              </ul>
            </nav>

            <article className="legal-content">
              <p className="legal-intro">BLM Digital Limited is committed to protecting your privacy and handling your personal data in a transparent, responsible manner. This Privacy Policy explains how we collect, use and protect your information when you visit our website or engage with our services.</p>

              <section id="who-we-are" className="legal-block">
                <h2>1. Who We Are</h2>
                <p>BLM Digital Limited is a performance marketing agency registered in England and Wales. Our registered office is at 2 ST. Peters Street, Huddersfield, England, HD1 1RA. We are the data controller for the personal information we collect through this website.</p>
                <p>If you have any questions about this policy or how we handle your data, please contact us at <a href="mailto:privacy@blmdigital.com">privacy@blmdigital.com</a>.</p>
              </section>

              <section id="information-we-collect" className="legal-block">
                <h2>2. Information We Collect</h2>
                <p>We collect the following categories of personal information:</p>
                <h3>Information you provide directly</h3>
                <ul>
                  <li>Name, email address and phone number (via our contact form)</li>
                  <li>Company name and job title</li>
                  <li>Information about your marketing goals and budget</li>
                  <li>Any other information you choose to share with us</li>
                </ul>
                <h3>Information collected automatically</h3>
                <ul>
                  <li>IP address and approximate location</li>
                  <li>Browser type and operating system</li>
                  <li>Pages visited, time spent on site and referring URLs</li>
                  <li>Device type and screen resolution</li>
                  <li>Cookie data (see our Cookies section below)</li>
                </ul>
              </section>

              <section id="how-we-use-your-information" className="legal-block">
                <h2>3. How We Use Your Information</h2>
                <p>We use your personal information for the following purposes:</p>
                <ul>
                  <li>To respond to your enquiries and provide the services you've requested</li>
                  <li>To send you relevant marketing communications (where you've consented)</li>
                  <li>To improve our website and understand how visitors use it</li>
                  <li>To comply with our legal obligations</li>
                  <li>To prevent fraud and ensure the security of our services</li>
                  <li>To conduct analytics and measure the effectiveness of our campaigns</li>
                </ul>
              </section>

              <section id="legal-basis-for-processing" className="legal-block">
                <h2>4. Legal Basis for Processing</h2>
                <p>Under UK GDPR, we process your personal data on the following legal bases:</p>
                <ul>
                  <li><strong>Consent</strong> — when you submit our contact form or subscribe to marketing communications</li>
                  <li><strong>Legitimate interests</strong> — to improve our services and communicate with prospective clients</li>
                  <li><strong>Contractual necessity</strong> — when we need your data to deliver the services you've engaged us for</li>
                  <li><strong>Legal obligation</strong> — when required by law</li>
                </ul>
              </section>

              <section id="cookies" className="legal-block">
                <h2>5. Cookies</h2>
                <p>We use cookies and similar tracking technologies on our website. These include:</p>
                <ul>
                  <li><strong>Essential cookies</strong> — necessary for the website to function correctly</li>
                  <li><strong>Analytics cookies</strong> — Google Analytics 4, used to understand how visitors use our site</li>
                  <li><strong>Marketing cookies</strong> — Google Ads and Meta Pixel, used to measure campaign effectiveness and serve relevant advertising</li>
                </ul>
                <p>You can manage your cookie preferences through your browser settings. Disabling certain cookies may affect the functionality of our website.</p>
              </section>

              <section id="third-party-services" className="legal-block">
                <h2>6. Third-Party Services</h2>
                <p>We use the following third-party services that may process your data:</p>
                <ul>
                  <li>Google Analytics 4 (website analytics)</li>
                  <li>Google Ads (campaign tracking)</li>
                  <li>Meta Pixel (campaign tracking)</li>
                  <li>Google Tag Manager (tag management)</li>
                </ul>
                <p>These services are governed by their own privacy policies. We encourage you to review them.</p>
              </section>

              <section id="data-retention" className="legal-block">
                <h2>7. Data Retention</h2>
                <p>We retain your personal data for as long as necessary to fulfil the purposes outlined in this policy, or as required by law. Typically:</p>
                <ul>
                  <li>Contact form enquiries are retained for up to 3 years</li>
                  <li>Client data is retained for up to 7 years for accounting and legal purposes</li>
                  <li>Analytics data is retained in accordance with Google Analytics default settings</li>
                </ul>
              </section>

              <section id="your-rights" className="legal-block">
                <h2>8. Your Rights</h2>
                <p>Under UK GDPR, you have the following rights:</p>
                <ul>
                  <li><strong>Right to access</strong> — request a copy of the personal data we hold about you</li>
                  <li><strong>Right to rectification</strong> — request correction of inaccurate data</li>
                  <li><strong>Right to erasure</strong> — request deletion of your personal data in certain circumstances</li>
                  <li><strong>Right to restrict processing</strong> — request that we limit how we use your data</li>
                  <li><strong>Right to data portability</strong> — receive your data in a machine-readable format</li>
                  <li><strong>Right to object</strong> — object to processing based on legitimate interests</li>
                  <li><strong>Right to withdraw consent</strong> — where processing is based on consent</li>
                </ul>
                <p>To exercise any of these rights, please contact us at <a href="mailto:privacy@blmdigital.com">privacy@blmdigital.com</a>. You also have the right to lodge a complaint with the Information Commissioner's Office (ICO) at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a>.</p>
              </section>

              <section id="data-security" className="legal-block">
                <h2>9. Data Security</h2>
                <p>We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure or destruction. This includes SSL/TLS encryption, access controls and regular security reviews.</p>
              </section>

              <section id="children-s-privacy" className="legal-block">
                <h2>10. Children's Privacy</h2>
                <p>Our website and services are not directed at children under 16 years of age. We do not knowingly collect personal data from children. If you believe we have inadvertently collected data from a child, please contact us immediately.</p>
              </section>

              <section id="changes-to-this-policy" className="legal-block">
                <h2>11. Changes to This Policy</h2>
                <p>We may update this Privacy Policy from time to time. We will notify you of any significant changes by updating the "Last updated" date at the top of this page. We encourage you to review this policy periodically.</p>
              </section>

              <section id="contact-us" className="legal-block">
                <h2>12. Contact Us</h2>
                <p>If you have any questions, concerns or requests relating to this Privacy Policy, please contact us:</p>
                <div className="legal-contact-box">
                  <p><strong>BLM Digital Limited</strong></p>
                  <p>Email: <a href="mailto:privacy@blmdigital.com">privacy@blmdigital.com</a></p>
                  <p>Address: 2 ST. Peters Street, Huddersfield, England, HD1 1RA</p>
                </div>
              </section>
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}
