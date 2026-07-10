import FadeIn from '../FadeIn'

const departments = [
  'Cinematographer',
  'Production Designer',
  'Editor',
  'Composer',
]

export default function TeamSection() {
  return (
    <section id="team" className="py-28 md:py-36 border-t border-line">
      <div className="max-w-[76rem] mx-auto px-6">
        <FadeIn>
          <p className="text-[11px] tracking-[0.3em] uppercase text-dim mb-5">§ 05 · The Team</p>
          <h2 className="font-serif font-normal text-fg leading-tight mb-8"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}>
            The Team
          </h2>
        </FadeIn>

        {/* Positioning frame */}
        <FadeIn delay={0.08}>
          <p className="text-fg text-base leading-[1.85] max-w-xl mb-16 pl-5 border-l-2 border-accent">
            Bot or Not is led by a director / creative strategist and writer / lead pairing, a
            configuration acquisitions executives have publicly described as easier to work with
            than traditional filmmaker-only teams. This is Jadon and Meghan&rsquo;s sixth film
            together in an ongoing creative partnership that spans many collaborations. Together
            they run New Terrain Creative, a professional media and production house telling
            stories for clients across many industries.
          </p>
        </FadeIn>

        {/* Core team */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* Jadon */}
          <FadeIn delay={0.12}>
            <div>
              <div className="w-[200px] aspect-[3/4] border border-line mb-6 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/jadon-headshot.jpg"
                  alt="Jadon Cal Fitzpatrick"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-xl text-fg mb-1">Jadon Cal Fitzpatrick</h3>
              <p className="text-[11px] tracking-[0.2em] uppercase text-accent mb-5">
                Director / Creative Strategist
              </p>
              <p className="text-dim text-sm leading-relaxed">
                Jadon Cal Fitzpatrick builds films from the ground up, having written, starred
                in, directed, and edited his own projects with a hands-on command that gives his
                work a raw, personal intensity. His sophomore feature <em>Off Rip</em> (2025) won the
                Grand Jury Award at the Gasparilla International Film Festival and the U.S.
                Fiction Grand Jury Award at the Orlando International Film Festival. As
                co-director of the <em>Bot or Not</em> short, he helped drive the project to a
                Best Sci-Fi award at the Lois Weber Film Festival, a Best Ensemble &amp; Sci-Fi
                nomination at FilmQuest, a Fangoria-exclusive trailer launch, and an LA premiere
                at Screamfest&rsquo;s 25th anniversary at the TCL Chinese Theatre. With years on
                both sides of the camera, including a Tribeca-premiering performance that earned
                multiple Best Actor wins, he directs with an actor&rsquo;s instinct for truth and
                a filmmaker&rsquo;s eye for tension.
              </p>
            </div>
          </FadeIn>

          {/* Meghan */}
          <FadeIn delay={0.16}>
            <div>
              <div className="w-[200px] aspect-[3/4] border border-line mb-6 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/meghan-headshot.jpg"
                  alt="Meghan Carrasquillo"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-xl text-fg mb-1">Meghan Carrasquillo</h3>
              <p className="text-[11px] tracking-[0.2em] uppercase text-accent mb-5">Writer / Lead</p>
              <p className="text-dim text-sm leading-relaxed">
                Drawn to bold, magnetic characters, Meghan brings a grounded, emotionally precise
                presence to leading roles across film and television. Recent projects include{' '}
                <em>Stiletto</em>, acquired by Eli Roth for a 2026 wide theatrical release, in
                which she stars as &ldquo;Headphones&rdquo; alongside Academy Award nominee
                Colleen Camp. She also leads the psychological thriller <em>Bloom</em>, currently
                being packaged for Cannes, stars in the drama <em>Four</em> opposite Spencer
                Breslin and Stacey Dash, and previously starred in Lionsgate&rsquo;s{' '}
                <em>Devilreaux</em>, solidifying her presence in the studio horror space. In
                addition to acting, Meghan writes, directs, and produces original features,
                bringing a filmmaker&rsquo;s eye to every performance. She is currently developing
                multiple elevated genre films, continuing to establish herself as a distinctive
                voice both in front of and behind the camera.
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
            <p className="text-dim text-sm leading-relaxed">
              New Terrain Creative produces. Key producing team additions in development; to be
              announced as packaging completes.
            </p>
          </div>
        </FadeIn>

        {/* Stunt / action team */}
        <FadeIn delay={0.22}>
          <div className="border-t border-line pt-8 mb-8 max-w-3xl">
            <div className="flex items-baseline gap-4 mb-4 flex-wrap">
              <h3 className="text-[11px] tracking-[0.25em] uppercase text-dim">
                Stunt Coordination / Action Design / 2nd Unit
              </h3>
              <span className="text-[10px] tracking-[0.18em] uppercase text-accent border border-accent/25 px-2.5 py-1">
                Attached
              </span>
            </div>
            <div className="w-[200px] aspect-[3/4] border border-line mb-6 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/declan-nitasha-headshot.jpg"
                alt="Declan Mulvey and Nitasha Bhambree at the Primetime Emmys"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-serif text-xl text-fg mb-4">
              Declan Mulvey &amp; Nitasha Bhambree
            </p>
            <p className="text-dim text-sm leading-relaxed">
              The Emmy-nominated stunt coordination and second-unit directing team behind
              CBS&rsquo;s <em>FBI: Most Wanted</em>. In 2025, Nitasha became the first woman of
              color ever nominated for stunt coordination at the Primetime Emmys, with the pair
              only the second married couple to share a nomination in the category; she was also
              part of the Emmy-winning stunt coordination team on NBC&rsquo;s{' '}
              <em>The Blacklist</em>. Between them: <em>Jessica Jones</em>, <em>The Penguin</em>,{' '}
              <em>A Friend of the Family</em>, <em>The Many Saints of Newark</em>, and performer
              careers spanning <em>Joker</em>, <em>The Dark Knight Rises</em>,{' '}
              <em>Avengers: Infinity War</em>, and Spielberg&rsquo;s <em>West Side Story</em>.
              NYU-trained filmmakers in their own right, they write and direct their own
              action-driven work, precisely the muscle behind <em>Bot or Not</em>&rsquo;s
              contained cat-and-mouse set pieces.
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
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
