import FadeIn from '../FadeIn'

const useOfFunds = [
  'Above-the-Line',
  'Below-the-Line',
  'Post-Production',
  'Insurance / Legal / Contingency',
  'P&A Reserve',
  'Residual Reserve',
]

export default function FinancingSection() {
  return (
    <section id="financing" className="py-28 md:py-36 border-t border-line">
      <div className="max-w-[76rem] mx-auto px-6">
        <FadeIn>
          <p className="text-[11px] tracking-[0.3em] uppercase text-dim mb-5">§ 06 — Financing</p>
          <h2 className="font-serif font-normal text-fg leading-tight mb-3"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}>
            Budget &amp; Financing Structure
          </h2>
          <p className="text-dim text-xs mb-14">
            All figures pending final budget. Updated figures available in data room upon NDA.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-14 max-w-4xl">
          <FadeIn delay={0.08}>
            <div>
              <div className="mb-10">
                <p className="text-[11px] tracking-[0.25em] uppercase text-dim mb-3">
                  Total Production Budget
                </p>
                <p className="font-serif text-5xl text-fg font-normal">$5M</p>
                <p className="text-dim text-xs mt-2">
                  Working figure — pending Blacklist read and final breakdown
                </p>
              </div>

              <div>
                <h3 className="text-[11px] tracking-[0.25em] uppercase text-dim mb-4">
                  Use of Funds
                </h3>
                <div className="space-y-0">
                  {useOfFunds.map((line, i) => (
                    <div
                      key={line}
                      className={`flex items-center justify-between py-3 ${i < useOfFunds.length - 1 ? 'border-b border-line' : ''}`}
                    >
                      <span className="text-fg text-sm">{line}</span>
                      <span className="text-dim text-xs italic">TBD</span>
                    </div>
                  ))}
                </div>
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
                  [PLACEHOLDER: Equity vs. soft money vs. tax credits vs. gap — to be filled as cap stack designs.]
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
