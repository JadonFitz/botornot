import FadeIn from '../FadeIn'

const risks = [
  {
    risk: 'Indie market saturation',
    mitigation:
      'Single-genre clarity, festival validation, proof-of-concept short complete. The Hunger Games / Divergent lane is a recognized category; Bot or Not is positioned to feel inevitable, not invented.',
  },
  {
    risk: 'Sci-fi presale resistance',
    mitigation:
      'High-concept commercial positioning leads: a reality-TV premise audiences instantly grasp, at contained scale. Comp set spans the Hunger Games / Divergent creative lane and the Companion / Ex Machina financial lane. Finished-product MG strategy with two named buyer targets (Vertical, Radial) whose public mandates explicitly include this cluster.',
  },
  {
    risk: 'Budget overrun risk',
    mitigation:
      "Tight BTL discipline. NTC's existing creative-pipeline efficiencies. Production geography chosen for soft-money and crew depth.",
  },
  {
    risk: 'Labor cost escalation',
    mitigation:
      'The production budget sits deliberately below the threshold where guild signatory status becomes effectively unavoidable, and the Kentucky base has recent precedent delivering name-cast features, including stunt-heavy work, under this labor model. Stunt coverage is carried above the standard COI, and low-budget guild agreements remain available if the final casting strategy requires them.',
  },
  {
    risk: 'P&A coverage post-release',
    mitigation:
      'Theatrical strategy modeled on the Hunting Matthew Nichols indie blueprint: $100K viable P&A tier, density-over-scale 20-market approach, 90-day execution timeline. Theatrical treated as pricing mechanism, not profit center.',
  },
  {
    risk: 'Distribution deal terms',
    mitigation:
      'Eight-question distributor evaluation framework, including the WGA residual assumption question. Windowing strategy framework in place. Holdback protection negotiated upfront. Commercially reasonable efforts clause demanded in every agreement.',
  },
  {
    risk: 'Post-sale residual liability',
    mitigation:
      'Cap stack includes dedicated residual reserve line. Distribution agreements explicitly assign residual assumption to distributor wherever possible. Reserves held against any portion retained by production entity. Backend treated as active management, not "close and move on."',
  },
  {
    risk: 'Saturated cast attachment risk',
    mitigation:
      'Packaging discipline: one strong selective name preferred over multiple recognizable-but-saturated names. The attached Emmy-nominated stunt/action team carries equivalent packaging weight at PG-13 scale.',
  },
]

export default function RiskSection() {
  return (
    <section id="risk" className="py-28 md:py-36 border-t border-line">
      <div className="max-w-[76rem] mx-auto px-6">
        <FadeIn>
          <p className="text-[11px] tracking-[0.3em] uppercase text-dim mb-5">§ 10 · Risk</p>
          <h2 className="font-serif font-normal text-fg leading-tight mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}>
            Risk &amp; Mitigation
          </h2>
          <p className="text-dim text-sm mb-14 max-w-xl leading-relaxed">
            Professional financing processes anticipate risk. Each entry below represents active
            thinking, not boilerplate.
          </p>
        </FadeIn>

        <div className="max-w-4xl">
          {/* Header row */}
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-[2fr,3fr] gap-4 md:gap-10 border-b border-line pb-3 mb-0">
              <p className="text-[11px] tracking-[0.25em] uppercase text-dim">Risk</p>
              <p className="hidden md:block text-[11px] tracking-[0.25em] uppercase text-dim">Mitigation</p>
            </div>
          </FadeIn>

          {risks.map((item, i) => (
            <FadeIn key={item.risk} delay={0.04 + i * 0.04}>
              <div className="grid grid-cols-1 md:grid-cols-[2fr,3fr] gap-3 md:gap-10 border-b border-line py-5">
                <p className="text-fg text-sm font-medium leading-snug">{item.risk}</p>
                <p className="text-dim text-sm leading-[1.85]">{item.mitigation}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
