import { ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center bg-navy overflow-hidden"
      aria-label="Hero section"
    >
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 bg-[url('/placeholder-hero.svg')] bg-repeat opacity-5"
        aria-hidden="true"
      />

      {/* Diagonal gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-navy via-navy/95 to-forest/80"
        aria-hidden="true"
      />

      {/* Radial glow accent */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-gold/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32 pt-40">
        {/* Eyebrow */}
        <p className="inline-block text-gold text-xs sm:text-sm font-semibold tracking-widest uppercase mb-6 px-4 py-1.5 border border-gold/30 rounded-full">
          For Professionals Navigating AI Displacement
        </p>

        {/* H1 */}
        <h1 className="font-black text-white text-5xl sm:text-6xl lg:text-7xl leading-tight mb-6 text-balance">
          AI Laid Me Off.
          <br />
          <span className="text-gold">Now What?</span>
        </h1>

        {/* Subheadline */}
        <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed text-balance">
          You&rsquo;re not broken. The game changed. Here&rsquo;s the practical,
          psychology-backed path forward from a psychologist and coach who&rsquo;s been there.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
          <a
            href="#assessment"
            className="inline-flex items-center px-8 py-4 bg-gold text-navy font-bold text-base rounded-md hover:bg-gold/90 active:scale-95 transition-all duration-200 shadow-lg shadow-gold/20 w-full sm:w-auto justify-center"
          >
            Take the Free &ldquo;What Now?&rdquo; Assessment
          </a>
          <a
            href="#reality"
            className="inline-flex items-center px-8 py-4 border-2 border-white/60 text-white font-semibold text-base rounded-md hover:border-white hover:bg-white/10 active:scale-95 transition-all duration-200 w-full sm:w-auto justify-center"
          >
            Learn More
          </a>
        </div>

        {/* Trust Strip */}
        <p className="text-white/50 text-sm font-medium tracking-wide">
          Dr. Brett A. Blair, PhD&nbsp;&nbsp;&middot;&nbsp;&nbsp;PCC Certified Coach&nbsp;&nbsp;&middot;&nbsp;&nbsp;20+ Years Experience
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a
          href="#reality"
          aria-label="Scroll to next section"
          className="flex flex-col items-center gap-1 text-gold/70 hover:text-gold transition-colors duration-200 animate-bounce"
        >
          <ChevronDown size={28} strokeWidth={2.5} />
        </a>
      </div>
    </section>
  )
}
