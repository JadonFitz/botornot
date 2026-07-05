import FadeIn from '../FadeIn'

const fmt = (n: number) => `$${Math.abs(Math.round(n)).toLocaleString('en-US')}`

// Source: Bot_or_Not_5M_Raise_Budget_v2.xlsx (July 2026) — kept outside the repo
const productionRows = [
  { code: 'A', label: 'Above the Line', detail: 'Story, producers, director, cast', amount: 833615, pct: '16.7%' },
  { code: 'B', label: 'Production / Below the Line', detail: 'Crew, sets, stages, LED volume', amount: 1345740, pct: '26.9%' },
  { code: 'C', label: 'Post-Production, VFX, Insurance & Legal', detail: '~200–300 VFX shots · theatrical-grade DI', amount: 545000, pct: '10.9%' },
]

interface TotalRow {
  label: string
  amount: number
  pct?: string
  strong?: boolean
  credit?: boolean
}

const totals: TotalRow[] = [
  { label: 'Direct Production Costs', amount: 2724355 },
  { label: 'Production Contingency (10%)', amount: 272436 },
  { label: 'Total Production Budget', amount: 2996791, pct: '60.0%', strong: true },
  { label: 'Marketing & NA Theatrical Release (incl. 5% release contingency)', amount: 1999200, pct: '40.0%' },
  { label: 'Total Raise', amount: 4995991, strong: true },
  { label: 'Est. Kentucky Entertainment Incentive (production spend only)', amount: -570015, credit: true },
  { label: 'Net Capital at Risk (after incentive)', amount: 4425976, strong: true },
]

const releaseRows = [
  { label: 'Paid media — digital, social, CTV, OOH, creator seeding', amount: 1040000 },
  { label: 'Exhibition — platform launch 8–12 markets + performance-gated expansion pool', amount: 250000 },
  { label: 'Publicity & events — national publicist, premiere, Q&A roadshow, festivals', amount: 246000 },
  { label: 'Distribution services & booking — flat-fee service deal, producer retains rights', amount: 180000 },
  { label: 'Creative & materials — key art, trailer finish, DCP, music sync', amount: 143000 },
  { label: 'Digital transition — PVOD/TVOD launch campaign', amount: 45000 },
]

