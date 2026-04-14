import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { validateEnquiry, isValid, type EnquiryData } from '@/lib/enquiry'

const resend = new Resend(process.env.RESEND_API_KEY || 'placeholder')

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export async function POST(req: NextRequest) {
  let data: EnquiryData

  try {
    data = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const errors = validateEnquiry(data)
  if (!isValid(errors)) {
    return NextResponse.json({ errors }, { status: 422 })
  }

  try {
    await resend.emails.send({
      from:    'The Wedding People <onboarding@resend.dev>',
      to:      process.env.CONTACT_EMAIL!,
      subject: `New Enquiry — ${escapeHtml(data.name)} (${escapeHtml(data.date)})`,
      html: `
        <h2>New Wedding Enquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
        <p><strong>Wedding Date:</strong> ${escapeHtml(data.date)}</p>
        <p><strong>Guest Count:</strong> ${escapeHtml(data.guests)}</p>
        <p><strong>Items Interested In:</strong> ${data.items.map(escapeHtml).join(', ')}</p>
        <p><strong>Message:</strong><br>${escapeHtml(data.message || '(none)')}</p>
      `,
    })
  } catch (err) {
    console.error('Resend error:', err)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
