import FadeIn from '../FadeIn'
import StageMap from '../StageMap'

interface CastMember {
  name: string
  role: string
  img?: string
}

interface PackageItem {
  label: string
  note: string
  status?: string
  cast?: CastMember[]
}

const attachedCast: CastMember[] = [
  { name: 'Meghan Carrasquillo', role: 'Juliet', img: '/meghan-acting-headshot.jpg' },
  { name: 'Chris Moss', role: 'Declan Callum', img: '/chris-headshot.jpg' },
  { name: 'Gigi Gustin', role: 'Blair', img: '/gigi-headshot.jpg' },
]

const packageItems: PackageItem[] = [
  {
    label: 'Cast Attachments',
    status: 'Cast in Place',
    cast: attachedCast,
    note: 'All remaining roles cast through auditions; pitch-deck talent references are aspirational tone benchmarks, not locked cast. Packaging discipline: one strong selective name preferred over multiple recognizable-but-saturated names.',
  },
  {
    label: 'Sales Agent / Distribution Path',
    status: 'In Talks',
    note: 'Currently weighing options and in talks with multiple distributors and sales agents to determine the best sales and acquisitions strategy, pending financing commitments and a significant cast attachment for presales.',
  },
  {
    label: 'Production Geography / Soft Money',
    status: 'In Talks',
    note: 'Base case: Lex Studios, Lexington, Kentucky. Talks underway; near-turnkey facility with a spring window open. Kentucky Entertainment Incentive: refundable credit of 35% on resident labor and 30% on non-resident labor and Kentucky vendor spend, modeled to return ~19% of the production budget as cash post-audit. Two Hudson Valley, NY stages are held as comparison options; see the map below.',
  },
  {
    label: 'Stunt Coordination / Action Design / 2nd Unit',
    status: 'Attached',
    note: 'Declan Mulvey & Nitasha Bhambree, the Emmy-nominated stunt coordination and second-unit directing team behind CBS’s FBI: Most Wanted, with credits spanning Jessica Jones, The Penguin, and NBC’s The Blacklist (Emmy win, Outstanding Stunt Coordination). A New York–based duo who write and direct their own action films; at PG-13 scale this attachment carries packaging weight comparable to a cast name.',
  },
]

interface StageOption {
  name: string
  place: string
  chip: string
  incentive: string
  incentiveNote: string
  perks: string[]
}

// Lex details per July 2026 facility call; NY incentive terms per Empire State
// Development / Orange County NY Film Office (pre-diligence).
const stageOptions: StageOption[] = [
  {
    name: 'Lex Studios',
    place: 'Lexington, Kentucky',
    chip: 'In Talks',
    incentive: '30–35%',
    incentiveNote: 'KY Entertainment Incentive: 35% resident labor · 30% non-resident labor & vendor spend · fringes and per diem qualify',
    perks: [
      '52,000 sq ft, new build: three stages (4,000–6,000 sq ft, 45′ clear), ~30 production offices',
      'Near-turnkey: wardrobe, hair & makeup, crew dining ready to go',
      'Producing-partner set builds at near-cost; pyro & rain SFX packages on the lot',
      'Crew housing locked at a standing $79/night hotel rate, ~80 managed Airbnbs',
      'Spring window currently wide open',
    ],
  },
  {
    name: 'Umbra Stages',
    place: 'Newburgh, New York',
    chip: 'Not Yet Engaged',
    incentive: '40%',
    incentiveNote: 'NYS credit: 30% base + 10% Orange County uplift; bonuses can stack toward 50%',
    perks: [
      'Dedicated NYS Independent Film credit pool, $100M annually',
      'Hudson Valley: NYC-depth crew and cast within commuting radius',
      'Home region of the attached stunt / action team',
    ],
  },
  {
    name: 'Choice Studios',
    place: 'Montgomery, New York',
    chip: 'Not Yet Engaged',
    incentive: '40%',
    incentiveNote: 'Same Orange County incentive profile as Umbra; bonuses can stack toward 50%',
    perks: [
      '15 minutes from Umbra Stages: one scout covers both facilities',
      'Same NYC-radius crew depth and independent-film credit pool',
    ],
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
                <div className="flex-1">
                  {item.cast && (
                    <div className="flex flex-wrap gap-4 mb-5">
                      {item.cast.map((member) => (
                        <div key={member.name} className="w-24">
                          <div className="w-24 aspect-[3/4] border border-line overflow-hidden bg-surface flex items-center justify-center">
                            {member.img ? (
                              // eslint-disable-next-line @next/next/no-img-element
                              <img
                                src={member.img}
                                alt={member.name}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <span className="font-serif text-xl text-dim">
                                {member.name.split(' ').map((n) => n[0]).join('')}
                              </span>
                            )}
                          </div>
                          <p className="text-fg text-[11px] leading-snug mt-2">{member.name}</p>
                          <p className="text-dim text-[10px] mt-0.5">as {member.role}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  <p className={`text-sm leading-relaxed ${item.note.startsWith('[') ? 'text-dim italic' : 'text-dim'}`}>{item.note}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Stage & incentive options */}
        <FadeIn delay={0.1}>
          <div className="mt-20 max-w-4xl">
            <h3 className="text-[11px] tracking-[0.25em] uppercase text-dim mb-3">
              Stage &amp; Incentive Options
            </h3>
            <p className="text-dim text-sm leading-relaxed max-w-2xl mb-8">
              Kentucky is the modeled base case throughout the financing plan. Two Hudson Valley
              facilities are held as comparison options; to date, only Lex Studios has been
              engaged directly.
            </p>
            <StageMap />
            <div className="grid md:grid-cols-3 gap-3 mt-3">
              {stageOptions.map((opt) => (
                <div key={opt.name} className="border border-line p-5 flex flex-col">
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <p className="text-fg text-sm leading-snug">{opt.name}</p>
                    <span className="flex-shrink-0 text-[9px] tracking-[0.15em] uppercase text-accent border border-accent/25 px-2 py-0.5 whitespace-nowrap">
                      {opt.chip}
                    </span>
                  </div>
                  <p className="text-dim text-xs mb-4">{opt.place}</p>
                  <p className="font-serif text-3xl text-fg mb-1">{opt.incentive}</p>
                  <p className="text-dim text-[11px] leading-relaxed mb-4">{opt.incentiveNote}</p>
                  <ul className="space-y-1.5">
                    {opt.perks.map((perk) => (
                      <li key={perk} className="text-dim text-xs leading-relaxed pl-3 relative">
                        <span className="absolute left-0 text-accent">·</span>
                        {perk}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-dim text-xs leading-relaxed mt-4 max-w-2xl">
              Incentive figures are current program terms, not guarantees; New York facility
              conversations have not yet begun and figures for those options are pre-diligence.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
