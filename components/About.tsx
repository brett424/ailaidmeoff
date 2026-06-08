import { ExternalLink } from 'lucide-react'

const credentials = [
  'PhD — Positive Psychology',
  'PCC (ICF Certified)',
  'Author & Speaker',
  '20+ Years Coaching',
]

export default function About() {
  return (
    <section
      id="about"
      className="bg-cream py-20 lg:py-28"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Image placeholder — shown second on mobile */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <img
              src="/brett-headshot.png"
              alt="Dr. Brett Blair, PhD"
              className="w-full max-w-sm rounded-lg border-2 border-gold object-cover shadow-lg"
            />
          </div>

          {/* Right: Bio — shown first on mobile */}
          <div className="order-1 lg:order-2">
            {/* Label */}
            <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-4">
              About Dr. Brett Blair
            </p>

            {/* H2 */}
            <h2
              id="about-heading"
              className="text-navy text-3xl sm:text-4xl lg:text-5xl font-black mb-8 text-balance"
            >
              I&rsquo;ve Been Where You Are.{' '}
              <span className="text-forest">More Than Once.</span>
            </h2>

            {/* Bio paragraphs */}
            <div className="flex flex-col gap-5 mb-8">
              <p className="text-charcoal text-base leading-relaxed">
                I&rsquo;m a psychologist, executive coach, and researcher who has navigated layoff,
                divorce, major loss, and multiple complete reinventions — including walking away
                from a 20-year corporate career at 45, earning a PhD at 60, and rebuilding my
                life after the death of my wife.
              </p>
              <p className="text-charcoal text-base leading-relaxed">
                My doctoral research focused on the lived experience of mid-career professionals
                who go through a layoff and successfully come back. I interviewed 11 men who went
                through exactly what you&rsquo;re facing. Every single one ended up saying it was
                the best thing that ever happened to them — but not without doing the real work
                first.
              </p>
              <p className="text-charcoal text-base leading-relaxed font-medium">
                I&rsquo;m not selling optimism. I&rsquo;m offering a map built from research and
                hard-won experience.
              </p>
            </div>

            {/* Credential Badges */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              {credentials.map((cred) => (
                <span
                  key={cred}
                  className="inline-block px-3 py-1.5 bg-navy/5 border border-navy/15 text-navy text-xs font-semibold rounded-full"
                >
                  {cred}
                </span>
              ))}
            </div>

            {/* External Link */}
            <a
              href="https://flourishinmidlife.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-forest font-semibold text-sm hover:text-forest/70 transition-colors duration-200"
            >
              Visit my main practice &rarr; flourishinmidlife.com
              <ExternalLink size={14} strokeWidth={2} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
