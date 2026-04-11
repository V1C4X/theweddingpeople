import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { validateEnquiry, isValid, type EnquiryData } from '@/lib/enquiry'

const resend = new Resend(process.env.RESEND_API_KEY)

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
      subject: `New Enquiry — ${data.name} (${data.date})`,
      html: `
        <h2>New Wedding Enquiry</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Wedding Date:</strong> ${data.date}</p>
        <p><strong>Guest Count:</strong> ${data.guests}</p>
        <p><strong>Items Interested In:</strong> ${data.items.join(', ')}</p>
        <p><strong>Message:</strong><br>${data.message || '(none)'}</p>
      `,
    })
  } catch (err) {
    console.error('Resend error:', err)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
