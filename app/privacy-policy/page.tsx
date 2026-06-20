import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | AI Laid Me Off',
  description: 'Privacy Policy for ailaidmeoff.com and flourishinmidlife.com — how Dr. Brett Blair collects, uses, and protects your personal information.',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="bg-navy pt-24 pb-16 text-center px-4">
          <p className="text-gold text-xs font-bold tracking-widest uppercase mb-3">Legal</p>
          <h1 className="font-serif text-4xl text-white mb-3">Privacy Policy</h1>
          <p className="text-white/40 text-sm">Effective Date: June 20, 2026</p>
        </section>

        {/* Content */}
        <section className="bg-cream">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20">

            <div className="bg-white border-l-4 border-gold rounded-r-lg p-6 mb-12">
              <p className="text-charcoal text-base leading-relaxed">
                Your privacy matters to me. This policy explains exactly what personal information I collect,
                how I use it, and what rights you have — in plain English, without legalese.
              </p>
            </div>

            <LegalSection title="1. Who This Policy Covers">
              <p>
                This Privacy Policy applies to both of my websites: <strong>flourishinmidlife.com</strong> and{' '}
                <strong>ailaidmeoff.com</strong>, collectively operated by Dr. Brett A. Blair, PhD, PCC.
                By using either site, you agree to the practices described here.
              </p>
            </LegalSection>

            <LegalSection title="2. What Information I Collect">
              <p className="font-semibold text-charcoal mb-2">Information you provide directly:</p>
              <ul>
                <li><strong>Name and email address</strong> — when you complete the Transition Readiness Scorecard or contact me</li>
                <li><strong>Scorecard responses</strong> — your answers to the 12 questions about your life transition, used to determine your result and personalize follow-up content</li>
                <li><strong>Payment information</strong> — when you purchase a course; this is handled entirely by Stripe and Podia; I do not store your card details</li>
                <li><strong>Messages</strong> — anything you send through the contact form</li>
              </ul>
              <p className="font-semibold text-charcoal mb-2 mt-4">Information collected automatically:</p>
              <ul>
                <li><strong>Website usage data</strong> via Google Analytics — pages visited, time on site, general geographic region, device type, and referral source</li>
                <li><strong>Cookies</strong> — small files placed on your device by Google Analytics to distinguish users and sessions</li>
              </ul>
            </LegalSection>

            <LegalSection title="3. How I Use Your Information">
              <ul>
                <li>To send your scorecard results and a follow-up email sequence designed to help you navigate your transition</li>
                <li>To deliver online courses you have purchased</li>
                <li>To send coaching content, articles, and newsletters — only with your consent, and you can unsubscribe anytime</li>
                <li>To respond to questions or inquiries you send me</li>
                <li>To understand how visitors use my sites so I can improve them</li>
                <li>To stop sending nurture emails once you have purchased a course</li>
              </ul>
            </LegalSection>

            <LegalSection title="4. Third-Party Services I Use">
              <p>I rely on the following trusted service providers. Each has its own privacy policy governing how it handles data:</p>
              <ul>
                <li><strong>MailerLite</strong> — manages email subscriptions and automated sequences</li>
                <li><strong>Google Analytics</strong> — website traffic analytics</li>
                <li><strong>Google Sheets</strong> — stores scorecard responses for my internal review</li>
                <li><strong>Stripe</strong> — processes course payments securely (PCI-DSS compliant)</li>
                <li><strong>Podia</strong> — course delivery platform</li>
                <li><strong>Netlify</strong> — website hosting and form processing</li>
              </ul>
              <p className="mt-3">I do not sell, rent, or trade your personal information to any third party for marketing purposes.</p>
            </LegalSection>

            <LegalSection title="5. Email Marketing">
              <p>
                If you complete the scorecard or sign up for emails, you will be added to my mailing list and
                receive coaching content related to life transitions. All emails comply with the CAN-SPAM Act.
                You can <strong>unsubscribe at any time</strong> by clicking the unsubscribe link in any email.
                I honor all unsubscribe requests promptly.
              </p>
            </LegalSection>

            <LegalSection title="6. Affiliate and Referral Links">
              <p>
                Some links on these sites — particularly on ailaidmeoff.com — may be affiliate or referral links.
                If you click such a link and make a purchase or sign up for a service, I may receive compensation
                at no additional cost to you. This is disclosed in accordance with FTC guidelines. I only recommend
                services I have personally evaluated and believe are genuinely helpful.
              </p>
            </LegalSection>

            <LegalSection title="7. Cookies">
              <p>
                Google Analytics places cookies on your device to collect anonymous usage data. You can disable
                cookies in your browser settings at any time without affecting your ability to use the sites.
                You can also opt out of Google Analytics by installing the Google Analytics Opt-out Browser Add-on.
              </p>
            </LegalSection>

            <LegalSection title="8. Data Security">
              <p>
                I take reasonable technical and organizational measures to protect your personal information.
                Course payments are processed by Stripe using industry-standard encryption and PCI-DSS compliance.
                However, no method of internet transmission is 100% secure, and I cannot guarantee absolute security.
              </p>
            </LegalSection>

            <LegalSection title="9. Data Retention">
              <p>
                I retain your personal information for as long as necessary to provide services and comply
                with applicable laws. If you unsubscribe from emails, your address is removed from active
                mailing lists. You may request deletion of your data at any time by contacting me.
              </p>
            </LegalSection>

            <LegalSection title="10. Children's Privacy">
              <p>
                These sites are intended for adults 18 years of age and older. I do not knowingly collect
                personal information from anyone under 18. If you believe a minor has submitted personal
                information, please contact me and I will delete it.
              </p>
            </LegalSection>

            <LegalSection title="11. Your Rights">
              <div className="bg-navy rounded-xl p-6 mb-4">
                <h3 className="text-gold font-semibold mb-3">European Union Residents — GDPR</h3>
                <ul className="text-white/80">
                  <li>Access the personal data I hold about you</li>
                  <li>Correct inaccurate or incomplete data</li>
                  <li>Request deletion of your data ("right to be forgotten")</li>
                  <li>Restrict or object to how I process your data</li>
                  <li>Data portability (receive your data in a structured format)</li>
                  <li>Withdraw consent at any time without affecting prior processing</li>
                  <li>Lodge a complaint with your local data protection authority</li>
                </ul>
              </div>
              <div className="bg-navy rounded-xl p-6">
                <h3 className="text-gold font-semibold mb-3">California Residents — CCPA</h3>
                <ul className="text-white/80">
                  <li>Know what personal information is collected and how it is used</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt out of the sale of personal information (I do not sell personal information)</li>
                  <li>Non-discrimination for exercising your rights</li>
                </ul>
              </div>
              <p className="mt-4">
                To exercise any of these rights, contact me at{' '}
                <a href="mailto:brett@flourishinmidlife.com" className="text-navy underline hover:text-gold transition-colors">
                  brett@flourishinmidlife.com
                </a>.
              </p>
            </LegalSection>

            <LegalSection title="12. Links to Other Websites">
              <p>
                These sites may contain links to third-party websites for convenience and reference. I am not
                responsible for the privacy practices or content of those sites and encourage you to read their
                privacy policies before providing any personal information.
              </p>
            </LegalSection>

            <LegalSection title="13. Changes to This Policy">
              <p>
                I may update this Privacy Policy from time to time. The "Effective Date" at the top reflects
                when it was last updated. Continued use of the sites after any changes constitutes acceptance
                of the updated policy.
              </p>
            </LegalSection>

            <LegalSection title="14. Contact">
              <p>
                <strong>Dr. Brett A. Blair, PhD, PCC</strong><br />
                <a href="mailto:brett@flourishinmidlife.com" className="text-navy underline hover:text-gold transition-colors">
                  brett@flourishinmidlife.com
                </a><br />
                flourishinmidlife.com &nbsp;·&nbsp; ailaidmeoff.com
              </p>
            </LegalSection>

          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="font-serif text-xl text-navy mb-4 pb-2 border-b-2 border-gold">{title}</h2>
      <div className="text-charcoal text-base leading-relaxed space-y-3 [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:space-y-2 [&_strong]:font-semibold [&_strong]:text-charcoal">
        {children}
      </div>
    </div>
  )
}
