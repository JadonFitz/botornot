'use server'

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

  // TODO: Wire up email list provider
  // Resend example: await resend.contacts.create({ email, audienceId: process.env.RESEND_AUDIENCE_ID })
  // Mailchimp example: await mailchimp.lists.addListMember(process.env.MAILCHIMP_LIST_ID, { email_address: email, status: 'subscribed' })
  console.log('[Bot or Not — Fan Signup]', { email, timestamp: new Date().toISOString() })

  return { success: true }
}
