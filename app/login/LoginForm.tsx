'use client'

import { useActionState } from 'react'
import { loginAction } from './actions'

export default function LoginForm() {
  const [state, action, isPending] = useActionState(loginAction, null)

  return (
    <form action={action} className="space-y-4">
      <div>
        <label htmlFor="password" className="block text-xs tracking-widest uppercase text-dim mb-2">
          Password
        </label>
        <input
          id="password"
          type="password"
          name="password"
          required
          autoFocus
          autoComplete="current-password"
          className="w-full bg-transparent border border-line px-4 py-3 text-fg placeholder-dim focus:outline-none focus:border-accent transition-colors duration-200 text-sm"
          placeholder="Enter access password"
        />
      </div>

      {state?.error && (
        <p className="text-sm text-red-400" role="alert">
          {state.error}
        </p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-accent text-bg py-3 text-xs tracking-[0.2em] uppercase font-medium disabled:opacity-50 hover:opacity-90 transition-opacity duration-200 cursor-pointer"
      >
        {isPending ? 'Verifying…' : 'Enter'}
      </button>
    </form>
  )
}
