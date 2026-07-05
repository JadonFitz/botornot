'use server'

import { sendNotification } from './email'

export interface SignupState {
  success?: boolean
  error?: string
}

export async function signupAction(
  _prevState: SignupState | null,
  formData: FormData
): Promise<SignupState> {
  const email = formData.get('email') as string

  if (!email?.trim()) {
    return { error: 'Email is required.' }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { error: 'Please enter a valid email address.' }
  }

  // TODO: Optionally add signups to a proper list provider later
  // Resend example: await resend.contacts.create({ email, audienceId: process.env.RESEND_AUDIENCE_ID })
  const sent = await sendNotification(
    'New fan signup — Bot or Not',
    `Email: ${email}\nSubmitted: ${new Date().toISOString()}`
  )
  if (!sent) {
    console.log('[Bot or Not — Fan Signup — EMAIL NOT DELIVERED]', {
      email,
      timestamp: new Date().toISOString(),
    })
  }

  return { success: true }
}
