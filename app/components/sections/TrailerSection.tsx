'use client'

import { useState } from 'react'
import FadeIn from '../FadeIn'

const VIDEO_ID = 'KybQ0SDiDAk'

export default function TrailerSection() {
  const [playing, setPlaying] = useState(false)

  return (
    <section id="trailer" className="py-16 px-6">
      <div className="max-w-[76rem] mx-auto">
        <FadeIn>
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/9' }}>
            {playing ? (
              <iframe
                src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
                className="absolute inset-0 w-full h-full"
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
                title="Bot or Not — Official Trailer"
              />
            ) : (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                  alt="Bot or Not — Official Trailer thumbnail"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/25" />

                <button
                  onClick={() => setPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center cursor-pointer"
                  aria-label="Play official trailer"
                >
                  <div
                    className="flex items-center justify-center bg-red-600"
                    style={{ width: 52, height: 44 }}
                  >
                    <svg viewBox="0 0 10 12" fill="white" width={11} height={13} aria-hidden>
                      <polygon points="0,0 10,6 0,12" />
                    </svg>
                  </div>
                </button>

                <div className="absolute bottom-5 left-5 flex items-center gap-3 pointer-events-none">
                  <span className="block w-4 h-px bg-red-600" />
                  <span className="text-[10px] tracking-[0.28em] uppercase text-fg/75">
                    Official Trailer
                  </span>
                </div>
              </>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
