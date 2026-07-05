// Server-side email notification via Resend's REST API (no SDK dependency).
// Requires RESEND_API_KEY in the environment (Vercel project settings / .env.local).
// Returns false when unconfigured or on failure so callers can fall back to logging.

const NOTIFY_TO = 'jadon@newterraincreative.com'

export async function sendNotification(
  subject: string,
  text: string,
  replyTo?: string
): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) return false

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Bot or Not Site <onboarding@resend.dev>',
        to: [NOTIFY_TO],
        ...(replyTo ? { reply_to: replyTo } : {}),
        subject,
        text,
      }),
    })
    return res.ok
  } catch {
    return false
  }
}
