import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
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

export const metadata: Metadata = {
  title: 'Bot or Not | Investor Overview',
  description: 'A contained sci-fi thriller. $5M raise fully capitalized through theatrical release. Investor information available upon request.',
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
      className={`${geistSans.variable} ${geistMono.variable} h-full bg-bg`}
    >
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/maw0gth.css" />
      </head>
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
