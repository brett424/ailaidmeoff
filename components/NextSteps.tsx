import { ArrowRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Process the Loss First',
    description:
      "What you're feeling is grief, not weakness. The research is clear: professionals who skip the emotional work stall out. Give yourself permission to feel the loss before you rush to fix it.",
    linkHref: '#assessment',
    linkLabel: 'Take the free assessment',
  },
  {
    number: '02',
    title: 'Secure Your Financial Foundation',
    description:
      "Severance, unemployment insurance, COBRA, and emergency fund — in that order. Don't let panic drive decisions. Get a clear 90-day runway before making any major career moves.",
    linkHref: 'https://calendly.com/brett-flourishinmidlife/30min',
    linkLabel: 'Map your 90-day runway',
  },
  {
    number: '03',
    title: 'Refresh Your Career Assets',
    description:
      "Your resume, LinkedIn profile, and portfolio need an AI-era upgrade. Reframe your experience around outcomes, not job duties. Keywords matter more than ever.",
    linkHref: 'https://calendly.com/brett-flourishinmidlife/30min',
    linkLabel: 'Get a resume & LinkedIn review',
  },
  {
    number: '04',
    title: 'Build AI Fluency — Fast',
    description:
      "You don't need to become an engineer. You need to become someone who uses AI confidently. Two hours a week for 90 days can transform how employers see you.",
    linkHref: null,
    linkLabel: null,
  },
  {
    number: '05',
    title: 'Redesign Your Next Chapter',
    description:
      "This is not the time for desperation. It is the time for intentionality. What do you actually want the next chapter to look like? That question deserves a real answer.",
    linkHref: 'https://calendly.com/brett-flourishinmidlife/30min',
    linkLabel: "Let's design your next chapter",
  },
]

export default function NextSteps() {
  return (
    <section
      id="next-steps"
      className="bg-forest py-20 lg:py-28"
      aria-labelledby="next-steps-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-4">
          Action Plan
        </p>

        {/* H2 */}
        <h2
          id="next-steps-heading"
          className="text-white text-3xl sm:text-4xl lg:text-5xl font-black mb-4 max-w-2xl text-balance"
        >
          Five Things to Do{' '}
          <span className="text-gold">Right Now</span>
        </h2>

        {/* Subtext */}
        <p className="text-white/70 text-base sm:text-lg max-w-2xl mb-14 leading-relaxed">
          Before you update your LinkedIn or send a single application, do these five things first.
        </p>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => {
            const isLastOdd = steps.length % 3 !== 0 && index === steps.length - 1
            return (
              <article
                key={step.number}
                className={`bg-navy rounded-xl p-8 flex flex-col gap-4 border border-white/5 hover:border-gold/30 transition-colors duration-300 group ${
                  isLastOdd ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''
                }`}
              >
                {/* Number */}
                <span className="text-gold text-5xl font-black leading-none select-none">
                  {step.number}
                </span>

                {/* Title */}
                <h3 className="text-white text-lg font-bold leading-snug">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-white/70 text-sm leading-relaxed flex-1">
                  {step.description}
                </p>

                {/* Link */}
                {step.linkHref && step.linkLabel && (
                  <a
                    href={step.linkHref}
                    target={step.linkHref.startsWith('http') ? '_blank' : undefined}
                    rel={step.linkHref.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-1.5 text-gold text-sm font-semibold group-hover:gap-2.5 transition-all duration-200 mt-auto"
                  >
                    {step.linkLabel}
                    <ArrowRight size={14} strokeWidth={2.5} />
                  </a>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
