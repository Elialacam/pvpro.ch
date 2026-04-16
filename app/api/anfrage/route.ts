import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'nodejs'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const response = await fetch('https://lead-suryoyo.replit.app/api/webhook/form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'f528ee7621a5c97665efd7561ac35a3ae0ab10eb4eef03b1',
      },
      body: JSON.stringify({
        name:    body['FULL NAME']       ?? body.name    ?? '',
        phone:   body['PHONE NUMBER']    ?? body.phone   ?? '',
        email:   body['EMAIL']           ?? body.email   ?? '',
        address: body['COMPLETE ADDRESS'] ?? body.address ?? '',
      }),
    })

    if (!response.ok) {
      const text = await response.text()
      console.error('LeadSync error:', response.status, text)
      return NextResponse.json({ error: 'Submission failed' }, { status: 400 })
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error: any) {
    console.error('Anfrage error:', error)
    return NextResponse.json({ error: 'Fehler beim Senden' }, { status: 500 })
  }
}
