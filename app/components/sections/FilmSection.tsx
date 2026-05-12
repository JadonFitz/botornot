import FadeIn from '../FadeIn'

export default function FilmSection() {
  return (
    <section id="film" className="py-28 md:py-36 border-t border-line">
      <div className="max-w-[76rem] mx-auto px-6">
        <FadeIn>
          <p className="text-[11px] tracking-[0.3em] uppercase text-dim mb-5">§ 01 — The Film</p>
          <h2 className="font-serif font-normal text-fg leading-tight mb-14"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}>
            The Film
          </h2>
        </FadeIn>

        {/* 45-second anchor — the filter paragraph. Must answer: what / who / where / cost / status */}
        <FadeIn delay={0.08}>
          <div className="border-t border-line pt-8 pb-12 max-w-2xl">
            <p className="text-fg text-lg leading-[1.9] font-light">
              Bot or Not is a $5M PG-13 action-thriller written by Meghan Carrasquillo and directed
              by Jadon Cal Fitzpatrick. A war-veteran contestant fights to survive a televised
              survival system run by AI. Shooting in{' '}
              <span className="text-dim italic">[PLACEHOLDER: production geography]</span> in{' '}
              <span className="text-dim italic">[PLACEHOLDER: target year]</span>.
              Currently in development, with the proof-of-concept short film complete and
              festival-validated.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-14 max-w-4xl">
          <FadeIn delay={0.14}>
            <div>
              <h3 className="text-[11px] tracking-[0.25em] uppercase text-dim mb-4">Logline</h3>
              <p className="text-dim italic text-base leading-relaxed border-l-2 border-line pl-5">
                {/* PLACEHOLDER: Logline — one clean sentence. Jadon and Meghan to provide. */}
                [PLACEHOLDER: Logline]
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.18}>
            <div>
              <h3 className="text-[11px] tracking-[0.25em] uppercase text-dim mb-4">
                Reference Frame
              </h3>
              <p className="text-fg text-base leading-[1.8]">
                A $5M PG-13 action-thriller in the{' '}
                <em>Maze Runner</em> / <em>Hunger Games</em> lane at indie scale. Sci-fi/AI as world
                rule, not genre commitment. Female lead. Contestant-vs-system structure. War-vet
                emotional engine grounding sustained physical action.
              </p>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.22}>
          <div className="mt-12 p-6 border border-line max-w-lg">
            <h3 className="text-[11px] tracking-[0.25em] uppercase text-dim mb-3">
              The Audience Contract
            </h3>
            <p className="text-fg text-sm leading-relaxed">
              PG-13 action-thriller.{' '}
              <em>Companion</em>'s premise.{' '}
              <em>Maze Runner</em>'s tone.{' '}
              <em>Belko</em>'s structure — without the gore.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.26}>
          <div className="mt-12 max-w-2xl">
            <h3 className="text-[11px] tracking-[0.25em] uppercase text-dim mb-4">Synopsis</h3>
            {/* PLACEHOLDER: Story synopsis ~150-250 words. Meghan as writer to provide. */}
            <p className="text-dim italic text-base leading-relaxed">
              [PLACEHOLDER: Synopsis — Meghan Carrasquillo to provide, approximately 150–250 words.]
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
