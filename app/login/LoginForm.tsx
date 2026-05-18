'use client'

import { useActionState, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { loginAction } from './actions'

const ANIM_MS = 4200

export default function LoginForm() {
  const [state, action, isPending] = useActionState(loginAction, null)
  const [animating, setAnimating] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (!state?.success) return
    setAnimating(true)
    const t = setTimeout(() => router.push('/'), ANIM_MS - 200)
    return () => clearTimeout(t)
  }, [state?.success, router])

  return (
    <>
      {animating && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{
            backgroundColor: '#000',
            animation: `welcomeOverlay ${ANIM_MS}ms ease forwards`,
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 100,
              fontSize: 'clamp(1.2rem, 4vw, 2rem)',
              letterSpacing: '0.6em',
              color: '#fff',
              animation: `welcomeText ${ANIM_MS}ms ease forwards`,
              textShadow:
                '0 0 20px rgba(255,255,255,0.95), 0 0 50px rgba(255,255,255,0.45), 0 0 100px rgba(255,255,255,0.2)',
            }}
          >
            WELCOME
          </span>
        </div>
      )}

      <form action={action} className="w-full flex flex-col items-center">
        <label htmlFor="password" className="sr-only">
          Password
        </label>
        <input
          id="password"
          type="password"
          name="password"
          required
          autoFocus
          autoComplete="current-password"
          disabled={isPending || animating}
          className="w-full bg-white border border-white px-4 py-3 text-black placeholder-black/40 focus:outline-none focus:ring-2 focus:ring-white/60 transition-shadow duration-200 text-sm text-center tracking-[0.2em]"
        />
        <button type="submit" className="sr-only" disabled={isPending || animating}>
          Enter
        </button>
        {state?.error && (
          <p className="mt-3 text-xs text-red-400" role="alert">
            {state.error}
          </p>
        )}
      </form>
    </>
  )
}
