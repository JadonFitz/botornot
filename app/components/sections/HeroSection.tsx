import FadeIn from '../FadeIn'

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background: swap this div for a <video> element once the short-film loop is available */}
      {/* <video
        autoPlay muted loop playsInline
        poster="/hero-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        aria-hidden="true"
      >
        <source src="/hero-loop.mp4" type="video/mp4" />
      </video> */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg/60 via-bg/30 to-bg pointer-events-none" />

      <div className="relative z-10 max-w-[76rem] mx-auto px-6 text-center">
        <FadeIn>
          <p className="text-[11px] tracking-[0.35em] uppercase text-dim mb-10">
            A feature film by Jadon Cal Fitzpatrick
          </p>
        </FadeIn>

        <FadeIn delay={0.12}>
          <h1 className="font-serif font-normal text-fg leading-none tracking-tight mb-10"
            style={{ fontSize: 'clamp(4.5rem, 13vw, 9.5rem)' }}>
            Bot or Not
          </h1>
        </FadeIn>

        <FadeIn delay={0.24}>
          {/* PLACEHOLDER: Tagline — short evocative line, not the full pitch. Jadon and Meghan to provide. */}
          <p className="text-dim text-sm tracking-wide max-w-sm mx-auto italic">
            [PLACEHOLDER: Tagline]
          </p>
        </FadeIn>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div className="w-px h-10 bg-gradient-to-b from-dim to-transparent" />
      </div>
    </section>
  )
}
