import FadeIn from '../FadeIn'

interface SelfReleaseComp {
  title: string
  year: string
  multiple: string
  multipleNote: string
  rows: { label: string; value: string }[]
  takeaway: string
}

const selfReleaseComps: SelfReleaseComp[] = [
  {
    title: 'Iron Lung',
    year: '2026',
    multiple: '~17×',
    multipleNote: 'worldwide gross vs. production budget',
    rows: [
      { label: 'Production budget', value: '$3–4.5M' },
      { label: 'Worldwide gross', value: '$51.2M' },
      { label: 'Domestic opening weekend', value: '$18.2M' },
      { label: 'Screens', value: '~3,000 · self-distributed (Markiplier Studios)' },
      { label: 'Traditional marketing spend', value: 'Near zero · direct-to-audience' },
    ],
    takeaway:
      'Recouped ~400% of its budget in the first three days. A contained sci-fi / cosmic-horror thriller (single location: submarine) at almost exactly Bot or Not’s production scale, proving self-distribution can hold 3,000+ screens and beat studio holdovers.',
  },
  {
    title: 'Sound of Freedom',
    year: '2023',
    multiple: '~17×',
    multipleNote: 'worldwide gross vs. production budget',
    rows: [
      { label: 'Production budget', value: '$14.5M' },
      { label: 'Worldwide gross', value: '$251M' },
      { label: 'Domestic opening', value: '$18.2M weekend · $40M first six days' },
      { label: 'Distribution', value: 'Angel Studios (indie), outside the studio system' },
      { label: 'Marketing model', value: 'Grassroots + audience-funded P&A' },
    ],
    takeaway:
      'A standalone original thriller with no franchise equity and no studio P&A that out-grossed same-week studio tentpoles and became the first independent film past $100M post-COVID. Proof an owned theatrical release can turn event status into nine-figure grosses.',
  },
]

export default function MarketSection() {
  return (
    <section id="market" className="py-28 md:py-36 border-t border-line">
      <div className="max-w-[76rem] mx-auto px-6">
        <FadeIn>
          <p className="text-[11px] tracking-[0.3em] uppercase text-dim mb-5">§ 07 · Market</p>
          <h2 className="font-serif font-normal text-fg leading-tight mb-14"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}>
            Why Now?
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
                meaningfully wider than R: Pay-1, international, and family-co-viewing audiences
                all expand. Bot or Not sits in the <em>Hunger Games</em> / <em>Divergent</em>{' '}
                creative lane, with <em>Companion</em> and <em>Ex Machina</em> as financial-scale
                comps: smart, contained sci-fi with proven economics.
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
                Vertical Entertainment, approximately 70 acquisitions per year, has publicly stated
                its priority genres as action, thriller, sci-fi, and horror, with MG capacity reaching
                seven figures for theatrical-tier projects.
              </p>
              <p className="text-fg text-sm leading-[1.9] mb-4">
                Radial Entertainment, consolidating Shout!, Gravitas, and FilmRise into a 70,000-title
                library, has publicly named action, thriller, and sci-fi as three of its five priority
                genres, with MGs from $300–500K at the lower end to seven figures at the higher end.
              </p>
              <p className="text-fg text-sm leading-[1.9] mb-5">
                North American Pay-1 has stabilized across 150+ active licensees. Starz, Paramount+,
                Netflix, and Cineverse are all active in the genre.
              </p>
              <div className="flex flex-wrap gap-2">
                {['~70 acq/yr · Vertical', '70K titles · Radial', '150+ licensees'].map((stat) => (
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
                The short film exists, and it answers the single largest question financiers ask
                of sci-fi-adjacent projects: what could this look like? The visual world, tonal
                grammar, and lead performance are already on screen at festival-winning quality,
                built on a micro budget. The feature steps everything up on every level: a $3M
                production with LED volume work, purpose-built stage worlds, 200&ndash;300 VFX
                shots, and name cast members. The short is the floor, not the ceiling.
              </p>
              <div className="border border-line p-4">
                <p className="text-[10px] tracking-[0.2em] uppercase text-accent mb-2">
                  Festival Validated
                </p>
                <p className="text-dim text-xs leading-relaxed">
                  Screamfest · Lois Weber Best Sci-Fi · FilmQuest Ensemble &amp; Sci-Fi Nominee
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Self-release comps */}
        <FadeIn delay={0.1}>
          <div className="mt-24 max-w-4xl border-t border-line pt-12">
            <h3 className="text-[11px] tracking-[0.25em] uppercase text-accent mb-3">
              The Self-Release Precedent
            </h3>
            <p className="text-fg text-base leading-[1.85] max-w-2xl mb-10">
              Independent films that kept distribution in-house have repeatedly outperformed the
              studio model on a return basis: own the release, keep the film rental, let
              theatrical event status compound into digital.
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              {selfReleaseComps.map((comp) => (
                <div key={comp.title} className="border border-line p-6">
                  <div className="flex items-baseline justify-between gap-4 mb-5">
                    <p className="font-serif text-xl text-fg">
                      {comp.title} <span className="text-dim text-sm">({comp.year})</span>
                    </p>
                    <div className="text-right">
                      <p className="font-serif text-3xl text-accent leading-none">{comp.multiple}</p>
                      <p className="text-dim text-[10px] mt-1">{comp.multipleNote}</p>
                    </div>
                  </div>
                  <div>
                    {comp.rows.map((row, i) => (
                      <div
                        key={row.label}
                        className={`flex items-baseline justify-between gap-4 py-2 ${i < comp.rows.length - 1 ? 'border-b border-line' : ''}`}
                      >
                        <span className="text-dim text-xs">{row.label}</span>
                        <span className="text-fg text-xs text-right">{row.value}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-dim text-xs leading-relaxed mt-5">{comp.takeaway}</p>
                </div>
              ))}
            </div>
            <p className="text-fg text-sm leading-[1.85] max-w-2xl mt-8 pl-5 border-l-2 border-accent">
              The honest caveat: Iron Lung opened with a creator&rsquo;s 38M-subscriber audience,
              and Sound of Freedom mobilized a pre-organized grassroots base. Bot or Not assumes
              neither. That is exactly what the fully-funded $2M paid-media budget is engineered
              to buy: the audience reach these films started with, purchased at market rates
              and deployed through the same stage-gated self-release playbook. And where Iron
              Lung was R-rated, Bot or Not&rsquo;s PG-13 sci-fi widens every downstream window it
              monetized.
            </p>
            <p className="text-dim text-xs leading-relaxed mt-4 max-w-2xl">
              Sources: publicly reported box office and budget figures (Box Office Mojo /
              The Numbers / trade press). Outlier outcomes shown as existence proofs of the
              self-release lane, not as projections for this film.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
