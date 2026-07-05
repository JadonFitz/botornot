import FadeIn from '../FadeIn'

const fmt = (n: number) => `$${Math.abs(Math.round(n)).toLocaleString('en-US')}`

const categories = [
  { code: 'A', label: 'Above the Line', detail: 'Story, producers, director, cast', lean: 838450, full: 1429210, pct: '31.3%' },
  { code: 'B', label: 'Production / Below the Line', detail: 'Crew, sets, stages, LED volume', lean: 1324880, full: 2157980, pct: '47.3%' },
  { code: 'C', label: 'Editorial & VFX', detail: '~200–400 shots at indie rates', lean: 274000, full: 523000, pct: '11.5%' },
  { code: 'D', label: 'Sound, Music & Finishing', detail: 'Design, score, DI, deliverables', lean: 139000, full: 236000, pct: '5.2%' },
  { code: 'E', label: 'Insurance, Legal & General', detail: 'Incl. E&O and incentive audit', lean: 130000, full: 220000, pct: '4.8%' },
]

const totals = [
  { label: 'Direct Costs', lean: 2706330, full: 4566190 },
  { label: 'Contingency (10%)', lean: 270633, full: 456619 },
  { label: 'Total Gross Budget', lean: 2976963, full: 5022809, strong: true },
  { label: 'Est. Kentucky Entertainment Incentive', lean: -560358, full: -937445, credit: true },
  { label: 'Net Cost to Production', lean: 2416605, full: 4085365, strong: true },
]