export default function FinancingSection() {
  return (
    <section id="financing" className="py-28 md:py-36 border-t border-line">
      <div className="max-w-[76rem] mx-auto px-6">
        <FadeIn>
          <p className="text-[11px] tracking-[0.3em] uppercase text-dim mb-5">§ 08 — Financing</p>
          <h2 className="font-serif font-normal text-fg leading-tight mb-3"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}>
            The $5M Raise
          </h2>
          <p className="text-dim text-xs mb-14">
            Planning estimates prepared July 2026 for investor discussion — not vendor quotes.
            Account-level budget available in data room upon NDA.
          </p>
        </FadeIn>

        {/* Raise structure headline */}
        <FadeIn delay={0.06}>
          <div className="grid sm:grid-cols-3 gap-px bg-line border border-line max-w-4xl mb-8">
            <div className="bg-bg p-7">
              <p className="text-[11px] tracking-[0.25em] uppercase text-dim mb-3">Total Raise</p>
              <p className="font-serif text-5xl text-fg font-normal">$5.0M</p>
              <p className="text-dim text-xs mt-3 leading-relaxed">
                Fully capitalized through release — no second raise to get the film into theaters.
              </p>
            </div>
            <div className="bg-bg p-7">
              <p className="text-[11px] tracking-[0.25em] uppercase text-dim mb-3">Production</p>
              <p className="font-serif text-5xl text-fg font-normal">$3.0M</p>
              <p className="text-dim text-xs mt-3 leading-relaxed">
                23-day Kentucky shoot through theatrical-grade finishing. 60% of raise.
              </p>
            </div>
            <div className="bg-bg p-7">
              <p className="text-[11px] tracking-[0.25em] uppercase text-dim mb-3">
                Marketing &amp; Theatrical
              </p>
              <p className="font-serif text-5xl text-fg font-normal">$2.0M</p>
              <p className="text-dim text-xs mt-3 leading-relaxed">
                Self-funded North American theatrical release. 40% of raise.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <p className="text-fg text-base leading-[1.85] max-w-2xl mb-14 pl-5 border-l-2 border-accent">
            The producer retains North American distribution rights and P&amp;A control. Paid
            media deploys in stage-gates: platform launch in 8–12 markets, with the expansion
            pool releasing only on per-screen performance triggers — downside-protected by design.
          </p>
        </FadeIn>

        {/* Top sheet */}
        <FadeIn delay={0.1}>
          <div className="max-w-4xl mb-14">
            <h3 className="text-[11px] tracking-[0.25em] uppercase text-dim mb-4">
              Top Sheet — 23-Day Shoot · Lexington, Kentucky
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm min-w-[480px]">
                <thead>
                  <tr className="border-b border-line text-[10px] tracking-[0.2em] uppercase text-dim">
                    <th className="text-left font-normal py-3 pr-4">Category</th>
                    <th className="text-right font-normal py-3 pl-4">Budget</th>
                    <th className="text-right font-normal py-3 pl-4">% of Raise</th>
                  </tr>
                </thead>
                <tbody>
                  {productionRows.map((row) => (
                    <tr key={row.code} className="border-b border-line">
                      <td className="py-3.5 pr-4">
                        <span className="text-fg">{row.label}</span>
                        <span className="block text-dim text-[11px] mt-0.5">{row.detail}</span>
                      </td>
                      <td className="py-3.5 pl-4 text-right text-fg tabular-nums whitespace-nowrap">{fmt(row.amount)}</td>
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
                        {row.credit ? `(${fmt(row.amount)})` : fmt(row.amount)}
                      </td>
                      <td className="py-3.5 pl-4 text-right text-dim tabular-nums">{row.pct ?? ''}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </FadeIn>

        {/* Release budget breakdown */}
        <FadeIn delay={0.12}>
          <div className="max-w-4xl mb-14">
            <h3 className="text-[11px] tracking-[0.25em] uppercase text-dim mb-4">
              Inside the $2M Release Budget
            </h3>
            <div className="space-y-0">
              {releaseRows.map((row, i) => (
                <div
                  key={row.label}
                  className={`flex items-baseline justify-between gap-6 py-3.5 ${i < releaseRows.length - 1 ? 'border-b border-line' : ''}`}
                >
                  <span className="text-fg text-sm leading-snug">{row.label}</span>
                  <span className="text-fg text-sm tabular-nums whitespace-nowrap">{fmt(row.amount)}</span>
                </div>
              ))}
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
                  A refundable state credit — 35% on Kentucky-resident labor, 30% on non-resident
                  labor and Kentucky vendor spend — modeled conservatively at ~19% of the
                  production budget, returning an estimated {fmt(570015)} as cash 6–18 months
                  after the final certified audit. Proceeds recycle into the P&amp;A expansion
                  pool or return to investors, per deal terms. Model includes a 10% qualification
                  haircut; enhanced-county designation is upside not assumed here.
                </p>
              </div>

              <div>
                <h3 className="text-[11px] tracking-[0.25em] uppercase text-dim mb-4">
                  Production Base
                </h3>
                <p className="text-dim text-sm leading-relaxed">
                  Lex Studios, Lexington, Kentucky — three stages, standing sets, and production
                  offices, with a 60′×40′ cyc and nine Avid bays at sister company Wrigley Media.
                  23-day principal photography; LED volume work via mobile vendor package.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.12}>
            <div className="space-y-10">
              <div>
                <h3 className="text-[11px] tracking-[0.25em] uppercase text-dim mb-4">
                  Why Fund the Release Too
                </h3>
                <p className="text-dim text-sm leading-relaxed">
                  Most independent films raise for production only, then surrender rights and
                  economics to whoever pays for the release. Capitalizing P&amp;A upfront keeps
                  North American distribution rights with the production, keeps the theatrical
                  window under producer control, and lets the release strategy — modeled on the
                  team&rsquo;s own <em>Off Rip</em> TVOD playbook and the short&rsquo;s festival
                  pedigree — compound into the PVOD/TVOD window.
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
