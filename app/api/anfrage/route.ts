import { NextRequest, NextResponse } from 'next/server'
import { createHash } from 'crypto'

export const runtime = 'nodejs'

const PIXEL_ID = '1848326999213371'

function sha256(value: string): string {
  return createHash('sha256').update(value.trim().toLowerCase()).digest('hex')
}

async function sendMetaCAPI(email: string, phone: string, sourceUrl: string) {
  const token = process.env.META_CAPI_TOKEN
  if (!token) return

  const normalizedPhone = phone.replace(/\s+/g, '').replace(/^\+41/, '0041')

  const payload = {
    data: [{
      event_name: 'Lead',
      event_time: Math.floor(Date.now() / 1000),
      action_source: 'website',
      event_source_url: sourceUrl || 'https://www.pvpro.ch/anfrage',
      user_data: {
        em: [sha256(email)],
        ph: [sha256(normalizedPhone)],
      },
    }],
  }

  try {
    const res = await fetch(
      `https://graph.facebook.com/v19.0/${PIXEL_ID}/events?access_token=${token}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }
    )
    const result = await res.json()
    if (!res.ok) {
      console.error('Meta CAPI error:', result)
    } else {
      console.log('Meta CAPI ok:', result.events_received, 'events received')
    }
  } catch (err) {
    console.error('Meta CAPI exception:', err)
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const name       = body['FULL NAME']        ?? body.name       ?? ''
    const phone      = body['PHONE NUMBER']     ?? body.phone      ?? ''
    const email      = body['EMAIL']            ?? body.email      ?? ''
    const address    = body['COMPLETE ADDRESS'] ?? body.address    ?? ''
    const utm_source = body.utm_source ?? ''
    const sourceUrl  = request.headers.get('referer') ?? ''

    // Send to LeadSync and Meta CAPI in parallel
    const [leadsyncRes] = await Promise.all([
      fetch('https://lead-suryoyo.replit.app/api/webhook/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'f528ee7621a5c97665efd7561ac35a3ae0ab10eb4eef03b1',
        },
        body: JSON.stringify({ name, phone, email, address, ...(utm_source ? { utm_source } : {}) }),
      }),
      sendMetaCAPI(email, phone, sourceUrl),
    ])

    if (!leadsyncRes.ok) {
      const text = await leadsyncRes.text()
      console.error('LeadSync error:', leadsyncRes.status, text)
      return NextResponse.json({ error: 'Submission failed' }, { status: 400 })
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error: any) {
    console.error('Anfrage error:', error)
    return NextResponse.json({ error: 'Fehler beim Senden' }, { status: 500 })
  }
}
