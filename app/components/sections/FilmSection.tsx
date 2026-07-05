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
              Bot or Not is a contained sci-fi thriller written by Meghan Carrasquillo and
              directed by Jadon Cal Fitzpatrick. A $5M raise, fully capitalized through release —
              $3M for a 23-day production based at Lex Studios in Lexington, Kentucky, and $2M
              for marketing and a self-funded North American theatrical run. Currently in
              development, with the proof-of-concept short film complete and festival-validated.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-14 max-w-4xl">
          <FadeIn delay={0.14}>
            <div>
              <h3 className="text-[11px] tracking-[0.25em] uppercase text-dim mb-4">Logline</h3>
              <p className="text-fg italic text-base leading-relaxed border-l-2 border-line pl-5">
                A young coder enters a cutting-edge AI reality dating show, only to discover that
                survival, not love, will be her ultimate challenge.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.18}>
            <div>
              <h3 className="text-[11px] tracking-[0.25em] uppercase text-dim mb-4">The Goal</h3>
              <p className="text-fg text-base leading-[1.8]">
                A smart, contained sci-fi thriller built for scale with franchise potential at its
                core. Elevated, high-concept, commercial upside and sequel runway.
              </p>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.22}>
          <div className="mt-12 max-w-2xl">
            <h3 className="text-[11px] tracking-[0.25em] uppercase text-dim mb-4">Synopsis</h3>
            <p className="text-fg text-base leading-[1.9]">
              In a world where reality dating TV and AI collide, Juliet, a brilliant young coder,
              is chosen to compete on BOT OR NOT — a cutting-edge dating show where contestants
              date two people at once: one human, the other a hyper-realistic AI robot. What begins
              as a thrilling experiment in love quickly spirals into a high-stakes game when Juliet
              realizes the show&rsquo;s true algorithm was never written for romance — it was
              designed to manipulate, test, and control. As lines blur and trust unravels, Juliet
              must decide what&rsquo;s real, who to believe, and how far she&rsquo;s willing to go
              to escape the system.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.26}>
          <div className="mt-12 max-w-2xl">
            <h3 className="text-[11px] tracking-[0.25em] uppercase text-dim mb-4">
              Tone &amp; Style
            </h3>
            <p className="text-dim text-base leading-[1.9]">
              Set in 2040, the world is sleek, high-tech, and seemingly perfected by advanced AI
              and robotics — polished cities, autonomous vehicles, holographic interfaces woven
              into daily life. The film balances futuristic elegance with high-stakes action,
              combining tense, suspenseful sequences with thrilling physical challenges. A
              visually stunning world that masks a deadly game underneath.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-12 grid sm:grid-cols-2 gap-px bg-line border border-line max-w-2xl">
            <div className="bg-bg p-6">
              <h3 className="text-[11px] tracking-[0.25em] uppercase text-dim mb-3">
                Creative Comps
              </h3>
              <p className="text-fg text-sm leading-relaxed">
                <em>The Hunger Games</em> · <em>Divergent</em>
              </p>
            </div>
            <div className="bg-bg p-6">
              <h3 className="text-[11px] tracking-[0.25em] uppercase text-dim mb-3">
                Financial Comps
              </h3>
              <p className="text-fg text-sm leading-relaxed">
                <em>Companion</em> · <em>Ex Machina</em>
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.34}>
          <div className="mt-12 p-6 border border-line max-w-2xl">
            <h3 className="text-[11px] tracking-[0.2em] uppercase text-accent mb-3">The Purpose</h3>
            <p className="text-fg text-sm leading-[1.85]">
              Bot or Not explores our growing dependence on technology and asks a deeper question:
              what do we do when convenience replaces connection? In a world consumed by machinery
              and artificial intelligence, the film reminds us that genuine human connection and
              community have always been enough — and still are.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