export default function FinancingSection() {
  return (
    <section id="financing" className="py-28 md:py-36 border-t border-line">
      <div className="max-w-[76rem] mx-auto px-6">
        <FadeIn>
          <p className="text-[11px] tracking-[0.3em] uppercase text-dim mb-5">§ 08 — Financing</p>
          <h2 className="font-serif font-normal text-fg leading-tight mb-3"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}>
            Budget &amp; Financing Structure
          </h2>
          <p className="text-dim text-xs mb-14">
            Planning estimates prepared July 2026 for investor discussion — not vendor quotes.
            Account-level budget available in data room upon NDA.
          </p>
        </FadeIn>

        {/* Scenario headline */}
        <FadeIn delay={0.06}>
          <div className="grid sm:grid-cols-2 gap-px bg-line border border-line max-w-4xl mb-14">
            <div className="bg-bg p-7">
              <p className="text-[11px] tracking-[0.25em] uppercase text-dim mb-3">Lean Scenario</p>
              <p className="font-serif text-5xl text-fg font-normal">$2.98M</p>
              <p className="text-dim text-xs mt-3 leading-relaxed">
                Gross budget · {fmt(2416605)} net after incentive.
                A disciplined version of the same script.
              </p>
            </div>
            <div className="bg-bg p-7">
              <p className="text-[11px] tracking-[0.25em] uppercase text-dim mb-3">Full Scenario</p>
              <p className="font-serif text-5xl text-fg font-normal">$5.02M</p>
              <p className="text-dim text-xs mt-3 leading-relaxed">
                Gross budget · {fmt(4085365)} net after incentive.
                Bigger name, bigger builds, 2× VFX, deeper LED volume work.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Top sheet */}
        <FadeIn delay={0.1}>
          <div className="max-w-4xl mb-14">
            <h3 className="text-[11px] tracking-[0.25em] uppercase text-dim mb-4">
              Top Sheet — 23-Day Shoot · Lexington, Kentucky
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm min-w-[540px]">
                <thead>
                  <tr className="border-b border-line text-[10px] tracking-[0.2em] uppercase text-dim">
                    <th className="text-left font-normal py-3 pr-4">Category</th>
                    <th className="text-right font-normal py-3 pl-4">Lean ($3M class)</th>
                    <th className="text-right font-normal py-3 pl-4">Full ($5M class)</th>
                    <th className="text-right font-normal py-3 pl-4">% of Direct</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map((row) => (
                    <tr key={row.code} className="border-b border-line">
                      <td className="py-3.5 pr-4">
                        <span className="text-fg">{row.label}</span>
                        <span className="block text-dim text-[11px] mt-0.5">{row.detail}</span>
                      </td>
                      <td className="py-3.5 pl-4 text-right text-fg tabular-nums whitespace-nowrap">{fmt(row.lean)}</td>
                      <td className="py-3.5 pl-4 text-right text-fg tabular-nums whitespace-nowrap">{fmt(row.full)}</td>
                      <td className="py-3.5 pl-4 text-right text-dim tabular-nums">{row.pct}</td>
                    </tr>
                  ))}
                  {totals.map((row) => (
                    <tr
                      key={row.label}
                      className={`border-b border-line ${row.strong ? 'bg-fg/[0.03]' : ''}`}
                    >
                      <td className={`py-3.5 pr-4 ${row.strong ? 'text-fg text-[11px] tracking-[0.2em] uppercase' : row.credit ? 'text-accent' : 'text-dim'}`}>
                        {row.label}
                      </td>
                      <td className={`py-3.5 pl-4 text-right tabular-nums whitespace-nowrap ${row.credit ? 'text-accent' : 'text-fg'}`}>
                        {row.credit ? `(${fmt(row.lean)})` : fmt(row.lean)}
                      </td>
                      <td className={`py-3.5 pl-4 text-right tabular-nums whitespace-nowrap ${row.credit ? 'text-accent' : 'text-fg'}`}>
                        {row.credit ? `(${fmt(row.full)})` : fmt(row.full)}
                      </td>
                      <td className="py-3.5 pl-4" />
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-14 max-w-4xl">
          <FadeIn delay={0.08}>
            <div className="space-y-10">
              <div className="border border-line p-5">
                <h3 className="text-[11px] tracking-[0.2em] uppercase text-accent mb-3">
                  Kentucky Entertainment Incentive
                </h3>
                <p className="text-fg text-xs leading-relaxed">
                  A refundable state credit — 35% on Kentucky-resident labor, 30% on
                  non-resident labor and Kentucky vendor spend — modeled conservatively to
                  return ~18–19% of gross budget as cash 6–18 months after the final
                  certified audit. The credit is collateralizable and financeable. Model
                  includes a 10% qualification haircut; enhanced-county designation and
                  Kentucky crew depth are upside not assumed here.
                </p>
              </div>

              <div>
                <h3 className="text-[11px] tracking-[0.25em] uppercase text-dim mb-4">
                  Production Base
                </h3>
                <p className="text-dim text-sm leading-relaxed">
                  Lex Studios, Lexington, Kentucky — three stages, standing sets, and
                  production offices, with a 60′×40′ cyc and nine Avid bays at sister
                  company Wrigley Media. 23-day principal photography; LED volume work
                  via mobile vendor package.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.12}>
            <div className="space-y-10">
              <div>
                <h3 className="text-[11px] tracking-[0.25em] uppercase text-dim mb-4">
                  Financing Structure
                </h3>
                {/* PLACEHOLDER: Equity vs. soft money vs. tax credits vs. gap. Populate as cap stack designs. */}
                <p className="text-dim italic text-sm leading-relaxed">
                  [PLACEHOLDER: Equity vs. soft money vs. gap — to be filled as cap stack
                  designs. First locked component: the Kentucky incentive at left.]
                </p>
              </div>

              <div>
                <h3 className="text-[11px] tracking-[0.25em] uppercase text-dim mb-4">
                  Recoupment Waterfall
                </h3>
                {/* PLACEHOLDER: Recoupment model. Sophisticated investors expect this. */}
                <p className="text-dim italic text-sm leading-relaxed mb-3">
                  [PLACEHOLDER: Recoupment model — to be provided. Sophisticated investors expect this; do not omit when complete.]
                </p>
                <p className="text-dim text-xs">Detailed financial model available upon request.</p>
              </div>

              <div className="border border-line p-5">
                <h3 className="text-[11px] tracking-[0.2em] uppercase text-accent mb-3">
                  Residual Reserve
                </h3>
                <p className="text-fg text-xs leading-relaxed">
                  Bot or Not's cap stack includes a dedicated residual reserve line in accordance
                  with updated WGA residual triggers. The team is structuring distribution agreements
                  to assign residual liability to the distributor wherever possible, with reserves
                  held against any portion retained by the production entity.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
