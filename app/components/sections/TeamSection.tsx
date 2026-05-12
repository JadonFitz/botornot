import FadeIn from '../FadeIn'

const departments = [
  'Cinematographer',
  'Production Designer',
  'Editor',
  'Composer',
  'Action Choreographer / 2nd Unit Director',
]

export default function TeamSection() {
  return (
    <section id="team" className="py-28 md:py-36 border-t border-line">
      <div className="max-w-[76rem] mx-auto px-6">
        <FadeIn>
          <p className="text-[11px] tracking-[0.3em] uppercase text-dim mb-5">§ 03 — The Team</p>
          <h2 className="font-serif font-normal text-fg leading-tight mb-8"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}>
            The Team
          </h2>
        </FadeIn>

        {/* Positioning frame */}
        <FadeIn delay={0.08}>
          <p className="text-fg text-base leading-[1.85] max-w-xl mb-16 pl-5 border-l-2 border-accent">
            Bot or Not is led by a director-actor and writer-lead pairing — a configuration
            acquisitions executives have publicly described as easier to work with than traditional
            filmmaker-only teams. Jadon and Meghan bring both sides of the camera to every decision.
          </p>
        </FadeIn>

        {/* Core team */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* Jadon */}
          <FadeIn delay={0.12}>
            <div>
              {/* PLACEHOLDER: Headshot — Jadon. Editorial portrait, monochrome-compatible, consistent crop. */}
              <div className="w-[200px] aspect-[3/4] bg-surface border border-line mb-6 flex items-center justify-center">
                <p className="text-dim text-[10px] text-center px-4 leading-relaxed">
                  [PLACEHOLDER: Headshot — Jadon Cal Fitzpatrick]
                </p>
              </div>
              <h3 className="font-serif text-xl text-fg mb-1">Jadon Cal Fitzpatrick</h3>
              <p className="text-[11px] tracking-[0.2em] uppercase text-accent mb-5">Director</p>
              {/* PLACEHOLDER: Final director bio — 80-120 words from existing pitch deck. */}
              <p className="text-dim text-sm leading-relaxed italic">
                [PLACEHOLDER: Director bio — 80–120 words. Key credits: <em>Off Rip</em> (Grand Jury
                Award, Gasparilla IFF 2025; U.S. Fiction Grand Jury, Orlando IFF),{' '}
                <em>Robbie Ain't Right No More</em> (Tribeca, Telluride Horror Show, multiple Best
                Supporting Actor wins), <em>Bloom</em> (Jackrabbit Studios — Cannes Market 2026,
                covered by Bloody Disgusting). Acting credits include work alongside Joey King, Mira
                Sorvino, Lee Majors, Danielle Harris.]
              </p>
            </div>
          </FadeIn>

          {/* Meghan */}
          <FadeIn delay={0.16}>
            <div>
              {/* PLACEHOLDER: Headshot — Meghan. Editorial portrait, monochrome-compatible, consistent crop. */}
              <div className="w-[200px] aspect-[3/4] bg-surface border border-line mb-6 flex items-center justify-center">
                <p className="text-dim text-[10px] text-center px-4 leading-relaxed">
                  [PLACEHOLDER: Headshot — Meghan Carrasquillo]
                </p>
              </div>
              <h3 className="font-serif text-xl text-fg mb-1">Meghan Carrasquillo</h3>
              <p className="text-[11px] tracking-[0.2em] uppercase text-accent mb-5">Writer / Lead</p>
              {/* PLACEHOLDER: Final writer/lead bio — 80-120 words. Meghan to provide. */}
              <p className="text-dim text-sm leading-relaxed italic">
                [PLACEHOLDER: Writer/lead bio — 80–120 words. Key credits: <em>Lookout</em> (Jackrabbit
                Studios, 2025), <em>I Am Your Biggest Fan</em> (Lifetime), <em>Bloom</em> (Jackrabbit
                Studios, 2026). Writer of the <em>Bot or Not</em> feature screenplay.]
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Producers / EPs */}
        <FadeIn delay={0.2}>
          <div className="border-t border-line pt-8 mb-8 max-w-3xl">
            <h3 className="text-[11px] tracking-[0.25em] uppercase text-dim mb-4">
              Producers / Executive Producers
            </h3>
            {/* PLACEHOLDER: Populate as packaging completes. New Terrain Creative LLC produces. */}
            <p className="text-dim italic text-sm">
              [PLACEHOLDER: To be filled as packaging completes. New Terrain Creative LLC produces.]
            </p>
          </div>
        </FadeIn>

        {/* Key departments */}
        <FadeIn delay={0.24}>
          <div className="border-t border-line pt-8 max-w-3xl">
            <h3 className="text-[11px] tracking-[0.25em] uppercase text-dim mb-5">
              Key Departments
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {departments.map((role) => (
                <div key={role} className="border border-line p-4">
                  <p className="text-[10px] tracking-wider uppercase text-dim mb-2">{role}</p>
                  <p className="text-dim italic text-xs">In Development</p>
                </div>
              ))}
            </div>
            <p className="text-dim text-xs mt-4">
              Note: Action choreographer / 2nd unit attachment carries equivalent strategic weight
              to cast at PG-13 action scale.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
