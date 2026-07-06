import FadeIn from '../FadeIn'

interface PackageItem {
  label: string
  note: string
  status?: string
}

const packageItems: PackageItem[] = [
  {
    label: 'Cast Attachments',
    status: 'Cast in Place',
    note: 'Meghan Carrasquillo (Juliet), Chris Moss (Declan Callum), and Gigi Gustin (Blair) are attached. All remaining roles cast through auditions; pitch-deck talent references are aspirational tone benchmarks, not locked cast. Packaging discipline: one strong selective name preferred over multiple recognizable-but-saturated names.',
  },
  {
    label: 'Sales Agent / Distribution Path',
    note: '[PLACEHOLDER: Populate as locked. Jackrabbit Media currently handling Bloom worldwide sales, potential connection point.]',
  },
  {
    label: 'Production Geography / Soft Money',
    note: 'Lexington, Kentucky, based at Lex Studios (three stages, standing sets, offices). Kentucky Entertainment Incentive: refundable credit of 35% on resident labor and 30% on non-resident labor and Kentucky vendor spend, modeled to return ~19% of the production budget as cash post-audit.',
  },
  {
    label: 'Action Choreographer / 2nd Unit Director',
    note: '[PLACEHOLDER: Populate as locked. At PG-13 action scale, this attachment carries equivalent strategic weight to cast.]',
  },
]

export default function PackageSection() {
  return (
    <section id="package" className="py-28 md:py-36 border-t border-line">
      <div className="max-w-[76rem] mx-auto px-6">
        <FadeIn>
          <p className="text-[11px] tracking-[0.3em] uppercase text-dim mb-5">§ 06 · The Package</p>
          <h2 className="font-serif font-normal text-fg leading-tight mb-14"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}>
            The Package
          </h2>
        </FadeIn>

        <div className="space-y-3 max-w-3xl">
          {packageItems.map((item, i) => (
            <FadeIn key={item.label} delay={0.08 + i * 0.06}>
              <div className="border border-line p-6 flex flex-col sm:flex-row sm:items-start gap-5">
                <div className="sm:w-60 flex-shrink-0">
                  <p className="text-fg text-sm mb-2">{item.label}</p>
                  <span className="inline-block text-[10px] tracking-[0.18em] uppercase text-accent border border-accent/25 px-2.5 py-1">
                    {item.status ?? 'In Development'}
                  </span>
                </div>
                <p className={`text-sm leading-relaxed ${item.note.startsWith('[') ? 'text-dim italic' : 'text-dim'}`}>{item.note}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
