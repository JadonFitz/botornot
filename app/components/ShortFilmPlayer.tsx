'use client'

import { useState } from 'react'

const VIDEO_ID = 'LdkvaQd8ySc'

export default function ShortFilmPlayer() {
  const [playing, setPlaying] = useState(false)

  return (
    <div className="relative aspect-video border border-line overflow-hidden">
      {playing ? (
        <iframe
          src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
          className="absolute inset-0 w-full h-full"
          allow="autoplay; encrypted-media; fullscreen"
          allowFullScreen
          title="Bot or Not — Short Film"
        />
      ) : (
        <button
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 w-full h-full cursor-pointer"
          aria-label="Play the Bot or Not short film"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/trailer-poster.jpg"
            alt="Bot or Not — Short Film"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors duration-200" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="flex items-center justify-center bg-red-600"
              style={{ width: 52, height: 44 }}
            >
              <svg viewBox="0 0 10 12" fill="white" width={11} height={13} aria-hidden>
                <polygon points="0,0 10,6 0,12" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-5 left-5 flex items-center gap-3 pointer-events-none">
            <span className="block w-4 h-px bg-red-600" />
            <span className="text-[10px] tracking-[0.28em] uppercase text-fg/75">
              Watch the Short Film
            </span>
          </div>
        </button>
      )}
    </div>
  )
}
