import { ArrowRight } from 'lucide-react'

const skillResources = [
  {
    title: 'Google Career Certificates',
    description:
      'Industry-recognized credentials in data, project management, and more. Free with financial aid.',
    href: '#',
  },
  {
    title: 'Coursera AI Fundamentals',
    description:
      'Structured AI courses from Stanford, DeepLearning.AI, and Google. Start free.',
    href: '#',
  },
  {
    title: 'LinkedIn Learning',
    description:
      'Curated paths for mid-career professionals pivoting into AI-adjacent roles.',
    href: '#',
  },
  {
    title: 'Prompting & ChatGPT Mastery',
    description:
      'Practical courses on using AI tools as a professional superpower.',
    href: '#',
  },
]

const financialResources = [
  {
    title: 'Severance Negotiation Guide',
    description:
      'Most professionals leave money on the table. Know your leverage before you sign anything.',
    href: '#',
  },
  {
    title: 'Unemployment Benefits',
    description:
      'State-by-state guide to filing quickly and maximizing your benefit period.',
    href: '#',
  },
  {
    title: 'COBRA & Health Coverage',
    description:
      "Understanding your options so healthcare doesn't become a crisis on top of a crisis.",
    href: '#',
  },
  {
    title: 'Emergency Fund Planning',
    description:
      'How to build a 90-day financial runway even when you&rsquo;re scared.',
    href: '#',
  },
]

interface ResourceCardProps {
  title: string
  description: string
  href: string
  accentColor: 'forest' | 'gold'
}

function ResourceCard({ title, description, href, accentColor }: ResourceCardProps) {
  return (
    <article className="bg-white rounded-lg p-6 border border-charcoal/10 hover:border-charcoal/20 hover:shadow-md transition-all duration-200 group">
      <h4 className="text-navy font-semibold text-base mb-2 leading-snug">{title}</h4>
      <p className="text-charcoal/70 text-sm leading-relaxed mb-4">{description}</p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 group-hover:gap-2.5 ${
          accentColor === 'forest' ? 'text-forest hover:text-forest/80' : 'text-gold hover:text-gold/80'
        }`}
      >
        Explore
        <ArrowRight size={13} strokeWidth={2.5} />
      </a>
    </article>
  )
}

export default function Resources() {
  return (
    <section
      id="resources"
      className="bg-cream py-20 lg:py-28"
      aria-labelledby="resources-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-4">
          Curated Resources
        </p>

        {/* H2 */}
        <h2
          id="resources-heading"
          className="text-navy text-3xl sm:text-4xl lg:text-5xl font-black mb-14 max-w-2xl text-balance"
        >
          Tools to Help You{' '}
          <span className="gold-underline">Move Forward</span>
        </h2>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Skill Building */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block w-3 h-3 rounded-full bg-forest" aria-hidden="true" />
              <h3 className="text-forest text-sm font-bold uppercase tracking-widest">
                Skill Building
              </h3>
            </div>
            <div className="flex flex-col gap-4">
              {skillResources.map((resource) => (
                <ResourceCard
                  key={resource.title}
                  title={resource.title}
                  description={resource.description}
                  href={resource.href}
                  accentColor="forest"
                />
              ))}
            </div>
          </div>

          {/* Right Column: Financial Guidance */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block w-3 h-3 rounded-full bg-gold" aria-hidden="true" />
              <h3 className="text-charcoal text-sm font-bold uppercase tracking-widest">
                Financial Guidance
              </h3>
            </div>
            <div className="flex flex-col gap-4">
              {financialResources.map((resource) => (
                <ResourceCard
                  key={resource.title}
                  title={resource.title}
                  description={resource.description}
                  href={resource.href}
                  accentColor="gold"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
