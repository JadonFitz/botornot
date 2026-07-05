'use client'

import { useActionState } from 'react'
import { signupAction } from '../actions/signup'

export default function SignupForm() {
  const [state, action, isPending] = useActionState(signupAction, null)

  if (state?.success) {
    return (
      <p className="text-white/70 text-sm py-3 tracking-wide text-center">
        You&apos;re on the list. We&apos;ll be in touch.
      </p>
    )
  }

  return (
    <div className="space-y-3">
      <form action={action} className="flex gap-2">
        <input
          type="email"
          name="email"
          required
          placeholder="your@email.com"
          className="flex-1 min-w-0 bg-white/5 border border-white/30 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/70 transition-colors duration-200 text-sm"
        />
        <button
          type="submit"
          disabled={isPending}
          className="bg-white text-black px-5 py-3 text-[11px] tracking-[0.2em] uppercase font-medium disabled:opacity-50 hover:opacity-90 transition-opacity duration-200 cursor-pointer shrink-0"
        >
          {isPending ? '…' : 'Notify Me'}
        </button>
      </form>
      {state?.error && (
        <p className="text-red-400 text-xs" role="alert">{state.error}</p>
      )}
    </div>
  )
}
