import FadeIn from '../FadeIn'

// Analytics as of July 4, 2026 — screenshots in data room. Update as numbers grow.
const demandStats = [
  {
    stat: '168K+',
    label: 'Reddit views in four days',
    note: '#2 post of the day on r/Filmmakers · 91.6% upvote ratio · 174 comments',
  },
  {
    stat: '11K',
    label: 'YouTube views in under a week',
    note: '138.5K impressions · 77.6% of views driven by YouTube’s own recommendations',
  },
  {
    stat: '8:55',
    label: 'Average view duration',
    note: 'On a 21-minute short — sustained engagement, not drive-by clicks',
  },
  {
    stat: 'US · CA · UK',
    label: 'Top audience territories',
    note: '~72% of viewers concentrated in primary buyer markets',
  },
]

const laurels = [
  { fest: 'Screamfest', note: 'World Premiere — TCL Chinese Theatre, 2025' },
  { fest: 'Lois Weber Film Festival', note: 'Winner — Best Sci-Fi' },
  { fest: 'FilmQuest', note: 'Nominee — Best Ensemble & Best Sci-Fi' },
]

export default function ShortSection() {
  return (
    <section id="short" className="py-28 md:py-36 border-t border-line">
      <div className="max-w-[76rem] mx-auto px-6">
        <FadeIn>
          <p className="text-[11px] tracking-[0.3em] uppercase text-dim mb-5">§ 04 — The Short</p>
          <h2 className="font-serif font-normal text-fg leading-tight mb-3"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}>
            The Proof of Concept
          </h2>
          <p className="text-dim text-base mb-14">Bot or Not began as a short film.</p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <FadeIn delay={0.08}>
              <p className="text-fg text-base leading-[1.85] mb-10">
                Bot or Not premiered at Screamfest at TCL Chinese Theatre in 2025, won Best Sci-Fi
                at the Lois Weber Film Festival, and was nominated for Best Ensemble and Best
                Sci-Fi at FilmQuest.
              </p>
            </FadeIn>

            <FadeIn delay={0.12}>
              <div className="mb-10">
                <h3 className="text-[11px] tracking-[0.25em] uppercase text-dim mb-5">
                  Festival Recognition
                </h3>
                <ul className="space-y-0">
                  {laurels.map((item, i) => (
                    <li
                      key={item.fest}
                      className={`flex items-start gap-4 py-4 ${i < laurels.length - 1 ? 'border-b border-line' : ''}`}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                      <div>
                        <p className="text-fg text-sm">{item.fest}</p>
                        <p className="text-dim text-xs mt-0.5">{item.note}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.16}>
              <div>
                <h3 className="text-[11px] tracking-[0.25em] uppercase text-dim mb-4">
                  Press Coverage
                </h3>
                {/* PLACEHOLDER: Additional press links — Bloody Disgusting, The Fan Carpet, etc. Jadon to provide URLs. */}
                <a
                  href="https://www.fangoria.com/bot-or-not-exclusive-trailer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <p className="text-fg text-sm group-hover:text-accent transition-colors duration-200">
                    Fangoria — Exclusive Trailer Debut →
                  </p>
                  <p className="text-dim text-xs mt-0.5">fangoria.com</p>
                </a>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.14}>
            <a
              href="https://youtu.be/LdkvaQd8ySc"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-video border border-line overflow-hidden"
              aria-label="Watch the Bot or Not short film on YouTube"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/trailer-poster.jpg"
                alt="Bot or Not — Short Film"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors duration-200" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="flex items-center justify-center bg-red-600"
                  style={{ width: 52, height: 44 }}
                >
                  <svg viewBox="0 0 10 12" fill="white" width={11} height={13} aria-hidden>
                    <polygon points="0,0 10,6 0,12" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-5 left-5 flex items-center gap-3 pointer-events-none">
                <span className="block w-4 h-px bg-red-600" />
                <span className="text-[10px] tracking-[0.28em] uppercase text-fg/75">
                  Watch the Short Film
                </span>
              </div>
            </a>
          </FadeIn>
        </div>

        {/* Proof of demand */}
        <FadeIn delay={0.1}>
          <div className="mt-24 border-t border-line pt-12">
            <h3 className="text-[11px] tracking-[0.25em] uppercase text-accent mb-3">
              Proof of Demand — 100% Organic
            </h3>
            <p className="text-fg text-base leading-[1.85] max-w-2xl mb-10">
              In late June 2026, the short was uploaded to YouTube and shared once on Reddit&rsquo;s
              r/Filmmakers. With zero paid spend, the post became the #2 post of the day and the
              audience followed the film across platforms — the demand question investors ask of
              any concept, answered with data.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line mb-10">
              {demandStats.map((item) => (
                <div key={item.label} className="bg-bg p-6">
                  <p className="font-serif text-3xl text-fg mb-2 whitespace-nowrap">{item.stat}</p>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-dim mb-3">
                    {item.label}
                  </p>
                  <p className="text-dim text-xs leading-relaxed">{item.note}</p>
                </div>
              ))}
            </div>

            <div className="max-w-2xl border-l-2 border-accent pl-5">
              <p className="text-fg text-sm leading-relaxed italic mb-2">
                &ldquo;Producer here. It looks really good, she should be proud&hellip; would
                highly recommend making (or sharing) a trailer or sizzle if it&rsquo;s to drum up
                interest for a feature.&rdquo;
              </p>
              <p className="text-dim text-xs">
                Top comment on the Reddit post — a working producer · 201 upvotes
              </p>
            </div>

            <p className="text-dim text-xs mt-8">
              Full platform analytics available in data room. Figures as of July 2026.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
