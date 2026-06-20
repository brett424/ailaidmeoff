import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Disclaimer | AI Laid Me Off',
  description: 'Disclaimer for ailaidmeoff.com and flourishinmidlife.com — coaching vs. therapy, financial information, results, and affiliate disclosures.',
}

export default function DisclaimerPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="bg-navy pt-24 pb-16 text-center px-4">
          <p className="text-gold text-xs font-bold tracking-widest uppercase mb-3">Legal</p>
          <h1 className="font-serif text-4xl text-white mb-3">Disclaimer</h1>
          <p className="text-white/40 text-sm">Effective Date: June 20, 2026</p>
        </section>

        {/* Content */}
        <section className="bg-cream">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20">

            <div className="bg-white border-l-4 border-gold rounded-r-lg p-6 mb-12">
              <p className="text-charcoal text-base leading-relaxed">
                Please read this Disclaimer carefully before using these sites or engaging with any content,
                programs, or services offered by Dr. Brett A. Blair, PhD, PCC. It exists to protect both of
                us and to ensure you have a clear, accurate understanding of what I offer and what I do not.
              </p>
            </div>

            <LegalSection title="1. Coaching Is Not Therapy">
              <p>
                The coaching services, content, courses, and programs offered on <strong>flourishinmidlife.com</strong> and{' '}
                <strong>ailaidmeoff.com</strong> are provided by Dr. Brett A. Blair in his capacity as a certified
                executive coach (PCC, International Coach Federation).
              </p>
              <p>
                Although Dr. Blair holds a doctoral degree in psychology, he is <strong>not acting as a psychologist,
                licensed therapist, counselor, or mental health professional</strong> on these sites. Coaching is a
                distinct and separate practice from psychotherapy, clinical counseling, or mental health treatment.
                It is not a substitute for professional mental health care.
              </p>
              <p>
                Nothing on these sites — including courses, emails, articles, the scorecard, or any other content —
                constitutes a therapeutic relationship, clinical diagnosis, psychological assessment, or mental health advice.
              </p>
              <div className="bg-navy rounded-xl p-6 my-4">
                <p className="text-white/85">
                  <strong className="text-gold">If you are in crisis:</strong> If you are experiencing a mental
                  health emergency, thoughts of self-harm or suicide, severe depression, or any acute psychological
                  distress, please contact a licensed mental health professional immediately or call the{' '}
                  <strong className="text-gold">988 Suicide and Crisis Lifeline</strong> (call or text 988 in the US).
                </p>
              </div>
            </LegalSection>

            <LegalSection title="2. Not Financial or Legal Advice">
              <p>
                Nothing on these sites constitutes financial, investment, legal, tax, or accounting advice. I am not
                a licensed financial advisor, investment broker, attorney, accountant, or financial planner.
              </p>
              <p>
                Any references to financial products, services, strategies, or resources — including on{' '}
                <strong>ailaidmeoff.com</strong> — are for general informational and educational purposes only.
                They reflect my personal research and perspective, not professional financial guidance tailored
                to your specific situation.
              </p>
              <p>
                Before making any financial decisions — particularly in response to a job loss, career transition,
                or significant life change — please consult a qualified and licensed financial advisor, attorney,
                or other appropriate professional.
              </p>
            </LegalSection>

            <LegalSection title="3. No Guarantee of Results">
              <p>
                Coaching and educational content can be powerful catalysts for growth and change. However,{' '}
                <strong>results are not guaranteed</strong> and will vary from person to person based on many factors
                including individual effort, commitment, life circumstances, background, and variables entirely
                outside my control.
              </p>
              <p>
                The outcomes described in any testimonials, case studies, course descriptions, or marketing
                materials are individual results achieved by specific people under specific circumstances.
                They are not a promise, guarantee, or representation that you will achieve the same or similar results.
              </p>
            </LegalSection>

            <LegalSection title="4. Testimonials">
              <p>
                Testimonials and client stories shared on these sites reflect the genuine experiences of past
                clients or readers. They represent individual results and are not typical outcomes. Results you
                may experience will depend on your own unique circumstances, effort, and commitment.
              </p>
              <p>
                In accordance with FTC guidelines, I do not make any representations that these results are
                typical or that you should expect similar outcomes.
              </p>
            </LegalSection>

            <LegalSection title="5. Educational and Informational Content Only">
              <p>
                All articles, emails, videos, scorecard results, course materials, and other content on these
                sites are provided for <strong>educational and informational purposes only</strong>. This content
                is not professional advice of any kind — psychological, medical, financial, legal, or otherwise —
                and is not a substitute for individualized professional consultation appropriate to your specific situation.
              </p>
            </LegalSection>

            <LegalSection title="6. Affiliate and Referral Disclosure">
              <p>
                In compliance with FTC regulations, I disclose that some links on these sites — particularly on{' '}
                <strong>ailaidmeoff.com</strong> — may be affiliate or referral links. If you click a link and
                subsequently make a purchase or sign up for a service, I may receive a commission or referral
                fee at no additional cost to you.
              </p>
              <p>
                I only recommend products and services I have personally reviewed and genuinely believe may be
                helpful to people navigating career and life transitions. My editorial opinions are my own and
                are not influenced by affiliate relationships.
              </p>
            </LegalSection>

            <LegalSection title="7. No Professional Relationship From Website Use">
              <p>
                Visiting these sites, reading content, completing the scorecard, downloading resources, receiving
                email communications, or commenting on any content does <strong>not</strong> create a coaching
                relationship, professional relationship, or any contractual relationship between you and Dr. Brett Blair.
              </p>
              <p>
                A formal coaching engagement is established only through a mutually signed coaching agreement.
              </p>
            </LegalSection>

            <LegalSection title="8. External Links">
              <p>
                These sites may contain links to third-party websites provided for convenience and reference.
                I do not control, endorse, or take responsibility for the content, accuracy, privacy practices,
                or opinions expressed on any third-party websites. Visiting a linked site is at your own risk.
              </p>
            </LegalSection>

            <LegalSection title="9. Accuracy of Information">
              <p>
                I make every reasonable effort to ensure that information on these sites is accurate, current,
                and helpful. However, I make no warranties or representations — express or implied — about the
                completeness, accuracy, reliability, suitability, or timeliness of any information provided.
                Circumstances change, and information that was accurate at time of publication may become outdated.
              </p>
            </LegalSection>

            <LegalSection title="10. Limitation of Liability">
              <p>
                To the fullest extent permitted by applicable law, Dr. Brett A. Blair, PhD, PCC and Flourish
                in Midlife shall not be liable for any direct, indirect, incidental, consequential, or punitive
                damages arising from your use of — or inability to use — these sites, their content, or any
                services offered, even if advised of the possibility of such damages.
              </p>
            </LegalSection>

            <LegalSection title="11. Changes to This Disclaimer">
              <p>
                I reserve the right to modify or update this Disclaimer at any time. The "Effective Date" at
                the top of this page reflects when it was last updated. Continued use of these sites after any
                changes constitutes your acceptance of the updated Disclaimer.
              </p>
            </LegalSection>

            <LegalSection title="12. Contact">
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
