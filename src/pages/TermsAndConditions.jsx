import { useEffect } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import './Legal.css'

export default function TermsAndConditions() {
  useEffect(() => {
    document.title = 'Terms & Conditions | BLM Digital Limited'
    window.scrollTo(0, 0)
  }, [])

  const updated = '10 June 2026'

  return (
    <main>
      <section className="page-hero legal-hero">
        <div className="page-hero-glow" />
        <ScrollReveal>
          <p className="eyebrow">Legal</p>
          <h1>Terms &amp; Conditions</h1>
          <p>Last updated: {updated}</p>
        </ScrollReveal>
      </section>

      <section className="legal-section section-pad light-panel">
        <div className="container">
          <div className="legal-inner">
            <nav className="legal-nav">
              <h4>Contents</h4>
              <ul>
                {['Agreement to Terms','Services','Client Obligations','Fees & Payment','Intellectual Property','Confidentiality','Data Protection','Liability','Termination','Governing Law','Changes to Terms','Contact'].map(t => (
                  <li key={t}><a href={`#${t.toLowerCase().replace(/[^a-z0-9]+/g,'-')}`}>{t}</a></li>
                ))}
              </ul>
            </nav>

            <article className="legal-content">
              <p className="legal-intro">These Terms and Conditions govern your use of BLM Digital Limited's website and services. By engaging our services or accessing our website, you agree to be bound by these terms. Please read them carefully before proceeding.</p>

              <section id="agreement-to-terms" className="legal-block">
                <h2>1. Agreement to Terms</h2>
                <p>By accessing our website at blmdigital.com or engaging BLM Digital Limited to provide marketing services, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, you should not use our website or services.</p>
                <p>BLM Digital Limited reserves the right to update these terms at any time. Continued use of our services following any changes constitutes your acceptance of the revised terms.</p>
              </section>

              <section id="services" className="legal-block">
                <h2>2. Services</h2>
                <p>BLM Digital Limited provides digital marketing services including, but not limited to:</p>
                <ul>
                  <li>Google Ads campaign management</li>
                  <li>Meta Ads (Facebook & Instagram) management</li>
                  <li>Search engine optimisation (SEO)</li>
                  <li>Conversion rate optimisation</li>
                  <li>Analytics implementation and reporting</li>
                  <li>Lead generation strategy and execution</li>
                </ul>
                <p>The specific scope of services provided to each client is defined in a separate Service Agreement or Statement of Work. In the event of any conflict between these Terms and a Service Agreement, the Service Agreement shall prevail.</p>
              </section>

              <section id="client-obligations" className="legal-block">
                <h2>3. Client Obligations</h2>
                <p>To enable us to deliver our services effectively, you agree to:</p>
                <ul>
                  <li>Provide us with accurate, up-to-date information about your business and marketing goals</li>
                  <li>Grant necessary access to advertising accounts, analytics platforms and websites</li>
                  <li>Respond to requests for information, approvals and feedback in a timely manner</li>
                  <li>Ensure that all content and materials you provide do not infringe any third-party rights</li>
                  <li>Comply with all applicable laws, including advertising standards and data protection regulations</li>
                  <li>Maintain sufficient advertising budget to meet agreed campaign objectives</li>
                </ul>
              </section>

              <section id="fees-payment" className="legal-block">
                <h2>4. Fees &amp; Payment</h2>
                <p>Our fees are agreed in writing prior to commencing any work. Unless otherwise stated:</p>
                <ul>
                  <li>Monthly management fees are invoiced on the first working day of each month</li>
                  <li>Payment is due within 14 days of the invoice date</li>
                  <li>Late payment may incur interest at 8% above the Bank of England base rate under the Late Payment of Commercial Debts Act 1998</li>
                  <li>Advertising spend is billed directly to your advertising accounts and is not included in our management fees unless otherwise agreed</li>
                  <li>All fees are subject to VAT at the prevailing rate</li>
                </ul>
              </section>

              <section id="intellectual-property" className="legal-block">
                <h2>5. Intellectual Property</h2>
                <p>Upon receipt of full payment, BLM Digital Limited assigns to you all intellectual property rights in the deliverables specifically created for you under our Service Agreement, except for any pre-existing materials, third-party components or proprietary methodologies.</p>
                <p>All intellectual property rights in our proprietary systems, processes, frameworks and methodologies remain the exclusive property of BLM Digital Limited. Nothing in these terms grants you any licence to use our proprietary tools or systems beyond what is necessary for the delivery of the agreed services.</p>
              </section>

              <section id="confidentiality" className="legal-block">
                <h2>6. Confidentiality</h2>
                <p>Both parties agree to keep confidential all proprietary and sensitive information exchanged during the course of our engagement. This includes business strategies, financial information, campaign data and any other information designated as confidential.</p>
                <p>This obligation does not apply to information that is publicly available, independently developed, or required to be disclosed by law or regulation.</p>
              </section>

              <section id="data-protection" className="legal-block">
                <h2>7. Data Protection</h2>
                <p>Both parties agree to comply with all applicable data protection legislation, including the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.</p>
                <p>Where BLM Digital Limited processes personal data on your behalf, we act as a data processor. A Data Processing Agreement will be entered into where required by applicable law.</p>
                <p>For full details of how we handle personal data, please refer to our <a href="/privacy-policy">Privacy Policy</a>.</p>
              </section>

              <section id="liability" className="legal-block">
                <h2>8. Liability</h2>
                <p>To the fullest extent permitted by law:</p>
                <ul>
                  <li>BLM Digital Limited's total aggregate liability to you shall not exceed the fees paid in the three months preceding the claim</li>
                  <li>We exclude all liability for indirect, consequential or special losses, including loss of profit, loss of business or damage to reputation</li>
                  <li>We do not guarantee specific advertising performance outcomes, as results are subject to market conditions and platform policies beyond our control</li>
                  <li>We are not liable for changes to advertising platform policies, algorithms or pricing that affect campaign performance</li>
                </ul>
                <p>Nothing in these terms limits our liability for death or personal injury caused by negligence, fraud or any other liability that cannot be excluded by law.</p>
              </section>

              <section id="termination" className="legal-block">
                <h2>9. Termination</h2>
                <p>Either party may terminate the engagement by providing 30 days' written notice. In the event of material breach, either party may terminate immediately upon written notice.</p>
                <p>Upon termination:</p>
                <ul>
                  <li>All outstanding fees become immediately payable</li>
                  <li>You retain access to all advertising accounts and data</li>
                  <li>We will provide a reasonable handover to ensure continuity of your campaigns</li>
                  <li>Any ongoing fixed-term commitments entered into on your behalf must be honoured</li>
                </ul>
              </section>

              <section id="governing-law" className="legal-block">
                <h2>10. Governing Law</h2>
                <p>These Terms and Conditions are governed by and construed in accordance with the laws of England and Wales. Any disputes arising from or relating to these terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
              </section>

              <section id="changes-to-terms" className="legal-block">
                <h2>11. Changes to Terms</h2>
                <p>We reserve the right to modify these Terms and Conditions at any time. We will provide reasonable notice of material changes. Your continued use of our services following any changes constitutes acceptance of the revised terms.</p>
              </section>

              <section id="contact" className="legal-block">
                <h2>12. Contact</h2>
                <p>If you have any questions about these Terms and Conditions, please contact us:</p>
                <div className="legal-contact-box">
                  <p><strong>BLM Digital Limited</strong></p>
                  <p>Email: <a href="mailto:legal@blmdigital.com">legal@blmdigital.com</a></p>
                  <p>Phone: <a href="tel:+442012345678">+44 (0)20 1234 5678</a></p>
                  <p>Address: London, United Kingdom</p>
                </div>
              </section>
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}
