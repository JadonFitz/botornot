import type { Metadata } from 'next'
import LoginForm from './LoginForm'

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
      </div>
    </div>
  )
}
