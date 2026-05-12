import FadeIn from '../FadeIn'

const laurels = [
  { fest: 'Screamfest', note: 'World Premiere — TCL Chinese Theatre, 2025' },
  { fest: 'Lois Weber Film Festival', note: 'Winner — Best Sci-Fi' },
  { fest: 'FilmQuest', note: 'Nominee — Best Ensemble' },
]

export default function ShortSection() {
  return (
    <section id="short" className="py-28 md:py-36 border-t border-line">
      <div className="max-w-[76rem] mx-auto px-6">
        <FadeIn>
          <p className="text-[11px] tracking-[0.3em] uppercase text-dim mb-5">§ 02 — The Short</p>
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
                at the Lois Weber Film Festival, and was nominated for Best Ensemble at FilmQuest.
                The short proves the world, the tone, and the visual approach — closing the question
                buyers and investors most often ask of sci-fi-adjacent projects:{' '}
                <em>"What does it look like?"</em>
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
                {/* PLACEHOLDER: Press links — Fangoria trailer drop, Bloody Disgusting, The Fan Carpet, additional. Jadon to provide URLs. */}
                <p className="text-dim italic text-sm leading-relaxed">
                  [PLACEHOLDER: Press links — Fangoria exclusive trailer drop; additional outlets. Jadon to provide.]
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.14}>
            {/* PLACEHOLDER: Trailer embed — Jadon to provide Vimeo/YouTube URL from arthousecollective.xyz */}
            <div className="aspect-video bg-surface border border-line flex items-center justify-center">
              <div className="text-center px-8">
                <p className="text-dim text-xs tracking-[0.2em] uppercase mb-2">Official Trailer</p>
                <p className="text-dim italic text-xs leading-relaxed">
                  [PLACEHOLDER: Embed URL from arthousecollective.xyz — Jadon to provide]
                </p>
              </div>
            </div>
            {/* Actual embed — uncomment when URL is available:
            <div className="aspect-video">
              <iframe
                src="https://player.vimeo.com/video/XXXX?autoplay=0&title=0&byline=0&portrait=0"
                title="Bot or Not — Official Trailer"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            */}
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
