import FadeIn from '../FadeIn'

const phases = [
  {
    phase: 'Development',
    current: true,
    items: ['Script lock', 'Blacklist read', 'Packaging'],
    date: 'Current',
  },
  {
    phase: 'Pre-Production',
    current: false,
    items: ['Crew attachments', 'Location locked', 'Financing closed'],
    date: '[PLACEHOLDER: Target dates]',
  },
  {
    phase: 'Production',
    current: false,
    items: ['Principal photography'],
    date: '[PLACEHOLDER: Target dates]',
  },
  {
    phase: 'Post-Production',
    current: false,
    items: ['Picture lock', 'Score & sound', 'Deliverables'],
    date: '[PLACEHOLDER: Target dates]',
  },
  {
    phase: 'Delivery',
    current: false,
    items: ['Festival delivery', 'Distribution delivery'],
    date: '[PLACEHOLDER]',
  },
  {
    phase: 'Festival Launch',
    current: false,
    items: ['World premiere', 'Acquisitions conversations'],
    date: '[PLACEHOLDER]',
  },
  {
    phase: 'Theatrical / Distribution',
    current: false,
    items: ['Domestic release', 'International windowing'],
    date: '[PLACEHOLDER]',
  },
]

export default function TimelineSection() {
  return (
    <section id="timeline" className="py-28 md:py-36 border-t border-line">
      <div className="max-w-[76rem] mx-auto px-6">
        <FadeIn>
          <p className="text-[11px] tracking-[0.3em] uppercase text-dim mb-5">§ 07 — Timeline</p>
          <h2 className="font-serif font-normal text-fg leading-tight mb-14"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}>
            Timeline
          </h2>
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
      </div>
    </section>
  )
}
