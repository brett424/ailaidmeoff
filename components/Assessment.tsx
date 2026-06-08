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

        {/* Tally Embed */}
        <div className="bg-white rounded-2xl shadow-xl shadow-navy/10 border border-charcoal/10 overflow-hidden mb-8">
          <iframe
            src="https://tally.so/embed/Gx585j"
            width="100%"
            height="500"
            frameBorder={0}
            title="What Now After AI? Scorecard Assessment"
            loading="lazy"
            allowFullScreen
          />
        </div>

        {/* Privacy note */}
        <p className="text-charcoal/50 text-sm">
          Your results are private. No spam. Just honest guidance.
        </p>
      </div>
    </section>
  )
}
