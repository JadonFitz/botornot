import FadeIn from '../FadeIn'

interface Character {
  name: string
  role: string
  cast?: string
  text: string
}

const characters: Character[] = [
  {
    name: 'Juliet',
    role: 'The Lead',
    cast: 'Meghan Carrasquillo',
    text: 'A brilliant, driven coder at VANTIS specializing in emotional-response AI for next-generation robots. Still mourning the loss of her fiancé Rhett, she is drawn into BOT OR NOT by curiosity and scientific rigor — navigating romance, deception, and high-stakes challenges. Resourceful and morally grounded, Juliet is the emotional and analytical heart of the story.',
  },
  {
    name: 'Declan Callum',
    role: 'The Host',
    cast: 'Chris Moss',
    text: 'The magnetic host of BOT OR NOT. Charming on camera, he controls the flow of the game with subtle precision, balancing entertainment and manipulation. Behind the smile, Declan knows how to push buttons, spark rivalries, and heighten drama — both a guide and a subtle threat.',
  },
  {
    name: 'Blair',
    role: 'Season Four Finalist',
    cast: 'Gigi Gustin',
    text: 'The beloved contestant who captures viewers with her warmth and relatability. We meet her at the very start as the finalist of Season Four — her journey reveals both the glamour and the hidden pressures of the game, and sparks the curiosity that drives our main characters to uncover the truth behind the competition.',
  },
  {
    name: 'Aiden S1/S2',
    role: 'The Romantic Focus',
    text: 'A former marine turned thrill-seeker, living life on the edge because he knows how fragile it can be. On BOT OR NOT he exists in two versions — one robot, one human — both embodying the same daring spirit. Aiden becomes both Juliet’s emotional anchor and the catalyst for her exploration of love, trust, and the blurred line between human and artificial intelligence.',
  },
  {
    name: 'Vera',
    role: 'CEO of VANTIS',
    text: 'The visionary CEO of VANTIS, the cutting-edge tech company behind BOT OR NOT. Brilliant, meticulous, and strategic, she orchestrates the show from behind the scenes. To the outside world she appears supportive and inspiring, but her true motives are calculated and enigmatic — both a mentor and a potential adversary to Juliet.',
  },
  {
    name: 'Rhett',
    role: 'The Fiancé',
    text: 'Juliet’s beloved fiancé, whose disappearance haunts her throughout the story. Unknown to Juliet, he is secretly involved in the larger scheme of BOT OR NOT and VANTIS’ plans — a pivotal figure in the show’s true agenda whose presence drives Juliet’s emotional stakes and adds layers of mystery and betrayal.',
  },
  {
    name: 'Piper',
    role: 'The Sister',
    text: 'Juliet’s younger sister and a prodigy in her own right — a brilliant young innovator with a knack for hacking, coding, and all things futuristic. Confident and effortlessly cool, Piper is always ready to tinker with tech and push boundaries while looking up to her older sister as her inspiration.',
  },
  {
    name: 'Maeve',
    role: 'The Best Friend',
    text: 'Juliet’s sharp, fiercely loyal best friend at VANTIS and the creative force behind the bots’ iconic looks. She pressures Juliet to join BOT OR NOT — not just for love, but to uncover the truth behind the villas. A bold, stylish designer who makes the impossible look effortless.',
  },
  {
    name: 'Mateo',
    role: 'The Ally',
    text: 'Juliet’s confidant and problem-solver once she enters the show, helping her make sense of BOT OR NOT both on and off set. Calm and resourceful, and initially unaware of the show’s deeper manipulations, Mateo uncovers the truth alongside Juliet — a crucial ally in her journey to expose the reality behind the game.',
  },
  {
    name: 'Skylar',
    role: 'The Competitor',
    text: 'A mega-famous influencer beloved for her charisma and martial arts skills. On BOT OR NOT she brings daring, fearless energy into the villa — challenging rivals and pushing boundaries at every turn, forcing Juliet and the other contestants to confront challenges in unexpected ways.',
  },
  {
    name: 'Benny',
    role: 'The Wildcard',
    text: 'The fun-loving contestant who brings energy, humor, and spontaneity to the villa. Always ready with a joke or a playful stunt, he keeps the atmosphere lively and unpredictable. While he seems carefree, Benny’s charm and social skills make him a clever strategist in disguise.',
  },
  {
    name: 'Luna',
    role: 'The Quiet Force',
    text: 'The calm, composed contestant whose inner strength and resilience quietly influence the villa’s dynamics. She observes carefully, acts thoughtfully, and often becomes a stabilizing presence amidst the chaos — proving that influence doesn’t always come from noise or spectacle.',
  },
]

export default function CharactersSection() {
  return (
    <section id="characters" className="py-28 md:py-36 border-t border-line">
      <div className="max-w-[76rem] mx-auto px-6">
        <FadeIn>
          <p className="text-[11px] tracking-[0.3em] uppercase text-dim mb-5">
            § 03 — The Characters
          </p>
          <h2 className="font-serif font-normal text-fg leading-tight mb-8"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}>
            The Characters
          </h2>
          <p className="text-dim text-sm mb-14 max-w-xl leading-relaxed">
            Juliet, Declan Callum, and Blair are cast. All other roles will be cast through
            auditions — talent references in the pitch deck are aspirational benchmarks for tone
            and archetype, not locked cast.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
          {characters.map((c, i) => (
            <FadeIn key={c.name} delay={0.04 + (i % 3) * 0.05}>
              <div className="bg-bg p-7 h-full flex flex-col">
                <p className="text-[10px] tracking-[0.25em] uppercase text-dim mb-2">{c.role}</p>
                <h3 className="font-serif text-xl text-fg mb-1">{c.name}</h3>
                {c.cast ? (
                  <p className="text-[11px] tracking-[0.15em] uppercase text-accent mb-4">
                    {c.cast} — Cast in Place
                  </p>
                ) : (
                  <p className="text-[11px] tracking-[0.15em] uppercase text-dim/60 mb-4">
                    Casting via Auditions
                  </p>
                )}
                <p className="text-dim text-sm leading-[1.8]">{c.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
