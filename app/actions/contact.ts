'use server'

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

  // TODO: Wire up email delivery (Resend, SendGrid, etc.)
  // Example: await resend.emails.send({ from, to: 'jadon@newterraincreative.com', subject, html })
  console.log('[Bot or Not — Contact Inquiry]', {
    name,
    email,
    company,
    message,
    commitment,
    timestamp: new Date().toISOString(),
  })

  return { success: true }
}
