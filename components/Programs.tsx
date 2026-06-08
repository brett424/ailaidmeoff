import { Check } from 'lucide-react'

interface ProgramCardProps {
  badge: string
  badgeStyle: 'default' | 'featured' | 'coaching'
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
    coaching: 'bg-white/10 text-white/70',
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
          ? 'border-gold/50 bg-navy/80 shadow-2xl shadow-gold/10 scale-105 z-10'
          : 'border-white/10 bg-navy/40 hover:border-white/20'
      }`}
    >
      {/* Badge */}
      <span
        className={`inline-block self-start px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 ${badgeClasses[badgeStyle]}`}
      >
        {badge}
      </span>

      {/* Title */}
      <h3 className="text-white text-xl font-black mb-2">{title}</h3>

      {/* Price */}
      <p className={`text-2xl sm:text-3xl font-black mb-4 ${featured ? 'text-gold' : 'text-white'}`}>
        {price}
      </p>

      {/* Description */}
      <p className="text-white/70 text-sm leading-relaxed mb-6 flex-1">{description}</p>

      {/* Features */}
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

      {/* CTA */}
      <a
        href={ctaHref}
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
        <p className="text-white/60 text-base sm:text-lg mb-16 max-w-xl">
          Built from research and lived experience — not theory.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {/* Card 1: Flourishing Resilience */}
          <ProgramCard
            badge="Self-Paced Course"
            badgeStyle="default"
            title="Flourishing Resilience"
            price="$97"
            description="Six focused video sessions and a PDF workbook built around the science of resilience. The frameworks and tools I've used with coaching clients navigating exactly this kind of transition."
            features={[
              '6 video modules',
              'Workbook + exercises',
              'Lifetime access',
            ]}
            ctaLabel="Enroll Now →"
            ctaStyle="forest"
            ctaHref="#"
          />

          {/* Card 2: When a Chapter Ends — Featured */}
          <ProgramCard
            badge="Most Comprehensive"
            badgeStyle="featured"
            title="When a Chapter Ends"
            price="$997"
            description="A deep, structured program for working through the identity questions, meaning questions, and design questions this transition forces you to answer. This isn't stabilizing — this is rebuilding."
            features={[
              '8 video modules',
              'Workbook + assessments',
              'Private community access',
              'Live Q&A session',
            ]}
            ctaLabel="Learn More →"
            ctaStyle="gold"
            ctaHref="#"
            featured
          />

          {/* Card 3: 1:1 Coaching */}
          <ProgramCard
            badge="Private Coaching"
            badgeStyle="coaching"
            title="1:1 Coaching"
            price="Starting at $1,500/mo"
            description="One-on-one work with Dr. Blair directly. For the person who is ready to do the real work with someone who has walked the path — multiple times."
            features={[
              'Weekly 60-min sessions',
              'Unlimited async support',
              'Custom action plan',
            ]}
            ctaLabel="Apply Now →"
            ctaStyle="forest-alt"
            ctaHref="#"
          />
        </div>
      </div>
    </section>
  )
}
