import { NextRequest, NextResponse } from 'next/server'
import { createHash } from 'crypto'

export const runtime = 'nodejs'

const PIXEL_ID = '1848326999213371'
const OPENAI_ADS_PIXEL_ID = '8NEq6ZtADcZQCEFa5sRNhY'

function sha256(value: string): string {
  return createHash('sha256').update(value.trim().toLowerCase()).digest('hex')
}

function normalizePhone(phone: string): string {
  let digits = phone.replace(/\D/g, '')
  if (digits.startsWith('00')) {
    digits = digits.slice(2)
  } else if (digits.startsWith('0')) {
    digits = `41${digits.slice(1)}`
  }
  return digits
}

async function sendMetaCAPI({
  email,
  phone,
  firstName,
  lastName,
  sourceUrl,
  fbclid,
  fbp,
  fbc,
  clientIp,
  userAgent,
  eventId,
}: {
  email: string
  phone: string
  firstName?: string
  lastName?: string
  sourceUrl: string
  fbclid?: string
  fbp?: string
  fbc?: string
  clientIp?: string
  userAgent?: string
  eventId?: string
}) {
  const token = process.env.META_CAPI_TOKEN
  if (!token) return

  const userData: Record<string, any> = {
    em: [sha256(email)],
    ph: [sha256(normalizePhone(phone))],
  }

  if (firstName) userData.fn = [sha256(firstName)]
  if (lastName) userData.ln = [sha256(lastName)]
  if (clientIp) userData.client_ip_address = clientIp
  if (userAgent) userData.client_user_agent = userAgent
  if (fbp) userData.fbp = fbp
  if (fbc) {
    userData.fbc = fbc
  } else if (fbclid) {
    userData.fbc = `fb.1.${Date.now()}.${fbclid}`
  }

  const payload = {
    data: [{
      event_name: 'Lead',
      event_time: Math.floor(Date.now() / 1000),
      ...(eventId ? { event_id: eventId } : {}),
      action_source: 'website',
      event_source_url: sourceUrl || 'https://www.pvpro.ch/anfrage',
      user_data: userData,
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

async function sendOpenAIConversion({
  email,
  sourceUrl,
  eventId,
  browserRef,
  ipAddress,
  userAgent,
}: {
  email: string
  sourceUrl: string
  eventId: string
  browserRef?: string
  ipAddress?: string
  userAgent?: string
}) {
  const token = process.env.OPENAI_CONVERSIONS_API_KEY
  if (!token) return

  const user: Record<string, string[]> & {
    obref?: string
    ip_address?: string
    user_agent?: string
  } = {
    emails_sha256: [sha256(email)],
  }

  if (browserRef) user.obref = browserRef
  if (ipAddress) user.ip_address = ipAddress
  if (userAgent) user.user_agent = userAgent

  try {
    const res = await fetch(
      `https://bzr.openai.com/v1/events?pid=${encodeURIComponent(OPENAI_ADS_PIXEL_ID)}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          validate_only: false,
          events: [{
            id: eventId,
            type: 'lead_created',
            timestamp_ms: Date.now(),
            action_source: 'web',
            source_url: sourceUrl || 'https://www.pvpro.ch/anfrage',
            user,
            data: { type: 'customer_action' },
          }],
        }),
      }
    )

    if (!res.ok) {
      console.error('OpenAI Ads CAPI error:', res.status, await res.text())
    }
  } catch (err) {
    console.error('OpenAI Ads CAPI exception:', err)
  }
}

function sanitizeSourceUrl(value: string): string {
  try {
    const url = new URL(value)
    if (url.protocol !== 'https:' && url.protocol !== 'http:') {
      throw new Error('Unsupported source URL protocol')
    }
    return `${url.origin}${url.pathname}`
  } catch {
    return 'https://www.pvpro.ch/anfrage'
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const name       = body['FULL NAME']        ?? body.name       ?? ''
    const phone      = body['PHONE NUMBER']     ?? body.phone      ?? ''
    const email      = body['EMAIL']            ?? body.email      ?? ''
    const address    = body['COMPLETE ADDRESS'] ?? body.address    ?? ''
    const zip_code   = body.zip_code            ?? ''
    const utm_source = body.utm_source ?? ''
    const source     = body.source     ?? ''
    const fbclid     = body.fbclid     ?? ''
    const eventId    = body.event_id   ?? ''
    const marketingConsent = body.marketing_consent === true
    const openAiBrowserRef = request.cookies.get('__obref')?.value ?? body.openai_browser_ref ?? ''
    const fbp = request.cookies.get('_fbp')?.value
    const fbc = request.cookies.get('_fbc')?.value
    const sourceUrl  = sanitizeSourceUrl(request.headers.get('referer') ?? '')
    const forwardedFor = request.headers.get('x-forwarded-for') ?? ''
    const ipAddress = forwardedFor.split(',')[0]?.trim() || undefined
    const userAgent = request.headers.get('user-agent') ?? undefined
    const nameParts = name.trim().split(/\s+/).filter(Boolean)
    const firstName = nameParts[0]
    const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : undefined

    // Send to LeadSync and conversion APIs in parallel.
    const [leadsyncRes] = await Promise.all([
      fetch('https://lead-suryoyo.replit.app/api/webhook/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'f528ee7621a5c97665efd7561ac35a3ae0ab10eb4eef03b1',
        },
        body: JSON.stringify({ name, phone, email, address, ...(zip_code ? { zip_code } : {}), utm_source: utm_source || 'organic', ...(source ? { source } : {}), ...(fbclid ? { fbclid } : {}) }),
      }),
      sendMetaCAPI({
        email,
        phone,
        firstName,
        lastName,
        sourceUrl,
        fbclid: fbclid || undefined,
        fbp,
        fbc,
        clientIp: ipAddress,
        userAgent,
        eventId: eventId || undefined,
      }),
      marketingConsent && eventId
        ? sendOpenAIConversion({
            email,
            sourceUrl,
            eventId,
            browserRef: openAiBrowserRef || undefined,
            ipAddress,
            userAgent,
          })
        : Promise.resolve(),
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
