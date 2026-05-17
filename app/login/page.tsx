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
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-12 h-12 mb-6 text-white"
          style={{
            filter:
              'drop-shadow(0 0 6px rgba(255,255,255,0.9)) drop-shadow(0 0 18px rgba(255,255,255,0.5)) drop-shadow(0 0 40px rgba(255,255,255,0.3))',
          }}
        >
          <rect x="4.5" y="10.5" width="15" height="10" rx="1.5" />
          <path d="M8 10.5V7a4 4 0 0 1 8 0v3.5" />
          <circle cx="12" cy="15.5" r="1" fill="currentColor" />
        </svg>

        <LoginForm />
      </div>
    </div>
  )
}
