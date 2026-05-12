import type { Metadata } from 'next'
import LoginForm from './LoginForm'

export const metadata: Metadata = {
  title: 'Investor Access — Bot or Not',
  robots: { index: false, follow: false },
}

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg px-6">
      <div className="w-full max-w-[340px]">
        <div className="mb-12 text-center">
          <h1 className="font-serif text-2xl tracking-wider text-fg mb-3">
            Bot or Not
          </h1>
          <p className="text-dim text-xs tracking-[0.25em] uppercase">
            Investor Access
          </p>
        </div>

        <LoginForm />

        <p className="mt-8 text-center text-dim text-[11px] tracking-wide">
          Access restricted. Contact{' '}
          <a
            href="mailto:jadon@newterraincreative.com"
            className="text-fg hover:text-accent transition-colors duration-200"
          >
            jadon@newterraincreative.com
          </a>{' '}
          to request credentials.
        </p>
      </div>
    </div>
  )
}
