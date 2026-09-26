export default function Video() {
  return (
    <section
      className="bg-navy border-t border-gold/10 py-20 lg:py-28"
      aria-label="Introduction video"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-6">
          A Personal Note From Brett
        </p>

        {/* Heading */}
        <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-black mb-6 text-balance">
          Let&rsquo;s find your next step.
        </h2>

        {/* Gold rule */}
        <div className="w-12 h-0.5 bg-gold mx-auto mb-8" aria-hidden="true" />

        {/* Intro copy */}
        <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto mb-12 leading-relaxed text-balance">
          A personal introduction from Dr. Brett Blair for professionals navigating
          AI-driven career disruption and uncertainty about what comes next.
        </p>

        {/* 16:9 responsive video */}
        <div
          className="relative w-full overflow-hidden rounded-xl shadow-2xl shadow-black/50 mb-12"
          style={{ paddingBottom: '56.25%' }}
        >
          <video
            src="/assets/video/intro.mp4"
            poster="/assets/video/intro-poster-v2.jpg"
            controls
            playsInline
            preload="none"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
            aria-label="An introduction to AI Laid Me Off with Dr. Brett Blair"
          >
            Your browser does not support embedded video.{' '}
            <a href="/assets/video/intro.mp4">Watch Brett&rsquo;s introduction.</a>
          </video>
        </div>

        {/* CTA — same destination as hero assessment button */}
        <a
          href="#assessment"
          className="inline-flex items-center px-8 py-4 bg-gold text-navy font-bold text-base rounded-md hover:bg-gold/90 active:scale-95 transition-all duration-200 shadow-lg shadow-gold/20"
        >
          Take the Free &ldquo;What Now?&rdquo; Assessment
        </a>
      </div>
    </section>
  )
}
