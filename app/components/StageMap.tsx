// Stylized eastern-US map plotting the three stage options.
// Equirectangular-ish projection: x = 30 + (lon + 90) * 31.43, y = 30 + (45.5 - lat) * 34.29
const FG = '#F0EDE8'
const DIM = '#7A746C'
const ACCENT = '#C8780A'

export default function StageMap() {
  return (
    <div className="border border-line bg-surface">
      <svg
        viewBox="90 20 620 385"
        role="img"
        aria-label="Map of the eastern United States marking Lex Studios in Lexington, Kentucky and Umbra Stages and Choice Studios in the Hudson Valley, New York"
        className="w-full h-auto block"
      >
        {/* dot-grid land texture */}
        <defs>
          <pattern id="stage-map-grid" width="18" height="18" patternUnits="userSpaceOnUse">
            <circle cx="9" cy="9" r="0.75" fill={FG} opacity="0.07" />
          </pattern>
        </defs>
        <rect x="0" y="0" width="720" height="420" fill="url(#stage-map-grid)" />

        {/* Atlantic coastline (stylized) */}
        <path
          d="M 681 40 L 665 71 L 640 112 L 630 138 L 659 153 L 652 166 L 615 169 L 567 176 L 533 195 L 531 225 L 505 254 L 489 243 L 500 272 L 473 318 L 460 325 L 478 383 L 454 400 L 410 420"
          fill="none"
          stroke={FG}
          strokeOpacity="0.18"
          strokeWidth="1"
        />
        {/* Long Island */}
        <path d="M 536 196 L 596 184" fill="none" stroke={FG} strokeOpacity="0.14" strokeWidth="1" />
        {/* Great Lakes shorelines: Erie, Ontario */}
        <path d="M 237 160 Q 305 130 379 121" fill="none" stroke={FG} strokeOpacity="0.12" strokeWidth="1" />
        <path d="M 354 107 Q 410 96 467 97" fill="none" stroke={FG} strokeOpacity="0.12" strokeWidth="1" />

        <text x="585" y="322" fill={DIM} fontSize="9" letterSpacing="0.25em" opacity="0.7">
          ATLANTIC
        </text>

        {/* reference cities */}
        <circle cx="533" cy="195" r="2" fill={DIM} opacity="0.7" />
        <text x="544" y="206" fill={DIM} fontSize="9" letterSpacing="0.08em">New York City</text>
        <circle cx="163" cy="279" r="2" fill={DIM} opacity="0.7" />
        <text x="163" y="267" fill={DIM} fontSize="9" letterSpacing="0.08em" textAnchor="middle">Louisville</text>

        {/* Lex Studios · Lexington, KY */}
        <circle cx="203" cy="285" r="8" fill="none" stroke={ACCENT} strokeOpacity="0.35" />
        <circle cx="203" cy="285" r="4" fill={ACCENT} />
        <text x="218" y="282" fill={FG} fontSize="12" letterSpacing="0.04em">Lex Studios</text>
        <text x="218" y="297" fill={DIM} fontSize="10" letterSpacing="0.06em">Lexington, KY · 30–35% incentive</text>

        {/* Hudson Valley cluster · Umbra (Newburgh) & Choice (Montgomery) */}
        <circle cx="518" cy="160" r="8" fill="none" stroke={ACCENT} strokeOpacity="0.35" />
        <circle cx="518" cy="160" r="4" fill={ACCENT} />
        <circle cx="534" cy="171" r="8" fill="none" stroke={ACCENT} strokeOpacity="0.35" />
        <circle cx="534" cy="171" r="4" fill={ACCENT} />
        <text x="504" y="146" fill={FG} fontSize="12" letterSpacing="0.04em" textAnchor="end">
          Umbra Stages · Choice Studios
        </text>
        <text x="504" y="161" fill={DIM} fontSize="10" letterSpacing="0.06em" textAnchor="end">
          Hudson Valley, NY · 40% incentive
        </text>
      </svg>
    </div>
  )
}
