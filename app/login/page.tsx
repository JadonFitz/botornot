import type { Metadata } from 'next'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

export const metadata: Metadata = {
  title: 'Investor Access — Bot or Not',
  robots: { index: false, follow: false },
}

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-[320px] flex flex-col items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/lock.png"
          alt=""
          aria-hidden
          className="lock-float mb-6 w-24 h-auto"
          style={{
            opacity: 0.82,
            filter:
              'drop-shadow(0 0 8px rgba(255,255,255,0.7)) drop-shadow(0 0 24px rgba(255,255,255,0.35)) drop-shadow(0 0 48px rgba(255,255,255,0.18))',
          }}
        />

        <LoginForm />

        {/* Fan signup */}
        <div className="w-full mt-14">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-white/20" />
            <span className="text-[9px] tracking-[0.35em] uppercase text-white/50 shrink-0">
              Sign up for updates
            </span>
            <div className="flex-1 h-px bg-white/20" />
          </div>
          <SignupForm />
        </div>
      </div>
    </div>
  )
}
