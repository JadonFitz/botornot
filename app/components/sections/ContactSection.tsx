'use client'

import { useActionState } from 'react'
import { contactAction } from '../../actions/contact'
import FadeIn from '../FadeIn'

const commitmentOptions = [
  'Select range',
  'Under $250K',
  '$250K – $1M',
  '$1M – $3M',
  '$3M+',
  'Strategic Interest',
]

export default function ContactSection() {
  const [state, action, isPending] = useActionState(contactAction, null)

  if (state?.success) {
    return (
      <section id="contact" className="py-28 md:py-36 border-t border-line">
        <div className="max-w-[76rem] mx-auto px-6">
          <FadeIn>
            <p className="text-[11px] tracking-[0.3em] uppercase text-dim mb-5">§ 10 — Contact</p>
            <h2 className="font-serif font-normal text-fg leading-tight mb-8"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}>
              Next Steps
            </h2>
            <div className="border border-line p-8 max-w-lg">
              <p className="text-fg text-sm leading-relaxed mb-2">Message received.</p>
              <p className="text-dim text-sm">
                We'll be in touch within 48 hours.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-28 md:py-36 border-t border-line">
      <div className="max-w-[76rem] mx-auto px-6">
        <FadeIn>
          <p className="text-[11px] tracking-[0.3em] uppercase text-dim mb-5">§ 10 — Contact</p>
          <h2 className="font-serif font-normal text-fg leading-tight mb-6"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}>
            Next Steps
          </h2>
          <p className="text-fg text-base leading-relaxed max-w-xl mb-14">
            If Bot or Not aligns with your investment thesis, we'd welcome the conversation. Full
            financial materials and the complete script are available upon request.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-16 max-w-4xl">
          <FadeIn delay={0.08}>
            <form action={action} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-[11px] tracking-[0.2em] uppercase text-dim mb-2">
                  Name <span className="text-accent">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full bg-transparent border border-line px-4 py-3 text-fg text-sm placeholder-dim focus:outline-none focus:border-accent transition-colors duration-200"
                  placeholder="Full name"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-[11px] tracking-[0.2em] uppercase text-dim mb-2">
                  Company / Fund
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  className="w-full bg-transparent border border-line px-4 py-3 text-fg text-sm placeholder-dim focus:outline-none focus:border-accent transition-colors duration-200"
                  placeholder="Company or fund name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[11px] tracking-[0.2em] uppercase text-dim mb-2">
                  Email <span className="text-accent">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full bg-transparent border border-line px-4 py-3 text-fg text-sm placeholder-dim focus:outline-none focus:border-accent transition-colors duration-200"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label htmlFor="commitment" className="block text-[11px] tracking-[0.2em] uppercase text-dim mb-2">
                  Capital Commitment Range
                </label>
                <select
                  id="commitment"
                  name="commitment"
                  className="w-full bg-bg border border-line px-4 py-3 text-fg text-sm focus:outline-none focus:border-accent transition-colors duration-200 appearance-none cursor-pointer"
                >
                  {commitmentOptions.map((opt) => (
                    <option key={opt} value={opt === 'Select range' ? '' : opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-[11px] tracking-[0.2em] uppercase text-dim mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full bg-transparent border border-line px-4 py-3 text-fg text-sm placeholder-dim focus:outline-none focus:border-accent transition-colors duration-200 resize-none"
                  placeholder="Optional — share anything relevant to your interest"
                />
              </div>

              {state?.error && (
                <p className="text-red-400 text-sm" role="alert">
                  {state.error}
                </p>
              )}

              <button
                type="submit"
                disabled={isPending}
                className="w-full bg-accent text-bg py-3.5 text-xs tracking-[0.2em] uppercase font-medium disabled:opacity-50 hover:opacity-90 transition-opacity duration-200 cursor-pointer"
              >
                {isPending ? 'Sending…' : 'Send Inquiry'}
              </button>

              <p className="text-dim text-xs">Response within 48 hours.</p>
            </form>
          </FadeIn>

          <FadeIn delay={0.14}>
            <div className="space-y-8">
              <div>
                <h3 className="text-[11px] tracking-[0.25em] uppercase text-dim mb-3">
                  Direct Contact
                </h3>
                <a
                  href="mailto:jadon@newterraincreative.com"
                  className="text-fg text-sm hover:text-accent transition-colors duration-200"
                >
                  jadon@newterraincreative.com
                </a>
              </div>

              {/* PLACEHOLDER: Calendly link if Jadon wants one */}
              {/* <div>
                <h3 className="text-[11px] tracking-[0.25em] uppercase text-dim mb-3">
                  Schedule a Call
                </h3>
                <a
                  href="CALENDLY_LINK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fg text-sm hover:text-accent transition-colors duration-200"
                >
                  Book a 30-minute call →
                </a>
              </div> */}

              <div className="pt-4 border-t border-line">
                <p className="text-dim text-xs leading-relaxed">
                  Full financial materials — including the recoupment waterfall model, detailed
                  budget breakdown, and complete screenplay — are available under NDA upon request.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
