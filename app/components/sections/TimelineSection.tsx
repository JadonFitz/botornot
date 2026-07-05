import FadeIn from '../FadeIn'

const phases = [
  {
    phase: 'Funds Close',
    current: true,
    items: ['Raise closes — triggers everything', 'AFM foreign presales follow (Nov)'],
    date: 'Sept – Oct 2026',
  },
  {
    phase: 'KEDFA Application',
    current: false,
    items: ['Engage staff 45 days ahead', 'Incentive approval targeted January'],
    date: 'Oct 2026 → Jan 2027',
  },
  {
    phase: 'Pre-Production',
    current: false,
    items: ['VAD / Unreal environments — full 8–12 wks', 'Name cast closes', 'Crew attachments'],
    date: 'Jan – Mar 2027',
  },
  {
    phase: 'Shoot',
    current: false,
    items: ['23 days ≈ 5 weeks', 'Spring KY weather for warzone / rooftop exteriors'],
    date: 'April – May 2027',
  },
  {
    phase: 'Post-Production',
    current: false,
    items: ['Picture lock ~Sept', 'VFX the long pole — 200–300 shots', 'Sound & DI through fall'],
    date: 'June 2027 – Jan 2028',
  },
  {
    phase: 'Premiere',
    current: false,
    items: ['SXSW or Fantastic Fest', 'Path decided at picture lock'],
    date: 'March or Sept 2028',
  },
  {
    phase: 'Theatrical',
    current: false,
    items: ['Stage-gated NA release', 'Rides the festival laurels while press is warm'],
    date: '4–8 wks after premiere',
  },
  {
    phase: 'PVOD / TVOD',
    current: false,
    items: ['Theatrical spend compounds here'],
    date: '45–60 days post-theatrical',
  },
  {
    phase: 'KY Credit Lands',
    current: false,
    items: ['Recycles into P&A expansion or returns to investors'],
    date: 'Mid-2028 – 2029',
  },
]

