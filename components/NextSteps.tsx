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
      "Job loss triggers financial fear — and fear leads to costly mistakes. Cashing out retirement accounts early, taking the first offer just for the paycheck, making decisions you'll regret. Before you touch your 401k or make any major money moves, let's have a quick conversation. I'll help you think it through and point you to the right resources.",
    linkHref: 'https://calendly.com/brett-flourishinmidlife/30min',
    linkLabel: "Let's think this through together",
  },
  {
    number: '03',
    title: 'Refresh Your Career Assets',
    description:
      "Your resume and LinkedIn need updating — but most people skip the harder step first: figuring out what story to tell. After a disruption like this, your professional identity has shifted. Before you rewrite a single bullet point, let's get clear on the narrative. The words follow from that.",
    linkHref: 'https://calendly.com/brett-flourishinmidlife/30min',
    linkLabel: "Let's find your story",
  },
  {
    number: '04',
    title: 'Build AI Fluency — Fast',
    description:
      "You don't need to become an engineer. I'm a psychologist who turned 65 and rebuilt an entire business using AI — starting from zero. The barrier isn't technical. It's psychological. If I can do it, I can show you the door. The rest is up to you.",
    linkHref: 'https://calendly.com/brett-flourishinmidlife/30min',
    linkLabel: "Let's talk about what's possible",
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
