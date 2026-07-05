import FadeIn from '../FadeIn'

export default function MarketSection() {
  return (
    <section id="market" className="py-28 md:py-36 border-t border-line">
      <div className="max-w-[76rem] mx-auto px-6">
        <FadeIn>
          <p className="text-[11px] tracking-[0.3em] uppercase text-dim mb-5">§ 07 — Market</p>
          <h2 className="font-serif font-normal text-fg leading-tight mb-14"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}>
            Why This Film. Why Now.
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-0 md:divide-x divide-line">
          {/* The Genre Lane */}
          <FadeIn delay={0.08}>
            <div className="md:pr-10 pb-10 md:pb-0 border-b md:border-b-0 border-line">
              <h3 className="text-[11px] tracking-[0.25em] uppercase text-dim mb-5 pb-4 border-b border-line">
                The Genre Lane
              </h3>
              <p className="text-fg text-sm leading-[1.9]">
                High-concept sci-fi thriller travels internationally and remains a consistent
                global driver at the indie scale. The PG-13 commitment keeps the buyer ladder
                meaningfully wider than R — Pay-1, international, and family-co-viewing audiences
                all expand. Bot or Not sits in the <em>Hunger Games</em> / <em>Divergent</em>{' '}
                creative lane, with <em>Companion</em> and <em>Ex Machina</em> as financial-scale
                comps — smart, contained sci-fi with proven economics.
              </p>
            </div>
          </FadeIn>

          {/* The Buyer Landscape */}
          <FadeIn delay={0.12}>
            <div className="md:px-10 py-10 md:py-0 border-b md:border-b-0 border-line">
              <h3 className="text-[11px] tracking-[0.25em] uppercase text-dim mb-5 pb-4 border-b border-line">
                The Buyer Landscape
              </h3>
              <p className="text-fg text-sm leading-[1.9] mb-4">
                Vertical Entertainment — approximately 70 acquisitions per year — has publicly stated
                its priority genres as action, thriller, sci-fi, and horror, with MG capacity reaching
                seven figures for theatrical-tier projects.
              </p>
              <p className="text-fg text-sm leading-[1.9] mb-4">
                Radial Entertainment — consolidating Shout!, Gravitas, and FilmRise into a 70,000-title
                library — has publicly named action, thriller, and sci-fi as three of its five priority
                genres, with MGs from $300–500K at the lower end to seven figures at the higher end.
              </p>
              <p className="text-fg text-sm leading-[1.9] mb-5">
                North American Pay-1 has stabilized across 150+ active licensees. Starz, Paramount+,
                Netflix, and Cineverse are all active in the genre.
              </p>
              <div className="flex flex-wrap gap-2">
                {['~70 acq/yr — Vertical', '70K titles — Radial', '150+ licensees'].map((stat) => (
                  <span
                    key={stat}
                    className="text-[10px] tracking-wide text-accent border border-accent/30 px-2.5 py-1"
                  >
                    {stat}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Proof-of-Concept Advantage */}
          <FadeIn delay={0.16}>
            <div className="md:pl-10 pt-10 md:pt-0">
              <h3 className="text-[11px] tracking-[0.25em] uppercase text-dim mb-5 pb-4 border-b border-line">
                The Proof-of-Concept Advantage
              </h3>
              <p className="text-fg text-sm leading-[1.9] mb-6">
                The short film exists. Buyers and investors do not have to imagine what Bot or Not
                looks like. The visual world, tonal grammar, and lead performance are already on
                screen — at festival-winning quality. This closes the single largest question
                financiers ask of sci-fi-adjacent projects.
              </p>
              <div className="border border-line p-4">
                <p className="text-[10px] tracking-[0.2em] uppercase text-accent mb-2">
                  Festival Validated
                </p>
                <p className="text-dim text-xs leading-relaxed">
                  Screamfest · Lois Weber Best Sci-Fi · FilmQuest Ensemble Nominee
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
