export default function Reality() {
  return (
    <section
      id="reality"
      className="bg-cream py-20 lg:py-28"
      aria-labelledby="reality-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-4">
          The Reality
        </p>

        {/* H2 */}
        <h2
          id="reality-heading"
          className="text-navy text-3xl sm:text-4xl lg:text-5xl font-black mb-12 max-w-2xl text-balance"
        >
          This Isn&rsquo;t About You.{' '}
          <span className="gold-underline">The Game Changed.</span>
        </h2>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
          {/* Stat 1 */}
          <div className="border-l-4 border-gold pl-6">
            <p className="text-navy text-4xl sm:text-5xl font-black mb-2">14M+</p>
            <p className="text-charcoal text-sm leading-relaxed">
              U.S. workers projected to need to change occupations by 2030 due to automation and AI.{' '}
              <a
                href="https://www.mckinsey.com/featured-insights/future-of-work/the-future-of-work-after-covid-19"
                target="_blank"
                rel="noopener noreferrer"
                className="text-forest underline underline-offset-2 hover:text-forest/70 transition-colors"
              >
                McKinsey Global Institute, 2021
              </a>
            </p>
          </div>

          {/* Stat 2 */}
          <div className="border-l-4 border-gold pl-6">
            <p className="text-navy text-4xl sm:text-5xl font-black mb-2">~40%</p>
            <p className="text-charcoal text-sm leading-relaxed">
              Of global employment is exposed to AI — with higher-income economies facing greater
              disruption.{' '}
              <a
                href="https://www.imf.org/en/Blogs/Articles/2024/01/14/ai-will-transform-the-global-economy-lets-make-sure-it-benefits-humanity"
                target="_blank"
                rel="noopener noreferrer"
                className="text-forest underline underline-offset-2 hover:text-forest/70 transition-colors"
              >
                IMF, 2024
              </a>
            </p>
          </div>
        </div>

        {/* Gold Divider */}
        <div className="border-t-2 border-gold/30 mb-16" aria-hidden="true" />

        {/* Personal Story Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Photo */}
          <div className="flex flex-col items-center lg:items-start">
            <img
              src="/brett-headshot.jpg"
              alt="Dr. Brett A. Blair"
              className="w-full max-w-sm aspect-square object-cover object-top rounded-xl shadow-2xl shadow-navy/40"
            />
          </div>

          {/* Right: Story */}
          <div>
            {/* Pull quote */}
            <blockquote className="border-l-4 border-gold pl-6 mb-8">
              <p className="text-navy text-2xl sm:text-3xl font-bold italic leading-snug text-balance">
                &ldquo;I know what it feels like to watch the floor disappear.&rdquo;
              </p>
            </blockquote>

            {/* Story paragraph */}
            <p className="text-charcoal text-base sm:text-lg leading-relaxed mb-6">
              In 2009, I walked away from a 20-year corporate career. I know what it means to
              sit in the dark and ask: <em>what happened to me?</em> I&rsquo;ve spent the years
              since earning a PhD studying men who went through exactly this — and then rebuilding
              my own life multiple times. I&rsquo;m not here to give you a pep talk. I&rsquo;m
              here to give you a map.
            </p>

            {/* Byline */}
            <p className="text-charcoal/70 font-semibold text-sm mb-10">
              &mdash; Dr. Brett A. Blair, PhD
            </p>

            {/* Reassurance */}
            <div className="bg-forest/5 border border-forest/20 rounded-lg p-6">
              <p className="text-navy text-lg sm:text-xl font-semibold leading-relaxed text-balance">
                You are not behind.{' '}
                <span className="text-forest">You are not broken.</span>{' '}
                You are in transition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
