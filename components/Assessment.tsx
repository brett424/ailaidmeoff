import { Check } from 'lucide-react'

const benefits = [
  '12 honest questions',
  'Personalized result: Disoriented, Stabilizing, or Ready to Rebuild',
  '7-day email reset sequence included',
]

export default function Assessment() {
  return (
    <section
      id="assessment"
      className="bg-gradient-to-br from-gold/15 via-cream to-gold/10 py-20 lg:py-28 border-y border-gold/20"
      aria-labelledby="assessment-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section label */}
        <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-4">
          Free Assessment
        </p>

        {/* H2 */}
        <h2
          id="assessment-heading"
          className="text-navy text-3xl sm:text-4xl lg:text-5xl font-black mb-6 text-balance"
        >
          Find Out Exactly{' '}
          <span className="gold-underline">Where You Stand</span>
        </h2>

        {/* Subtext */}
        <p className="text-charcoal text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed text-balance">
          The &ldquo;What Now After AI?&rdquo; Scorecard is a 12-question assessment that tells you
          your transition readiness score — and what to do next based on where you actually are,
          not where you think you should be.
        </p>

        {/* Benefits Row */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center mb-12">
          {benefits.map((benefit) => (
            <div key={benefit} className="flex items-center gap-2.5">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-forest flex items-center justify-center">
                <Check size={11} strokeWidth={3} className="text-white" />
              </div>
              <span className="text-charcoal font-medium text-sm">{benefit}</span>
            </div>
          ))}
        </div>

        {/* Framing line */}
        <p className="text-charcoal/70 text-base italic max-w-xl mx-auto mb-8">
          This assessment was built for exactly what you&rsquo;re going through.
        </p>

        {/* CTA Button */}
        <a
          href="https://flourishinmidlife.com/what-now-scorecard?source=ailaidmeoff"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-10 py-4 bg-gold text-navy font-bold text-base rounded-md hover:bg-gold/90 active:scale-95 transition-all duration-200 shadow-lg shadow-gold/20 mb-6"
        >
          Take the Free &ldquo;What Now?&rdquo; Scorecard →
        </a>

        {/* Privacy note */}
        <p className="text-charcoal/50 text-sm">
          Your results are private. No spam. Just honest guidance.
        </p>

        {/* Skip to call */}
        <p className="text-charcoal/40 text-sm mt-3">
          Prefer to skip straight to a conversation?{' '}
          <a
            href="https://calendly.com/brett-flourishinmidlife/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold underline font-medium hover:text-gold/80 transition-colors"
          >
            Book a free 30-min strategy call directly.
          </a>
        </p>
      </div>
    </section>
  )
}
