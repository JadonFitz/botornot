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

// Revenue Scenarios & Recoupment Waterfall — budget v3 (July 2026)
const scenarioCols = [
  { key: 'c', name: 'Conservative', note: 'Downside honesty' },
  { key: 't', name: 'Target', note: 'Credible expectation' },
  { key: 'b', name: 'Breakout', note: 'Genre hit with name cast' },
] as const

interface ScenarioRow {
  label: string
  detail?: string
  c: number
  t: number
  b: number
  strong?: boolean
}

const revenueRows: ScenarioRow[] = [
  { label: 'NA theatrical — film rental', detail: '45% exhibitor split on $1.2M / $3.5M / $6.5M box office · self-distributed', c: 540000, t: 1575000, b: 2925000 },
  { label: 'PVOD / TVOD net receipts', detail: 'Platform 70/30 split — theatrical spend compounds here', c: 500000, t: 1400000, b: 2800000 },
  { label: 'SVOD / AVOD / Pay-1 licenses', detail: 'Post-transactional window license(s)', c: 250000, t: 700000, b: 1400000 },
  { label: 'Foreign net receipts', detail: 'All territories via sales agent, net of 20% commission and capped expenses', c: 245000, t: 965000, b: 2005000 },
  { label: 'Ancillary', detail: 'Airlines, cable, merch, music', c: 30000, t: 100000, b: 250000 },
  { label: 'Kentucky incentive proceeds', detail: '~19% of production budget, 6–18 months post-audit', c: 570015, t: 570015, b: 570015 },
  { label: 'Total Gross Receipts', c: 2135015, t: 5310015, b: 9950015, strong: true },
]

const waterfallRows: ScenarioRow[] = [
  { label: 'Net receipts to waterfall', detail: 'After 1% collection-account fee and est. guild residuals', c: 2076165, t: 5151915, b: 9640515 },
  { label: 'Tier 1 — Return of capital (100%)', detail: 'First position', c: 2076165, t: 4995991, b: 4995991 },
  { label: 'Tier 2 — Investor premium (20%)', c: 0, t: 155924, b: 999198 },
  { label: 'Tier 3 — Deferral pool', detail: 'Deferred cast / producer fees', c: 0, t: 0, b: 150000 },
  { label: 'Tier 4 — Net profits, investor share (50%)', detail: 'Producer side pays talent participations from its half', c: 0, t: 0, b: 1747663 },
  { label: 'Total Cash to Investors', c: 2076165, t: 5151915, b: 7742852, strong: true },
]

