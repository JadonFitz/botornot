'use server'

import { sendNotification } from './email'

export interface ContactState {
  success?: boolean
  error?: string
}

export async function contactAction(
  _prevState: ContactState | null,
  formData: FormData
): Promise<ContactState> {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const company = formData.get('company') as string
  const message = formData.get('message') as string
  const commitment = formData.get('commitment') as string

  if (!name?.trim() || !email?.trim()) {
    return { error: 'Name and email are required.' }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { error: 'Please enter a valid email address.' }
  }

  const subject = `Investor inquiry — ${name}${commitment ? ` (${commitment})` : ''}`
  const body = [
    `Name: ${name}`,
    `Email: ${email}`,
    company ? `Company / Fund: ${company}` : null,
    commitment ? `Commitment range: ${commitment}` : null,
    message ? `\nMessage:\n${message}` : null,
    `\nSubmitted: ${new Date().toISOString()}`,
  ]
    .filter(Boolean)
    .join('\n')

  const sent = await sendNotification(subject, body, email)
  if (!sent) {
    // Unconfigured or delivery failure — keep the payload in server logs so it isn't lost silently
    console.log('[Bot or Not — Contact Inquiry — EMAIL NOT DELIVERED]', {
      name,
      email,
      company,
      message,
      commitment,
      timestamp: new Date().toISOString(),
    })
  }

  return { success: true }
}
