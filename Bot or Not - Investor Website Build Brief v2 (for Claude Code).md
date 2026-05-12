BOT OR NOT — INVESTOR WEBSITE BUILD BRIEF  
For: Claude Code  
Project: botornotmovie.com  
Owner: Jadon Cal Fitzpatrick (New Terrain Creative LLC)  
Date: May 12, 2026  
Version: v2 (supersedes v1 from May 10, 2026\)
Github: https://github.com/JadonFitz/botornot

\================================================================  
PROJECT OVERVIEW  
\================================================================

Build a password-protected single-page (or lightly multi-section) investor pitch website for the feature film BOT OR NOT.

The site is NOT a marketing site. It is a CREDIBILITY INSTRUMENT — a fluid, visually confident, document-style experience that does the pitching work for the filmmakers when they cannot be in the room. Aesthetic should feel closer to a premium private-equity thesis page than a film marketing site. Quiet confidence. Earned restraint. Premium typography. Cinematic motion used sparingly to elevate, not to distract.

Audience: high-net-worth investors, family offices, soft-money funds, and strategic film financiers evaluating a $3–5M PG-13 action-thriller with sci-fi-as-setting positioning.

\================================================================  
PITCH FRAMING DISCIPLINE (NEW IN v2 — APPLIES SITE-WIDE)  
\================================================================

Two filters govern every line of copy on this site. Acquisitions executives and sophisticated film investors both use these unconsciously, and most indie sites fail one or both.

FILTER 1: THE 45-SECOND PITCH TEST  
A reader should be able to answer five questions within the first 30 seconds of landing on the site:  
\- WHAT the movie is (genre \+ premise)  
\- WHO is in it (talent attached or attaching)  
\- WHERE it's shooting (production geography)  
\- WHAT it costs (budget)  
\- WHETHER it's finished (production status)  
If any of these answers are buried more than one scroll below the hero, the site is failing this filter. Sections 1 and 2 carry the burden.

FILTER 2: THE FEELS-INEVITABLE TEST  
Sophisticated buyers and investors aren't asking "is this good?" — they're asking "does this fit a need I already have?" Every section should make Bot or Not feel RECOGNIZED, not DISCOVERED. The site should reference established comparable categories and existing buyer mandates rather than asking the reader to imagine a slot for the film. This is the discipline that separates films that get financed from films that get politely declined.

These filters supersede stylistic preferences when they conflict. If a section is beautiful but fails either filter, rewrite it.

\================================================================  
TECHNICAL STACK  
\================================================================

PREFERRED STACK  
\- Next.js (App Router) on Vercel  
\- TypeScript  
\- Tailwind CSS for styling  
\- Framer Motion for animation  
\- Sanity, Contentful, or simple MDX for content (Jadon to decide — default to MDX if no preference)  
\- Single password gate (env var, server-side check — see Auth section)

WHY THIS STACK  
Jadon already runs ArtHouse Landing in Next.js / Vercel / Firebase. Same operational pattern. Deployable to botornotmovie.com via Vercel domain config.

PERFORMANCE / ACCESSIBILITY TARGETS  
\- Lighthouse: 90+ across all categories  
\- Reduced-motion respected (prefers-reduced-motion media query disables animations)  
\- WCAG AA contrast minimum  
\- Mobile-first responsive — investors WILL read this on phones in cars

\================================================================  
AUTH / GATING  
\================================================================

SIMPLE PASSWORD GATE (no user accounts, no signup flow)

REQUIREMENTS:  
\- Single shared password set in environment variable (e.g., BOTORNOT\_ACCESS\_PASSWORD)  
\- Server-side validation via Next.js middleware or route handler  
\- On success: set a secure HTTP-only cookie with reasonable expiry (e.g., 30 days)  
\- All site routes except /login redirect to /login if no valid cookie  
\- Login page: minimal, branded, no public information about the project beyond title and "Investor Access" framing  
\- Clean error state for wrong password (no enumeration, no rate-limit messaging beyond "Try again")