const multiples = { c: '0.42×', t: '1.03×', b: '1.55×' }

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

        {/* How the money flows back */}
        <FadeIn delay={0.08}>
          <div className="max-w-4xl mb-14 border-t border-line pt-12">
            <h3 className="text-[11px] tracking-[0.25em] uppercase text-accent mb-3">
              How the Money Flows Back
            </h3>
            <p className="font-serif text-2xl text-fg mb-6">Recoupment Structure</p>
            <p className="text-fg text-base leading-[1.85] max-w-2xl">
              The film earns from five sources: North American theatrical (self-distributed — we
              keep the film rental; our booking partner is a flat fee already inside the budget,
              not a percentage of your revenue), transactional digital (PVOD/TVOD), streaming
              licenses (SVOD/AVOD), foreign sales across all territories, and ancillary. The
              Kentucky refundable credit — approximately $570,000 — enters the waterfall as
              receipts, covering roughly 11% of breakeven before a single ticket sells.
            </p>
          </div>
        </FadeIn>

        {/* Revenue scenarios */}
        <FadeIn delay={0.1}>
          <div className="max-w-4xl mb-14">
            <h3 className="text-[11px] tracking-[0.25em] uppercase text-dim mb-4">
              Revenue Scenarios
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm min-w-[600px]">
                <thead>
                  <tr className="border-b border-line text-[10px] tracking-[0.2em] uppercase text-dim">
                    <th className="text-left font-normal py-3 pr-4">Revenue Stream</th>
                    {scenarioCols.map((col) => (
                      <th key={col.key} className="text-right font-normal py-3 pl-4">
                        {col.name}
                        <span className="block normal-case tracking-normal text-[10px] text-dim/70 font-normal mt-0.5">
                          {col.note}
                        </span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {revenueRows.map((row) => (
                    <tr key={row.label} className={`border-b border-line ${row.strong ? 'bg-fg/[0.03]' : ''}`}>
                      <td className={`py-3.5 pr-4 ${row.strong ? 'text-fg text-[11px] tracking-[0.2em] uppercase' : ''}`}>
                        {!row.strong && <span className="text-fg">{row.label}</span>}
                        {row.strong && row.label}
                        {row.detail && (
                          <span className="block text-dim text-[11px] mt-0.5 normal-case tracking-normal">{row.detail}</span>
                        )}
                      </td>
                      {scenarioCols.map((col) => (
                        <td key={col.key} className="py-3.5 pl-4 text-right text-fg tabular-nums whitespace-nowrap">
                          {fmt(row[col.key])}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </FadeIn>

        {/* Recoupment waterfall */}
        <FadeIn delay={0.1}>
          <div className="max-w-4xl mb-14">
            <h3 className="text-[11px] tracking-[0.25em] uppercase text-dim mb-4">
              Off the Tops
            </h3>
            <p className="text-dim text-sm leading-[1.85] max-w-2xl mb-10">
              Before any distribution to investors, three obligations are paid: collection
              account management fees (1% of gross), guild residuals on post-theatrical markets
              (estimated 5% of digital and streaming receipts), and foreign sales commission on
              international revenue only (20%, plus capped expenses). There is no domestic
              distribution fee — self-distribution means no distributor takes 25–35% of North
              American revenue before you see it.
            </p>
            <h3 className="text-[11px] tracking-[0.25em] uppercase text-dim mb-4">
              The Waterfall
            </h3>
            <p className="text-dim text-sm leading-relaxed max-w-2xl mb-6">
              Market-standard single-tier equity structure: 100% return of capital in first
              position, then a 20% investor premium, then a capped $150K pool of deferred cast
              and producer fees, then 50/50 net profits.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm min-w-[600px]">
                <thead>
                  <tr className="border-b border-line text-[10px] tracking-[0.2em] uppercase text-dim">
                    <th className="text-left font-normal py-3 pr-4">Tier</th>
                    {scenarioCols.map((col) => (
                      <th key={col.key} className="text-right font-normal py-3 pl-4">{col.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {waterfallRows.map((row) => (
                    <tr key={row.label} className={`border-b border-line ${row.strong ? 'bg-fg/[0.03]' : ''}`}>
                      <td className={`py-3.5 pr-4 ${row.strong ? 'text-fg text-[11px] tracking-[0.2em] uppercase' : ''}`}>
                        {!row.strong && <span className="text-fg">{row.label}</span>}
                        {row.strong && row.label}
                        {row.detail && (
                          <span className="block text-dim text-[11px] mt-0.5 normal-case tracking-normal">{row.detail}</span>
                        )}
                      </td>
                      {scenarioCols.map((col) => (
                        <td key={col.key} className="py-3.5 pl-4 text-right text-fg tabular-nums whitespace-nowrap">
                          {fmt(row[col.key])}
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr>
                    <td className="py-4 pr-4 text-fg text-[11px] tracking-[0.2em] uppercase">
                      Investor Multiple
                    </td>
                    {scenarioCols.map((col) => (
                      <td key={col.key} className="py-4 pl-4 text-right">
                        <span className="font-serif text-2xl text-fg">{multiples[col.key]}</span>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-8 border border-line p-5 max-w-2xl">
              <p className="text-fg text-sm leading-relaxed">
                Talent profit participations are paid entirely from the producers&rsquo; share.
                The investor split is never diluted by backend points.
              </p>
            </div>
            <div className="mt-6 space-y-2 max-w-2xl">
              <p className="text-dim text-xs leading-relaxed">
                Breakeven is approximately $5.2M in gross receipts across all streams. The
                conservative case assumes full P&amp;A deployment; in practice the stage-gated
                release means a soft launch never spends the full $2M, so the modeled downside
                overstates actual downside.
              </p>
              <p className="text-dim text-xs leading-relaxed">
                Foreign presales against the name cast can be closed pre-production to reduce the
                equity ask — not modeled; pure de-risking upside. The Kentucky incentive is
                modeled into the waterfall; deal terms can instead return it to investors
                directly, accelerating their recoupment clock.
              </p>
              <p className="text-dim text-xs leading-relaxed italic">
                All figures are planning estimates for investor discussion — not projections and
                not an offer to sell securities. Full model and waterfall available on request.
              </p>
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
                  Deal Terms at a Glance
                </h3>
                <p className="text-dim text-sm leading-relaxed mb-3">
                  Capital first, 100% in first position · 20% investor premium · deferral pool ·
                  50/50 net profits with talent participations paid from the producer share. All
                  terms negotiable — alternatives such as a 115% premium with 60/40 profits or
                  corridor structures are on the table.
                </p>
                <p className="text-dim text-xs">Full financial model available in data room.</p>
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
