import FadeIn from '../FadeIn'

const jadonCredits = [
  {
    title: 'Off Rip',
    note: 'Grand Jury Award — Gasparilla International Film Festival, 2025',
  },
  {
    title: 'Off Rip',
    note: 'U.S. Fiction Grand Jury Award — Orlando International Film Festival',
  },
  {
    title: "Robbie Ain't Right No More",
    note: 'Tribeca; Telluride Horror Show; multiple Best Supporting Actor wins',
  },
  {
    title: 'Bloom',
    note: 'Jackrabbit Studios — Cannes Market 2026, covered by Bloody Disgusting',
  },
]

const meghanCredits = [
  {
    title: 'Stiletto',
    note: 'Acquired by Eli Roth — 2026 wide theatrical release, alongside Colleen Camp',
  },
  {
    title: 'Bloom',
    note: 'Lead — psychological thriller, Jackrabbit Studios, packaging for Cannes',
  },
  {
    title: 'Devilreaux',
    note: 'Lionsgate — studio horror',
  },
  {
    title: 'I Am Your Biggest Fan',
    note: 'Lifetime — covered by Bloody Disgusting',
  },
]

const shortCredits = [
  {
    title: 'Screamfest',
    note: 'World Premiere — TCL Chinese Theatre, 2025',
  },
  {
    title: 'Lois Weber Film Festival',
    note: 'Winner — Best Sci-Fi',
  },
  {
    title: 'FilmQuest',
    note: 'Nominee — Best Ensemble & Best Sci-Fi',
  },
  {
    title: 'Fangoria',
    note: 'Exclusive trailer debut',
    href: 'https://www.fangoria.com/bot-or-not-exclusive-trailer/',
  },
  {
    title: 'Additional Press',
    note: '[PLACEHOLDER: Additional coverage — Jadon to provide]',
    placeholder: true,
  },
]

interface Credit {
  title: string
  note: string
  placeholder?: boolean
  href?: string
}

function CreditList({ credits }: { credits: Credit[] }) {
  return (
    <ul className="space-y-0">
      {credits.map((item, i) => (
        <li
          key={`${item.title}-${i}`}
          className={`py-4 ${i < credits.length - 1 ? 'border-b border-line' : ''}`}
        >
          {item.href ? (
            <a href={item.href} target="_blank" rel="noopener noreferrer" className="group block">
              <p className="text-sm text-fg font-medium group-hover:text-accent transition-colors duration-200">
                {item.title} →
              </p>
              <p className="text-dim text-xs mt-0.5">{item.note}</p>
            </a>
          ) : (
            <>
              <p className={`text-sm ${item.placeholder ? 'text-dim italic' : 'text-fg font-medium'}`}>
                {item.title}
              </p>
              <p className="text-dim text-xs mt-0.5">{item.note}</p>
            </>
          )}
        </li>
      ))}
    </ul>
  )
}

export default function PressSection() {
  return (
    <section id="press" className="py-28 md:py-36 border-t border-line">
      <div className="max-w-[76rem] mx-auto px-6">
        <FadeIn>
          <p className="text-[11px] tracking-[0.3em] uppercase text-dim mb-5">§ 11 — Press</p>
          <h2 className="font-serif font-normal text-fg leading-tight mb-14"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}>
            Press &amp; Track Record
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-12">
          <FadeIn delay={0.08}>
            <div>
              <h3 className="text-[11px] tracking-[0.25em] uppercase text-dim mb-0 pb-4 border-b border-line">
                Jadon Cal Fitzpatrick
              </h3>
              <CreditList credits={jadonCredits} />
            </div>
          </FadeIn>

          <FadeIn delay={0.12}>
            <div>
              <h3 className="text-[11px] tracking-[0.25em] uppercase text-dim mb-0 pb-4 border-b border-line">
                Meghan Carrasquillo
              </h3>
              <CreditList credits={meghanCredits} />
            </div>
          </FadeIn>

          <FadeIn delay={0.16}>
            <div>
              <h3 className="text-[11px] tracking-[0.25em] uppercase text-dim mb-0 pb-4 border-b border-line">
                Bot or Not (Short Film)
              </h3>
              <CreditList credits={shortCredits} />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
