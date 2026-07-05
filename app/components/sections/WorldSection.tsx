import FadeIn from '../FadeIn'

const worldBlocks = [
  {
    name: 'VANTIS',
    tag: 'The Conglomerate',
    text: 'At the heart of this world is VANTIS, the powerful tech conglomerate that dominates AI development. VANTIS appears to be a beacon of progress and innovation, shaping society’s vision of a utopian future. Behind its polished exterior, however, VANTIS wields immense control over both technology and human behavior.',
  },
  {
    name: 'True-Form Studios',
    tag: 'The Studio',
    text: 'In 2040, TRUE-FORM STUDIOS is the dominant global film studio — the Warner Brothers/Paramount of its era. Known for high-concept, visually groundbreaking films and television, it combines cutting-edge technology with massive audience reach. TRUE-FORM is where franchises are born.',
  },
  {
    name: 'The Pod Villas',
    tag: 'The Setting',
    text: 'A futuristic residential complex on the TRUE-FORM Studios lot, designed exclusively for BOT OR NOT contestants. Sleek, modular, and ultra-modern, each pod is a self-contained living space with smart technology, customizable environments, and integrated AI assistants — the world’s promise of technological perfection.',
  },
  {
    name: 'S1s & S2s',
    tag: 'The Game',
    text: 'Each contestant on BOT OR NOT dates a human and a robotic version of the human (S1/S2) — both designed to test the boundaries of attraction, connection, and trust. While Aiden S1/S2 is Juliet’s romantic focus, other contestants navigate their own human/robot pairings, creating complex dynamics, rivalry, and intrigue within the villas.',
  },
]

export default function WorldSection() {
  return (
    <section id="world" className="py-28 md:py-36 border-t border-line">
      <div className="max-w-[76rem] mx-auto px-6">
        <FadeIn>
          <p className="text-[11px] tracking-[0.3em] uppercase text-dim mb-5">§ 02 — The World</p>
          <h2 className="font-serif font-normal text-fg leading-tight mb-8"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}>
            The World of 2040
          </h2>
        </FadeIn>

        <FadeIn delay={0.08}>
          <p className="text-fg text-base leading-[1.85] max-w-xl mb-16 pl-5 border-l-2 border-accent">
            On the surface, a society where technology has enhanced life for everyone — effortless
            luxury, efficiency, and convenience. Underneath, a system built to manipulate, test,
            and control.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-px bg-line border border-line max-w-4xl">
          {worldBlocks.map((block, i) => (
            <FadeIn key={block.name} delay={0.1 + i * 0.05}>
              <div className="bg-bg p-7 h-full">
                <p className="text-[10px] tracking-[0.25em] uppercase text-accent mb-2">
                  {block.tag}
                </p>
                <h3 className="font-serif text-xl text-fg mb-4">{block.name}</h3>
                <p className="text-dim text-sm leading-[1.85]">{block.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