DO NOT IMPLEMENT:  
\- User accounts or signups  
\- Magic links / email auth  
\- OAuth / social login  
\- Forgot-password flow (it's one shared password Jadon will rotate manually if needed)

\================================================================  
VISUAL DESIGN PRINCIPLES  
\================================================================

GENERAL DIRECTION  
\- Cinematic but document-grade. Not a marketing site, not a movie poster, not a Squarespace template.  
\- Reference moodboard: A24's investment-grade microsites, Apple product pages (restraint level, not consumer aesthetic), private-equity firm sites like Sequoia or Andreessen, criterion.com aesthetic for film context.  
\- Type: serif headlines (something like Editorial New, Tiempos, or GT Sectra) \+ clean sans-serif body (Inter, Geist, or Söhne). Generous tracking on display type. Tight line-height on body.  
\- Color palette: dark mode primary. Deep neutral background (off-black, NOT pure \#000 — something like \#0A0A0B or a deep slate). Off-white text (\#F5F5F4-ish). One restrained accent color — Jadon will provide, default to a warm sodium-vapor amber or a desaturated cyan if not specified.  
\- Whitespace \> density. Page should breathe.

MOTION DESIGN (THE "FLUID DECK" REQUIREMENT)  
Jadon's brief: "Making it a website we do have an advantage of a visual fluid deck of sorts that is moving images, may be a nice touch, but not overdone."

INTERPRETATION:  
\- Subtle parallax on hero imagery (low intensity — 3–8% movement on scroll)  
\- Section-to-section transitions that feel cinematic but quick (300–500ms ease-out)  
\- Selective use of looping video stills from the SHORT FILM in 2–3 places (NOT autoplay everywhere). Muted, looped, subtle. Use HTML5 video with poster fallback and muted/playsinline attributes for mobile compatibility.  
\- Type-in animations on key headlines (subtle stagger, single trigger on viewport entry, do not repeat on scroll)  
\- DO NOT: full-page video backgrounds, particle effects, scroll-jacking, cursor effects, custom cursors, audio anywhere by default  
\- DO: motion that reinforces editorial pacing. The user should feel they are reading a confident, thoughtful document — not navigating a UX experiment.

RESPECTING REDUCED MOTION  
All animations must respect prefers-reduced-motion. Reduced-motion users get cross-fades only.

\================================================================  
SITE STRUCTURE  
\================================================================

The site can be either a single long-scroll page or a small set of routed sections. Default to SINGLE LONG-SCROLL with anchor navigation, because investors prefer to read top-to-bottom and return-to-section behavior is simpler.

SECTION INVENTORY (top to bottom):

\----------------------------------------------------------------  
SECTION 1 — HERO  
\----------------------------------------------------------------  
\- Full-viewport, restrained  
\- Title treatment: "BOT OR NOT"  
\- Subtitle: "A feature film by Jadon Cal Fitzpatrick"  
\- One-line tagline: \[PLACEHOLDER — Jadon and Meghan to provide. Suggested format: short, evocative, not the full pitch. Example placeholder: "She wasn't built to fight. She'll have to." — replace with their version.\]  
\- Background: subtle motion still or short looped video moment from the short film. NOT autoplaying with sound. Muted, looped, subtle.  
\- Small anchor nav at top-right (sticky on scroll): The Film · The Short · Team · Package · Market · Financing · Timeline · Contact  
\- No CTA button on hero — the page itself is the CTA

\----------------------------------------------------------------  
SECTION 2 — THE FILM (REVISED IN v2)  
\----------------------------------------------------------------  
HEADING: "The Film"

OPENING BLOCK — THE 45-SECOND ANCHOR (NEW IN v2):  
The first paragraph of this section must answer the five filter questions (what / who / where / cost / status) within \~60 words. Acquisitions executives and investors both use a 45-second filter to decide whether to keep reading. This paragraph IS that filter. Draft language:

"Bot or Not is a $5M PG-13 action-thriller written by Meghan Carrasquillo and directed by Jadon Cal Fitzpatrick. A war-veteran contestant fights to survive a televised survival system run by AI. Shooting in \[PLACEHOLDER — production geography\] in \[PLACEHOLDER — target year\]. Currently in development, with the proof-of-concept short film complete and festival-validated."

This paragraph appears BEFORE the logline, reference frame, or synopsis. Everything else builds on it.

REMAINING CONTENT BLOCK:  
\- Logline: \[PLACEHOLDER — Jadon/Meghan to provide one clean sentence\]  
\- The reference frame (pull quote): A $5M PG-13 action-thriller in the Maze Runner / Hunger Games lane at indie scale. Sci-fi/AI as world rule, not genre commitment. Female lead. Contestant-vs-system structure. War-vet emotional engine grounding sustained physical action.  
\- The audience contract: PG-13 action-thriller. Companion's premise. Maze Runner's tone. Belko's structure — without the gore.  
\- The story (1–2 paragraphs): \[PLACEHOLDER — Meghan as writer to provide the synopsis. \~150–250 words.\]

VISUAL TREATMENT:  
\- Editorial column layout. Generous margins.  
\- The 45-second anchor paragraph treated with slightly more visual weight than the rest — generous spacing above and below, possibly a thin rule line separating it from what follows.  
\- Pull-quote treatment on the reference frame line.  
\- Optional: small still gallery (3–5 production stills or short-film stills) in a thin row beneath the copy.

\----------------------------------------------------------------  
SECTION 3 — THE SHORT  
\----------------------------------------------------------------  
HEADING: "The Proof of Concept"  
SUBHEADING: "Bot or Not began as a short film."

CONTENT:  
\- Brief paragraph: Bot or Not premiered at Screamfest at TCL Chinese Theatre in 2025, won Best Sci-Fi at the Lois Weber Film Festival, and was nominated for Best Ensemble at FilmQuest. The short proves the world, the tone, and the visual approach — closing the question buyers and investors most often ask of sci-fi-adjacent projects: "What does it look like?"  
\- Trailer embed: from arthousecollective.xyz (Jadon to provide direct embed URL or video file). Use HTML5 video with custom controls or a clean Vimeo/YouTube embed (Vimeo preferred for the gating control).  
\- Festival laurels: visual row of laurels (Screamfest, Lois Weber Winner, FilmQuest Nominee). \[PLACEHOLDER — Jadon to provide laurel image assets.\]  
\- Press coverage: link row to Fangoria trailer drop, Bloody Disgusting if applicable, The Fan Carpet, and any other coverage. \[PLACEHOLDER — Jadon to provide URLs.\]

VISUAL TREATMENT:  
\- Video player takes meaningful space but doesn't dominate. \~60–70% column width on desktop, full-width on mobile.  
\- Laurels in a quiet row, monochrome treatment over the dark background.

\----------------------------------------------------------------  
SECTION 4 — THE TEAM (REVISED IN v2)  
\----------------------------------------------------------------  
HEADING: "The Team"

POSITIONING FRAME — NEW IN v2:  
Before the bios, include a short framing paragraph (\~40 words) that surfaces the filmmaker-actor team configuration as a strategic asset:

"Bot or Not is led by a director-actor and writer-lead pairing — a configuration acquisitions executives have publicly described as easier to work with than traditional filmmaker-only teams. Jadon and Meghan bring both sides of the camera to every decision."

This is informed by industry intel that filmmaker-actor teams carry packaging credibility that purely behind-camera teams don't. Surface this quietly. Don't over-explain it.

JADON CAL FITZPATRICK — Director  
\[PLACEHOLDER — use bio from existing pitch deck. Key credits to surface: Off Rip (Grand Jury Award, Gasparilla International Film Festival, 2025), Robbie Ain't Right No More (Tribeca, Telluride Horror Show), Mind Games (2021), Ride or Die docu-series. Acting credits across the indie horror/thriller space including work alongside Joey King, Mira Sorvino, Lee Majors, Danielle Harris, Aleksa Palladino, Madeleine McGraw. Currently filming Bloom for Jackrabbit Studios, premiering at Cannes Market 2026.\]

MEGHAN CARRASQUILLO — Writer / Lead  
\[PLACEHOLDER — Meghan to provide bio. Key credits: Lookout (Jackrabbit Studios, 2025), I Am Your Biggest Fan (Lifetime), Bloom (Jackrabbit Studios, 2026, co-starring with Jadon). Writer of Bot or Not feature.\]

PRODUCERS / EXECUTIVE PRODUCERS  
\[PLACEHOLDER — to be filled as packaging completes. New Terrain Creative LLC produces.\]

KEY DEPARTMENTS (when attached)  
\[PLACEHOLDER — Cinematographer, Production Designer, Editor, Composer, Action Choreographer / 2nd Unit Director. Note: action choreographer / 2nd unit attachment matters as much as cast at PG-13 action scale — surface this prominently when filled.\]

VISUAL TREATMENT:  
\- Two-column or three-column layout on desktop, single column on mobile  
\- Headshots: monochrome treatment, consistent crop, no smiling-into-camera marketing stills. Editorial portraiture.  
\- Bios: 80–120 words each. Crisp, credit-forward, no fluff.

\----------------------------------------------------------------  
SECTION 5 — THE PACKAGE (REVISED IN v2)  
\----------------------------------------------------------------  
HEADING: "The Package"

CONTENT BLOCKS:  
\- Cast attachments: \[PLACEHOLDER — populate as locked\]

  \*\* CASTING DISCIPLINE NOTE (INTERNAL — DO NOT DISPLAY ON SITE BUT KEEP IN BRIEF): \*\*  
  Acquisitions executives have publicly stated that certain overused indie cast attachments actively REDUCE MGs because of market saturation. Specific names called out by industry: Eric Roberts, Tyrese Gibson, several Expendables-era cast. The phrase "AFM guys" is the anti-pattern.  
  When populating cast attachments on this site, prefer ONE strong selective name over multiple recognizable-but-saturated names. The right kind of attached talent: rising names, prestige-adjacent performers with measurable territory value, or one anchor with genuine current heat. The wrong kind: any name where an investor's reaction is "I've seen them in five indie thrillers this year."  
  This rule supersedes "aim for stars" generic advice.

\- Sales agent / domestic distribution path: \[PLACEHOLDER — populate as locked. Note: Jackrabbit Media currently handling Bloom worldwide sales; potential connection point.\]  
\- Soft money / production geography: \[PLACEHOLDER — fill once shooting location locked. Options being evaluated: Florida, Georgia, New Mexico, Canada.\]  
\- Action choreographer / 2nd unit: \[PLACEHOLDER — populate as locked. At PG-13 action scale, this attachment carries equivalent strategic weight to cast attachments.\]

VISUAL TREATMENT:  
\- Tabbed or accordion layout if multiple package elements  
\- "In Development" tag treatment on placeholders rather than empty fields — signals momentum, not absence

\----------------------------------------------------------------  
SECTION 6 — THE MARKET CASE (REVISED IN v2)  
\----------------------------------------------------------------  
HEADING: "Why This Film. Why Now."

CONTENT:  
Three short subsections, \~100–150 words each. NOTE: The buyer landscape subsection has been materially updated in v2 to surface that two of the most credible $300K–$1M+ MG buyers in the indie market have explicitly named Bot or Not's exact genre cluster as priority acquisitions.

(a) The Genre Lane  
Action-thriller travels internationally and remains a consistent global driver at the indie scale. The PG-13 commitment keeps the buyer ladder meaningfully wider than R — Pay-1, international, and family-co-viewing audiences all expand. Bot or Not sits in the Maze Runner / Hunger Games tonal lane at indie scale — proven economic territory.

(b) The Buyer Landscape (REVISED IN v2)  
The current indie distribution market has independently validated Bot or Not's exact positioning. Vertical Entertainment, which acquires approximately seventy films per year, has publicly stated its priority genres as action, thriller, sci-fi, and horror — with MG capacity reaching seven figures for theatrical-tier projects. Radial Entertainment — the consolidated entity now combining Shout\!, Gravitas, and FilmRise into a 70,000-title library — has publicly stated action, thriller, and sci-fi as three of its five priority genres, with MGs ranging from $300–500K at the lower end to seven figures at the higher end. North American Pay-1 has stabilized across 150+ active licensees. Starz, Paramount+, Netflix, and Cineverse are all active in the genre. The financing model is built around real, current buyer relationships — not 2021 assumptions.

(c) The Proof-of-Concept Advantage  
The short film exists. Buyers and investors do not have to imagine what Bot or Not looks like. The visual world, tonal grammar, and lead performance are already on screen — at festival-winning quality. This closes the single largest question financiers ask of sci-fi-adjacent projects.

VISUAL TREATMENT:  
\- Three-column on desktop, stacked on mobile  
\- Small data points / numerical pull-outs (\~70 acquisitions/yr at Vertical, 70K-title library at Radial, 150+ licensees, festival wins) treated as confident pull-quotes  
\- Vertical and Radial names treated as proper-noun confidence anchors — don't over-explain who they are; sophisticated readers will know, and the site's job is not to teach the unsophisticated

\----------------------------------------------------------------  
SECTION 7 — BUDGET & FINANCING (REVISED IN v2)  
\----------------------------------------------------------------  
HEADING: "Budget & Financing Structure"

CONTENT:  
\- Total production budget: $5M (working figure pending Blacklist read and final budget breakdown)  
\- High-level use of funds breakdown: \[PLACEHOLDER — populated after budget completes. Categories: Above-the-line, Below-the-line, Post, Insurance/Legal/Contingency, P\&A Reserve, \*\* RESIDUAL RESERVE (new in v2) \*\*.\]  
\- Financing structure: \[PLACEHOLDER — equity vs. soft money vs. tax credits vs. gap. Populated as cap stack designs.\]  
\- Recoupment waterfall: \[PLACEHOLDER — model to be provided. Sophisticated investors expect this; do not omit when complete.\]

\*\* NEW IN v2 — RESIDUAL RESERVE NOTE: \*\*  
The cap stack must include a dedicated reserve line for post-sale residual liability. Under the new WGA/AMPTP deal, success-based residuals can trigger additional producer obligations after a film has been sold and proceeds distributed. Larger distributors will sign residual assumption agreements; smaller buyers will not. The cap stack should anticipate this with an explicit reserve, and the site should signal awareness of this risk in the financing section without belaboring it.

Suggested display language: "Bot or Not's cap stack includes a dedicated residual reserve line in accordance with updated WGA residual triggers. The team is structuring distribution agreements to assign residual liability to the distributor wherever possible, with reserves held against any portion retained by the production entity."

VISUAL TREATMENT:  
\- Clean tabular data presentation  
\- "Detailed financial model available upon request" treatment for sensitive figures  
\- Footnote: "All figures pending final budget. Updated figures available in data room upon NDA."

\----------------------------------------------------------------  
SECTION 8 — TIMELINE  
\----------------------------------------------------------------  
HEADING: "Timeline"

CONTENT:  
Visual horizontal timeline (responsive — vertical on mobile) with the following milestones:  
\- Development (current): script lock, Blacklist read, packaging  
\- Pre-production: \[PLACEHOLDER — target dates\]  
\- Production: \[PLACEHOLDER — target dates\]  
\- Post-production: \[PLACEHOLDER — target dates\]  
\- Delivery: \[PLACEHOLDER\]  
\- Festival launch: \[PLACEHOLDER\]  
\- Theatrical / distribution: \[PLACEHOLDER\]

VISUAL TREATMENT:  
\- Subtle horizontal timeline with phase markers  
\- Current phase highlighted with the accent color  
\- No specific dates until they're real — use phase names only where uncertain

\----------------------------------------------------------------  
SECTION 9 — RISK & MITIGATION (REVISED IN v2)  
\----------------------------------------------------------------  
HEADING: "Risk & Mitigation"

CONTENT:  
Honest, professional treatment. This section earns more trust than the rest of the site combined when done right. Format as a two-column layout: identified risk on the left, mitigation strategy on the right.

Risks to address (Jadon to refine, Meghan to weigh in). v2 adds the post-sale residual liability item:

| RISK | MITIGATION |  
|---|---|  
| Indie market saturation | Single-genre clarity, festival validation, proof-of-concept short complete. The Maze Runner / Hunger Games tonal lane is a recognized category — Bot or Not is positioned to feel inevitable, not invented. |  
| Sci-fi presale resistance | Action-thriller positioning leads; sci-fi is the world, not the genre. Comp set built on recognizable PG-13 action-thrillers. Finished-product MG strategy with two named buyer targets (Vertical, Radial) whose public mandates explicitly include this cluster. |  
| Budget overrun risk | Tight BTL discipline. NTC's existing creative-pipeline efficiencies. Production geography chosen for soft-money \+ crew depth. |  
| P\&A coverage post-release | Theatrical strategy modeled on the Hunting Matthew Nichols indie blueprint — $100K viable P\&A tier, density-over-scale 20-market approach, 90-day execution timeline. Theatrical treated as pricing mechanism, not profit center. |  
| Distribution deal terms | Eight-question distributor evaluation framework, including the new WGA residual assumption question. Windowing strategy framework in place. Holdback protection negotiated upfront. Commercially reasonable efforts clause demanded in every agreement. |  
| \*\* Post-sale residual liability (NEW IN v2) \*\* | Cap stack includes dedicated residual reserve line. Distribution agreements explicitly assign residual assumption to distributor wherever possible. Reserves held against any portion retained by production entity. Backend treated as active management, not "close and move on." |  
| Saturated cast attachment risk | Packaging discipline: one strong selective name preferred over multiple recognizable-but-saturated names. Action choreographer attachment carries equivalent weight at PG-13 scale. |

VISUAL TREATMENT:  
\- Two-column layout, equal weight to risk and mitigation  
\- No risk minimization language. Direct, professional.  
\- The post-sale residual liability row should NOT be flagged as "new" or "emerging" on the live site — surface it as a calibrated, anticipated risk. The "new in v2" tag in this brief is for the build process only.

\----------------------------------------------------------------  
SECTION 10 — PRESS & TRACK RECORD  
\----------------------------------------------------------------  
HEADING: "Press & Track Record"

CONTENT:  
Filmography highlights and press coverage links. Treat as a quiet validation row, not a brag wall.

For Jadon:  
\- Off Rip — Grand Jury Award, Gasparilla International Film Festival (2025)  
\- Off Rip — U.S. Fiction Grand Jury Award, Orlando International Film Festival  
\- Robbie Ain't Right No More — Tribeca, Telluride Horror Show; multiple Best Supporting Actor wins  
\- Bloom — Jackrabbit Studios, Cannes Market 2026 (covered by Bloody Disgusting)

For Meghan:  
\- Lookout — Jackrabbit Studios (2025)  
\- I Am Your Biggest Fan — Lifetime (covered by Bloody Disgusting)  
\- Bloom — Jackrabbit Studios (2026)

For Bot or Not (short):  
\- Screamfest premiere at TCL Chinese Theatre (2025)  
\- Lois Weber Film Festival — Best Sci-Fi Winner  
\- FilmQuest — Best Ensemble Nominee  
\- Fangoria — exclusive trailer drop  
\- \[PLACEHOLDER — additional press\]

VISUAL TREATMENT:  
\- Press logo bar (treated monochrome over dark background)  
\- Linked press articles in a clean list below  
\- Filmography in editorial column format

\----------------------------------------------------------------  
SECTION 11 — CONTACT  
\----------------------------------------------------------------  
HEADING: "Next Steps"

CONTENT:  
\- Short paragraph: "If Bot or Not aligns with your investment thesis, we'd welcome the conversation. Full financial materials and the complete script are available upon request."  
\- Contact form: name, company, email, optional message, capital commitment range (dropdown: Under $250K / $250K–$1M / $1M–$3M / $3M+ / Strategic Interest)  
\- Direct contact: Jadon's email \+ a Calendly link if he wants one \[PLACEHOLDER — Jadon to provide\]  
\- "Response within 48 hours" commitment line

VISUAL TREATMENT:  
\- Form is minimal — labels above inputs, generous spacing, clean focus states  
\- Submit button uses the accent color  
\- Success state: a quiet confirmation, no celebration animation

\================================================================  
THE EIGHT-QUESTION DISTRIBUTOR EVALUATION FRAMEWORK  
\================================================================

REFERENCE NOTE — INTERNAL ONLY, NOT FOR SITE DISPLAY:  
The site references a distributor evaluation framework in Section 9 (Risk & Mitigation). The actual framework is below — eight questions Jadon and the NTC team will ask any distributor before signing. This was seven questions in v1; the WGA deal added an eighth. Keep this internal to the build but reference it as "eight-question framework" anywhere the site mentions it.

1\. Walk me through your windowing plan.  
2\. How long will you emphasize TVOD?  
3\. What's the rationale for AVOD timing?  
4\. How do you handle holdbacks?  
5\. What's your Pay-One philosophy?  
6\. What reporting will I receive on sequencing decisions?  
7\. Will you commit to commercially reasonable efforts to maximize long-term value across windows?  
8\. \*\* NEW: Do you assume WGA residual liability post-sale, or push it back on the production entity? \*\*

\================================================================  
NAVIGATION & FOOTER  
\================================================================

NAVIGATION  
\- Sticky top-right anchor nav on desktop  
\- Hamburger menu on mobile  
\- Sections: The Film · The Short · Team · Package · Market · Financing · Timeline · Risk · Press · Contact  
\- Smooth-scroll behavior on anchor clicks

FOOTER  
\- Minimal. Copyright line (© New Terrain Creative LLC 2026). Privacy / NDA terms link if applicable. No social icons. No newsletter signup. Investor sites do not need viral hooks.

\================================================================  
CONTENT PLACEHOLDERS — JADON / MEGHAN PROVIDES  
\================================================================

The following items need real content before launch. Build the site with explicit \[PLACEHOLDER: description\] tags inline so Jadon can do a content pass without hunting for gaps:

1\. Tagline (Hero) — short evocative line, not the full pitch  
2\. Logline (The Film) — one clean sentence  
3\. Story synopsis (The Film) — \~150–250 words by Meghan as writer  
4\. Production geography (multiple sections — fill once shooting location locked)  
5\. Target production year (Section 2 anchor paragraph \+ Timeline)  
6\. Trailer embed URL (The Short) — from arthousecollective.xyz  
7\. Festival laurel image assets (The Short)  
8\. Press coverage URLs (The Short and Press section)  
9\. Jadon's director bio (Team) — final version, 80–120 words  
10\. Meghan's writer/lead bio (Team) — final version, 80–120 words  
11\. Headshot images for Jadon and Meghan — editorial, monochrome-compatible  
12\. Producer / EP credits (Team and Package)  
13\. Cast attachments (Package) — populate as locked, under saturated-cast discipline  
14\. Sales agent / distribution path (Package) — populate as locked  
15\. Action choreographer / 2nd unit (Package) — populate as locked  
16\. Final budget breakdown (Budget & Financing) — after Blacklist read  
17\. Financing structure / cap stack (Budget & Financing) — must include residual reserve line  
18\. Residual reserve figure (Budget & Financing) — calculated against projected backend obligations  
19\. Recoupment waterfall model (Budget & Financing)  
20\. Production timeline dates (Timeline) — when locked  
21\. Refined risk language (Risk & Mitigation) — Jadon \+ Meghan pass, with post-sale residual liability mitigation language confirmed  
22\. Calendly link or preferred contact method (Contact)  
23\. Accent color choice (or default to warm sodium-vapor amber)  
24\. Domain / DNS setup (point botornotmovie.com to Vercel)  
25\. Access password (set as env var before deploy)

\================================================================  
DEPLOYMENT NOTES  
\================================================================

DOMAIN: botornotmovie.com  
HOSTING: Vercel (matches existing ArtHouse setup)  
ENV VARS NEEDED AT DEPLOY:  
\- BOTORNOT\_ACCESS\_PASSWORD (the shared password)  
\- Any analytics keys (default: Vercel Analytics; do not add third-party trackers without explicit approval — investor privacy matters)

ANALYTICS  
\- Vercel Analytics for traffic only (no third-party trackers)  
\- Log access attempts (timestamps \+ IP only, no fingerprinting) to a simple admin endpoint so Jadon can see who has been accessing  
\- DO NOT email-capture or build a marketing list from this site

REPO  
\- Public or private GitHub repo (Jadon's preference) — recommend PRIVATE for this project  
\- Clean commit history, README with setup \+ deploy instructions, env.example file

\================================================================  
SUCCESS CRITERIA  
\================================================================

A sophisticated investor lands on the site, types the password, scrolls top to bottom on their phone or desktop, and within 5–8 minutes:  
1\. Understands what the film is and why it exists in its lane (the 45-second filter is satisfied in section 1–2)  
2\. Sees evidence the filmmakers are professionals with real track records  
3\. Sees the short film and confirms the visual world is real  
4\. Sees the financing structure is credible and the team has thought through the path — including post-sale risks most indie operations don't anticipate  
5\. Recognizes the buyer landscape as real and current — Vertical and Radial named, MG ranges legible, distribution path concrete  
6\. Reaches the contact section ready to either request a call or close the tab — both are wins, because the site has done the qualifying work either way.

The site does NOT need to convert. It needs to TRIAGE. A self-selected "no" after reading the full site is better than an uninformed "maybe." The feels-inevitable test should govern the reader's experience: they should leave feeling the film is recognized, not invented.

\================================================================  
THINGS TO NOT BUILD  
\================================================================

\- User accounts, signups, email gating  
\- Newsletter capture, marketing automation, popup modals  
\- Cookie banners beyond legal minimum  
\- Social sharing buttons  
\- Comments / discussion features  
\- Multi-language switcher (unless Jadon requests)  
\- Any AI chatbot, "ask me about the film" interface, or generative widget  
\- Heavy hero video that autoplays with sound  
\- Particle effects, custom cursors, scroll-jacking  
\- Anything that screams "indie film marketing site"  
\- Educational content about who Vertical or Radial are — sophisticated readers know; the site's job is not to teach the unsophisticated  
\- Self-congratulatory "we've thought of everything" language — let the structure itself signal that

This site signals "we are running a professional film financing process." Build accordingly.  
