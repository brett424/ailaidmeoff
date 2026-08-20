import { Check } from 'lucide-react'

interface ProgramCardProps {
  badge: string
  badgeStyle: 'default' | 'featured' | 'gold'
  title: string
  price: string
  description: string
  features: string[]
  ctaLabel: string
  ctaStyle: 'forest' | 'gold' | 'forest-alt'
  ctaHref: string
  featured?: boolean
}

function ProgramCard({
  badge,
  badgeStyle,
  title,
  price,
  description,
  features,
  ctaLabel,
  ctaStyle,
  ctaHref,
  featured = false,
}: ProgramCardProps) {
  const badgeClasses = {
    default: 'bg-white/10 text-white/70',
    featured: 'bg-gold text-navy',
    gold: 'bg-gold text-navy',
  }

  const ctaClasses = {
    forest: 'bg-forest text-white hover:bg-forest/90',
    gold: 'bg-gold text-navy hover:bg-gold/90',
    'forest-alt': 'bg-forest text-white hover:bg-forest/90',
  }

  return (
    <article
      className={`relative flex flex-col rounded-2xl p-8 border transition-all duration-300 ${
        featured
          ? 'border-gold/50 bg-navy/80 shadow-2xl shadow-gold/10'
          : 'border-white/10 bg-navy/40 hover:border-white/20'
      }`}
    >
      <span
        className={`inline-block self-start px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 ${badgeClasses[badgeStyle]}`}
      >
        {badge}
      </span>

      <h3 className="text-white text-xl font-black mb-2">{title}</h3>

      <p className={`text-2xl sm:text-3xl font-black mb-4 ${featured ? 'text-gold' : 'text-white'}`}>
        {price}
      </p>

      <p className="text-white/70 text-sm leading-relaxed mb-6 flex-1">{description}</p>

      <ul className="flex flex-col gap-2.5 mb-8">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5">
            <Check
              size={16}
              strokeWidth={2.5}
              className={`mt-0.5 shrink-0 ${featured ? 'text-gold' : 'text-white/50'}`}
            />
            <span className="text-white/80 text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href={ctaHref}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-full text-center px-6 py-3.5 rounded-lg font-semibold text-sm transition-all duration-200 active:scale-95 ${ctaClasses[ctaStyle]}`}
      >
        {ctaLabel}
      </a>
    </article>
  )
}

export default function Programs() {
  return (
    <section
      id="programs"
      className="bg-navy py-20 lg:py-28"
      aria-labelledby="programs-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-4">
          Work With Me
        </p>

        {/* H2 */}
        <h2
          id="programs-heading"
          className="text-white text-3xl sm:text-4xl lg:text-5xl font-black mb-4 max-w-2xl text-balance"
        >
          My Proven Programs
        </h2>

        {/* Subtext */}
        <p className="text-white/60 text-base sm:text-lg mb-12 max-w-xl">
          Built from research and lived experience — not theory.
        </p>

        {/* Premium Referral Module */}
        <div className="mb-12 p-8 sm:p-10 rounded-2xl border border-gold/30 bg-gradient-to-br from-white/5 to-gold/5">
          <p className="text-gold text-xs font-bold tracking-widest uppercase mb-3">
            Private Coaching for High-Stakes Transitions
          </p>
          <h3 className="text-white text-2xl sm:text-3xl font-black mb-4 leading-tight max-w-2xl">
            Facing a consequential leadership, business, or career decision?
          </h3>
          <p className="text-white/70 text-base leading-relaxed max-w-2xl mb-6">
            For executives, founders, entrepreneurs, and accomplished leaders who want a rigorous
            private thought partner, Brett offers a limited number of six-month coaching
            engagements through Too Young to Be Done.
          </p>
          <a
            href="https://tooyoungtobedone.com/coaching"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-7 py-3.5 bg-gold text-navy font-bold text-sm rounded-lg hover:bg-gold/90 active:scale-95 transition-all duration-200 shadow-lg shadow-gold/20"
          >
            Explore Private Coaching →
          </a>
        </div>

        {/* Divider */}
        <p className="text-white/25 text-xs font-semibold tracking-widest uppercase text-center mb-10">
          — Self-Paced Resources —
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch max-w-3xl mx-auto">
          {/* Card 1: When a Chapter Ends */}
          <ProgramCard
            badge="Most Comprehensive"
            badgeStyle="featured"
            title="When a Chapter Ends"
            price="$997"
            description="Structured self-paced guidance for people who want to do the real work of transition — identity, meaning, direction — before or alongside whatever comes next. Six modules. Honest frameworks. No optimism for its own sake."
            features={[
              '6 video modules',
              'Workbook included',
              'Lifetime access',
              '1 private coaching session with Brett — $1,500 value (included free)',
              'Flourishing Resilience course — $97 value (included free)',
            ]}
            ctaLabel="Learn More →"
            ctaStyle="gold"
            ctaHref="https://flourishinmidlife.com/wace-landing-page"
            featured
          />

          {/* Card 2: Flourishing Resilience */}
          <ProgramCard
            badge="Self-Paced Course"
            badgeStyle="default"
            title="Flourishing Resilience"
            price="$97"
            description="Six focused video sessions and a PDF workbook built around the science of resilience. A practical resource for people who want structured, self-paced guidance through the psychological work of transition — on their own schedule, without a group."
            features={[
              '6 video modules',
              'Private reflection workbook',
              'Lifetime access',
              '100% private — no group sharing or public boards',
              'Fully self-paced — no deadlines or live sessions',
            ]}
            ctaLabel="Learn More →"
            ctaStyle="forest"
            ctaHref="https://flourishinmidlife.com/flourishing-resilience?source=ailaidmeoff"
          />
        </div>
      </div>
    </section>
  )
}
