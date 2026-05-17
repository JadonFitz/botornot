import type { Metadata } from 'next'
import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'Bot or Not — Investor Overview',
  description: 'A $5M PG-13 action-thriller. Investor information available upon request.',
  robots: { index: false, follow: false },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full bg-bg`}
    >
      <body className="min-h-full flex flex-col text-fg antialiased bg-transparent">
        <video
          className="fixed inset-0 -z-10 h-full w-full object-cover"
          src="/bon-backdrop.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden
        />
        <div className="fixed inset-0 -z-10 bg-bg/60" aria-hidden />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
