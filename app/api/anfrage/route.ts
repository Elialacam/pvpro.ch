import { NextRequest, NextResponse } from 'next/server'
import { createHash } from 'crypto'

export const runtime = 'nodejs'

const PIXEL_ID = '1848326999213371'

function sha256(value: string): string {
  return createHash('sha256').update(value.trim().toLowerCase()).digest('hex')
}

interface CAPIParams {
  email: string
  phone: string
  sourceUrl: string
  clientIp: string
  clientAgent: string
  fbclid?: string
  fbp?: string
  fbc?: string
  eventId?: string
}

async function sendMetaCAPI(p: CAPIParams) {
  const token = process.env.META_CAPI_TOKEN
  if (!token) return

  const normalizedPhone = p.phone.replace(/\s+/g, '').replace(/^\+41/, '0041')

  const userData: Record<string, any> = {
    em: [sha256(p.email)],
    ph: [sha256(normalizedPhone)],
  }

  if (p.clientIp)    userData.client_ip_address = p.clientIp
  if (p.clientAgent) userData.client_user_agent = p.clientAgent

  if (p.fbc) {
    userData.fbc = p.fbc
  } else if (p.fbclid) {
    userData.fbc = `fb.1.${Date.now()}.${p.fbclid}`
  }
  if (p.fbp) userData.fbp = p.fbp

  const event: Record<string, any> = {
    event_name: 'Lead',
    event_time: Math.floor(Date.now() / 1000),
    action_source: 'website',
    event_source_url: p.sourceUrl || 'https://www.pvpro.ch/anfrage',
    user_data: userData,
  }

  if (p.eventId) event.event_id = p.eventId

  try {
    const res = await fetch(
      `https://graph.facebook.com/v19.0/${PIXEL_ID}/events?access_token=${token}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: [event] }),
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
    const fbclid     = body.fbclid     ?? ''
    const fbp        = body.fbp        ?? ''
    const fbc        = body.fbc        ?? ''
    const event_id   = body.event_id   ?? ''

    const sourceUrl   = request.headers.get('referer') ?? 'https://www.pvpro.ch/anfrage'
    const clientIp    = request.headers.get('x-forwarded-for')?.split(',')[0].trim()
                     ?? request.headers.get('x-real-ip')
                     ?? ''
    const clientAgent = request.headers.get('user-agent') ?? ''

    const [leadsyncRes] = await Promise.all([
      fetch('https://lead-suryoyo.replit.app/api/webhook/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'f528ee7621a5c97665efd7561ac35a3ae0ab10eb4eef03b1',
        },
        body: JSON.stringify({
          name,
          phone,
          email,
          address,
          utm_source: utm_source || 'organic',
          ...(fbclid ? { fbclid } : {}),
        }),
      }),
      sendMetaCAPI({
        email,
        phone,
        sourceUrl,
        clientIp,
        clientAgent,
        fbclid: fbclid || undefined,
        fbp:    fbp    || undefined,
        fbc:    fbc    || undefined,
        eventId: event_id || undefined,
      }),
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
