import FadeIn from '../FadeIn'

const packageItems = [
  {
    label: 'Cast Attachments',
    note: '[PLACEHOLDER: Populate as locked. Packaging discipline: one strong selective name preferred over multiple recognizable-but-saturated names.]',
  },
  {
    label: 'Sales Agent / Distribution Path',
    note: '[PLACEHOLDER: Populate as locked. Jackrabbit Media currently handling Bloom worldwide sales — potential connection point.]',
  },
  {
    label: 'Production Geography / Soft Money',
    note: '[PLACEHOLDER: Populate once shooting location locked. Options under evaluation: Florida, Georgia, New Mexico, Canada.]',
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
          <p className="text-[11px] tracking-[0.3em] uppercase text-dim mb-5">§ 04 — The Package</p>
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
                    In Development
                  </span>
                </div>
                <p className="text-dim italic text-sm leading-relaxed">{item.note}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