export default function TimelineSection() {
  return (
    <section id="timeline" className="py-28 md:py-36 border-t border-line">
      <div className="max-w-[76rem] mx-auto px-6">
        <FadeIn>
          <p className="text-[11px] tracking-[0.3em] uppercase text-dim mb-5">§ 09 — Timeline</p>
          <h2 className="font-serif font-normal text-fg leading-tight mb-6"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}>
            Timeline
          </h2>
          <p className="text-fg text-base leading-[1.85] max-w-2xl mb-14 pl-5 border-l-2 border-accent">
            Mapped backwards from release — the release date is the decision that disciplines
            everything else. The one date promised to investors: a 2028 release.
          </p>
        </FadeIn>

        {/* Desktop: horizontal scroll */}
        <div className="hidden md:flex gap-0 overflow-x-auto pb-6">
          {phases.map((item, i) => (
            <FadeIn key={item.phase} delay={0.04 + i * 0.05}>
              <div className="flex flex-col pr-6 min-w-[160px]">
                <div className="flex items-center mb-5">
                  <div
                    className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${item.current ? 'bg-accent' : 'border border-dim bg-transparent'}`}
                  />
                  {i < phases.length - 1 && (
                    <div className={`h-px flex-1 min-w-[32px] ${item.current ? 'bg-accent/40' : 'bg-line'}`} />
                  )}
                </div>
                <p
                  className={`text-[11px] tracking-[0.18em] uppercase mb-1.5 ${item.current ? 'text-accent' : 'text-dim'}`}
                >
                  {item.phase}
                </p>
                <p className="text-dim text-[10px] italic mb-2">{item.date}</p>
                <ul className="space-y-1">
                  {item.items.map((line) => (
                    <li key={line} className="text-dim text-[11px]">
                      · {line}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Mobile: vertical */}
        <div className="md:hidden space-y-0">
          {phases.map((item, i) => (
            <FadeIn key={item.phase} delay={0.04 + i * 0.04}>
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-2.5 h-2.5 rounded-full flex-shrink-0 mt-0.5 ${item.current ? 'bg-accent' : 'border border-dim bg-transparent'}`}
                  />
                  {i < phases.length - 1 && (
                    <div className="w-px flex-1 min-h-10 bg-line mt-1" />
                  )}
                </div>
                <div className="pb-8">
                  <p
                    className={`text-[11px] tracking-[0.18em] uppercase mb-1 ${item.current ? 'text-accent' : 'text-dim'}`}
                  >
                    {item.phase}
                  </p>
                  <p className="text-dim text-[10px] italic mb-2">{item.date}</p>
                  <ul className="space-y-0.5">
                    {item.items.map((line) => (
                      <li key={line} className="text-dim text-xs">
                        · {line}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* The premiere fork */}
        <FadeIn delay={0.1}>
          <div className="mt-20 max-w-4xl">
            <h3 className="text-[11px] tracking-[0.25em] uppercase text-accent mb-6">
              The Premiere Fork — Two Legitimate Paths
            </h3>
            <div className="grid md:grid-cols-2 gap-px bg-line border border-line mb-8">
              <div className="bg-bg p-7">
                <p className="text-[10px] tracking-[0.25em] uppercase text-dim mb-2">Path A</p>
                <h4 className="font-serif text-xl text-fg mb-1">SXSW — March 2028</h4>
                <p className="text-dim text-xs mb-4">Submit late October 2027 · rough cuts accepted</p>
                <p className="text-dim text-sm leading-[1.8]">
                  An AI-paranoia thriller at SXSW is thematically home — that audience and press
                  corps live at the film/tech intersection, and &ldquo;which one is the
                  bot&rdquo; is a headline the trades write themselves. Theatrical follows
                  April/May into the post-Oscar counterprogramming window, PVOD by summer — and
                  investors reach revenue roughly six months faster.
                </p>
              </div>
              <div className="bg-bg p-7">
                <p className="text-[10px] tracking-[0.25em] uppercase text-dim mb-2">Path B</p>
                <h4 className="font-serif text-xl text-fg mb-1">Fantastic Fest — Sept 2028</h4>
                <p className="text-dim text-xs mb-4">The genre-establishment launchpad</p>
                <p className="text-dim text-sm leading-[1.8]">
                  Deeply aligned with the short&rsquo;s Screamfest / FilmQuest / Fangoria
                  pedigree. Theatrical lands in the October genre corridor — spooky-season
                  counterprogramming without competing against pure horror — and PVOD hits the
                  November–December holiday buying surge, the single best transactional window
                  of the year. Stronger commercial sequencing; six more months of carry.
                </p>
              </div>
            </div>
            <p className="text-dim text-sm leading-[1.85] max-w-2xl">
              The plan: build for both, decide at picture lock. Submit to SXSW in October 2027
              with the best cut in hand — if accepted, the film premieres at the perfect
              thematic festival and recoups early; if not, it finishes at full polish and aims
              for the fall 2028 genre circuit, where the October theatrical window is arguably
              stronger anyway. The only cost of keeping both paths open is a submission fee.
            </p>
          </div>
        </FadeIn>

        {/* Markets that don't wait for the film */}
        <FadeIn delay={0.12}>
          <div className="mt-14 max-w-4xl border border-line p-6">
            <h3 className="text-[11px] tracking-[0.25em] uppercase text-dim mb-4">
              Two Rooms That Don&rsquo;t Wait for the Film
            </h3>
            <p className="text-fg text-sm leading-[1.85]">
              <span className="text-accent">AFM, November 2026</span> — two months after funds
              close, before a frame is shot. With the name attached and the short&rsquo;s
              laurels, foreign presales can close real money against territories and directly
              de-risk the raise.{' '}
              <span className="text-accent">Cannes Marché, May 2027</span> — hits right as the
              shoot wraps; a promo reel cut from dailies goes to market while the film is still
              in camera.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
