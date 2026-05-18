'use server'

import { cookies } from 'next/headers'

interface LoginState {
  error?: string
  success?: boolean
}

export async function loginAction(
  _prevState: LoginState | null,
  formData: FormData
): Promise<LoginState> {
  const password = formData.get('password') as string
  const correctPassword = process.env.BOTORNOT_ACCESS_PASSWORD

  if (!correctPassword || password !== correctPassword) {
    return { error: 'Incorrect password. Try again.' }
  }

  const cookieStore = await cookies()
  cookieStore.set('botornot_access', 'authenticated', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 30,
    path: '/',
    sameSite: 'strict',
  })

  return { success: true }
}
