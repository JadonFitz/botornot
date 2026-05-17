'use client'

import { useActionState } from 'react'
import { loginAction } from './actions'

export default function LoginForm() {
  const [state, action, isPending] = useActionState(loginAction, null)

  return (
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
        disabled={isPending}
        className="w-full bg-white border border-white px-4 py-3 text-black placeholder-black/40 focus:outline-none focus:ring-2 focus:ring-white/60 transition-shadow duration-200 text-sm text-center tracking-[0.2em]"
      />
      <button type="submit" className="sr-only" disabled={isPending}>
        Enter
      </button>
      {state?.error && (
        <p className="mt-3 text-xs text-red-400" role="alert">
          {state.error}
        </p>
      )}
    </form>
  )
}
